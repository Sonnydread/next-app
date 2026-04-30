"use client";

import { motion } from "framer-motion";

const experiences = [
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

export default function ExperienceChef() {
  return (
    <section className="w-full bg-gray-100 py-20 md:py-28 relative overflow-hidden">
      
      {/* 🔵 Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
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
            Experiencia Profesional
          </h2>

          <p className="mt-4 text-gray-600">
            Trayectoria construida con disciplina, creatividad y resultados medibles.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-16 relative">
          
          {/* Línea vertical */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-blue-100 transform md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                
                {/* Punto */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow transform -translate-x-1/2" />

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 p-6">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 transition"
                  >
                    <span className="text-sm text-blue-600 font-semibold">
                      {exp.years}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 mt-2">
                      {exp.role}
                    </h3>

                    <p className="text-gray-500">{exp.place}</p>

                    <ul className="mt-4 space-y-2 text-gray-600">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600">✔</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}