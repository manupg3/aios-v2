import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabsData = [
  {
    id: 0,
    title: 'Admin Personalizado',
    content: (
      <div className="card flex">
        <div className='col-left-card-img'>
        <img src='./public/images/img-admin-premium.png' alt='img-col-left' />   
        </div>
        <div className='col-right-card-info'>
        <h2>Admin intuitivo y moderno</h2>
        <p>Diseñamos admin unicos y personalizados para cada solucion.</p>
        <ul>
          <li>Movie 1</li>
          <li>Movie 2</li>
        </ul>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    title: 'Integracion IA',
    content: (
      <div className="card">
        <h2>Invoice</h2>
        <p>Contenido relacionado con facturas...</p>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Potenciador de Ventas',
    content: (
      <div className="card">
        <h2>Shopping List</h2>
        <p>Lista de compras pendiente...</p>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Diseños Premium',
    content: (
      <div className="card">
        <h2>Friday Meeting</h2>
        <p>Detalles de la reunión del viernes...</p>
      </div>
    ),
  },
]

// Variants para controlar el slide (desde arriba/abajo) y el bounce
const variants = {
  enterFromTop: {
    y: -50,
    opacity: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  enterFromBottom: {
    y: 50,
    opacity: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  center: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  exitToTop: {
    y: -50,
    opacity: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  exitToBottom: {
    y: 50,
    opacity: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
}

export default function VerticalTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const previousTab = useRef(activeTab)

  // Determina si vamos "hacia abajo" o "hacia arriba"
  const direction = activeTab > previousTab.current ? 'down' : 'up'

  // Actualiza el tab anterior después de montar/render
  React.useEffect(() => {
    previousTab.current = activeTab
  }, [activeTab])

  return (
    <div className="vertical-tabs-container">
      {/* Sección de tabs a la izquierda */}
      <div className="tabs-list">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Sección de contenido a la derecha */}
      <div className="tab-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            // Estados inicial, animado y de salida, según la dirección
            initial={direction === 'down' ? 'enterFromTop' : 'enterFromBottom'}
            animate="center"
            exit={direction === 'down' ? 'exitToBottom' : 'exitToTop'}
            variants={variants}
            className="content-wrapper"
          >
            {tabsData[activeTab].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
