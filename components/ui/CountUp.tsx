"use client";

import { animate, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type CountUpProps = {
	to: number;
	suffix?: string;
	delay?: number;
	className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function CountUp({ to, suffix = "", delay = 0, className }: CountUpProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const reduce = useReducedMotion();

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		if (reduce) {
			el.textContent = `${to}${suffix}`;
			return;
		}

		const controls = animate(0, to, {
			duration: 0.9,
			delay,
			ease: EASE,
			onUpdate: (value) => {
				el.textContent = `${Math.round(value)}${suffix}`;
			},
		});

		return () => controls.stop();
	}, [to, suffix, delay, reduce]);

	return (
		<span ref={ref} className={className} aria-label={`${to}${suffix}`}>
			0{suffix}
		</span>
	);
}
