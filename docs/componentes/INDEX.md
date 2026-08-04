# 🧩 CATÁLOGO DE COMPONENTES

**hardcoded.space**  
**Fecha:** 2026-03-18

---

## 📋 Listado de Componentes

| Componente | Archivo | Tipo | Descripción |
|------------|---------|------|-------------|
| Hero | `hero.tsx` | Client | Sección hero con esfera 3D y animaciones |
| CityGallery | `city-gallery.tsx` | Client | Galería de imágenes con efecto tilt 3D |
| Works | `works.tsx` | Client | Cards de infraestructura |
| Solutions | `solutions.tsx` | Client | Cards de servicios y precios |
| DecisionHelper | `decision-helper.tsx` | Client | Asistente interactivo de decisión |
| Contact | `contact.tsx` | Client | Formulario de contacto |
| Navbar | `navbar.tsx` | Client | Navegación responsive |
| Footer | `footer.tsx` | Client | Pie de página |
| TechMarquee | `tech-marquee.tsx` | Client | Marquee de tecnologías |
| SentientSphere | `sentient-sphere.tsx` | Client | Esfera 3D con Three.js |

---

## 🏗️ Componentes por Sección

### 🎬 Hero Section

**Componentes:**
- `Hero` (`hero.tsx`)

**Características:**
- Esfera 3D con Three.js/Fiber
- Animaciones de scroll
- Contenido superpuesto
- Responsive

**Props:**
```typescript
// No requiere props - es componente standalone
```

---

### 📸 Galería

**Componentes:**
- `CityGallery` (`city-gallery.tsx`)

**Características:**
- 2 imágenes (MacBook + iPhone)
- Efecto tilt 3D con Framer Motion
- Mismo alto en ambas imágenes
- Responsive (flexbox)

**Props:**
```typescript
// No requiere props
```

**Efecto Tilt:**
- Ángulo: 15deg
- Interactivo con mouse
- Stiffness: 300, Damping: 30

---

### 📦 Infraestructura

**Componentes:**
- `Works` (`works.tsx`)

**Características:**
- 6 cards de infraestructura
- Título "INFRAESTRUCTURA PARA VENDER"
- Subtítulo con dos soluciones
- Cards de servicios con precios

**Props:**
```typescript
// No requiere props
```

**Cards:**
1. Bases de datos estructuradas
2. Notificaciones en tiempo real
3. Funciones en la nube
4. Almacenamiento optimizado
5. Dashboard administrativo
6. Seguridad y rendimiento

---

### 🛒 Servicios

**Componentes:**
- `Solutions` (`solutions.tsx`)

**Características:**
- 2 cards de servicios
- Títulos y precios visibles
- Listas de features
- Botones de CTA

**Props:**
```typescript
// No requiere props
```

**Servicios:**
1. Presencia Digital Profesional ($6,000 MXN)
2. Tienda Online Ilimitada ($14,000 MXN)

---

### 🤖 Asistente de Decisión

**Componentes:**
- `DecisionHelper` (`decision-helper.tsx`)

**Características:**
- 3 preguntas interactivas
- Lógica de recomendación
- Resultado con precio
- Botones de reset

**Props:**
```typescript
// No requiere props
```

**Preguntas:**
1. ¿Qué tipo de negocio tienes?
2. ¿Cómo recibes pagos?
3. ¿Qué funcionalidades requieres?

---

### 📝 Formulario de Contacto

**Componentes:**
- `Contact` (`contact.tsx`)

**Características:**
- Formulario con validación
- Estados de envío (idle, loading, success, error)
- Integración con API
- Animaciones de hover

**Props:**
```typescript
// No requiere props
```

**Campos:**
- Nombre
- Email
- Teléfono
- Tipo de servicio (select)
- Mensaje

---

### 🧭 Navegación

**Componentes:**
- `Navbar` (`navbar.tsx`)

**Características:**
- Navegación desktop y móvil
- Menú hamburguesa
- Scroll smooth
- Indicador de estado

**Props:**
```typescript
// No requiere props
```

---

### 📍 Pie de Página

**Componentes:**
- `Footer` (`footer.tsx`)

**Características:**
- Nombre de marca
- Ubicación
- Año actual
- Reloj en tiempo real

**Props:**
```typescript
// No requiere props
```

---

### 🎞️ Marquee

**Componentes:**
- `TechMarquee` (`tech-marquee.tsx`)

**Características:**
- Carrusel infinito
- 2 direcciones (izquierda/derecha)
- Duplicación para bucle
- Animación CSS

**Props:**
```typescript
// No requiere props
```

---

### 🌐 Esfera 3D

**Componentes:**
- `SentientSphere` (`sentient-sphere.tsx`)

**Características:**
- Three.js con React Three Fiber
- Shader personalizado
- Rotación con mouse
- Wireframe estilizado

**Props:**
```typescript
// No requiere props
```

**Configuración:**
- Geometría: Icosaedro (32 subdivisiones)
- DPR: [1, 1.5]
- Antialias: false

---

## 📐 Patrón de Componente

### Estructura Base

```typescript
"use client"

import { motion } from "framer-motion"

export function ComponentName() {
  return (
    <section className="relative py-32 px-8 md:px-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Contenido */}
      </motion.div>
    </section>
  )
}
```

### Componentes Client vs Server

| Tipo | Características | Ejemplos |
|------|-----------------|----------|
| **Client** | `"use client"`, interactividad, estado | Hero, Contact, Navbar |
| **Server** | Sin interactividad, datos estáticos | Layout (parcialmente) |

---

## 🎨 Estilos Comunes

### Clases de Contenedor

```typescript
// Sección completa
className="relative py-32 px-8 md:px-12 md:py-24"

// Contenedor centrado
className="max-w-7xl mx-auto"

// Flexbox
className="flex flex-col md:flex-row gap-8 items-center justify-center"
```

### Animaciones de Entrada

```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.1 }}
/>
```

---

## 📝 Componentes por Página

### Página Home (`app/page.tsx`)

1. Hero
2. CityGallery
3. Works
4. TechMarquee
5. Solutions
6. DecisionHelper
7. Contact
8. Footer

### Layout (`app/layout.tsx`)

1. Navbar
2. {children}
3. Footer (parcial)

---

## 🔗 Referencias

| Componente | Documentación |
|------------|---------------|
| Hero | [HERO.md](./HERO.md) |
| CityGallery | [CITY-GALLERY.md](./CITY-GALLERY.md) |
| Solutions | [SOLUTIONS.md](./SOLUTIONS.md) |

---

**Catálogo de Componentes - hardcoded.space**
