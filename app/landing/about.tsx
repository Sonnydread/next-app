"use client"

import { motion } from "framer-motion"
import { ChefHat, Award, Utensils } from "lucide-react"

export default function AboutChef() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-100 py-20 md:py-28">
      {/* 🔵 Background sutil */}
      <div className="absolute top-0 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="md:mx-auto mx-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl text-start"
        >
          <div className="mb-6 h-1 w-26 rounded-full bg-[#2474c3]" />

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Sobre el Chef
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
            Llevo más de 25 años trabajando en cocinas. Empecé desde abajo y fui
            creciendo en distintos formatos y países — Perú, Panamá, Trinidad &
            Tobago, El Salvador, República Dominicana — lo que me dio una visión
            amplia de cómo operan las cocinas en contextos muy distintos. Hoy me
            especializo en tres cosas: abrir operaciones, ordenarlas y hacerlas
            rentables. He trabajado en fine dining, fast food y casual premium,
            liderando equipos de hasta 40 personas, incluyendo marcas
            internacionales como Benihana y Hard Rock Café. Algunos resultados:
            participé en el escalamiento de Street Burger de 6 a 10 locales y
            desarrollé dos conceptos nuevos desde cero — concepto, carta y
            costos. En Kyoto (República Dominicana) , lideré el crecimiento
            operativo de cocina y el flujo de trabajo, con una mejora visible en
            el volumen de clientes. En Restaurante Paralelo he estandarizado la
            operación y la estamos dejando en condiciones escalables.
            Actualmente me encuentro abierto a oportunidades internacionales.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Especialidades */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <ChefHat className="mb-4 text-[#2474c3]" size={32} />

            <h3 className="text-xl font-semibold text-gray-900">
              Especialidades
            </h3>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Cocina Peruana y Fusión</li>
              <li>• Apertura de Locales</li>
              <li>• Estandarización y costos</li>
            </ul>
          </motion.div>

          {/* Experiencia */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <Award className="mb-4 text-[#2474c3]" size={32} />

            <h3 className="text-xl font-semibold text-gray-900">Experiencia</h3>

            <p className="mt-4 text-gray-600">
              Más de{" "}
              <span className="font-semibold text-gray-900">25 años </span>
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
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <Utensils className="mb-4 text-[#2474c3]" size={32} />

            <h3 className="text-xl font-semibold text-gray-900">Diferencial</h3>

            <p className="mt-4 text-gray-600">
              Estilo culinario que combina técnica, creatividad y presentación
              visual, enfocado en generar experiencias memorables en cada
              servicio.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
