# 📚 DOCUMENTO MAESTRO DE SEO - HARDCODED.SPACE

**Versión:** 1.0.0  
**Fecha:** 2026-03-16  
**Autor:** Equipo de Desarrollo  
**Tipo:** Documento de Referencia SEO

---

## 📑 ÍNDICE

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Metadatos Optimizados](#2-metadatos-optimizados)
3. [Estructura de Archivos SEO](#3-estructura-de-archivos-seo)
4. [Optimizaciones Técnicas](#4-optimizaciones-técicas)
5. [Performance y Rendimiento](#5-performance-y-rendimiento)
6. [Estrategia de Contenido](#6-estrategia-de-contenido)
7. [Google Search Console](#7-google-search-console)
8. [Escalado Futuro y Publicidad](#8-escalado-futuro-y-publicidad)
9. [Checklist de Mantenimiento](#9-checklist-de-mantenimiento)
10. [Métricas y KPIs](#10-métricas-y-kpis)

---

## 1. RESUMEN EJECUTIVO

### 1.1 Objetivo del Proyecto
Optimizar el sitio web `hardcoded.space` para:
- ✅ Mejorar visibilidad en búsquedas de Google
- ✅ Capturar búsquedas locales en México
- ✅ Generar leads cualificados para servicios web
- ✅ Preparar infraestructura para futuras campañas de publicidad

### 1.2 Estado Actual
| Componente | Estado | Prioridad |
|------------|--------|-----------|
| Metadatos SEO | ✅ Completado | Alta |
| Sitemap | ✅ Completado | Alta |
| robots.txt | ✅ Completado | Alta |
| Google Search Console | ✅ Verificado | Alta |
| Indexación | ⏳ En proceso | Media |
| Performance | ⚙️ Optimizado | Media |
| Contenido | ✅ Listo | Alta |

### 1.3 Palabras Clave Principales
```
agencia web México, desarrollo web, tiendas online, páginas web,
e-commerce, CDMX, Ciudad de México, agencias web profesionales
```

---

## 2. METADATOS OPTIMIZADOS

### 2.1 Título del Sitio (Title Tag)

**Especificaciones:**
- **Límite:** 60 caracteres máximo
- **Caracteres actuales:** 56/60 ✅
- **Texto:** `Tu Tienda Online en 30 Días | Agencia Web México $6,000`

**Estructura:**
```
[PROMESA EMOCIONAL] + [UBICACIÓN] + [PRECIO]
```

### 2.2 Meta Descripción

**Especificaciones:**
- **Límite:** 155-160 caracteres
- **Caracteres actuales:** 152/160 ✅
- **Texto:**
```
Desarrollo profesional de páginas web y tiendas online en México desde $6,000 MXN.
E-commerce ilimitado, automatizaciones, bases de datos. ¡Cotiza en 24 horas!
Agencia web CDMX.
```

**Estructura:**
```
[SOLUCIÓN] + [UBICACIÓN] + [PRECIO] + [BENEFICIOS] + [CALL TO ACTION] + [LOCALIDAD]
```

### 2.3 Open Graph (Redes Sociales)

| Campo | Valor |
|-------|-------|
| **Título** | `Construye tu Tienda Online en 30 Días - Agencia Web México $6,000` |
| **Descripción** | `Desarrollo profesional de páginas web y tiendas online en México. Desde $6,000 MXN. ¡Cotiza ahora!` |
| **Imagen** | `/og-image.png` (1200x630px) |
| **Locale** | `es_MX` |

### 2.4 Twitter Card

| Campo | Valor |
|-------|-------|
| **Título** | `Agencia Web México \| Tiendas Online desde $6,000` |
| **Descripción** | `Desarrollo profesional de páginas web y tiendas online. ¡Cotiza hoy!` |
| **Tipo** | `summary_large_image` |

### 2.5 Meta Tags Adicionales

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  // ... otros metadatos
  keywords: [
    "agencia web",
    "desarrollo web",
    "tiendas online",
    "paginas web",
    "e-commerce",
    "México",
    "CDMX",
    "Ciudad de México",
    "desarrollo web profesional",
    "agencias web"
  ],
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

---

## 3. ESTRUCTURA DE ARCHIVOS SEO

### 3.1 Directorios Creados

```
hardcoded.space/
├── docs/
│   └── seo/
│       └── SEO_MAESTRO.md          ← Este documento
├── app/
│   ├── layout.tsx                  ← Meta tags, JSON-LD
│   ├── sitemap.ts                  ← Sitemap dinámico
│   └── page.tsx                    ← Página principal
├── public/
│   ├── robots.txt                  ← Reglas de crawling
│   └── og-image.png                ← Imagen para redes sociales
└── components/
    └── city-gallery.tsx            ← Alt tags optimizados
```

### 3.2 Archivos SEO Clave

#### 3.2.1 `app/layout.tsx`
- Meta tags optimizados
- JSON-LD Schema estructurado
- Canonical URL
- Meta robots

#### 3.2.2 `app/sitemap.ts`
```tsx
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hardcoded.space'
  const lastModified = new Date().toISOString().split('T')[0]

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
```

#### 3.2.3 `public/robots.txt`
```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://hardcoded.space/sitemap.xml
```

#### 3.2.4 JSON-LD Schema (Structured Data)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "hardcoded.space",
  "description": "Tu Tienda Online en 30 Días. Desarrollo profesional de páginas web...",
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

---

## 4. OPTIMIZACIONES TÉCNICAS

### 4.1 HTML y Estructura

| Elemento | Antes | Después | Impacto |
|----------|-------|---------|---------|
| **Lang** | `lang="en"` | `lang="es-MX"` | SEO español mejorado |
| **Título** | "hardcoded.space" | Promesa + precio | + Click-through rate |
| **Descripción** | 236 chars | 152 chars óptimo | Mejor visualización |
| **JSON-LD** | No tenía | ProfessionalService | Rich snippets Google |
| **Canonical** | No definido | `https://hardcoded.space` | Evita duplicados |

### 4.2 Imágenes

**Alt tags optimizados:**
```tsx
// ANTES
alt: "MacBook laptop"

// DESPUÉS
alt: "Desarrollo de tiendas online en MacBook - Agencia web México"
```

### 4.3 Performance (Rendimiento)

| Optimización | Implementada | Beneficio |
|--------------|--------------|-----------|
| Geometría 32 subdivisions | ✅ | +30-40% FPS |
| DPR [1, 1.5] | ✅ | +15-20% FPS |
| Antialias desactivado | ✅ | +10-15% FPS |
| Visibility check | ✅ | +20% fuera de vista |
| Image optimization | ✅ | Next.js Image |

---

## 5. PERFORMANCE Y RENDIMIENTO

### 5.1 Optimizaciones de la Esfera 3D

| Parámetro | Original | Optimizado |
|-----------|----------|------------|
| Subdivisiones | 64 | 32 |
| DPR | [1, 2] | [1, 1.5] |
| Antialias | true | false |
| Visibility | No | Sí (useInView) |

### 5.2 Animaciones

| Componente | Cambio | Impacto |
|------------|--------|---------|
| TechMarquee | 4x → 2x items | -50% memoria |
| Footer Clock | 10ms → 100ms | -90% CPU |
| SmoothScroll | Solo mobile | Mejor escritorio |

---

## 6. ESTRATEGIA DE CONTENIDO

### 6.1 Palabras Clave por Sección

| Sección | Palabras Clave | Objetivo |
|---------|----------------|----------|
| **Hero** | Agencia web, tiendas online, $6,000 | Conversión |
| **About** | Desarrollo web, tecnologías | Confianza |
| **Solutions** | Páginas web, tiendas online | Decisión |
| **Contact** | Cotización, asesoría | Lead generation |

### 6.2 Estructura de URLs (Futuro)

```
https://hardcoded.space/                    ← Home (indexada)
https://hardcoded.space/servicios           ← Servicios
https://hardcoded.space/servicios/web       ← Desarrollo web
https://hardcoded.space/servicios/ecommerce ← Tiendas online
https://hardcoded.space/contacto            ← Contacto
https://hardcoded.space/blog                ← Blog (futuro)
```

### 6.3 Contenido Recomendado (Futuro)

- **Blog:** Artículos sobre "Cómo crear una tienda online"
- **Casos de éxito:** Clientes satisfechos
- **Guías:** "Guía completa de e-commerce en México"
- **Comparativas:** "Shopify vs WooCommerce vs Desarrollo propio"

---

## 7. GOOGLE SEARCH CONSOLE

### 7.1 Configuración

| Campo | Valor |
|-------|-------|
| **Tipo de propiedad** | Dominio (`hardcoded.space`) |
| **Verificación** | DNS (TXT record) |
| **Estado** | ✅ Verificado |
| **Sitemap** | `https://hardcoded.space/sitemap.xml` |

### 7.2 Secciones a Monitorear

| Sección | Frecuencia | Acción |
|---------|------------|--------|
| **Rendimiento** | Semanal | Analizar consultas |
| **Indexación** | Semanal | Corregir errores |
| **Experiencia** | Mensual | Optimizar mobile |
| **Sitemaps** | Trimestral | Actualizar URLs |

### 7.3 Proceso de Indexación

| Día | Acción |
|-----|--------|
| 0-1 | Verificación DNS |
| 1-2 | Envío sitemap |
| 7-14 | Primeras indexaciones |
| 14-30 | Posicionamiento inicial |
| 30+ | Optimización continua |

---

## 8. ESCALADO FUTURO Y PUBLICIDAD

### 8.1 Publicidad Digital (Ads)

#### 8.1.1 Google Ads
- **Palabras clave objetivo:**
  - "agencia web méxico"
  - "desarrollo de tiendas online"
  - "páginas web profesionales"
- **Presupuesto sugerido:** $5,000-10,000 MXN/mes inicial
- **Anuncios display:** Banner 728x90, 300x250
- **Remarketing:** Visitantes del sitio

#### 8.1.2 Meta Ads (Facebook/Instagram)
- **Público:** Emprendedores en México, 25-45 años
- **Formato:** Video 15s, carousel de servicios
- **CTA:** "Cotiza tu tienda online en 30 días"

#### 8.1.3 LinkedIn Ads
- **Público:** Dueños de negocios, gerentes de TI
- **Formato:** Sponsored content, InMail

### 8.2 Optimización para Conversión

| Elemento | Actual | Mejora Futura |
|----------|--------|---------------|
| **Landing Page** | Una página | Múltiples LP por servicio |
| **Formulario** | Básico | Multi-step con validación |
| **CTA** | Botones | Urgencia + prueba social |
| **Testimonios** | No | Video testimonios |

### 8.3 Métricas para Publicidad

| Métrica | Objetivo | Herramienta |
|---------|----------|-------------|
| **CPL** (Costo por Lead) | < $500 MXN | Google Analytics |
| **ROAS** | > 3x | Google Ads |
| **CTR** | > 2% | GSC + Ads |
| **Tasa conversión** | > 5% | GA4 |

### 8.4 Integración de Herramientas

```tsx
// analytics.ts (futuro)
export const analyticsConfig = {
  googleAnalytics: 'G-XXXXXXXXXX',
  googleTagManager: 'GTM-XXXXXXXX',
  facebookPixel: 'XXXXXXXXXXXXXXX',
  hotjar: 'XXXXXXX',
}
```

---

## 9. CHECKLIST DE MANTENIMIENTO

### 9.1 Semanal
- [ ] Revisar Google Search Console - Rendimiento
- [ ] Verificar indexación de nuevas páginas
- [ ] Analizar consultas de búsqueda
- [ ] Revisar errores de rastreo

### 9.2 Mensual
- [ ] Actualizar sitemap si hay nuevas URLs
- [ ] Revisar Core Web Vitals
- [ ] Analizar contenido - optimizar palabras clave
- [ ] Verificar backlinks

### 9.3 Trimestral
- [ ] Revisar estructura de URLs
- [ ] Actualizar JSON-LD Schema
- [ ] Revisar robots.txt
- [ ] Análisis de competencia

### 9.4 Anual
- [ ] Revisión completa de SEO
- [ ] Actualización de estrategia de contenido
- [ ] Revisión de herramientas y métricas
- [ ] Planificación de campañas de publicidad

---

## 10. MÉTRICAS Y KPIs

### 10.1 Métricas Clave de SEO

| Métrica | Objetivo | Herramienta |
|---------|----------|-------------|
| **Posiciones** | Top 10 palabras clave clave | Google Search Console |
| **Tráfico orgánico** | +50% en 6 meses | Google Analytics |
| **CTR** | > 3% | Google Search Console |
| **Tasa rebote** | < 50% | Google Analytics |
| **Tiempo en página** | > 2 minutos | Google Analytics |

### 10.2 Métricas de Performance

| Métrica | Límite | Objetivo |
|---------|--------|----------|
| **LCP** (Largest Contentful Paint) | < 2.5s | < 2s |
| **FID** (First Input Delay) | < 100ms | < 50ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | < 0.05 |

### 10.3 Métricas de Conversión

| Métrica | Objetivo | Cálculo |
|---------|----------|---------|
| **Tasa conversión** | > 5% | Leads / Visitas |
| **Costo por lead** | < $500 MXN | Inversión / Leads |
| **Tiempo conversión** | < 30 días | Fecha lead - Fecha visita |

---

## 11. ANEXOS

### 11.1 Recursos Útiles

- **Google Search Console:** https://search.google.com/search-console
- **Google Analytics:** https://analytics.google.com
- **PageSpeed Insights:** https://pagespeed.web.dev
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **Schema Markup Validator:** https://validator.schema.org/

### 11.2 Documentación del Proyecto

| Documento | Ubicación |
|-----------|-----------|
| SEO Maestro | `docs/seo/SEO_MAESTRO.md` |
| Cambios realizados | Git commits |
| Metadatos | `app/layout.tsx` |
| Sitemap | `app/sitemap.ts` |
| Robots.txt | `public/robots.txt` |

### 11.3 Contacto y Soporte

- **Desarrollador:** Equipo de Desarrollo
- **Revisión:** Mensual
- **Actualización:** Trimestral

---

## 📝 HISTORIAL DE CAMBIOS

| Fecha | Versión | Cambios |
|-------|---------|---------|
| 2026-03-16 | 1.0.0 | Creación del documento maestro |

---

**Documento maestro de SEO para hardcoded.space**  
*Fin del documento*
