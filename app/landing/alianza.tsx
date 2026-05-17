"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    place: "Miraflores Park, Belmont Hotel",
    role: "Ayudante de Cocina",
    years: "1997 - 1999",
    achievements: [
      "Mi primer trabajo en cocina profesional, por práctica de Le Cordon Bleu. Me quedé por mérito propio empecé como ayudante, pasé a chef de partie en fríos y luego en plancha. Fue donde aprendí las bases y la disciplina de trabajar bajo estándares de un hotel de lujo.",
    ],
  },
  {
    place: "Benihana - Japanese Steakhouse",
    role: "Chef Teppanyaki",
    years: "1999 - 2009",
    achievements: [
      "Diez años de carrera dentro del grupo Benihana en tres países. Empecé como chef teppanyaki en Perú, fui segundo del Kitchen Manager en Trinidad & Tobago y terminé como Kitchen Manager en El Salvador. Cada etapa implicó adaptarme a un contexto distinto equipos, culturas y operaciones diferentes siempre bajo los estándares corporativos internacionales de la marca. Durante este período trabajé en apertura, operación y estandarización de cocinas, tanto en plancha teppanyaki como en barra sushi, en operaciones de alto volumen.",
    ],
  },
  {
    place: "Mr. Sushi",
    role: "Itamae",
    years: "2010 - 2012",
    achievements: [
      "Rol en barra sushi en formato fast food. Empecé como rolero y fui creciendo dentro del equipo hasta ser el referente de la barra y asumir su conducción en ausencia del responsable.",
    ],
  },
  {
    place: "Osaka Restaurant",
    role: "Sushi Bar",
    years: "2012 - 2014",
    achievements: [
      "Rol en barra dentro de uno de los restaurantes nikkei de referencia en Lima. Empecé apoyando en funciones básicas y fui ganando espacio en la barra hasta manejar sushi, ceviches y otras estaciones. Fue una etapa importante para consolidar técnica en cocina nikkei a nivel premium.",
    ],
  },
  {
    place: "Benihana - Japanese Steakhouse",
    role: "Chef ejecutivo / Kitchen Manager",
    years: "2014 - 2015",
    achievements: [
      "Regresé a Benihana para apoyar el refuerzo de estándares operativos de la marca. El trabajo fue releer los manuales, reentrenar al equipo existente y al personal nuevo, y afianzar los estándares tanto en plancha teppanyaki como en barra sushi. Traje un equipo de apoyo de cuatro chefs teppanyaki para acelerar el proceso y estuve presente en la operación diaria en plancha, en barra sushi y en cocina interna. Retomé el control sobre calidad, procedencia y consistencia de productos según proveedores, especialmente proteínas, bajo los estándares de la marca. La operación se fortaleció y la venta mejoró.",
    ],
  },
  {
    place: "Pizza Rock Perú",
    role: "Chef ejecutivo",
    years: "2017 - 2020",
    achievements: [
      "Entré antes de la apertura con la operación en proceso. Revisé y ajusté el trabajo previo carta, recetario, costos y completé todo lo necesario para abrir: procesos, estándares, tiempos, personal, compras, inventarios y KPIs. También adapté el control de costos al P&L. El local fue creciendo hasta que a los dos años de operación se abrió una segunda sede.",
    ],
  },
   {
    place: "Emprendimiento gastronómico propio",
    role: "Propietario independiente",
    years: "2020 - 2022",
    achievements: [
      "Durante la pandemia monté una operación de dark kitchen para mantener estabilidad económica. La organicé, la mantuve funcionando y siguió generando ingresos al retomar la actividad normal. La cerré cuando decidí orientar mi carrera hacia el extranjero y la operación sin local físico ya no era sostenible.",
    ],
  },
   {
    place: "Street Burguer",
    role: "Chef ejecutivo",
    years: "2021 - 2022",
    achievements: [
      "Dirección culinaria simultánea con alcance corporativo de tres marcas fast food y fast casual con más de 40 personas a cargo. No era un solo restaurante era coordinar operaciones, equipos y estándares distintos al mismo tiempo. Participé en el escalamiento de Street Burger de 6 a 10 locales, lo que implicó adaptar procesos y mantener consistencia en cada apertura. Paralelamente desarrollé desde cero dos conceptos nuevos concepto culinario, carta, estructura de costos y manuales operativos desde la idea hasta la apertura.",
    ],
  },
   {
    place: "Kyoto Nikkei - Restaurant",
    role: "Chef ejecutivo",
    years: "2022 - 2023",
    achievements: [
      "Restaurante de fine dining en Santiago de los Caballeros. Me incorporé a una operación altamente estructurada con potencial de crecimiento, trabajando para ayudar a consolidar sus procesos, estandarización, rediseño de carta y reorganización del flujo de trabajo con un equipo de 25 a 30 personas. La mejora en la operación se reflejó en un crecimiento visible en el volumen de clientes.",
    ],
  },
  {
    place: "Paralelo - Restaurant",
    role: "Chef ejecutivo",
    years: "2024 - Actualidad",
    achievements: [
      "Restaurante casual premium en Lima. Llegué con la operación ya funcionando y el trabajo fue ordenarla desde adentro estandarización de recetas y procedimientos, optimización de costos, rediseño de carta y desarrollo del equipo. Hoy la operación está en condiciones escalables.",
    ],
  },
];

export default function HistoriaTradicion() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 20%"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      id="historia"
      ref={ref}
      className="relative w-full overflow-hidden bg-gray-100 px-6 py-20 md:px-20 md:py-32"
    >
      <div className="relative mx-auto max-w-6xl">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 md:text-6xl">
            Historia{" "}
            <span className="text-[#2474c3]">
              Profesional
            </span>
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Trayectoria construida con disciplina,
            técnica y evolución constante.
          </p>
        </motion.div>

        {/* Base Line */}
        <div className="absolute left-4 top-40 h-full w-[2px] -translate-x-1/2 bg-gray-200 md:left-1/2" />

        {/* Animated Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-4 top-40 w-[3px] -translate-x-1/2 bg-[#2474c3] md:left-1/2"
        />

        {/* Timeline */}
        <div className="relative flex flex-col gap-4">
          {timeline.map((item, i) => {
            const isRight = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 50,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                }}
                viewport={{ once: false }}
                className={`
                  relative flex flex-col items-start md:flex-row md:items-center
                  ${isRight ? "md:flex-row-reverse" : ""}
                `}
              >

                {/* Dot */}
                <div className="absolute left-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-[#2474c3] shadow md:left-1/2" />

                {/* Card Wrapper */}
                <div
                  className={`
                    ml-8 w-full md:w-1/2

                    ${
                      isRight
                        ? "md:pl-12 md:pr-0"
                        : "md:pr-20 md:pl-0"
                    }
                  `}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                    }}
                    className="
                      rounded-2xl mr-8 border border-gray-100
                      bg-white p-6 shadow-md transition
                    "
                  >
                    <span className="text-2xl font-semibold text-[#2474c3]">
                      {item.years}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-gray-900">
                      {item.role}
                    </h3>

                    <p className="text-gray-500">
                      {item.place}
                    </p>

                    <ul className="mt-4 space-y-2 text-gray-600">
                      {item.achievements.map((ach, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2"
                        >
                          <span className="text-[#2474c3]">
                            ✔
                          </span>

                          {ach}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}