import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiArrowRightUpLine

} from "@remixicon/react"


const tabsData = [
  {
    id: 0,
    title: 'Admin Personalizado',
    content: (
<div>
      <div className="card flex gap-4">
        <div className='col-left-card-img'>
        <img src='./images/img-admin-premium.png' alt='img-col-left' />   
        </div>
        <div className='col-right-card-info'>
        <h2>Intuitivo y moderno</h2>
        <p>Diseñamos admin unicos y personalizadospara cada solucion.</p>
    
        </div>
      </div>

      <div className='flex justify-center py-6 gap-2'>
          <span className='font-medium'>¿Necesitas un admin personalizado?</span> <a className='flex text-indigo-600 font-bold' href=''>contacta a un especialista<RiArrowRightUpLine/></a>
     </div>
      
</div>
    ),
  },
  {
    id: 1,
    title: 'Integracion IA',
    content: (
      <div>
     
      <div className="card flex gap-4">
        <div className='col-left-card-img'>
        <img src='./images/img-ia-chatbot-vetical-tabs.png' alt='img-col-left' />   
        </div>
        <div className='col-right-card-info'>
        <h2>Chatbots IA</h2>
        <p>Asistencia automatizada para todo tipo de solucion.</p>
    
        </div>
        </div>
        <div className='flex justify-center py-6 gap-2'>
            <span className='font-medium'>¿Necesitas integrar IA en tu negocio?</span> <a  className='flex text-indigo-600 font-bold' href=''>contacta a un especialista <RiArrowRightUpLine/></a>
        </div>
        </div>
     
    ),
  },
  {
    id: 2,
    title: 'Potenciador de Ventas',
    content: (
      <div>
     
      <div className="card flex gap-4">
        <div className='col-left-card-img'>
        <img src='./images/sales-popup.png' alt='img-col-left' />   
        </div>
        <div className='col-right-card-info'>
        <h2>Aumenta tus ventas</h2>
        <p>Modulos creados con el unico proposito de aumentar tus ventas.</p>
    
        </div>
        </div>
        <div className='flex justify-center py-6 gap-2'>
            <span className='font-medium'>¿Queres potenciar las ventas de tu negocio?</span> <a  className='flex text-indigo-600 font-bold' href=''>contacta a un especialista <RiArrowRightUpLine/></a>
        </div>
        </div>
    ),
  },
  {
    id: 3,
    title: 'Diseños Premium',
    content: (
      <div>
     
      <div className="card flex gap-4">
        <div className='col-left-card-img'>
        <img src='./images/designs.png' alt='img-col-left' />   
        </div>
        <div className='col-right-card-info'>
        <h2>Diseños Unicos</h2>
        <p>Ofrecemos diseños unicos y modernos. Pensados para cada necesidad.</p>
    
        </div>
        </div>
        <div className='flex justify-center py-6 gap-2'>
         <span className='font-medium'>¿Necesitas modernizar tu sitio?</span> <a  className='flex text-indigo-600 font-bold' href=''>contacta a un especialista <RiArrowRightUpLine/></a>
      </div>
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
