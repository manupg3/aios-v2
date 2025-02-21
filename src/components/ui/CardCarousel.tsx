'use client'
import React from "react"
import {
  RiOpenaiFill,
  RiFile3Fill,
  RiGeminiFill,
  RiGlobalFill,
  RiRocketFill
} from "@remixicon/react"

const CardCarousel = () => {
  const cards = [
    {
      icon: <RiFile3Fill />,
      title: "Asesoria General",
      description: "Optimiza tus procesos web con estrategias personalizadas."
    },
    {
      icon: <RiGlobalFill />,
      title: "Asesoria Especifica",
      description: "Mejora aspectos clave de tu sitio web con recomendaciones específicas."
    },
    {
      icon: <RiGeminiFill />,
      title: "Asesoria IA General",
      description: "Aplica IA para mejorar tu negocio, optimizar procesos, etc."
    },
    {
      icon: <RiOpenaiFill />,
      title: "Asesoria IA Especifica",
      description: "Resuelve problemas web con soluciones de IA."
    },
    {
      icon: <RiRocketFill />,
      title: "Asesoria Integral",
      description: "Combina estrategia y tecnología para impulsar tu proyecto web."
    }
  ];

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
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white"></div>
      </div>
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
            <div className="cards-asesorias bg-white rounded-lg p-6">
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
          animation: scroll 30s linear infinite;
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
