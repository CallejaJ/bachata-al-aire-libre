"use client";

import { useLanguage } from "./LanguageProvider";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance font-bold text-foreground text-4xl md:text-5xl">
            {t.faq.title}
          </h2>
          <p className="text-balance text-muted-foreground text-xl">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="w-full space-y-4">
          {t.faq.questions.map((item, index) => (
            <div
              key={index}
              className="border-2 rounded-lg hover:border-primary transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-6 flex justify-between items-start gap-4"
              >
                <span className="text-lg font-semibold hover:text-primary">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Schema.org FAQ Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: t.faq.questions.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
