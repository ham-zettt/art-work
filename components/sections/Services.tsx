import Image from "next/image";
import { ArrowUpRight, Monitor, Palette, PenTool } from "lucide-react";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { site } from "@/data/site";
import type { Service } from "@/types";

const icons: Record<Service["icon"], typeof PenTool> = {
	"pen-tool": PenTool,
	palette: Palette,
	monitor: Monitor,
};

export function Services() {
	return (
		<section id="services" className="section">
			<div className="container-x">
				<Reveal>
					<SectionHeading
						number="02"
						eyebrow="Services"
						title="What I do"
						count="03"
						description="I help products, startups, and small businesses build clear, memorable brands across three core disciplines."
					/>
				</Reveal>

				<div className="mt-10 grid gap-3 md:mt-14 md:grid-cols-12 md:gap-4">
					{services.map((service, index) => {
						const Icon = icons[service.icon];
						const isFeature = index === 0;

						return (
							<Reveal
								key={service.id}
								delay={index * 90}
								className={
									isFeature
										? "md:col-span-7 md:row-span-2"
										: "md:col-span-5"
								}
							>
								<article
									className={`panel group relative flex h-full flex-col overflow-hidden rounded-xl p-6 md:p-8 ${
										isFeature ? "min-h-[320px] md:min-h-[420px]" : "min-h-[180px]"
									}`}
								>
									<CornerBrackets className="inset-2.5" />

									<div className="relative z-10 flex items-start justify-between gap-4">
										<span className="flex h-11 w-11 items-center justify-center rounded-md border border-line-strong bg-black/40 text-fg transition-colors duration-300 group-hover:border-accent/60 group-hover:text-accent">
											<Icon aria-hidden className="h-5 w-5" strokeWidth={1.5} />
										</span>
										<span className="eyebrow text-muted">
											0{index + 1}
										</span>
									</div>

									<div className="relative z-10 mt-auto pt-10">
										<h3 className={isFeature ? "text-[clamp(2rem,3.4vw,3rem)] font-light leading-[1] tracking-[-0.04em]" : "h3"}>
											{service.title}
										</h3>
										<p className="lead mt-3 max-w-sm text-muted">
											{service.description}
										</p>
									</div>

									{isFeature ? (
										<div
											aria-hidden
											className="absolute -bottom-10 -right-4 hidden h-[62%] w-[42%] rotate-[4deg] overflow-hidden rounded-lg border border-line-strong bg-black sm:block"
										>
											<Image
												src="/images/me.webp"
												alt=""
												width={1024}
												height={1536}
												sizes="(min-width: 768px) 260px, 40vw"
												loading="lazy"
												className="absolute inset-0 h-full w-full object-cover object-[50%_15%] grayscale"
											/>
											<div
												aria-hidden
												className="absolute inset-0 bg-[linear-gradient(165deg,#ffa45c,#f16001_35%,#c10801_70%,#000)] mix-blend-multiply"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
										</div>
									) : null}
								</article>
							</Reveal>
						);
					})}

					<Reveal delay={280} className="md:col-span-12">
						<div className="relative overflow-hidden rounded-xl border border-line bg-black">
							<div aria-hidden className="cta-glow absolute inset-0 opacity-70" />
							<div className="relative z-10 flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
								<div>
									<p className="eyebrow text-muted">
										{site.availability} — {site.location}
									</p>
									<p className="mt-3 max-w-md text-[clamp(1.35rem,2.4vw,2rem)] font-light leading-[1.15] tracking-[-0.03em]">
										Have a mark in mind? Let&apos;s give it a system.
									</p>
								</div>
								<a href="#contact" className="btn-frame shrink-0">
									Start a project
									<ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
								</a>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
