import { BrandIdentityGrid } from "@/components/sections/BrandIdentityGrid";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { LogoGrid } from "@/components/sections/LogoGrid";
import { Profile } from "@/components/sections/Profile";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Skills />
      <LogoGrid />
      <BrandIdentityGrid />
      <Contact />
    </>
  );
}
