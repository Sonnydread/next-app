"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface Product {
  title: string
  tag: string
  img: string
  heroImg: string
  detailImg: string
  video: string
  description: string
}

interface Props {
  isOpen: boolean
  onClose: () => void
  product: Product | null
}

export default function ProductModal({ isOpen, onClose, product }: Props) {
  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OVERLAY */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
          >
            <div
              className="relative w-full max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl max-h-[95vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* BOTÓN CERRAR */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 cursor-pointer rounded-lg bg-[#2474c3] px-4 py-2.5 text-base font-bold text-white transition-all duration-300 hover:scale-110"
              >
                ✕
              </button>

              <div className="px-4 py-6 md:px-10 md:py-10">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  
                  {/* ====================== LEFT - HERO IMAGE ====================== */}
                  <div className="relative">
                    <div className="relative h-[260px] md:h-full aspect-[16/10] md:aspect-auto w-full">
                      <Image
                        src={product.heroImg}
                        alt={product.title}
                        fill
                        className="rounded-3xl object-cover"
                      />
                    </div>

                    {/* HEADER (Title + Logo) */}
                    <div className="absolute inset-0 flex items-start justify-between p-6 md:p-8">
                      <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                        {product.title}
                      </h2>

                      <div className="hidden md:block">
                        <Image
                          src="/img/logblue.png"
                          width={55}
                          height={55}
                          alt="logo"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ====================== RIGHT SIDE ====================== */}
                  <div className="grid grid-cols-1 gap-5 md:gap-6">

                    {/* VIDEO - Más pequeño en mobile */}
                    <div className="flex h-[220px] md:h-[300px] rounded-2xl border border-gray-300 bg-black overflow-hidden">
                      <video
                        src={product.video}
                        autoPlay
                        muted
                        loop
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* IMAGEN DETALLE - Más pequeña en mobile */}
                    <div className="h-[220px] md:h-[300px] overflow-hidden rounded-2xl border border-gray-300">
                      <Image
                        src={product.detailImg}
                        alt="detalle"
                        width={500}
                        height={500}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* DESCRIPCIÓN */}
                    <div className="rounded-2xl border border-gray-300 p-6 md:p-8">
                      <p className="text-xl md:text-2xl font-bold text-[#2474c3] uppercase">
                        {product.tag}
                      </p>
                      <p className="mt-4 leading-relaxed text-gray-600 text-[15px] md:text-base">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}