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

				<div className="mt-10 grid gap-3 md:mt-14 md:grid-cols-3 md:gap-4">
					{services.map((service, index) => {
						const Icon = icons[service.icon];

						return (
							<Reveal key={service.id} delay={index * 90} className="h-full">
								<article className="service-card group relative flex h-full flex-col overflow-hidden rounded-xl p-6 md:p-8">
									<span aria-hidden className="service-card-glow" />
									<CornerBrackets className="inset-2.5" />

									<div className="relative z-10 flex items-start justify-between gap-4">
										<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-line-strong bg-black/40 text-accent transition-colors duration-500 group-hover:border-accent/60 group-hover:bg-accent-soft md:h-14 md:w-14">
											<Icon aria-hidden className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
										</span>
										<span className="font-mono text-[0.6875rem] leading-none tracking-[0.16em] text-muted tabular-nums">
											0{index + 1}
										</span>
									</div>

									<div className="relative z-10 mt-10 md:mt-12">
										<h3 className="h3">{service.title}</h3>
										<p className="lead mt-3 max-w-[36ch] text-muted">
											{service.description}
										</p>
									</div>
								</article>
							</Reveal>
						);
					})}

					<Reveal delay={280} className="md:col-span-3">
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
