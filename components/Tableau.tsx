"use client";

import { useLanguage } from "./LanguageProvider";
import { useState } from "react";
import { X } from "lucide-react";

interface Photo {
  id: string;
  src: string;
  alt: string;
  rotation: number;
}

export function Tableau() {
  const { t } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      id: "1",
      src: "/images/tableau/bachatamalaga.jpg",
      alt: "Bachata Málaga 1",
      rotation: -3,
    },
    {
      id: "2",
      src: "/images/tableau/bachatamalaga2.png",
      alt: "Bachata Málaga 2",
      rotation: 2,
    },
    {
      id: "3",
      src: "/images/tableau/bachatamalaga3.png",
      alt: "Bachata Málaga 3",
      rotation: -4,
    },
    {
      id: "4",
      src: "/images/tableau/bachatamalaga4.png",
      alt: "Bachata Málaga 4",
      rotation: 3,
    },
    // Nuevas imágenes añadidas
    {
      id: "5",
      src: "/images/tableau/bachatamalaga5.png",
      alt: "Bachata Málaga 5",
      rotation: -2,
    },
    {
      id: "6",
      src: "/images/tableau/bachatamalaga6.png",
      alt: "Bachata Málaga 6",
      rotation: 2,
    },
    {
      id: "7",
      src: "/images/tableau/bachatamalaga7.png",
      alt: "Bachata Málaga 7",
      rotation: -3,
    },
    {
      id: "8",
      src: "/images/tableau/bachatamalaga8.png",
      alt: "Bachata Málaga 8",
      rotation: 3,
    },
    {
      id: "9",
      src: "/images/tableau/bachatamalaga9.png",
      alt: "Bachata Málaga 9",
      rotation: 0,
    },
    // 3 nuevas imágenes PNG añadidas
    {
      id: "10",
      src: "/images/tableau/bachatamalaga10.png",
      alt: "Bachata Málaga 10",
      rotation: -2,
    },
    {
      id: "11",
      src: "/images/tableau/bachatamalaga11.png",
      alt: "Bachata Málaga 11",
      rotation: 2,
    },
    {
      id: "12",
      src: "/images/tableau/bachatamalaga12.png",
      alt: "Bachata Málaga 12",
      rotation: 1,
    },
    // Espacios vacíos para el resto
    ...Array(0)
      .fill(null)
      .map((_, i) => ({
        id: `${i + 13}`,
        src: "",
        alt: "",
        rotation: 0,
      })),
  ];

  return (
    <section className="bg-gradient-to-b from-muted to-background py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-balance font-bold text-foreground text-4xl md:text-5xl">
          {t.slider.title}
        </h2>

        {/* Tablón de fotos */}
        <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Textura de corcho (opcional) */}
          <div
            className="absolute inset-0 opacity-10 rounded-3xl"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          {/* Grid de fotos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {photos
              .filter((photo) => photo.src)
              .map((photo) => (
                <div
                  key={photo.id}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  {/* Chincheta */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg">
                      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-red-400 to-red-600"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/30"></div>
                    </div>
                    {/* Sombra de la chincheta */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/20 blur-sm rounded-full"></div>
                  </div>

                  {/* Foto tipo Polaroid */}
                  <div
                    className="bg-white p-3 pb-8 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:z-20"
                    style={{
                      transform: `rotate(${photo.rotation}deg)`,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Cinta adhesiva (opcional, aparece en hover) */}
                  <div className="absolute -top-4 -right-4 w-16 h-8 bg-amber-100/60 dark:bg-amber-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -rotate-45 shadow-md"></div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Modal de foto ampliada */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            className="max-w-4xl w-full h-auto max-h-[90vh] object-contain rounded-xl shadow-2xl"
            style={{ margin: "0 auto" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
