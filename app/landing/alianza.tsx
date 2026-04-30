"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    place: "Hotel Grand Luxury",
    role: "Chef Ejecutivo",
    years: "2020 - 2024",
    achievements: [
      "Reducción de costos en 20%",
      "Creación de carta internacional",
      "Gestión de equipo de 15 chefs",
    ],
  },
  {
    place: "Restaurante Fusión Lima",
    role: "Sous Chef",
    years: "2017 - 2020",
    achievements: [
      "Implementación de cocina fusión",
      "Optimización de procesos de cocina",
      "Incremento de ventas en 30%",
    ],
  },
  {
    place: "Trattoria Italiana",
    role: "Chef de Línea",
    years: "2014 - 2017",
    achievements: [
      "Especialización en cocina italiana",
      "Control de calidad en servicio",
      "Estandarización de recetas",
    ],
  },
  {
    place: "Hotel Grand Luxury",
    role: "Chef Ejecutivo",
    years: "2020 - 2024",
    achievements: [
      "Reducción de costos en 20%",
      "Creación de carta internacional",
      "Gestión de equipo de 15 chefs",
    ],
  },
  {
    place: "Restaurante Fusión Lima",
    role: "Sous Chef",
    years: "2017 - 2020",
    achievements: [
      "Implementación de cocina fusión",
      "Optimización de procesos de cocina",
      "Incremento de ventas en 30%",
    ],
  },
  {
    place: "Trattoria Italiana",
    role: "Chef de Línea",
    years: "2014 - 2017",
    achievements: [
      "Especialización en cocina italiana",
      "Control de calidad en servicio",
      "Estandarización de recetas",
    ],
  },
];

export default function HistoriaTradicion() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-gray-100 py-20 md:py-32 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative">
        
        {/* 🏛 TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            Historia <span className="text-blue-600">Profesional</span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Trayectoria construida con disciplina, técnica y evolución constante.
          </p>
        </motion.div>

        {/* 📍 Línea base */}
        <div className="absolute left-4 md:left-1/2 top-40 h-full w-[2px] bg-gray-200 -translate-x-1/2" />

        {/* 📍 Línea animada */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-4 md:left-1/2 top-40 w-[3px] bg-blue-600 -translate-x-1/2"
        />

        {/* 🕰 Timeline */}
        <div className="relative flex flex-col gap-16">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: false }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* 🔵 Punto */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow -translate-x-1/2" />

              {/* 📦 Card */}
              <div className="ml-12 md:-ml-4 md:w-1/2 p-2">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 transition"
                >
                  <span className="text-sm text-blue-600 font-semibold">
                    {item.years}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 mt-2">
                    {item.role}
                  </h3>

                  <p className="text-gray-500">{item.place}</p>

                  <ul className="mt-4 space-y-2 text-gray-600">
                    {item.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600">✔</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}