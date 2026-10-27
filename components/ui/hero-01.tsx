"use client";

import HeroSection, {
	type AvatarList,
} from "@/components/ui/hero-01-utils/hero";
import BrandSlider, {
	type BrandList,
} from "@/components/ui/hero-01-utils/brand-slider";

const avatarList: AvatarList[] = [
	{
		image: "/images/logos/astrea.png",
		name: "Finlab",
	},
	{
		image: "/images/logos/fid.png",
		name: "Terra",
	},
	{
		image: "/images/logos/lcontrol.png",
		name: "Aroma",
	},
	{
		image: "/images/logos/hlg.png",
		name: "Northwind",
	},
];

const brandList: BrandList[] = [
	{ image: "/images/logos/zenhabits.png", name: "Zenhabits" },
	{ image: "/images/logos/golf-zone.png", name: "Golf Zone" },
	{ image: "/images/logos/elephant.png", name: "30th Elephant" },
	{ image: "/images/logos/blue-cotton.png", name: "Blue Cotton" },
	{ image: "/images/logos/centralgroup.png", name: "Central Group" },
];

export default function AgencyHeroSection() {
	return (
		<div id="top" className="relative bg-invert-bg text-invert-fg">
			<HeroSection avatarList={avatarList} />
			<BrandSlider brandList={brandList} />
		</div>
	);
}
