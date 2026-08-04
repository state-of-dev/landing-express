# 📄 METADATA Y SEO

**hardcoded.space**  
**Fecha:** 2026-03-18

---

## 📋 Descripción

Configuración de metadata SEO para el sitio web. Incluye metadata principal, Open Graph, Twitter Cards y JSON-LD Schema.

**Archivo:** `app/layout.tsx`

---

## 🔧 Metadata Principal

### Configuración

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://hardcoded.space'),
  title: "Agencia Web México | $6,000",
  description: "Desarrollo profesional de páginas web y tiendas online en México desde $6,000 MXN. E-commerce ilimitado, automatizaciones, bases de datos. ¡Cotiza en 24 horas! Agencia web CDMX.",
  generator: 'Next.js',
  keywords: ["agencia web", "desarrollo web", "tiendas online", "paginas web", "e-commerce", "México", "CDMX", "Ciudad de México", "desarrollo web profesional", "agencias web"],
  applicationName: 'hardcoded.space',
  authors: [{ name: 'hardcoded.space' }],
  creator: 'hardcoded.space',
  publisher: 'hardcoded.space',
  alternates: {
    canonical: 'https://hardcoded.space',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}
```

### Campos Clave

| Campo | Valor | Descripción |
|-------|-------|-------------|
| `title` | "Agencia Web México..." | Título del sitio (60 chars máx) |
| `description` | Descripción optimizada | Meta descripción (155 chars máx) |
| `keywords` | Array de keywords | Palabras clave para SEO |
| `robots` | index: true, follow: true | Instrucciones para crawlers |

---

## 🌐 Open Graph (Redes Sociales)

### Configuración

```typescript
openGraph: {
  title: "Construye tu Tienda Online en 30 Días - Agencia Web México $6,000",
  description: "Desarrollo profesional de páginas web y tiendas online en México. Desde $6,000 MXN. ¡Cotiza ahora!",
  url: 'https://hardcoded.space',
  siteName: 'hardcoded.space',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Agencia web México - Tiendas online profesional',
    }
  ],
  locale: 'es_MX',
  alternateLocale: ['es_ES', 'es_MX'],
  type: 'website',
}
```

### Campos Clave

| Campo | Valor | Descripción |
|-------|-------|-------------|
| `title` | Título para redes | 60-90 chars recomendado |
| `description` | Descripción para redes | 100-200 chars |
| `images` | URL de imagen OG | 1200x630px recomendado |
| `locale` | `es_MX` | Idioma local |
| `type` | `website` | Tipo de contenido |

### Imagen OG

**Requisitos:**
- Tamaño: 1200 x 630 píxeles
- Formato: PNG o JPG
- Ubicación: `/public/og-image.png`

---

## 🐦 Twitter Cards

### Configuración

```typescript
twitter: {
  card: 'summary_large_image',
  title: "Agencia Web México | Tiendas Online desde $6,000",
  description: "Desarrollo profesional de páginas web y tiendas online. ¡Cotiza hoy!",
  images: ['/og-image.png'],
  creator: '@hardcodedspace',
}
```

### Tipos de Cards

| Tipo | Descripción |
|------|-------------|
| `summary` | Tarjeta pequeña con imagen |
| `summary_large_image` | Tarjeta grande con imagen (recomendado) |

---

## 🔗 Alternates y Canonical

### Configuración

```typescript
alternates: {
  canonical: 'https://hardcoded.space',
  languages: {
    'es-MX': 'https://hardcoded.space/es-MX',
    'es-ES': 'https://hardcoded.space/es-ES',
  },
}
```

### Canonical URL

**Propósito:** Evitar contenido duplicado en SEO

**Valor actual:**
```
https://hardcoded.space
```

---

## 🤖 Robots

### Configuración

```typescript
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
}
```

### Opciones

| Opción | Valor | Descripción |
|--------|-------|-------------|
| `index` | `true` | Permite indexación |
| `follow` | `true` | Permite seguir enlaces |
| `max-image-preview` | `large` | Tamaño de preview de imágenes |

---

## 📊 JSON-LD Schema

### Estructura

```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "hardcoded.space",
  "description": "Tu Tienda Online en 30 Días. Desarrollo profesional de páginas web y tiendas online en México desde $6,000 MXN.",
  "url": "https://hardcoded.space",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ciudad de México",
    "addressCountry": "MX"
  },
  "service": ["Web Development", "E-commerce", "Digital Marketing", "Web Design"],
  "areaServed": {
    "@type": "Country",
    "name": "México"
  }
}
```

### Inserción en Layout

```typescript
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## 🌍 Configuración de Viewport

```typescript
export const viewport: Viewport = {
  themeColor: "#1a1a1a",
}
```

---

## 📝 Estructura de Archivos

```
app/
├── layout.tsx          # Metadata principal
├── page.tsx            # Metadata específica de página
├── sitemap.ts          # Sitemap dinámico
└── robots.txt          # Reglas de robots (en public/)
```

---

## 🔍 Verificación

### Herramientas

| Herramienta | URL | Uso |
|-------------|-----|-----|
| Google Rich Results | https://search.google.com/test/rich-results | Probar Schema |
| Facebook Debugger | https://developers.facebook.com/tools/debug/ | Probar Open Graph |
| Twitter Card Validator | https://cards-dev.twitter.com/validator | Probar Twitter Cards |
| Meta Tags Preview | https://metatags.io/ | Vista previa |

### Comandos de Verificación

```bash
# Verificar build
pnpm build

# Verificar sitemap
curl https://hardcoded.space/sitemap.xml

# Verificar robots.txt
curl https://hardcoded.space/robots.txt
```

---

## ⚠️ Consideraciones

### SEO

| Aspecto | Recomendación |
|---------|---------------|
| Título | 50-60 caracteres |
| Descripción | 150-160 caracteres |
| Imagen OG | 1200x630px |
| Canonical | URL única |

### Localización

| Idioma | Valor |
|--------|-------|
| Principal | `es-MX` |
| Alternativo | `es-ES` |

---

## 📝 Referencias

- [Next.js Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image)
- [Schema.org](https://schema.org/)

---

**Documentación de Metadata - hardcoded.space**
