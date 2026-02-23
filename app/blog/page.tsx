import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllPosts, getAllTags } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Tag } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Bachata al Aire Libre | Consejos, Tutoriales y Eventos",
  description:
    "Clases de salsa y bachata al aire libre en Málaga con Carlos Yépez. Grupos reducidos (5-20 personas) para atención personalizada. ¡Aprende a bailar con pasión!",
  keywords: [
    "blog bachata",
    "tutoriales bachata",
    "aprender bachata",
    "eventos málaga",
    "clases bachata",
  ],
  openGraph: {
    title: "Blog - Bachata al Aire Libre",
    description: "Consejos, tutoriales y eventos de bachata y salsa en Málaga",
    type: "website",
  },
};

const blogUI = {
  es: {
    title: "Blog de Bachata",
    subtitle: "Consejos, tutoriales y eventos para amantes de la bachata y salsa en Málaga",
    all: "Todos",
    noPostsTag: (tag: string) => `No hay artículos con el tag "${tag}"`,
    noPosts: "Aún no hay artículos",
    tryOtherTag: "Intenta con otro tag o",
    comingSoon: "Vuelve pronto para leer nuestro contenido",
    seeAll: "Ver todos los artículos",
    dateLocale: "es-ES",
  },
  en: {
    title: "Bachata Blog",
    subtitle: "Tips, tutorials and events for bachata and salsa lovers in Málaga",
    all: "All",
    noPostsTag: (tag: string) => `No articles found for tag "${tag}"`,
    noPosts: "No articles yet",
    tryOtherTag: "Try another tag or",
    comingSoon: "Check back soon for our content",
    seeAll: "See all articles",
    dateLocale: "en-US",
  },
  de: {
    title: "Bachata Blog",
    subtitle: "Tipps, Tutorials und Events für Bachata- und Salsa-Liebhaber in Málaga",
    all: "Alle",
    noPostsTag: (tag: string) => `Keine Artikel mit dem Tag „${tag}"`,
    noPosts: "Noch keine Artikel",
    tryOtherTag: "Versuche einen anderen Tag oder",
    comingSoon: "Schau bald wieder vorbei",
    seeAll: "Alle Artikel anzeigen",
    dateLocale: "de-DE",
  },
  fr: {
    title: "Blog Bachata",
    subtitle: "Conseils, tutoriels et événements pour les amateurs de bachata et salsa à Málaga",
    all: "Tous",
    noPostsTag: (tag: string) => `Aucun article avec le tag « ${tag} »`,
    noPosts: "Pas encore d'articles",
    tryOtherTag: "Essayez un autre tag ou",
    comingSoon: "Revenez bientôt pour notre contenu",
    seeAll: "Voir tous les articles",
    dateLocale: "fr-FR",
  },
} as const;

type SupportedLang = keyof typeof blogUI;

interface BlogPageProps {
  searchParams: Promise<{ tag?: string; lang?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const lang = (params.lang as SupportedLang) ?? "es";
  const ui = blogUI[lang] ?? blogUI.es;

  const posts = await getAllPosts(lang);
  const tags = await getAllTags(lang);

  const activeTag = params.tag || "";

  const filteredPosts = activeTag
    ? posts.filter((post) =>
        post.tags.some((tag) => tag.toLowerCase() === activeTag.toLowerCase())
      )
    : posts;

  const featuredImage = "/logo/logo-trans.png";

  const langParam = lang !== "es" ? `?lang=${lang}` : "";
  const tagPrefix = lang !== "es" ? `?lang=${lang}&tag=` : `?tag=`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center">
            {ui.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            {ui.subtitle}
          </p>

          {/* Tags Filter */}
          {tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              <Link
                href={`/blog${langParam}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeTag === ""
                    ? "bg-primary text-primary-foreground border-primary shadow"
                    : "bg-card border-border text-foreground hover:bg-primary/10 hover:border-primary"
                }`}
                style={{ minWidth: 90, textAlign: "center" }}
              >
                {ui.all}
              </Link>
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog${tagPrefix}${encodeURIComponent(tag.toLowerCase())}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    activeTag.toLowerCase() === tag.toLowerCase()
                      ? "bg-primary text-primary-foreground border-primary shadow"
                      : "bg-card border-border text-foreground hover:bg-primary/10 hover:border-primary"
                  }`}
                  style={{ minWidth: 90, textAlign: "center" }}
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Posts Grid */}
      <main className="flex-1 px-6 md:px-12 lg:px-16 xl:px-20 py-12">
        <div className="container mx-auto max-w-7xl">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">
                {activeTag ? ui.noPostsTag(activeTag) : ui.noPosts}
              </h2>
              <p className="text-muted-foreground mb-6">
                {activeTag ? ui.tryOtherTag : ui.comingSoon}
              </p>
              {activeTag && (
                <Link
                  href={`/blog${langParam}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  {ui.seeAll}
                </Link>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`/blog/${post.slug}${langParam}`}>
                    {/* Logo con filtro azul */}
                    <div className="relative w-full h-32 md:h-40 bg-muted flex items-center justify-center overflow-hidden">
                      <Image
                        src={post.image || featuredImage}
                        alt={post.title}
                        fill
                        className="object-contain filter-blue group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Tags */}
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.slice(0, 3).map((tag: string) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                            >
                              <Tag className="h-3 w-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString(ui.dateLocale, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readingTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
