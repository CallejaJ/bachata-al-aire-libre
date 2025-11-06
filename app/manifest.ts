import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bachata al Aire Libre - Carlos Yépez",
    short_name: "Bachata Barcelona",
    description:
      "Clases de salsa y bachata al aire libre en Barcelona con Carlos Yépez. Aprende a bailar en un ambiente divertido y relajado.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ef4444",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["education", "lifestyle", "entertainment"],
    lang: "es-ES",
    dir: "ltr",
  };
}
