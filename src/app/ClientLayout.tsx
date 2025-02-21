"use client";

import React, { useState } from 'react';
import { Navigation } from '@/components/ui/Navbar';
import { Modal } from '@/components/ui/ModalLayout';
import Footer from '@/components/ui/Footer';
import { ThemeProvider } from 'next-themes';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
      <Navigation setModalOpen={setModalOpen} /> {/* Pasa setModalOpen aquí */}
      {children}
      <Footer />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-semibold">Cotizar Solución</h2>
        <p className="mt-2 text-gray-600">Complete el formulario para obtener una cotización.</p>
        {/* Agrega tu formulario o componente aquí */}
      </Modal>
    </ThemeProvider>
  );
}
