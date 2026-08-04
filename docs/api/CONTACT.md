# 📬 API DE CONTACTO

**hardcoded.space**  
**Fecha:** 2026-03-18

---

## 📋 Descripción

Endpoint API para enviar formularios de contacto. Utiliza Nodemailer para enviar emails.

**Archivo:** `app/api/contact/route.ts`  
**Método:** POST  
**Content-Type:** `application/json`

---

## 🔗 Endpoints

### POST /api/contact

**Propósito:** Enviar datos del formulario de contacto

**Request:**
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "telefono": "+52 123 456 7890",
  "servicio": "tienda-online",
  "mensaje": "Quiero una cotización para mi tienda online"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Mensaje enviado correctamente"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error al enviar el mensaje"
}
```

---

## 🔧 Implementación

### Código del Endpoint

```typescript
// app/api/contact/route.ts

import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validación básica
    if (!body.nombre || !body.email || !body.servicio) {
      return NextResponse.json(
        { success: false, message: "Faltan campos requeridos" },
        { status: 400 }
      )
    }

    // Aquí iría el envío de email con Nodemailer
    // ...

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente"
    })
  } catch (error) {
    console.error("Error en API contact:", error)
    return NextResponse.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 }
    )
  }
}
```

### Configuración de Nodemailer

```typescript
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

async function sendEmail(data: ContactFormData) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "contacto@hardcoded.space",
    subject: `Nuevo contacto: ${data.nombre}`,
    html: `
      <h1>Nuevo Mensaje de Contacto</h1>
      <p><strong>Nombre:</strong> ${data.nombre}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Teléfono:</strong> ${data.telefono || "No especificado"}</p>
      <p><strong>Servicio:</strong> ${data.servicio}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${data.mensaje}</p>
    `,
  }

  return transporter.sendMail(mailOptions)
}
```

---

## 📝 Campos del Formulario

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `nombre` | string | ✅ Sí | Nombre completo del usuario |
| `email` | string | ✅ Sí | Email de contacto |
| `telefono` | string | ❌ No | Teléfono opcional |
| `servicio` | string | ✅ Sí | Tipo de servicio solicitado |
| `mensaje` | string | ❌ No | Mensaje adicional |

### Valores de `servicio`

- `presencia-digital` - Sitio web profesional
- `tienda-online` - Tienda online completa
- `asesoria` - Asesoría técnica

---

## 🔐 Seguridad

### Variables de Entorno

Crear archivo `.env.local`:

```env
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_app
```

**Importante:** Nunca commitear archivos `.env*`

### Validación

```typescript
// Validación con Zod
import { z } from "zod"

const contactSchema = z.object({
  nombre: z.string().min(2, "Nombre mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefono: z.string().optional(),
  servicio: z.enum(["presencia-digital", "tienda-online", "asesoria"]),
  mensaje: z.string().optional(),
})
```

---

## ⚙️ Frontend - Envío del Formulario

### Hook de Formulario

```typescript
import { useState } from "react"

const [formData, setFormData] = useState({
  nombre: "",
  email: "",
  telefono: "",
  servicio: "",
  mensaje: "",
})
const [buttonState, setButtonState] = useState<"idle" | "loading" | "success" | "error">("idle")

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setButtonState("loading")

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (!response.ok) throw new Error("Error al enviar")

    setButtonState("success")
    setFormData({ /* reset */ })
  } catch (error) {
    console.error(error)
    setButtonState("error")
  }
}
```

### Componente de Formulario

```typescript
<motion.form onSubmit={handleSubmit}>
  <input
    name="nombre"
    value={formData.nombre}
    onChange={handleChange}
    required
  />
  {/* ... otros campos */}
  
  <motion.button
    type="submit"
    disabled={buttonState === "loading"}
  >
    {buttonState === "loading" && "Enviando..."}
    {buttonState === "success" && "Enviado ✓"}
    {buttonState === "error" && "Error al enviar"}
    {buttonState === "idle" && "Enviar"}
  </motion.button>
</motion.form>
```

---

## 🔍 Debugging

### Errores Comunes

| Error | Causa | Solución |
|-------|-------|----------|
| `405 Method Not Allowed` | Método incorrecto | Usar POST |
| `500 Internal Server Error` | Error en servidor | Revisar logs |
| `400 Bad Request` | Datos inválidos | Validar campos |

### Ver Logs

```bash
# Ver logs del servidor
pnpm dev
# Revisar terminal para errores
```

---

## 📊 Métricas

### Tasa de Envío

| Métrica | Descripción |
|---------|-------------|
| Envíos exitosos | Mensajes enviados correctamente |
| Envíos fallidos | Errores de conexión o validación |
| Tiempo de respuesta | Duración del envío |

---

## 🔗 Referencias

- [Next.js Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Nodemailer Documentation](https://nodemailer.com/about/)
- [Zod Validation](https://zod.dev/)

---

**Documentación de API Contacto - hardcoded.space**
