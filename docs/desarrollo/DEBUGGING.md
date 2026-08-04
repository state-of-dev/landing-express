# 🔧 DEBUGGING Y SOLUCIÓN DE ERRORES

**hardcoded.space**  
**Fecha:** 2026-03-18

---

## 📋 Estrategia de Debugging

### Flujo de Trabajo

1. **Identificar el error** - Lee el mensaje de error
2. **Reproducir el error** - Ejecutar el comando que causa el error
3. **Investigar** - Buscar en logs y documentación
4. **Implementar solución** - Aplicar corrección
5. **Verificar** - Testear que funciona
6. **Documentar** - Anotar la solución

---

## 🚨 Errores Comunes

### 1. Errores de TypeScript

#### Error: "Could not find a declaration file for module 'three'"

```
ERROR: Could not find a declaration file for module 'three'.
```

**Solución:** No requiere acción - es un error de tipos no crítico.

**Causa:** Three.js no tiene tipos TypeScript oficiales.

**Impacto:** El código funciona correctamente.

---

#### Error: "Property 'WebkitTextStroke' does not exist"

```
ERROR: Property 'WebkitTextStroke' does not exist on type 'CSSStyleDeclaration'
```

**Solución:** Usar `webkitTextStroke` (minúscula)

```typescript
// ❌ Incorrecto
e.currentTarget.style.WebkitTextStroke = "none"

// ✅ Correcto
e.currentTarget.style.webkitTextStroke = "none"
```

---

### 2. Errores de Next.js

#### Error: "Port 3000 already in use"

```bash
Error: listen EADDRINUSE: address already in use :::3000
```

**Solución:**

```bash
# Encontrar proceso usando el puerto
lsof -ti:3000

# Terminar el proceso
kill -9 <PID>

# O usar puerto diferente
pnpm dev --port 3001
```

---

#### Error: "Module not found"

```bash
Module not found: Can't resolve '...'
```

**Solución:**

```bash
# Limpiar caché y reinstalar
rm -rf .next node_modules
pnpm install
pnpm dev
```

---

### 3. Errores de Build

#### Error: "TypeScript compilation failed"

```bash
Type error: Type 'X' is not assignable to type 'Y'
```

**Solución:**

1. Verificar tipos en el componente
2. Agregar tipos explícitos
3. Usar `as` si es necesario (sparingly)

```typescript
// Ejemplo de tipo explícito
const element = document.querySelector(".selector") as HTMLElement
```

---

#### Error: "Image optimization failed"

**Solución:**

```bash
# Verificar que la imagen existe en public/
ls public/

# Verificar rutas en componente
<Image src="/macbook.png" ... />
```

---

### 4. Errores de Tailwind

#### Error: "Class not found"

```bash
Warning: Class "custom-class" is not defined
```

**Solución:**

1. Reiniciar dev server
2. Verificar tailwind.config.ts
3. Verificar que la clase está en content

```bash
# Reiniciar
pnpm dev
```

---

### 5. Errores de Framer Motion

#### Error: "useMotionValue debe usarse dentro de un componente"

**Solución:**

```typescript
// ✅ Correcto: usar dentro del componente
function MyComponent() {
  const x = useMotionValue(0)
  // ...
}

// ❌ Incorrecto: fuera del componente
const x = useMotionValue(0) // Error!
function MyComponent() {
  // ...
}
```

---

### 6. Errores de API

#### Error: "405 Method Not Allowed"

**Causa:** Método HTTP incorrecto

**Solución:**

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  // Usar POST, no GET
}
```

---

## 🔍 Herramientas de Debugging

### 1. Console Logging

```typescript
// Debug básico
console.log("Variable:", variable)

// Debug con objeto
console.table(datos)

// Debug con stack trace
console.error("Error:", error)
```

### 2. React Developer Tools

**Instalación:** Extensión de Chrome/Firefox

**Uso:**
- Inspect components
- Ver props y state
- Profiler para performance

### 3. Next.js Dev Tools

```bash
# Ver información del build
pnpm build --verbose

# Ver información del dev server
pnpm dev --verbose
```

### 4. Network Tab (DevTools)

- Ver requests/responses
- Chequear status codes
- Analizar tiempo de carga

---

## 📊 Problemas de Performance

### 1. Renderizado Lento

**Síntomas:** Página carga lentamente

**Soluciones:**
- Usar `next/image` para optimizar imágenes
- Implementar lazy loading
- Usar `dynamic()` para componentes grandes

```typescript
import dynamic from "next/dynamic"

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>Cargando...</p>,
})
```

### 2. Animaciones Janky

**Síntomas:** Animaciones con tirones

**Soluciones:**
- Usar `transform` en lugar de `top/left`
- Aplicar `will-change`
- Reducir animaciones en mobile

---

## 🔄 Flujo de Debugging Paso a Paso

### Paso 1: Identificar el Error

```bash
# Revisar logs en terminal
pnpm dev

# Revisar errores en navegador
# F12 → Consola
```

### Paso 2: Reproducir el Error

```bash
# Ejecutar comando que causa el error
pnpm build
```

### Paso 3: Investigar

```bash
# Buscar en código
grep -r "nombre-de-funcion" .

# Verificar documentación
# https://nextjs.org/docs
```

### Paso 4: Aplicar Solución

1. Corregir el código
2. Guardar cambios
3. Verificar hot reload

### Paso 5: Verificar

```bash
pnpm build
pnpm lint
```

---

## 📝 Checklist de Debugging

- [ ] Error reproducible
- [ ] Logs revisados
- [ ] Documentación consultada
- [ ] Solución implementada
- [ ] Build exitoso
- [ ] Lint sin errores
- [ ] Solución documentada

---

## 🔗 Recursos

| Recurso | URL |
|---------|-----|
| Next.js Issues | https://github.com/vercel/next.js/issues |
| Stack Overflow | https://stackoverflow.com |
| React Docs | https://react.dev |
| TypeScript Docs | https://www.typescriptlang.org/docs/ |

---

**Documentación de Debugging - hardcoded.space**
