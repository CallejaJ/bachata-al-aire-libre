import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import WhatsAppWidget from "@/components/whatsapp-widget";
import { LanguageProvider } from "@/components/language-provider";
import "../styles/globals.css";

// 🚀 OPTIMIZACIÓN: Solo cargar los pesos necesarios
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // ← Reducido de 6 a 3 pesos
  variable: "--font-sans",
  display: "swap", // ← Mejora FOUT (Flash of Unstyled Text)
  preload: true,
  fallback: ["system-ui", "arial"], // ← Fallback mientras carga
});

export const metadata: Metadata = {
  title:
    "Bachata al Aire Libre | Clases de Salsa y Bachata en Málaga con Carlos Yépez",
  description:
    "Clases de salsa y bachata al aire libre en Málaga con Carlos Yépez. Grupos reducidos, ambiente divertido y atención personalizada.",
  keywords:
    "bachata al aire libre, clases de salsa Málaga, clases de bachata Málaga, Carlos Yépez, baile latino, salsa, bachata, clases de baile Málaga, bachata Málaga, salsa Málaga",
  authors: [{ name: "Carlos Yépez" }],
  creator: "Carlos Yépez",
  publisher: "jorgecalleja.dev",
  generator: "jorgecalleja.dev",
  metadataBase: new URL("https://www.bachataalairelibre.com/"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
  openGraph: {
    title:
      "Bachata al Aire Libre | Clases de Salsa y Bachata en Málaga con Carlos Yépez",
    description:
      "Clases de salsa y bachata al aire libre en Málaga con Carlos Yépez. Grupos reducidos y ambiente divertido.",
    url: "https://www.bachataalairelibre.com/",
    siteName: "Bachata al Aire Libre",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/hero.webp", // ← Usar WebP
        width: 1200,
        height: 630,
        alt: "Clases de bachata y salsa al aire libre en Málaga con Carlos Yépez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bachata al Aire Libre | Clases de Salsa y Bachata en Málaga con Carlos Yépez",
    description:
      "Clases de salsa y bachata al aire libre en Málaga con Carlos Yépez. Grupos reducidos y ambiente divertido.",
    images: ["/hero.webp"], // ← Usar WebP
    creator: "@bachataalairelibre",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.bachataalairelibre.com/",
    name: "Bachata al Aire Libre | Clases de Salsa y Bachata en Málaga con Carlos Yépez",
    description:
      "Clases de salsa y bachata al aire libre en Málaga con Carlos Yépez. Grupos reducidos y ambiente divertido.",
    url: "https://www.bachataalairelibre.com/",
    telephone: "+34698501676",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Málaga",
      addressRegion: "Andalucía",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.7207",
      longitude: "-4.4200",
    },
    areaServed: {
      "@type": "City",
      name: "Málaga",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Clases de Baile",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Taller-Clase Grupal",
            description: "Clase de bachata/salsa grupal con pareja gratis",
          },
          price: "10",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clase Privada",
            description: "Clase privada de bachata/salsa personalizada",
          },
          price: "25",
          priceCurrency: "EUR",
        },
      ],
    },
    sameAs: [
      "https://www.instagram.com/bachataalairelibre",
      "https://www.tiktok.com/@bachataalairelibre",
      "https://www.facebook.com/profile.php?id=61583155394342",
    ],
  };

  return (
    <html lang="es" className="overflow-x-hidden">
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Geo tags */}
        <meta name="geo.region" content="ES-AN" />
        <meta name="geo.placename" content="Málaga" />
        <meta name="geo.position" content="36.7207;-4.4200" />
        <meta name="ICBM" content="36.7207, -4.4200" />

        {/* Metricool - defer para no bloquear */}
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"dcf4983526bc78ffa819bc82abe6eafa"})});`,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased overflow-x-hidden`}
      >
        <LanguageProvider>
          {children}
          <WhatsAppWidget
            phoneNumber="34698501676"
            message="Hola Carlos, me gustaría información sobre las clases de bachata al aire libre"
            companyName="Bachata al Aire Libre"
          />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
