import { cn } from "@/lib/utils";

/** Crop-mark corners used on frames and cards. */
export function CornerBrackets({
	className,
	tone = "default",
}: {
	className?: string;
	tone?: "default" | "accent";
}) {
	const edge =
		tone === "accent"
			? "border-accent/80"
			: "border-white/45";

	return (
		<div
			aria-hidden
			className={cn("pointer-events-none absolute inset-2 z-20", className)}
		>
			<span className={cn("absolute left-0 top-0 h-3.5 w-3.5 border-l border-t", edge)} />
			<span className={cn("absolute right-0 top-0 h-3.5 w-3.5 border-r border-t", edge)} />
			<span className={cn("absolute bottom-0 left-0 h-3.5 w-3.5 border-b border-l", edge)} />
			<span className={cn("absolute bottom-0 right-0 h-3.5 w-3.5 border-b border-r", edge)} />
		</div>
	);
}
