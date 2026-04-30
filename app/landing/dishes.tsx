"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const dishes = [
  {
    name: "Risotto de Trufa",
    type: "Cocina Italiana",
    image: "/img/fot5.jpeg",
  },
  {
    name: "Ceviche Clásico",
    type: "Cocina Peruana",
    image: "/img/fot6.jpeg",
  },
  {
    name: "Salmón en Costra",
    type: "Cocina Fusión",
    image: "/img/fot7.jpeg",
  },
  {
    name: "Lomo Saltado Gourmet",
    type: "Cocina Peruana",
    image: "/img/foto1.jpeg",
  },
  {
    name: "Pasta Artesanal",
    type: "Cocina Italiana",
    image: "/img/foto2.jpeg",
  },
  {
    name: "Degustación de Autor",
    type: "Cocina Fusión",
    image: "/img/fot3.jpeg",
  },
];

export default function DishesPortfolio() {
  return (
    <section className="w-full bg-gray-100 py-20 md:py-28 relative overflow-hidden">
      
      {/* 🔵 Background sutil */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded-full" />

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Platos Destacados
          </h2>

          <p className="mt-4 text-gray-600">
            Una selección de creaciones que reflejan técnica, creatividad y pasión por la gastronomía.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative h-[320px] md:h-[360px] rounded-2xl overflow-hidden cursor-pointer"
            >
              
              {/* Imagen */}
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500" />

              {/* Contenido */}
              <div className="absolute bottom-0 p-6 text-white">
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ y: -4 }}
                  className="text-xl font-semibold"
                >
                  {dish.name}
                </motion.h3>

                <p className="text-sm text-gray-200 opacity-80">
                  {dish.type}
                </p>

              </div>

              {/* Glow premium */}
              <div className="absolute inset-0 border border-transparent group-hover:border-blue-400/40 rounded-2xl transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}