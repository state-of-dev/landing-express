"use client"

import type { ChangeEvent, FormEvent } from "react"
import { useState } from "react"
import { ArrowUpRight, Check, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import { product } from "@/lib/site-config"

type ButtonState = "idle" | "loading" | "success" | "error"

const initialForm = {
  nombre: "",
  email: "",
  telefono: "",
  negocio: "",
  mensaje: "",
  website: "",
}

export function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [isHovered, setIsHovered] = useState(false)
  const [buttonState, setButtonState] = useState<ButtonState>("idle")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setButtonState("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("No fue posible enviar el formulario")

      setButtonState("success")
      setFormData(initialForm)
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setButtonState("error")
    }

    window.setTimeout(() => setButtonState("idle"), 3500)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  return (
    <section id="contact" className="relative scroll-mt-20">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute inset-0 bg-[#1d4ed8]"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        <div className="relative border-t border-white/10 px-8 py-16 md:px-12 md:py-24">
          <div className="flex flex-col items-center gap-8">
            <motion.p
              className="font-mono text-sm uppercase tracking-wider"
              animate={{ color: isHovered ? "#050505" : "rgb(161 161 170)" }}
            >
              {product.priceLabel} · {product.taxLabel}
            </motion.p>
            <motion.h2
              className="text-center font-sans text-4xl font-light tracking-tight md:text-6xl lg:text-8xl"
              animate={{ color: isHovered ? "#050505" : "#fafafa" }}
            >
              Inicia tu <span className="italic">Landing Express</span>
            </motion.h2>
            <motion.div animate={{ rotate: isHovered ? 135 : 0, color: isHovered ? "#050505" : "#fafafa" }}>
              <ArrowUpRight className="h-12 w-12 md:h-16 md:w-16" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="px-8 py-24 md:px-12 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mx-auto max-w-2xl font-mono text-sm leading-7 tracking-wider text-muted-foreground">
            Cuéntanos sobre tu negocio y tu idea.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mx-auto max-w-3xl space-y-6"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="space-y-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Nombre
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                autoComplete="name"
                required
                maxLength={100}
                className="mt-2 w-full border border-white/10 bg-black/20 px-4 py-3 font-mono text-sm normal-case tracking-normal text-white outline-none transition-colors focus:border-[#2563eb]"
                placeholder="Tu nombre completo"
              />
            </label>

            <label className="space-y-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Correo
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                maxLength={160}
                className="mt-2 w-full border border-white/10 bg-black/20 px-4 py-3 font-mono text-sm normal-case tracking-normal text-white outline-none transition-colors focus:border-[#2563eb]"
                placeholder="tu@email.com"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="space-y-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Teléfono
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                autoComplete="tel"
                maxLength={30}
                className="mt-2 w-full border border-white/10 bg-black/20 px-4 py-3 font-mono text-sm normal-case tracking-normal text-white outline-none transition-colors focus:border-[#2563eb]"
                placeholder="+52 55 0000 0000"
              />
            </label>

            <label className="space-y-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Negocio
              <input
                type="text"
                name="negocio"
                value={formData.negocio}
                onChange={handleChange}
                required
                maxLength={120}
                className="mt-2 w-full border border-white/10 bg-black/20 px-4 py-3 font-mono text-sm normal-case tracking-normal text-white outline-none transition-colors focus:border-[#2563eb]"
                placeholder="Nombre o giro de tu negocio"
              />
            </label>
          </div>

          <label className="block space-y-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            ¿Qué quieres promocionar?
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              maxLength={1500}
              rows={5}
              className="mt-2 w-full resize-y border border-white/10 bg-black/20 px-4 py-3 font-mono text-sm normal-case tracking-normal text-white outline-none transition-colors focus:border-[#2563eb]"
              placeholder="Describe brevemente tu oferta y el objetivo de la landing"
            />
          </label>

          <label className="absolute -left-[9999px]" aria-hidden="true">
            Sitio web
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>

          <motion.button
            type="submit"
            disabled={buttonState === "loading"}
            whileHover={buttonState === "idle" ? { scale: 1.02 } : {}}
            whileTap={buttonState === "idle" ? { scale: 0.98 } : {}}
            className={`flex w-full items-center justify-center gap-2 rounded-full border px-8 py-4 font-mono text-sm uppercase tracking-widest transition-colors duration-500 ${
              buttonState === "loading"
                ? "cursor-not-allowed border-[#2563eb]/50 bg-[#2563eb]/50"
                : buttonState === "success"
                  ? "border-green-600 bg-green-600"
                  : buttonState === "error"
                    ? "border-red-600 bg-red-600"
                    : "border-[#1d4ed8] bg-[#1d4ed8] hover:border-[#1e40af] hover:bg-[#1e40af]"
            }`}
            aria-live="polite"
          >
            {buttonState === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
            {buttonState === "success" && <Check className="h-4 w-4" />}
            {buttonState === "idle" && "Enviar información"}
            {buttonState === "loading" && "Enviando..."}
            {buttonState === "success" && "Información enviada"}
            {buttonState === "error" && "Intenta nuevamente"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
