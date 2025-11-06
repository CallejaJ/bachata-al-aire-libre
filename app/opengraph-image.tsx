import { ImageResponse } from "next/og";

// Configuración de la imagen
export const alt = "Bachata al Aire Libre - Clases de Salsa y Bachata en Barcelona";
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
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Overlay decorativo */}
        <div
          style={{
            position: "absolute",
            width: "200%",
            height: "200%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            opacity: 0.3,
          }}
        />

        {/* Contenido */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "60px",
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: "80px",
              fontWeight: "bold",
              color: "white",
              margin: "0 0 20px 0",
              textShadow: "0 4px 12px rgba(0,0,0,0.5)",
              lineHeight: 1.2,
            }}
          >
            BACHATA AL AIRE LIBRE
          </h1>

          <p
            style={{
              fontSize: "40px",
              color: "#fbbf24",
              margin: "0 0 40px 0",
              fontWeight: "600",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            Clases de Salsa y Bachata en Barcelona
          </p>

          <div
            style={{
              display: "flex",
              gap: "40px",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.95)",
                borderRadius: "20px",
                padding: "20px 40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              }}
            >
              <span
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                  color: "#ef4444",
                }}
              >
                €10
              </span>
              <span
                style={{
                  fontSize: "24px",
                  color: "#4b5563",
                }}
              >
                + Pareja GRATIS
              </span>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.95)",
                borderRadius: "20px",
                padding: "20px 40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              }}
            >
              <span
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                  color: "#ef4444",
                }}
              >
                €25
              </span>
              <span
                style={{
                  fontSize: "24px",
                  color: "#4b5563",
                }}
              >
                Clase Privada
              </span>
            </div>
          </div>

          <p
            style={{
              fontSize: "28px",
              color: "white",
              margin: "40px 0 0 0",
              fontWeight: "500",
            }}
          >
            🎵 Carlos Yépez • Barcelona
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            color: "white",
            fontSize: "24px",
            opacity: 0.9,
          }}
        >
          <span>📸 @bachataalairelibre</span>
          <span>|</span>
          <span>📱 +34 698 50 16 76</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
