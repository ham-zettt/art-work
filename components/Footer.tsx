import { ArrowUp } from "lucide-react";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { site } from "@/data/site";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="pb-6 md:pb-8">
			<div className="container-x">
				<div className="relative flex flex-col gap-8 rounded-xl border border-line px-5 py-6 md:px-7">
					<CornerBrackets className="inset-2.5 opacity-60" />

					<div className="flex flex-wrap items-center justify-between gap-4">
						<div className="flex items-baseline gap-3">
							<span className="text-lg font-medium tracking-[-0.02em]">
								{site.name}
							</span>
							<span aria-hidden className="h-3.5 w-px bg-line-strong" />
							<span className="eyebrow text-muted">
								Logo &amp; Brand Identity
							</span>
						</div>

						<a
							href="#top"
							className="group flex min-h-[44px] items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted transition-colors duration-300 hover:text-fg"
						>
							Back to top
							<ArrowUp
								aria-hidden
								className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
							/>
						</a>
					</div>

					<div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
						<p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
							© {year} {site.name} — {site.location}
						</p>
						<ul className="flex flex-wrap items-center gap-5">
							{site.socials.map((social) => (
								<li key={social.label}>
									<a
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="flex min-h-[32px] items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted transition-colors duration-300 hover:text-accent"
									>
										<SocialIcon name={social.label} className="h-3.5 w-3.5" />
										{social.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
