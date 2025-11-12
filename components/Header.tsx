"use client";

import { useLanguage } from "./LanguageProvider";
import { Button } from "./ui/button";
import { LanguageSelector } from "./LanguageSelector";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export function Header() {
  const { t, setLanguage, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    // Si estamos en la home, hacer scroll
    if (pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, navegar a home y luego scroll
      router.push(`/#${sectionId}`);
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    router.push("/");
  };

  const handleBlogClick = () => {
    setIsMobileMenuOpen(false);
    router.push("/blog");
  };

  const navItems = [
    {
      label: t.howItWorks.title || "Cómo Funciona",
      action: () => handleNavClick("como-funciona"),
    },
    {
      label: t.benefits.title || "Beneficios",
      action: () => handleNavClick("beneficios"),
    },
    {
      label: t.pricing.title || "Precios",
      action: () => handleNavClick("pricing"),
    },
    { label: t.footer.blog || "Blog", action: () => handleBlogClick() },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-gray-900/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 z-50">
            <button
              aria-label="inicio"
              onClick={handleLogoClick}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo/logo-trans.png"
                alt="Logo"
                width={64}
                height={64}
                className="h-8 w-8 md:h-10 md:w-10 invert brightness-0 drop-shadow-lg"
              />
            </button>
            <span className="text-base md:text-xl font-bold text-white drop-shadow-lg">
              Carlos Yépez
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side - CTA + Language + Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* CTA Button - Hidden on mobile */}
            <Button
              onClick={() => handleNavClick("pricing")}
              variant="outline"
              size="sm"
              className="hidden lg:flex bg-primary hover:bg-primary/90 text-primary-foreground border-0 font-semibold text-sm px-5 shadow-lg"
            >
              {t.hero.cta}
            </Button>

            {/* Language Selector - solo en desktop */}
            <div className="hidden lg:block">
              <LanguageSelector />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-1 border-t border-white/10 pt-4">
            {/* Idiomas en menú hamburguesa - estilo borde blanco, fondo transparente */}
            <div className="flex gap-2 mb-2 justify-center">
              {["es", "en", "de", "fr"].map((lang) => (
                <button
                  key={lang}
                  className={`px-3 py-1 rounded font-semibold text-xs border border-white text-white bg-transparent hover:bg-white/10 transition ${
                    lang === t.hero.cta.slice(-2).toLowerCase() ||
                    lang === language
                      ? "bg-white/10 border-2"
                      : ""
                  }`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setLanguage(lang as any);
                  }}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="block w-full text-left px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
            {/* CTA in Mobile Menu - color cambiado a azul sólido */}
            <button
              onClick={() => handleNavClick("pricing")}
              className="block w-full text-left px-4 py-3 mt-2 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all border border-blue-700 shadow-lg"
            >
              {t.hero.cta}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
