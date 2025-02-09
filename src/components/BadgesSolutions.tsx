'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowDownLine, RiCheckLine } from '@remixicon/react';


//
// Interfaz para los badges
//
interface Badge {
  key: string;
  label: string;
  classes: string;
}

//
// Componente principal: BadgeSolutions
//
export default function BadgeSolutions() {
  // Estado para el badge activo (null significa que no hay ninguno seleccionado)
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Datos de los badges (se conservan los estilos originales)
  const badges: Badge[] = [
    {
      key: 'simple',
      label: 'Solucion Simple',
      classes:
        'inline-flex items-center gap-2.5 rounded-tremor-default bg-emerald-500 px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted',
    },
    {
      key: 'empresarial',
      label: 'Solucion Empresarial',
      classes:
        'span-badge-empresarial inline-flex items-center gap-2.5 rounded-tremor-default px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted',
    },
    {
      key: 'ecommerce',
      label: 'Solucion E-Commerce',
      classes:
        'span-badge-ecommerce inline-flex items-center gap-2.5 rounded-tremor-default px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted',
    },
    {
      key: 'mantenimiento',
      label: 'Mantenimiento Integral',
      classes:
        'span-badge-mantenimiento inline-flex items-center gap-2.5 rounded-tremor-default px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted',
    },
    {
      key: 'ia',
      label: 'Solucion IA',
      classes:
        'span-badge-ia inline-flex items-center gap-2.5 rounded-tremor-default px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted',
    },
  ];

  // Mapeo de cada badge a su contenido (estructura de la card)
  const cardContents: Record<string, React.ReactElement> = {
    simple: (
      <div className="p-8 bg-white shadow rounded">
        <span className="text-sm font-bold">Solución Simple</span>
        <h2 className="mt-2  bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-5xl">          Transforma tu presencia digital.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
        Desarrollamos páginas clave en tiempo record, landings conversionales, 
        one pages estratégicas y sitios básicos con diseños optimizados para resultados inmediatos.
        </p>
        <div className="mt-4 flex gap-4">
          <div className="container-col-left w-[70%] pr-4 bg-gray-50  shadow-2xl shadow-black/10">
            <h3 className="text-2xl font-semibold text-gray-950 dark:text-gray-50">
                1 a 3 Páginas 
                <span>Landings</span>
                <span>Hasta 3 Paginas</span>
                <span>Formularios</span>
                <span>Integraciones</span>
                <span>Panel Administrador</span>
                </h3>
            <p className="mt-2 text-gray-500">
            Si quieres dar tus primeros pasos en el entorno digital o necesitas presencia en línea rápidamente, 
            nuestras Soluciones 
            Web Simples brindan lo esencial sin complicaciones.
           </p>
            <button className="btn-card-simple mt-4 px-4 py-2 rounded">
              Cotizar Solucion
            </button>
          </div>
          {/* Columna derecha (30%) */}
          <div className="w-[30%] container-col-right simple">
            <p className="text-gray-500">
            Ideal para emprendimientos y pequeños negocios, este tipo de sitio incluye de 1 a 3 páginas esenciales (Inicio, Sobre Nosotros y Contacto, por ejemplo), con un diseño profesional y adaptado para dispositivos móviles.            </p>
          </div>
        </div>
      </div>
    ),
    empresarial: (
      <div className="p-8 bg-white shadow rounded">
        <span className="text-sm font-bold">Solución Empresarial</span>
        <h2 className="mt-2  bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-5xl">Lleva tu empresa al proximo nivel</h2>
        <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
        Si tu empresa requiere una presencia digital avanzada con un diseño personalizado y escalable, nuestras Soluciones Web Empresariales ofrecen páginas e integraciones ilimitadas sin complicaciones.
       </p>
        <div className="mt-4 flex gap-4">
          <div className="container-col-left w-[70%] pr-4 bg-gray-50  shadow-2xl shadow-black/10">
          <h3 className="text-2xl font-semibold text-gray-950 dark:text-gray-50">
                Pack Empresarial Completo 
                <span>Pagina Ilimitadas</span>
                <span>Integraciones IA</span>
                <span>Flujos de Contacto/Remarketing</span>
                <span>Integraciones Ilimitadas</span>
                <span>Panel Empresarial</span> 
                </h3>
            <p className="mt-2 text-gray-500">
            Impulsa tu empresa con una solución empresarial a medida, con páginas ilimitadas, integraciones avanzadas e IA para optimizar procesos y expandir tu negocio.
            </p>
            <button className="btn-card-empresarial mt-4 px-4 py-2 rounded">
            Cotizar Solucion
            </button>
          </div>
          <div className="w-[30%] container-col-right empresarial">
            <p className="text-gray-500">
            Pensada para empresas y organizaciones, esta solución web ofrece un número ilimitado de páginas personalizadas (Inicio, Servicios, Equipo, entre otras), con un diseño profesional y optimizado para cualquier dispositivo, garantizando la máxima presencia.
            </p>
          </div>
        </div>
      </div>
    ),
    ecommerce: (
      <div className="p-8 bg-white shadow rounded">
        <span className="text-sm font-bold">Solución E-Commerce</span> 
        <h2 className="mt-2  bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-5xl">Diseños y funcionalidades optimizadas</h2>
        <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
        Para nuevas tiendas y comercios existentes que busquen ampliar su presencia digital, nuestras Soluciones E-Commerce ofrecen una plataforma sólida y funcional, diseñada para un crecimiento continuo y libre de complicaciones.
        </p>
        <div className="mt-4 flex gap-4">
          <div className="container-col-left w-[70%] pr-4 bg-gray-50  shadow-2xl shadow-black/10">
          <h3 className="text-2xl font-semibold text-gray-950 dark:text-gray-50">
                Todo En Uno 
                <span>Paginas Ilimitadas</span>
                <span>Medios De Envio</span>
                <span>Medios De Pago</span>
                <span>Multiples Potenciadores De Ventas</span>
                <span>Integraciones IA</span>
                </h3>
            <p className="mt-2 text-gray-500">
            Impulsa tu negocio con nuestra solución Todo en Uno: páginas ilimitadas, envíos y pagos flexibles
            , IA para análisis y chatbots, optimizando la experiencia del cliente y maximizando resultados.</p>
            <button className="btn-card-ecommerce mt-4 px-4 py-2 rounded">
            Cotizar Solucion
            </button>
          </div>
          <div className="w-[30%] container-col-right ecommerce">
            <p className="text-gray-500">
            Ideal para quienes buscan una solución de comercio electrónico ágil y de alto desempeño, con un diseño profesional, adaptación móvil y funcionalidades IA para mejorar la atención al cliente y optimizar las ventas.
           </p>
          </div>
        </div>
      </div>
    ),
    mantenimiento: (
      <div className="p-8 bg-white ">
        <span className="text-sm font-bold">Mantenimiento Integral</span>    
        <h2 className="mt-2  bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-5xl">Tu web o aplicacion actualizado y optimizado</h2>
        <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
        Ofrecemos mantenimiento integral para sitios web, e-commerce y aplicaciones, garantizando un óptimo rendimiento, actualizaciones continuas y la seguridad necesaria para que tu negocio se mantenga siempre a la vanguardia.
        </p>
        <div className="mt-4 flex gap-4">
          <div className="container-col-left w-[70%] pr-4 bg-gray-50  shadow-2xl shadow-black/10">
          <h3 className="text-2xl font-semibold text-gray-950 dark:text-gray-50">
                 Actualizado y Optmizado
                <span>Landings</span>
                <span>Sitios Empresariales</span>
                <span>E-Commerce</span>
                <span>A Medida</span>
                <span>Multiples Plataformas</span>
                </h3>
            <p className="mt-4 max-w-sm text-gray-700 dark:text-gray-400">
            Mantén tu plataforma actualizada y optimizada. Ofrecemos soporte para sitios empresariales, e-commerce y soluciones a medida, garantizando estabilidad y resultados.</p>
            <button className="btn-card-mantenimiento mt-4 px-4 py-2 rounded">
            Cotizar Mantenimiento
            </button>
          </div>
          <div className="w-[30%] container-col-right mantenimiento">
            <p className="mt-4 max-w-sm text-gray-700 dark:text-gray-400">
            Ideal para negocios de cualquier tamaño, nuestro servicio de mantenimiento garantiza un rendimiento estable y una adaptación óptima para dispositivos móviles, manteniendo tu sitio siempre actualizado, optimizado y seguro.
           </p>
          </div>
        </div>
      </div>
    ),
    ia: (
      <div className="p-8 bg-white shadow rounded">
        <span className="text-sm font-bold">Solución IA</span>      
        <h2 className="mt-2  bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-5xl">Revoluciona tu marca con IA</h2>
        <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
        Ofrecemos soluciones de Inteligencia Artificial que integran chatbots para una atención automatizada y eficiente, junto con un analizador de ventas que te permite procesar datos en tiempo real, optimizar estrategias y tomar decisiones informadas para impulsar el crecimiento de tu negocio.
        </p>
        <div className="mt-4 flex gap-4">
          <div className="container-col-left w-[70%] pr-4 bg-gray-50  shadow-2xl shadow-black/10">
          <h3 className="text-2xl font-semibold text-gray-950 dark:text-gray-50">
                Chatbots, Analizadores y Mucho Mas 
                <span>Chatbots</span>
                <span>Analizadores De Ventas</span>
                <span>Integracion ChatGpt - DeepSeek</span>
                <span>Configuracion Simple</span>
                </h3>
            <p className="mt-4 max-w-sm text-gray-700 dark:text-gray-400">
            Optimiza tu negocio con chatbots, analizadores de ventas e integración de IA, con una configuración simple para maximizar resultados.
            </p>
            <button className="btn-card-ia mt-4 px-4 py-2 rounded w-max">
            Cotizar Solucion
          </button>
          </div>
          <div className="w-[30%] container-col-right ia">
            <p className="mt-4 max-w-sm text-gray-700 dark:text-gray-400">
            Ideal para quienes buscan integrar IA de manera ágil y efectiva, desarrollamos soluciones a medida, escalables y diseñadas con tecnología de vanguardia para optimizar decisiones y mejorar la competitividad.

            </p>
          </div>
        </div>
      </div>
    ),
  };

  // Función que maneja el clic en la flecha del badge
  const handleBadgeClick = (
    key: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setActiveTab(activeTab === key ? null : key);
  };

  return (
    <>
      {/* Sección de badges */}
      <div className="flex flex-wrap justify-center gap-4">
        {badges.map((badge) => (
          <span key={badge.key} className={badge.classes}>
            <span className="inline-flex items-center gap-1.5">
              <RiCheckLine className="size-4" aria-hidden="true" />
              {badge.label}
            </span>
            <span className="h-5 w-px bg-white" />
            <a href="#" onClick={(e) => handleBadgeClick(badge.key, e)}>
              <RiArrowDownLine className="size-4" aria-hidden="true" />
            </a>
          </span>
        ))}
      </div>

      {/* Card de contenido con animación */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab || 'default'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="mt-4 container-solutions-description"
        >
          {activeTab ? (
            cardContents[activeTab]
          ) : (
            <div className="p-4 bg-white shadow rounded">
              Selecciona una solución
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
