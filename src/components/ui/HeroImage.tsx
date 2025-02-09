"use client"

import { useEffect, useState } from "react"
import ThemedImage from "./ThemedImage"

interface ImageProps {
  lightSrc: string
  darkSrc: string
  alt: string
}

const images: ImageProps[] = [
  {
    lightSrc: "/images/simple-1.png",
    darkSrc: "/images/hero1-dark.webp",
    alt: "Vista previa 1 de la aplicación",
  },
  {
    lightSrc: "/images/business-1.png",
    darkSrc: "/images/hero2-dark.webp",
    alt: "Vista previa 2 de la aplicación",
  },
  {
    lightSrc: "/images/ecommerce-1.png",
    darkSrc: "/images/hero3-dark.webp",
    alt: "Vista previa 3 de la aplicación",
  },
  // Agrega más objetos si quieres más imágenes
]

export default function HeroImage() {
  // Índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0)

  // Cada 5 segundos pasamos a la siguiente imagen (carrusel básico)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section aria-label="Hero Image Slideshow" className="flow-root relative">
      {/* Contenedor para superponer todas las imágenes en la misma posición */}
      <div className="container-imgs-hero relative overflow-hidden rounded-2xl bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
        {/* Cada imagen se ubica con position absolute, 
            mostrando solo la imagen que coincida con `currentIndex` */}
        {images.map((img, i) => (
          <div
            key={i}
            // Fade-in para la imagen "activa" y fade-out para el resto
            className={`
              absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
          >
            <div className="rounded-xl bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
              <ThemedImage
                lightSrc={img.lightSrc}
                darkSrc={img.darkSrc}
                alt={img.alt}
                width={2400}
                height={1600}
                className="rounded-xl shadow-2xl dark:shadow-indigo-600/10"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
