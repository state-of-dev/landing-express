"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { product } from "@/lib/site-config"
import { SentientSphere } from "./sentient-sphere"

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section id="inicio" ref={containerRef} className="relative min-h-svh w-full overflow-hidden bg-[#050505]">
      <h1 className="sr-only">Landing Express, landing profesional por {product.priceLabel}</h1>

      <div className="absolute inset-0">
        <SentientSphere />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 flex min-h-svh flex-col justify-between px-6 py-20 md:px-12 md:py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden md:block"
        >
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-muted-foreground">DESARROLLO WEB</p>
          <h2 className="text-balance font-sans text-4xl font-light tracking-tight md:text-6xl lg:text-7xl">
            UNA PÁGINA
            <br />
            <span className="italic">PARA VENDER</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-20 flex flex-1 flex-col items-center justify-center gap-5 px-4 text-center md:absolute md:left-1/2 md:top-1/2 md:max-w-4xl md:-translate-x-1/2 md:-translate-y-1/2 md:gap-0"
        >
          <div className="w-full md:hidden">
            <div className="-mx-4 mb-3 overflow-hidden">
              <div className="flex animate-marquee-left">
                <p className="whitespace-nowrap font-mono text-xs tracking-[0.3em] text-muted-foreground">
                  LANDING EXPRESS • LANDING EXPRESS • LANDING EXPRESS • LANDING EXPRESS •
                </p>
              </div>
            </div>
            <h2 className="text-balance font-sans text-3xl font-light tracking-tight">
              UNA PÁGINA
              <br />
              <span className="italic">PARA VENDER</span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm font-light leading-relaxed text-white/80 md:mb-4 md:text-lg">
            Una landing profesional de hasta 7 secciones, responsive para móvil y escritorio, una ronda de ajustes y publicación del proyecto.
          </p>
          <p className="font-mono text-xs tracking-[0.18em] text-white/70 md:mb-8 md:text-sm">
            {product.priceLabel} con {product.taxLabel}. Entrega en {product.delivery}.
          </p>
          <div className="flex justify-center">
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-full border border-white/20 bg-transparent px-7 py-4 font-mono text-xs uppercase tracking-widest backdrop-blur-sm transition-colors duration-500 hover:bg-white hover:text-black md:w-auto md:px-9 md:text-sm"
            >
              Quiero mi Landing Express
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden self-end text-right md:block"
        >
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-muted-foreground">PRECIO FINAL · IVA INCLUIDO</p>
          <h2 className="text-balance font-sans text-4xl font-light tracking-tight md:text-6xl lg:text-7xl">
            $4,500
            <br />
            <span className="italic">MXN</span>
          </h2>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Explora</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
