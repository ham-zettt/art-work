import type { NavLink, SocialLink } from "@/types";

export const site = {
  name: "Ilham Zakaria",
  role: "Logo Designer & Brand Identity Designer",
  eyebrow: "Logo Design & Brand Identity",
  headline: "Building brands people remember.",
  headlineLines: ["Building brands", "people"],
  heroWords: ["remember", "trust", "notice", "choose"],
  heroSubtext:
    "I design logos and complete brand identity systems for products, startups, and small businesses.",
  description:
    "Ilham Zakaria is a graphic designer focused on logo design and brand identity. He helps products, startups, and small businesses build a clear, memorable brand.",
  url: "https://ilhamzakaria.com",
  email: "hello@ilhamzakaria.com",
  location: "Jakarta / Remote",
  availability: "Open for projects",
  nav: [
    { label: "Profile", href: "#profile" },
    { label: "Skills", href: "#skills" },
    { label: "Logo", href: "#logo" },
    { label: "Brand Identity", href: "#brand-identity" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  socials: [
    { label: "WhatsApp", href: "https://wa.me/6280000000000" },
    { label: "Instagram", href: "https://instagram.com/ilhamzakaria" },
    { label: "Behance", href: "https://behance.net/ilhamzakaria" },
    { label: "LinkedIn", href: "https://linkedin.com/in/ilhamzakaria" },
  ] satisfies SocialLink[],
  stats: [
    { label: "Experience", value: "6+ years" },
    { label: "Projects completed", value: "80+" },
    { label: "Location", value: "Jakarta / Remote" },
  ],
  profile: {
    title: "Hi, I'm Ilham Zakaria",
    image: "/images/profile.jpg",
    paragraphs: [
      "I'm a graphic designer who works mostly on logos and brand identity. I help products, startups, and small businesses turn an idea into a mark and a system that holds up everywhere it lives.",
      "My process starts with listening. I map out what the business actually does and who it speaks to, then explore directions until the identity feels inevitable rather than decorated. Every choice, from the type to the color to the spacing, has a reason.",
      "I work directly with founders and teams, from a single logo to a full identity with guidelines and packaging. If you are building or rebuilding a brand, I can help you make it clear.",
    ],
  },
} as const;
