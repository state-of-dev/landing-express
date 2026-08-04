# 🎨 GUÍA DE TAILWIND CSS

**hardcoded.space**  
**Fecha:** 2026-03-18

---

## 📋 Introducción

Este proyecto utiliza **Tailwind CSS v4** con PostCSS para estilos utility-first.

**Archivo de configuración:** `tailwind.config.ts`

---

## 🎯 Clases Comunes

### Layout

| Clase | Propósito |
|-------|-----------|
| `flex` | Contenedor flexbox |
| `flex-col` | Dirección columna |
| `flex-row` | Dirección fila |
| `grid` | Contenedor grid |
| `relative` | Posicionamiento relativo |
| `absolute` | Posicionamiento absoluto |
| `fixed` | Posicionamiento fijo |

### Spacing

| Clase | Valor |
|-------|-------|
| `p-2` | padding: 0.5rem |
| `p-4` | padding: 1rem |
| `p-8` | padding: 2rem |
| `py-4` | padding-top/bottom: 1rem |
| `px-8` | padding-left/right: 2rem |
| `gap-2` | gap: 0.5rem |
| `gap-4` | gap: 1rem |
| `gap-8` | gap: 2rem |

### Sizing

| Clase | Valor |
|-------|-------|
| `w-full` | width: 100% |
| `w-1/2` | width: 50% |
| `w-[65%]` | width: 65% (custom) |
| `h-full` | height: 100% |
| `h-screen` | height: 100vh |
| `max-w-md` | max-width: 28rem |
| `max-w-none` | max-width: none |

### Typography

| Clase | Propósito |
|-------|-----------|
| `text-xs` | 0.75rem |
| `text-sm` | 0.875rem |
| `text-lg` | 1.125rem |
| `text-2xl` | 1.5rem |
| `text-4xl` | 2.25rem |
| `font-mono` | Fuente monospace |
| `font-sans` | Fuente sans-serif |
| `font-light` | font-weight: 300 |
| `tracking-tight` | letter-spacing: -0.025em |
| `uppercase` | texto en mayúsculas |

### Colors

| Clase | Propósito |
|-------|-----------|
| `bg-black` | Fondo negro |
| `bg-white` | Fondo blanco |
| `bg-transparent` | Fondo transparente |
| `text-white` | Texto blanco |
| `text-muted-foreground` | Texto secundario |
| `border-white/10` | Bordes blancos al 10% |
| `text-[#2563eb]` | Color primario (azul) |

### Effects

| Clase | Propósito |
|-------|-----------|
| `backdrop-blur-sm` | Blur de fondo |
| `rounded-full` | Bordes redondeados (100%) |
| `rounded-2xl` | Bordes redondeados (1rem) |
| `border` | Borde de 1px |
| `opacity-90` | Opacidad 90% |

### Transitions

| Clase | Propósito |
|-------|-----------|
| `transition-colors` | Transición de colores |
| `transition-all` | Transición completa |
| `duration-300` | Duración 300ms |
| `duration-500` | Duración 500ms |

### Pseudo-clases

| Clase | Propósito |
|-------|-----------|
| `hover:bg-white` | Hover fondo blanco |
| `hover:text-black` | Hover texto negro |
| `group-hover:scale-150` | Hover de grupo |

---

## 📐 Patrones Comunes

### Contenedor Centrado

```typescript
className="max-w-7xl mx-auto"
```

### Flexbox Centrado

```typescript
className="flex flex-col md:flex-row items-center justify-center gap-8"
```

### Gradiente Overlay

```typescript
className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90"
```

### Animación de Entrada

```typescript
className="initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}"
```

---

## 📱 Responsive

### Breakpoints

| Breakpoint | Ancho | Clase |
|------------|-------|-------|
| Móvil | < 768px | (default) |
| Tablet | ≥ 768px | `md:` |
| Desktop | ≥ 1024px | `lg:` |
| Large Desktop | ≥ 1280px | `xl:` |

### Ejemplo Responsive

```typescript
className="w-full md:w-1/2 lg:w-1/3"
```

### Mobile-First

```typescript
// Móvil: 100%, Tablet: 50%, Desktop: 33%
className="w-full md:w-1/2 lg:w-1/3"
```

---

## 🎨 Sistema de Colores

### Colores Primarios

| Color | Clase | Valor |
|-------|-------|-------|
| Primario | `text-[#2563eb]` | Azul |
| Fondo | `bg-[#050505]` | Negro |
| Secundario | `text-muted-foreground` | Gris |

### Opacidad

```typescript
// Blanco al 10%
border-white/10

// Negro al 60%
from-black/60
```

---

## 📦 Estilos de Componentes

### Botones

```typescript
// Botón principal
className="px-8 py-4 border border-[#2563eb] bg-[#2563eb] rounded-full font-mono text-sm tracking-widest uppercase hover:bg-[#1d4ed8] transition-colors duration-500"

// Botón secundario
className="px-8 py-4 border border-white/20 rounded-full font-mono text-sm tracking-widest uppercase bg-transparent backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-500"
```

### Cards

```typescript
className="relative border border-white/10 p-8 md:p-12 hover:border-white/30 transition-colors duration-300 bg-black/20 backdrop-blur-sm"
```

### Secciones

```typescript
className="relative py-32 px-8 md:px-12 md:py-24"
```

---

## 🔧 Custom Classes

### Espaciado Custom

```typescript
className="gap-2 md:gap-3 lg:gap-4"
```

### Ancho Custom

```typescript
className="w-[65%] md:w-[65%]"
```

### Altura Custom

```typescript
className="h-[250px] md:h-[380px] lg:h-[500px]"
```

---

## 🚨 Errores Comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Clase no reconocida | Tailwind no configurado | Reiniciar dev server |
| Responsive no funciona | Breakpoint incorrecto | Verificar syntax `md:` |
| Colores custom no funcionan | No en `extend` | Agregar en tailwind.config |

---

## 📝 Referencias

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind Play](https://play.tailwindcss.com/)
- [Tailwind Cheatsheet](https://nerdcave.com/tailwind-cheat-sheet)

---

**Documentación de Tailwind CSS - hardcoded.space**
