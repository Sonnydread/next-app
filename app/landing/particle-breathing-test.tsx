"use client"

import ParticleBreathing from "./particle-breathing"
import Image from "next/image"

export default function ParticleBreathingTest() {
  return (
    <div className="relative w-full h-screen bg- overflow-hidden">
      {/* La animación ocupa toda la screen desde el inicio */}
      <ParticleBreathing className="w-full h-full" />

      {/* Overlay informativo sutil (opcional, semi-transparente) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="bg-black/40 backdrop-blur-md py-2 rounded-2xl border border-zinc-800/60 max-w-lg text-center pointer-events-auto">
          <Image
                src="/img/log1.jpg"
                alt="Logo black"
                width={320}
                height={28}
                className="object-contain"
              />
        </div>
      </div>
    </div>
  )
}