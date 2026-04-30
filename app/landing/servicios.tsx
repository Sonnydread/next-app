"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Catering Premium",
    description:
      "Experiencias gastronómicas exclusivas para eventos corporativos y privados.",
    image: "/img/foto1.jpeg",
  },
  {
    title: "Chef Privado",
    description:
      "Servicio personalizado en casa con menús diseñados a medida.",
    image: "/img/foto2.jpeg",
  },
  {
    title: "Consultoría Gastronómica",
    description:
      "Optimización de cartas, procesos y concepto culinario para restaurantes.",
    image: "/img/fot3.jpeg",
  },
  {
    title: "Experiencias Culinarias",
    description:
      "Eventos únicos donde la cocina se convierte en espectáculo.",
    image: "/img/fot4.jpeg",
  },
];

export default function ServicesChef() {
  return (
    <section className="w-full bg-gray-100 py-20 md:py-28 relative overflow-hidden">
      
      {/* 🔵 Background */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-3xl rounded-full -z-10" />

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
            Especialidades & Servicios
          </h2>

          <p className="mt-4 text-gray-600">
            Soluciones gastronómicas diseñadas para experiencias memorables.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[320px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Imagen */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Contenido */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition duration-500">
                  {service.description}
                </p>
              </div>

              {/* Glow hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-blue-400/40 rounded-2xl transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}