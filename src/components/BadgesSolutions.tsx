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
        {/* Título principal */}
        <h2 className="text-2xl font-bold">Solución Simple</h2>
        {/* Descripción principal */}
        <p className="mt-2 text-gray-600">
          Esta es la descripción principal de la solución simple.
        </p>
        {/* Área de dos columnas */}
        <div className="mt-4 flex">
          {/* Columna izquierda (70%) */}
          <div className="w-[70%] pr-4">
            <h3 className="text-xl font-semibold">Detalles de la Solución</h3>
            <p className="mt-2 text-gray-500">
              Aquí se muestra una descripción detallada para la columna izquierda.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Ver Más
            </button>
          </div>
          {/* Columna derecha (30%) */}
          <div className="w-[30%]">
            <p className="text-gray-500">
              Información adicional en la columna derecha.
            </p>
          </div>
        </div>
      </div>
    ),
    empresarial: (
      <div className="p-8 bg-white shadow rounded">
        <h2 className="text-2xl font-bold">Solución Empresarial</h2>
        <p className="mt-2 text-gray-600">
          Esta es la descripción principal de la solución empresarial.
        </p>
        <div className="mt-4 flex">
          <div className="w-[70%] pr-4">
            <h3 className="text-xl font-semibold">Detalles Empresariales</h3>
            <p className="mt-2 text-gray-500">
              Aquí se muestra una descripción detallada para la columna izquierda.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Conocer Más
            </button>
          </div>
          <div className="w-[30%]">
            <p className="text-gray-500">
              Información adicional en la columna derecha.
            </p>
          </div>
        </div>
      </div>
    ),
    ecommerce: (
      <div className="p-8 bg-white shadow rounded">
        <h2 className="text-2xl font-bold">Solución E-Commerce</h2>
        <p className="mt-2 text-gray-600">
          Esta es la descripción principal de la solución e-commerce.
        </p>
        <div className="mt-4 flex">
          <div className="w-[70%] pr-4">
            <h3 className="text-xl font-semibold">Detalles de E-Commerce</h3>
            <p className="mt-2 text-gray-500">
              Aquí se muestra una descripción detallada para la columna izquierda.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Explorar
            </button>
          </div>
          <div className="w-[30%]">
            <p className="text-gray-500">
              Información adicional en la columna derecha.
            </p>
          </div>
        </div>
      </div>
    ),
    mantenimiento: (
      <div className="p-8 bg-white shadow rounded">
        <h2 className="text-2xl font-bold">Mantenimiento Integral</h2>
        <p className="mt-2 text-gray-600">
          Esta es la descripción principal del mantenimiento integral.
        </p>
        <div className="mt-4 flex">
          <div className="w-[70%] pr-4">
            <h3 className="text-xl font-semibold">Detalles del Mantenimiento</h3>
            <p className="mt-2 text-gray-500">
              Aquí se muestra una descripción detallada para la columna izquierda.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Solicitar Información
            </button>
          </div>
          <div className="w-[30%]">
            <p className="text-gray-500">
              Información adicional en la columna derecha.
            </p>
          </div>
        </div>
      </div>
    ),
    ia: (
      <div className="p-8 bg-white shadow rounded">
        <h2 className="text-2xl font-bold">Solución IA</h2>
        <p className="mt-2 text-gray-600">
          Esta es la descripción principal de la solución de IA.
        </p>
        <div className="mt-4 flex">
          <div className="w-[70%] pr-4">
            <h3 className="text-xl font-semibold">Detalles de la Solución IA</h3>
            <p className="mt-2 text-gray-500">
              Aquí se muestra una descripción detallada para la columna izquierda.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Descubrir Más
            </button>
          </div>
          <div className="w-[30%]">
            <p className="text-gray-500">
              Información adicional en la columna derecha.
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
          className="mt-4"
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
