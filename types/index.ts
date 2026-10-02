export type LogoItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  year?: string;
};

export type GalleryRatio = "16:9" | "1:1" | "4:5" | "full";

export type GalleryItem = {
  src: string;
  alt: string;
  ratio?: GalleryRatio;
};

export type BrandProject = {
  slug: string;
  title: string;
  tagline: string;
  cover: string;
  client: string;
  year: string;
  role: string;
  services: string[];
  overview: string;
  challenge?: string;
  solution?: string;
  gallery: GalleryItem[];
};

export type Skill = {
  name: string;
  level?: number;
};

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
