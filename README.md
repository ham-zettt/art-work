# Ilham Zakaria — Portfolio

Landing page portfolio and project detail pages for a logo designer and brand identity designer. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript (strict)
- Tailwind CSS v4
- `next/font` (Geist Sans), `next/image`
- `framer-motion` for the animated hero headline, `lucide-react` for icons
- Section reveals use CSS + `IntersectionObserver` (no extra runtime).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # run the production build
npm run lint     # ESLint
```

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with every section |
| `/brand-identity/[slug]` | Full project detail page |
| `not-found` | Styled 404 |

All detail pages are statically generated with `generateStaticParams` and get their own metadata with `generateMetadata`.

## Project structure

```
app/
  layout.tsx                 Root layout: header, footer, metadata, JSON-LD
  page.tsx                   Landing page section order
  globals.css                Design tokens, typography, base styles
  not-found.tsx              404 page
  robots.ts                  robots.txt
  sitemap.ts                 sitemap.xml
  brand-identity/[slug]/     Project detail page
components/
  Header.tsx  Footer.tsx
  sections/                  Hero, Profile, Skills, LogoGrid, BrandIdentityGrid, Contact
  ui/                        SectionHeading, Reveal
data/                        All editable content
types/                       Shared types
public/images/               Placeholder images
```

## Editing content

All copy lives in `data/`, so you never need to touch the components.

- `data/site.ts` — name, role, hero headline (`headlineLines` renders one line per item), intro copy, email, socials, stats, profile photo path.
- `data/logos.ts` — logo grid items.
- `data/brands.ts` — brand identity projects and their detail page content.
- `data/skills.ts` — the Tools and Design Skills lists.

## Replacing images

Drop your files into `public/images/` and point the data files at them.

- Profile photo: `public/images/profile.jpg`, aspect ratio 4:6 (e.g. 800×1200). Referenced by `site.profile.image`.
- Logos: `public/images/logos/logo-01.jpg` …, square 1:1 (e.g. 1200×1200). Transparent PNG or white background works best.
- Brand projects: `public/images/brands/<slug>/cover.jpg`, 16:9 (e.g. 1920×1080), plus gallery files.
- Social share image: `public/images/og.jpg`, 1200×630.

Every image in the repo is currently a grey placeholder that prints its own ratio. Replace them with real work when ready. Optimize images with WebP/AVIF where possible; `next/image` serves modern formats automatically.

## Adding a brand identity project

1. Create a folder under `public/images/brands/<slug>/` and add a `cover.jpg` plus gallery images.
2. Append a new object to the `brands` array in `data/brands.ts`. Set `gallery` entries with an optional `ratio` of `"16:9"`, `"1:1"`, `"4:5"`, or `"full"` (full width, 2:1).
3. The detail page, sitemap entry, and previous/next navigation are generated automatically.

## SEO and accessibility

- Per-page metadata, Open Graph, and Twitter cards.
- `sitemap.xml` and `robots.txt` are generated from `data/` (`app/sitemap.ts`, `app/robots.ts`).
- JSON-LD `ProfessionalService` + `Person` is injected in the root layout.
- Single `h1` per page, semantic landmarks, visible focus rings, and alt text on every image.
- Animations respect `prefers-reduced-motion`.
- The design is monochrome only: black, white, and neutral greys, sharp corners, no shadows or gradients.

Update the placeholder domain before launch. `site.url` in `data/site.ts` feeds `metadataBase`, canonical URLs, the sitemap, robots, and JSON-LD.

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new). Vercel detects Next.js automatically.
3. Set `site.url` in `data/site.ts` to the production domain, then deploy.

## Assumptions

- `site.url` is a placeholder (`https://ilhamzakaria.com`); update it for production.
- Contact is email + WhatsApp + social links. The optional contact form is not implemented (marked phase 2 in the PRD).
- Font is Geist Sans (the PRD allows Geist Sans or Inter).
- Placeholder images are generated raster JPGs so `next/image`, blur handling, and Open Graph all work out of the box.
