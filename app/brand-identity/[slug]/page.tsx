import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brands, getBrandBySlug } from "@/data/brands";
import { site } from "@/data/site";
import type { GalleryRatio } from "@/types";

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata(
  props: PageProps<"/brand-identity/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const brand = getBrandBySlug(slug);

  if (!brand) return {};

  const title = `${brand.title} — Brand Identity`;

  return {
    title,
    description: brand.tagline,
    alternates: { canonical: `/brand-identity/${brand.slug}` },
    openGraph: {
      type: "article",
      title,
      description: brand.tagline,
      url: `${site.url}/brand-identity/${brand.slug}`,
      images: [
        {
          url: brand.cover,
          width: 1920,
          height: 1080,
          alt: `${brand.title} brand identity cover`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: brand.tagline,
      images: [brand.cover],
    },
  };
}

const ratioClass: Record<GalleryRatio, string> = {
  "16:9": "aspect-video",
  "1:1": "aspect-square",
  "4:5": "aspect-[4/5]",
  full: "aspect-[2/1]",
};

export default async function BrandIdentityPage(
  props: PageProps<"/brand-identity/[slug]">,
) {
  const { slug } = await props.params;
  const brand = getBrandBySlug(slug);

  if (!brand) notFound();

  const index = brands.findIndex((item) => item.slug === brand.slug);
  const hasSiblings = brands.length > 1;
  const previous = brands[(index - 1 + brands.length) % brands.length];
  const next = brands[(index + 1) % brands.length];

  const meta = [
    { label: "Client", value: brand.client },
    { label: "Year", value: brand.year },
    { label: "Services", value: brand.services.join(", ") },
    { label: "Role", value: brand.role },
  ];

  return (
    <article>
      <section className="container-x pt-10 md:pt-16">
        <Link
          href="/#brand-identity"
          className="eyebrow text-muted transition-colors duration-200 hover:text-fg"
        >
          ← Back to projects
        </Link>

        <h1 className="mt-12 max-w-[18ch] text-[clamp(2.5rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.05em]">
          {brand.title}
        </h1>
        <p className="lead mt-6 max-w-2xl text-muted">{brand.tagline}</p>
      </section>

      <div className="container-x mt-12 md:mt-16">
        <div className="relative aspect-video overflow-hidden border border-line bg-surface">
          <Image
            src={brand.cover}
            alt={`${brand.title} brand identity cover`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <section className="container-x mt-16">
        <dl className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label} className="bg-bg p-6">
              <dt className="eyebrow text-muted">{item.label}</dt>
              <dd className="mt-3 text-base leading-relaxed">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-x section">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <h2 className="h3 md:col-span-4">Overview</h2>
          <div className="md:col-span-8 md:max-w-2xl">
            <p className="lead text-muted">{brand.overview}</p>

            {brand.challenge ? (
              <div className="mt-10 border-t border-line pt-6">
                <h3 className="eyebrow text-muted">Challenge</h3>
                <p className="lead mt-4">{brand.challenge}</p>
              </div>
            ) : null}

            {brand.solution ? (
              <div className="mt-10 border-t border-line pt-6">
                <h3 className="eyebrow text-muted">Solution</h3>
                <p className="lead mt-4">{brand.solution}</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="container-x pb-8 md:pb-16">
        <h2 className="h3 border-t border-line pt-6">Gallery</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          {brand.gallery.map((item) => (
            <figure
              key={item.src}
              className={item.ratio === "full" ? "md:col-span-2" : ""}
            >
              <div
                className={`relative overflow-hidden border border-line bg-surface ${
                  ratioClass[item.ratio ?? "16:9"]
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="caption mt-3 text-muted">
                {item.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {hasSiblings ? (
        <section className="container-x section">
          <div className="grid gap-px border border-line bg-line md:grid-cols-2">
            <Link
              href={`/brand-identity/${previous.slug}`}
              className="group bg-bg p-8 transition-colors duration-200 hover:bg-surface md:p-12"
            >
              <p className="eyebrow text-muted">Previous Project</p>
              <p className="h3 mt-6 flex items-center gap-3">
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-expo group-hover:-translate-x-1"
                >
                  ←
                </span>
                {previous.title}
              </p>
            </Link>

            <Link
              href={`/brand-identity/${next.slug}`}
              className="group bg-bg p-8 transition-colors duration-200 hover:bg-surface md:p-12 md:text-right"
            >
              <p className="eyebrow text-muted">Next Project</p>
              <p className="h3 mt-6 flex items-center gap-3 md:justify-end">
                {next.title}
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-expo group-hover:translate-x-1"
                >
                  →
                </span>
              </p>
            </Link>
          </div>
        </section>
      ) : null}

      <section className="bg-invert-bg text-invert-fg">
        <div className="container-x section flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="h2 max-w-[12ch]">
            Have a project like this? Let’s talk.
          </h2>
          <Link
            href="/#contact"
            className="eyebrow border border-invert-fg px-6 py-3.5 transition-colors duration-200 hover:bg-invert-fg hover:text-invert-bg"
          >
            Start a project →
          </Link>
        </div>
      </section>
    </article>
  );
}
