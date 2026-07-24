// Convierte a .webp las imágenes de portada generadas con Nano Banana.
//
// Convención de nombres en public/images/hero-src/:
//   hero1.png, hero2.png, hero3.png    -> horizontales (desktop)
//   hero1v.png, hero2v.png, hero3v.png -> verticales (móvil)
//
// Genera en /public:
//   hero.webp, hero2.webp, hero3.webp       (desktop, máx 1920px ancho)
//   hero-v1.webp, hero-v2.webp, hero-v3.webp (móvil, máx 1920px alto)
//
// Uso:  node scripts/convert-hero.mjs

import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const SRC_DIR = path.resolve("public/images/hero-src");
const OUT_DIR = path.resolve("public");
const MAX = 1920;      // lado largo máximo
const QUALITY = 82;

async function run() {
  await mkdir(SRC_DIR, { recursive: true });

  const files = (await readdir(SRC_DIR))
    .filter((f) => /^hero\d+v?\.(png|jpe?g|webp)$/i.test(f))
    .sort();

  if (files.length === 0) {
    console.log(`No hay imágenes válidas en ${SRC_DIR}.`);
    return;
  }

  for (const file of files) {
    const m = file.match(/^hero(\d+)(v)?\./i);
    const n = m[1];
    const vertical = Boolean(m[2]);

    // Desktop: hero.webp, hero2.webp...   Móvil: hero-v1.webp, hero-v2.webp...
    const outName = vertical
      ? `hero-v${n}.webp`
      : n === "1"
        ? "hero.webp"
        : `hero${n}.webp`;

    await sharp(path.join(SRC_DIR, file))
      .resize(
        vertical
          ? { height: MAX, withoutEnlargement: true }
          : { width: MAX, withoutEnlargement: true }
      )
      .webp({ quality: QUALITY })
      .toFile(path.join(OUT_DIR, outName));

    console.log(`✓ ${file}  ->  public/${outName}`);
  }

  console.log(`\nListo. Nombres ya coinciden con HERO_DESKTOP / HERO_MOBILE en components/Hero.tsx.`);
}

run().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
