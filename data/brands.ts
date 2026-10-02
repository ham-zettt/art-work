import type { BrandProject } from "@/types";

export const brands: BrandProject[] = [
  {
    slug: "terra",
    title: "Terra",
    tagline: "A grounded identity for a sustainable skincare brand.",
    cover: "/images/brands/terra/cover.jpg",
    client: "Terra Skincare",
    year: "2025",
    role: "Brand Identity Designer",
    services: ["Logo Design", "Brand Guidelines", "Packaging"],
    overview:
      "Terra makes skincare from plant-based ingredients and wanted an identity that felt honest, quiet, and rooted. The wordmark and system needed to work across jars, cartons, and a growing online store.",
    challenge:
      "The brand had to stand out in a crowded skincare shelf without resorting to loud colors, while still reading as premium enough to justify its price.",
    solution:
      "I built the identity around an earth-first monogram and a restrained black-and-white system. Type, spacing, and a simple grid do the work, so the product photography stays the hero.",
    gallery: [
      { src: "/images/brands/terra/gallery-01.jpg", alt: "Terra brand application, cover layout", ratio: "16:9" },
      { src: "/images/brands/terra/gallery-02.jpg", alt: "Terra logo construction", ratio: "1:1" },
      { src: "/images/brands/terra/gallery-03.jpg", alt: "Terra packaging detail", ratio: "4:5" },
      { src: "/images/brands/terra/gallery-04.jpg", alt: "Terra identity spread", ratio: "full" },
    ],
  },
  {
    slug: "northwind",
    title: "Northwind",
    tagline: "Identity and guidelines for an outdoor gear company.",
    cover: "/images/brands/northwind/cover.jpg",
    client: "Northwind Equipment",
    year: "2024",
    role: "Brand Designer",
    services: ["Logo Design", "Visual Identity", "Brand Guidelines"],
    overview:
      "Northwind equips people for cold-weather trips and needed an identity with the confidence of a heritage outdoor label but the clarity of a modern brand.",
    challenge:
      "The existing logo was inconsistent across products and had no rules, so the brand looked different on every jacket and page.",
    solution:
      "I redrew the mark, defined a compact type system, and wrote guidelines that cover spacing, color, and co-branding with retail partners.",
    gallery: [
      { src: "/images/brands/northwind/gallery-01.jpg", alt: "Northwind brand application", ratio: "16:9" },
      { src: "/images/brands/northwind/gallery-02.jpg", alt: "Northwind logo system", ratio: "1:1" },
      { src: "/images/brands/northwind/gallery-03.jpg", alt: "Northwind apparel tag", ratio: "4:5" },
      { src: "/images/brands/northwind/gallery-04.jpg", alt: "Northwind guidelines spread", ratio: "full" },
    ],
  },
  {
    slug: "aroma",
    title: "Aroma",
    tagline: "A warm identity for a small-batch coffee roastery.",
    cover: "/images/brands/aroma/cover.jpg",
    client: "Aroma Roasters",
    year: "2024",
    role: "Brand Identity Designer",
    services: ["Logo Design", "Packaging", "Art Direction"],
    overview:
      "Aroma roasts in small batches and sells direct to customers. The brand needed to feel handmade and personal without looking amateur.",
    challenge:
      "Every bag was different, and the loose look made the coffee feel cheaper than it was.",
    solution:
      "I locked in a simple mark and a packaging system with clear tiers, so each roast feels distinct while the brand stays recognisable.",
    gallery: [
      { src: "/images/brands/aroma/gallery-01.jpg", alt: "Aroma packaging lineup", ratio: "16:9" },
      { src: "/images/brands/aroma/gallery-02.jpg", alt: "Aroma logo mark", ratio: "1:1" },
      { src: "/images/brands/aroma/gallery-03.jpg", alt: "Aroma label detail", ratio: "4:5" },
      { src: "/images/brands/aroma/gallery-04.jpg", alt: "Aroma brand spread", ratio: "full" },
    ],
  },
  {
    slug: "finlab",
    title: "Finlab",
    tagline: "A clear, trustworthy identity for a fintech startup.",
    cover: "/images/brands/finlab/cover.jpg",
    client: "Finlab",
    year: "2023",
    role: "Brand Designer",
    services: ["Logo Design", "Visual Identity", "Design System"],
    overview:
      "Finlab builds financial tools for small businesses. The team wanted an identity that felt precise and modern, and that could scale into a product interface.",
    challenge:
      "The identity had to build trust with cautious customers while still looking like a technology company, not a bank.",
    solution:
      "I designed a crisp monogram and a flexible system that moves cleanly from pitch deck to product UI, with guidelines the in-house team can follow.",
    gallery: [
      { src: "/images/brands/finlab/gallery-01.jpg", alt: "Finlab brand application", ratio: "16:9" },
      { src: "/images/brands/finlab/gallery-02.jpg", alt: "Finlab logo construction", ratio: "1:1" },
      { src: "/images/brands/finlab/gallery-03.jpg", alt: "Finlab mobile interface", ratio: "4:5" },
      { src: "/images/brands/finlab/gallery-04.jpg", alt: "Finlab design system spread", ratio: "full" },
    ],
  },
];

export function getBrandBySlug(slug: string): BrandProject | undefined {
  return brands.find((brand) => brand.slug === slug);
}
