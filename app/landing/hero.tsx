"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ChefHero() {
  return (
    <section id="perfil" className="relative flex min-h-screen md:pt-20 pt-34 w-full items-center overflow-hidden bg-gray-100">
      {/* 🔵 Background */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-3xl" />

      <div className="md:mx-auto mx-6 grid max-w-7xl items-center md:gap-40 gap-14 md:grid-cols-2">
        {/* 🧑‍🍳 Texto */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* 🔥 LOGO (bien posicionado) */}
          <div className="mb-6 flex items-center">
            <Image
              src="/img/logblue.png"
              alt="Logo black"
              width={90}
              height={28}
              className="object-contain"
            />
          </div>

          {/* Línea */}
          <div className="mb-6 h-1 w-38 rounded-full bg-[#458bd1]" />

          <h1 className="text-4xl leading-tight font-bold text-gray-900 md:text-6xl">
            Humberto <span className="text-[#2474c3]">Galarza</span>
          </h1>

          <h2 className="mt-3 text-xl leading-snug font-semibold text-[#2474c3] md:text-2xl">
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
              className="rounded-lg bg-[#2474c3] px-6 py-3 font-semibold text-white shadow-md transition"
            >
              Ver certificaciones
            </motion.a>
            <a
              href="https://wa.me/51972153751?text=Hola%20Humberto,%20quisiera%20más%20información%20sobre%20tus%20trabajos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-[#2474c3] transition hover:bg-blue-50"
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
          <div className="absolute md:block hidden -right-6 -bottom-6 -z-10 h-full w-full rounded-2xl border-2 border-[#2474c3]" />
        </motion.div>
      </div>
    </section>
  )
}
