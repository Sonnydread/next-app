"use client"

import { cubicBezier, motion } from "framer-motion"

const getFadeInAnimation = (delay: number = 0) => ({
  initial: { scale: 0.25, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  transition: {
    duration: 0.5,
    ease: cubicBezier(0.25, 0.1, 0.25, 1),
    delay,
  },
  viewport: { once: false, amount: 0.3 },
})

export default function TrustIndicators() {
  const glowCircle = "size-[var(--size-glow)]"
  const outlineCircle = "size-[var(--size-outline)]"
  const fontSize = "[font-size:var(--font-size)] font-medium"

  return (
    <section className="bg-gray-100 md:py-20 md:pb-30 pb-30">
      <div
        className={` [--font-size:calc(var(--scale)*50)] [--scale:calc(100vw/390)] [--size-glow:calc(var(--scale)*280)] [--size-outline:calc(var(--scale)*200)] md:px-4 md:[--font-size:calc(var(--scale)*80)] md:[--scale:calc(100vw/1440)] md:[--size-glow:calc(var(--scale)*360)] md:[--size-outline:calc(var(--scale)*320)]`}
      >
        <div className="relative w-full">

          {/* ==================== DESKTOP (SIN NINGÚN CAMBIO) ==================== */}
          <div className="hidden md:block">
            {/* Bottom left/first circle */}
            <div className="relative h-[calc(var(--scale)*580)] md:h-[calc(var(--scale)*600)]">
              <motion.div
                {...getFadeInAnimation(0.5)}
                className={`absolute relative top-[calc(var(--scale)*380)] right-[0px] flex flex-col items-center justify-center rounded-full border border-cyan-400/30 md:top-0 md:-right-300 ${outlineCircle}`}
                style={{
                  background: "radial-gradient(circle at center, rgba(37,99,235,0.50) 0%, rgba(15,23,42,0.96) 68%)",
                  backdropFilter: "blur(20px)",
                  boxShadow: `
                    0 0 40px rgba(59,130,246,0.45),
                    0 0 90px rgba(37,99,235,0.35),
                    0 0 140px rgba(96,165,250,0.22),
                    inset 0 0 50px rgba(147,197,253,0.14)
                  `,
                }}
              >
                <div className="absolute inset-4 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute inset-4 rounded-full blur-3xl" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-2 text-2xl font-normal text-white">Clientes Felices</div>
                  <div className={fontSize}>3,983</div>
                </div>
              </motion.div>

              {/* Top right/third circle */}
              <motion.div
                {...getFadeInAnimation(0.5)}
                className={`absolute relative top-[calc(var(--scale)*380)] right-[0px] flex flex-col items-center justify-center rounded-full border border-cyan-400/30 md:-top-30 md:-right-200 ${outlineCircle}`}
                style={{
                  background: "radial-gradient(circle at center, rgba(37,99,235,0.50) 0%, rgba(15,23,42,0.96) 68%)",
                  backdropFilter: "blur(20px)",
                  boxShadow: `
                    0 0 40px rgba(59,130,246,0.45),
                    0 0 90px rgba(37,99,235,0.35),
                    0 0 140px rgba(96,165,250,0.22),
                    inset 0 0 50px rgba(147,197,253,0.14)
                  `,
                }}
              >
                <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative z-10 flex flex-col items-center pt-20">
                  <div className="mb-2 text-2xl font-normal text-white">Restaurantes Instalados</div>
                  <div className={fontSize}>17</div>
                </div>
              </motion.div>

              {/* Glow circle - Humberto */}
              <motion.div
                {...getFadeInAnimation(0.5)}
                className={`absolute relative top-[calc(var(--scale)*380)] right-[0px] flex flex-col items-center justify-center rounded-full border border-blue-300/40 md:-top-100 md:-right-80 ${outlineCircle}`}
                style={{
                  background: "radial-gradient(circle at center, rgba(37,99,235,0.50) 0%, rgba(15,23,42,0.96) 68%)",
                  backdropFilter: "blur(24px)",
                  boxShadow: `
                    0 0 40px rgba(59,130,246,0.45),
                    0 0 90px rgba(37,99,235,0.35),
                    0 0 140px rgba(96,165,250,0.22),
                    inset 0 0 50px rgba(147,197,253,0.14)
                  `,
                }}
              >
                <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-2 text-4xl font-normal text-white">Humberto</div>
                  <div className={fontSize}>Galarza</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ==================== MOBILE (Solo este bloque se modificó) ==================== */}
          <div className="md:hidden flex flex-col items-center gap-8 py-6">
            {[
              { title: "Clientes Felices", value: "3,983" },
              { title: "Restaurantes Instalados", value: "17" },
              { title: "Humberto", value: "Galarza" },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...getFadeInAnimation(0.2 * index)}
                className="relative w-[260px] h-[260px] flex flex-col items-center justify-center rounded-full border border-cyan-400/30"
                style={{
                  background: "radial-gradient(circle at center, rgba(37,99,235,0.50) 0%, rgba(15,23,42,0.96) 68%)",
                  backdropFilter: "blur(20px)",
                  boxShadow: `
                    0 0 40px rgba(59,130,246,0.45),
                    0 0 90px rgba(37,99,235,0.35),
                    0 0 140px rgba(96,165,250,0.22),
                    inset 0 0 50px rgba(147,197,253,0.14)
                  `,
                }}
              >
                <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-3 text-2xl font-normal text-white">
                    {item.title}
                  </div>
                  <div className="text-5xl font-medium text-white">
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}