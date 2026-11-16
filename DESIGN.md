# Design System — HamZettt

A dark, editorial portfolio for logo and brand identity work. One accent, thin
display type, thin rules, crop-mark corners. The work carries the page; the
interface stays quiet around it.

Tokens live in [`app/globals.css`](app/globals.css). This file explains **why**
and **when** to use them. Change both together.

---

## 1. Principles

1. **Work first.** No decorative UI between the visitor and a logo mark.
2. **One accent.** Orange is a signal — status, hover, focus, CTA. Never wallpaper.
3. **Frame, don't decorate.** 1px hairline + corner brackets instead of shadows and gradients on cards.
4. **Type does the drama.** Huge, light, tightly tracked headings; tiny mono labels. Little in between.
5. **Publish only what exists.** No invented testimonials, counts, awards, or prices (see [`PRODUCT.md`](PRODUCT.md)).

---

## 2. Color

| Token | Value | Role | Contrast on `--bg` |
|---|---|---|---|
| `--bg` | `#000000` | Page background | — |
| `--fg` | `#F9F9F9` | Primary text, solid buttons | 20.5:1 |
| `--muted` | `#A7A7A7` | Secondary text, labels, captions | 8.9:1 |
| `--surface` | `#333333` | Card tint, image wells (usually at low opacity) | — |
| `--line` | `rgba(249,249,249,.13)` | Hairline borders, dividers | — |
| `--line-strong` | `rgba(249,249,249,.26)` | Card outlines, frame edges | — |
| `--accent` | `#E85002` | Status dot, hover, focus, emphasis, CTA | 5.6:1 |
| `--invert-bg` / `--invert-fg` | `#F9F9F9` / `#000000` | Inverted blocks (case-study CTA) | 19.5:1 |

**Gradient (brand identity).** Ordered light → hot → deep → black:

```css
linear-gradient(38deg, #D9C3AB 0%, #F16001 36%, #C10801 72%, #000000 100%)
```

Use it only as **abstract artwork**: hero mesh, contact glow, duotone photo,
thumbnail accents. Never as body text color, never as a small-text background.

**Rules**

- `#646464` (3.5:1) is for decorative marks, borders, icons only — **never** small text. Use `--muted` instead.
- Black text on `#E85002` is 5.6:1 → safe for normal text. White on `#F16001` is 3.3:1 → large text only.
- Text over the glow/gradient sections must sit on a near-black area or a black/55 scrim.
- Don't introduce blue/purple/teal. The only "color" in the UI is orange; color belongs to the artwork.

---

## 3. Typography

**Families** (self-hosted via `@fontsource-variable`, `font-display: swap`):

- **Hanken Grotesk Variable** — headings and body. Weight 100–900; UI uses 300–500.
- **JetBrains Mono Variable** — labels, indices, metadata, buttons. Always UPPERCASE.

| Role | Class / recipe | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|---|
| Display | `.h1` | `clamp(3.25rem, 9vw, 7.5rem)` | 300 | 0.90 | -0.045em |
| Hero H1 | inline override | `clamp(2.9rem, 7.2vw, 6.4rem)` | 300 | 0.88 | -0.05em |
| Section | `.h2` | `clamp(2.5rem, 6vw, 5.25rem)` | 300 | 0.95 | -0.04em |
| Card title | `.h3` | `clamp(1.25rem, 1.6vw, 1.625rem)` | 500 | 1.15 | -0.025em |
| Lead | `.lead` | `clamp(1rem, 1.1vw, 1.125rem)` | 400 | 1.60 | -0.011em |
| Body | `body` | `1rem` | 400 | 1.50 | -0.011em |
| Caption | `.caption` | `0.8125rem` | 400 | 1.45 | -0.005em |
| Label | `.eyebrow` | `0.6875rem` mono | 400 | 1.2 | 0.18em |
| Micro | inline mono | `0.625–0.6875rem` | 400 | 1.2 | 0.12–0.18em |

**Rules**

- Display sizes always use `clamp()`; no fixed pixel headings.
- Weight 300 for display, 400 body, 500 for card titles and wordmark. No 600+ in UI.
- One display size per view. Don't stack `.h1` + `.h2` at equal visual weight.
- Mono is a label voice, not a body voice. Max two short lines.
- Numbers in stats/marquee counts: `tabular-nums` when they animate.

---

## 4. Layout & spacing

| Item | Value |
|---|---|
| Container | max `1440px`; padding `20px` → `40px` (md) → `56px` (lg) |
| Section rhythm | `72px` mobile, `112px` desktop (`.section`) |
| Card gaps | `12px` mobile, `16px` desktop (`gap-3` / `gap-4`) |
| Card padding | `20px` → `24px` → `32px` |
| Radii | buttons `6px`, tiles `8px`, cards `12px`, frames `16px`, pills `9999px` |
| Borders | `1px solid var(--line)`; strong variant for interactive frames |
| Scroll offset | `96px` (`scroll-margin-top`) to clear the fixed header |

