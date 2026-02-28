# Bachata al Aire Libre

<img src="https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs" alt="Next.js" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer" alt="Framer Motion" />
<img src="https://img.shields.io/badge/shadcn%2Fui-latest-000000?style=for-the-badge" alt="shadcn/ui" />
<img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel" alt="Vercel" />

*Landing page for outdoor bachata and salsa classes in Málaga, with multilingual content, interactive media components, and a markdown blog in four languages.*

## Page Sections

The homepage is a single-page layout composed of independently managed React components, each corresponding to a discrete content section.

| Section | Component | Purpose |
|---|---|---|
| **Hero** | `Hero.tsx` | Full-screen entry with headline, tagline, and primary CTA |
| **How It Works** | `HowItWorks.tsx` | Three-step explanation of the class onboarding process |
| **Benefits** | `Benefits.tsx` | Four highlighted advantages of attending |
| **Pricing** | `Pricing.tsx` | Tier cards with embedded video backgrounds and WhatsApp CTAs |
| **Community** | `Comunidad.tsx` | WhatsApp group QR code and member count display |
| **Testimonials** | `Testimonials.tsx` | Carousel of reviews sourced from Meetup |
| **Photo Gallery** | `Tableau.tsx` | 20-image grid from `public/images/tableau/` |
| **FAQ** | `FAQ.tsx` | Accordion with 8 questions, fully translated |
| **Location** | `GMapsWrapper.tsx` | Embedded Google Maps for Calle Alcazabilla, Málaga |

## Blog System

The blog handles content in four languages via separate markdown file directories, parsed with **Gray Matter** for frontmatter and **Remark** for HTML conversion. Each post carries tags used for filtering and cross-linking.

All blog logic lives in `lib/blog.ts`:

| Function | Behavior |
|---|---|
| `getAllPosts(lang)` | Returns all posts for a given language, sorted by date |
| `getPostBySlug(slug, lang)` | Fetches a single post and returns its HTML body |
| `getPostsByTag(tag, lang)` | Filters posts by a specific tag |
| `getAllTags(lang)` | Extracts the unique tag set across all posts |
| `getRelatedPosts(slug, lang)` | Scores posts by shared tags to surface related articles |
| `calculateReadingTime(text)` | Estimates reading time at 200 words per minute |

Blog routes are handled under `app/blog/page.tsx` (listing) and `app/blog/[slug]/page.tsx` (individual posts), with language passed via `?lang=` query parameter.

## Interactive Components

The page includes several client-side components that go beyond static content display.

- **`MusicPlayer.tsx`** — custom audio player for bachata tracks from `public/sounds/`
- **`PhotoSlider.tsx`** — Embla Carousel-based image slider with animated transitions
- **`Testimonials.tsx`** — auto-advancing carousel with manual navigation controls
- **`whatsapp-widget.tsx`** — floating button with pre-filled message to the instructor's number
- **`LanguageSelector.tsx`** — language switcher that updates the global `LanguageProvider` context

## SEO and Performance

The project targets and maintains near-perfect Lighthouse scores through a combination of Next.js image optimization, structured data, and static generation.

| Metric | Score |
|---|---|
| **Performance** | 99 |
| **Accessibility** | 100 |
| **Best Practices** | 96 |
| **SEO** | 100 |

SEO features are implemented in `app/layout.tsx` (JSON-LD Schema.org `LocalBusiness`, OpenGraph, Twitter Cards, geo-location meta tags), `app/sitemap.ts` (dynamic XML sitemap), and `app/robots.ts`. Security headers (HSTS, CSP, `X-Frame-Options`) and one-year static asset cache TTLs are declared in `vercel.json`.

## System Architecture

| Component | Role |
|---|---|
| **App Router (`app/`)** | Page routing, metadata generation, and SSR/SSG boundaries |
| **`LanguageProvider.tsx`** | React context holding all UI translations for four languages |
| **`lib/blog.ts`** | Blog data layer: markdown parsing, tag filtering, related post scoring |
| **shadcn/ui + Radix UI** | Accessible component primitives (accordion, dialog, carousel, etc.) |
| **Vercel Edge Network** | CDN delivery, security headers, and asset caching |
| **Vercel Analytics** | Page view and performance telemetry, injected in root layout |

## Technology Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript 5
- **Styling**: Tailwind CSS 4, `tailwindcss-animate`, Class Variance Authority
- **UI Components**: shadcn/ui, Radix UI (20+ primitives), Embla Carousel 8
- **Animations**: Framer Motion 12
- **Icons**: Lucide React 0.454
- **Forms**: React Hook Form 7, Zod 3, `@hookform/resolvers`
- **Content / Blog**: Gray Matter 4, Remark 15, Remark HTML 16, Rehype Sanitize 6, Reading Time 1.5
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics, Metricool

## Key Features

1. **Four-language blog** — 40 markdown posts (10 each in es, en, de, fr) with tag filtering and reading time estimates
2. **Lighthouse 99/100/96/100** — achieved through WebP/AVIF image formats, edge caching, and minimal client-side JavaScript
3. **Pricing cards with video backgrounds** — each tier features an embedded `<video>` element served from `public/videos/`
4. **Schema.org LocalBusiness markup** — JSON-LD structured data in the root layout for Google rich results
5. **WhatsApp community integration** — QR code component with live member count and floating contact widget
6. **Client-side i18n via React context** — all UI strings managed in `LanguageProvider.tsx` without an external i18n library
7. **PWA-ready** — `manifest.ts` and service worker support configured in the App Router

## Testing Strategy

There is no automated test suite. Quality is validated through Lighthouse CI audits run manually against the production Vercel deployment after each release, with the audit screenshot archived in `assets/`. ESLint enforces static code correctness on every build via `npm run lint`. Interactive flows (language switching, music player, WhatsApp widget) are verified manually in the browser across mobile and desktop breakpoints.

## Localization

The project supports **Spanish** (default), **English**, **German**, and **French**. UI translations are managed in `components/LanguageProvider.tsx` as a typed `Translations` object keyed by `Language = "es" | "en" | "de" | "fr"`. Blog content is separated into language-specific directories under `content/blog/{es,en,de,fr}/`. Legal pages (`aviso-legal`, `privacidad`, `cookies`) are available in Spanish only, as noted in the footer translation keys.

## Project Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. No environment variables are required. All configuration (contact number, location coordinates, tracking hash) is hardcoded in source files.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000`

---

Built for the bachata and salsa community in Málaga.
