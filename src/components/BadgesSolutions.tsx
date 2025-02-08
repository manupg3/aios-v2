'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowDownLine, RiCheckLine, RiArrowRightSLine } from '@remixicon/react';
import createGlobe from 'cobe';

//
// Componente GlobeCanvas
//
function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 4;
    let globe: ReturnType<typeof createGlobe> | null = null;

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 800 * 2,
        height: 800 * 2,
        phi: 0,
        theta: -0.3,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 30000,
        mapBrightness: 13,
        mapBaseBrightness: 0.01,
        baseColor: [1, 1, 1],
        glowColor: [1, 1, 1],
        markerColor: [100, 100, 100],
        markers: [],
        onRender: function (state) {
          state.phi = phi;
          phi += 0.0005;
        },
      });
    }

    return () => {
      if (globe) {
        globe.destroy();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 800, height: 800 }}
      className="absolute -right-72 top-40 z-10 aspect-square size-full max-w-fit transition-transform group-hover:scale-[1.01] sm:top-12 lg:-right-60 lg:top-0"
    />
  );
}

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
  // Estado para el badge activo (null significa ninguno seleccionado)
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

  const cardContents: Record<string, React.ReactElement> = {
    simple: React.createElement(
      "a",
      {
        href: "/simple",
        className:
          "group relative overflow-hidden rounded-b rounded-t-2xl bg-gray-50 p-8 shadow-2xl shadow-black/10 ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/5 lg:rounded-l-2xl lg:rounded-r",
      },
      React.createElement(
        "div",
        { className: "relative z-20" },
        React.createElement(
          "h3",
          { className: "text-2xl font-semibold text-gray-950 dark:text-gray-50" },
          "AI Chatbot Integration"
        ),
        React.createElement(
          "p",
          { className: "mt-4 max-w-sm text-gray-700 dark:text-gray-400" },
          "Seamlessly integrate our advanced AI chatbots to handle customer queries instantly."
        ),
        React.createElement(
          "div",
          {
            className:
              "mt-12 flex w-fit items-center gap-0.5 rounded bg-white/10 px-2 py-1 text-blue-500 backdrop-blur-[3px]",
          },
          React.createElement("span", null, "Explore features"),
          React.createElement(RiArrowRightSLine, {
            className:
              "mt-0.5 size-5 transition-all group-hover:translate-x-1 group-hover:opacity-100 sm:opacity-20",
          })
        )
      ),
      React.createElement(GlobeCanvas, null)
    ),
    empresarial: React.createElement(
      "a",
      {
        href: "/empresarial",
        className:
          "group relative overflow-hidden rounded-b rounded-t-2xl bg-white p-8 shadow-2xl shadow-gray-300 ring-1 ring-gray-200 lg:rounded-l-2xl lg:rounded-r",
      },
      React.createElement(
        "div",
        { className: "relative z-20" },
        React.createElement(
          "h3",
          { className: "text-2xl font-semibold text-gray-800" },
          "Enterprise Solutions"
        ),
        React.createElement(
          "p",
          { className: "mt-4 max-w-sm text-gray-600" },
          "Enhance your business operations with tailored enterprise-grade solutions."
        ),
        React.createElement(
          "div",
          {
            className:
              "mt-12 flex w-fit items-center gap-0.5 rounded bg-gray-100 px-2 py-1 text-indigo-500",
          },
          React.createElement("span", null, "Learn more"),
          React.createElement(RiArrowRightSLine, {
            className: "mt-0.5 size-5 transition-all group-hover:translate-x-1",
          })
        )
      ),
      React.createElement(GlobeCanvas, null)
    ),
    ecommerce: React.createElement(
      "a",
      {
        href: "/ecommerce",
        className:
          "group relative overflow-hidden rounded-b rounded-t-2xl bg-gray-100 p-8 shadow-2xl shadow-gray-400 ring-1 ring-gray-300 lg:rounded-l-2xl lg:rounded-r",
      },
      React.createElement(
        "div",
        { className: "relative z-20" },
        React.createElement(
          "h3",
          { className: "text-2xl font-semibold text-gray-900" },
          "E-Commerce Platform"
        ),
        React.createElement(
          "p",
          { className: "mt-4 max-w-sm text-gray-700" },
          "Boost your online sales with our robust and scalable e-commerce platform."
        ),
        React.createElement(
          "div",
          {
            className:
              "mt-12 flex w-fit items-center gap-0.5 rounded bg-gray-200 px-2 py-1 text-green-500",
          },
          React.createElement("span", null, "Shop now"),
          React.createElement(RiArrowRightSLine, {
            className: "mt-0.5 size-5 transition-all group-hover:translate-x-1",
          })
        )
      ),
      React.createElement(GlobeCanvas, null)
    ),
    mantenimiento: React.createElement(
      "a",
      {
        href: "/mantenimiento",
        className:
          "group relative overflow-hidden rounded-b rounded-t-2xl bg-gray-200 p-8 shadow-2xl shadow-gray-500 ring-1 ring-gray-400 lg:rounded-l-2xl lg:rounded-r",
      },
      React.createElement(
        "div",
        { className: "relative z-20" },
        React.createElement(
          "h3",
          { className: "text-2xl font-semibold text-gray-950" },
          "Comprehensive Maintenance"
        ),
        React.createElement(
          "p",
          { className: "mt-4 max-w-sm text-gray-700" },
          "Ensure uninterrupted operations with our comprehensive maintenance services."
        ),
        React.createElement(
          "div",
          {
            className:
              "mt-12 flex w-fit items-center gap-0.5 rounded bg-gray-300 px-2 py-1 text-red-500",
          },
          React.createElement("span", null, "Get in touch"),
          React.createElement(RiArrowRightSLine, {
            className: "mt-0.5 size-5 transition-all group-hover:translate-x-1",
          })
        )
      ),
      React.createElement(GlobeCanvas, null)
    ),
    ia: React.createElement(
      "a",
      {
        href: "/ia",
        className:
          "group relative overflow-hidden rounded-b rounded-t-2xl bg-gray-300 p-8 shadow-2xl shadow-gray-600 ring-1 ring-gray-500 lg:rounded-l-2xl lg:rounded-r",
      },
      React.createElement(
        "div",
        { className: "relative z-20" },
        React.createElement(
          "h3",
          { className: "text-2xl font-semibold text-gray-800" },
          "AI Innovations"
        ),
        React.createElement(
          "p",
          { className: "mt-4 max-w-sm text-gray-700" },
          "Discover how AI can transform your business with cutting-edge innovations."
        ),
        React.createElement(
          "div",
          {
            className:
              "mt-12 flex w-fit items-center gap-0.5 rounded bg-gray-400 px-2 py-1 text-yellow-500",
          },
          React.createElement("span", null, "Discover more"),
          React.createElement(RiArrowRightSLine, {
            className: "mt-0.5 size-5 transition-all group-hover:translate-x-1",
          })
        )
      ),
      React.createElement(GlobeCanvas, null)
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
