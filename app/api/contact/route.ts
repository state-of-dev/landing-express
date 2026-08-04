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
      from: `Hardcoded Studio <${gmailUser}>`,
      to: contactEmail,
      replyTo: email,
      subject: `Nueva solicitud de Hardcoded Studio | ${nombre.toUpperCase()}`,
      html: `
        <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">Nueva solicitud de ${safe.nombre} para Hardcoded Studio.</div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#171717;">
          <tr>
            <td align="center" style="padding:32px 12px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:640px;background:#ffffff;border-collapse:collapse;">
                <tr>
                  <td style="background:#050505;padding:36px 40px 32px;border-top:4px solid #1d4ed8;">
                    <h1 style="margin:0;color:#ffffff;font-size:30px;font-weight:400;line-height:1.15;letter-spacing:-0.8px;">Un nuevo proyecto para<br><span style="color:#8ca7ff;font-style:italic;">Hardcoded Studio</span></h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:34px 40px 8px;">
                    <p style="margin:0 0 18px;color:#6b7280;font-size:10px;font-weight:700;line-height:1.4;letter-spacing:2px;text-transform:uppercase;">Contacto</p>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-collapse:collapse;">
                      <tr>
                        <td style="width:105px;padding:10px 0;border-bottom:1px solid #eeeeee;color:#9ca3af;font-size:12px;vertical-align:top;">Nombre</td>
                        <td style="padding:10px 0;border-bottom:1px solid #eeeeee;color:#171717;font-size:14px;font-weight:700;vertical-align:top;">${safe.nombre}</td>
                      </tr>
                      <tr>
                        <td style="width:105px;padding:10px 0;border-bottom:1px solid #eeeeee;color:#9ca3af;font-size:12px;vertical-align:top;">Correo</td>
                        <td style="padding:10px 0;border-bottom:1px solid #eeeeee;font-size:14px;vertical-align:top;"><a href="mailto:${safe.email}" style="color:#1d4ed8;text-decoration:none;">${safe.email}</a></td>
                      </tr>
                      ${safe.telefono ? `<tr><td style="width:105px;padding:10px 0;border-bottom:1px solid #eeeeee;color:#9ca3af;font-size:12px;vertical-align:top;">Teléfono</td><td style="padding:10px 0;border-bottom:1px solid #eeeeee;color:#171717;font-size:14px;vertical-align:top;">${safe.telefono}</td></tr>` : ""}
                      <tr>
                        <td style="width:105px;padding:10px 0;color:#9ca3af;font-size:12px;vertical-align:top;">Negocio</td>
                        <td style="padding:10px 0;color:#171717;font-size:14px;vertical-align:top;">${safe.negocio}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:28px 40px 0;">
                    <p style="margin:0 0 12px;color:#6b7280;font-size:10px;font-weight:700;line-height:1.4;letter-spacing:2px;text-transform:uppercase;">Acerca del negocio</p>
                    <div style="border-left:3px solid #1d4ed8;background:#f8fafc;padding:20px 22px;color:#374151;font-size:14px;line-height:1.75;white-space:pre-wrap;">${safe.mensaje}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px 40px 40px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="background:#1d4ed8;border-radius:999px;">
                          <a href="mailto:${safe.email}" style="display:inline-block;padding:14px 24px;color:#ffffff;font-size:11px;font-weight:700;line-height:1;letter-spacing:1.4px;text-decoration:none;text-transform:uppercase;">Responder a ${safe.nombre}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
      text: [
        "Nueva solicitud de Hardcoded Studio",
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
