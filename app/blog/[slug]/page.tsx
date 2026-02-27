import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShareButton } from "@/components/ShareButton";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { Metadata } from "next";

const blogPostUI = {
  es: {
    backToBlog: "Volver al blog",
    readingTime: (t: string) => `${t} de lectura`,
    by: "Por",
    about: "Sobre",
    authorBio:
      "Instructor experimentado de bachata y salsa en Málaga. Con más de 10 años de experiencia, Carlos se dedica a compartir su pasión por el baile latino a través de clases al aire libre y eventos sociales.",
    contact: "Contactar",
    seeClasses: "Ver clases",
    relatedPosts: "Artículos Relacionados",
    ctaTitle: "¿Listo para Aprender Bachata?",
    ctaSubtitle: "Únete a nuestras clases al aire libre en Málaga",
    seePrice: "Ver Precios",
    contactBtn: "Contactar",
    notFound: "Post no encontrado",
    dateLocale: "es-ES",
  },
  en: {
    backToBlog: "Back to blog",
    readingTime: (t: string) => `${t} read`,
    by: "By",
    about: "About",
    authorBio:
      "Experienced bachata and salsa instructor in Málaga. With over 10 years of experience, Carlos shares his passion for Latin dance through outdoor classes and social events.",
    contact: "Contact",
    seeClasses: "See classes",
    relatedPosts: "Related Articles",
    ctaTitle: "Ready to Learn Bachata?",
    ctaSubtitle: "Join our outdoor classes in Málaga",
    seePrice: "See Prices",
    contactBtn: "Contact",
    notFound: "Post not found",
    dateLocale: "en-US",
  },
  de: {
    backToBlog: "Zurück zum Blog",
    readingTime: (t: string) => `${t} Lesezeit`,
    by: "Von",
    about: "Über",
    authorBio:
      "Erfahrener Bachata- und Salsa-Lehrer in Málaga. Mit über 10 Jahren Erfahrung teilt Carlos seine Leidenschaft für lateinamerikanischen Tanz durch Open-Air-Kurse und gesellschaftliche Veranstaltungen.",
    contact: "Kontakt",
    seeClasses: "Kurse ansehen",
    relatedPosts: "Ähnliche Artikel",
    ctaTitle: "Bereit, Bachata zu lernen?",
    ctaSubtitle: "Komm zu unseren Open-Air-Kursen in Málaga",
    seePrice: "Preise ansehen",
    contactBtn: "Kontakt",
    notFound: "Beitrag nicht gefunden",
    dateLocale: "de-DE",
  },
  fr: {
    backToBlog: "Retour au blog",
    readingTime: (t: string) => `${t} de lecture`,
    by: "Par",
    about: "À propos de",
    authorBio:
      "Instructeur expérimenté de bachata et salsa à Málaga. Avec plus de 10 ans d'expérience, Carlos partage sa passion pour la danse latine à travers des cours en plein air et des événements sociaux.",
    contact: "Contacter",
    seeClasses: "Voir les cours",
    relatedPosts: "Articles Connexes",
    ctaTitle: "Prêt à apprendre la Bachata ?",
    ctaSubtitle: "Rejoignez nos cours en plein air à Málaga",
    seePrice: "Voir les tarifs",
    contactBtn: "Contacter",
    notFound: "Article non trouvé",
    dateLocale: "fr-FR",
  },
} as const;

type SupportedLang = keyof typeof blogPostUI;

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { lang } = await searchParams;
  const resolvedLang = (lang as SupportedLang) ?? "es";
  const ui = blogPostUI[resolvedLang] ?? blogPostUI.es;
  const post = await getPostBySlug(slug, resolvedLang);

  if (!post) {
    return { title: ui.notFound };
  }

  return {
    title: `${post.title} | Blog Bachata al Aire Libre`,
    description: post.excerpt,
    keywords: [...post.tags, "bachata", "salsa", "málaga", "baile"],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const { lang } = await searchParams;
  const resolvedLang = (lang as SupportedLang) ?? "es";
  const ui = blogPostUI[resolvedLang] ?? blogPostUI.es;

  const post = await getPostBySlug(slug, resolvedLang);
  if (!post) {
    notFound();
  }

  const featuredImage = "/logo/logo-trans.png";
  const relatedPosts = await getRelatedPosts(slug, resolvedLang);

  const langParam = resolvedLang !== "es" ? `?lang=${resolvedLang}` : "";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <article className="pt-32 pb-12">
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          {/* Back Button */}
          <Link
            href={`/blog${langParam}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {ui.backToBlog}
          </Link>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString(ui.dateLocale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {ui.readingTime(post.readingTime)}
            </span>
            <span>
              {ui.by} {post.author}
            </span>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-12 bg-muted">
            <Image
              src={featuredImage}
              alt={post.title}
              fill
              className="object-contain filter-blue"
              priority
            />
          </div>

          {/* Share Button */}
          <div className="mb-8 flex justify-end">
            <ShareButton title={post.title} excerpt={post.excerpt} />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-p:mb-6 prose-p:leading-relaxed
              prose-ul:my-6 prose-ul:space-y-3
              prose-ol:my-6 prose-ol:space-y-3
              prose-li:my-2
              prose-h2:mt-12 prose-h2:mb-6
              prose-h3:mt-8 prose-h3:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <Image
                  src="/logo/logo-trans.png"
                  alt={post.author}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  {ui.about} {post.author}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {ui.authorBio}
                </p>
                <div className="mt-4 flex gap-4">
                  <Link
                    href="mailto:bachataalairelibremalaga@gmail.com"
                    className="text-sm text-primary hover:underline"
                  >
                    {ui.contact}
                  </Link>
                  <Link
                    href="/#pricing"
                    className="text-sm text-primary hover:underline"
                  >
                    {ui.seeClasses}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-card/30">
          <div className="container mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8">{ui.relatedPosts}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => {
                const relatedPostImage =
                  relatedPost.image || "/logo/logo-trans.png";

                return (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}${langParam}`}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <Image
                        src={relatedPostImage}
                        alt={relatedPost.title}
                        fill
                        className="object-contain filter-blue group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="mt-3 text-xs text-muted-foreground">
                        {relatedPost.readingTime}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-4xl px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{ui.ctaTitle}</h2>
          <p className="text-lg text-muted-foreground mb-8">{ui.ctaSubtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#pricing"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              {ui.seePrice}
            </Link>
            <Link
              href="tel:+34698501676"
              className="px-8 py-3 bg-card border border-border rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              {ui.contactBtn}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
