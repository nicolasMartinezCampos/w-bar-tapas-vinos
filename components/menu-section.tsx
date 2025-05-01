import Image from "next/image"
import { Button } from "./ui/button"

const tapasMenu = [
  {
    category: "Para Compartir",
    items: [
      {
        name: "Jamón Ibérico de Bellota",
        description: "Cortado a mano, acompañado de pan con tomate",
        price: "24€"
      },
      {
        name: "Tabla de Quesos Artesanos",
        description: "Selección de quesos nacionales con membrillo y frutos secos",
        price: "18€"
      },
      {
        name: "Croquetas de Jamón",
        description: "Cremosas croquetas caseras (6 uds)",
        price: "12€"
      }
    ]
  },
  {
    category: "Del Mar",
    items: [
      {
        name: "Pulpo a la Brasa",
        description: "Con parmentier de patata y pimentón de la Vera",
        price: "22€"
      },
      {
        name: "Gambas al Ajillo",
        description: "Salteadas con ajo y guindilla",
        price: "16€"
      },
      {
        name: "Tartar de Atún",
        description: "Con aguacate y algas wakame",
        price: "20€"
      }
    ]
  },
  {
    category: "De la Tierra",
    items: [
      {
        name: "Secreto Ibérico",
        description: "A la parrilla con patatas confitadas",
        price: "24€"
      },
      {
        name: "Huevos Rotos",
        description: "Con jamón ibérico y patatas",
        price: "16€"
      },
      {
        name: "Carrillera al Vino Tinto",
        description: "Con puré de calabaza",
        price: "18€"
      }
    ]
  }
]

const wineMenu = [
  {
    category: "Vinos Tintos",
    items: [
      {
        name: "Rioja Reserva",
        description: "D.O.Ca. Rioja",
        price: "28€",
        glass: "6€"
      },
      {
        name: "Ribera del Duero Crianza",
        description: "D.O. Ribera del Duero",
        price: "32€",
        glass: "7€"
      },
      {
        name: "Priorat",
        description: "D.O.Q. Priorat",
        price: "38€",
        glass: "8€"
      }
    ]
  },
  {
    category: "Vinos Blancos",
    items: [
      {
        name: "Albariño",
        description: "D.O. Rías Baixas",
        price: "26€",
        glass: "6€"
      },
      {
        name: "Verdejo",
        description: "D.O. Rueda",
        price: "24€",
        glass: "5€"
      },
      {
        name: "Godello",
        description: "D.O. Valdeorras",
        price: "28€",
        glass: "6€"
      }
    ]
  }
]

const formatARS = (precio) => {
  if (typeof precio === 'string' && precio.includes('€')) {
    const num = parseFloat(precio.replace('€', ''));
    return `$${(num * 1000).toLocaleString('es-AR')} ARS`;
  }
  return precio;
};

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
            Nuestra Carta
          </h2>
          <p className="text-lg text-[#8C8C8C] max-w-2xl mx-auto">
            Una cuidada selección de tapas tradicionales con un toque contemporáneo, 
            acompañadas de los mejores vinos españoles.
          </p>
        </div>

        {/* Tapas Menu */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl font-bold mb-12 text-white text-center">
            Tapas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {tapasMenu.map((category) => (
              <div key={category.category} className="space-y-6">
                <h4 className="text-xl font-bold text-[#C4A962] border-b border-[#C4A962]/20 pb-2">
                  {category.category}
                </h4>
                <div className="space-y-6">
                  {category.items.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h5 className="font-medium text-white">{item.name}</h5>
                        <span className="text-[#C4A962] font-medium ml-2">{formatARS(item.price)}</span>
                      </div>
                      <p className="text-sm text-[#8C8C8C]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wine Menu */}
        <div>
          <h3 className="font-serif text-3xl font-bold mb-12 text-white text-center">
            Vinos
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            {wineMenu.map((category) => (
              <div key={category.category} className="space-y-6">
                <h4 className="text-xl font-bold text-[#C4A962] border-b border-[#C4A962]/20 pb-2">
                  {category.category}
                </h4>
                <div className="space-y-6">
                  {category.items.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-medium text-white">{item.name}</h5>
                          <p className="text-sm text-[#8C8C8C]">{item.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-[#C4A962] font-medium">Bot. {formatARS(item.price)}</div>
                          <div className="text-sm text-[#8C8C8C]">Copa {formatARS(item.glass)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Button
            variant="default"
            size="lg"
            className="bg-[#C4A962] hover:bg-[#D4BC7B] text-white transition-colors"
            asChild
          >
            <a href="https://api.whatsapp.com/send/?phone=541139395205&app_absent=0" target="_blanck">Reserva tu Mesa</a>
          </Button>
        </div>
      </div>
    </section>
  )
} 