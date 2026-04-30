"use client";

import { motion } from "framer-motion";
import { SiTiktok, SiInstagram, SiFacebook, } from "react-icons/si";
import { Mail, Phone, MapPin, } from "lucide-react";

export default function FooterCTA() {
  return (
    <section className="relative w-full bg-gray-100 overflow-hidden">
      
      {/* 🔵 Background premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/40 -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        
        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Lleva tu experiencia gastronómica
            <span className="text-blue-600 block">
              al siguiente nivel
            </span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            Disponible para proyectos gastronómicos, eventos exclusivos y colaboraciones profesionales.
          </p>

          {/* Botón CTA */}
          <motion.a
            href="https://wa.me/51972153751?text=Hola!%20gorditodelmal%20Quisiera%20más%20información%20sobre%20tus%20servicios."
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-10 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Contáctame ahora
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 my-16" />

        {/* Footer contenido */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 text-center md:text-left"
        >
          
          {/* Marca */}
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Chef [Nombre]
            </h3>
            <p className="text-gray-600 mt-2">
              Cocina Internacional
            </p>
          </div>

          {/* Contacto */}
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
              <Phone size={18} /> +51 999 999 999
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
              <Mail size={18} /> chef@email.com
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
              <MapPin size={18} /> Lima, Perú
            </div>
          </div>

          {/* Redes */}
          <div className="flex justify-center md:justify-end gap-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              className="p-3 text-gray-600 hover:text-blue-600 transition"
            >
            <SiInstagram size={32} className="text-blue-500 cursor-pointer hover:scale-125 transition" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              className="p-3 hover:border-blue-500 text-gray-600 hover:text-blue-600 transition"
            >
            <SiFacebook size={32} className="text-blue-500 cursor-pointer hover:scale-125 transition" />
            </motion.a>

             <motion.a
              whileHover={{ scale: 1.2 }}
              className="p-3 hover:border-blue-500 text-gray-600 hover:text-blue-600 transition"
            >
            <SiTiktok size={32} className="text-blue-500 cursor-pointer hover:scale-125 transition" />
            </motion.a>
          </div>

        </motion.div>

        {/* Bottom */}
        <div className="mt-16 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Chef [Nombre]. Todos los derechos reservados.
        </div>

      </div>
    </section>
  );
}