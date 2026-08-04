# ✨ ANIMACIONES CON FRAMER MOTION

**hardcoded.space**  
**Fecha:** 2026-03-18

---

## 📋 Introducción

Este proyecto utiliza **Framer Motion** para animaciones declarativas y suaves.

**Instalación:**
```bash
pnpm add framer-motion
```

---

## 🎬 Animaciones Básicas

### Fade In

```typescript
import { motion } from "framer-motion"

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  Contenido
</motion.div>
```

### Slide Up

```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Contenido
</motion.div>
```

### Scale

```typescript
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
>
  Contenido
</motion.div>
```

---

## 📜 whileInView (Scroll Animations)

### Animación al Entrar en Vista

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  Contenido
</motion.div>
```

### Propiedades de viewport

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `once` | boolean | Ejecutar solo una vez |
| `margin` | string | Margen del trigger |
| `amount` | number | Porcentaje visible para trigger |

**Ejemplo con margin:**
```typescript
viewport={{ once: true, margin: "-100px" }}
```

---

## 🖱️ Animaciones Interactivas

### Hover

```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Botón
</motion.button>
```

### Hover con Variants

```typescript
const itemVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

<motion.div variants={itemVariants}>
  Contenido
</motion.div>
```

### Spring Animations

```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  Botón
</motion.button>
```

---

## 🎯 Efecto Tilt 3D

### Configuración del Tilt

```typescript
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const mouseX = e.clientX - rect.left - centerX
    const mouseY = e.clientY - rect.top - centerY
    
    x.set(mouseX / centerX)
    y.set(mouseY / centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
```

### Personalización del Tilt

| Parámetro | Valor | Efecto |
|-----------|-------|--------|
| **Ángulo** | 15deg | Rotación máxima |
| **Stiffness** | 300 | Rigidez del resorte |
| **Damping** | 30 | Amortiguación |
| **Perspective** | 1000px | Profundidad 3D |

---

## 🔄 Transiciones

### Duración

```typescript
transition={{ duration: 0.8 }}
```

### Delay

```typescript
transition={{ duration: 0.8, delay: 0.1 }}
```

### Easing

```typescript
transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
```

### Spring

```typescript
transition={{ type: "spring", stiffness: 300, damping: 20 }}
```

---

## 🎭 Variants (Variantes)

### Definición

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
  <motion.div variants={itemVariants}>Item 3</motion.div>
</motion.div>
```

---

## 🔧 AnimatePresence

### Animaciones de Salida

```typescript
import { motion, AnimatePresence } from "framer-motion"

<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Contenido
    </motion.div>
  )}
</AnimatePresence>
```

---

## 📊 Combinación con Tailwind

### Animación + Clases

```typescript
<motion.button
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="px-8 py-4 bg-blue-500 rounded-full"
>
  Botón
</motion.button>
```

---

## ⚠️ Consideraciones

### Performance

| Problema | Solución |
|----------|----------|
| Muchas animaciones | `viewport={{ once: true }}` |
| Scroll janky | Usa spring para suavizar |
| Mobile lento | Reducir complejidad |

### Accesibilidad

```typescript
// Respetar preferencias de usuario
const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

<motion.div
  initial={shouldReduceMotion ? false : { opacity: 0 }}
  animate={shouldReduceMotion ? false : { opacity: 1 }}
>
```

---

## 📝 Referencias

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Framer Motion API](https://www.framer.com/motion/api/)
- [Framer Motion Examples](https://www.framer.com/motion/examples/)

---

**Documentación de Animaciones - hardcoded.space**
