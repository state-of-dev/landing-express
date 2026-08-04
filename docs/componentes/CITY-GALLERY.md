# 🖼️ CITY GALLERY - Efecto Tilt 3D

**hardcoded.space**  
**Fecha:** 2026-03-18

---

## 📋 Descripción

Componente de galería de imágenes con efecto de inclinación 3D (tilt) interactivo que responde al movimiento del mouse.

**Archivo:** `components/city-gallery.tsx`  
**Tipo:** Client Component  
**Efecto:** Tilt 3D con Framer Motion

---

## 🎨 Visualización

### Estructura

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   ┌───────────────────────┐   ┌──────────────────┐         │
│   │                       │   │                  │         │
│   │   IMAGEN MACBOOK      │   │  IMAGEN IPHONE   │         │
│   │   (65% del ancho)     │   │  (30% del ancho) │         │
│   │   Tilt: 15deg         │   │  Tilt: 15deg     │         │
│   └───────────────────────┘   └──────────────────┘         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Comportamiento

| Estado | Descripción |
|--------|-------------|
| **Inicial** | Imágenes aparecen con fade-in |
| **Hover** | Rotación 3D según posición del mouse |
| **Mouse Leave** | Retorno a posición original |

---

## ⚙️ Configuración

### Efecto Tilt

| Parámetro | Valor | Descripción |
|-----------|-------|-------------|
| **Ángulo máximo** | 15deg | Rotación máxima en X e Y |
| **Stiffness** | 300 | Rigidez del resorte |
| **Damping** | 30 | Amortiguación del resorte |
| **Perspectiva** | 1000px | Profundidad 3D |

### Tamaño de Imágenes

| Dispositivo | Altura | Ancho MacBook | Ancho iPhone |
|-------------|--------|---------------|--------------|
| Móvil | 350px | 100% | 100% |
| Desktop | 550px | 65% | 30% |

---

## 🔧 Código del Componente

### Estructura Principal

```typescript
export function CityGallery() {
  return (
    <section className="relative py-2 px-2 md:px-4 md:py-4">
      <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-center justify-center">
        {/* Imagen 1 - MacBook */}
        <TiltCard className="...">
          <motion.div>
            <Image fill className="object-cover" />
          </motion.div>
        </TiltCard>

        {/* Imagen 2 - iPhone */}
        <TiltCard className="...">
          <motion.div>
            <Image fill className="object-cover" />
          </motion.div>
        </TiltCard>
      </div>
    </section>
  )
}
```

### Componente TiltCard

```typescript
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  // handleMouseMove y handleMouseLeave...
}
```

---

## 📐 Propiedades

### Imágenes

| Propiedad | Valor | Descripción |
|-----------|-------|-------------|
| **MacBook src** | `/macbook.png` | Imagen de MacBook |
| **iPhone src** | `/iphone.png` | Imagen de iPhone |
| **fill** | true | Ocupa todo el contenedor |
| **object-fit** | `cover` | Mantiene proporciones |

### Estilos Tailwind

```typescript
// Contenedor principal
className="relative py-2 px-2 md:px-4 md:py-4"

// Flex container
className="flex flex-col md:flex-row gap-2 md:gap-3 items-center justify-center"

// TiltCard
className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 w-full md:w-[65%] cursor-pointer max-w-none"

// Imagen contenedor
className="relative w-full h-[350px] md:h-[550px]"
```

---

## 🔄 Animaciones

### Entrada de Imágenes

```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0 }}
>
```

### Tilt 3D (Mouse)

```typescript
const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])
```

---

## 🔧 Personalización

### Cambiar Ángulo de Tilt

```typescript
// Aumentar a 20deg (más pronunciado)
const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"])
const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"])
```

### Cambiar Tamaño de Imágenes

```typescript
// Móvil: 400px, Desktop: 600px
className="relative w-full h-[400px] md:h-[600px]"
```

### Cambiar Proporciones

```typescript
// MacBook: 70%, iPhone: 25%
className="w-full md:w-[70%]"  // MacBook
className="w-full md:w-[25%]"  // iPhone
```

---

## 📦 Props del Componente

### CityGallery

El componente no acepta props:

```typescript
export function CityGallery()
```

### TiltCard (interno)

```typescript
type TiltCardProps = {
  children: React.ReactNode
  className?: string
}

function TiltCard({ children, className }: TiltCardProps)
```

---

## ⚠️ Consideraciones

### Performance

| Consideración | Solución |
|---------------|----------|
| Múltiples animaciones | `viewport={{ once: true }}` |
| Mouse move frecuente | Spring para suavizar |
| Imágenes grandes | `object-cover` con fill |

### Accesibilidad

| Problema | Solución |
|----------|----------|
| Tilt no accesible | Considerar `prefers-reduced-motion` |
| Imágenes sin alt | `alt` descriptivo |

### Compatibilidad

| Navegador | Soporte |
|-----------|---------|
| Chrome | ✅ Completo |
| Firefox | ✅ Completo |
| Safari | ✅ Completo |
| Edge | ✅ Completo |

---

## 🔍 Ejemplo de Uso

### En Página Home

```typescript
import { CityGallery } from "@/components/city-gallery"

export default function Home() {
  return (
    <main>
      <Hero />
      <CityGallery />
      {/* ... */}
    </main>
  )
}
```

---

## 🐛 Debugging

### Problema: Tilt no funciona

1. Verificar `"use client"` en componente
2. Verificar import de framer-motion
3. Verificar que el contenedor tenga `perspective`

### Problema: Imágenes no se ven

1. Verificar rutas en `public/`
2. Verificar `fill` en Image
3. Verificar `object-cover`

---

## 📝 Referencias

- [Framer Motion - useMotionValue](https://www.framer.com/motion/use-motion-value/)
- [Framer Motion - useSpring](https://www.framer.com/motion/use-spring/)
- [Framer Motion - useTransform](https://www.framer.com/motion/use-transform/)
- [Next.js Image](https://nextjs.org/docs/app/api-reference/components/image)

---

**Documentación de CityGallery - hardcoded.space**
