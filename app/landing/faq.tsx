"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/accordion";

export default function Faqs() {
  const faqs = [
  {
    question: "¿Qué tipo de servicios gastronómicos ofrece?",
    answer:
      "Ofrezco experiencias gastronómicas de alto nivel que incluyen consultoría culinaria, desarrollo de conceptos gastronómicos, creación y optimización de cartas,sivos. Cada servicio está diseñado a medida, alineado con el estándar y visión del cliente.",
  },
  {
    question: "¿Trabaja con restaurantes y hoteles a nivel internacional?",
    answer:
      "Sí. He colaborado con restaurantes, hoteles y grupos gastronómicos en distintos mercados, participando en aperturas, estandarización de operaciones y desarrollo de propuestas culinarias adaptadas a cada región.",
  },
  {
    question: "¿Puede diseñar un menú completamente personalizado?",
    answer:
      "Por supuesto. Cada menú se desarrolla desde cero, considerando identidad del cliente, público objetivo, costos, logística y propuesta gastronómica. El objetivo es crear una experiencia coherente, rentable y memorable.",
  },
  {
    question: "¿Qué lo diferencia de otros chefs o consultores gastronómicos?",
    answer:
      "Mi enfoque combina técnica, visión estratégica y experiencia en gestión. No solo desarrollo platos, sino sistemas culinarios eficientes que permiten escalar operaciones sin perder calidad, manteniendo siempre un alto estándar gastronómico.",
  },
  {
    question: "¿Cuáles son los tiempos para desarrollar un proyecto?",
    answer:
      "Los tiempos dependen del alcance del proyecto. Una consultoría puede tomar desde algunas semanas, mientras que una apertura completa o reestructuración",
  },
  {
    question: "¿Ofrece servicios para eventos privados o experiencias exclusivas?",
    answer:
      "Sí. Desarrollo experiencias gastronómicas privadas diseñadas a medida, donde cada detalle —desde el menú hasta la ejecución— está pensado para ofrecer un servicio de alto impacto.",
  },
];

  return (
    <section className="relative py-32 px-6 md:px-12 text-white overflow-hidden bg-gray-100">

    
      <div className="relative max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-linear-to-r text-6xl font-black text-blue-600 pb-4">
          Preguntas Frecuentes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-black text-lg md:text-xl max-w-3xl mx-auto"
        >
          Resuelve tus dudas y conoce cómo podemos ayudarte con soluciones
          publicitarias profesionales y personalizadas.
        </motion.p>
      </div>

      {/* Accordion */}
      <div className="relative max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                  hover:border-blue-500
                  transition-all
                "
              >
                <AccordionTrigger
                  className="
                    px-6 py-5 text-left text-lg font-medium text-black
                    hover:text-blue-600 transition-colors
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-5 text-black text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>

      {/* CTA */}
      <div className="relative z-10 flex justify-center mt-16">
        <motion.a
          href="https://wa.me/51972153751?text=Hola!%20gorditodelmal%20Quisiera%20más%20información%20sobre%20tus%20servicios."
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        className="mt-8 inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all" >
        
          <MessageCircle className="w-5 h-5" />
          Escríbeme por WhatsApp
        </motion.a>
      </div>
    </section>
  );
}
