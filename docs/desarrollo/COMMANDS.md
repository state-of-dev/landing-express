# 📋 COMANDOS DEL PROYECTO

**hardcoded.space**  
**Fecha:** 2026-03-18

---

## 🔧 Comandos Principales

### Desarrollo

| Comando | Propósito | Modo |
|---------|-----------|------|
| `pnpm dev` | Iniciar servidor de desarrollo | Desarrollo |
| `pnpm build` | Build de producción | Producción |
| `pnpm start` | Iniciar servidor de producción | Producción |
| `pnpm lint` | Verificar código con ESLint | Verificación |

### Ejecución

```bash
# Iniciar desarrollo (hot reload)
pnpm dev

# Build de producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Verificar linting
pnpm lint
```

---

## 📊 Scripts Detallados

### pnpm dev

```bash
pnpm dev
```

**Propósito:** Iniciar servidor de desarrollo con Next.js

**Características:**
- Hot reload automático
- Fast Refresh (React)
- Errores en pantalla
- Logs en terminal

**Puerto:** `localhost:3000` (por defecto)

**Salida esperada:**
```
✓ Ready in 2.5s
○ Compiling / ...
✓ Compiled / in 2s
- Local:    http://localhost:3000
```

---

### pnpm build

```bash
pnpm build
```

**Propósito:** Generar build de producción optimizado

**Características:**
- TypeScript compilation
- Optimización de imágenes
- Code splitting
- Static generation (SSG)

**Salida esperada:**
```
✓ Compiled successfully
- Finalizing page optimization
Route (app)  Size     First Load JS
┌ ○ /       12.3 kB   123 kB
└ ○ /_not-found  1 kB   98 kB
```

---

### pnpm start

```bash
pnpm start
```

**Propósito:** Iniciar servidor de producción

**Requisito:** `pnpm build` ejecutado previamente

**Puerto:** `localhost:3000`

**Nota:** No incluye hot reload

---

### pnpm lint

```bash
pnpm lint
```

**Propósito:** Verificar calidad de código con ESLint

**Propiedades:**
- Revisa todos los archivos `.tsx` y `.ts`
- Detecta errores de TypeScript
- Verifica convenciones de código

**Salida esperada (sin errores):**
```
✓ No ESLint warnings or errors
```

---

## 🛠️ Comandos Adicionales

### Verificar Versiones

```bash
# Verificar Node.js
node --version

# Verificar pnpm
pnpm --version

# Verificar dependencias instaladas
pnpm list
```

### Actualizar Dependencias

```bash
# Verificar dependencias desactualizadas
pnpm outdated

# Actualizar todas las dependencias
pnpm update --latest

# Actualizar un paquete específico
pnpm add framer-motion@latest
```

### Limpiar Build

```bash
# Eliminar carpeta .next
rm -rf .next

# Reinstalar y rebuild
pnpm install && pnpm build
```

### Verificar TypeScript

```bash
# Verificar errores de TypeScript (sin emitir archivos)
npx tsc --noEmit
```

---

## 🐛 Comandos de Debugging

### Ver Logs Detallados

```bash
# Dev con logs detallados
pnpm dev --verbose

# Build con logs detallados
pnpm build --verbose
```

### Ver Errores Específicos

```bash
# Verificar rutas de componentes
npx next info

# Verificar configuración
npx next telemetry status
```

### Limpiar Caché

```bash
# Limpiar caché de Next.js
rm -rf .next/cache

# Limpiar node_modules (solo si es necesario)
rm -rf node_modules
pnpm install
```

---

## 📁 Estructura de Scripts (package.json)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint ."
  }
}
```

---

## ⚡ Comandos Rápidos (Cheat Sheet)

| Acción | Comando |
|--------|---------|
| Iniciar dev | `pnpm dev` |
| Build | `pnpm build` |
| Producción | `pnpm start` |
| Lint | `pnpm lint` |
| Ver versiones | `node -v && pnpm -v` |
| Actualizar todo | `pnpm update --latest` |
| Ver dependencias | `pnpm list` |
| Ver outdated | `pnpm outdated` |

---

## 🚨 Solución de Errores Comunes

### Error: "Port 3000 already in use"

```bash
# Buscar proceso en puerto 3000
lsof -ti:3000

# Terminar proceso
kill -9 <PID>

# O usar puerto diferente
pnpm dev --port 3001
```

### Error: "Module not found"

```bash
# Reinstalar dependencias
rm -rf node_modules
pnpm install
```

### Error: TypeScript

```bash
# Verificar errores
npx tsc --noEmit

# Revisar componentes con errores
```

### Error: Tailwind CSS

```bash
# Reiniciar servidor de desarrollo
# Detener con Ctrl+C y ejecutar:
pnpm dev
```

---

## 📊 Monitoreo

### Ver Procesos

```bash
# Ver procesos Node.js
ps aux | grep node

# Ver puerto en uso
netstat -an | grep 3000
```

### Métricas de Build

```bash
# Ver tamaño de bundle
pnpm build
# Revisar output para tamaño de JS/CSS
```

---

## 🔗 Enlaces Útiles

| Recurso | URL |
|---------|-----|
| Next.js CLI | https://nextjs.org/docs/app/api-reference/cli |
| pnpm Commands | https://pnpm.io/cli/add |
| ESLint Rules | https://eslint.org/docs/latest/rules/ |
| TypeScript Docs | https://www.typescriptlang.org/docs/ |

---

**Documentación de Comandos - hardcoded.space**
