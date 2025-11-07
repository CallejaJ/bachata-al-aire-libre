"use client";

import { useLanguage } from "./language-provider";
import { Button } from "./ui/button";
import { LanguageSelector } from "./language-selector";
import { Music } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePricingClick = () => {
    // Si estamos en la home, hacer scroll
    if (pathname === "/") {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, navegar a home y luego scroll
      router.push("/#pricing");
    }
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Music className="h-6 w-6 md:h-8 md:w-8 text-white drop-shadow-lg" />
          <span className="text-base md:text-xl font-bold text-white drop-shadow-lg">
            Carlos Yépez
          </span>
        </button>

        {/* Navigation - CTA and Language Selector */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            onClick={handlePricingClick}
            variant="outline"
            size="sm"
            className="hidden md:flex bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-semibold text-xs md:text-sm px-3 md:px-4"
          >
            {t.hero.cta}
          </Button>

          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
