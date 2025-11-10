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

interface BlogPageProps {
  searchParams: Promise<{ tag?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const posts = await getAllPosts();
  const tags = await getAllTags();

  // Obtener el tag activo desde searchParams
  const params = await searchParams;
  const activeTag = params.tag || "";

  // Filtrar posts por tag activo (case-insensitive)
  const filteredPosts = activeTag
    ? posts.filter((post) =>
        post.tags.some((tag) => tag.toLowerCase() === activeTag.toLowerCase())
      )
    : posts;

  // Asignar imágenes aleatorias únicas a cada post
  const sliderImages = [
    "/images/slider/optimized/slider(1).webp",
    "/images/slider/optimized/slider(2).webp",
    "/images/slider/optimized/slider(3).webp",
    "/images/slider/optimized/slider(4).webp",
    "/images/slider/optimized/slider(5).webp",
    "/images/slider/optimized/slider(6).webp",
    "/images/slider/optimized/slider(7).webp",
    "/images/slider/optimized/slider(8).webp",
    "/images/slider/optimized/slider(9).webp",
    "/images/slider/optimized/slider(10).webp",
    "/images/slider/optimized/slider(11).webp",
    "/images/slider/optimized/slider(12).webp",
    "/images/slider/optimized/slider(13).webp",
    "/images/slider/optimized/slider(14).webp",
    "/images/slider/optimized/slider(15).webp",
    "/images/slider/optimized/slider(16).webp",
    "/images/slider/optimized/slider(17).webp",
  ];

  // Mezclar imágenes y asignar una única por post
  function shuffle<T>(array: T[]): T[] {
    let currentIndex: number = array.length;
    let randomIndex: number;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  const shuffledImages = shuffle([...sliderImages]);

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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeTag === ""
                    ? "bg-primary text-primary-foreground border-primary shadow"
                    : "bg-card border-border text-foreground hover:bg-primary/10 hover:border-primary"
                }`}
                style={{ minWidth: 90, textAlign: "center" }}
              >
                Todos
              </Link>
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag.toLowerCase())}`}
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
                {activeTag
                  ? `No hay artículos con el tag "${activeTag}"`
                  : "Aún no hay artículos"}
              </h2>
              <p className="text-muted-foreground mb-6">
                {activeTag
                  ? "Intenta con otro tag o"
                  : "Vuelve pronto para leer nuestro contenido"}
              </p>
              {activeTag && (
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Ver todos los artículos
                </Link>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <article
                  key={post.slug}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`/blog/${post.slug}`}>
                    {/* Imagen aleatoria única por post */}
                    <div className="w-full h-32 md:h-40 bg-muted flex items-center justify-center overflow-hidden">
                      <Image
                        src={
                          post.image ||
                          shuffledImages[idx % shuffledImages.length]
                        }
                        alt={post.title}
                        width={400}
                        height={160}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
