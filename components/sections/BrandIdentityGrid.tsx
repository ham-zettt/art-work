import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brands } from "@/data/brands";

export function BrandIdentityGrid() {
	return (
		<section id="brand-identity" className="section">
			<div className="container-x">
				<Reveal>
					<SectionHeading
						number="04"
						eyebrow="Case studies"
						title="Brand identity"
						count={String(brands.length)}
						description="Full identity projects, from strategy and logo to guidelines and applications."
					/>
				</Reveal>

				<div className="mt-10 flex flex-col gap-4 md:mt-14">
					{brands.map((brand) => (
						<Reveal key={brand.slug}>
							<Link
								href={`/brand-identity/${brand.slug}`}
								aria-label={`View project: ${brand.title}`}
								className="group relative block overflow-hidden rounded-xl border border-line bg-black transition-colors duration-500 hover:border-line-strong"
							>
								<CornerBrackets className="inset-2.5 z-20" />

								<div className="grid md:grid-cols-2">
									<div className="relative aspect-[16/10] overflow-hidden bg-surface md:aspect-auto md:min-h-[420px]">
										<Image
											src={brand.cover}
											alt={`${brand.title} brand identity cover`}
											fill
											sizes="(min-width: 768px) 50vw, 100vw"
											loading="lazy"
											className="object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.035]"
										/>
										<div
											aria-hidden
											className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r"
										/>
									</div>

									<div className="flex flex-col justify-between gap-10 p-6 md:p-10">
										<div className="flex items-start justify-between gap-4">
											<p className="eyebrow text-muted">
												{brand.year} — {brand.client}
											</p>
											<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-fg transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-black">
												<ArrowUpRight aria-hidden className="h-4 w-4" />
											</span>
										</div>

										<div>
											<h3 className="text-[clamp(2.25rem,4.4vw,4rem)] font-light leading-[0.95] tracking-[-0.045em]">
												{brand.title}
											</h3>
											<p className="lead mt-4 max-w-sm text-muted">
												{brand.tagline}
											</p>
										</div>

										<ul className="flex flex-wrap gap-2 border-t border-line pt-5">
											{brand.services.map((service) => (
												<li
													key={service}
													className="rounded-full border border-line px-3 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted"
												>
													{service}
												</li>
											))}
										</ul>
									</div>
								</div>
							</Link>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
