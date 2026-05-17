"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // horizontal
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-84%"]);

  return (
    <section
      ref={targetRef}
      className="h-[400vh] py-20 bg-gray-100 relative"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 py-20 md:ml-44">
          
          {/* CARD PRINCIPAL */}
          <div className="flex flex-col justify-between bg-primary-600 p-6 md:p-11 rounded-2xl md:rounded-[32px] min-w-80 md:min-w-[460px] h-[620px]">
            <Image
              src={"/img/logblue.png"}
              alt="logo"
              width={160}
              height={160}
            />

            <h3 className="text-[28px] text-[#2474c3] leading-9 md:text-[44px] md:leading-[56px] font-medium max-w-[90%]">
             Soluciones Gastronómicas de Excelencia Internacional y de Alto Nivel
            </h3>
          </div>

          {/* IT KNOWLEDGE */}
          <div className="flex flex-col justify-between border-2 border-gray-600 p-2 rounded-2xl md:rounded-[32px] min-w-80 md:min-w-[460px] h-[620px] overflow-hidden">
            
            {/* 🔥 IMAGEN MÁS GRANDE */}
            <div className="relative h-[320px] w-full overflow-hidden rounded-t-[22px]">
              <Image
                src={"/img/fot6.jpeg"}
                alt="logo"
                fill
                priority
                quality={100}
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 p-6 md:px-10 md:py-10">
              <div className="flex flex-col gap-4">
                <h6 className="font-semibold text-xl text-[#2474c3]">Exclusividad</h6>

                <h3 className="font-medium text-[28px] text-black leading-8 md:leading-[46px] md:text-[40px]">
                  Catering Premium
                </h3>
              </div>

              <p className="text-gray-500 text-sm md:text-lg">
              Entregamos experiencias gastronómicas únicas para eventos corporativos y privados. Menús personalizados, ejecución impecable y atención al detalle que marcan la diferencia.
              </p>
            </div>
          </div>

          {/* GLOBAL RECRUITING */}
          <div className="flex flex-col justify-between border-2 border-gray-600 p-2 rounded-2xl md:rounded-[32px] min-w-80 md:min-w-[460px] h-[620px] overflow-hidden">
            
            <div className="flex flex-col gap-4 p-6 md:px-10 md:py-10">
              <div className="flex flex-col gap-4">
                <h6 className="font-semibold text-xl text-[#2474c3]">Rentabilidad</h6>

                <h3 className="font-medium text-[28px] text-black leading-8 md:leading-[46px] md:text-[40px]">
                  Consultoría Gastronómica
                </h3>
              </div>

              <p className="text-gray-500 text-sm md:text-lg">
                Optimizamos operaciones, estandarizamos procesos y rediseñamos menús para aumentar la rentabilidad sin sacrificar calidad. Resultados medibles en tiempo récord.
              </p>
            </div>

            {/* 🔥 IMAGEN MÁS GRANDE */}
            <div className="relative h-[320px] w-full overflow-hidden rounded-b-[22px]">
              <Image
                src={"/img/foto2.jpeg"}
                alt="logo"
                fill
                priority
                quality={100}
                className="object-cover"
              />
            </div>
          </div>

          {/* HRBP */}
          <div className="flex flex-col justify-between border-2 border-gray-600 p-2 rounded-2xl md:rounded-[32px] min-w-80 md:min-w-[460px] h-[620px] overflow-hidden">
            
            {/* 🔥 IMAGEN MÁS GRANDE */}
            <div className="relative h-[320px] w-full overflow-hidden rounded-t-[22px]">
              <Image
                src={"/img/fot3.jpeg"}
                alt="logo"
                fill
                priority
                quality={100}
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 p-6 md:px-10 md:py-10">
              <div className="flex flex-col gap-4">
                <h6 className="font-semibold text-xl text-[#2474c3]">Conexión con el cliente</h6>

                <h3 className="font-medium text-[28px] text-black leading-8 md:leading-[46px] md:text-[40px]">
                  Experiencias Culinarias
                </h3>
              </div>

              <p className="text-gray-500 text-sm md:text-lg">
              Creamos momentos inolvidables a través de cenas exclusivas, talleres sensoriales y eventos interactivos que conectan emocionalmente con los comensales.
              </p>
            </div>
          </div>

          {/* LIFE SUPPORT */}
          <div className="flex flex-col justify-between border-2 border-gray-600 p-2 rounded-2xl md:rounded-[32px] min-w-80 md:min-w-[460px] h-[620px] overflow-hidden">
            
            <div className="flex flex-col gap-4 p-6 md:px-10 md:py-10">
              <div className="flex flex-col gap-4">
                <h6 className="font-semibold text-xl text-[#2474c3]">Éxito</h6>

                 <h3 className="font-medium text-[28px] text-black leading-8 md:leading-[46px] md:text-[40px]">
                  Apertura de Locales
                </h3>
              </div>

              <p className="text-gray-500 text-sm md:text-lg">
               Acompañamos todo el proceso de apertura: concepto, menú, equipo, capacitación y operaciones. Lanzamos tu restaurante o hotel con los mejores estándares internacionales.
              </p>
            </div>

            {/* 🔥 IMAGEN MÁS GRANDE */}
            <div className="relative h-[320px] w-full overflow-hidden rounded-b-[22px]">
              <Image
                src={"/img/fot4.jpeg"}
                alt="logo"
                fill
                priority
                quality={100}
                className="object-cover"
              />
            </div>
          </div>

  <div className="flex flex-col justify-between border-2 border-gray-600 p-2 rounded-2xl md:rounded-[32px] min-w-80 md:min-w-[460px] h-[620px] overflow-hidden">
            
            {/* 🔥 IMAGEN MÁS GRANDE */}
            <div className="relative h-[320px] w-full overflow-hidden rounded-t-[22px]">
              <Image
                src={"/img/fot6.jpeg"}
                alt="logo"
                fill
                priority
                quality={100}
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 p-6 md:px-10 md:py-10">
              <div className="flex flex-col gap-4">
                <h6 className="font-semibold text-xl text-[#2474c3]">Estandarización</h6>

               <h3 className="font-medium text-[28px] text-black leading-8 md:leading-[46px] md:text-[40px]">
                 Chef Ejecutivo
                </h3>
              </div>

              <p className="text-gray-500 text-sm md:text-lg">
               Dirección estratégica y operativa de cocinas de alto nivel. Liderazgo de equipos, control de calidad y propuesta gastronómica de excelencia a nivel internacional.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;