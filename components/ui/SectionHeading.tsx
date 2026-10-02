type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  count?: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  count,
  description,
}: SectionHeadingProps) {
  return (
    <header className="border-t border-line pt-6 md:pt-8">
      <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
        <div>
          {eyebrow ? <p className="eyebrow text-muted">{eyebrow}</p> : null}
          <h2 className="h2 mt-4 flex items-start gap-2">
            <span>{title}</span>
            {count ? (
              <span className="caption mt-2 font-normal text-muted">({count})</span>
            ) : null}
          </h2>
        </div>
        {description ? (
          <p className="lead max-w-md text-muted">{description}</p>
        ) : null}
      </div>
    </header>
  );
}
