'use client'
import { useState } from "react"
import { Badge } from "@/components/Badge"
import Balancer from "react-wrap-balancer"
import Bento from "@/components/ui/bento"
import GridFeatures from "@/components/GridFeatures"
import Cta from "../../../Cta"
import StepsHorizontal from "@/components/ui/StepsHorizontal"

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
        <div className="tabs flex justify-center space-x-4 mb-4 mt-8">
          <button
            onClick={() => setActiveTab(0)}
            className={`px-4 py-2 border-b-2 ${activeTab === 0 ? 'btn-tabs-plantillas border-blue-500' : 'text-gray-500 border-transparent'
              }`}
          >
            Solucion Simple
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`px-4 py-2 border-b-2 ${activeTab === 1 ? 'btn-tabs-plantillas ' : 'text-gray-500 border-transparent'
              }`}
          >
            Solucion Empresarial
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`px-4 py-2 border-b-2 ${activeTab === 2 ? 'btn-tabs-plantillas ' : 'text-gray-500 border-transparent'
              }`}
          >
            Solucion E-Commerce
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 0 && (
            <div key="tab0" className="animate-fade-in">
              <div className='container-badges-bento-tabs'><span>Landings</span><span>Up To 3 Pages</span><span>Emprendedores</span><span>Integracion IA</span><span>Pequeños Negocios</span></div>
              <Bento
                topLeft={{
                  src: '/images/business-1.png',
                  alt: 'Imagen 1',
                  cardContent: (
                    <div className="container-info-floating-card">
                      <h3 className="text-lg font-bold">Lumine</h3>
                      <p>Elegancia y claridad.</p>
                      <a className="a-ver-demo" href="#" target="_blank">Ver Demo<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#4f46e5" stroke-width="1" stroke-linecap="round" stroke-linejoin="miter"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="17 14 17 7 10 7"></polyline><line x1="7" y1="17" x2="17" y2="7"></line></g></svg></a>  
                    </div>
                  ),
                }}
                topRight={{
                  src: '/images/simple-1.png',
                  alt: 'Imagen 2',
                  cardContent: (
                    <div className="container-info-floating-card">
                      <h3 className="text-lg font-bold">Astra</h3>
                      <p>Moderna y versátil.</p>
                      <a className="a-ver-demo" href="#" target="_blank">Ver Demo<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#4f46e5" stroke-width="1" stroke-linecap="round" stroke-linejoin="miter"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="17 14 17 7 10 7"></polyline><line x1="7" y1="17" x2="17" y2="7"></line></g></svg></a>  
                    </div>
                  ),
                }}
                bottomLeft={{
                  src: '/images/simple-1.png',
                  alt: 'Imagen 3',
                  cardContent: (
                    <div className="container-info-floating-card">
                      <h3 className="text-lg font-bold">Glow</h3>
                      <p>Cálida y acogedora.</p>
                      <a className="a-ver-demo" href="#" target="_blank">Ver Demo<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#4f46e5" stroke-width="1" stroke-linecap="round" stroke-linejoin="miter"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="17 14 17 7 10 7"></polyline><line x1="7" y1="17" x2="17" y2="7"></line></g></svg></a>  
                    </div>
                  ),
                }}
                bottomRight={{
                  src: '/images/ecommerce-1.png',
                  alt: 'Imagen 4',
                  cardContent: (
                    <div className="container-info-floating-card">
                      <h3 className="text-lg font-bold">Flux</h3>
                      <p>Dinámica y llamativa.</p>
                      <a className="a-ver-demo" href="#" target="_blank">Ver Demo<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#4f46e5" stroke-width="1" stroke-linecap="round" stroke-linejoin="miter"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="17 14 17 7 10 7"></polyline><line x1="7" y1="17" x2="17" y2="7"></line></g></svg></a>  
                    </div>
                  ),
                }}
              />
            </div>
          )}
          {activeTab === 1 && (
            <div key="tab1" className="animate-fade-in">
              <div className='container-badges-bento-tabs'><span>Paginas Ilimitadas</span><span>Diseños Premium</span><span>Medianas y Grandes Empresas</span><span>Integracion IA</span><span>Integraciones de Terceros</span></div>
              <Bento
                topLeft={{
                  src: '/images/business-1.png',
                  alt: 'Imagen 1',
                  cardContent: (
                    <div>
                      <h3 className="text-lg font-bold">Solución Empresarial</h3>
                      <p>Detalles y características exclusivas.</p>
                    </div>
                  ),
                }}
                topRight={{
                  src: '/images/simple-1.png',
                  alt: 'Imagen 2',
                  cardContent: (
                    <div>
                      <h3 className="text-lg font-bold">Solución Simple</h3>
                      <p>Todo lo que necesitas en un solo lugar.</p>
                    </div>
                  ),
                }}
                bottomLeft={{
                  src: '/images/simple-1.png',
                  alt: 'Imagen 3',
                  cardContent: (
                    <div>
                      <h3 className="text-lg font-bold">Más Información</h3>
                      <p>Explicación detallada de la solución.</p>
                    </div>
                  ),
                }}
                bottomRight={{
                  src: '/images/ecommerce-1.png',
                  alt: 'Imagen 4',
                  cardContent: (
                    <div>
                      <h3 className="text-lg font-bold">Solución E-Commerce</h3>
                      <p>Optimizada para ventas en línea.</p>
                    </div>
                  ),
                }}
              />
            </div>
          )}
          {activeTab === 2 && (
            <div key="tab2" className="animate-fade-in">
              <div className='container-badges-bento-tabs'><span>Para Todo Tipo de Nicho</span><span>Medios de Envio</span><span>Medios de Pago</span><span>Integracion IA</span><span>Potenciador De Ventas</span></div>
              <Bento
                topLeft={{
                  src: '/images/business-1.png',
                  alt: 'Imagen 1',
                  cardContent: (
                    <div>
                      <h3 className="text-lg font-bold">Solución Empresarial</h3>
                      <p>Detalles y características exclusivas.</p>
                    </div>
                  ),
                }}
                topRight={{
                  src: '/images/simple-1.png',
                  alt: 'Imagen 2',
                  cardContent: (
                    <div>
                      <h3 className="text-lg font-bold">Solución Simple</h3>
                      <p>Todo lo que necesitas en un solo lugar.</p>
                    </div>
                  ),
                }}
                bottomLeft={{
                  src: '/images/simple-1.png',
                  alt: 'Imagen 3',
                  cardContent: (
                    <div>
                      <h3 className="text-lg font-bold">Más Información</h3>
                      <p>Explicación detallada de la solución.</p>
                    </div>
                  ),
                }}
                bottomRight={{
                  src: '/images/ecommerce-1.png',
                  alt: 'Imagen 4',
                  cardContent: (
                    <div>
                      <h3 className="text-lg font-bold">Solución E-Commerce</h3>
                      <p>Optimizada para ventas en línea.</p>
                    </div>
                  ),
                }}
              />
            </div>
          )}
        </div>
      </section>
      <section className="grid-features">
      <GridFeatures />
      </section>
      <StepsHorizontal />     
      <Cta />
     
    </div>
  )
}
