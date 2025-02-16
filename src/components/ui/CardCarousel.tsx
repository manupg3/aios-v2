'use client'
import React, { useState, useEffect } from "react"

const CardCarousel = () => {
  // Datos de ejemplo para las cards
  const cards = [
    { icon: "🌟", title: "Card 1", description: "Descripción de la Card 1" },
    { icon: "🌍", title: "Card 2", description: "Descripción de la Card 2" },
    { icon: "🛠️", title: "Card 3", description: "Descripción de la Card 3" },
    { icon: "📈", title: "Card 4", description: "Descripción de la Card 4" },
    { icon: "🚀", title: "Card 5", description: "Descripción de la Card 5" },
    { icon: "💡", title: "Card 6", description: "Descripción de la Card 6" },
  ]

  // Número de cards visibles en pantalla
  const visibleCards = 3

  // Para lograr el efecto infinito, clonamos las primeras "visibleCards" al final
  const extendedCards = [...cards, ...cards.slice(0, visibleCards)]

  // Estado para el índice actual del carrusel
  const [currentIndex, setCurrentIndex] = useState(0)
  // Estado para controlar la transición (se desactiva momentáneamente al hacer el "reset" infinito)
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  // Configuración del autoplay: se avanza 1 card cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Cuando la transición termina, si estamos en los clones, se hace el "reset" al inicio sin animación
  const handleTransitionEnd = () => {
    if (currentIndex === cards.length) {
      setTransitionEnabled(false)
      setCurrentIndex(0)
      // Rehabilitamos la transición en el siguiente tick
      setTimeout(() => {
        setTransitionEnabled(true)
      }, 50)
    }
  }

  return (
    <div className="overflow-hidden relative">
      {/* Contenedor interno con display flex para las cards */}
      <div
        className="flex"
        style={{
          // Cada card ocupa 1/3 del ancho, por eso desplazamos en múltiplos de 100/visibleCards
          transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
          transition: transitionEnabled ? "transform 0.5s ease-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedCards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-1/3 p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardCarousel
