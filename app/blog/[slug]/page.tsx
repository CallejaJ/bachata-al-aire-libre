import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ShareButton } from "@/components/share-button";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post no encontrado",
    };
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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  // Lista de imágenes con IDs únicos (17 imágenes)
  const sliderImages = [
    { id: 1, path: "/images/slider/optimized/slider(1).webp" },
    { id: 2, path: "/images/slider/optimized/slider(2).webp" },
    { id: 3, path: "/images/slider/optimized/slider(3).webp" },
    { id: 4, path: "/images/slider/optimized/slider(4).webp" },
    { id: 5, path: "/images/slider/optimized/slider(5).webp" },
    { id: 6, path: "/images/slider/optimized/slider(6).webp" },
    { id: 7, path: "/images/slider/optimized/slider(7).webp" },
    { id: 8, path: "/images/slider/optimized/slider(8).webp" },
    { id: 9, path: "/images/slider/optimized/slider(9).webp" },
    { id: 10, path: "/images/slider/optimized/slider(10).webp" },
    { id: 11, path: "/images/slider/optimized/slider(11).webp" },
    { id: 12, path: "/images/slider/optimized/slider(12).webp" },
    { id: 13, path: "/images/slider/optimized/slider(13).webp" },
    { id: 14, path: "/images/slider/optimized/slider(14).webp" },
    { id: 15, path: "/images/slider/optimized/slider(15).webp" },
    { id: 16, path: "/images/slider/optimized/slider(16).webp" },
    { id: 17, path: "/images/slider/optimized/slider(17).webp" },
  ];

  // Función para convertir slug a imagen de forma determinística
  // DEBE COINCIDIR con la función en blog/page.tsx
  function slugToImageId(slug: string): number {
    let sum = 0;
    for (let i = 0; i < slug.length; i++) {
      sum += slug.charCodeAt(i);
    }
    return sum % sliderImages.length;
  }

  // Asignar imagen basada en el slug del post (consistente con la lista)
  const featuredImage = post.image || sliderImages[slugToImageId(slug)].path;

  const relatedPosts = await getRelatedPosts(slug);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <article className="pt-32 pb-12">
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
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
              {new Date(post.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readingTime} de lectura
            </span>
            <span>Por {post.author}</span>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-12 bg-muted">
            <Image
              src={featuredImage}
              alt={post.title}
              fill
              className="object-cover"
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
                <h3 className="font-bold text-lg mb-2">Sobre {post.author}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Instructor profesional de bachata y salsa en Málaga. Con más
                  de 10 años de experiencia, Carlos se dedica a compartir su
                  pasión por el baile latino a través de clases al aire libre y
                  eventos sociales.
                </p>
                <div className="mt-4 flex gap-4">
                  <Link
                    href="mailto:bachataalairelibrelibre@gmail.com"
                    className="text-sm text-primary hover:underline"
                  >
                    Contactar
                  </Link>
                  <Link
                    href="/#pricing"
                    className="text-sm text-primary hover:underline"
                  >
                    Ver clases
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
            <h2 className="text-3xl font-bold mb-8">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => {
                // Usar la misma función para asignar imagen a posts relacionados
                const relatedPostImage =
                  relatedPost.image ||
                  sliderImages[slugToImageId(relatedPost.slug)].path;

                return (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <Image
                        src={relatedPostImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
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
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para Aprender Bachata?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Únete a nuestras clases al aire libre en Málaga
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#pricing"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Ver Precios
            </Link>
            <Link
              href="tel:+34698501676"
              className="px-8 py-3 bg-card border border-border rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