**Breakpoints and behavior**

| Width | Behavior |
|---|---|
| `< 640` | Single column. Hero portrait band `34svh`, mesh hidden, actions inside card as a 2-col row, testimonial carousel below the actions, no stat card, logo grid 1-col. |
| `640–1023` | Logo grid 2-col, services 3-col. Hero still stacked with testimonials below the actions; portrait `46svh`. |
| `≥ 1024` | Hero splits `0.72fr / 1fr`; glass card overlays right `64%`; mesh, scroll cue, testimonial carousel, CTA row + one stat card and parallax enabled. Services 3-col; logo grid 3-col. |
| `≥ 1440` | Container caps; gutters grow only. |

No horizontal scrolling at any width. Wide artwork (marquee) must be clipped by
`overflow-hidden`, never by the page.

---

## 5. Surfaces & effects

| Class | Use | Notes |
|---|---|---|
| `.panel` | Services cards, stat cards | `#333` @ 22% fill, hairline border, hover to 34% |
| `.glass` | Hero identity card only | Gradient tint + `backdrop-filter: blur(18px)`; loud but singular. Below `lg` a `.hero-card-glow` wash sits behind it so the frost stays visible over black |
| `.cta-glow` | Contact block | Two radial orange/red glows over `#050505` |
| `.hero-mesh` | Hero right panel | Radial mesh + one blurred conic ribbon (`filter: blur(40px)`) |
| `.brand-gradient` | Reserved | Full gradient fill; artwork only |
| `.logo-mono` | Logo images | White silhouette `brightness(0) invert(1)` at 62%; hover/focus removes filter |
| `.btn-frame` | All outline CTAs | Mono uppercase, 44px min height, accent border + arrow nudge on hover |
| `.btn-solid` | Reserved | Accent fill, black text |

`CornerBrackets` (`components/ui/CornerBrackets.tsx`) draws 14px crop marks at
`inset-2`/`inset-3`. Use on frames, cards, and media blocks — not on every
nested element, and never on top of text.

**Performance budget**

- Max **2** `backdrop-filter` surfaces per viewport (header pill, hero card).
- Max **1** large blurred layer per view (`hero-mesh::before`). Static, never animated.
- Animate only `transform`, `opacity`, `clip-path`. No animated `width`, `top`, `filter`, or `box-shadow`.
- No `will-change` at rest.

---

## 6. Components

**Header** — fixed floating pill, `bg-black/55` + blur. Left: dots icon + `MENU`.
Center: wordmark, divider, `Logo & Brand Identity`. Right: three brand icons at
44px, plus a solid `Hire me` pill that links to `#contact`. Mobile hides social
icons and keeps the solid contact action.

**Menu overlay** — full-screen `<dialog aria-modal>`, black + soft orange radial.
Numbered nav links in display type, email, and social buttons. Clip-path
entrance, focus trapped, `Escape` closes and returns focus, body scroll locked.

**Hero testimonials** — `TestimonialCarousel`: three compact rows in a clipped
vertical list. Placeholder avatar left, name and role beside it, five accent
stars top-right, two-line quote below. Middle slot scaled 1.035 and framed in
accent. Every 2s the list travels down one 76px row with the standard easing,
the bottom quote exits, and a new one enters above. Stays static with reduced
motion. Copy lives in `data/testimonials.ts`; swap the avatar when real client
photos exist.

**Section heading** — `SectionHeading` renders `NN / EYEBROW`, optional
`(count)`, an `.h2`, and a short muted lead. Numbering: `01` hero/portfolio,
`02` services, `03` logo, `04` brand identity, `05` contact.

**Logo tile** — square black well, mono index, white silhouette mark, hover
reveals real colors at 1.04 scale. Footer: title + `category · year` + one-line
description. Display-only; never imply a link.

**Service card** — three equal cards. Accent icon in a hairline square at the
top-left, small mono index at the top-right; title and description sit at the
bottom of the card. Hover fades in a static orange radial wash, warms the frame
and icon tile, and lifts the card 3px. A full-width glow strip closes the
section.

**Case-study card** — split media/copy card linking to a real route. Mono
`year — client`, display title, tagline, service pills, circular arrow that
fills accent on hover.

**Stats** — `CountUp` animates only verified numbers (currently the logo-mark
count). The unverified "20+ projects" claim is intentionally not rendered.

