import { BrandIdentityGrid } from "@/components/sections/BrandIdentityGrid";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { LogoGrid } from "@/components/sections/LogoGrid";
import { Profile } from "@/components/sections/Profile";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";

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
