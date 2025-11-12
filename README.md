# Bachata al Aire Libre 💃🕺

A modern, high-performance landing page for outdoor bachata and salsa dance classes in Málaga, Spain. Built with Next.js 14, TypeScript, and Tailwind CSS.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://www.bachataalairelibre.com/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)

![Lighthouse Audit: Performance 99, Accessibility 100, Best Practices 96, SEO 100](./assets/lighthouse-test20251112.png)

## 🚦 Lighthouse Performance Scores

This project has been optimized to achieve maximum Lighthouse scores:

- **Performance:** 99
- **Accessibility:** 100
- **Best Practices:** 96
- **SEO:** 100

## ✨ Key Features

### 🎯 Core Functionality

- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Multi-language Support**: Spanish (default) and English with easy expansion
- **PWA Ready**: Progressive Web App capabilities with manifest and service worker support
- **Dynamic Content**: Server-side rendering (SSR) and static site generation (SSG)

### 🎨 Interactive Components

- **Music Player**: Bachata tracks player with custom controls
- **Photo Gallery**: Animated image slider with Framer Motion
- **Video Backgrounds**: Dynamic video showcases on pricing cards
- **Testimonials Carousel**: Real 5-star reviews from Meetup with navigation
- **Google Maps Integration**: Interactive location display
- **WhatsApp Widget**: Quick contact button with pre-filled messages
- **Language Switcher**: Smooth transitions between Spanish and English

### 🔍 SEO & Performance Optimization

- **Schema.org Markup**: LocalBusiness structured data for rich Google results
- **Meta Tags**: Complete OpenGraph, Twitter Card, and geo-location tags
- **Dynamic Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: SEO-friendly crawler configuration
- **Optimized Media**: WebP images and MP4 videos with lazy loading
- **Edge Runtime**: Fast response times with Next.js Edge functions

## 🚀 Tech Stack

| Category          | Technologies                                    |
| ----------------- | ----------------------------------------------- |
| **Framework**     | [Next.js 14](https://nextjs.org/) (App Router)  |
| **Language**      | [TypeScript](https://www.typescriptlang.org/)   |
| **Styling**       | [Tailwind CSS](https://tailwindcss.com/)        |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/)             |
| **Animations**    | [Framer Motion](https://www.framer.com/motion/) |
| **Icons**         | [Lucide React](https://lucide.dev/)             |
| **Deployment**    | [Vercel](https://vercel.com/)                   |

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm, npm, or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/CallejaJ/carlos-yepes-reyes.git
cd carlos-yepes-reyes
```

2. **Install dependencies**

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Run the development server**

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
carlos-yepes-reyes/
├── app/
│   ├── blog/                    # Blog section
│   │   ├── [slug]/             # Individual blog posts
│   │   └── page.tsx            # Blog listing page
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main landing page
│   ├── manifest.ts             # PWA manifest configuration
│   ├── robots.ts               # Robots.txt rules
│   └── sitemap.ts              # Dynamic sitemap generation
│
├── components/
│   ├── ui/                     # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── benefits.tsx            # Benefits section
│   ├── breadcrumbs.tsx         # Breadcrumb navigation
│   ├── faq.tsx                 # FAQ accordion
│   ├── footer.tsx              # Site footer
│   ├── gmaps-wrapper.tsx       # Google Maps integration
│   ├── header.tsx              # Navigation header
│   ├── hero.tsx                # Hero section with CTA
│   ├── how-it-works.tsx        # Process explanation
│   ├── language-provider.tsx   # i18n context provider
│   ├── language-selector.tsx   # Language switcher UI
│   ├── music-player.tsx        # Audio player component
│   ├── pricing.tsx             # Pricing cards with videos
│   ├── tableau.tsx             # Photo board display
│   ├── testimonials.tsx        # Reviews carousel
│   ├── theme-provider.tsx      # Dark/Light theme support
│   └── whatsapp-widget.tsx     # WhatsApp contact button
│
├── lib/
│   ├── blog.ts                 # Blog utilities and data
│   └── utils.ts                # Helper functions
│
├── public/
│   ├── favicon/                # Favicon assets
│   ├── images/                 # Image files
│   │   ├── slider/            # Gallery images
│   │   └── tableau/           # Photo board images
│   ├── logo/                   # Brand logos
│   ├── sounds/                 # Audio tracks
│   └── videos/                 # Video backgrounds
│
└── styles/
    └── globals.css             # Global styles and Tailwind
```

## 🎯 Feature Details

### Pricing Section

- **Video Backgrounds**: Each pricing tier features dynamic video content
- **WhatsApp Integration**: Direct contact with pre-filled messages per plan
- **Responsive Cards**: Glassmorphism effects with smooth animations
- **Call-to-Action**: Clear buttons for trial and subscription options

### Testimonials

- **Authentic Reviews**: Real 5-star feedback from Meetup platform
- **Carousel Navigation**: Smooth transitions between testimonials
- **Tag System**: Categorized feedback for easy browsing
- **External Link**: Direct connection to full reviews page

### Blog System

- **Dynamic Routes**: Auto-generated pages for each post
- **Tag Filtering**: Category-based article discovery
- **SEO Optimized**: Individual meta tags per article
- **Reading Time**: Estimated time for each post
- **Related Posts**: Smart suggestions based on tags

### Performance Optimizations

- **Image Optimization**: Next.js Image component with WebP format
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Resources loaded on-demand
- **Edge Caching**: Static assets served from CDN
- **Minimal JavaScript**: Only essential client-side code

## 🌍 SEO Implementation

### What we've implemented:

#### Meta Tags

- Title and description for all pages
- OpenGraph tags for social media sharing
- Twitter Card markup
- Geo-location tags (Málaga, Spain)
- Canonical URLs

#### Structured Data

```json
{
  "@type": "LocalBusiness",
  "name": "Bachata al Aire Libre",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Málaga",
    "addressCountry": "ES"
  }
}
```

#### Technical SEO

- XML Sitemap at `/sitemap.xml`
- Robots.txt configuration
- Semantic HTML5 structure
- ARIA labels for accessibility
- Mobile-friendly viewport

## 🌐 Internationalization

Currently supporting:

- 🇪🇸 Spanish (default)
- 🇬🇧 English

Easy to extend with additional languages through the `language-provider.tsx` system.

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. **Push to GitHub**

```bash
git push origin main
```

2. **Import to Vercel**

   - Connect your GitHub repository
   - Vercel auto-detects Next.js configuration
   - Deploy with zero configuration

3. **Custom Domain**
   - Add your domain in Vercel dashboard
   - Configure DNS records
   - SSL certificate auto-generated

## 📧 Contact

**Carlos Yépez** - Dance Instructor

- 📱 WhatsApp: [+34 698 50 16 76](https://wa.me/34698501676)
- 📸 Instagram: [@bachataalairelibre](https://instagram.com/bachataalairelibre)
- 👥 Meetup: [Baila Salsa y Bachata](https://www.meetup.com/es-ES/baila-salsa-y-bachata/)
- 📧 Email: bachataalairelibre@gmail.com
- 🌐 Website: [bachataalairelibre.com](https://www.bachataalairelibre.com/)

## 📄 License

This project is private and proprietary. All rights reserved.

## 🙏 Acknowledgments

Built with amazing open-source tools:

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful & consistent icons
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types

---

<div align="center">
  <strong>Made with ❤️ in Málaga, Spain</strong>
  <br />
  <sub>Teaching bachata and salsa through outdoor classes</sub>
</div>
