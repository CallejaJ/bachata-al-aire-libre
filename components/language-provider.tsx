"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "de" | "fr" | "es"

interface Translations {
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  slider: {
    title: string
  }
  pricing: {
    title: string
    subtitle: string
    individual: string
    group: string
    perPerson: string
    perSession: string
    features: string[]
    cta: string
  }
  footer: {
    contact: string
    rights: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    hero: {
      title: "HOT LATIN DANCE",
      subtitle: "Learn Salsa & Bachata with passion! Small groups (5-20 people) for personalized attention",
      cta: "Book Your Class",
    },
    slider: {
      title: "Our Dance Community",
    },
    pricing: {
      title: "Pricing",
      subtitle: "Choose the perfect option for you",
      individual: "Individual",
      group: "Group",
      perPerson: "per person",
      perSession: "per session",
      features: [
        "Professional instructor",
        "Small groups (5-20 people)",
        "All levels welcome",
        "Salsa & Bachata",
        "Fun atmosphere",
      ],
      cta: "Book Now",
    },
    footer: {
      contact: "Contact us",
      rights: "All rights reserved",
    },
  },
  de: {
    hero: {
      title: "HOT LATIN DANCE",
      subtitle: "Lerne Salsa & Bachata mit Leidenschaft! Kleine Gruppen (5-20 Personen) für persönliche Betreuung",
      cta: "Kurs Buchen",
    },
    slider: {
      title: "Unsere Tanzgemeinschaft",
    },
    pricing: {
      title: "Preise",
      subtitle: "Wählen Sie die perfekte Option für Sie",
      individual: "Einzelperson",
      group: "Gruppe",
      perPerson: "pro Person",
      perSession: "pro Sitzung",
      features: [
        "Professioneller Lehrer",
        "Kleine Gruppen (5-20 Personen)",
        "Alle Niveaus willkommen",
        "Salsa & Bachata",
        "Spaßige Atmosphäre",
      ],
      cta: "Jetzt Buchen",
    },
    footer: {
      contact: "Kontaktieren Sie uns",
      rights: "Alle Rechte vorbehalten",
    },
  },
  fr: {
    hero: {
      title: "HOT LATIN DANCE",
      subtitle:
        "Apprenez la Salsa & Bachata avec passion! Petits groupes (5-20 personnes) pour une attention personnalisée",
      cta: "Réserver Votre Cours",
    },
    slider: {
      title: "Notre Communauté de Danse",
    },
    pricing: {
      title: "Tarifs",
      subtitle: "Choisissez l'option parfaite pour vous",
      individual: "Individuel",
      group: "Groupe",
      perPerson: "par personne",
      perSession: "par session",
      features: [
        "Instructeur professionnel",
        "Petits groupes (5-20 personnes)",
        "Tous niveaux bienvenus",
        "Salsa & Bachata",
        "Ambiance amusante",
      ],
      cta: "Réserver Maintenant",
    },
    footer: {
      contact: "Contactez-nous",
      rights: "Tous droits réservés",
    },
  },
  es: {
    hero: {
      title: "HOT LATIN DANCE",
      subtitle: "¡Aprende Salsa y Bachata con pasión! Grupos reducidos (5-20 personas) para atención personalizada",
      cta: "Reserva Tu Clase",
    },
    slider: {
      title: "Nuestra Comunidad de Baile",
    },
    pricing: {
      title: "Tarifas",
      subtitle: "Elige la opción perfecta para ti",
      individual: "Individual",
      group: "Grupo",
      perPerson: "por persona",
      perSession: "por sesión",
      features: [
        "Instructor profesional",
        "Grupos reducidos (5-20 personas)",
        "Todos los niveaus bienvenidos",
        "Salsa y Bachata",
        "Ambiente divertido",
      ],
      cta: "Reservar Ahora",
    },
    footer: {
      contact: "Contáctanos",
      rights: "Todos los derechos reservados",
    },
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
