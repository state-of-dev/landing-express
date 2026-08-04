"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { demos } from "@/lib/site-config"

function DemoCard({ demo, index }: { demo: (typeof demos)[number]; index: number }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative h-[430px] w-full overflow-hidden md:h-[550px]"
    >
      <div
        className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-[1.03]"
        style={{ backgroundImage: `url(${demo.image})`, backgroundPosition: demo.position }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 md:p-8">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">{demo.category}</p>
          <h3 className="font-sans text-3xl font-light text-white md:text-4xl">{demo.title}</h3>
          {!demo.href && <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/45">URL pendiente</p>}
        </div>
        <ArrowUpRight className="h-7 w-7 text-white/70 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
    </motion.div>
  )

  return demo.href ? (
    <a href={demo.href} target="_blank" rel="noopener noreferrer" className="group block h-full" aria-label={`Ver ${demo.title}`}>
      {content}
    </a>
  ) : (
    <div className="group h-full" aria-disabled="true">
      {content}
    </div>
  )
}

export function CityGallery() {
  return (
    <section id="demos" className="relative px-2 py-20 md:px-4 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 px-6 text-center md:px-8"
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">DIRECCIÓN VISUAL</p>
        <h2 className="font-sans text-3xl font-light italic md:text-5xl">Mira cómo puede sentirse tu próxima landing.</h2>
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-3">
        {demos.map((demo, index) => (
          <div
            key={demo.title}
            className={`relative w-full max-w-none overflow-hidden rounded-2xl border border-white/10 bg-black/30 ${
              index === 0 ? "md:w-[65%]" : "md:w-[30%]"
            }`}
          >
            <DemoCard demo={demo} index={index} />
          </div>
        ))}
      </div>
    </section>
  )
}
