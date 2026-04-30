"use client";

import { motion } from "framer-motion";
import { ChefHat, Award, Utensils } from "lucide-react";

export default function AboutChef() {
  return (
    <section className="w-full bg-gray-100 py-20 md:py-28 relative overflow-hidden">
      
      {/* 🔵 Background sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-3xl rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-7xl mx-auto"
        >
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded-full" />

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Sobre el Chef
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg">
            Llevo más de 25 años trabajando en cocinas.... bla, bla, bla.., con una trayectoria
            enfocada en la creación de experiencias gastronómicas únicas.
            A lo largo de los años ha perfeccionado técnicas de distintas
            culturas, fusionando tradición e innovación en cada plato. A lo largo de los años ha perfeccionado técnicas de distintas
            culturas, fusionando tradición.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          
          {/* Especialidades */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 hover:shadow-md transition"
          >
            <ChefHat className="text-blue-600 mb-4" size={32} />

            <h3 className="text-xl font-semibold text-gray-900">
              Especialidades
            </h3>

            <ul className="mt-4 text-gray-600 space-y-2">
              <li>• Cocina Italiana</li>
              <li>• Cocina Peruana</li>
              <li>• Cocina Fusión</li>
            </ul>
          </motion.div>

          {/* Experiencia */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 hover:shadow-md transition"
          >
            <Award className="text-blue-600 mb-4" size={32} />

            <h3 className="text-xl font-semibold text-gray-900">
              Experiencia
            </h3>

            <p className="mt-4 text-gray-600">
              Más de <span className="font-semibold text-gray-900">10 años</span> 
              de experiencia en cocinas profesionales, liderando equipos y 
              desarrollando propuestas gastronómicas de alto nivel.
            </p>
          </motion.div>

          {/* Diferencial */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 hover:shadow-md transition"
          >
            <Utensils className="text-blue-600 mb-4" size={32} />

            <h3 className="text-xl font-semibold text-gray-900">
              Diferencial
            </h3>

            <p className="mt-4 text-gray-600">
              Estilo culinario que combina técnica, creatividad y presentación
              visual, enfocado en generar experiencias memorables en cada servicio.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}