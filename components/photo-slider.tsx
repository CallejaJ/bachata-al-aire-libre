"use client";

import { useLanguage } from "./language-provider";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";

interface Photo {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string | null;
}

export function PhotoSlider() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photos] = useState<Photo[]>([
    {
      id: "1",
      urls: {
        regular: "/images/slider/optimized/slider(1).webp",
        small: "/images/slider/optimized/slider(1).webp",
      },
      alt_description: "Salsa dance class",
    },
    {
      id: "2",
      urls: {
        regular: "/images/slider/optimized/slider(2).webp",
        small: "/images/slider/optimized/slider(2).webp",
      },
      alt_description: "Bachata dance",
    },
    {
      id: "3",
      urls: {
        regular: "/images/slider/optimized/slider(3).webp",
        small: "/images/slider/optimized/slider(3).webp",
      },
      alt_description: "Dance performance",
    },
    {
      id: "4",
      urls: {
        regular: "/images/slider/optimized/slider(4).webp",
        small: "/images/slider/optimized/slider(4).webp",
      },
      alt_description: "Latin dance",
    },
    {
      id: "5",
      urls: {
        regular: "/images/slider/optimized/slider(5).webp",
        small: "/images/slider/optimized/slider(5).webp",
      },
      alt_description: "Salsa couple",
    },
    {
      id: "6",
      urls: {
        regular: "/images/slider/optimized/slider(6).webp",
        small: "/images/slider/optimized/slider(6).webp",
      },
      alt_description: "Dance lessons",
    },
    {
      id: "7",
      urls: {
        regular: "/images/slider/optimized/slider(7).webp",
        small: "/images/slider/optimized/slider(7).webp",
      },
      alt_description: "Bachata couple",
    },
    {
      id: "8",
      urls: {
        regular: "/images/slider/optimized/slider(8).webp",
        small: "/images/slider/optimized/slider(8).webp",
      },
      alt_description: "Dance community",
    },
    {
      id: "9",
      urls: {
        regular: "/images/slider/optimized/slider(9).webp",
        small: "/images/slider/optimized/slider(9).webp",
      },
      alt_description: "Salsa party",
    },
    {
      id: "10",
      urls: {
        regular: "/images/slider/optimized/slider(10).webp",
        small: "/images/slider/optimized/slider(10).webp",
      },
      alt_description: "Bachata class outdoors",
    },
    {
      id: "11",
      urls: {
        regular: "/images/slider/optimized/slider(11).webp",
        small: "/images/slider/optimized/slider(11).webp",
      },
      alt_description: "Dance students",
    },
    {
      id: "12",
      urls: {
        regular: "/images/slider/optimized/slider(12).webp",
        small: "/images/slider/optimized/slider(12).webp",
      },
      alt_description: "Outdoor dance session",
    },
    {
      id: "13",
      urls: {
        regular: "/images/slider/optimized/slider(13).webp",
        small: "/images/slider/optimized/slider(13).webp",
      },
      alt_description: "Dancing together",
    },
    {
      id: "14",
      urls: {
        regular: "/images/slider/optimized/slider(14).webp",
        small: "/images/slider/optimized/slider(14).webp",
      },
      alt_description: "Salsa moves",
    },
    {
      id: "15",
      urls: {
        regular: "/images/slider/optimized/slider(15).webp",
        small: "/images/slider/optimized/slider(15).webp",
      },
      alt_description: "Dance practice",
    },
    {
      id: "16",
      urls: {
        regular: "/images/slider/optimized/slider(16).webp",
        small: "/images/slider/optimized/slider(16).webp",
      },
      alt_description: "Group dancing",
    },
  ]);

  useEffect(() => {
    // Solo iniciar el intervalo si hay fotos cargadas
    if (photos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <section className="bg-muted py-20 px-4">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-balance font-bold text-foreground text-4xl md:text-5xl">
          {t.slider.title}
        </h2>

        <div className="relative mx-auto max-w-6xl">
              {/* Main Slider con flechas laterales */}
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={photo.urls.regular}
                  alt={photo.alt_description || `Dance photo ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
                {/* Flechas de navegación, visibles siempre */}
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-lg z-10"
                  onClick={() => setCurrentIndex((currentIndex - 1 + photos.length) % photos.length)}
                  aria-label="Anterior"
                >
                  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-lg z-10"
                  onClick={() => setCurrentIndex((currentIndex + 1) % photos.length)}
                  aria-label="Siguiente"
                >
                  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
          </div>

          {/* Thumbnails */}
              <div className="mt-6 grid grid-cols-3 gap-4 md:grid-cols-6 hidden md:grid">
            {photos.map((photo, index) => (
              <Card
                key={photo.id}
                className={`cursor-pointer overflow-hidden transition-all hover:scale-105 shadow-md hover:shadow-lg ${
                  index === currentIndex ? "ring-4 ring-primary shadow-xl" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={photo.urls.small}
                  alt={`Thumbnail ${index + 1}`}
                  className="aspect-video w-full object-cover"
                />
              </Card>
            ))}
          </div>

              {/* Navigation Dots removed */}
        </div>
      </div>
    </section>
  );
}
