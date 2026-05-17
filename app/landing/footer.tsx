"use client";

import { motion } from "framer-motion";
import Link from "next/link"
import { SiInstagram, } from "react-icons/si";
import { Mail, Phone, MapPin, } from "lucide-react";
import { FaLinkedin } from "react-icons/fa"

export default function FooterCTA() {
  return (
    <section id="contacto" className="relative w-full bg-gray-100 overflow-hidden">
      
    

      <div className="max-w-7xl mx-auto py-20 md:py-28">
        
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
            <span className="text-[#2474c3] block">
              al siguiente nivel
            </span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            Disponible para proyectos gastronómicos, eventos exclusivos y colaboraciones profesionales.
          </p>

          {/* Botón CTA */}
          <motion.a
             href="https://wa.me/51972153751?text=Hola%20Humberto,%20quisiera%20más%20información%20sobre%20tus%20trabajos"
              target="_blank"
              rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-10 px-8 py-4 bg-[#2474c3] text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Contáctame ahora
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-300 my-16" />

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
              Chef Ejecutivo <br /> Humberto E. Galarza Reich
            </h3>
            <p className="text-gray-600 mt-2">
              Cocina Internacional
            </p>
          </div>

          {/* Contacto */}
          <div className="space-y-3 md:ml-20">
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
              <Phone size={18} /> +51 972 153 751
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
              <Mail size={18} /> chefgalarzareich@gmail.com
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
              <MapPin size={18} /> Lima, Perú
            </div>
          </div>

          {/* Redes */}
          <div className="flex justify-center md:justify-end gap-4">
            <Link
              href="https://www.instagram.com/chefbetoreich?igsh=eHp3YTdkcmpzM3Q3"
              target="_blank"
            >
              <SiInstagram
                size={34}
                className="cursor-pointer text-[#2474c3] transition hover:scale-125"
              />
            </Link>

           
              <Link
              href="https://www.linkedin.com/in/humbertoglarza/"
              target="_blank"
            >
              <FaLinkedin
                size={34}
                className="cursor-pointer text-[#2474c3] transition hover:scale-125"
              />
            </Link>
          </div>

        </motion.div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-300 pt-6 text-sm text-gray-400 md:flex-row">
  
  {/* Copyright */}
  <div className="text-center md:text-left">
    © {new Date().getFullYear()} Chef Humberto E. Galarza Reich. Todos los derechos reservados.
  </div>

  {/* Developer */}
  <p className="text-center md:text-lg text-base font-semibold tracking-wide text-[#2474c3] md:text-right">
    Desarrollado por:{" "}
    <a
      href="https://guillermoalvarado.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
     className="ml-1 transition-all duration-300 hover:text-red-600 hover:scale-105 inline-block"
    >
      Impacto Digital Estratégico
    </a>
  </p>

</div>
      </div>
    </section>
  );
}