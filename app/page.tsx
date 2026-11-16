import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";

/* Below-the-fold sections are split into their own chunks. */
const Services = dynamic(() =>
	import("@/components/sections/Services").then((mod) => mod.Services),
);
const LogoGrid = dynamic(() =>
	import("@/components/sections/LogoGrid").then((mod) => mod.LogoGrid),
);
const BrandIdentityGrid = dynamic(() =>
	import("@/components/sections/BrandIdentityGrid").then((mod) => mod.BrandIdentityGrid),
);
const Contact = dynamic(() =>
	import("@/components/sections/Contact").then((mod) => mod.Contact),
);

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			{/* <Profile /> */}
			{/* <Skills /> */}
			<LogoGrid />
			<BrandIdentityGrid />
			<Contact />
		</>
	);
}
