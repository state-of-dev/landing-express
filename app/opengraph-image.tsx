import { ImageResponse } from "next/og"

export const alt = "Landing Express por Hardcoded Studio"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#050505",
        color: "#fafafa",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px 84px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#1d4ed8",
          borderRadius: 999,
          filter: "blur(1px)",
          height: 430,
          opacity: 0.2,
          position: "absolute",
          right: -100,
          top: 100,
          width: 430,
        }}
      />
      <div style={{ color: "#7897f7", display: "flex", fontSize: 22, letterSpacing: 7, textTransform: "uppercase" }}>
        Hardcoded Studio
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontFamily: "serif", fontSize: 88, letterSpacing: -3, lineHeight: 1.02 }}>
        <span>Una página</span>
        <span style={{ fontStyle: "italic" }}>para vender.</span>
      </div>
      <div style={{ alignItems: "center", display: "flex", fontFamily: "monospace", fontSize: 26, justifyContent: "space-between", letterSpacing: 2 }}>
        <span style={{ color: "#a3a3a3" }}>LANDING EXPRESS</span>
        <span>$4,500 MXN · IVA incluido</span>
      </div>
    </div>,
    size,
  )
}
