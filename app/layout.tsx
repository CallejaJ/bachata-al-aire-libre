import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import WhatsAppWidget from "@/components/whatsapp-widget";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Bachata al Aire Libre - Clases de Salsa y Bachata | Carlos Yépez",
  description:
    "Clases de salsa y bachata al aire libre en Málaga. Aprende a bailar con Carlos Yépez en grupos reducidos (5-20 personas). Ambiente divertido y atención personalizada.",
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
    title: "Bachata al Aire Libre - Clases de Salsa y Bachata | Carlos Yépez",
    description:
      "Aprende salsa y bachata con Carlos Yépez en Málaga. Clases al aire libre en grupos reducidos. €10/hora + pareja gratis.",
    url: "https://www.bachataalairelibre.com/",
    siteName: "Bachata al Aire Libre",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/dance-photo-1.jpg",
        width: 1200,
        height: 630,
        alt: "Clases de bachata y salsa al aire libre en Málaga con Carlos Yépez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bachata al Aire Libre - Clases de Salsa y Bachata",
    description:
      "Aprende salsa y bachata con Carlos Yépez en Málaga. €10/hora + pareja gratis.",
    images: ["/dance-photo-1.jpg"],
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
    google: "google-site-verification-code", // Reemplazar con código real
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
    name: "Bachata al Aire Libre",
    description:
      "Clases de salsa y bachata al aire libre en Málaga con Carlos Yépez",
    url: "https://www.bachataalairelibre.com/",
    telephone: "+34698501676",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Málaga",
      addressRegion: "Cataluña",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.3851",
      longitude: "2.1734",
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
            name: "Clase Individual",
            description: "Clase de bachata/salsa individual con pareja gratis",
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
      "https://www.tiktok.com/@hotlatindance",
      "https://www.facebook.com/profile.php?id=61583155394342",
    ],
  };

  return (
    <html lang="es" className="overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="ES-CT" />
        <meta name="geo.placename" content="Málaga" />
        <meta name="geo.position" content="41.3851;2.1734" />
        <meta name="ICBM" content="41.3851, 2.1734" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased overflow-x-hidden`}
      >
        {children}
        <WhatsAppWidget
          phoneNumber="34698501676"
          message="Hola Carlos, me gustaría información sobre las clases de bachata al aire libre"
          companyName="Bachata al Aire Libre"
        />
        <Analytics />
      </body>
    </html>
  );
}
