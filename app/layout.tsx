import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Geist_Mono, Playfair_Display } from "next/font/google"
import { product } from "@/lib/site-config"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Landing Express por Hardcoded Studio | $4,500 MXN",
  description:
    "Landing profesional para negocios: hasta 7 secciones, diseño responsive, SEO técnico, publicación y entrega en 5 días hábiles. $4,500 MXN con IVA.",
  applicationName: "Hardcoded Studio",
  authors: [{ name: "Hardcoded Studio" }],
  creator: "Hardcoded Studio",
  publisher: "Hardcoded Studio",
  category: "Diseño y desarrollo web",
  keywords: [
    "landing page",
    "landing page México",
    "diseño de landing page",
    "landing profesional",
    "página web para negocios",
    "desarrollo web CDMX",
    "Hardcoded Studio",
    "Landing Express",
    "México",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Landing Express por Hardcoded Studio | $4,500 MXN",
    description: "Una landing profesional, responsive y publicada para presentar tu oferta. Entrega en 5 días hábiles e IVA incluido.",
    siteName: "Hardcoded Studio",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Express por Hardcoded Studio | $4,500 MXN",
    description: "Landing profesional, responsive y publicada en 5 días hábiles. IVA incluido.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#050505",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: product.name,
  description:
    "Landing profesional de hasta 7 secciones, responsive, con SEO técnico básico, publicación y una ronda de ajustes.",
  provider: {
    "@type": "Organization",
    name: "Hardcoded Studio",
  },
  serviceType: "Diseño y desarrollo de landing page",
  areaServed: {
    "@type": "Country",
    name: "México",
  },
  offers: {
    "@type": "Offer",
    price: String(product.price),
    priceCurrency: "MXN",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: String(product.price),
      priceCurrency: "MXN",
      valueAddedTaxIncluded: true,
    },
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${playfair.variable} ${geistMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="overflow-x-hidden font-sans antialiased">
        <div className="noise-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
