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

  // Empieza con la primera (evita desajuste de hidratación) y elige
  // una aleatoria al montar en el cliente. Se usa el mismo índice para
  // que la escena de desktop y móvil sea coherente.
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * HERO_DESKTOP.length));
  }, []);

  const desktopSrc = HERO_DESKTOP[index];
  const mobileSrc = HERO_MOBILE[index];

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - OPTIMIZADO */}
      <div className="absolute inset-0 z-0">
        {/* Móvil: imagen vertical */}
        <Image
          key={mobileSrc}
          src={mobileSrc}
          alt="Clases de bachata al aire libre en Málaga con Carlos Yépez"
          fill
          priority
          quality={85}
          className="object-cover md:hidden"
          sizes="100vw"
        />
        {/* Desktop: imagen horizontal */}
        <Image
          key={desktopSrc}
          src={desktopSrc}
          alt="Clases de bachata al aire libre en Málaga con Carlos Yépez"
          fill
          priority
          quality={85}
          className="hidden object-cover md:block"
          sizes="100vw"
        />
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
