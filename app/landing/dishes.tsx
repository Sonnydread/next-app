"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ProductModal from "./product-modal";

const dishes = [
  {
    name: "Risotto de Trufa",
    type: "Internacional",
    image: "/img/fot4.jpeg",
    heroImg: "/img/foto2.jpeg",
    detailImg: "/img/fot7.jpeg",
    video: "/vid/street.mp4",
    description:
      "Risotto cremoso preparado con trufa negra importada, parmesano curado y técnica italiana clásica para una experiencia elegante y sofisticada.",
  },
  {
    name: "Ceviche Clásico",
    type: "Fusión",
    image: "/img/fot6.jpeg",
    heroImg: "/img/foto1.jpeg",
    detailImg: "/img/fot5.jpeg",
    video: "/vid/vapor.mp4",
    description:
      "Pesca fresca marinada en leche de tigre cítrica con ajíes peruanos y presentación contemporánea inspirada en cocina nikkei.",
  },
  {
    name: "Salmón en Costra",
    type: "Gourmet",
    image: "/img/fot7.jpeg",
    heroImg: "/img/fot6.jpeg",
    detailImg: "/img/foto2.jpeg",
    video: "/vid/gordito.mp4",
    description:
      "Salmón premium sellado en costra crocante de hierbas finas acompañado de reducción especial y vegetales salteados.",
  },
  {
    name: "Lomo Saltado Gourmet",
    type: "Street",
    image: "/img/h-street.jpeg",
    heroImg: "/img/h-street2.jpeg",
    detailImg: "/img/h-street1.jpeg",
    video: "/vid/street.mp4",
    description:
      "Interpretación gourmet del clásico peruano con carne flameada al wok, papas crocantes y emulsiones de autor.",
  },
];

export default function DishesPortfolio() {
  interface SelectedDish {
  title: string;
  tag: string;
  img: string;
  heroImg: string;
  detailImg: string;
  video: string;
  description: string;
}

const [selectedDish, setSelectedDish] = useState<SelectedDish | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="especialidades"
      className="w-full bg-gray-100 py-20 md:py-10 relative overflow-hidden"
    >
      {/* 🔵 Background sutil */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl md:mx-auto mx-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-start max-w-7xl mx-auto"
        >
          <div className="w-26 h-1 bg-[#2474c3] mb-6 rounded-full" />

          <h2 className="text-3xl md:text-6xl font-medium text-gray-900">
            Especialidades
          </h2>

          <p className="mt-4 text-gray-600 font-inter leading-relaxed text-xl">
            Una selección de creaciones que reflejan técnica, creatividad y
            pasión por la gastronomía.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 4 Cards normales */}
          {dishes.map((dish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              viewport={{ once: true }}
              onClick={() => {
                setSelectedDish({
                  title: dish.name,
                  tag: dish.type,
                  img: dish.image,
                  heroImg: dish.heroImg,
                  detailImg: dish.detailImg,
                  video: dish.video,
                  description: dish.description,
                });
                setIsOpen(true);
              }}
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

                <p className="text-lg uppercase tracking-[4px] font-semibold text-white">
                  {dish.type}
                </p>
              </div>

              {/* Glow premium */}
              <div className="absolute inset-0 border border-transparent group-hover:border-blue-400/40 rounded-2xl transition duration-500" />
            </motion.div>
          ))}

          {/* 🎥 Video Card grande */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="
              group relative 
              h-[320px] md:h-[360px] 
              rounded-2xl overflow-hidden
              lg:col-span-2
              cursor-pointer
            "
          >
            {/* Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            >
              <source src="/vid/gordito.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 p-8 text-white z-10">
              <span className="text-2xl uppercase tracking-[4px] font-semibold text-[#2474c3]">
                Experiencia Premium
              </span>

              <h3 className="mt-2 text-xl font-semibold max-w-xl leading-tight">
                Cocina en vivo con técnica internacional y fuego extremo
              </h3>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 border border-transparent group-hover:border-blue-400/40 rounded-2xl transition duration-500 z-10" />
          </motion.div>
        </div>
      </div>

      {/* MODAL */}
      <ProductModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={selectedDish}
      />
    </section>
  );
}