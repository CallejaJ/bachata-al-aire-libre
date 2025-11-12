"use client"

import { useLanguage } from "./LanguageProvider"
import { Card } from "./ui/card"
import { Heart, Sun, Smile, Music } from "lucide-react"

export function Benefits() {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: Heart,
      title: t.benefits.benefit1.title,
      description: t.benefits.benefit1.description,
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950",
    },
    {
      icon: Sun,
      title: t.benefits.benefit2.title,
      description: t.benefits.benefit2.description,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950",
    },
    {
      icon: Smile,
      title: t.benefits.benefit3.title,
      description: t.benefits.benefit3.description,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950",
    },
    {
      icon: Music,
      title: t.benefits.benefit4.title,
      description: t.benefits.benefit4.description,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950",
    },
  ]

  return (
    <section id="beneficios" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.benefits.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.benefits.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary group"
            >
              {/* Icon with background */}
              <div className={`mb-6 inline-flex p-4 rounded-2xl ${benefit.bgColor} group-hover:scale-110 transition-transform`}>
                <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl text-foreground font-medium max-w-3xl mx-auto">
            {t.benefits.footer}
          </p>
        </div>
      </div>
    </section>
  )
}
