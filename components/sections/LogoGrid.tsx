import Image from "next/image";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { logos } from "@/data/logos";

export function LogoGrid() {
	return (
		<section id="logo" className="section">
			<div className="container-x">
				<Reveal>
					<SectionHeading
						number="03"
						eyebrow="Selected marks"
						title="Logo"
						count={String(logos.length)}
						description="Marks made for products, studios, and small businesses. Hover to see the colors."
					/>
				</Reveal>

				<div className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-14 md:gap-4 lg:grid-cols-3">
					{logos.map((logo, index) => (
						<Reveal key={logo.id} delay={(index % 3) * 70}>
							<article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-[#070707] transition-colors duration-500 hover:border-line-strong">
								<CornerBrackets className="inset-2.5 opacity-50" />

								<div className="relative aspect-square overflow-hidden">
									<div
										aria-hidden
										className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_45%,rgba(51,51,51,0.5),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
									/>
									<Image
										src={logo.image}
										alt={`${logo.title} logo`}
										fill
										sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
										loading="lazy"
										className="logo-mono object-contain p-12 transition-transform duration-500 group-hover:scale-[1.04] md:p-16"
									/>
									<span className="absolute left-4 top-4 z-10 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
										{String(index + 1).padStart(2, "0")}
									</span>
								</div>

								<div className="flex flex-1 flex-col gap-2 border-t border-line p-5 md:p-6">
									<div className="flex items-start justify-between gap-4">
										<h3 className="text-lg font-medium tracking-[-0.02em]">
											{logo.title}
										</h3>
										{logo.category || logo.year ? (
											<span className="whitespace-nowrap font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
												{[logo.category, logo.year]
													.filter(Boolean)
													.join(" · ")}
											</span>
										) : null}
									</div>
									<p className="caption max-w-prose text-muted">
										{logo.description}
									</p>
								</div>
							</article>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
