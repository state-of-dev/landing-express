# ⚙️ CONFIGURACIÓN DEL PROYECTO

**hardcoded.space**  
**Fecha:** 2026-03-18

---

## 📁 Archivos de Configuración

```
hardcoded.space/
├── next.config.mjs          # Configuración Next.js
├── tsconfig.json            # Configuración TypeScript
├── tailwind.config.ts       # Configuración Tailwind CSS
├── postcss.config.mjs       # Configuración PostCSS
└── package.json             # Dependencias y scripts
```

---

## 🔧 next.config.mjs

**Ubicación:** `next.config.mjs`

### Configuración Actual

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,  // Ignora errores de TypeScript en build
  },
  images: {
    unoptimized: false,       // ✅ Habilita optimización de imágenes
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
}

export default nextConfig
```

### Opciones Importantes

| Opción | Valor | Descripción |
|--------|-------|-------------|
| `typescript.ignoreBuildErrors` | `true` | No detiene build por errores de tipo |
| `images.unoptimized` | `false` | Habilita optimización de imágenes |
| `images.formats` | `['avif', 'webp']` | Formatos de imagen optimizados |
| `images.minimumCacheTTL` | `60` | TTL mínimo de caché (segundos) |

---

## 🔧 tsconfig.json

**Ubicación:** `tsconfig.json`

### Configuración Actual

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

### Opciones Clave

| Opción | Valor | Descripción |
|--------|-------|-------------|
| `strict` | `true` | Modo estricto de TypeScript |
| `jsx` | `react-jsx` | JSX con transform automático |
| `paths` | `@/*` | Alias para imports relativos |
| `moduleResolution` | `bundler` | Resolución para bundlers |

### Alias de Imports

```typescript
// En lugar de:
import { Hero } from "../../../components/hero"

// Usa:
import { Hero } from "@/components/hero"
```

---

## 🔧 tailwind.config.ts

**Ubicación:** `tailwind.config.ts`

### Configuración Actual

```typescript
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
    },
  },
  plugins: [],
}

export default config
```

### Variables CSS

| Variable | Propósito |
|----------|-----------|
| `--background` | Color de fondo principal |
| `--foreground` | Color de texto principal |
| `--primary` | Color primario de marca |
| `--border` | Color de bordes |
| `--ring` | Color de focus rings |

---

## 🔧 postcss.config.mjs

**Ubicación:** `postcss.config.mjs`

### Configuración Actual

```typescript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
```

### Dependencias Relacionadas

- `@tailwindcss/postcss`: Plugin PostCSS para Tailwind v4
- `tailwindcss`: Framework de estilos
- `autoprefixer`: (dependiente de Tailwind v4)

---

## 🔧 .gitignore

**Ubicación:** `.gitignore`

### Archivos Ignorados

```
# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local
.env

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
```

---

## ⚙️ Configuración de Herramientas

### ESLint (si está configurado)

```json
{
  "extends": ["next/core-web-vitals"]
}
```

### Prettier (recomendado)

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

---

## 🌍 Variables de Entorno

### Archivos de entorno

| Archivo | Propósito |
|---------|-----------|
| `.env` | Variables de entorno (no commitear) |
| `.env.local` | Variables locales (no commitear) |
| `.env.production` | Variables de producción |

### Variables comunes

```env
# API Keys
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id

# Email (para nodemailer)
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

---

## 🔍 Verificación de Configuración

### Comandos de verificación

```bash
# Verificar Next.js config
pnpm build

# Verificar TypeScript
npx tsc --noEmit

# Verificar Tailwind
pnpm lint
```

### Configuraciones recomendadas adicionales

1. **Prettier**: Para formato de código consistente
2. **ESLint**: Para calidad de código
3. **Husky**: Pre-commit hooks (opcional)
4. **Lint-staged**: Lint solo archivos modificados

---

## 📝 Referencias

- [Next.js Configuration](https://nextjs.org/docs/app/api-reference/next-config)
- [TypeScript Configuration](https://www.typescriptlang.org/tsconfig)
- [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration)
- [PostCSS Configuration](https://postcss.org/)

---

**Documentación de Configuración - hardcoded.space**
