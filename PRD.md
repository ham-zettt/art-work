# PRD — Website Portofolio Logo Design & Brand Identity

**Pemilik:** Ilham Zakaria
**Jenis:** Landing page portofolio + halaman detail project
**Stack:** Next.js (App Router), TypeScript, Tailwind CSS
**Bahasa konten:** Bahasa Inggris

> Dokumen ini ditujukan untuk AI agent / developer sebagai acuan tunggal pembuatan website. Ikuti spesifikasi secara literal. Jika ada hal yang belum jelas, ambil keputusan yang paling minimalis dan konsisten dengan design system di bawah, lalu catat asumsinya di README.

---

## 1. Ringkasan Produk

Website portofolio satu halaman (landing page) untuk **Ilham Zakaria**, desainer grafis yang fokus pada **logo design** dan **brand identity (jasa branding produk)**. Tujuannya meyakinkan calon klien, menampilkan karya dengan rapi, dan mengarahkan pengunjung untuk menghubungi.

### Tujuan
1. Memperkenalkan Ilham sebagai desainer logo & brand identity.
2. Menampilkan karya logo dan brand identity secara bersih dan terstruktur.
3. Mengonversi pengunjung menjadi kontak/klien (CTA ke section Contact).
4. Memberi pengalaman cepat, ringan, dan responsif di semua perangkat.

### Target Pengguna
- Pemilik bisnis / UMKM / startup yang butuh logo dan identitas brand.
- Agensi atau rekruter yang mencari desainer brand.

### Di Luar Cakupan (Out of Scope)
- CMS / admin panel, blog, e-commerce, autentikasi, multi-bahasa penuh, dark mode toggle.

---

## 2. Design System

### 2.1 Konsep
Modern, minimalis, tegas, banyak ruang kosong (whitespace). Karya desain adalah fokus utama, UI tidak boleh bersaing dengan karya.

### 2.2 Warna (Monokrom Murni)
Hanya hitam, putih, dan turunan abu-abu netral. **Dilarang menggunakan warna lain** (kecuali gambar karya itu sendiri).

| Token | Nilai | Penggunaan |
|---|---|---|
| `--bg` | `#FFFFFF` | Background utama |
| `--fg` | `#0A0A0A` | Teks utama, border |
| `--muted` | `#6B6B6B` | Teks sekunder |
| `--line` | `#0A0A0A` | Garis pemisah/border (tipis) |
| `--surface` | `#F5F5F5` | Placeholder gambar, hover halus |
| `--invert-bg` | `#0A0A0A` | Section terbalik (hero, contact) |
| `--invert-fg` | `#FFFFFF` | Teks pada section terbalik |

Hero dan Contact boleh memakai tema terbalik (background hitam, teks putih) untuk ritme visual. Section lain berlatar putih.

### 2.3 Tipografi
- **Font:** sans serif modern. Pilihan utama: **Inter** atau **Geist Sans** (via `next/font`). Fallback: `system-ui, sans-serif`.
- **Satu keluarga font saja** untuk seluruh website; bedakan hierarki lewat ukuran dan weight.
- **Letter-spacing rapat (tight):**
  - Heading besar (display/h1/h2): `letter-spacing: -0.05em` hingga `-0.04em`
  - Heading kecil (h3/h4): `-0.03em`
  - Body: `-0.01em`
  - Label kecil huruf kapital (eyebrow): `0.02em` (satu-satunya pengecualian, opsional)
- **Line-height:** heading `0.95–1.05`, body `1.5`.
- **Weight:** Heading 500–600, body 400.
- **Skala ukuran (fluid dengan `clamp`):**
  - Display (hero): `clamp(3.5rem, 12vw, 11rem)`
  - H2 section: `clamp(2.25rem, 6vw, 5rem)`
  - H3 (judul item): `1.25rem–1.5rem`
  - Body: `1rem–1.125rem`
  - Caption/label: `0.75rem–0.875rem`

