![Lighthouse Audit: Rendimiento 99, Accesibilidad 100, Prácticas recomendadas 96, SEO 100](./assets/lighthouse-test20251112.png)

# Bachata al Aire Libre 💃🕺

## 🚦 Lighthouse Performance & SEO

Este proyecto ha sido optimizado para obtener puntuaciones máximas en Lighthouse:

- **Rendimiento:** 99
- **Accesibilidad:** 100
- **Prácticas recomendadas:** 96
- **SEO:** 100

### ¿Qué hemos hecho para lograrlo?

#### 🔥 Rendimiento

- Imágenes y vídeos optimizados con formatos modernos (WebP, MP4)
- Carga diferida (lazy loading) de recursos pesados
- Uso de Next.js App Router y server components para SSR y SSG
- Minimización de JavaScript y CSS
- Uso de Tailwind CSS para estilos eficientes
- PWA manifest y precarga de recursos críticos

#### 🌍 SEO & Geo-localización

- Meta tags completos: title, description, OpenGraph, Twitter Card
- Etiquetas geo-location (`geo.region`, `geo.placename`, `geo.position`)
- Sitemap y robots.txt generados dinámicamente
- Schema.org LocalBusiness markup para mejorar resultados en Google
- URLs amigables y estructura semántica
- Etiquetas `lang` y atributos ARIA para accesibilidad

#### 📍 Internacionalización

- Soporte para español e inglés
- Meta tags y contenido adaptados por idioma

#### 🏆 Resultado

¡Tu landing page está lista para posicionar y cargar rápido en cualquier dispositivo!

## 🌟 Features

# Bachata al Aire Libre 💃🕺

A modern, responsive landing page for bachata dance classes in Málaga, Spain. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Video Backgrounds**: Dynamic video backgrounds on pricing cards showcasing dance classes
- **Multi-language Support**: Spanish and English language options
- **Interactive Components**:
  - Music player with bachata tracks
  - Photo slider with Framer Motion animations
  - Testimonials carousel with real Meetup reviews
  - Google Maps integration
  - WhatsApp widget for quick contact
- **SEO Optimized**:
  - Dynamic sitemap generation
  - Schema.org LocalBusiness markup
  - OpenGraph and Twitter Card meta tags
  - Geo-location meta tags
  - PWA manifest
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/CallejaJ/carlos-yepes-reyes.git
cd carlos-yepes-reyes
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   ├── manifest.ts         # PWA manifest
│   ├── robots.ts           # Robots.txt configuration
│   └── sitemap.ts          # Dynamic sitemap
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── benefits.tsx        # Benefits section
│   ├── breadcrumbs.tsx     # Breadcrumb navigation
│   ├── footer.tsx          # Footer component
│   ├── gmaps.tsx           # Google Maps embed
│   ├── header.tsx          # Navigation header
│   ├── hero.tsx            # Hero section
│   ├── how-it-works.tsx    # How it works section
│   ├── language-provider.tsx   # i18n provider
│   ├── language-selector.tsx   # Language switcher
│   ├── music-player.tsx    # Audio player
│   ├── photo-slider.tsx    # Image carousel
│   ├── pricing.tsx         # Pricing cards with videos
│   ├── testimonials.tsx    # Reviews carousel
│   └── whatsapp-widget.tsx # WhatsApp contact button
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   ├── favicon/            # Favicon files
│   ├── images/             # Image assets
│   ├── sounds/             # Audio files
│   └── videos/             # Video assets
└── styles/
    └── globals.css         # Global styles
```

## 🎨 Features Breakdown

### Pricing Section

- Video backgrounds for each pricing tier
- WhatsApp integration with pre-filled messages
- Responsive card layout
- Glassmorphism effects

### Testimonials

- Real 5-star reviews from Meetup
- Carousel navigation
- Tag-based feedback display
- Link to full reviews page

### SEO & Performance

- Server-side rendering
- Edge runtime for dynamic routes
- Optimized images and videos
- Schema.org structured data
- Meta tags for social sharing

### Internationalization

- Spanish (default)
- English
- Easy to add more languages

## 🌐 Live Demo

Visit [bachataalairelibre.com](https://www.bachataalairelibre.com/)

## 📧 Contact

**Carlos Yépez**

- WhatsApp: +34 698 50 16 76
- Instagram: [@bachataalairelibre](https://instagram.com/bachataalairelibre)
- Meetup: [Baila Salsa y Bachata](https://www.meetup.com/es-ES/baila-salsa-y-bachata/)

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons by [Lucide](https://lucide.dev/)
