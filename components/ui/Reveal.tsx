"use client";

import { m } from "motion/react";

type RevealProps = {
	children: React.ReactNode;
	className?: string;
	/** Delay in milliseconds. */
	delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
	return (
		<m.div
			data-reveal
			className={className}
			initial={{ opacity: 0, y: 26 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-10%" }}
			transition={{
				duration: 2.0,
				delay: delay / 500,
				ease: [0.22, 1, 0.36, 1],
			}}
		>
			{children}
		</m.div>
	);
}
