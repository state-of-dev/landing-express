"use client"

import { motion } from "framer-motion"
import { product } from "@/lib/site-config"

const included = [
  "Una página de hasta 7 secciones",
  "Diseño responsive para celular y escritorio",
  "CTA al WhatsApp de tu negocio",
  "Una ronda consolidada de ajustes",
  "Entrega en 5 días hábiles a partir anticipo y materiales",
]

const extras = [
  "Secciones adicionales",
  // "Integraciones con servicios externos",
]

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
}

export function Works() {
  return (
    <section id="incluye" className="relative px-8 py-24 md:px-12 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">UN SOLO PRODUCTO</p>
        <h2 className="font-sans text-3xl font-light italic md:text-5xl">
          Todo lo necesario para <span className="text-[#2563eb]">presentar y vender.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-5xl border border-[#2563eb]/60 bg-[#2563eb]/5 p-8 backdrop-blur-sm md:p-12"
      >
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#2563eb]">LANDING EXPRESS</p>
            <h3 className="font-sans text-4xl font-light tracking-tight text-white md:text-6xl">{product.priceLabel}</h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {product.taxLabel}
            </p>
            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="font-mono text-sm text-white">50% de anticipo para iniciar</p>
              <p className="mt-1 font-mono text-2xl text-[#2563eb]">{product.depositLabel}</p>
            </div>
            <button
              onClick={scrollToContact}
              className="mt-10 rounded-full border border-[#1d4ed8] bg-[#1d4ed8] px-8 py-4 font-mono text-sm uppercase tracking-widest transition-colors hover:border-[#1e40af] hover:bg-[#1e40af]"
            >
              Iniciar proyecto
            </button>
          </div>

          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-wider text-white">Incluye</p>
            <div className="space-y-3">
              {included.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb]" />
                  <p className="font-mono text-sm leading-6 text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-white">Se cotiza por separado</p>
              <p className="font-mono text-sm leading-7 text-muted-foreground">{extras.join(" · ")}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
