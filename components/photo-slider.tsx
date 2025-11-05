"use client"

import { useLanguage } from "./language-provider"
import { Card } from "./ui/card"
import { useEffect, useState } from "react"

const photos = [
  { id: 1, query: "salsa+dancing+class+group+happy" },
  { id: 2, query: "bachata+dance+couple+romantic" },
  { id: 3, query: "latin+dance+instructor+teaching" },
  { id: 4, query: "salsa+party+people+dancing" },
  { id: 5, query: "dance+studio+group+lesson" },
  { id: 6, query: "bachata+sensual+dance+performance" },
]

export function PhotoSlider() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-muted py-20 px-4">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-balance font-bold text-foreground text-4xl md:text-5xl">
          {t.slider.title}
        </h2>

        <div className="relative mx-auto max-w-6xl">
          {/* Main Slider */}
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={`/.jpg?height=600&width=1200&query=${photo.query}`}
                  alt={`Dance photo ${photo.id}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Thumbnails */}
          <div className="mt-6 grid grid-cols-3 gap-4 md:grid-cols-6">
            {photos.map((photo, index) => (
              <Card
                key={photo.id}
                className={`cursor-pointer overflow-hidden transition-all hover:scale-105 shadow-md hover:shadow-lg ${
                  index === currentIndex ? "ring-4 ring-primary shadow-xl" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={`/.jpg?height=150&width=200&query=${photo.query}`}
                  alt={`Thumbnail ${photo.id}`}
                  className="aspect-video w-full object-cover"
                />
              </Card>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
