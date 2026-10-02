import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="caption text-muted">
          © {year} {site.name}. All rights reserved.
        </p>
        <a
          href="#top"
          className="caption text-muted transition-colors duration-200 hover:text-fg"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
