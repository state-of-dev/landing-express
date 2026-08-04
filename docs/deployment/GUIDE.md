# 🚀 GUÍA DE DESPLIEGUE

**hardcoded.space**  
**Fecha:** 2026-03-18

---

## 📋 Opciones de Despliegue

| Plataforma | Tipo | Costo | Complejidad |
|------------|------|-------|-------------|
| **Vercel** | Serverless | Gratis (hasta límite) | ⭐ Muy fácil |
| **Netlify** | Static/Serverless | Gratis | ⭐⭐ Fácil |
| **AWS** | EC2/S3 | Pago por uso | ⭐⭐⭐ Medio |
| **DigitalOcean** | Droplet | $5/mes | ⭐⭐⭐ Medio |

**Recomendación:** Vercel (optimo para Next.js)

---

## ⚡ Despliegue en Vercel (Recomendado)

### 1. Preparación

```bash
# Verificar build local
pnpm build

# Probar servidor de producción
pnpm start
```

### 2. Conectar Repository

1. Ir a [vercel.com](https://vercel.com)
2. Iniciar sesión con GitHub
3. Click "Add New..." → "Project"
4. Seleccionar el repository `hardcoded-space`
5. Configurar proyecto:

| Campo | Valor |
|-------|-------|
| Framework Preset | Next.js |
| Build Command | `pnpm build` |
| Output Directory | `.next` |
| Install Command | `pnpm install` |

### 3. Variables de Entorno

En Vercel Dashboard → Settings → Environment Variables:

| Variable | Valor | Ambiente |
|----------|-------|----------|
| `EMAIL_USER` | tu_email@gmail.com | Production |
| `EMAIL_PASS` | contraseña_app | Production |

### 4. Desplegar

Click "Deploy" y esperar a que termine el build.

**URL de producción:** `https://tu-proyecto.vercel.app`

---

## 🌐 Despliegue en Netlify

### 1. Preparar Build

```bash
pnpm build
```

### 2. Conectar Repository

1. Ir a [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Conectar con GitHub
4. Configurar:

| Campo | Valor |
|-------|-------|
| Build command | `pnpm build` |
| Publish directory | `.next` |
| Base directory | (vacío) |

### 3. Desplegar

Click "Deploy site".

---

## 🖥️ Despliegue Manual (VPS)

### 1. Configurar Servidor

```bash
# Conectar al servidor
ssh usuario@tu-dominio.com

# Instalar Node.js y pnpm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g pnpm

# Clonar repositorio
git clone https://github.com/usuario/hardcoded-space.git
cd hardcoded-space

# Instalar dependencias
pnpm install
```

### 2. Build y Start

```bash
# Build de producción
pnpm build

# Iniciar servidor (con PM2 para producción)
npm install -g pm2
pm2 start pnpm --name "hardcoded-space" -- start
```

### 3. Configurar Nginx

```nginx
# /etc/nginx/sites-available/hardcoded.space
server {
    listen 80;
    server_name hardcoded.space www.hardcoded.space;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔐 Configuración SSL (HTTPS)

### Vercel/Netlify

- Automático
- Certificado SSL incluido

### Manual (Let's Encrypt)

```bash
# Instalar certbot
sudo apt-get install certbot python3-certbot-nginx

# Generar certificado
sudo certbot --nginx -d hardcoded.space -d www.hardcoded.space

# Renovación automática
sudo certbot renew --dry-run
```

---

## 📊 Monitorización

### Vercel Analytics

```typescript
// app/layout.tsx
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics

```typescript
// components/analytics.tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console

1. Verificar dominio
2. Agregar sitemap: `https://hardcoded.space/sitemap.xml`

---

## 📋 Checklist Pre-Despliegue

### Código

- [ ] `pnpm lint` sin errores
- [ ] `pnpm build` exitoso
- [ ] Test manuales funcionando
- [ ] No console.log en producción

### SEO

- [ ] Metadata configurada
- [ ] Open Graph correcto
- [ ] Twitter Cards configurados
- [ ] Sitemap generado
- [ ] robots.txt correcto

### Performance

- [ ] Imágenes optimizadas
- [ ] Bundle size aceptable
- [ ] Lighthouse score > 80

### Seguridad

- [ ] Variables de entorno configuradas
- [ ] SSL activo
- [ ] Headers de seguridad
- [ ] API rate limiting (si aplica)

---

## 🔄 Pipeline CI/CD

### GitHub Actions (Opcional)

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: pnpm install
      - run: pnpm build
      - run: pnpm lint
```

---

## 🐛 Debugging en Producción

### Errores Comunes

| Error | Solución |
|-------|----------|
| Build falla | Revisar logs de build |
| 404 en rutas | Verificar SSG/SSR |
| Imágenes no cargan | Verificar rutas en public/ |
| API no responde | Verificar variables de entorno |

### Ver Logs

**Vercel:**
- Dashboard → Logs

**Netlify:**
- Dashboard → Functions → Logs

---

## 📈 Escalado

### Vercel (Plan Pro)

| Característica | Gratis | Pro |
|----------------|--------|-----|
| Bandwidth | 100 GB/mes | 1 TB/mes |
| Build minutes | 6000/mes | Ilimitado |
| Funciones | 10 segundos | 60 segundos |

### Optimización

1. **Static Generation (SSG)**: Para páginas que no cambian frecuentemente
2. **ISR (Incremental Static Regeneration)**: Para contenido que se actualiza periódicamente
3. **Edge Functions**: Para contenido dinámico rápido

---

## 🔗 Referencias

- [Vercel Next.js Deployment](https://vercel.com/docs/concepts/deployments/overview)
- [Netlify Next.js Deployment](https://docs.netlify.com/frameworks/next-js/)
- [Next.js Production Deployment](https://nextjs.org/docs/app/building-your-application/deploying)

---

**Documentación de Despliegue - hardcoded.space**
