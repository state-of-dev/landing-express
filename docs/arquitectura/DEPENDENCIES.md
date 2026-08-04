# 📦 DEPENDENCIAS DEL PROYECTO

**hardcoded.space**  
**Fecha:** 2026-03-18

---

## 📊 Resumen de Dependencias

### Dependencias Principales (Production)

| Paquete | Versión | Uso | Categoría |
|---------|---------|-----|-----------|
| next | 16.0.10 | Framework React | Core |
| react | 19.2.0 | Biblioteca UI | Core |
| react-dom | 19.2.0 | Renderizado DOM | Core |
| typescript | 5 | Tipado estático | Core |
| tailwindcss | 4.1.9 | Estilos | Styling |

### Animaciones y 3D

| Paquete | Versión | Uso | Categoría |
|---------|---------|-----|-----------|
| framer-motion | latest | Animaciones declarativas | Animación |
| three | latest | Gráficos 3D | 3D |
| @react-three/fiber | latest | Three.js para React | 3D |
| lenis | latest | Scroll suave | UX |

### UI y Componentes

| Paquete | Versión | Uso | Categoría |
|---------|---------|-----|-----------|
| lucide-react | ^0.454.0 | Iconos | UI |
| @radix-ui/* | various | Componentes accesibles | UI |

### Formularios y Validación

| Paquete | Versión | Uso | Categoría |
|---------|---------|-----|-----------|
| react-hook-form | ^7.60.0 | Manejo de formularios | Forms |
| zod | 3.25.76 | Validación de esquemas | Forms |
| @hookform/resolvers | ^3.10.0 | Integración Zod + RHF | Forms |

### Otros

| Paquete | Versión | Uso | Categoría |
|---------|---------|-----|-----------|
| @vercel/analytics | latest | Métricas de visitas | Analytics |
| nodemailer | ^7.0.11 | Envío de emails | Backend |

---

## 📦 Instalación

```bash
# Instalar todas las dependencias
pnpm install

# Verificar dependencias instaladas
pnpm list
```

---

## ⚙️ Scripts de Package.json

| Script | Comando | Propósito |
|--------|---------|-----------|
| `dev` | `pnpm dev` | Iniciar servidor de desarrollo |
| `build` | `pnpm build` | Build de producción |
| `start` | `pnpm start` | Iniciar servidor de producción |
| `lint` | `pnpm lint` | Verificar código con ESLint |

---

## 🔧 Dependencias de Desarrollo

| Paquete | Versión | Uso |
|---------|---------|-----|
| @types/node | ^22 | Tipos de Node.js |
| @types/react | ^19 | Tipos de React |
| @types/react-dom | ^19 | Tipos de React DOM |
| @types/nodemailer | ^7.0.4 | Tipos de Nodemailer |
| @tailwindcss/postcss | ^4.1.9 | PostCSS para Tailwind v4 |
| postcss | ^8.5 | Procesador CSS |
| tw-animate-css | 1.3.3 | Animaciones Tailwind |

---

## 🚨 Advertencias

### Three.js y TypeScript

Los errores de tipo de `three.js` son conocidos y no críticos:
```
ERROR: Could not find a declaration file for module 'three'
```

**Solución:** No requiere acción - el código funciona correctamente.

### React 19

React 19 es una versión reciente. Algunas APIs pueden estar en beta:
- Server Components funcionando correctamente
- Hooks como `use()` disponibles

---

## 🔄 Actualización de Dependencias

### Actualizar todas las dependencias

```bash
# Verificar versiones disponibles
pnpm outdated

# Actualizar todas las dependencias
pnpm update --latest
```

### Actualizar una dependencia específica

```bash
pnpm add framer-motion@latest
```

---

## 📋 Verificación

### Comandos de verificación

```bash
# Verificar que todas las dependencias están instaladas
pnpm install

# Verificar build
pnpm build

# Verificar lint
pnpm lint
```

### Errores comunes

| Error | Solución |
|-------|----------|
| `Module not found` | Ejecutar `pnpm install` |
| `TypeScript error` | Verificar versión de typescript |
| `Tailwind error` | Verificar configuración de postcss |

---

**Documentación de Dependencias - hardcoded.space**
