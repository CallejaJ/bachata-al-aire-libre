"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "de" | "fr" | "es";

interface Translations {
  hero: {
    metaTitle: string;
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
  faq: {
    title: string;
    subtitle: string;
    questions: {
      question: string;
      answer: string;
      answer2?: string;
    }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    viewAll: string;
    items: {
      name: string;
      date: string;
      tags: string[];
    }[];
  };
  footer: {
    title: string;
    description: string;
    contact: string;
    rights: string;
    links: string;
    blog: string;
  };
  legal: {
    legalNotice: string;
    privacy: string;
    cookies: string;
    lastUpdate: string;
    onlySpanish: string;
    index: string;
  };
  comunidad: {
    title: string;
    subtitle: string;
    members: string;
    approval: string;
    rules: string;
    cta: string;
    scan: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    hero: {
      metaTitle: "Bachata Outdoors in Malaga",
      title: "",
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
      title: "Pricing",
      subtitle: "Choose the perfect option for you",
      individual: "Group Workshop-Class",
      private: "Private Class",
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
    faq: {
      title: "Frequently Asked Questions",
      subtitle:
        "Everything you need to know about bachata and salsa classes in Málaga",
      questions: [
        {
          question: "Where do bachata classes take place in Málaga?",
          answer:
            "Classes are held outdoors in Málaga, meeting point is at Calle Alcazabilla, 1, next to the entrance to the Alcazaba. It's a perfect spot to dance with spectacular views and a unique atmosphere in the heart of Málaga.",
        },
        {
          question: "Do I need previous experience?",
          answer:
            "Not at all! Our bachata and salsa classes in Málaga are designed for all levels. Whether you're a complete beginner or have some experience, instructor Carlos Yépez will adapt the teaching to your pace. The important thing is to come with a desire to learn and have fun!",
        },
        {
          question: "What is the price of bachata classes in Málaga?",
          answer:
            "The group workshop-class (5-20 people) costs €10 per session, and if you bring a partner, they get in free. Private classes cost €25 per hour. We offer the best value for learning bachata and salsa in Málaga.",
        },
        {
          question: "What days and times are the dance classes?",
          answer:
            "Schedules vary depending on demand and the season. The best way to find out about available times is to contact us directly via WhatsApp at +34 698 50 16 76 or through our Instagram @bachataalairelibre.",
        },
        {
          question: "Do I need to bring a partner?",
          answer:
            "No, it's not necessary! One of the advantages of our group classes is that we practice partner rotations so everyone can dance with different people. This helps you improve faster and makes the classes more social and fun.",
        },
        {
          question: "What makes outdoor bachata classes in Málaga special?",
          answer:
            "Learning bachata and salsa outdoors in the center of Málaga, surrounded by monuments like the Roman Theatre and the Alcazaba, creates a magical and unique atmosphere you won't find in traditional dance academies. Plus, the fresh air and natural setting make classes more enjoyable and relaxed.",
        },
        {
          question: "Do you teach only bachata or other Latin rhythms too?",
          answer:
            "We specialize in both bachata and salsa! In our classes in Málaga, you'll learn both styles, as they complement each other perfectly and allow you to dance at any Latin party or social event.",
        },
        {
          question: "How can I book my bachata class in Málaga?",
          answer:
            "You can book via WhatsApp at +34 698 50 16 76, send us an email at bachataalairelibremalaga@gmail.com, or contact us through Instagram @bachataalairelibre. We'll respond quickly to confirm your spot!",
        },
      ],
    },
    testimonials: {
      title: "What our students say",
      subtitle: "Real reviews from Meetup ⭐⭐⭐⭐⭐",
      viewAll: "View all reviews on Meetup",
      items: [
        {
          name: "Jan Chorushij",
          date: "1 month ago",
          tags: ["As described", "Interesting", "Memorable", "Inclusive attendees", "Meet new people", "Optimal environment", "Feeling of safety", "Welcoming organizer"],
        },
        {
          name: "Dani",
          date: "1 month ago",
          tags: ["As described", "Interesting", "Memorable", "Inclusive attendees", "Meet new people", "Optimal environment", "Punctual start", "Feeling of safety", "Welcoming organizer"],
        },
        {
          name: "Deniz Gençtürk",
          date: "3 months ago",
          tags: ["As described", "Interesting", "Memorable", "Inclusive attendees", "Meet new people", "Optimal environment", "Punctual start", "Feeling of safety", "Welcoming organizer"],
        },
        {
          name: "Lakshi",
          date: "5 months ago",
          tags: ["As described", "Interesting", "Memorable", "Inclusive attendees", "Meet new people", "Optimal environment", "Punctual start", "Feeling of safety", "Welcoming organizer"],
        },
        {
          name: "Barbara",
          date: "6 months ago",
          tags: ["As described", "Interesting", "Memorable", "Inclusive attendees", "Meet new people", "Optimal environment", "Punctual start", "Feeling of safety", "Welcoming organizer"],
        },
        {
          name: "Dominik Bernhard",
          date: "1 month ago",
          tags: ["Inclusive attendees", "Meet new people", "Welcoming organizer"],
        },
        {
          name: "Svitlana Ya",
          date: "1 month ago",
          tags: ["As described", "Interesting", "Meet new people", "Welcoming organizer"],
        },
        {
          name: "Cristina",
          date: "3 months ago",
          tags: ["Meet new people"],
        },
      ],
    },
    footer: {
      title: "Outdoor Bachata in Málaga",
      description: "Salsa and bachata classes with Carlos Yépez",
      contact: "Contact us",
      rights: "All rights reserved",
      links: "Links",
      blog: "Blog",
    },
    legal: {
      legalNotice: "Legal Notice",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      lastUpdate: "Last update",
      onlySpanish: "Legal content is only available in Spanish",
      index: "Index",
    },
    comunidad: {
      title: "Community",
      subtitle: "Join our WhatsApp group with over 300 active members. Stay informed about classes, events and special sessions in Málaga.",
      members: "+300 active members",
      approval: "Admin approval required",
      rules: "Moderated community",
      cta: "Join the group",
      scan: "Scan with your mobile to join",
    },
  },
  de: {
    hero: {
      metaTitle: "Bachata im Freien in Málaga",
      title: "",
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
    faq: {
      title: "Häufig gestellte Fragen",
      subtitle:
        "Alles, was Sie über Bachata- und Salsa-Kurse in Málaga wissen müssen",
      questions: [
        {
          question: "Wo finden die Bachata-Kurse in Málaga statt?",
          answer:
            "Die Kurse finden im Freien in Málaga statt, Treffpunkt ist die Calle Alcazabilla 1, direkt am Eingang zur Alcazaba. Es ist ein perfekter Ort zum Tanzen mit spektakulärer Aussicht und einzigartiger Atmosphäre im Zentrum von Málaga.",
        },
        {
          question: "Brauche ich Vorkenntnisse?",
          answer:
            "Überhaupt nicht! Unsere Bachata- und Salsa-Kurse in Málaga sind für alle Niveaus konzipiert. Egal ob Sie Anfänger sind oder bereits Erfahrung haben, Lehrer Carlos Yépez passt den Unterricht an Ihr Tempo an. Wichtig ist, dass Sie mit Lust zum Lernen und Spaß haben kommen!",
        },
        {
          question: "Was kosten die Bachata-Kurse in Málaga?",
          answer:
            "Der Gruppen-Workshop-Kurs (5-20 Personen) kostet 10 € pro Sitzung, und wenn Sie einen Partner mitbringen, ist dieser kostenlos. Privatkurse kosten 25 € pro Stunde. Wir bieten das beste Preis-Leistungs-Verhältnis, um Bachata und Salsa in Málaga zu lernen.",
        },
        {
          question:
            "An welchen Tagen und zu welchen Zeiten finden die Tanzkurse statt?",
          answer:
            "Die Zeiten variieren je nach Nachfrage und Jahreszeit. Der beste Weg, um die verfügbaren Zeiten zu erfahren, ist uns direkt über WhatsApp unter +34 698 50 16 76 oder über unser Instagram @bachataalairelibre zu kontaktieren.",
        },
        {
          question: "Muss ich einen Partner mitbringen?",
          answer:
            "Nein, das ist nicht notwendig! Einer der Vorteile unserer Gruppenkurse ist, dass wir Partnerwechsel üben, damit jeder mit verschiedenen Personen tanzen kann. Dies hilft Ihnen, schneller Fortschritte zu machen und macht die Kurse sozialer und unterhaltsamer.",
        },
        {
          question:
            "Was macht die Bachata-Kurse im Freien in Málaga besonders?",
          answer:
            "Bachata und Salsa im Freien im Zentrum von Málaga zu lernen, umgeben von Denkmälern wie dem Römischen Theater und der Alcazaba, schafft eine magische und einzigartige Atmosphäre, die Sie in traditionellen Tanzakademien nicht finden werden. Außerdem machen die frische Luft und die natürliche Umgebung die Kurse angenehmer und entspannter.",
        },
        {
          question:
            "Unterrichten Sie nur Bachata oder auch andere lateinamerikanische Rhythmen?",
          answer:
            "Wir unterrichten sowohl Bachata als auch Salsa. Beide lateinamerikanischen Rhythmen haben eine unterschiedliche Lernkurve. Du lernst die Grundlagen jedes Stils und in jeder Stunde neue Choreografien.",
        },
        {
          question: "Wie kann ich meinen Bachata-Kurs in Málaga buchen?",
          answer:
            "Sie können über WhatsApp unter +34 698 50 16 76 buchen, uns eine E-Mail an bachataalairelibremalaga@gmail.com senden oder uns über Instagram @bachataalairelibre kontaktieren. Wir werden schnell antworten, um Ihren Platz zu bestätigen!",
        },
      ],
    },
    testimonials: {
      title: "Was unsere Schüler sagen",
      subtitle: "Echte Bewertungen von Meetup ⭐⭐⭐⭐⭐",
      viewAll: "Alle Bewertungen auf Meetup ansehen",
      items: [
        {
          name: "Jan Chorushij",
          date: "vor 1 Monat",
          tags: ["Wie beschrieben", "Interessant", "Unvergesslich", "Inklusive Teilnehmer", "Neue Leute kennenlernen", "Optimale Umgebung", "Sicherheitsgefühl", "Herzlicher Organisator"],
        },
        {
          name: "Dani",
          date: "vor 1 Monat",
          tags: ["Wie beschrieben", "Interessant", "Unvergesslich", "Inklusive Teilnehmer", "Neue Leute kennenlernen", "Optimale Umgebung", "Pünktlicher Beginn", "Sicherheitsgefühl", "Herzlicher Organisator"],
        },
        {
          name: "Deniz Gençtürk",
          date: "vor 3 Monaten",
          tags: ["Wie beschrieben", "Interessant", "Unvergesslich", "Inklusive Teilnehmer", "Neue Leute kennenlernen", "Optimale Umgebung", "Pünktlicher Beginn", "Sicherheitsgefühl", "Herzlicher Organisator"],
        },
        {
          name: "Lakshi",
          date: "vor 5 Monaten",
          tags: ["Wie beschrieben", "Interessant", "Unvergesslich", "Inklusive Teilnehmer", "Neue Leute kennenlernen", "Optimale Umgebung", "Pünktlicher Beginn", "Sicherheitsgefühl", "Herzlicher Organisator"],
        },
        {
          name: "Barbara",
          date: "vor 6 Monaten",
          tags: ["Wie beschrieben", "Interessant", "Unvergesslich", "Inklusive Teilnehmer", "Neue Leute kennenlernen", "Optimale Umgebung", "Pünktlicher Beginn", "Sicherheitsgefühl", "Herzlicher Organisator"],
        },
        {
          name: "Dominik Bernhard",
          date: "vor 1 Monat",
          tags: ["Inklusive Teilnehmer", "Neue Leute kennenlernen", "Herzlicher Organisator"],
        },
        {
          name: "Svitlana Ya",
          date: "vor 1 Monat",
          tags: ["Wie beschrieben", "Interessant", "Neue Leute kennenlernen", "Herzlicher Organisator"],
        },
        {
          name: "Cristina",
          date: "vor 3 Monaten",
          tags: ["Neue Leute kennenlernen"],
        },
      ],
    },
    footer: {
      title: "Bachata im Freien in Málaga",
      description: "Salsa- und Bachata-Kurse mit Carlos Yépez",
      contact: "Kontaktieren Sie uns",
      rights: "Alle Rechte vorbehalten",
      links: "Links",
      blog: "Blog",
    },
    legal: {
      legalNotice: "Impressum",
      privacy: "Datenschutzerklärung",
      cookies: "Cookie-Richtlinie",
      lastUpdate: "Letzte Aktualisierung",
      onlySpanish: "Rechtliche Inhalte sind nur auf Spanisch verfügbar",
      index: "Index",
    },
    comunidad: {
      title: "Community",
      subtitle: "Tritt unserer WhatsApp-Gruppe mit über 300 aktiven Mitgliedern bei. Bleibe über Kurse, Events und besondere Veranstaltungen in Málaga informiert.",
      members: "+300 aktive Mitglieder",
      approval: "Admin-Genehmigung erforderlich",
      rules: "Moderierte Community",
      cta: "Gruppe beitreten",
      scan: "Mit dem Handy scannen, um beizutreten",
    },
  },
  fr: {
    hero: {
      metaTitle: "Bachata en Plein Air à Málaga",
      title: "",
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
    faq: {
      title: "Questions Fréquemment Posées",
      subtitle:
        "Tout ce que vous devez savoir sur les cours de bachata et salsa à Málaga",
      questions: [
        {
          question: "Où se déroulent les cours de bachata à Málaga ?",
          answer:
            "Les cours ont lieu en plein air à Málaga, le point de rendez-vous est Calle Alcazabilla, 1, à l'entrée de l'Alcazaba. C'est un endroit parfait pour danser avec une vue spectaculaire et une ambiance unique au cœur de Málaga.",
        },
        {
          question: "Ai-je besoin d'une expérience préalable ?",
          answer:
            "Pas du tout ! Nos cours de bachata et salsa à Málaga sont conçus pour tous les niveaux. Que vous soyez débutant complet ou que vous ayez de l'expérience, le professeur Carlos Yépez adaptera l'enseignement à votre rythme. L'important est de venir avec l'envie d'apprendre et de s'amuser !",
        },
        {
          question: "Quel est le prix des cours de bachata à Málaga ?",
          answer:
            "L'atelier-cours en groupe (5-20 personnes) coûte 10 € par session, et si vous amenez un partenaire, il entre gratuitement. Les cours privés coûtent 25 € par heure. Nous offrons le meilleur rapport qualité-prix pour apprendre la bachata et la salsa à Málaga.",
        },
        {
          question: "Quels sont les jours et horaires des cours de danse ?",
          answer:
            "Les horaires varient en fonction de la demande et de la saison. Le meilleur moyen de connaître les horaires disponibles est de nous contacter directement via WhatsApp au +34 698 50 16 76 ou via notre Instagram @bachataalairelibre.",
        },
        {
          question: "Dois-je amener un partenaire ?",
          answer:
            "Non, ce n'est pas nécessaire ! L'un des avantages de nos cours en groupe est que nous pratiquons la rotation des partenaires pour que tout le monde puisse danser avec différentes personnes. Cela vous aide à progresser plus rapidement et rend les cours plus sociaux et amusants.",
        },
        {
          question:
            "Qu'est-ce qui rend les cours de bachata en plein air à Málaga spéciaux ?",
          answer:
            "Apprendre la bachata et la salsa en plein air dans le centre de Málaga, entouré de monuments comme le Théâtre Romain et l'Alcazaba, crée une atmosphère magique et unique que vous ne trouverez pas dans les académies de danse traditionnelles. De plus, l'air frais et le cadre naturel rendent les cours plus agréables et détendus.",
        },
        {
          question:
            "Enseignez-vous uniquement la bachata ou d'autres rythmes latins aussi ?",
          answer:
            "Nous enseignons la bachata et la salsa. Ces deux rythmes latins ont une courbe d'apprentissage différente. Vous apprendrez les bases de chaque style et de nouvelles chorégraphies à chaque cours.",
        },
        {
          question: "Comment puis-je réserver mon cours de bachata à Málaga ?",
          answer:
            "Vous pouvez réserver via WhatsApp au +34 698 50 16 76, nous envoyer un email à bachataalairelibremalaga@gmail.com, ou nous contacter via Instagram @bachataalairelibre. Nous répondrons rapidement pour confirmer votre place !",
        },
      ],
    },
    testimonials: {
      title: "Ce que disent nos élèves",
      subtitle: "Avis réels de Meetup ⭐⭐⭐⭐⭐",
      viewAll: "Voir tous les avis sur Meetup",
      items: [
        {
          name: "Jan Chorushij",
          date: "il y a 1 mois",
          tags: ["Comme décrit", "Intéressant", "Mémorable", "Participants inclusifs", "Rencontrer de nouvelles personnes", "Environnement optimal", "Sentiment de sécurité", "Organisateur accueillant"],
        },
        {
          name: "Dani",
          date: "il y a 1 mois",
          tags: ["Comme décrit", "Intéressant", "Mémorable", "Participants inclusifs", "Rencontrer de nouvelles personnes", "Environnement optimal", "Début ponctuel", "Sentiment de sécurité", "Organisateur accueillant"],
        },
        {
          name: "Deniz Gençtürk",
          date: "il y a 3 mois",
          tags: ["Comme décrit", "Intéressant", "Mémorable", "Participants inclusifs", "Rencontrer de nouvelles personnes", "Environnement optimal", "Début ponctuel", "Sentiment de sécurité", "Organisateur accueillant"],
        },
        {
          name: "Lakshi",
          date: "il y a 5 mois",
          tags: ["Comme décrit", "Intéressant", "Mémorable", "Participants inclusifs", "Rencontrer de nouvelles personnes", "Environnement optimal", "Début ponctuel", "Sentiment de sécurité", "Organisateur accueillant"],
        },
        {
          name: "Barbara",
          date: "il y a 6 mois",
          tags: ["Comme décrit", "Intéressant", "Mémorable", "Participants inclusifs", "Rencontrer de nouvelles personnes", "Environnement optimal", "Début ponctuel", "Sentiment de sécurité", "Organisateur accueillant"],
        },
        {
          name: "Dominik Bernhard",
          date: "il y a 1 mois",
          tags: ["Participants inclusifs", "Rencontrer de nouvelles personnes", "Organisateur accueillant"],
        },
        {
          name: "Svitlana Ya",
          date: "il y a 1 mois",
          tags: ["Comme décrit", "Intéressant", "Rencontrer de nouvelles personnes", "Organisateur accueillant"],
        },
        {
          name: "Cristina",
          date: "il y a 3 mois",
          tags: ["Rencontrer de nouvelles personnes"],
        },
      ],
    },
    footer: {
      title: "Bachata en Plein Air à Málaga",
      description: "Cours de salsa et bachata avec Carlos Yépez",
      contact: "Contactez-nous",
      rights: "Tous droits réservés",
      links: "Liens",
      blog: "Blog",
    },
    legal: {
      legalNotice: "Mentions Légales",
      privacy: "Politique de Confidentialité",
      cookies: "Politique de Cookies",
      lastUpdate: "Dernière mise à jour",
      onlySpanish: "Le contenu juridique n'est disponible qu'en espagnol",
      index: "Index",
    },
    comunidad: {
      title: "Communauté",
      subtitle: "Rejoignez notre groupe WhatsApp avec plus de 300 membres actifs. Restez informé des cours, événements et sessions spéciales à Málaga.",
      members: "+300 membres actifs",
      approval: "Approbation de l'admin requise",
      rules: "Communauté modérée",
      cta: "Rejoindre le groupe",
      scan: "Scannez avec votre téléphone pour rejoindre",
    },
  },
  es: {
    hero: {
      metaTitle: "Bachata al Aire Libre en Málaga",
      title: "",
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
    faq: {
      title: "Preguntas Frecuentes",
      subtitle:
        "Todo lo que necesitas saber sobre nuestras clases de bachata en Málaga",
      questions: [
        {
          question: "¿Dónde se imparten las clases de bachata en Málaga?",
          answer:
            "Las clases se realizan al aire libre en Málaga, el punto de encuentro está en calle Alcazabilla, 1, junto a la entrada a la Alcazaba. Es un espacio perfecto para bailar con vistas espectaculares y un ambiente único en el centro de Málaga.",
        },
        {
          question:
            "¿Necesito experiencia previa para tomar clases de salsa y bachata?",
          answer:
            "¡Para nada! Nuestras clases están diseñadas para todos los niveles. Desde principiantes que nunca han bailado hasta bailarines intermedios que quieren perfeccionar su técnica. Cada clase incluye pasos básicos y coreografías nuevas adaptadas a tu nivel.",
        },
        {
          question: "¿Cuál es el precio de las clases de bachata en Málaga?",
          answer:
            "Las clases grupales tienen un precio especial de €10 por persona, ¡y tu pareja entra gratis! También ofrecemos clases privadas personalizadas por €25/hora. Somos una de las opciones más accesibles para aprender bachata en Málaga.",
        },
        {
          question: "¿Qué días y horarios tienen las clases de baile?",
          answer:
            "Las clases se imparten regularmente durante la semana. Para conocer los horarios exactos y reservar tu plaza, contáctanos por WhatsApp al +34 698 50 16 76. Los grupos son reducidos (5-20 personas) para asegurar atención personalizada.",
        },
        {
          question: "¿Tengo que traer pareja para las clases de bachata?",
          answer:
            "No es necesario traer pareja. En nuestras clases fomentamos la rotación y la práctica social, así que conocerás a otros bailarines y practicarás con diferentes personas. Es una excelente forma de hacer amigos mientras aprendes a bailar.",
        },
        {
          question:
            "¿Qué hace especial a las clases de bachata al aire libre en Málaga?",
          answer:
            "Bailar al aire libre en Málaga ofrece una experiencia única: el ambiente natural mejora tu estado de ánimo, reduces el estrés y disfrutas del buen clima mientras aprendes. Además, Carlos Yépez es un instructor experimentado que hace que cada clase sea divertida y educativa.",
        },
        {
          question: "¿Enseñan solo bachata o también otros ritmos latinos?",
          answer:
            "Enseñamos tanto bachata como salsa. Ambos ritmos latinos tienen una curva de aprendizaje distinta. Aprenderás los fundamentos de cada estilo y nuevas coreografías en cada clase.",
        },
        {
          question: "¿Cómo puedo reservar mi clase de bachata en Málaga?",
          answer:
            "Es muy fácil: contacta con nosotros por WhatsApp al +34 698 50 16 76 o envía un email a bachataalairelibremalaga@gmail.com. También puedes seguirnos en Instagram @bachataalairelibre para estar al tanto de clases especiales y eventos.",
        },
      ],
    },
    testimonials: {
      title: "Lo que dicen nuestros alumnos",
      subtitle: "Reseñas reales de Meetup ⭐⭐⭐⭐⭐",
      viewAll: "Ver todas las reseñas en Meetup",
      items: [
        {
          name: "Jan Chorushij",
          date: "hace 1 mes",
          tags: ["Según lo descrito", "Interesante", "Dejó huella", "Asistentes inclusivos", "Contacto con personas nuevas", "Entorno óptimo", "Sensación de seguridad", "Organizador acogedor"],
        },
        {
          name: "Dani",
          date: "hace 1 mes",
          tags: ["Según lo descrito", "Interesante", "Dejó huella", "Asistentes inclusivos", "Contacto con personas nuevas", "Entorno óptimo", "Comienzo puntual", "Sensación de seguridad", "Organizador acogedor"],
        },
        {
          name: "Deniz Gençtürk",
          date: "hace 3 meses",
          tags: ["Según lo descrito", "Interesante", "Dejó huella", "Asistentes inclusivos", "Contacto con personas nuevas", "Entorno óptimo", "Comienzo puntual", "Sensación de seguridad", "Organizador acogedor"],
        },
        {
          name: "Lakshi",
          date: "hace 5 meses",
          tags: ["Según lo descrito", "Interesante", "Dejó huella", "Asistentes inclusivos", "Contacto con personas nuevas", "Entorno óptimo", "Comienzo puntual", "Sensación de seguridad", "Organizador acogedor"],
        },
        {
          name: "Barbara",
          date: "hace 6 meses",
          tags: ["Según lo descrito", "Interesante", "Dejó huella", "Asistentes inclusivos", "Contacto con personas nuevas", "Entorno óptimo", "Comienzo puntual", "Sensación de seguridad", "Organizador acogedor"],
        },
        {
          name: "Dominik Bernhard",
          date: "hace 1 mes",
          tags: ["Asistentes inclusivos", "Contacto con personas nuevas", "Organizador acogedor"],
        },
        {
          name: "Svitlana Ya",
          date: "hace 1 mes",
          tags: ["Según lo descrito", "Interesante", "Contacto con personas nuevas", "Organizador acogedor"],
        },
        {
          name: "Cristina",
          date: "hace 3 meses",
          tags: ["Contacto con personas nuevas"],
        },
      ],
    },
    footer: {
      title: "Bachata al Aire Libre en Málaga",
      description: "Clases de salsa y bachata con Carlos Yépez",
      contact: "Contáctanos",
      rights: "Todos los derechos reservados",
      links: "Enlaces",
      blog: "Blog",
    },
    legal: {
      legalNotice: "Aviso Legal",
      privacy: "Política de Privacidad",
      cookies: "Política de Cookies",
      lastUpdate: "Última actualización",
      onlySpanish: "El contenido legal solo está disponible en español",
      index: "Índice",
    },
    comunidad: {
      title: "Comunidad",
      subtitle: "Únete a nuestro grupo de WhatsApp con más de 300 miembros activos. Entérate de clases, eventos y sesiones especiales en Málaga.",
      members: "+300 miembros activos",
      approval: "Acceso aprobado por admin",
      rules: "Comunidad moderada",
      cta: "Unirme al grupo",
      scan: "Escanea con tu móvil para unirte",
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
