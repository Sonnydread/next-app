"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "./use-breakpoints";

interface Particle {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  angle: number
  distance: number
  life: number
  maxLife: number
}

export default function ParticleBreathing({ size, className }: { size?: number; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let centerX = 0
    let centerY = 0
    let time = 0
    let lastTime = performance.now()

    const particles: Particle[] = []
    const maxParticles = isMobile ? 600 : 900
    const baseRadius = 0 // se calcula afters

    // Pool de partículas recicladas (evita GC)
    const particlePool: Particle[] = []

    const getParticle = (): Particle => {
      if (particlePool.length > 0) {
        const p = particlePool.pop()!
        p.life = 0
        p.opacity = 0
        return p
      }
      return {
        x: 0,
        y: 0,
        size: 0,
        opacity: 0,
        speed: 0,
        angle: 0,
        distance: 0,
        life: 0,
        maxLife: 0,
      }
    }

    const resize = () => {
      const w = size ?? (isMobile ? Math.max(window.innerWidth, window.innerHeight) : window.innerWidth)
      const h = size ?? (isMobile ? w : window.innerHeight)

      canvas.width = w
      canvas.height = h
      centerX = w / 2
      centerY = h / 2

      // Limpiar partículas antiguas si cambia mucho el tamaño
      particles.length = 0
    }

    resize()
    window.addEventListener("resize", resize)

    const animate = (now: number) => {
      const delta = Math.min((now - lastTime) / 1000, 0.1) // delta time en segundos
      lastTime = now
      time += delta

      ctx.fillStyle = "rgba(0,0,0,0.12)" // fade suave y eficiente
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const breathCycle = 3.2 // segundos por ciclo
      const phase = (time % breathCycle) / breathCycle

      // Fases: inhale 0→1 (rápido), hold 1, exhale 1→0 (lento)
      let breathing = 0
      if (phase < 0.35) breathing = phase / 0.35
      else if (phase < 0.45) breathing = 1
      else breathing = 1 - (phase - 0.45) / 0.55

      const radius = Math.min(canvas.width, canvas.height) * 0.28 * (0.85 + breathing * 0.15)

      // Spawn rate depende de fase (más en inhale)
      const spawnRate = Math.floor(breathing * 18 + 4) * delta * 60 // normalizado a 60fps

      for (let i = 0; i < spawnRate; i++) {
        if (particles.length >= maxParticles) break

        const p = getParticle()
        const angle = Math.random() * Math.PI * 2
        const ringWidth = radius * 0.08

        p.angle = angle
        p.distance = radius + (Math.random() - 0.5) * ringWidth
        p.x = centerX + Math.cos(angle) * p.distance
        p.y = centerY + Math.sin(angle) * p.distance
        p.size = 2 + Math.random() * 3
        p.opacity = 0.7 + Math.random() * 0.3
        p.speed = 0.8 + Math.random() * 1.4
        p.life = 0
        p.maxLife = 50 + Math.random() * 70

        particles.push(p)
      }

      ctx.globalCompositeOperation = "lighter"

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life += 1

        const lifePhase = p.life / p.maxLife

        // Expansión radial
        p.distance += p.speed * delta * 60
        p.x = centerX + Math.cos(p.angle) * p.distance
        p.y = centerY + Math.sin(p.angle) * p.distance

        // Fade
        p.opacity = lifePhase < 0.15 ? lifePhase * 6.67 : lifePhase > 0.6 ? (1 - (lifePhase - 0.6) * 2.5) : p.opacity

        // Dibujo rápido: rect + glow simulado con alpha alto
        ctx.globalAlpha = p.opacity
        const sz = p.size * 2
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`
        ctx.fillRect(p.x - sz/2, p.y - sz/2, sz, sz)

        // Núcleo brillante
        ctx.globalAlpha = Math.min(1, p.opacity * 2)
        ctx.fillStyle = "white"
        ctx.fillRect(p.x - p.size/2, p.y - p.size/2, p.size, p.size)

        if (p.life >= p.maxLife) {
          particlePool.push(particles.splice(i, 1)[0])
        }
      }

      ctx.globalCompositeOperation = "source-over"
      ctx.globalAlpha = 1

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [size, isMobile])

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 max-w-[100dvw] max-h-[100dvw] touch-none pointer-events-none",
        className
      )}
      aria-label="Animación de respiración de partículas"
    />
  )
}