**Contact** — glow panel with `05 / Contact`, availability, email with copy
button (`CopyEmail` with copied/failed states), location, and 56px social rows.

**Footer** — hairline bracket frame: wordmark + role, back-to-top, © line, social
links with icons.

---

## 7. Motion

Standard curve: `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease`). Durations `0.4–0.9s`.
Motion is used for hierarchy, not decoration.

| Moment | Recipe |
|---|---|
| Frame | fade + scale `0.995 → 1`, 0.6s |
| Portrait | `clip-path` inset bottom-up, 0.9s @ 0.1s |
| Mesh panel | fade, 0.8s @ 0.2s |
| Glass card | fade + `y: 30 → 0`, 0.75s @ 0.34s |
| Heading lines | mask `y: 110% → 0`, 0.8s @ 0.45s / 0.52s |
| Copy / stats | fade + `y: 12–16 → 0`, 0.55–0.6s @ 0.6s |
| Section reveal | `Reveal`: `y: 26 → 0`, 0.7s, `once`, `margin: -10%` |
| Hover | CSS only: border → accent, arrow +3px, no layout shift |
| Service glow | Static radial wash fades in via `opacity`, 0.65s; card lifts 3px |
| Testimonials | List steps down 76px every 2s, 0.8s `--ease`; enter/exit fade |
| Marquee | CSS `46s linear infinite`, pauses offscreen and via Pause/Play |
| Parallax | portrait `0 → 9%`, only `(pointer: fine)` and `≥1024px` |

Reduced motion: `MotionConfig reducedMotion="user"`, `useReducedMotion` guards
count-up, marquee, and entrances; CSS disables marquee/status pulse and smooth
scrolling.

---

## 8. Imagery

**Portrait duotone (CSS only, no edited pixels)**

1. `grayscale` + `brightness(.82) contrast(1.14)`, `object-position: 50% 16%`.
2. Multiply gradient `#FFB377 → #FF7A1A → #E85002 → #8A0300 → #000`.
3. Small screen-blend highlight at the face, radial vignette, bottom black fade.

**Logos** — transparent PNG. Default white silhouette so dark marks stay visible
on black; hover reveals original color. Never place a raw dark logo on the black
well without the mono filter.

**Rules**

- Hero: `me.webp` 1024×1536 (~56KB), `loading="eager"`, `fetchPriority="high"`, explicit width/height.
- Below the fold: `loading="lazy"`, `sizes` set, `fill` only inside a fixed-ratio box.
- No raster icons, no emoji as icons, no client-side image filters or canvas.
- Brand covers keep their own colors — don't tint them.

---

## 9. Accessibility

- Text contrast: body ≥ 4.5:1 (`--muted` is 8.9:1 on black). Large text may use accent.
- Focus: 2px `--accent` outline, 3px offset. Inside `#contact`, switch to `--fg` with a black separator ring.
- Targets: 44px minimum; contact rows 56px.
- Semantics: `header`/`nav`/`main`/`footer`, one `h1`, numbered section `h2`s, card `h3`s.
- Images: descriptive `alt`; decorative art `alt=""` + `aria-hidden`.
- Icon-only controls carry `aria-label`; menu trigger exposes `aria-expanded`/`aria-controls`.
- Marquees pause. Reduced motion respected. Skip link is the first tab stop.

---

## 10. Do / Don't

**Do**

- Let black dominate; add orange only where attention is required.
- Use one big idea per section: one headline, one support paragraph.
- Keep card chrome to a hairline + crop marks.
- Write plainly, first person, no hype (see `PRODUCT.md`).

**Don't**

- Don't put body copy on the gradient or the glow.
- Don't add a second accent, colored shadows, glows on text, or glass everywhere.
- Don't animate blur, box-shadow, width, or height.
- Don't invent testimonials, client logos, benchmark numbers, awards, or prices.
- Don't add a light theme; this is a single dark identity.

---

## 11. Sources of truth

| What | Where |
|---|---|
| Tokens, utilities, effects | `app/globals.css` |
| Content and public facts | `data/site.ts`, `data/services.ts`, `data/logos.ts`, `data/brands.ts` |
| Product intent and constraints | `PRODUCT.md` |
| Motion primitives | `components/MotionProvider.tsx`, `components/ui/Reveal.tsx`, `components/ui/CountUp.tsx` |
| Shared UI | `components/ui/` (`CornerBrackets`, `SectionHeading`, `SocialIcon`, `CopyEmail`) |
| Sections | `components/sections/` |
| Portrait and artwork | `public/images/` |

**Known limits:** one case study is wired (`zenhabits`); 13 logo marks; profile
and skills sections exist but are not rendered; contact channel order is
data-driven from `site.socials`.
