"use client"

import { useLanguage } from "./language-provider"
import { Card } from "./ui/card"
import { BookOpen, Music2, Sparkles } from "lucide-react"

export function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: BookOpen,
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
    },
    {
      icon: Music2,
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
    },
    {
      icon: Sparkles,
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 mt-2">
                <step.icon className="h-12 w-12 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-primary/10 rounded-2xl p-8 max-w-3xl">
            <p className="text-lg md:text-xl text-foreground font-semibold">
              {t.howItWorks.cta}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
