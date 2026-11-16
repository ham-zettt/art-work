"use client";

import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials";

const EASE = [0.22, 1, 0.36, 1] as const;
const STEP = 76;

/** Neutral stand-in for a client photo. Swap for real avatars when available. */
function Avatar() {
	return (
		<svg viewBox="0 0 48 48" aria-hidden className="h-full w-full">
			<rect width="48" height="48" fill="#161616" />
			<circle cx="24" cy="18" r="8.5" fill="#3c3c3c" />
			<path d="M7 48c0-9.4 7.6-17 17-17s17 7.6 17 17z" fill="#3c3c3c" />
		</svg>
	);
}

/**
 * Three-up vertical carousel. The middle slot is the highlight; every two
 * seconds the list moves down one row, a new quote enters on top, and the
 * bottom row drops out.
 */
export function TestimonialCarousel() {
	const reduce = useReducedMotion();
	const [order, setOrder] = useState<number[]>(() => [0, 1, 2]);

	useEffect(() => {
		if (reduce) return;

		const timer = window.setInterval(() => {
			setOrder((prev) => {
				const next =
					(prev[0] - 1 + testimonials.length) % testimonials.length;
				return [next, prev[0], prev[1]];
			});
		}, 2000);

		return () => window.clearInterval(timer);
	}, [reduce]);

	return (
		<div role="group" aria-label="Client testimonials">
			<ul role="list" className="relative h-[228px] overflow-hidden px-2">
				<AnimatePresence initial={false}>
					{order.map((index, slot) => {
						const item = testimonials[index];
						const active = slot === 1;

						return (
							<m.li
								key={item.id}
								initial={{ y: -STEP, scale: 0.94, opacity: 0 }}
								animate={{
									y: slot * STEP,
									scale: active ? 1.035 : 0.955,
									opacity: 1,
								}}
								exit={{ y: 3 * STEP, scale: 0.94, opacity: 0 }}
								transition={{ duration: 0.8, ease: EASE }}
								className="absolute inset-x-2 top-0 h-[68px]"
							>
								<article
									className={`relative flex h-full gap-2.5 overflow-hidden rounded-lg border px-3 py-2 transition-colors duration-500 ${
										active
											? "border-accent/45 bg-black/55"
											: "border-line bg-black/20"
									}`}
								>
									<span
										aria-hidden
										className={`pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,rgba(232,80,2,0.2),transparent_70%)] transition-opacity duration-500 ${
											active ? "opacity-100" : "opacity-0"
										}`}
									/>

									<span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-line-strong">
										<Avatar />
									</span>

									<div className="relative flex min-w-0 flex-1 flex-col">
										<div className="flex items-start justify-between gap-2">
											<p className="min-w-0 truncate text-[0.75rem] font-medium leading-tight">
												{item.name}
											</p>

											<span
												role="img"
												aria-label="Rated 5 out of 5"
												className="flex shrink-0 gap-0.5 text-accent"
											>
												{Array.from({ length: 5 }, (_, star) => (
													<Star
														key={star}
														aria-hidden
														className="h-3 w-3 lg:h-2.5 lg:w-2.5"
														fill="currentColor"
														strokeWidth={1}
													/>
												))}
											</span>
										</div>

										<p className="mt-1 line-clamp-2 text-[0.75rem] leading-[1.3] text-muted">
											{item.quote}
										</p>
									</div>
								</article>
							</m.li>
						);
					})}
				</AnimatePresence>
			</ul>
		</div>
	);
}
