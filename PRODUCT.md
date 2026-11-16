# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: owners of small businesses, products, and startups who need a logo and a coherent brand identity, evaluating a designer from a phone or laptop before making contact. Secondary: agencies and recruiters assessing brand-design craft.

## Product Purpose

A portfolio site for HamZettt — logo and brand identity work by Muhammad Ilham Zakaria. It presents logo marks and brand identity case studies with enough craft and clarity to earn trust, then routes the visitor to direct contact. Success means a credible first impression and a real inquiry.

## Positioning

A logo-first designer who delivers the whole identity system: the mark, the guidelines, and the applications it lives in. The stated approach is to understand the business first and make every choice — type, color, spacing — carry a reason, so the identity is defensible rather than decorated.

## Operating Context

- Single landing page with anchored sections plus a full page per brand identity project at `/brand-identity/[slug]`.
- Project detail is a real route, never a modal, drawer, or lightbox.
- Content lives in `/data/*.ts`; imagery lives in `/public/images/`.
- Project details are statically generated; the site targets Vercel.
- Content language is English, first person, addressed to prospective clients.
- Deploy and preview happen in a normal browser at desktop and mobile sizes.

## Capabilities and Constraints

- Landing sections: hero, services, logo grid (display-only), brand identity grid (navigable cards), contact, footer. Profile and skills sections exist in code but are not currently rendered.
- Logo and brand identity are the lead offer. Website design is offered but secondary and must not lead the positioning.
- No CMS, admin, blog, e-commerce, authentication, or language switcher; dark mode is the only theme.
- Contact happens through email, WhatsApp, and social links — no contact form.
- Current public facts in code: location Pamekasan, Jawa Timur; availability "Open for projects"; email, WhatsApp, Instagram, and LinkedIn links in `data/site.ts`. Treat these as the working record; confirm before publishing any new claim.

## Brand Commitments

- Public name is **HamZettt**; Muhammad Ilham Zakaria is the person behind it.
- Voice: plain, first-person, confident, no hype and no invented authority.
- No testimonials, client logos, benchmark numbers, awards, or pricing may be invented.

## Evidence on Hand

- Real logo artwork in `public/images/logos/` (14 marks) and real brand imagery in `public/images/brands/` (`zenhabits`, `aroma`, `finlab`, `northwind`, `terra`).
- One brand identity case study currently wired into `data/brands.ts` (ZenHabits), with the others awaiting copy.
- Portrait imagery at `public/images/me.webp` and `public/images/me.png`; social card at `public/images/og.jpg`.
- The "20+ projects" stat is approximate and unverified — state it only if confirmed.
- No testimonials or press exist in the repo.

## Product Principles

1. The work is the argument; the interface stays out of its way.
2. Show process and reasoning, not just final marks.
3. Every page ends within one step of contact.
4. Publish only claims backed by real assets or confirmed numbers.
5. Keep the site fast, accessible, and usable on a mid-range phone.
