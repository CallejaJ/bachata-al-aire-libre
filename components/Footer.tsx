"use client";

import { useLanguage } from "./LanguageProvider";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-8 px-6 md:px-12">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid gap-12 md:grid-cols-5 md:items-start">
          {/* Logo */}
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/logo/logo-trans.png"
              alt="Bachata al Aire Libre"
              width={120}
              height={120}
              className="invert brightness-0 drop-shadow-lg"
            />
          </div>

          {/* Title */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              {t.footer.title}
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h4 className="mb-3 text-base md:text-lg font-semibold opacity-90">
              {t.footer.contact}
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 opacity-70 mt-0.5" />
                <a
                  href="mailto:bachataalairelibrelibre@gmail.com"
                  className="text-sm hover:underline opacity-80 hover:opacity-100 break-all"
                >
                  bachataalairelibre
                  <wbr />
                  libre@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 opacity-70" />
                <span className="text-sm opacity-80">+34 698 50 16 76</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 opacity-70" />
                <span className="text-sm opacity-80">Málaga, Spain</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-left">
            <h4 className="mb-3 text-base md:text-lg font-semibold opacity-90">
              Social Media
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61583155394342"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110 shadow-sm"
                aria-label="Facebook"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bachataalairelibre/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110 shadow-sm"
                aria-label="Instagram"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@bachataalairelibre"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110 shadow-sm"
                aria-label="TikTok"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="text-left">
            <h4 className="mb-3 text-base md:text-lg font-semibold opacity-90">
              {t.footer.links}
            </h4>
            <div className="space-y-2">
              <div>
                <a
                  href="/blog"
                  className="text-sm hover:underline opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.footer.blog}
                </a>
              </div>
              <div>
                <a
                  href="/aviso-legal"
                  className="text-sm hover:underline opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.legal.legalNotice}
                </a>
              </div>
              <div>
                <a
                  href="/privacidad"
                  className="text-sm hover:underline opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.legal.privacy}
                </a>
              </div>
              <div>
                <a
                  href="/cookies"
                  className="text-sm hover:underline opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.legal.cookies}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm opacity-80">
            © 2025 Bachata al Aire Libre - Carlos Yépez. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
