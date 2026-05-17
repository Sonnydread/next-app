"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function ItemsPro() {
  const [active, setActive] = useState(0);

  const categories = [
    {
      name: "Internacional",
      description: "",
      image: "/img/fot3.jpeg",
    },
    {
      name: "Peruana",
      description: "",
      image: "/img/fot4.jpeg",
    },
    {
      name: "Fusión",
      description: "",
      image: "/img/fot5.jpeg",
    },
    {
      name: "Gourmet",
      description: "",
      image: "/img/fot6.jpeg",
    },
    {
      name: "Street",
      description: "",
      image: "/img/fot7.jpeg",
    },
  ];

  return (
    <section 
      className="relative md:px-40 px-6 md:pt-60 pt-20 pb-20 bg-gray-100 overflow-hidden"
    >
      <div className="max-w-8xl md:mx-auto">

        <div className="grid md:grid-cols-5 gap-16 items-center">
          {/* IZQUIERDA - Texto */}
          <div className="md:col-span-2 place-items-start max-w-xl mx-auto md:mx-0">
            <div className="mb-6 h-1 w-26 rounded-full bg-[#2474c3]" />
            <h3 className="md:text-6xl text-3xl text-start text-black font-dosis font-medium md:mb-6 mb-6">
              Sabores sin fronteras, <br /> <span className="text-[#2474c3] md:text-4xl font-semibold text-2xl">Técnica de Clase Mundial</span>
            </h3>

            <p className="text-black text-start font-inter leading-relaxed md:text-xl text-lg">
             Una propuesta gastronómica de alto nivel que fusiona cocina internacional, tradición peruana, creatividad gourmet y el carácter auténtico del street food moderno, creando experiencias culinarias exclusivas para los paladares más exigentes.
            </p>
          </div>

          {/* DERECHA - Tarjetas interactivas */}
          <div className="md:col-span-3 relative w-full">
            {/* Versión Desktop (sin cambios) */}
            <div className="hidden md:block relative h-[680px] w-full">
              <div
                className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl isolate"
                style={{ transform: "translateZ(0)" }}
              >
                <div className="flex h-full">
                  {categories.map((category, index) => {
                    const isActive = active === index;
                    const hasImage = category.image !== "";

                    return (
                      <motion.div
                        key={category.name}
                        layout
                        onMouseEnter={() => setActive(index)}
                        onClick={() => setActive(index)}
                        animate={{ flex: isActive ? 3 : 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 120,
                          damping: 20,
                        }}
                        className="relative cursor-pointer overflow-hidden h-full"
                        style={{ willChange: "flex" }}
                      >
                        {hasImage && (
                          <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className="object-cover"
                          />
                        )}

                        {!hasImage && (
                          <div className="absolute inset-0 bg-[#7E6B27]" />
                        )}

                        {hasImage && (
                          <motion.div
                            animate={{
                              backgroundColor: isActive
                                ? "rgba(0,0,0,0.15)"
                                : "rgba(0,0,0,0.40)",
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                          />
                        )}

                        <motion.div
                          initial={false}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : 20,
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-8 left-8 right-8 text-white"
                        >
                          <h4 className="text-2xl md:text-3xl font-semibold">
                            {category.name}
                          </h4>
                          {isActive && (
                            <p className="text-sm md:text-base mt-2 opacity-90">
                              {category.description}
                            </p>
                          )}
                        </motion.div>

                        {!isActive && (
                          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white rotate-[-90deg] origin-bottom text-lg md:text-xl font-medium tracking-wide whitespace-nowrap">
                            {category.name}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Versión Mobile - Imágenes una debajo de la otra + texto horizontal */}
            <div className="md:hidden space-y-6">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9]"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-2xl font-semibold">{category.name}</h4>
                    {category.description && (
                      <p className="text-sm mt-1 opacity-90">{category.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}