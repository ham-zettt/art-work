import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { logos } from "@/data/logos";

export function LogoGrid() {
  const hasFiller = logos.length % 2 === 1;

  return (
    <section id="logo" className="section">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Marks"
            title="Logo"
            count={String(logos.length)}
            description="A selection of logo marks made for products, studios, and small businesses."
          />
        </Reveal>

        <Reveal className="mt-16">
          <div className="grid grid-cols-1 border-t border-l border-line sm:grid-cols-2">
            {logos.map((logo) => (
              <article
                key={logo.id}
                className="group flex flex-col border-r border-b border-line"
              >
                <div className="relative aspect-square bg-surface p-10 md:p-14">
                  <Image
                    src={logo.image}
                    alt={`${logo.title} logo`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-contain transition-transform duration-500 ease-expo group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 border-t border-line p-6 md:min-h-[150px] md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="h3">{logo.title}</h3>
                    {logo.category || logo.year ? (
                      <span className="caption whitespace-nowrap text-muted">
                        {[logo.category, logo.year].filter(Boolean).join(" · ")}
                      </span>
                    ) : null}
                  </div>
                  <p className="caption max-w-prose text-muted">
                    {logo.description}
                  </p>
                </div>
              </article>
            ))}

            {hasFiller ? (
              <div
                aria-hidden
                className="hidden border-r border-b border-line bg-bg sm:block"
              />
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
