import { ImageResponse } from "next/og";

// Configuración de la imagen
export const alt =
  "Bachata al Aire Libre - Clases de Salsa y Bachata en Málaga";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Generación de la imagen
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(to bottom, #FFD700 50%, #0052A5 75%, #EF3340 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Círculo blanco de fondo */}
        <div
          style={{
            background: "white",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            gap: "20px",
          }}
        >
          {/* Maracas */}
          <div
            style={{
              fontSize: "200px",
              display: "flex",
              transform: "rotate(-15deg)",
            }}
          >
            🪇
          </div>

          {/* Texto */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                fontSize: "42px",
                fontWeight: "900",
                color: "#0052A5",
                textAlign: "center",
                lineHeight: 1,
              }}
            >
              BACHATA
            </div>
            <div
              style={{
                fontSize: "28px",
                fontWeight: "600",
                color: "#EF3340",
                textAlign: "center",
              }}
            >
              AL AIRE LIBRE
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
