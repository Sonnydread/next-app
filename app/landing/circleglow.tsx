"use client";

import { cubicBezier, motion } from "framer-motion";
// import Lottie from "lottie-react";
// import animationData from ./lottie/taekwondo-spin.json"; 


// import { cubicBezier, motion } from "motion/react";

// Reusable fade-in animation configuration
const getFadeInAnimation = (delay: number = 0) => ({
  initial: { scale: 0.25, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  transition: {
    duration: 0.5,
    ease: cubicBezier(0.25, 0.1, 0.25, 1),// Custom spring-like curve
    delay
  },
  viewport: { once: false, amount: 0.3 }
});

export default function TrustIndicators() {

  /*
   * The positioning and sizing of the elements below are based
   * Large: 320^2 and 360^2 positioned on a 1440 screen
   * Small: 200^2 and 280^2 positioned on a 390 screen
   *
   * Be wary with the inline tailwind calculations because they don't support spaces.
  */
  const glowCircle = "size-[var(--size-glow)]";
  const outlineCircle = "size-[var(--size-outline)]";
  const fontSize = "[font-size:var(--font-size)] font-medium";
  return (
    <section className="bg-black py-20">
    <div
    className={`px-3 md:px-4
    [--scale:calc(100vw/390)]
    md:[--scale:calc(100vw/1440)]
    [--size-glow:calc(var(--scale)*280)]
    [--size-outline:calc(var(--scale)*200)]
    md:[--size-glow:calc(var(--scale)*360)]
    md:[--size-outline:calc(var(--scale)*320)]
    [--font-size:calc(var(--scale)*50)]
    md:[--font-size:calc(var(--scale)*80)]`}>
      <div className="relative w-full">
        

        {/* Bottom left/first circle */}
        <div className="h-[calc(var(--scale)*580)] md:h-[calc(var(--scale)*600)] relative">
          <motion.div
            {...getFadeInAnimation(0.5)}
            className={`flex flex-col items-center justify-center rounded-full border border-gray-700 text-white bg-black/30 absolute top-[calc(var(--scale)*260)] md:top-[calc(var(--scale)*311)] md:right-[calc(var(--scale)*656)] ${outlineCircle}`}
          >
            <div className="text-4xl font-normal mb-2">Humberto</div>
            <div className={fontSize}>Galarza</div>
          </motion.div>

          {/* Top right/third circle */}
          <motion.div
            {...getFadeInAnimation(1.0)}
            className={`flex flex-col items-center justify-center rounded-full border border-gray-700 bg-black/30 absolute top-[calc(var(--scale)*380)] right-[0px] md:top-0 md:right-0 ${outlineCircle}`}
          >
            <div className="text-base text-white font-normal mb-2">Clientes Felices</div>
            <div className={fontSize}>3,983</div>
          </motion.div>

          {/* Glow circle */}
          <motion.div
            {...getFadeInAnimation()}
            className={`flex flex-col items-center justify-center rounded-full absolute top-[0] md:top-[calc(var(--scale)*204)] left-[calc(60%-var(--size-glow)/2)] md:left-auto md:translate-x-0 md:right-[calc(var(--scale)*272)] ${glowCircle}`}
            style={{
              paddingTop: "80px",
              paddingRight: "20px",
              paddingBottom: "80px",
              paddingLeft: "20px",
              gap: "8px",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 25%, #3B82F6 80%, rgba(0, 0, 0, 0) 100%)"
                }}
              />
            </div>
            <div className="relative z-10 flex flex-col text-white items-center justify-center w-full h-full">
              <div className="text-2xl font-normal mb-2">Restaurantes Instalados</div>
              <div className="text-white text-8xl">38</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </section>
  );
}