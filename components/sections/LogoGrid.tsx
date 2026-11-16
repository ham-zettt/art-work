"use client";

import Image from "next/image";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { MousePointerClick, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { logos } from "@/data/logos";

export function LogoGrid() {
	const [hintOpen, setHintOpen] = useState(false);
	const [revealed, setRevealed] = useState<string | null>(null);
	const sectionRef = useRef<HTMLElement>(null);
	const reduce = useReducedMotion();

	// Show the tap hint once the section fills the screen (top reaches the header).
	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				setHintOpen(true);
				observer.disconnect();
			},
			{ threshold: 0, rootMargin: "0px 0px -92% 0px" },
		);
		observer.observe(section);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!hintOpen) return;
		const timer = setTimeout(() => setHintOpen(false), 5000);
		return () => clearTimeout(timer);
	}, [hintOpen]);

	// Tap preview: white backdrop + original colors, then back to mono.
	useEffect(() => {
		if (!revealed) return;
		const timer = setTimeout(() => setRevealed(null), 2000);
		return () => clearTimeout(timer);
	}, [revealed]);

	return (
		<section id="logo" ref={sectionRef} className="section">
			<AnimatePresence>
				{hintOpen ? (
					<m.div
						initial={reduce ? false : { opacity: 0, y: -12 }}
						animate={{ opacity: 1, y: 0 }}
						exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
						transition={{
							duration: reduce ? 0.01 : 0.45,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="pointer-events-none fixed inset-x-0 top-[4.5rem] z-40 md:hidden"
					>
						<div className="container-x">
							<div
								role="status"
								aria-live="polite"
								className="pointer-events-auto mx-auto flex w-fit max-w-full items-center gap-2 rounded-2xl bg-accent py-1 pl-4 pr-1 text-black"
							>
								<MousePointerClick
									aria-hidden
									className="h-4 w-4 shrink-0"
								/>
								<p className="caption py-2">
									Tap a logo to Reveal!
								</p>
								<button
									type="button"
									onClick={() => setHintOpen(false)}
									aria-label="Dismiss hint"
									className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-black/70 transition-colors duration-300 hover:bg-black/10 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
								>
									<X aria-hidden className="h-4 w-4" />
								</button>
							</div>
						</div>
					</m.div>
				) : null}
			</AnimatePresence>

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
							<article
								data-revealed={revealed === logo.id}
								className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-[#070707] transition-colors duration-500 hover:border-line-strong"
							>
								<CornerBrackets className="inset-2.5 opacity-50" />

								<div className="relative aspect-square overflow-hidden">
									<div
										aria-hidden
										className="logo-sheet pointer-events-none absolute inset-0 z-[1] bg-white"
									/>
									<button
										type="button"
										onClick={() => {
											setRevealed((current) =>
												current === logo.id
													? null
													: logo.id,
											);
											setHintOpen(false);
										}}
										aria-pressed={revealed === logo.id}
										aria-label={`Reveal ${logo.title} logo`}
										className="absolute inset-0 z-[5] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
									>
										<Image
											src={logo.image}
											alt={`${logo.title} logo`}
											fill
											sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
											loading="lazy"
											className="logo-mono object-contain p-16 transition-transform duration-500 group-hover:scale-[1.04] md:p-24"
										/>
									</button>
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
