"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";

export type AvatarList = {
	image: string;
	name?: string;
};

export function HeroSection({ avatarList }: { avatarList: AvatarList[] }) {
	return (
		<section className="container-x flex flex-col items-center gap-5 pt-16 pb-16 text-center md:pb-24">
			<Reveal>
				<p className="eyebrow text-white/60">
					Logo &amp; Brand Identity
				</p>
			</Reveal>

			<Reveal delay={120}>
				<h1 className="h1 max-w-[16ch] text-balance">
					Elegant Branding, Modern Design
					{/* Building brands people remember. */}
				</h1>
			</Reveal>

			<Reveal delay={240}>
				<p className="lead max-w-xl text-xs sm:text-balance text-white/70">
					I design logos, brand identity and modern website systems
					that help products, startups, and small businesses to stand
					out.
				</p>
			</Reveal>

			<Reveal delay={360}>
				<div className="flex flex-wrap justify-center gap-3">
					<Button
						asChild
						size="lg"
						className="border border-invert-fg bg-invert-fg text-invert-bg hover:bg-transparent hover:text-invert-fg"
					>
						<a href="#logo">
							View Work
							<ArrowRight aria-hidden className="h-4 w-4" />
						</a>
					</Button>
					<Button
						asChild
						size="lg"
						variant="outline"
						className="border-invert-fg bg-transparent text-invert-fg hover:bg-invert-fg hover:text-invert-bg"
					>
						<a href="#contact">Contact Me</a>
					</Button>
				</div>
			</Reveal>

			<Reveal delay={480}>
				<div className="mt-6 flex items-center gap-4">
					<div className="flex -space-x-3">
						{avatarList.map((avatar, idx) => (
							<Image
								key={idx}
								src={avatar.image}
								alt={avatar.name ?? ""}
								width={48}
								height={48}
								className="h-12 w-12 bg-background rounded-full p-1 border-2 border-invert-bg object-contain"
							/>
						))}
					</div>
					<p className="caption text-left text-white/60">
						20+ projects delivered
						<br />
						for products &amp; startups
					</p>
				</div>
			</Reveal>
		</section>
	);
}

export default HeroSection;
