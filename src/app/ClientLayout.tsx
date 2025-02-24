"use client";

import React, { useState } from 'react';
import { Navigation } from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { ThemeProvider } from 'next-themes';
import { Modal } from '@/components/ui/ModalLayout';
import FormCotizacion from '@/components/ui/formQuotes';
import CursorTrail from '@/components/ui/CursorTrail';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
            <CursorTrail />

      <Navigation setModalOpen={setModalOpen} /> {/* Asegúrate de pasar setModalOpen aquí */}
      {children}
      <Footer />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <FormCotizacion />
      </Modal>
    </ThemeProvider>
  );
}
