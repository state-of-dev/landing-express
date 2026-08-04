# 🚀 GUÍA DE SETUP

**hardcoded.space**  
**Fecha:** 2026-03-18

---

## 📋 Requisitos Previos

### Software Necesario

| Herramienta | Versión Mínima | Descarga |
|-------------|----------------|----------|
| Node.js | 18.x+ | [nodejs.org](https://nodejs.org/) |
| pnpm | 9.x+ | `npm install -g pnpm` |
| Git | 2.x+ | [git-scm.com](https://git-scm.com/) |
| Editor | VS Code (recomendado) | [code.visualstudio.com](https://code.visualstudio.com/) |

### Verificación de Instalación

```bash
# Verificar Node.js
node --version

# Verificar pnpm
pnpm --version

# Verificar Git
git --version
```

---

## 📥 Configuración Inicial

### 1. Clonar el Repositorio

```bash
# Clonar desde GitHub
git clone https://github.com/usuario/hardcoded-space.git

# Navegar al directorio
cd hardcoded-space
```

### 2. Instalar Dependencias

```bash
# Instalar todas las dependencias
pnpm install
```

### 3. Configurar Variables de Entorno

Crear archivo `.env.local` en la raíz:

```env
# URL de la API (opcional)
NEXT_PUBLIC_API_URL=http://localhost:3000

# Analytics (opcional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=

# Email para nodemailer (opcional)
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_password
```

**Nota:** Nunca commitear archivos `.env*` a Git.

---

## ⚙️ Configuración del Editor

### VS Code (Recomendado)

Instalar extensiones recomendadas:

| Extensión | Propósito |
|-----------|-----------|
| ESLint | Linting de código |
| Prettier | Formato de código |
| Tailwind CSS IntelliSense | Autocompletado de clases |
| TypeScript and JavaScript Language Features | Soporte TS/JS |
| GitLens | Gestión de Git |

### Configuración de VS Code (`.vscode/settings.json`)

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "tsx"],
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "javascriptreact": "javascriptreact",
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  }
}
```

---

## 🏃 Iniciar Desarrollo

### Modo Desarrollo

```bash
# Iniciar servidor de desarrollo
pnpm dev
```

El servidor estará disponible en:
- **Main:** http://localhost:3000
- **Local:** http://127.0.0.1:3000

### Características del Modo Desarrollo

| Característica | Descripción |
|----------------|-------------|
| Hot Reload | Actualización automática al guardar |
| Fast Refresh | React Fast Refresh habilitado |
| Errores en pantalla | Errores mostrados en navegador |
| Logs en terminal | Información de compilación |

---

## 🧪 Probar Cambios

### Verificar Build

```bash
# Build de producción
pnpm build
```

### Iniciar Producción Local

```bash
# Iniciar servidor de producción
pnpm start
```

### Lintear Código

```bash
# Verificar errores de linting
pnpm lint
```

---

## 📝 Flujo de Trabajo Recomendado

### 1. Crear Feature Branch

```bash
# Desde la rama main
git checkout main
git pull origin main

# Crear nueva rama
git checkout -b feature/nueva-funcionalidad
```

### 2. Desarrollar

```bash
# Iniciar desarrollo
pnpm dev

# Realizar cambios...
# Guardar archivos
```

### 3. Verificar

```bash
# Lintear
pnpm lint

# Build
pnpm build
```

### 4. Commit y Push

```bash
# Agregar cambios
git add .

# Commit con mensaje descriptivo
git commit -m "feat: agregar nueva funcionalidad"

# Push a rama remota
git push origin feature/nueva-funcionalidad
```

---

## 🐛 Debugging Común

### Problema: Errores de TypeScript

```bash
# Verificar errores
npx tsc --noEmit

# Solución: Revisar tipos en componentes
```

### Problema: Tailwind no funciona

```bash
# Verificar configuración
pnpm build

# Reiniciar servidor de desarrollo
# Ctrl + C y pnpm dev
```

### Problema: Imágenes no cargan

```bash
# Verificar rutas en public/
ls public/

# Verificar imports en componentes
```

### Problema: Animaciones no funcionan

```bash
# Verificar import de framer-motion
# Verificar "use client" en componente
```

---

## 🚀 Comandos Rápidos

| Acción | Comando |
|--------|---------|
| Iniciar desarrollo | `pnpm dev` |
| Build producción | `pnpm build` |
| Iniciar producción | `pnpm start` |
| Lintear | `pnpm lint` |
| Ver dependencias | `pnpm list` |
| Actualizar paquetes | `pnpm update` |

---

## 📂 Estructura de Trabajo

### Componentes Client vs Server

**Client Components** (interactivos):
```typescript
"use client"
// Componentes con eventos, estado, efectos
```

**Server Components** (por defecto):
```typescript
// Componentes sin interactividad, solo datos
```

### Patrón de Componente

```typescript
"use client"

import { useState } from "react"
import { motion } from "framer-motion"

type Props = {
  title: string
  children: React.ReactNode
}

export function MyComponent({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>{title}</h2>
      {children}
    </motion.div>
  )
}
```

---

## 🔗 Recursos

### Documentación

- [Next.js 16 Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion API](https://www.framer.com/motion/)

### Herramientas

- [Git Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet/)
- [VS Code Shortcuts](https://code.visualstudio.com/shortcuts)

---

**Documentación de Setup - hardcoded.space**
