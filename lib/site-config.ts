export const product = {
  name: "Landing Express",
  price: 5800,
  priceLabel: "$5,800 MXN",
  deposit: 2900,
  depositLabel: "$2,900 MXN",
  delivery: "7 días hábiles",
  sections: "hasta 7 secciones",
  taxLabel: "IVA incluido",
} as const

export const demos = [
  {
    title: "Cifra Consultores",
    category: "Landing para finanzas corporativas",
    href: process.env.NEXT_PUBLIC_FINANZAS_DEMO_URL ?? "",
    image: "/estrategia-fiscal-mobile.png",
    position: "center top",
  },
  {
    title: "Norte Arquitectos",
    category: "Landing para inmobiliaria",
    href: process.env.NEXT_PUBLIC_NORTE_DEMO_URL ?? "",
    image: "/norte-arquitectos-web.png",
    position: "center",
  },
] as const