### 2.4 Layout & Spacing
- Container max-width `1440px`, padding horizontal `24px` (mobile) / `48px` (desktop).
- Spacing section vertikal: `96px` (mobile) / `160px` (desktop).
- Grid 12 kolom di desktop.
- **Border:** `1px solid var(--line)`. Tanpa border-radius (sudut tajam, `0`). Tanpa shadow, tanpa gradient.
- Gunakan garis tipis hitam sebagai pemisah antar section dan antar sel grid.

### 2.5 Interaksi & Animasi
- Subtle dan cepat (150–400ms), easing `cubic-bezier(0.22, 1, 0.36, 1)`.
- Fade/slide-up ringan saat elemen masuk viewport (Framer Motion atau CSS + IntersectionObserver).
- Hover kartu: gambar zoom halus (`scale 1.03`) atau perubahan background `--surface`. Kursor `pointer` hanya pada elemen yang bisa diklik.
- Hormati `prefers-reduced-motion` (matikan animasi).
- Smooth scroll untuk navigasi anchor.

### 2.6 Navigasi
- Header sticky minimalis: logo teks "Ilham Zakaria" di kiri, tautan anchor (Profile, Skills, Logo, Brand Identity, Contact) di kanan.
- Mobile: menu hamburger sederhana (fullscreen overlay hitam-putih).
- Border bawah tipis 1px pada header.
- Di halaman detail project, header sama, dengan tautan kembali ke `/#brand-identity`.

---

## 3. Arsitektur & Teknis

### 3.1 Stack
- Next.js versi terbaru (App Router), TypeScript, Tailwind CSS.
- `next/image` untuk semua gambar (lazy loading, `sizes` benar, placeholder blur bila memungkinkan).
- `next/font` untuk font.
- Framer Motion (opsional) untuk animasi.
- Deploy target: Vercel.

### 3.2 Routing
| Route | Deskripsi |
|---|---|
| `/` | Landing page berisi semua section |
| `/brand-identity/[slug]` | Halaman detail satu project brand identity (halaman penuh, **bukan modal / pop-up**) |
| `not-found` | Halaman 404 bergaya sama |

Gunakan `generateStaticParams` agar semua halaman detail di-generate statis. Gunakan `generateMetadata` untuk SEO per halaman detail.

### 3.3 Struktur Folder (saran)
```
/app
  layout.tsx
  page.tsx
  globals.css
  /brand-identity/[slug]/page.tsx
/components
  Header.tsx  Footer.tsx
  /sections
    Hero.tsx  Profile.tsx  Skills.tsx
    LogoGrid.tsx  BrandIdentityGrid.tsx  Contact.tsx
  /ui
    SectionHeading.tsx  Reveal.tsx
/data
  logos.ts  brands.ts  skills.ts  site.ts
/public
  /images (profile, logos, brands)
/types
  index.ts
```

### 3.4 Model Data (konten dipisah dari komponen)
Semua konten dikelola lewat file di `/data` agar mudah diedit tanpa menyentuh komponen.

```ts
// types/index.ts
export type LogoItem = {
  id: string;
  title: string;
  description: string;
  image: string; // rasio 1:1
};

export type BrandProject = {
  slug: string;
  title: string;
  tagline: string;
  cover: string;        // rasio 16:9
  client: string;
  year: string;
  services: string[];   // contoh: ["Logo Design","Brand Guidelines"]
  overview: string;
  challenge?: string;
  solution?: string;
  gallery: { src: string; alt: string; ratio?: "16:9" | "1:1" | "4:5" | "full" }[];
};

export type Skill = { name: string; level?: number };
```

Isi data awal dengan **placeholder** (minimal 6 logo, 4 project brand identity, masing-masing dengan gambar placeholder abu-abu bertuliskan ukuran/rasio) agar pemilik bisa mengganti dengan karya asli.

---

## 4. Spesifikasi Section (Landing Page `/`)

Urutan section: **Hero → Profil → Skills → Logo → Brand Identity → Contact → Footer**

