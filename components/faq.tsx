"use client";

import { useLanguage } from "./language-provider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const { t } = useLanguage();

  return (
    <section className="bg-background pt-20 pb-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance font-bold text-foreground text-4xl md:text-5xl">
            {t.faq.title}
          </h2>
          <p className="text-balance text-muted-foreground text-xl">
            {t.faq.subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {t.faq.questions.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`border-2 rounded-lg px-6 hover:border-primary transition-colors ${
                index === t.faq.questions.length - 1 ? "mb-4" : ""
              }`}
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

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
