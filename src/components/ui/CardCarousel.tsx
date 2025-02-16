'use client'
import React from "react"

const CardCarousel = () => {
  const cards = [
    { icon: "🌟", title: "Card 1", description: "Descripción de la Card 1" },
    { icon: "🌍", title: "Card 2", description: "Descripción de la Card 2" },
    { icon: "🛠️", title: "Card 3", description: "Descripción de la Card 3" },
    { icon: "📈", title: "Card 4", description: "Descripción de la Card 4" },
    { icon: "🚀", title: "Card 5", description: "Descripción de la Card 5" },
    { icon: "💡", title: "Card 6", description: "Descripción de la Card 6" },
  ]

  // Duplicamos el arreglo para lograr scroll infinito
  const extendedCards = [...cards, ...cards]

  return (
    <div className="overflow-hidden">
      {/* Contenedor de desplazamiento */}
      <div className="flex animate-scroll">
        {extendedCards.map((card, index) => (
          <div
            key={index}
            // Usamos flex-basis para que cada card ocupe exactamente un tercio del contenedor
            style={{ flex: "0 0 calc(100% / 3)" }}
          >
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Estilos de la animación */}
      <style jsx>{`
        .animate-scroll {
          /* La animación mueve el contenedor el ancho exacto de la primera copia (50% de los elementos duplicados) */
          animation: scroll 12s linear infinite;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}

export default CardCarousel
