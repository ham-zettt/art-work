import type { BrandProject } from "@/types";

export const brands: BrandProject[] = [
	{
		slug: "zenhabits",
		title: "ZenHabits",
		tagline:
			"Identity for a sustainable website app for making custom daily notes",
		cover: "/images/brands/zenhabits/cover.png",
		client: "ZenHabits",
		year: "2026",
		role: "Logo & Brand Designer",
		services: ["Logo Design", "Brand Guidelines", "Application"],
		overview:
			"ZenHabits is an all-in-one app that combines notes, to-do lists, and habit trackers into one clean space, so users don't need to download multiple tools.",
		challenge:
			"People waste time switching between different apps for their daily tasks, notes, and habits, making it hard to stay organized and focused throughout the day.",
		solution:
			"I created a simple, clear system that brings every daily tool together, making it easy for users to track progress and manage their routine without feeling overwhelmed.",
		gallery: [
			{
				src: "/images/brands/zenhabits/image1.png",
				alt: "ZenHabits brand application",
				ratio: "4:5",
			},
			{
				src: "/images/brands/zenhabits/image2.png",
				alt: "ZenHabits brand application",
				ratio: "4:5",
			},
			{
				src: "/images/brands/zenhabits/image3.png",
				alt: "ZenHabits brand application",
				ratio: "4:5",
			},
			{
				src: "/images/brands/zenhabits/image4.png",
				alt: "ZenHabits brand application",
				ratio: "4:5",
			},
			{
				src: "/images/brands/zenhabits/image5.png",
				alt: "ZenHabits brand application",
				ratio: "4:5",
			},
			{
				src: "/images/brands/zenhabits/image6.png",
				alt: "ZenHabits brand application",
				ratio: "4:5",
			},
			{
				src: "/images/brands/zenhabits/image7.png",
				alt: "ZenHabits brand application",
				ratio: "4:5",
			},
			{
				src: "/images/brands/zenhabits/image8.png",
				alt: "ZenHabits brand application",
				ratio: "4:5",
			},
			{
				src: "/images/brands/zenhabits/image9.png",
				alt: "ZenHabits brand application",
				ratio: "4:5",
			},
		],
	},
];

export function getBrandBySlug(slug: string): BrandProject | undefined {
	return brands.find((brand) => brand.slug === slug);
}
