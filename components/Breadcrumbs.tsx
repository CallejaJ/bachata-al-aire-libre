"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { t } = useLanguage();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.bachataalairelibre.com/",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: `https://www.bachataalairelibre.com/${item.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-sm text-gray-600 py-4 px-6 md:px-8 lg:px-12 bg-white/80 backdrop-blur-sm"
      >
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-primary transition-colors"
          aria-label="Ir a inicio"
        >
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline">Inicio</span>
        </Link>

        {items.map((item, index) => (
          <div key={item.href} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {index === items.length - 1 ? (
              <span className="text-primary font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
