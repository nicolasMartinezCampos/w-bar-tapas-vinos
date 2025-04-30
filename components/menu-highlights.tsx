"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function MenuHighlights() {
  const [activeTab, setActiveTab] = useState("tapas")

  return (
    <section id="menu" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-800 mb-4">Nuestra Carta</h2>
          <p className="max-w-2xl mx-auto text-stone-600">
            Descubre nuestra selección de tapas creativas y platos tradicionales con un toque contemporáneo, elaborados
            con ingredientes frescos y de temporada.
          </p>
        </div>

        <Tabs defaultValue="tapas" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="tapas" className="font-serif text-lg">
              Tapas
            </TabsTrigger>
            <TabsTrigger value="platos" className="font-serif text-lg">
              Platos
            </TabsTrigger>
            <TabsTrigger value="postres" className="font-serif text-lg">
              Postres
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tapas">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/images/patatas-bravas.jpg" alt="Patatas Bravas" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">Patatas Bravas</h3>
                    <span className="text-amber-700 font-medium">8€</span>
                  </div>
                  <p className="text-stone-600 text-sm">
                    Patatas crujientes con salsa brava casera y alioli de ajo negro.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/images/croquetas.jpg" alt="Croquetas de Jamón" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">Croquetas de Jamón</h3>
                    <span className="text-amber-700 font-medium">9€</span>
                  </div>
                  <p className="text-stone-600 text-sm">Cremosas croquetas de jamón ibérico con panko crujiente.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/images/pulpo.jpg" alt="Pulpo a la Brasa" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">Pulpo a la Brasa</h3>
                    <span className="text-amber-700 font-medium">16€</span>
                  </div>
                  <p className="text-stone-600 text-sm">
                    Pulpo braseado con puré de patata ahumado y pimentón de la Vera.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/images/gambas.jpg" alt="Gambas al Ajillo" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">Gambas al Ajillo</h3>
                    <span className="text-amber-700 font-medium">14€</span>
                  </div>
                  <p className="text-stone-600 text-sm">
                    Gambas salteadas con ajo, guindilla y aceite de oliva virgen extra.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/images/pan-tomate.jpg" alt="Pan con Tomate" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">Pan con Tomate</h3>
                    <span className="text-amber-700 font-medium">5€</span>
                  </div>
                  <p className="text-stone-600 text-sm">
                    Pan de cristal tostado con tomate de rama, aceite de oliva y sal en escamas.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/images/pimientos.jpg" alt="Pimientos de Padrón" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">Pimientos de Padrón</h3>
                    <span className="text-amber-700 font-medium">7€</span>
                  </div>
                  <p className="text-stone-600 text-sm">
                    Pimientos de Padrón fritos con sal en escamas y aceite de oliva.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="platos">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/images/paella.jpg" alt="Paella de Marisco" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">Paella de Marisco</h3>
                    <span className="text-amber-700 font-medium">22€</span>
                  </div>
                  <p className="text-stone-600 text-sm">
                    Arroz con calamares, gambas, mejillones y azafrán. Mínimo 2 personas.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/images/bacalao.jpg" alt="Bacalao Confitado" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">Bacalao Confitado</h3>
                    <span className="text-amber-700 font-medium">19€</span>
                  </div>
                  <p className="text-stone-600 text-sm">
                    Bacalao confitado a baja temperatura con espinacas salteadas y alioli de miel.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/images/secreto.jpg" alt="Secreto Ibérico" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">Secreto Ibérico</h3>
                    <span className="text-amber-700 font-medium">21€</span>
                  </div>
                  <p className="text-stone-600 text-sm">
                    Secreto ibérico a la parrilla con patatas confitadas y salsa de Pedro Ximénez.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/images/fideuá.jpg" alt="Fideuá" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">Fideuá</h3>
                    <span className="text-amber-700 font-medium">20€</span>
                  </div>
                  <p className="text-stone-600 text-sm">
                    Fideos finos con sepia, gambas y alioli casero. Mínimo 2 personas.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="postres">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/images/crema-catalana.jpg" alt="Crema Catalana" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">Crema Catalana</h3>
                    <span className="text-amber-700 font-medium">7€</span>
                  </div>
                  <p className="text-stone-600 text-sm">
                    Crema catalana tradicional con azúcar caramelizado y ralladura de limón.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/images/churros.jpg" alt="Churros con Chocolate" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">Churros con Chocolate</h3>
                    <span className="text-amber-700 font-medium">6€</span>
                  </div>
                  <p className="text-stone-600 text-sm">Churros caseros con chocolate caliente espeso.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/images/tarta-santiago.jpg" alt="Tarta de Santiago" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">Tarta de Santiago</h3>
                    <span className="text-amber-700 font-medium">7€</span>
                  </div>
                  <p className="text-stone-600 text-sm">
                    Tarta de almendra tradicional gallega con helado de vainilla.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/images/sorbet.jpg" alt="Sorbete de Limón al Cava" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">Sorbete de Limón al Cava</h3>
                    <span className="text-amber-700 font-medium">6€</span>
                  </div>
                  <p className="text-stone-600 text-sm">Refrescante sorbete de limón con cava brut nature.</p>
                </div>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
