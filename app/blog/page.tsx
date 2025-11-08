import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getAllPosts, getAllTags } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Tag } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Bachata al Aire Libre | Consejos, Tutoriales y Eventos",
  description:
    "Aprende bachata con nuestros artículos: técnicas, beneficios para la salud, los mejores lugares en Málaga y más. Todo sobre bachata y salsa.",
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

export default async function BlogPage() {
  const posts = await getAllPosts();
  const tags = await getAllTags();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center">
            Blog de Bachata
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Consejos, tutoriales y eventos para amantes de la bachata y salsa en
            Málaga
          </p>

          {/* Tags Filter */}
          {tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              <Link
                href="/blog"
                className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Todos
              </Link>
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag.toLowerCase()}`}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:bg-primary/10 transition-colors"
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
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">Aún no hay artículos</h2>
              <p className="text-muted-foreground">
                Vuelve pronto para leer nuestro contenido
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`/blog/${post.slug}`}>
                    {/* Imagen aleatoria solo en el header visual */}
                    <div className="w-full h-32 md:h-40 bg-muted flex items-center justify-center overflow-hidden">
                      <Image
                        src={(() => {
                          const sliderImages = [
                            "/images/slider/slider (1).jpg",
                            "/images/slider/slider (2).jpg",
                            "/images/slider/slider (3).jpg",
                            "/images/slider/slider (4).jpg",
                            "/images/slider/slider (5).jpeg",
                            "/images/slider/slider (6).jpg",
                            "/images/slider/slider (7).jpg",
                            "/images/slider/slider (8).jpeg",
                            "/images/slider/slider (9).jpg",
                            "/images/slider/slider (10).jpeg",
                            "/images/slider/slider (11).jpeg",
                            "/images/slider/slider (12).jpeg",
                            "/images/slider/slider (13).jpeg",
                            "/images/slider/slider (14).jpeg",
                            "/images/slider/slider (15).jpeg",
                            "/images/slider/slider (16).jpeg",
                            "/images/slider/slider (17).jpeg",
                            "/images/slider/slider (18).jpeg",
                          ];
                          return post.image || sliderImages[Math.floor(Math.random() * sliderImages.length)];
                        })()}
                        alt={post.title}
                        width={400}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Tags */}
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.slice(0, 2).map((tag) => (
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
                          {new Date(post.date).toLocaleDateString("es-ES", {
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
