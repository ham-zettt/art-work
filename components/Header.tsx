"use client";

import Link from "next/link";
import { AnimatePresence, m } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const socialShort: Record<string, string> = {
	WhatsApp: "WA",
	Instagram: "IG",
	LinkedIn: "IN",
};

export function Header() {
	const [open, setOpen] = useState(false);
	const panelRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!open) return;
		document.body.style.overflow = "hidden";
		panelRef.current?.focus();

		function onKey(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setOpen(false);
				triggerRef.current?.focus();
			}
			if (event.key !== "Tab" || !panelRef.current) return;

			const focusable = panelRef.current.querySelectorAll<HTMLElement>(
				'a[href], button:not([disabled])',
			);
			if (focusable.length === 0) return;
			const first = focusable[0];
			const last = focusable[focusable.length - 1];

			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		}

		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<>
			<header className="fixed inset-x-0 top-0 z-50">
				<div className="container-x">
					<div className="mt-3 flex h-14 items-center gap-2 rounded-full border border-line bg-black/55 pl-1.5 pr-1.5 backdrop-blur-md md:h-16 md:pr-2">
						<button
							ref={triggerRef}
							type="button"
							onClick={() => setOpen(true)}
							aria-expanded={open}
							aria-controls="site-menu"
							aria-label="Open menu"
							className="flex h-11 items-center gap-2.5 rounded-full px-3 text-fg transition-colors duration-300 hover:bg-white/5"
						>
							<span aria-hidden className="grid grid-cols-2 gap-[3px]">
								<span className="h-1 w-1 rounded-[1px] bg-current" />
								<span className="h-1 w-1 rounded-[1px] bg-current" />
								<span className="h-1 w-1 rounded-[1px] bg-current" />
								<span className="h-1 w-1 rounded-[1px] bg-current" />
							</span>
							<span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em]">
								Menu
							</span>
						</button>

						<Link
							href="/"
							className="flex min-w-0 flex-1 items-center justify-center gap-3"
							onClick={() => setOpen(false)}
						>
							<span className="truncate text-[0.95rem] font-medium tracking-[-0.02em]">
								{site.name}
							</span>
							<span aria-hidden className="hidden h-4 w-px bg-line-strong sm:block" />
							<span className="eyebrow hidden truncate text-muted lg:block">
								Logo &amp; Brand Identity
							</span>
						</Link>

						<div className="flex items-center gap-1">
							{site.socials.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.label}
									className="hidden h-11 w-10 items-center justify-center rounded-full font-mono text-[0.625rem] tracking-[0.1em] text-muted transition-colors duration-300 hover:bg-white/5 hover:text-fg md:flex"
								>
									<span aria-hidden>{socialShort[social.label] ?? social.label.slice(0, 2)}</span>
								</a>
							))}
							<a
								href="#contact"
								className="hidden h-11 items-center gap-2 rounded-full bg-fg px-5 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-black transition-colors duration-300 hover:bg-accent md:inline-flex"
							>
								Hire me
								<ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
							</a>
						</div>
					</div>
				</div>
			</header>

			<AnimatePresence>
				{open ? (
					<m.div
						id="site-menu"
						ref={panelRef}
						role="dialog"
						aria-modal="true"
						aria-label="Site menu"
						tabIndex={-1}
						initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
						animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
						exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
						transition={{ duration: 0.55, ease: EASE }}
						className="fixed inset-0 z-[60] overflow-y-auto bg-black focus:outline-none"
					>
						<div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_85%_100%,rgba(193,8,1,0.5),transparent_60%),radial-gradient(60%_50%_at_10%_10%,rgba(232,80,2,0.22),transparent_65%)]" />

						<div className="container-x relative flex min-h-full flex-col py-6">
							<div className="flex items-center justify-between">
								<span className="eyebrow text-muted">Menu</span>
								<button
									type="button"
									onClick={() => {
										setOpen(false);
										triggerRef.current?.focus();
									}}
									aria-label="Close menu"
									className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong transition-colors duration-300 hover:border-accent hover:text-accent"
								>
									<X aria-hidden className="h-4 w-4" />
								</button>
							</div>

							<nav aria-label="Primary" className="mt-14 flex-1 md:mt-20">
								<m.ul
									className="flex flex-col"
									initial="closed"
									animate="open"
									variants={{
										open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
									}}
								>
									{site.nav.map((item, index) => (
										<m.li
											key={item.href}
											variants={{
												closed: { opacity: 0, y: 30 },
												open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
											}}
											className="border-b border-line"
										>
											<a
												href={`/${item.href}`}
												onClick={() => setOpen(false)}
												className="group flex items-baseline justify-between gap-6 py-5 md:py-6"
											>
												<span className="flex items-baseline gap-4">
													<span className="eyebrow text-muted">
														{String(index + 1).padStart(2, "0")}
													</span>
													<span className="text-[clamp(2.25rem,7vw,4.5rem)] font-light leading-[0.95] tracking-[-0.04em] transition-colors duration-300 group-hover:text-accent">
														{item.label}
													</span>
												</span>
												<ArrowUpRight
													aria-hidden
													className="h-6 w-6 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
												/>
											</a>
										</m.li>
									))}
								</m.ul>
							</nav>

							<div className="mt-14 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between">
								<div>
									<p className="eyebrow text-muted">Say hello</p>
									<a
										href={`mailto:${site.email}`}
										onClick={() => setOpen(false)}
										className="mt-2 inline-block text-lg tracking-[-0.02em] underline-offset-4 hover:text-accent hover:underline"
									>
										{site.email}
									</a>
								</div>
								<ul className="flex flex-wrap gap-2">
									{site.socials.map((social) => (
										<li key={social.label}>
											<a
												href={social.href}
												target="_blank"
												rel="noopener noreferrer"
												className="btn-frame"
											>
												{social.label}
												<ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</m.div>
				) : null}
			</AnimatePresence>
		</>
	);
}
