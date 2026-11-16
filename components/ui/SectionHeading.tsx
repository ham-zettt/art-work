type SectionHeadingProps = {
	eyebrow?: string;
	title: string;
	count?: string;
	description?: string;
	number?: string;
};

export function SectionHeading({
	eyebrow,
	title,
	count,
	description,
	number,
}: SectionHeadingProps) {
	return (
		<header className="border-t border-line pt-5 md:pt-6">
			<div className="flex items-center justify-between gap-4 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-muted">
				<span className="flex items-center gap-3">
					<span aria-hidden className="h-px w-6 bg-accent" />
					{number ? `${number} / ` : null}
					{eyebrow ?? "Section"}
				</span>
				{count ? <span className="tabular-nums">({count})</span> : null}
			</div>

			<div className="mt-8 flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
				<h2 className="h2">{title}</h2>
				{description ? (
					<p className="lead max-w-sm text-muted">{description}</p>
				) : null}
			</div>
		</header>
	);
}
