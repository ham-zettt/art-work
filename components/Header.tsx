"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <div className="container-x flex h-16 items-center justify-between md:h-[72px]">
        <Link
          href="/"
          className="h3 relative z-50"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              className="eyebrow text-muted transition-colors duration-200 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-50 flex items-center gap-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="eyebrow">{open ? "Close" : "Menu"}</span>
          <span aria-hidden className="flex w-5 flex-col gap-1">
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 bg-invert-bg text-invert-fg md:hidden"
      >
        <nav
          className="container-x flex h-full flex-col justify-between py-10"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-2">
            {site.nav.map((item) => (
              <li key={item.href} className="border-b border-white/20">
                <a
                  href={`/${item.href}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[clamp(2rem,10vw,3rem)] font-medium leading-[1.05] tracking-[-0.04em]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${site.email}`}
            onClick={() => setOpen(false)}
            className="caption py-3 text-white/60"
          >
            {site.email}
          </a>
        </nav>
      </div>
    </header>
  );
}
