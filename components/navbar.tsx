"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { product } from "@/lib/site-config"

const navLinks = [
  { label: "Qué incluye", href: "#incluye" },
  { label: "Demos", href: "#demos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Preguntas", href: "#preguntas" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : ""
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-5" aria-label="Principal">
          <button onClick={() => scrollToSection("#inicio")} className="group flex items-center gap-2">
            <span className="font-mono text-xs tracking-widest text-muted-foreground">LANDING EXPRESS</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
          </button>

          <ul className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link, index) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="group relative font-mono text-[11px] tracking-wider text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  <span className="mr-1 text-accent">0{index + 1}</span>
                  {link.label.toUpperCase()}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection("#contact")}
            className="hidden items-center gap-3 md:flex"
            aria-label={`Iniciar proyecto por ${product.priceLabel}, ${product.taxLabel}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs tracking-wider text-muted-foreground">
              {product.priceLabel} · IVA INCL.
            </span>
          </button>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="relative flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="h-px w-6 origin-center bg-foreground"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="h-px w-6 bg-foreground"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="h-px w-6 origin-center bg-foreground"
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-7" aria-label="Menú móvil">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => scrollToSection(link.href)}
                  className="group text-4xl font-sans tracking-tight text-foreground"
                >
                  <span className="mr-2 font-mono text-sm text-accent">0{index + 1}</span>
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                onClick={() => scrollToSection("#contact")}
                className="mt-6 rounded-full border border-accent bg-accent px-7 py-4 font-mono text-xs tracking-widest text-white"
              >
                QUIERO MI LANDING
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
