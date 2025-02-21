import Footer from "@/components/ui/Footer"
import { Navigation } from "@/components/ui/Navbar"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
import "./globals.css"
import { siteConfig } from "./siteConfig"
import { Modal } from "@/components/ui/ModalLayout"
import { useState } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://yoururl.com"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Marketing", "Database", "Software"],
  authors: [
    {
      name: "yourname",
      url: "",
    },
  ],
  creator: "yourname",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@yourname",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen scroll-auto antialiased selection:bg-indigo-100 selection:text-indigo-700 dark:bg-gray-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Navigation setModalOpen={setModalOpen} />
          {children}
          <Footer />
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
            {/* Coloca aquí el contenido del modal */}
            <h2 className="text-xl font-semibold">Cotizar Solución</h2>
            <p className="mt-2 text-gray-600">Complete el formulario para obtener una cotización.</p>
            {/* Agrega tu formulario o componente aquí */}
          </Modal>

        </ThemeProvider>
      </body>
    </html>
  )
}
