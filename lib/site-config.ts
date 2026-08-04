export const product = {
  name: "Landing Express",
  price: 4500,
  priceLabel: "$4,500 MXN",
  deposit: 2250,
  depositLabel: "$2,250 MXN",
  delivery: "5 días hábiles",
  sections: "hasta 7 secciones",
  taxLabel: "IVA incluido",
} as const

export const demos = [
  {
    title: "Dra. Marina Vela",
    category: "Landing para dentista",
    href: process.env.NEXT_PUBLIC_DENTISTA_DEMO_URL ?? "",
    image: "/demo-dentista.jpeg",
    position: "center 22%",
  },
  {
    title: "Norte Arquitectos",
    category: "Landing para arquitectura",
    href: process.env.NEXT_PUBLIC_NORTE_DEMO_URL ?? "",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=85",
    position: "center",
  },
] as const
