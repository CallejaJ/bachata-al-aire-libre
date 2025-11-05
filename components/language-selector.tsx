"use client";

import { useLanguage } from "./language-provider";
import { Button } from "./ui/button";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1 md:gap-2">
      <Button
        variant={language === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("es")}
        className="font-semibold text-xs px-2 md:px-3 bg-white/10 hover:bg-white/20 border-white/30"
      >
        ES
      </Button>
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="font-semibold text-xs px-2 md:px-3 bg-white/10 hover:bg-white/20 border-white/30"
      >
        EN
      </Button>
      <Button
        variant={language === "de" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("de")}
        className="font-semibold text-xs px-2 md:px-3 bg-white/10 hover:bg-white/20 border-white/30"
      >
        DE
      </Button>
      <Button
        variant={language === "fr" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("fr")}
        className="font-semibold text-xs px-2 md:px-3 bg-white/10 hover:bg-white/20 border-white/30"
      >
        FR
      </Button>
    </div>
  );
}
