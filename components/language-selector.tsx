"use client"

import { useLanguage } from "./language-provider"
import { Button } from "./ui/button"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-2">
      <Button
        variant={language === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("es")}
        className="font-semibold"
      >
        ES
      </Button>
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="font-semibold"
      >
        EN
      </Button>
      <Button
        variant={language === "de" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("de")}
        className="font-semibold"
      >
        DE
      </Button>
      <Button
        variant={language === "fr" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("fr")}
        className="font-semibold"
      >
        FR
      </Button>
    </div>
  )
}
