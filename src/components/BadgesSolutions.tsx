import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowDownLine, RiCheckLine } from '@remixicon/react';

export default function BadgeSolutions() {
  // Estado para el badge activo (null significa que no hay ninguno activo)
  const [activeTab, setActiveTab] = useState(null);

  // Datos de cada badge (se conservan los estilos originales)
  const badges = [
    {
      key: 'simple',
      label: 'Solucion Simple',
      classes:
        'inline-flex items-center gap-2.5 rounded-tremor-default bg-emerald-500 px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted',
      info: 'Aquí va la información relacionada a la Solución Simple.'
    },
    {
      key: 'empresarial',
      label: 'Solucion Empresarial',
      classes:
        'span-badge-empresarial inline-flex items-center gap-2.5 rounded-tremor-default px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted',
      info: 'Aquí va la información relacionada a la Solución Empresarial.'
    },
    {
      key: 'ecommerce',
      label: 'Solucion E-Commerce',
      classes:
        'span-badge-ecommerce inline-flex items-center gap-2.5 rounded-tremor-default px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted',
      info: 'Aquí va la información relacionada a la Solución E-Commerce.'
    },
    {
      key: 'mantenimiento',
      label: 'Mantenimiento Integral',
      classes:
        'span-badge-mantenimiento inline-flex items-center gap-2.5 rounded-tremor-default px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted',
      info: 'Aquí va la información relacionada al Mantenimiento Integral.'
    },
    {
      key: 'ia',
      label: 'Solucion IA',
      classes:
        'span-badge-ia inline-flex items-center gap-2.5 rounded-tremor-default px-2.5 py-1.5 text-tremor-label font-medium text-tremor-content-inverted',
      info: 'Aquí va la información relacionada a la Solución IA.'
    }
  ];

  // Función que maneja el clic en la flecha del badge
  const handleBadgeClick = (key, e) => {
    e.preventDefault();
    // Si se hace clic en el badge activo, se cierra (vuelve null); de lo contrario se activa el nuevo
    setActiveTab(activeTab === key ? null : key);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {badges.map((badge) => (
          <span key={badge.key} className={badge.classes}>
            <span className="inline-flex items-center gap-1.5">
              <RiCheckLine className="size-4" aria-hidden={true} />
              {badge.label}
            </span>
            <span className="h-5 w-px bg-white" />
            <a href="#" onClick={(e) => handleBadgeClick(badge.key, e)}>
              <RiArrowDownLine className="size-4" aria-hidden={true} />
            </a>
          </span>
        ))}
      </div>

      {/* Card de información con animación */}
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={activeTab || 'default'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="mt-4 p-4 bg-white shadow rounded"
        >
          {activeTab
            ? badges.find((badge) => badge.key === activeTab)?.info
            : 'Selecciona una solución'}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
