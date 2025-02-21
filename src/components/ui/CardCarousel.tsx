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
      description: "Optimiza tus procesos web con estrategias personalizadas.",
      badge: 
      <span className=" rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
                      active
                    </span>,
    },
    {
      icon: <RiGlobalFill />,
      title: "Asesoria Especifica",
      description: "Mejora aspectos clave de tu sitio web con recomendaciones específicas.",
      badge: 
      <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
                      active
                    </span>,
    },
    {
      icon: <RiGeminiFill />,
      title: "Asesoria IA General",
      description: "Aplica IA para mejorar tu negocio, optimizar procesos, etc.",
      badge: 
      <span className=" rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
                      active
                    </span>,
    },
    {
      icon: <RiOpenaiFill />,
      title: "Asesoria IA Especifica",
      description: "Resuelve problemas web con soluciones de IA.",
      badge: 
      <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
                      active
                    </span>,
    },
    {
      icon: <RiRocketFill />,
      title: "Asesoria Integral",
      description: "Combina estrategia y tecnología para impulsar tu proyecto web.",
      badge: 
      <span className=" rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
                      active
                    </span>,
    }
  ];

  const visibleCards = 3
  const extendedCards = [...cards, ...cards]
  const totalCards = extendedCards.length

  const containerWidth = `${(totalCards / visibleCards) * 100}%`
  const cardWidth = `${100 / totalCards}%`

  return (
    <div className="relative w-full overflow-hidden">
      {/* Degradados a los costados */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

      {/* Carrusel con animación */}
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
            <div className="bg-white rounded-lg p-6 shadow-md relative">
           
              <div className="text-4xl mb-4">{card.icon}</div>
              <div className="absolute right-6 top-6">{card.badge}</div>
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
