"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const steps = [
  "01 · CONTACTO",
  "02 · ANTICIPO",
  "03 · MATERIALES",
  "04 · DESARROLLO",
  "05 · AJUSTES",
  "06 · PUBLICACIÓN",
]

export function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"])
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 })

  return (
    <section id="proceso" ref={containerRef} className="relative overflow-hidden py-32 md:py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-0 px-8 py-20 md:px-12"
      >
        <p className="mb-4 font-mono text-xs tracking-[0.3em] text-muted-foreground">PROCESO CLARO</p>
        <h2 className="max-w-6xl font-sans text-3xl font-light italic md:text-5xl">
          Siete días hábiles a partir de recibir el <span className="text-[#2563eb]">anticipo</span> y todos tus{" "}
          <span className="text-[#2563eb]">materiales completos</span>.
        </h2>
        <p className="mt-7 max-w-3xl font-mono text-sm leading-7 text-muted-foreground">
          Tú entregas textos, logo, fotografías y datos de contacto. Nosotros organizamos la información, desarrollamos
          la página, aplicamos una ronda de ajustes y publicamos.
        </p>
      </motion.div>

      <div className="relative flex h-20 items-center overflow-hidden">
        <motion.div style={{ x: smoothX }} className="flex whitespace-nowrap px-8 md:px-12">
          {steps.map((step, index) => (
            <p
              key={step}
              className="mr-16 font-sans text-4xl font-light tracking-tight text-white/90 md:mr-24 md:text-6xl lg:text-7xl"
              style={{
                WebkitTextStroke: index % 2 === 0 ? "none" : "1px rgba(255,255,255,0.3)",
                color: index % 2 === 0 ? "inherit" : "transparent",
              }}
            >
              {step}
            </p>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-8 mt-16 h-px origin-left bg-gradient-to-r from-transparent via-white/20 to-transparent md:mx-12"
      />
    </section>
  )
}
