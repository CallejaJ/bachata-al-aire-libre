"use client"

import { useLanguage } from "./language-provider"
import { Card } from "./ui/card"
import { useEffect, useState } from "react"

interface Photo {
  id: string
  urls: {
    regular: string
    small: string
  }
  alt_description: string | null
}

export function PhotoSlider() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)

  // Cargar imágenes de Unsplash al montar el componente
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Usamos la API de Unsplash
        // Para producción, deberías obtener una API key en https://unsplash.com/developers
        const queries = ["salsa dance", "bachata dance"]
        const allPhotos: Photo[] = []
        
        for (const query of queries) {
          // Hacemos fetch a la API de Unsplash
          const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=8&client_id=AjqjOdBf4AXuxTNDqnX558xFb2pjKb78_fn3Sv2ZzCo`,
            {
              headers: {
                'Accept': 'application/json'
              }
            }
          )
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          
          const data = await response.json()
          
          if (data.results && data.results.length > 0) {
            const photos = data.results.map((photo: any) => ({
              id: photo.id,
              urls: {
                regular: photo.urls.regular,
                small: photo.urls.small
              },
              alt_description: photo.alt_description || photo.description || `${query} photo`
            }))
            allPhotos.push(...photos)
          }
        }
        
        // Eliminar duplicados basándose en el ID
        const uniquePhotos = allPhotos.filter((photo, index, self) =>
          index === self.findIndex((p) => p.id === photo.id)
        )
        
        // Mezclar aleatoriamente y tomar solo 15 fotos
        const shuffled = uniquePhotos.sort(() => Math.random() - 0.5)
        setPhotos(shuffled.slice(0, 15))
        setLoading(false)
      } catch (error) {
        console.error("Error loading photos:", error)
        // En caso de error, usamos imágenes de placeholder
        const fallbackPhotos = Array.from({ length: 15 }, (_, i) => ({
          id: `placeholder-${i}`,
          urls: {
            regular: `https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=1600&h=900&fit=crop`,
            small: `https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=400&h=300&fit=crop`
          },
          alt_description: i % 2 === 0 ? "Salsa dance" : "Bachata dance"
        }))
        setPhotos(fallbackPhotos)
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [])

  useEffect(() => {
    // Solo iniciar el intervalo si hay fotos cargadas
    if (photos.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [photos.length])

  return (
    <section className="bg-muted py-20 px-4">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-balance font-bold text-foreground text-4xl md:text-5xl">
          {t.slider.title}
        </h2>

        <div className="relative mx-auto max-w-6xl">
          {/* Main Slider */}
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            {loading ? (
              <div className="flex h-full w-full items-center justify-center bg-muted">
                <p className="text-muted-foreground">Cargando imágenes...</p>
              </div>
            ) : (
              photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={photo.urls.regular}
                    alt={photo.alt_description || `Dance photo ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))
            )}
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
                  src={photo.urls.small}
                  alt={`Thumbnail ${index + 1}`}
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
