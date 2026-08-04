# 📚 DOCUMENTACIÓN DEL PROYECTO

**hardcoded.space**  
**Fecha:** 2026-03-18  
**Versión:** 1.0.0

---

## 🎯 Sobre el Proyecto

**hardcoded.space** es una agencia web especializada en desarrollo de tiendas online y páginas web profesionales para empresas en México.

### Tecnologías Principales

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Next.js | 16 | Framework React SSR/SSG |
| TypeScript | 5 | Tipado estático |
| Tailwind CSS | 4 | Estilos utility-first |
| Framer Motion | latest | Animaciones |
| Three.js/React Three Fiber | latest | Gráficos 3D |
| Vercel | - | Despliegue |

---

## 📂 ESTRUCTURA DEL PROYECTO

```
hardcoded.space/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Layout principal + metadata
│   ├── page.tsx                  # Página home
│   ├── sitemap.ts                # Sitemap dinámico
│   └── api/
│       └── contact/
│           └── route.ts          # API de contacto
├── components/                   # Componentes React
│   ├── hero.tsx                  # Sección hero
│   ├── city-gallery.tsx          # Galería con efecto tilt
│   ├── works.tsx                 # Cards de infraestructura
│   ├── solutions.tsx             # Cards de servicios
│   ├── decision-helper.tsx       # Asistente de decisión
│   ├── contact.tsx               # Formulario de contacto
│   └── ...
├── public/                       # Assets estáticos
│   ├── macbook.png
│   ├── iphone.png
│   └── og-image.png
├── docs/                         # Documentación
│   ├── README.md                 # Índice principal
│   ├── ARQUITECTURA/             # Estructura del proyecto
│   ├── DESARROLLO/               # Guías de desarrollo
│   ├── COMPONENTES/              # Catálogo de componentes
│   ├── SEO/                      # Optimización SEO
│   ├── ESTILOS/                  # Guías de estilo
│   ├── API/                      # Documentación API
│   └── DEPLOYMENT/               # Despliegue
└── ...
```

---

## 📑 ÍNDICE DE DOCUMENTACIÓN

### 1️⃣ ARQUITECTURA

| Documento | Descripción | Prioridad |
|-----------|-------------|-----------|
| [Estructura del Proyecto](./arquitectura/STRUCTURE.md) | Organización de carpetas y archivos | 🔴 Esencial |
| [Dependencias](./arquitectura/DEPENDENCIES.md) | Paquetes y librerías | 🔴 Esencial |
| [Configuración](./arquitectura/CONFIGURATION.md) | Configuración del proyecto | 🔴 Esencial |

### 2️⃣ DESARROLLO

| Documento | Descripción | Prioridad |
|-----------|-------------|-----------|
| [Guía de Setup](./desarrollo/SETUP.md) | Configuración inicial | 🔴 Esencial |
| [Comandos](./desarrollo/COMMANDS.md) | Comandos disponibles | 🔴 Esencial |
| [Debugging](./desarrollo/DEBUGGING.md) | Depuración de errores | 🟡 Importante |

### 3️⃣ COMPONENTES

| Documento | Descripción | Prioridad |
|-----------|-------------|-----------|
| [Catálogo de Componentes](./componentes/INDEX.md) | Lista de todos los componentes | 🔴 Esencial |
| [CityGallery - Efecto Tilt](./componentes/CITY-GALLERY.md) | Componente con efecto 3D | 🟡 Importante |
| [Hero](./componentes/HERO.md) | Sección hero con 3D | 🟡 Importante |
| [Solutions](./componentes/SOLUTIONS.md) | Cards de servicios | 🟢 Referencia |

### 4️⃣ SEO

| Documento | Descripción | Prioridad |
|-----------|-------------|-----------|
| [SEO Maestro](./seo/SEO_MAESTRO.md) | Estrategia SEO completa | 🔴 Esencial |
| [Checklist SEO](./seo/CHECKLIST_RAPIDO.md) | Tareas rápidas | 🟡 Importante |
| [Guía SEO](./seo/README.md) | Navegación SEO | 🟢 Referencia |

### 5️⃣ ESTILOS

| Documento | Descripción | Prioridad |
|-----------|-------------|-----------|
| [Tailwind CSS](./estilos/TAILWIND.md) | Guía de estilos | 🔴 Esencial |
| [Animaciones](./estilos/ANIMACIONES.md) | Framer Motion | 🟡 Importante |
| [Diseño de Componentes](./estilos/COMPONENTES.md) | Patrones de diseño | 🟢 Referencia |

### 6️⃣ API

| Documento | Descripción | Prioridad |
|-----------|-------------|-----------|
| [Endpoint Contacto](./api/CONTACT.md) | API de formulario | 🟡 Importante |
| [Rutas de API](./api/ROUTES.md) | Todas las rutas | 🟢 Referencia |

### 7️⃣ CONTENT

| Documento | Descripción | Prioridad |
|-----------|-------------|-----------|
| [Textos del Sitio](./content/TEXTOS.md) | Contenido visible | 🟡 Importante |
| [Metadata](./content/METADATA.md) | SEO y metadata | 🔴 Esencial |

### 8️⃣ DEPLOYMENT

| Documento | Descripción | Prioridad |
|-----------|-------------|-----------|
| [Guía de Despliegue](./deployment/GUIDE.md) | Proceso de deployment | 🔴 Esencial |

---

## 🚀 FLUJO DE TRABAJO RÁPIDO

### Desarrollo

```bash
# 1. Clonar y configurar
pnpm install

# 2. Iniciar desarrollo
pnpm dev

# 3. Probar cambios
# http://localhost:3000

# 4. Verificar build
pnpm build

# 5. Lintear
pnpm lint
```

### Despliegue

```bash
# Build de producción
pnpm build

# Iniciar servidor de producción
pnpm start
```

---

## 📋 CHECKLIST RÁPIDO

### Antes de Comitar

- [ ] `pnpm lint` sin errores
- [ ] `pnpm build` sin errores
- [ ] No breaking changes en componentes
- [ ] Documentación actualizada

### Despliegue a Producción

- [ ] Build exitoso en staging
- [ ] SEO metadata verificado
- [ ] Imágenes optimizadas
- [ ] Google Search Console configurado

---

## 🔗 ENLACES ÚTILES

### Herramientas de Desarrollo

| Herramienta | URL | Uso |
|-------------|-----|-----|
| Next.js Dev | http://localhost:3000 | Desarrollo local |
| Google Search Console | https://search.google.com/search-console | SEO monitoring |
| Google Analytics | https://analytics.google.com | Métricas |
| PageSpeed Insights | https://pagespeed.web.dev | Performance |

### Documentación Externa

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Framer Motion API](https://www.framer.com/motion/)
- [Three.js Documentation](https://threejs.org/docs/)

---

## 📝 HISTORIAL DE CAMBIOS

| Fecha | Versión | Cambios |
|-------|---------|---------|
| 2026-03-18 | 1.0.0 | Creación estructura documentación completa |
| 2026-03-16 | 0.9.0 | Documentación SEO inicial |

---

## 📧 CONTACTO

**Equipo de Desarrollo**  
hardcoded.space

---

**Documentación del proyecto - hardcoded.space**  
*Fin del documento*
