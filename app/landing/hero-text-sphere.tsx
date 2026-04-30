"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { h1 } from "framer-motion/client"

const CHARS = "HUMBERTOG"

function SimpleCore() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004
      groupRef.current.rotation.x += 0.0015

      const breath = Math.sin(t * 0.6) * 0.08 + 1
      groupRef.current.scale.setScalar(breath)
    }
  })

  return (
    <group ref={groupRef}>
      {/* Núcleo wireframe more simple */}
      <mesh>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial color="white" wireframe transparent opacity={0.45} />
      </mesh>

      {/* Líneas internas fijas (sin fade dinámico) */}
      <lineSegments>
        <icosahedronGeometry args={[1.4, 1]} />
        <lineBasicMaterial color="white" transparent opacity={0.15} />
      </lineSegments>
    </group>
  )
}

interface Particle {
  pos: [number, number, number]
  char: string
}

function TextConstellation({ count = 280 }) {
  const groupRef = useRef<THREE.Group>(null!)

  const particles = useMemo<Particle[]>(() => {
    const arr: Particle[] = []
    const radius = 5.2

    // Partículas de fondo con jitter
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi

      let x = radius * Math.sin(phi) * Math.cos(theta)
      let y = radius * Math.sin(phi) * Math.sin(theta)
      let z = radius * Math.cos(phi)

      // jitter ligero (solo se ejecuta una vez gracias a useMemo)
      x += (Math.random() - 0.5) * 0.4
      y += (Math.random() - 0.5) * 0.4
      z += (Math.random() - 0.5) * 0.4

      arr.push({
        pos: [x, y, z],
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
      })
    }

    // Texto principal más legible (espiral)
    const title = "DULCE CIUDAD"
    for (let i = 0; i < title.length; i++) {
      const angle = (i / title.length) * Math.PI * 2.4
      const height = (i / title.length) * 3 - 1.5

      const r = radius * 0.82
      const x = r * Math.cos(angle) * (1 - Math.abs(height) * 0.3)
      const y = height * 1.1
      const z = r * Math.sin(angle) * (1 - Math.abs(height) * 0.3)

      arr.push({
        pos: [x, y, z],
        char: title[i],
      })
    }

    return arr
  }, [count])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
  })

  return (
    
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <Text
          key={i}
          position={p.pos}
          fontSize={p.char.length === 1 ? 0.28 : 1.1}
          color={p.char.length === 1 ? "#ffffff88" : "white"}
          anchorX="center"
          anchorY="middle"
        >
          {p.char}
        </Text>
      ))}
    </group>
  )
}

interface SimpleHeroSphereProps {
  className?: string
}

export default function SimpleHeroSphere({ className }: SimpleHeroSphereProps) {
  return (
    
    <motion.div
      className={cn("h-screen w-full my-20 py-10 bg-black", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-red-500 ml-10 text-2xl">
        Gordito, estas animaciones se pueden implementar, pero queda mejor con fondos de pantalla oscuros, estas letras son de HUMBERTOG
      </h1>
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <SimpleCore />
        <TextConstellation count={280} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.8}
          dampingFactor={0.12}
          enableDamping
        />
      </Canvas>
    </motion.div>
  )
}