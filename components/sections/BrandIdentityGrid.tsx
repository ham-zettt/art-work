import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { brands } from "@/data/brands";

export function BrandIdentityGrid() {
  return (
    <section id="brand-identity" className="section">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Case Studies"
            title="Brand Identity"
            count={String(brands.length)}
            description="Full identity projects, from strategy and logo to guidelines and applications."
          />
        </Reveal>

        <Reveal className="mt-16">
          <div className="grid grid-cols-1 border-t border-l border-line sm:grid-cols-2">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brand-identity/${brand.slug}`}
                aria-label={`View project: ${brand.title}`}
                className="group flex flex-col border-r border-b border-line transition-colors duration-200 focus-visible:bg-surface"
              >
                <div className="relative aspect-video overflow-hidden bg-surface">
                  <Image
                    src={brand.cover}
                    alt={`${brand.title} brand identity cover`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-expo group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col border-t border-line p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="h3 underline-offset-4 group-hover:underline">
                      {brand.title}
                    </h3>
                    <span className="caption flex items-center gap-2 whitespace-nowrap text-muted transition-transform duration-300 ease-expo group-hover:translate-x-1">
                      View Project <span aria-hidden>→</span>
                    </span>
                  </div>

                  <p className="caption mt-3 max-w-prose text-muted">
                    {brand.tagline}
                  </p>

                  <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                    {brand.services.map((service) => (
                      <li
                        key={service}
                        className="caption border border-line px-2.5 py-1 text-muted"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
