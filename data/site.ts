import type { NavLink, SocialLink } from "@/types";

export const site = {
	name: "IlhamZakaria",
	role: "Logo Designer & Brand Identity Designer",
	eyebrow: "Logo Design & Brand Identity",
	headline: "Building brands people remember.",
	headlineLines: ["Building brands", "your"],
	heroWords: ["logo", "identity", "website"],
	heroSubtext:
		"I design logos and complete brand identity systems for products, startups, and small businesses.",
	description:
		"Ilham Zakaria is a graphic designer enthusiast focused on logo design and brand identity. He helps products, startups, and small businesses build a clear, memorable brand.",
	url: "https://ilhamzakaria.com",
	email: "ilhamzakaria3024@gmail.com",
	location: "Pamekasan, Jawa Timur",
	availability: "Open for projects",
	nav: [
		{ label: "Profile", href: "#profile" },
		{ label: "Skills", href: "#skills" },
		{ label: "Logo", href: "#logo" },
		{ label: "Brand Identity", href: "#brand-identity" },
		{ label: "Contact", href: "#contact" },
	] satisfies NavLink[],
	socials: [
		{ label: "WhatsApp", href: "https://wa.me/6281939374447" },
		{ label: "Instagram", href: "https://instagram.com/ham_zkry" },
		{ label: "LinkedIn", href: "https://linkedin.com/in/ilhamz" },
	] satisfies SocialLink[],
	stats: [
		{ label: "Focus", value: "Logo Design & Brand Identity" },
		{ label: "Location", value: "Pamekasan, Jawa Timur" },
		{ label: "Projects completed", value: "20+ Projects" },
	],
	profile: {
		title: "Hi, I'm Muhammad Ilham Zakaria",
		image: "/images/me.png",
		paragraphs: [
			"I'm a graphic designer who works mostly on logos and brand identity. I help products, startups, and small businesses turn an idea into a mark and a system that holds up everywhere it lives.",
			"My process starts with listening. I map out what the business actually does and who it speaks to, then explore directions until the identity feels inevitable rather than decorated. Every choice, from the type to the color to the spacing, has a reason.",
		],
	},
} as const;
