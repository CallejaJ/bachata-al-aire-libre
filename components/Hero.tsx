"use client";

import { useLanguage } from "./LanguageProvider";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

// Imágenes de portada (en /public). Desktop = horizontales, móvil = verticales.
const HERO_DESKTOP = ["/hero.webp", "/hero2.webp", "/hero3.webp"];
const HERO_MOBILE = ["/hero-v1.webp", "/hero-v2.webp", "/hero-v3.webp"];

export function Hero() {
  const { t } = useLanguage();

  // Elegimos la imagen aleatoria SOLO en el cliente, antes de renderizar
  // ninguna imagen. Así evitamos el doble cargado (imagen 0 -> aleatoria)
  // y el desajuste de hidratación. Mientras tanto se ve el fondo azul.
  const [index, setIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * HERO_DESKTOP.length));
  }, []);

  const desktopSrc = index !== null ? HERO_DESKTOP[index] : null;
  const mobileSrc = index !== null ? HERO_MOBILE[index] : null;

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - OPTIMIZADO */}
      {/* Fondo azul base (del propio diseño) para que nunca se vea gris */}
      <div className="absolute inset-0 z-0 bg-blue-950">
        {mobileSrc && (
          /* Móvil: imagen vertical */
          <Image
            src={mobileSrc}
            alt="Clases de bachata al aire libre en Málaga con Carlos Yépez"
            fill
            priority
            quality={85}
            onLoad={() => setLoaded(true)}
            className={`object-cover transition-opacity duration-700 md:hidden ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="100vw"
          />
        )}
        {desktopSrc && (
          /* Desktop: imagen horizontal */
          <Image
            src={desktopSrc}
            alt="Clases de bachata al aire libre en Málaga con Carlos Yépez"
            fill
            priority
            quality={85}
            onLoad={() => setLoaded(true)}
            className={`hidden object-cover transition-opacity duration-700 md:block ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-800/40 to-blue-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-balance font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] text-3xl md:text-5xl lg:text-6xl">
          {t.hero.metaTitle}
        </h1>
        <p className="mb-10 max-w-2xl text-balance text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] md:text-2xl">
          {t.hero.subtitle}
        </p>
        {/* CTA Button - Only visible on mobile */}
        <Button
          size="lg"
          onClick={scrollToPricing}
          className="md:hidden bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 font-bold shadow-[0_8px_24px_rgba(0,0,0,0.3)] transform transition hover:scale-105 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
        >
          {t.hero.cta}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white drop-shadow-lg">
          <span className="text-sm font-medium">Scroll</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
