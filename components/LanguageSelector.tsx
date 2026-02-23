"use client";

import { useLanguage } from "./LanguageProvider";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang as any);
    if (pathname.startsWith("/blog")) {
      const newUrl = lang === "es" ? pathname : `${pathname}?lang=${lang}`;
      router.push(newUrl);
    }
  };

  return (
    <div className="flex gap-1 md:gap-2">
      {(["es", "en", "de", "fr"] as const).map((lang) => (
        <Button
          key={lang}
          variant={language === lang ? "default" : "outline"}
          size="sm"
          onClick={() => handleLanguageChange(lang)}
          className="font-semibold text-xs px-2 md:px-3 bg-white/10 hover:bg-white/20 border-white/30"
        >
          {lang.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
