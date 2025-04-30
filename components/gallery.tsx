"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

const images = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Interior del restaurante",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Plato de tapas variadas",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Selección de vinos",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Barra del bar",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Terraza exterior",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Detalle de plato gourmet",
  },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-800 mb-4">Nuestra Galería</h2>
          <p className="max-w-2xl mx-auto text-stone-600">
            Descubre la esencia de W Bar a través de imágenes que capturan nuestra pasión por la gastronomía y el vino.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div variants={fadeIn} className="relative h-64 rounded-lg overflow-hidden cursor-pointer group">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver más
                    </span>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 bg-transparent border-none">
                <div className="relative h-[80vh] w-full">
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
                  <button
                    className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                    onClick={() => document.body.click()}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
