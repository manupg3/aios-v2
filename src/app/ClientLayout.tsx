// clientLayout.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "next-themes";
import { Modal } from "@/components/ui/ModalLayout";
import FormCotizacion from "@/components/ui/formQuotes";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();
  const isInitialMount = useRef(true);

  useEffect(() => {
    isInitialMount.current = false;
  }, []);


  const variants = {
    hidden: { opacity: 0, x: 50 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
      <Navigation setModalOpen={setModalOpen} />
      <AnimatePresence mode="wait">
        <motion.div
            key={pathname}
            initial={isInitialMount.current ? false : "hidden"}
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <FormCotizacion />
      </Modal>
    </ThemeProvider>
  );
}

