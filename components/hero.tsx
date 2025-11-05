"use client"

import { useLanguage } from "./language-provider"
import { Button } from "./ui/button"
import { LanguageSelector } from "./language-selector"

export function Hero() {
  const { t } = useLanguage()

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover">
          <source src="/salsa-dancing-couple-energetic-movement.jpg" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-800/40 to-blue-950/70" />
      </div>

      {/* Language Selector */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSelector />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Giant Banana Logo */}
        <div className="mb-8 animate-bounce-slow drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <div className="text-[12rem] leading-none md:text-[16rem]">🍌</div>
        </div>

        <h1 className="mb-6 text-balance font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] text-5xl md:text-7xl lg:text-8xl">
          {t.hero.title}
        </h1>

        <p className="mb-10 max-w-2xl text-balance text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] md:text-2xl">
          {t.hero.subtitle}
        </p>

        <Button
          size="lg"
          onClick={scrollToPricing}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 font-bold shadow-[0_8px_24px_rgba(0,0,0,0.3)] transform transition hover:scale-105 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
        >
          {t.hero.cta}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white drop-shadow-lg">
          <span className="text-sm font-medium">Scroll</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
