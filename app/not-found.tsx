import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col justify-center py-24">
      <p className="eyebrow text-muted">404</p>
      <h1 className="h2 mt-6 max-w-[16ch]">This page could not be found.</h1>
      <p className="lead mt-6 max-w-md text-muted">
        The project or page you are looking for may have moved or no longer
        exists.
      </p>
      <Link
        href="/"
        className="eyebrow mt-10 w-fit border border-line px-6 py-3.5 transition-colors duration-200 hover:bg-fg hover:text-bg"
      >
        Back to home
      </Link>
    </section>
  );
}
