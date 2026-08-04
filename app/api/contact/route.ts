import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { product } from "@/lib/site-config"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export async function POST(request: NextRequest) {
  try {
    const contentLength = Number(request.headers.get("content-length") ?? 0)
    if (contentLength > 20_000) {
      return NextResponse.json({ error: "La solicitud es demasiado grande" }, { status: 413 })
    }

    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: "La solicitud no es válida" }, { status: 400 })
    }
    const nombre = cleanText(body.nombre, 100)
    const email = cleanText(body.email, 160).toLowerCase()
    const telefono = cleanText(body.telefono, 30)
    const negocio = cleanText(body.negocio, 120)
    const mensaje = cleanText(body.mensaje, 1500)
    const website = cleanText(body.website, 200)

    if (website) return NextResponse.json({ message: "Información recibida" })

    if (!nombre || !emailPattern.test(email) || !negocio || !mensaje) {
      return NextResponse.json({ error: "Revisa los campos requeridos" }, { status: 400 })
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailPassword = process.env.GMAIL_APP_PASSWORD
    const contactEmail = process.env.CONTACT_EMAIL

    if (!gmailUser || !gmailPassword || !contactEmail) {
      console.error("Faltan variables de entorno para el formulario de contacto")
      return NextResponse.json({ error: "El formulario no está configurado" }, { status: 503 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPassword },
    })

    const safe = {
      nombre: escapeHtml(nombre),
      email: escapeHtml(email),
      telefono: escapeHtml(telefono),
      negocio: escapeHtml(negocio),
      mensaje: escapeHtml(mensaje),
    }

    await transporter.sendMail({
      from: `Landing Express <${gmailUser}>`,
      to: contactEmail,
      replyTo: email,
      subject: `Nueva solicitud de Landing Express — ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #171717;">
          <h2 style="color: #2563eb;">Nueva solicitud de Landing Express</h2>
          <p><strong>Producto:</strong> ${product.name}</p>
          <p><strong>Precio:</strong> ${product.priceLabel}, ${product.taxLabel}</p>
          <div style="background: #f5f5f5; padding: 20px; margin: 24px 0;">
            <p><strong>Nombre:</strong> ${safe.nombre}</p>
            <p><strong>Correo:</strong> ${safe.email}</p>
            ${safe.telefono ? `<p><strong>Teléfono:</strong> ${safe.telefono}</p>` : ""}
            <p><strong>Negocio:</strong> ${safe.negocio}</p>
          </div>
          <h3>Oferta que quiere promocionar</h3>
          <p style="white-space: pre-wrap;">${safe.mensaje}</p>
        </div>
      `,
      text: [
        "Nueva solicitud de Landing Express",
        `Precio: ${product.priceLabel}, ${product.taxLabel}`,
        `Nombre: ${nombre}`,
        `Correo: ${email}`,
        telefono ? `Teléfono: ${telefono}` : "",
        `Negocio: ${negocio}`,
        "",
        mensaje,
      ]
        .filter(Boolean)
        .join("\n"),
    })

    return NextResponse.json({ message: "Información enviada correctamente" })
  } catch (error) {
    console.error("Error al enviar el correo:", error)
    return NextResponse.json({ error: "No fue posible enviar la información" }, { status: 500 })
  }
}
