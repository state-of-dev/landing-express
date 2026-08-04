# 🏗️ ESTRUCTURA DEL PROYECTO

**hardcoded.space**  
**Fecha:** 2026-03-18

---

## 📁 Estructura de Directorios

```
hardcoded.space/
├── 📄 archivos raíz
│   ├── package.json          # Dependencias y scripts
│   ├── tsconfig.json         # Configuración TypeScript
│   ├── next.config.mjs       # Configuración Next.js
│   ├── postcss.config.mjs    # Configuración PostCSS
│   ├── tailwind.config.ts    # Configuración Tailwind
│   ├── .gitignore            # Archivos ignorados
│   └── AGENTS.md             # Documentación para agents
│
├── 📱 app/                   # Next.js App Router
│   ├── layout.tsx            # Layout principal + metadata
│   ├── page.tsx              # Página home
│   ├── sitemap.ts            # Sitemap dinámico
│   └── api/
│       └── contact/
│           └── route.ts      # API de contacto
│
├── 🧩 components/            # Componentes React
│   ├── hero.tsx              # Sección hero con 3D
│   ├── city-gallery.tsx      # Galería con efecto tilt
│   ├── works.tsx             # Cards de infraestructura
│   ├── solutions.tsx         # Cards de servicios
│   ├── decision-helper.tsx   # Asistente de decisión
│   ├── contact.tsx           # Formulario de contacto
│   ├── navbar.tsx            # Navegación
│   ├── footer.tsx            # Pie de página
│   └── ...
│
├── 🎨 public/                # Assets estáticos
│   ├── macbook.png
│   ├── iphone.png
│   ├── og-image.png
│   ├── favicon.svg
│   └── robots.txt
│
├── 📚 docs/                  # Documentación
│   ├── README.md             # Índice principal
│   ├── arquitectura/         # Estructura del proyecto
│   ├── desarrollo/           # Guías de desarrollo
│   ├── componentes/          # Catálogo de componentes
│   ├── seo/                  # Optimización SEO
│   ├── estilos/              # Guías de estilo
│   ├── api/                  # Documentación API
│   └── deployment/           # Despliegue
│
└── ⚙️ configuración
    ├── .eslintrc.json        # ESLint (si existe)
    ├── .prettierrc           # Prettier (si existe)
    └── .cursor/              # Reglas Cursor (vacío)
```

---

## 📂 Descripción de Carpetas

### `app/` - Next.js App Router

**Arquitectura:** Next.js 16 con App Router

| Archivo | Propósito |
|---------|-----------|
| `layout.tsx` | Layout raíz con metadata SEO y estilos globales |
| `page.tsx` | Página home principal |
| `sitemap.ts` | Generador dinámico de sitemap XML |
| `api/contact/route.ts` | Endpoint API para formulario de contacto |

**Patrón de rutas:**
- `/` → Página home
- `/api/contact` → API REST

### `components/` - Componentes React

**Arquitectura:** Componentes funcionales con TypeScript

| Componente | Propósito | Tipo |
|------------|-----------|------|
| `hero.tsx` | Sección hero con esfera 3D | Client |
| `city-gallery.tsx` | Galería con efecto tilt 3D | Client |
| `works.tsx` | Cards de infraestructura | Client |
| `solutions.tsx` | Cards de servicios | Client |
| `decision-helper.tsx` | Asistente de decisión | Client |
| `contact.tsx` | Formulario de contacto | Client |
| `navbar.tsx` | Navegación responsive | Client |
| `footer.tsx` | Pie de página | Client |

**Patrón de componentes:**
- Usan `"use client"` para componentes interactivos
- Props tipadas con `type` o `interface`
- Funciones con `export function ComponentName()`

### `public/` - Assets Estáticos

| Archivo | Propósito |
|---------|-----------|
| `macbook.png` | Imagen para galería |
| `iphone.png` | Imagen para galería |
| `og-image.png` | Imagen para Open Graph |
| `robots.txt` | Reglas de crawling |

### `docs/` - Documentación

**Estructura jerárquica:**
```
docs/
├── README.md (índice principal)
├── arquitectura/     # Estructura y configuración
├── desarrollo/       # Guías de desarrollo
├── componentes/      # Catálogo de componentes
├── seo/              # Documentación SEO
├── estilos/          # Guías de estilo
├── api/              # Documentación API
└── deployment/       # Despliegue
```

---

## 🔄 Flujo de Datos

```
┌─────────────────────────────────────────────────────────────┐
│                       USUARIO                               │
│                    (Frontend)                               │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────┐
│                   NEXT.JS APP ROUTER                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │  layout  │  │  page    │  │ sitemap  │  │   API    │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────┐
│                  COMPONENTES REACT                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │  hero    │  │ gallery  │  │ works    │  │ contact  │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────┐
│                     CLIENTE                                 │
│              (Navegador/Dispositivo)                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 Dependencias Clave

### Frontend
- **Next.js 16** - Framework React SSR/SSG
- **React 19** - Biblioteca UI
- **TypeScript 5** - Tipado estático
- **Tailwind CSS 4** - Estilos utility-first

### Animaciones
- **Framer Motion** - Animaciones declarativas
- **Three.js** - Gráficos 3D
- **React Three Fiber** - Three.js para React

### UI/UX
- **Radix UI** - Componentes accesibles
- **Lucide React** - Iconos
- **Lenis** - Scroll suave

### Formularios
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas

### Otros
- **Vercel Analytics** - Métricas de visitas
- **Nodemailer** - Envío de emails

---

## 🔧 Configuraciones Importantes

### Next.js (next.config.mjs)
- Imágenes sin optimización para assets locales
- TypeScript sin validación estricta (ignoreBuildErrors)

### TypeScript (tsconfig.json)
- `strict: true` - Modo estricto activado
- `paths` con alias `@/*` para imports relativos

### Tailwind (tailwind.config.ts)
- Temas personalizados
- Pseudo-clases personalizadas

---

## ✅ Convenciones de Arquitectura

| Convención | Descripción |
|------------|-------------|
| **SSR/SSG** | Next.js renderizado en servidor con estática |
| **Client Components** | Solo para interactividad (`"use client"`) |
| **Componentes Pequeños** | Responsabilidad única |
| **Props Tipadas** | Siempre con `type` o `interface` |
| **Archivos Kebab-Case** | Nombres de archivos en kebab-case |
| **Directorios PascalCase** | Directorios de componentes |

---

## 📝 Referencias

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [App Router Architecture](https://nextjs.org/docs/app/building-your-application/routing)
- [React Server Components](https://react.dev/reference/rsc/server-components)

---

**Documentación de Arquitectura - hardcoded.space**
