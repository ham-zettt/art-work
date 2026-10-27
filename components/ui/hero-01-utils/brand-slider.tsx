"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export type BrandList = {
	image: string;
	lightimg?: string;
	name: string;
};

export function BrandSlider({
	brandList,
	className,
}: {
	brandList: BrandList[];
	className?: string;
}) {
	const row = [...brandList, ...brandList];

	return (
		<div className={cn("relative overflow-hidden pb-20 md:pb-28", className)}>
			<Reveal>
				<p className="container-x eyebrow mb-10 text-center text-white/40">
					Brands &amp; identities I&apos;ve shaped
				</p>
			</Reveal>

			<style>{`
				@keyframes brand-marquee {
					from { transform: translateX(0); }
					to { transform: translateX(-50%); }
				}
				@media (prefers-reduced-motion: reduce) {
					.brand-marquee-track { animation-play-state: paused; }
				}
			`}</style>
			<div
				aria-hidden
				className="brand-marquee-track flex w-max items-center gap-12 animate-[brand-marquee_40s_linear_infinite]"
			>
				{row.map((brand, idx) => (
					<div
						key={idx}
						className="flex h-18 w-20 sm:h-16 sm:w-40 flex-none items-center justify-center"
					>
						<Image
							src={brand.image}
							alt={brand.name}
							width={160}
							height={64}
							className="max-h-12 w-auto object-contain brightness-0 invert opacity-60"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default BrandSlider;
