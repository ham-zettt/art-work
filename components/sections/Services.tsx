import { Monitor, Palette, PenTool } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
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
						eyebrow="Services"
						title="What I Do"
						description="I help products, startups, and small businesses build clear, memorable brands across three core disciplines."
					/>
				</Reveal>

				<div className="mt-16 grid gap-8 md:grid-cols-3">
					{services.map((service, index) => {
						const Icon = icons[service.icon];

						return (
							<Reveal key={service.id} delay={index * 120}>
								<article className="group flex h-full flex-col border border-line p-6 transition-colors duration-200 hover:bg-surface md:p-8">
									<div className="flex items-start justify-between">
										<span className="flex h-11 w-11 rounded-lg items-center justify-center border border-line bg-bg transition-colors duration-200 group-hover:bg-invert-bg group-hover:text-invert-fg">
											<Icon aria-hidden className="h-5 w-5" />
										</span>
										<span className="eyebrow text-muted">
											{String(index + 1).padStart(2, "0")}
										</span>
									</div>
									<h3 className="h3 mt-6">{service.title}</h3>
									<p className="lead mt-3 text-muted">
										{service.description}
									</p>
								</article>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}