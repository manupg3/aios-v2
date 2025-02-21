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
  const extendedCards = [...cards, ...cards]
  const totalCards = extendedCards.length

  const containerWidth = `${(totalCards / visibleCards) * 100}%`
  const cardWidth = `${100 / totalCards}%`

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex animate-scroll"
        style={{ width: containerWidth }}
      >
        {extendedCards.map((card, index) => (
          <div
            key={index}
            className="relative p-2"
            style={{ width: cardWidth }}
          >
            {/* Gradientes en los laterales */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"></div>
            </div>

            {/* Contenedor de la tarjeta */}
            <div className="relative cards-asesorias bg-white rounded-lg p-6 shadow-md">
              {/* Badge “Active” */}
              <span className="inline-flex items-center rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
                              active
                            </span>

              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-scroll {
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
