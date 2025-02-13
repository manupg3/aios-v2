'use client'
import { useState } from "react"
import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import Benefits from "@/components/ui/Benefits"
import TeamGallery from "@/components/ui/TeamGallery"
import { cx } from "@/lib/utils"
import Balancer from "react-wrap-balancer"
import Bento from "@/components/ui/bento"

export default function Plantillas() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="about-overview"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>Plantillas</Badge>
        <h1
          id="about-overview"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          <Balancer>
            Diseños innovadores y de vanguardia.
          </Balancer>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
          Impulsamos la creatividad con soluciones tecnológicas innovadoras.  
          <br /> 
          Desde el diseño hasta la funcionalidad, creamos experiencias digitales que marcan la diferencia.
        </p>
      </section>

      {/* Sección de Tabs con el componente Bento */}
      <section className="container-bento">
        <div className="tabs flex justify-center space-x-4 mb-4">
          <button 
            onClick={() => setActiveTab(0)}
            className={`px-4 py-2 border-b-2 ${
              activeTab === 0 ? 'text-blue-500 border-blue-500' : 'text-gray-500 border-transparent'
            }`}
          >
            Solucion Simple
          </button>
          <button 
            onClick={() => setActiveTab(1)}
            className={`px-4 py-2 border-b-2 ${
              activeTab === 1 ? 'text-blue-500 border-blue-500' : 'text-gray-500 border-transparent'
            }`}
          >
            Solucion Empresarial
          </button>
          <button 
            onClick={() => setActiveTab(2)}
            className={`px-4 py-2 border-b-2 ${
              activeTab === 2 ? 'text-blue-500 border-blue-500' : 'text-gray-500 border-transparent'
            }`}
          >
            Solucion E-Commerce
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 0 && (
            <div key="tab0" className="animate-fade-in">
              <Bento
                topLeft={{ src: '/images/business-1.png', alt: 'Imagen 1' }}
                topRight={{ src: '/images/simple-1.png', alt: 'Imagen 2' }}
                bottomLeft={{ src: '/images/simple-1.png', alt: 'Imagen 3' }}
                bottomRight={{ src: '/images/ecommerce-1.png', alt: 'Imagen 4' }}
              />
            </div>
          )}
          {activeTab === 1 && (
            <div key="tab1" className="animate-fade-in">
              <Bento
                topLeft={{ src: '/images/business-2.png', alt: 'Imagen 5' }}
                topRight={{ src: '/images/simple-2.png', alt: 'Imagen 6' }}
                bottomLeft={{ src: '/images/simple-2.png', alt: 'Imagen 7' }}
                bottomRight={{ src: '/images/ecommerce-2.png', alt: 'Imagen 8' }}
              />
            </div>
          )}
          {activeTab === 2 && (
            <div key="tab2" className="animate-fade-in">
              <Bento
                topLeft={{ src: '/images/business-3.png', alt: 'Imagen 9' }}
                topRight={{ src: '/images/simple-3.png', alt: 'Imagen 10' }}
                bottomLeft={{ src: '/images/simple-3.png', alt: 'Imagen 11' }}
                bottomRight={{ src: '/images/ecommerce-3.png', alt: 'Imagen 12' }}
              />
            </div>
          )}
        </div>
      </section>

      <TeamGallery />
      <Benefits />

      <section aria-labelledby="vision-title" className="mx-auto mt-40">
        <h2
          id="vision-title"
          className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl dark:from-gray-50 dark:to-gray-300"
        >
          Our Vision
        </h2>
        <div className="mt-6 max-w-prose space-y-4 text-gray-600 dark:text-gray-400">
          <p className="text-lg leading-8">
            We envision a world where data management is no longer a complex
            challenge but a powerful advantage. By integrating cutting-edge AI
            into database solutions, we aim to transform raw data into strategic
            assets, empowering businesses to innovate faster and more
            efficiently.
          </p>
          <p className="text-lg leading-8">
            We believe in removing the barriers of data complexity and
            scalability, enabling teams to focus on insights and innovations
            rather than maintenance and management. Our goal is to equip every
            organization with the tools they need to harness the full potential
            of their data, driving growth and excellence in every interaction.
          </p>
          <p
            className={cx(
              "w-fit rotate-3 font-handwriting text-3xl text-indigo-600 dark:text-indigo-400",
            )}
          >
            – Alex and Robin
          </p>
        </div>
        <Button className="mt-32 h-10 w-full shadow-xl shadow-indigo-500/20">
          View Open Roles
        </Button>
      </section>
    </div>
  )
}
