"use client";

import Image from "next/image";
import { m, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { CountUp } from "@/components/ui/CountUp";
import { logos } from "@/data/logos";
import { site } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const heroAvatars = logos.slice(0, 3);
const marquee = [...logos, ...logos];

/** Parallax only on fine pointers, large screens, and when motion is allowed. */
function useHeavyMotion() {
	const reduce = useReducedMotion();
	const [fine, setFine] = useState(false);

	useEffect(() => {
		const media = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
		const update = () => setFine(media.matches);
		update();
		media.addEventListener("change", update);
		return () => media.removeEventListener("change", update);
	}, []);

	return Boolean(fine && !reduce);
}

export function Hero() {
	const frameRef = useRef<HTMLDivElement>(null);
	const marqueeRef = useRef<HTMLDivElement>(null);
	const heavy = useHeavyMotion();
	const marqueeVisible = useInView(marqueeRef, { margin: "160px" });

	const { scrollYProgress } = useScroll({
		target: frameRef,
		offset: ["start start", "end start"],
	});
	const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "9%"]);

	return (
		<section id="top" className="relative pb-4 pt-20 md:pt-24">
			<div className="container-x">
				{/* ---------- Framed hero ---------- */}
				<div ref={frameRef} className="relative">
					<m.div
						initial={{ opacity: 0, scale: 0.995 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, ease: EASE }}
						className="relative overflow-hidden rounded-2xl border border-line bg-black"
					>
						<CornerBrackets className="inset-3" />

						<div className="relative grid lg:min-h-[clamp(580px,80svh,840px)] lg:grid-cols-2">
							{/* Photo panel with CSS duotone */}
							<m.figure
								initial={{ clipPath: "inset(0 0 100% 0)" }}
								animate={{ clipPath: "inset(0 0 0% 0)" }}
								transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
								className="relative h-[42svh] min-h-[300px] overflow-hidden bg-black sm:h-[52svh] lg:h-auto"
							>
								<m.div
									className="absolute inset-x-0 -inset-y-[6%]"
									style={heavy ? { y: photoY } : undefined}
								>
									<Image
										src="/images/me.webp"
										alt="Ilham Zakaria, logo and brand identity designer"
										width={1024}
										height={1536}
										loading="eager"
										fetchPriority="high"
										sizes="(min-width: 1024px) 50vw, 100vw"
										className="absolute inset-0 h-full w-full object-cover object-[50%_16%] grayscale brightness-[0.82] contrast-[1.14]"
									/>
								</m.div>

								<div
									aria-hidden
									className="absolute inset-0 bg-[linear-gradient(168deg,#ffb377_0%,#ff7a1a_32%,#e85002_58%,#8a0300_82%,#000000_100%)] mix-blend-multiply"
								/>
								<div
									aria-hidden
									className="absolute inset-0 bg-[radial-gradient(34%_28%_at_50%_25%,rgba(255,214,170,0.28),transparent_74%)] mix-blend-screen"
								/>
								<div
									aria-hidden
									className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_32%,transparent_42%,rgba(0,0,0,0.62)_100%)]"
								/>
								<div
									aria-hidden
									className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent"
								/>

								<figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-5 md:p-7">
									<span className="eyebrow text-white/70">
										Portrait — 2026
									</span>
									<span className="eyebrow text-white/50">
										{site.location}
									</span>
								</figcaption>
							</m.figure>

							{/* Abstract gradient panel */}
							<m.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
								className="hero-mesh relative h-28 overflow-hidden border-t border-line sm:h-40 lg:h-auto lg:border-l lg:border-t-0"
							>
								<span className="eyebrow absolute right-5 top-5 z-10 text-white/60">
									Portfolio / 01
								</span>
								<span className="absolute bottom-5 left-5 z-10 max-w-[16ch] font-mono text-[0.625rem] uppercase leading-relaxed tracking-[0.16em] text-white/45">
									Marks, systems &amp; type
								</span>
							</m.div>

							{/* Glass identity card */}
							<div className="relative z-10 -mt-8 px-3 pb-3 sm:px-5 lg:absolute lg:inset-0 lg:m-0 lg:flex lg:items-center lg:justify-center lg:p-8">
								<m.div
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.75, delay: 0.34, ease: EASE }}
									className="glass relative w-full rounded-xl p-5 sm:p-7 lg:max-w-[880px] lg:p-8"
								>
									<CornerBrackets className="inset-2.5" />

									<div className="flex flex-wrap items-center justify-between gap-3">
										<span className="eyebrow text-muted">
											01 / Hello, I&apos;m
										</span>
										<span className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-fg/80">
											<span
												aria-hidden
												className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(232,80,2,0.9)]"
											/>
											{site.availability}
											<span
												aria-hidden
												className="status-bar ml-1 hidden h-[2px] w-10 bg-accent sm:block"
											/>
										</span>
									</div>

									<div className="mt-5 grid gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-8">
										<div>
											<h1 className="text-[clamp(2.9rem,7.2vw,6.4rem)] font-light leading-[0.88] tracking-[-0.05em]">
												<span className="block overflow-hidden pb-[0.06em]">
													<m.span
														className="block"
														initial={{ y: "110%" }}
														animate={{ y: "0%" }}
														transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
													>
														Ilham
													</m.span>
												</span>
												{" "}
												<span className="block overflow-hidden pb-[0.06em]">
													<m.span
														className="block text-fg/90"
														initial={{ y: "110%" }}
														animate={{ y: "0%" }}
														transition={{ duration: 0.8, delay: 0.52, ease: EASE }}
													>
														Zakaria
													</m.span>
												</span>
											</h1>

											<m.p
												initial={{ opacity: 0, y: 12 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
												className="mt-5 max-w-sm text-sm leading-relaxed text-muted"
											>
												{site.role}. Designing logos and identity systems
												that stay legible everywhere they live.
											</m.p>
										</div>

										<m.div
											initial={{ opacity: 0, y: 14 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.66, ease: EASE }}
											className="flex items-center gap-4 border-t border-line pt-4 md:max-w-[210px] md:flex-col md:items-start md:border-l md:border-t-0 md:pl-6 md:pt-0"
										>
											<div className="flex -space-x-2.5">
												{heroAvatars.map((logo) => (
													<span
														key={logo.id}
														className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-line-strong bg-[#0c0c0c]"
													>
														<Image
															src={logo.image}
															alt={logo.title}
															width={36}
															height={36}
															className="h-full w-full object-contain p-1.5 logo-mono"
														/>
													</span>
												))}
												<span className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-[#0c0c0c] font-mono text-[0.5625rem] tracking-wider text-muted">
													+9
												</span>
											</div>
											<p className="text-xs leading-snug text-muted">
												<span className="block text-base font-medium text-fg">
													<CountUp to={20} suffix="+" delay={0.7} />
												</span>
												projects delivered
											</p>
										</m.div>
									</div>
								</m.div>
							</div>
						</div>

						<a
							href="#services"
							className="absolute bottom-6 right-6 z-20 hidden items-center gap-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:text-fg md:flex"
						>
							Scroll to explore
							<m.span
								aria-hidden
								animate={{ y: [0, 5, 0] }}
								transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
								className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30"
							>
								<ArrowDown className="h-3.5 w-3.5" />
							</m.span>
						</a>
					</m.div>
				</div>

				{/* ---------- CTAs + stats ---------- */}
				<div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-[auto_auto_1fr_1fr]">
					<m.a
						href="#logo"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 0.5, ease: EASE }}
						className="btn-frame justify-between md:justify-center"
					>
						Projects
						<ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
					</m.a>
					<m.a
						href="#contact"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 0.55, ease: EASE }}
						className="btn-frame justify-between md:justify-center"
					>
						Contact
						<ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
					</m.a>

					<m.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 0.6, ease: EASE }}
						className="panel flex min-h-[84px] items-end justify-between gap-3 rounded-xl p-4 md:p-5"
					>
						<span className="text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-none tracking-[-0.04em]">
							<CountUp to={20} suffix="+" delay={0.65} />
						</span>
						<span className="eyebrow max-w-[9ch] text-right leading-relaxed text-muted">
							Projects completed
						</span>
					</m.div>
					<m.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 0.65, ease: EASE }}
						className="panel flex min-h-[84px] items-end justify-between gap-3 rounded-xl p-4 md:p-5"
					>
						<span className="text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-none tracking-[-0.04em]">
							<CountUp to={logos.length} delay={0.7} />
						</span>
						<span className="eyebrow max-w-[9ch] text-right leading-relaxed text-muted">
							Logo marks
						</span>
					</m.div>
				</div>

				{/* ---------- Marquee ---------- */}
				<div ref={marqueeRef} className="mt-14 md:mt-16">
					<div className="flex items-center justify-between gap-4 border-t border-line pt-4">
						<p className="eyebrow text-muted">
							Brands &amp; identities I&apos;ve shaped
						</p>
						<span className="eyebrow text-muted">
							{String(logos.length).padStart(2, "0")} marks
						</span>
					</div>
					<div className="relative mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
						<div
							aria-hidden
							className="marquee-track flex w-max items-center gap-12 opacity-70"
							data-paused={!marqueeVisible}
						>
							{marquee.map((logo, index) => (
								<Image
									key={`${logo.id}-${index}`}
									src={logo.image}
									alt=""
									width={112}
									height={44}
									className="logo-mono h-8 w-auto max-w-[112px] object-contain md:h-9"
									loading="lazy"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
