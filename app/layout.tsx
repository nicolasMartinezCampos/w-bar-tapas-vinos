import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "W Bar de tapas y vinos",
  description:
    "Disfruta de una experiencia gastronómica única con nuestras tapas creativas y selección de vinos locales e internacionales en el corazón de Barcelona.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="bg-stone-950 text-stone-100 min-h-screen flex flex-col">
          <Navbar />
        <main className="flex-1">{children}</main>
          <Footer />
      </body>
    </html>
  )
}
