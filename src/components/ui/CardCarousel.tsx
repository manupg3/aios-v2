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

  const visibleCards = 3
  // Duplicamos las cards para lograr el efecto infinito.
  const extendedCards = [...cards, ...cards]
  const totalCards = extendedCards.length // 12 cards

  // Calculamos el ancho del contenedor interno.
  // Cada card ocupará 1/totalCards del ancho total.
  // El contenedor tendrá un ancho de (totalCards/visibleCards)*100% para que en pantalla se muestren "visibleCards".
  const containerWidth = `${(totalCards / visibleCards) * 100}%` // en este caso, (12/3)*100 = 400%
  const cardWidth = `${100 / totalCards}%` // cada card ocupará 100/12 % del contenedor interno

  return (
    <div className="overflow-hidden">
      <div 
        className="flex animate-scroll" 
        style={{ width: containerWidth }}
      >
        {extendedCards.map((card, index) => (
          <div 
            key={index}
            className="p-2"
            style={{ width: cardWidth }}
          >
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-scroll {
          /* Se desplaza el 50% del ancho total, que equivale a la primera copia (6 cards) */
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
