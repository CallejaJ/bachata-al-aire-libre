"use client";

import { useLanguage } from "./LanguageProvider";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";


export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="bg-muted/50 py-20 px-4">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance font-bold text-foreground text-4xl md:text-5xl">
            {t.testimonials.title}
          </h2>
          <p className="text-balance text-muted-foreground text-xl">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {t.testimonials.items.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-primary text-primary"
                          />
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex-grow mb-4">
                        <div className="flex flex-wrap gap-2">
                          {testimonial.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-block bg-secondary/20 text-secondary-foreground text-xs px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Author */}
                      <div className="pt-4 border-t">
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.date}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Meetup Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.meetup.com/es-ES/baila-salsa-y-bachata/feedback-overview/reviews/?rating=5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
          >
            {t.testimonials.viewAll}
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
