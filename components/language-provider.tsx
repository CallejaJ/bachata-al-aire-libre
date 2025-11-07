"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "de" | "fr" | "es";

interface Translations {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  slider: {
    title: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step1: {
      title: string;
      description: string;
    };
    step2: {
      title: string;
      description: string;
    };
    step3: {
      title: string;
      description: string;
    };
    cta: string;
  };
  benefits: {
    title: string;
    subtitle: string;
    benefit1: {
      title: string;
      description: string;
    };
    benefit2: {
      title: string;
      description: string;
    };
    benefit3: {
      title: string;
      description: string;
    };
    benefit4: {
      title: string;
      description: string;
    };
    footer: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    individual: string;
    private: string;
    privateDesc: string;
    perPerson: string;
    perSession: string;
    perHour: string;
    freePartner: string;
    privatePromo: string;
    features: string[];
    privateFeatures: string[];
    cta: string;
  };
  footer: {
    contact: string;
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    hero: {
      title: "OUTDOOR BACHATA",
      subtitle:
        "Learn Salsa & Bachata with passion! Small groups (5-20 people) for personalized attention",
      cta: "Book Your Class",
    },
    slider: {
      title: "Our Dance Community",
    },
    howItWorks: {
      title: "How It Works?",
      subtitle:
        "A workshop-class designed for everyone to enjoy, regardless of your level",
      step1: {
        title: "Basic Steps",
        description:
          "We welcome you and teach the fundamentals of salsa and bachata, perfect for beginners just starting out.",
      },
      step2: {
        title: "New Choreography",
        description:
          "Each session includes a different choreography, ideal for those who already know how to dance and want to learn more.",
      },
      step3: {
        title: "Social Practice",
        description:
          "Time to practice freely, socialize and apply what you've learned in a relaxed atmosphere.",
      },
      cta: "Perfect for beginners and intermediates! Everyone learns something new in each class.",
    },
    benefits: {
      title: "Benefits of Dancing with Us",
      subtitle: "More than a dance class, it's a complete experience",
      benefit1: {
        title: "Meet New People",
        description:
          "Socialize and make friends while dancing. Our classes are the perfect place to meet people with similar interests.",
      },
      benefit2: {
        title: "Outdoor Environment",
        description:
          "Enjoy the natural atmosphere while learning. Dancing outdoors improves your mood and energy.",
      },
      benefit3: {
        title: "Release Tension",
        description:
          "Dancing is the best therapy. Clear your mind, reduce stress and improve your emotional well-being.",
      },
      benefit4: {
        title: "Fun Guaranteed",
        description:
          "Learn while having fun. Each class is designed for you to enjoy to the fullest with great music and atmosphere.",
      },
      footer:
        "Join our community and discover all the benefits of outdoor dancing!",
    },
    pricing: {
      title: "Precios",
      subtitle: "Elige la opción perfecta para ti",
      individual: "Taller-Clase Grupal",
      private: "Clase Privada",
      privateDesc: "Personalized session",
      perPerson: "per person",
      perSession: "",
      perHour: "",
      freePartner: "Bring your partner FREE",
      privatePromo: "100% personalized attention",
      features: [
        "1 hour sessions",
        "Experienced instructor",
        "Small groups (5-20 people)",
        "All levels welcome",
        "Salsa & Bachata",
      ],
      privateFeatures: [
        "1 hour sessions",
        "Experienced instructor",
        "Flexible schedule",
        "Salsa & Bachata",
        "Learn at your own pace",
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
      title: "BACHATA IM FREIEN",
      subtitle:
        "Lerne Salsa & Bachata mit Leidenschaft! Kleine Gruppen (5-20 Personen) für persönliche Betreuung",
      cta: "Buche deinen Kurs",
    },
    slider: {
      title: "Unsere Tanz-Community",
    },
    howItWorks: {
      title: "Wie funktioniert es?",
      subtitle: "Ein Workshop-Kurs für alle, unabhängig von deinem Niveau",
      step1: {
        title: "Grundschritte",
        description:
          "Wir begrüßen Sie und lehren die Grundlagen von Salsa und Bachata, perfekt für Anfänger, die gerade erst anfangen.",
      },
      step2: {
        title: "Neue Choreografie",
        description:
          "Jede Sitzung beinhaltet eine andere Choreografie, ideal für diejenigen, die bereits tanzen können und mehr lernen möchten.",
      },
      step3: {
        title: "Soziales Üben",
        description:
          "Zeit zum freien Üben, Sozialisieren und Anwenden des Gelernten in entspannter Atmosphäre.",
      },
      cta: "Perfekt für Anfänger und Fortgeschrittene! Jeder lernt in jeder Stunde etwas Neues.",
    },
    benefits: {
      title: "Vorteile des Tanzens mit uns",
      subtitle: "Mehr als ein Tanzkurs, es ist eine komplette Erfahrung",
      benefit1: {
        title: "Neue Leute kennenlernen",
        description:
          "Sozialisiere und finde Freunde beim Tanzen. Unsere Kurse sind der perfekte Ort, um Menschen mit ähnlichen Interessen zu treffen.",
      },
      benefit2: {
        title: "Umgebung im Freien",
        description:
          "Genieße die natürliche Atmosphäre beim Lernen. Tanzen im Freien verbessert deine Stimmung und Energie.",
      },
      benefit3: {
        title: "Spannungen abbauen",
        description:
          "Tanzen ist die beste Therapie. Befreie deinen Geist, reduziere Stress und verbessere dein emotionales Wohlbefinden.",
      },
      benefit4: {
        title: "Spaß garantiert",
        description:
          "Lerne während du Spaß hast. Jede Stunde ist so gestaltet, dass du mit toller Musik und Atmosphäre in vollen Zügen genießen kannst.",
      },
      footer:
        "Tritt unserer Community bei und entdecke alle Vorteile des Tanzens im Freien!",
    },
    pricing: {
      title: "Preise",
      subtitle: "Wählen Sie die perfekte Option für Sie",
      individual: "Einzelperson",
      private: "Privatunterricht",
      privateDesc: "Personalisierte Sitzung",
      perPerson: "pro Person",
      perSession: "",
      perHour: "",
      freePartner: "Bring deinen Partner KOSTENLOS mit",
      privatePromo: "100% persönliche Betreuung",
      features: [
        "Sitzungen von 1 Stunde",
        "Erfahrener Lehrer",
        "Kleine Gruppen (5-20 Personen)",
        "Alle Niveaus willkommen",
        "Salsa & Bachata",
      ],
      privateFeatures: [
        "Sitzungen von 1 Stunde",
        "Erfahrener Lehrer",
        "Flexibler Zeitplan",
        "Salsa & Bachata",
        "In deinem eigenen Tempo lernen",
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
      title: "BACHATA EN PLEIN AIR",
      subtitle:
        "Apprends la Salsa & Bachata avec passion ! Petits groupes (5-20 personnes) pour une attention personnalisée",
      cta: "Réserve ton cours",
    },
    slider: {
      title: "Notre Communauté de Danse",
    },
    howItWorks: {
      title: "Comment ça marche ?",
      subtitle:
        "Un atelier-cours conçu pour que tout le monde en profite, quel que soit votre niveau",
      step1: {
        title: "Pas de Base",
        description:
          "Nous vous accueillons et enseignons les fondamentaux de la salsa et de la bachata, parfait pour les débutants qui commencent.",
      },
      step2: {
        title: "Nouvelle Chorégraphie",
        description:
          "Chaque session inclut une chorégraphie différente, idéale pour ceux qui savent déjà danser et veulent en apprendre plus.",
      },
      step3: {
        title: "Pratique Sociale",
        description:
          "Temps pour pratiquer librement, socialiser et appliquer ce que vous avez appris dans une atmosphère détendue.",
      },
      cta: "Parfait pour les débutants et intermédiaires ! Tout le monde apprend quelque chose de nouveau dans chaque cours.",
    },
    benefits: {
      title: "Avantages de danser avec nous",
      subtitle: "Plus qu'un cours de danse, c'est une expérience complète",
      benefit1: {
        title: "Rencontrer de nouvelles personnes",
        description:
          "Socialisez et faites-vous des amis en dansant. Nos cours sont l'endroit parfait pour rencontrer des gens ayant des intérêts similaires.",
      },
      benefit2: {
        title: "Environnement en plein air",
        description:
          "Profitez de l'atmosphère naturelle en apprenant. Danser en plein air améliore votre humeur et votre énergie.",
      },
      benefit3: {
        title: "Libérer les tensions",
        description:
          "Danser est la meilleure thérapie. Libérez votre esprit, réduisez le stress et améliorez votre bien-être émotionnel.",
      },
      benefit4: {
        title: "Plaisir garanti",
        description:
          "Apprenez en vous amusant. Chaque cours est conçu pour que vous profitiez au maximum avec une excellente musique et ambiance.",
      },
      footer:
        "Rejoignez notre communauté et découvrez tous les avantages de la danse en plein air !",
    },
    pricing: {
      title: "Tarifs",
      subtitle: "Choisissez l'option parfaite pour vous",
      individual: "Individuel",
      private: "Cours Privé",
      privateDesc: "Session personnalisée",
      perPerson: "par personne",
      perSession: "",
      perHour: "",
      freePartner: "Amenez votre partenaire GRATUITEMENT",
      privatePromo: "Attention 100% personnalisée",
      features: [
        "Sessions d'1 heure",
        "Instructeur expérimenté",
        "Petits groupes (5-20 personnes)",
        "Tous niveaux bienvenus",
        "Salsa & Bachata",
      ],
      privateFeatures: [
        "Sessions d'1 heure",
        "Instructeur expérimenté",
        "Horaire flexible",
        "Salsa & Bachata",
        "Apprenez à votre rythme",
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
      title: "BACHATA AL AIRE LIBRE",
      subtitle:
        "¡Aprende Salsa y Bachata con pasión! Grupos reducidos (5-20 personas) para atención personalizada",
      cta: "Reserva Tu Clase",
    },
    slider: {
      title: "Nuestra Comunidad de Baile",
    },
    howItWorks: {
      title: "¿Cómo Funciona?",
      subtitle:
        "Un taller-clase diseñado para que todos disfruten, sin importar tu nivel",
      step1: {
        title: "Pasos Básicos",
        description:
          "Te damos la bienvenida y enseñamos los fundamentos de salsa y bachata, perfecto para principiantes que recién empiezan.",
      },
      step2: {
        title: "Coreografía Nueva",
        description:
          "Cada sesión incluye una coreografía diferente, ideal para quienes ya saben bailar y quieren aprender más.",
      },
      step3: {
        title: "Práctica Social",
        description:
          "Tiempo para practicar libremente, socializar y aplicar lo aprendido en un ambiente relajado.",
      },
      cta: "¡Perfecto para principiantes e intermedios! Todos aprenden algo nuevo en cada clase.",
    },
    benefits: {
      title: "Beneficios de Bailar con Nosotros",
      subtitle: "Más que una clase de baile, es una experiencia completa",
      benefit1: {
        title: "Conoce Gente Nueva",
        description:
          "Socializa y haz amigos mientras bailas. Nuestras clases son el lugar perfecto para conocer personas con tus mismos intereses.",
      },
      benefit2: {
        title: "Al Aire Libre",
        description:
          "Disfruta del ambiente natural mientras aprendes. Bailar al aire libre mejora tu estado de ánimo y energía.",
      },
      benefit3: {
        title: "Libera Tensiones",
        description:
          "El baile es la mejor terapia. Despeja tu mente, reduce el estrés y mejora tu bienestar emocional.",
      },
      benefit4: {
        title: "Diversión Garantizada",
        description:
          "Aprende mientras te diviertes. Cada clase está diseñada para que disfrutes al máximo con buena música y ambiente.",
      },
      footer:
        "¡Únete a nuestra comunidad y descubre todos los beneficios de bailar al aire libre!",
    },
    pricing: {
      title: "Tarifas",
      subtitle: "Elige la opción perfecta para ti",
      individual: "Taller-Clase Grupal",
      private: "Clase Privada",
      privateDesc: "Sesión personalizada",
      perPerson: "por persona",
      perSession: "",
      perHour: "",
      freePartner: "Trae a tu pareja GRATIS",
      privatePromo: "Atención 100% personalizada",
      features: [
        "Sesiones de 1 hora",
        "Instructor con experiencia",
        "Grupos reducidos (5-20 personas)",
        "Todos los niveles bienvenidos",
        "Salsa y Bachata",
      ],
      privateFeatures: [
        "Sesiones de 1 hora",
        "Instructor con experiencia",
        "Horario flexible",
        "Salsa y Bachata",
        "Aprende a tu ritmo",
      ],
      cta: "Reservar Ahora",
    },
    footer: {
      contact: "Contáctanos",
      rights: "Todos los derechos reservados",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
