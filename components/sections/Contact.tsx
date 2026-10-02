import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-invert-bg text-invert-fg"
    >
      <div className="container-x section">
        <Reveal>
          <p className="eyebrow text-white/60">Contact</p>
          <h2 className="h2 mt-6 max-w-[14ch]">Got a brand to build? Let’s talk.</h2>

          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-block text-[clamp(1.4rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.04em] underline-offset-[8px] transition-[text-decoration] duration-200 hover:underline"
          >
            {site.email}
          </a>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="eyebrow text-white/60">Availability</p>
            <p className="lead mt-4">{site.availability}</p>
            <p className="lead mt-2 text-white/60">{site.location}</p>
          </Reveal>

          <Reveal className="md:col-span-8">
            <ul className="border-t border-white/20">
              {site.socials.map((social) => (
                <li key={social.label} className="border-b border-white/20">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4"
                  >
                    <span className="h3">{social.label}</span>
                    <span
                      aria-hidden
                      className="text-white/60 transition-transform duration-300 ease-expo group-hover:translate-x-1 group-hover:text-invert-fg"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
