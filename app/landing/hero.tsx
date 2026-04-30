"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ChefHero() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-gray-100">
      {/* 🔵 Background */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-10">
        {/* 🧑‍🍳 Texto */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* 🔥 LOGO (bien posicionado) */}
          <div className="mb-6 flex items-center">
            <video
              src="/vid/loggo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-16 w-16 rounded-2xl object-contain md:h-38 md:w-38"
            />
          </div>

          {/* Línea */}
          <div className="mb-6 h-1 w-38 rounded-full bg-blue-600" />

          <h1 className="text-4xl leading-tight font-bold text-gray-900 md:text-6xl">
            Humberto <span className="text-blue-600">Galarza</span>
          </h1>

          <h2 className="mt-3 text-xl leading-snug font-semibold text-blue-600 md:text-2xl">
            Chef Ejecutivo <br />
            Aperturas y estandarización <br />
            Latinoamérica y el Caribe
          </h2>

          <p className="mt-6 max-w-xl text-lg font-medium text-gray-800 md:text-xl">
            Transformando ingredientes en experiencias memorables.
          </p>

          {/* Botones */}
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="#certificaciones"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              Ver certificaciones
            </motion.a>
  <a
          href="https://wa.me/51972153751?text=Hola!%20gorditodelmal%20Quisiera%20más%20información%20sobre%20tus%20servicios."
          target="_blank"
          rel="noopener noreferrer"
        >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Contáctame
            </motion.button>
</a>
          </div>
        </motion.div>
        {/* 📸 Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 60, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative h-[520px] w-full overflow-hidden rounded-2xl shadow-xl md:h-[680px]">
            <Image
              src="/img/chef.jpg"
              alt="Chef profesional"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Marco */}
          <div className="absolute -right-6 -bottom-6 -z-10 h-full w-full rounded-2xl border-2 border-blue-600" />
        </motion.div>
      </div>
    </section>
  )
}
