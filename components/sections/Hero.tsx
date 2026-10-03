"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { site } from "@/data/site";

function RotatingWord({ words }: { words: readonly string[] }) {
	const [index, setIndex] = useState(0);
	const reduceMotion = useReducedMotion();

	useEffect(() => {
		if (reduceMotion) return;
		const timeoutId = setTimeout(() => {
			setIndex((current) => (current + 1) % words.length);
		}, 1500);
		return () => clearTimeout(timeoutId);
	}, [index, words.length, reduceMotion]);

	const longest = words.reduce(
		(longestWord, word) =>
			word.length > longestWord.length ? word : longestWord,
		"",
	);

	return (
		<span className="relative inline-block overflow-hidden font-serif italic align-bottom">
			<span aria-hidden className="invisible">
				{longest}
			</span>
			<AnimatePresence initial={false}>
				<motion.span
					key={words[index]}
					className="absolute left-0 top-0 whitespace-nowrap"
					initial={reduceMotion ? false : { y: "100%", opacity: 0 }}
					animate={{ y: "0%", opacity: 1 }}
					exit={
						reduceMotion
							? { opacity: 0 }
							: { y: "-100%", opacity: 0 }
					}
					transition={
						reduceMotion
							? { duration: 0 }
							: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
					}
				>
					{words[index]}
				</motion.span>
			</AnimatePresence>
		</span>
	);
}

export function Hero() {
	return (
		<section
			id="top"
			className="flex min-h-[100svh] flex-col bg-invert-bg text-invert-fg"
		>
			<div className="container-x flex flex-1 flex-col justify-between pt-20 pb-10 md:pt-28 md:pb-12">
				<p
					className="eyebrow animate-fade text-white/60"
					style={{ animationDelay: "0.1s" }}
				>
					{site.eyebrow}
				</p>

				<h1 className="display mt-8 text-[6.5rem] sm:text-[7.2rem] md:text-[8rem] max-w-[5ch] sm:max-w-[15ch]">
					<span className="rise-line">
						<span style={{ animationDelay: "0.15s" }}>
							{site.headlineLines[0]}
						</span>
					</span>
					<span className="rise-line">
						<span style={{ animationDelay: "0.27s" }}>
							{site.headlineLines[1]}{" "}
							<RotatingWord words={site.heroWords} />
						</span>
					</span>
				</h1>

				<div className="mt-16 flex flex-col gap-8 border-t border-white/20 pt-8 md:flex-row md:items-end md:justify-between">
					<p
						className="lead animate-fade max-w-md text-white/70"
						style={{ animationDelay: "0.5s" }}
					>
						{site.heroSubtext}
					</p>

					<div
						className="animate-fade flex flex-wrap gap-3"
						style={{ animationDelay: "0.6s" }}
					>
						<a
							href="#logo"
							className="eyebrow group inline-flex items-center gap-3 border border-invert-fg bg-invert-fg px-6 py-3.5 text-invert-bg transition-colors duration-200 hover:bg-transparent hover:text-invert-fg"
						>
							View Work
							<MoveRight
								aria-hidden
								className="h-4 w-4 transition-transform duration-300 ease-expo group-hover:translate-x-1"
							/>
						</a>
						<a
							href="#contact"
							className="eyebrow group inline-flex items-center gap-3 border border-invert-fg px-6 py-3.5 text-invert-fg transition-colors duration-200 hover:bg-invert-fg hover:text-invert-bg"
						>
							Contact Me
							<PhoneCall aria-hidden className="h-4 w-4" />
						</a>
					</div>
				</div>

				<div
					className="animate-fade mt-12 flex items-center gap-3"
					style={{ animationDelay: "0.75s" }}
				>
					<span className="eyebrow text-white/60">Scroll</span>
					<span aria-hidden className="h-8 w-px bg-white/40" />
				</div>
			</div>
		</section>
	);
}
