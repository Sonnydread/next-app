"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, Globe, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const certifications = [
  {
    title: "Le Cordon Bleu",
    subtitle: "Diploma en Alta Cocina",
    type: "Estudios Culinarios",
    icon: GraduationCap,
    description:
      "Formación clásica en técnicas culinarias francesas, enfoque en precisión, disciplina y alta cocina internacional.",
    images: ["/img/cert.png", "/img/fot7.jpeg", "/img/fot6.jpeg"],
  },
  {
    title: "Basque Culinary Center",
    subtitle: "Cocina de Vanguardia",
    type: "Curso Internacional",
    icon: Globe,
    description:
      "Especialización en innovación gastronómica, técnicas modernas y desarrollo de conceptos culinarios.",
    images: ["/img/cert.png", "/img/fot5.jpeg", "/img/fot4.jpeg"],
  },
  {
    title: "Premio Chef Revelación",
    subtitle: "Reconocimiento internacional",
    type: "Premio",
    icon: Award,
    description:
      "Reconocimiento por innovación, liderazgo y aporte a la gastronomía contemporánea.",
    images: ["/img/cert.png", "/img/fot3.jpeg", "/img/foto2.jpeg"],
  },
];

export default function CertificationsChef() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section
      id="certificaciones"
      className="w-full bg-gray-100 py-20 md:py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl md:mx-auto mx-6">

        {/* Header */}
        <div className="md:text-center max-w-2xl mx-auto">
          <div className="w-16 h-1 bg-[#2474c3] md:mx-auto mb-6 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Certificaciones & Formación
          </h2>
          <p className="mt-4 text-gray-600">
            Formación respaldada por instituciones de prestigio internacional.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                onClick={() => setSelected(item)}
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-2xl p-6 transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>

                <span className="text-xs text-blue-600 font-semibold uppercase">
                  {item.type}
                </span>

                <h3 className="mt-2 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  {item.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 🔥 DRAWER */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Overlay */}
            <motion.div
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5 }}
              className="fixed bottom-0 left-0 w-full bg-white rounded-t-3xl z-50 p-6 md:p-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X size={24} />
              </button>

              {/* Content */}
              <div className="max-w-4xl mx-auto">

                {/* Título */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {selected.title}
                </h3>

                <p className="text-blue-600 mt-1">{selected.subtitle}</p>

                {/* Imagen principal */}
                <div className="mt-6 relative w-full h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={selected.images[0]}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Secundarias */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {selected.images.slice(1).map((img: string, i: number) => (
                    <div key={i} className="relative w-full h-[120px] rounded-lg overflow-hidden">
                      <Image src={img} alt="" fill className="object-cover" />
                    </div>
                  ))}
                </div>

                {/* Descripción */}
                <p className="mt-6 text-gray-600 leading-relaxed">
                  {selected.description}
                </p>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}