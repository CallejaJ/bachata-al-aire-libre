"use client";

import { useLanguage } from "./LanguageProvider";
import {
  Card,
  CardContent,
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

        <div className="mx-auto grid max-w-5xl items-stretch gap-8 md:grid-cols-2">
          {/* ---------- Taller-Clase Grupal (destacada) ---------- */}
          <Card className="relative flex flex-col overflow-hidden rounded-2xl border-0 text-white shadow-[0_12px_40px_-8px_rgba(0,0,0,0.35)] ring-2 ring-secondary/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-10px_oklch(0.65_0.18_60/0.55)]">
            {/* Fondo: degradado atardecer de marca */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[oklch(0.34_0.13_255)] via-[oklch(0.46_0.18_35)] to-[oklch(0.58_0.18_55)]" />
            <div className="absolute inset-0 z-0 bg-black/15" />

            <CardHeader className="relative z-10 pt-8 text-center">
              <CardTitle className="text-3xl font-bold text-white drop-shadow-lg">
                {t.pricing.individual}
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10 flex-grow">
              <div className="mb-1 text-center">
                <span className="text-6xl font-extrabold text-white drop-shadow-lg">
                  €10
                </span>
              </div>
              <p className="mb-6 text-center text-sm font-medium text-white/85 drop-shadow">
                ≈ 5€ por persona con tu pareja
              </p>

              <div className="mb-5 rounded-lg bg-white/95 py-2.5 px-3 text-center shadow-sm backdrop-blur-sm">
                <span className="font-semibold text-foreground">
                  + {t.pricing.freePartner}
                </span>
              </div>

              <ul className="space-y-3">
                {t.pricing.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary/90 shadow">
                      <Check className="h-4 w-4 text-secondary-foreground" />
                    </span>
                    <span className="text-white drop-shadow-md">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="relative z-10 flex-col gap-2">
              <Button
                asChild
                className="w-full bg-secondary py-6 text-lg font-bold text-secondary-foreground shadow-md transition hover:scale-[1.02] hover:bg-secondary/90 hover:shadow-lg"
              >
                <a
                  href="https://wa.me/34698501676?text=Hola%20Carlos%2C%20me%20interesa%20el%20taller-clase%20grupal%20de%20bachata"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.pricing.cta}
                </a>
              </Button>
              <p className="text-center text-xs text-white/75">
                Sin compromiso · Reserva por WhatsApp
              </p>
            </CardFooter>
          </Card>

          {/* ---------- Clase Privada ---------- */}
          <Card className="relative flex flex-col overflow-hidden rounded-2xl border-0 text-white shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.28)]">
            {/* Fondo: degradado noche elegante (índigo -> violeta -> magenta) */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[oklch(0.28_0.12_268)] via-[oklch(0.34_0.15_298)] to-[oklch(0.42_0.14_330)]" />
            <div className="absolute inset-0 z-0 bg-black/10" />

            <CardHeader className="relative z-10 pt-8 text-center">
              <CardTitle className="text-3xl font-bold text-white drop-shadow-lg">
                {t.pricing.private}
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10 flex-grow">
              <div className="mb-6 text-center">
                <span className="text-6xl font-extrabold text-white drop-shadow-lg">
                  €25
                </span>
                <span className="text-xl text-white/85 drop-shadow-md">
                  {" "}
                  {t.pricing.perHour}
                </span>
              </div>

              <div className="mb-5 rounded-lg bg-white/95 py-2.5 px-3 text-center shadow-sm backdrop-blur-sm">
                <span className="font-semibold text-foreground">
                  {t.pricing.privatePromo}
                </span>
              </div>

              <ul className="space-y-3">
                {t.pricing.privateFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20 shadow">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                    <span className="text-white drop-shadow-md">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="relative z-10 flex-col gap-2">
              <Button
                asChild
                className="w-full bg-primary py-6 text-lg font-semibold text-primary-foreground shadow-md transition hover:scale-[1.02] hover:bg-primary/90 hover:shadow-lg"
              >
                <a
                  href="https://wa.me/34698501676?text=Hola%20Carlos%2C%20me%20interesa%20la%20clase%20privada%20de%20bachata"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.pricing.cta}
                </a>
              </Button>
              <p className="text-center text-xs text-white/75">
                Sin compromiso · Reserva por WhatsApp
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
