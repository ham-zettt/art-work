import { ArrowUpRight } from "lucide-react";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { site } from "@/data/site";

export function Contact() {
	return (
		<section id="contact" className="pb-6 md:pb-10">
			<div className="container-x">
				<div className="cta-glow relative overflow-hidden rounded-2xl border border-line">
					<CornerBrackets className="inset-3 z-20" />

					<div className="relative z-10 px-6 py-16 md:px-10 md:py-24">
						<div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
							<span className="eyebrow flex items-center gap-3 text-muted">
								<span aria-hidden className="h-px w-6 bg-accent" />
								05 / Contact
							</span>
							<span className="eyebrow text-muted">
								{site.availability}
							</span>
						</div>

						<Reveal>
							<h2 className="h2 mt-10 max-w-[15ch]">
								Got a brand to build?{" "}
								<span className="text-accent">Let&apos;s talk.</span>
							</h2>
						</Reveal>

						<Reveal delay={100}>
							<div className="mt-10 border-b border-line pb-10">
								<p className="eyebrow text-muted">WhatsApp</p>
								<a
									href={site.socials[0].href}
									target="_blank"
									rel="noopener noreferrer"
									className="group mt-3 inline-flex min-h-[56px] flex-wrap items-center gap-x-4 gap-y-2 text-[clamp(1.9rem,5.4vw,3.5rem)] font-light leading-none tracking-[-0.04em] transition-colors duration-300 hover:text-accent"
								>
									{site.socials[0].display}
									<ArrowUpRight
										aria-hidden
										className="h-7 w-7 shrink-0 text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
									/>
									<span className="sr-only">(opens WhatsApp in a new tab)</span>
								</a>

								<div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
									<span className="eyebrow text-muted">or email</span>
									<a
										href={`mailto:${site.email}`}
										className="inline-flex min-h-[56px] items-center break-words text-lg tracking-[-0.02em] underline decoration-line-strong decoration-1 underline-offset-[5px] transition-colors duration-300 hover:text-accent hover:decoration-accent"
									>
										{site.email}
									</a>
									<CopyEmail email={site.email} />
								</div>
							</div>
						</Reveal>

						<div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-8">
							<Reveal className="md:col-span-5">
								<p className="eyebrow text-muted">Based in</p>
								<p className="mt-3 text-lg leading-snug tracking-[-0.02em]">
									{site.location}
								</p>
								<p className="mt-2 text-sm text-muted">
									Working with clients worldwide, remote-first.
								</p>
							</Reveal>

							<Reveal delay={80} className="md:col-span-7">
								<ul className="border-t border-line">
									{site.socials.slice(1).map((social, index) => (
										<li key={social.label} className="border-b border-line">
											<a
												href={social.href}
												target="_blank"
												rel="noopener noreferrer"
												className="group flex min-h-[56px] items-center justify-between gap-4 py-4"
											>
												<span className="flex items-baseline gap-4">
													<span aria-hidden className="eyebrow text-muted">
														{String(index + 1).padStart(2, "0")}
													</span>
													<span className="flex items-center gap-3 text-lg tracking-[-0.02em] transition-colors duration-300 group-hover:text-accent">
														<SocialIcon
															name={social.label}
															className="h-4 w-4 text-muted transition-colors duration-300 group-hover:text-accent"
														/>
														{social.label}
													</span>
												</span>
												<ArrowUpRight
													aria-hidden
													className="h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
												/>
												<span className="sr-only"> (opens in a new tab)</span>
											</a>
										</li>
									))}
								</ul>
							</Reveal>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
