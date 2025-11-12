"use client";

import { useLanguage } from "./LanguageProvider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="bg-background py-20 px-4">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance font-bold text-foreground text-4xl md:text-5xl">
            {t.pricing.title}
          </h2>
          <p className="text-balance text-muted-foreground text-xl">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Group Class Pricing */}
          <Card className="border-2 border-secondary shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] hover:scale-105 relative overflow-hidden flex flex-col">
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="/videos/individual.mp4" type="video/mp4" />
            </video>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* Content */}
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-md z-10">
              ¡PROMO!
            </div>
            <CardHeader className="text-center relative z-10">
              <CardTitle className="text-3xl font-bold text-white drop-shadow-lg">
                {t.pricing.individual}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow relative z-10">
              <div className="mb-6 text-center">
                <span className="text-5xl font-bold text-white drop-shadow-lg">
                  €10
                </span>
              </div>
              <div className="mb-4 text-center bg-white/90 backdrop-blur-sm rounded-lg py-2 px-3">
                <span className="text-foreground font-semibold">
                  + {t.pricing.freePartner}
                </span>
              </div>
              <ul className="space-y-3">
                {t.pricing.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-white drop-shadow-md" />
                    <span className="text-white drop-shadow-md">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <a
                  href="https://wa.me/34698501676?text=Hola%20Carlos%2C%20me%20interesa%20el%20taller-clase%20grupal%20de%20bachata"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.pricing.cta}
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Private Pricing */}
          <Card className="border-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] hover:scale-105 relative overflow-hidden flex flex-col">
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="/videos/private.mp4" type="video/mp4" />
            </video>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* Content */}
            <CardHeader className="text-center relative z-10">
              <CardTitle className="text-3xl font-bold text-white drop-shadow-lg">
                {t.pricing.private}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow relative z-10">
              <div className="mb-6 text-center">
                <span className="text-5xl font-bold text-white drop-shadow-lg">
                  €25
                </span>
                <span className="text-white text-xl drop-shadow-md">
                  {" "}
                  {t.pricing.perHour}
                </span>
              </div>
              <div className="mb-4 text-center bg-white/90 backdrop-blur-sm rounded-lg py-2 px-3">
                <span className="text-foreground font-semibold">
                  {t.pricing.privatePromo}
                </span>
              </div>
              <ul className="space-y-3">
                {t.pricing.privateFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-white drop-shadow-md" />
                    <span className="text-white drop-shadow-md">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <a
                  href="https://wa.me/34698501676?text=Hola%20Carlos%2C%20me%20interesa%20la%20clase%20privada%20de%20bachata"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.pricing.cta}
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
