"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef } from "react";

const mobileQuery = "(max-width: 639px)";

function clamp(value: number, min: number, max: number) {
	return Math.min(Math.max(value, min), max);
}

export function CenterColorImage({
	className = "",
	alt,
	...props
}: ImageProps) {
	const imageRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const image = imageRef.current;
		const mediaQuery = window.matchMedia(mobileQuery);
		let frame: number | null = null;

		const updateGrayscale = () => {
			frame = null;

			if (!image || !mediaQuery.matches) {
				image?.style.setProperty("--logo-grayscale", "1");
				return;
			}

			const bounds = image.getBoundingClientRect();
			const imageCenter = bounds.top + bounds.height / 2;
			const viewportCenter = window.innerHeight / 2;
			const transitionDistance = Math.max(
				window.innerHeight * 0.35,
				bounds.height * 0.75,
			);
			const distanceFromCenter = Math.abs(imageCenter - viewportCenter);
			const grayscale = clamp(
				distanceFromCenter / transitionDistance,
				0,
				1,
			);

			image.style.setProperty("--logo-grayscale", grayscale.toFixed(3));
		};

		const scheduleUpdate = () => {
			if (frame === null) {
				frame = window.requestAnimationFrame(updateGrayscale);
			}
		};

		scheduleUpdate();
		window.addEventListener("scroll", scheduleUpdate, { passive: true });
		window.addEventListener("resize", scheduleUpdate);
		mediaQuery.addEventListener("change", scheduleUpdate);

		return () => {
			if (frame !== null) {
				window.cancelAnimationFrame(frame);
			}
			window.removeEventListener("scroll", scheduleUpdate);
			window.removeEventListener("resize", scheduleUpdate);
			mediaQuery.removeEventListener("change", scheduleUpdate);
		};
	}, []);

	return (
		<Image
			ref={imageRef}
			{...props}
			alt={alt}
			className={`logo-scroll-color ${className}`.trim()}
		/>
	);
}
