const questions = [
  {
    question: "¿Cuándo comienzan los siete días hábiles?",
    answer: "Cuando recibimos el anticipo y todos los textos, imágenes, logo y datos necesarios para construir la página.",
  },
  {
    question: "¿Qué incluye una ronda de ajustes?",
    answer: "Una lista consolidada de cambios menores sobre el diseño entregado. No incluye rediseño o nuevas secciones o funciones adicionales.",
  },
  {
    question: "¿Dominio y hosting están incluidos?",
    answer: "Si. La publicación incluye el dominio y el servicio de hosting por 1 año, sujeto a. Ejemplo: https://www.tu-empresa.com", 
  },
  {
    question: "¿Puedo solicitar más de siete secciones?",
    answer: "Sí. Las secciones adicionales se revisan y cotizan antes de comenzar.",
  },
  {
    question: "¿Qué se considera una función especial?",
    answer: "Pagos, reservaciones, e-commerce, membresías, bases de datos, capas de IA, paneles administrativos e integraciones con servicios de terceros.",
  },
  {
    question: "¿Cómo se realiza el pago?",
    answer: "Se solicita un anticipo del 50% para iniciar. El precio total de Landing Express es $5,800 MXN, IVA incluido.",
  },
]

export function FAQ() {
  return (
    <section id="preguntas" className="px-8 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">PREGUNTAS FRECUENTES</p>
          <h2 className="font-sans text-4xl font-light italic md:text-6xl">Alcance claro desde el inicio.</h2>
        </div>

        <div className="border-t border-white/10">
          {questions.map((item) => (
            <details key={item.question} className="group border-b border-white/10">
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 py-5 font-mono text-sm text-white">
                <span>{item.question}</span>
                <span className="text-xl font-light text-[#2563eb] transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-7 pr-10 font-mono text-sm leading-7 text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