### 4.1 Hero
- **Tinggi:** `100vh` (gunakan `100svh` agar aman di mobile).
- **Tujuan:** menyampaikan siapa Ilham dan jasanya dalam satu layar penuh.
- **Konten:**
  - Eyebrow kecil: "Logo Design & Brand Identity".
  - Headline display raksasa dengan letter-spacing sangat rapat, misal: "Building brands people remember." (teks dapat diedit di `data/site.ts`).
  - Sub-teks satu kalimat tentang jasa branding produk.
  - Dua CTA: **"View Work"** (scroll ke #logo) dan **"Contact Me"** (scroll ke #contact). Gaya: tombol kotak tajam, satu solid, satu outline.
  - Indikator scroll sederhana di bawah (teks "Scroll" + garis).
- **Gaya:** background hitam, teks putih (tema terbalik), tipografi sebagai elemen visual utama. Tanpa gambar wajib.
- Animasi: teks muncul per baris (slide-up bertahap).

### 4.2 Profil (`#profile`)
- **Layout desktop:** dua kolom. Kiri: teks. Kanan (atau kiri, selang-seling sesuai estetika): **area foto rasio 4:6** (portrait, `aspect-ratio: 4/6`).
- **Konten teks:**
  - Judul besar: **"Hi, I'm Ilham Zakaria"**.
  - Paragraf singkat (2–3 paragraf) yang menjelaskan siapa Ilham: desainer grafis berfokus pada logo & brand identity, pendekatan kerja, dan layanan yang ditawarkan. (Tulis copy placeholder yang profesional; mudah diganti.)
  - Poin ringkas (opsional, dipisah garis tipis): Experience (mis. "X+ years"), Projects completed ("XX+"), Location/Availability. Gunakan placeholder.
- **Foto:** komponen `next/image` dalam wrapper rasio **4:6**, `object-fit: cover`. Sediakan placeholder abu-abu `--surface` dengan teks "Photo 4:6" bila gambar belum ada. Path file: `/public/images/profile.jpg`. Foto tampil hitam-putih (grayscale) via CSS `filter: grayscale(1)`, kembali berwarna saat hover (opsional).
- **Mobile:** foto di atas, teks di bawah, foto tetap rasio 4:6 (lebar maksimal ~80%).

### 4.3 Skills (`#skills`)
- **Tujuan:** menunjukkan tools desain dan keahlian desain.
- **Dua kelompok:**
  1. **Tools** — Adobe Illustrator, Adobe Photoshop, Adobe InDesign, Figma, CorelDRAW, dll. (placeholder, bisa diedit di `data/skills.ts`).
  2. **Skills** — Logo Design, Brand Identity, Brand Guidelines, Typography, Color Theory, Packaging Design, Visual Strategy, dll.
- **Tampilan:** minimalis berbasis garis. Daftar item dalam grid dengan border tipis hitam (tiap sel `1px`), teks saja atau ikon monokrom sederhana. Hindari logo berwarna: jika memakai ikon tools, ubah menjadi hitam/putih.
- Opsi: judul kelompok di kolom kiri, daftar di kolom kanan, dipisahkan garis horizontal tipis. Hover pada item: background berubah hitam, teks putih.
- Tidak perlu progress bar persen; fokus pada daftar yang bersih.

### 4.4 Logo (`#logo`)
- **Judul section:** "Logo" dengan counter jumlah karya (mis. "(12)") bergaya minimalis.
- **Struktur grid:** garis tipis hitam sebagai pemisah di seluruh grid (border 1px antar sel dan di sekeliling grid).
- **Aturan baris:** **satu baris berisi 2 item**, urutan baca: `Logo 1 → (judul + deskripsi) → Logo 2 → (judul + deskripsi)`.
- **Setiap item (sel) terdiri dari dua blok bertumpuk:**
  1. **Blok gambar logo — rasio 1:1 (persegi).** Logo ditampilkan `object-fit: contain` dengan padding lega di atas background putih (atau `--surface`), agar logo tampil bersih.
  2. **Blok deskripsi — persegi panjang (landscape).** Di bawah gambar, lebar penuh sel, tinggi mengikuti konten (kira-kira rasio 3:1 / 4:1, atau tinggi minimum ±140px). Isi: **Judul** (H3, tight tracking), **deskripsi singkat** 1–3 kalimat (muted), dan opsional meta kecil (kategori/tahun) di sudut kanan. Dipisahkan dari gambar oleh garis tipis hitam.
- **Desktop:** `grid-template-columns: repeat(2, 1fr)`. **Mobile:** tetap boleh 1 kolom agar terbaca (urutan: gambar → deskripsi, per item), atau 2 kolom jika layar ≥ `sm`. Pertahankan border tipis di semua breakpoint.
- Tidak bisa diklik (display-only). Hover: zoom halus pada gambar saja.
- Jika jumlah item ganjil, sel terakhir kosong dengan border tetap konsisten (tanpa sel kosong yang terlihat rusak).

### 4.5 Brand Identity (`#brand-identity`)
- **Konsep visual:** sama dengan section Logo (grid, 2 item per baris, border tipis hitam, urutan gambar → judul & deskripsi), tetapi:
  - **Rasio gambar: 16:9** (landscape), `object-fit: cover`.
  - Blok deskripsi persegi panjang di bawah gambar: judul project, tagline/deskripsi singkat, tag layanan, dan ikon/teks panah **"View Project →"**.
- **Interaksi (wajib):** setiap kartu project **dapat diklik** dan **menavigasi ke halaman detail** `/brand-identity/[slug]` menggunakan `next/link`. **Dilarang memakai modal, pop-up, drawer, atau lightbox sebagai pengganti halaman.**
- Seluruh kartu adalah satu area link (aksesibel, fokus terlihat, `aria-label` jelas). Hover: gambar zoom halus, panah bergeser, judul dengan garis bawah tipis.
- Prefetch halaman detail aktif (default `next/link`).

### 4.6 Contact (`#contact`)
- **Gaya:** tema terbalik (background hitam, teks putih), padding besar.
- **Konten:**
  - Headline besar tight tracking, mis. "Got a brand to build? Let's talk."
  - **Email besar** sebagai tautan `mailto:` (ukuran display, underline tipis saat hover).
  - Daftar tautan sosial/komunikasi: WhatsApp (`https://wa.me/...`), Instagram, Behance, LinkedIn, dll. (placeholder di `data/site.ts`). Ditampilkan sebagai baris dengan garis pemisah tipis putih.
  - Info ketersediaan singkat (mis. "Open for projects — Jakarta/Remote") placeholder.
- **Form kontak (opsional, fase 2):** bila diimplementasikan: field Name, Email, Project Type, Message, tombol Send; validasi sisi klien + Server Action / Route Handler; gaya input hanya garis bawah tipis. Jika tidak, cukup CTA email + WhatsApp.

### 4.7 Footer
- Satu baris: © tahun otomatis, "Ilham Zakaria", tautan "Back to top". Border atas tipis.

---

## 5. Halaman Detail Brand Identity (`/brand-identity/[slug]`)

Halaman penuh tersendiri (bukan modal). Struktur dari atas ke bawah:

1. **Header** (sama dengan landing) + tautan **"← Back"** ke `/#brand-identity`.
2. **Judul project** (display size, tight tracking) + tagline.
3. **Cover image** lebar penuh rasio **16:9**.
4. **Blok meta** (grid 4 kolom dengan garis pemisah tipis): Client, Year, Services (list), Role.
5. **Overview** — deskripsi project; opsional sub-blok **Challenge** dan **Solution**.
6. **Gallery** — susunan gambar karya (campuran rasio 16:9 / 1:1 / lebar penuh), tiap gambar dengan jarak lega atau dipisah border tipis. Lazy load.
7. **Navigasi project** — "Previous Project / Next Project" berupa dua blok besar bergaya border tipis.
8. **CTA Contact** — blok singkat mengajak menghubungi, tautan ke `/#contact`.
9. **Footer**.

Slug tidak ditemukan → `notFound()`.

---

## 6. Responsif

| Breakpoint | Perilaku |
|---|---|
| < 640px (mobile) | 1 kolom, hamburger menu, font display diperkecil via `clamp`, foto profil 4:6 di atas teks |
| 640–1024px (tablet) | Grid logo & brand tetap 2 kolom bila muat, padding lebih kecil |
| ≥ 1024px (desktop) | Layout penuh sesuai spesifikasi |

Tidak boleh ada horizontal scroll di semua ukuran layar. Uji pada lebar 360, 768, 1280, 1536px.

---

## 7. Non-Functional Requirements

- **Performa:** Lighthouse Performance ≥ 90, LCP < 2.5s, CLS < 0.1. Gunakan gambar WebP/AVIF, `priority` hanya untuk gambar di atas lipatan.
- **SEO:** metadata (title, description), Open Graph & Twitter card, `sitemap.xml`, `robots.txt`, heading hierarchy benar (satu `h1`), alt text semua gambar, JSON-LD `Person`/`ProfessionalService`.
- **Aksesibilitas:** kontras WCAG AA, navigasi keyboard penuh, focus ring jelas (outline 2px hitam/putih), landmark semantik (`header`, `main`, `section`, `footer`), `aria-label` pada tautan ikon.
- **Kualitas kode:** TypeScript strict, ESLint + Prettier, komponen kecil dan reusable, tanpa inline style berlebihan, tanpa dependency yang tidak perlu.
- **Browser:** Chrome, Safari, Firefox, Edge terbaru; iOS Safari & Android Chrome.

---

## 8. Aset & Konten Placeholder

Siapkan placeholder sehingga situs langsung berjalan tanpa aset asli:
- `/public/images/profile.jpg` → 4:6 (mis. 800×1200)
- `/public/images/logos/logo-01.png … ` → 1:1 (mis. 1200×1200, latar transparan/putih)
- `/public/images/brands/<slug>/cover.jpg` → 16:9 (mis. 1920×1080)
- `/public/images/brands/<slug>/gallery-*.jpg`

Dokumentasikan di README cara mengganti gambar dan mengedit data (`data/*.ts`) serta cara menambah project brand identity baru (cukup tambah objek di `data/brands.ts`).

---

## 9. Acceptance Criteria

- [ ] Urutan section: Hero, Profil, Skills, Logo, Brand Identity, Contact.
- [ ] Hero berukuran tinggi layar penuh di mobile dan desktop.
- [ ] Section Profil memuat teks "Hi, I'm Ilham Zakaria" dan slot foto rasio 4:6.
- [ ] Section Skills menampilkan kelompok Tools dan Skills.
- [ ] Section Logo: grid 2 item per baris, gambar rasio 1:1, deskripsi berbentuk persegi panjang, pemisah border tipis hitam.
- [ ] Section Brand Identity: grid 2 item per baris, gambar rasio 16:9, tiap item menuju halaman detail `/brand-identity/[slug]` (bukan modal/pop-up).
- [ ] Halaman detail memiliki cover, meta, overview, gallery, dan navigasi project.
- [ ] Seluruh UI monokrom (hitam-putih), font sans serif dengan letter-spacing rapat, tanpa border-radius dan shadow.
- [ ] Responsif tanpa horizontal scroll; animasi halus dan menghormati reduced-motion.
- [ ] Konten dikelola dari `/data`, build produksi (`next build`) sukses tanpa error TypeScript/ESLint.
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.

---

## 10. Rencana Pengerjaan (urutan untuk AI agent)

1. Inisialisasi Next.js + TypeScript + Tailwind; atur font, token warna, dan global style (tight tracking).
2. Buat tipe data dan file `/data` dengan konten placeholder.
3. Bangun Header, Footer, dan komponen UI dasar (SectionHeading, Reveal).
4. Implementasi section: Hero → Profil → Skills → Logo → Brand Identity → Contact.
5. Bangun halaman detail dinamis `/brand-identity/[slug]` + `generateStaticParams` + metadata.
6. Tambah animasi, state hover/focus, dan penyempurnaan responsif.
7. SEO, aksesibilitas, optimasi gambar, dan audit Lighthouse.
8. Tulis README (cara ganti konten/gambar, cara deploy ke Vercel).
