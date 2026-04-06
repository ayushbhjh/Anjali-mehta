import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">404</p>
      <h1 className="mt-3 font-[var(--font-display)] text-4xl font-semibold text-navy">Page not found</h1>
      <p className="mt-4 max-w-lg text-muted">The page you are looking for does not exist or may have been moved.</p>
      <Link href="/" className="mt-8 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-[#18345f]">
        Back to Home
      </Link>
    </main>
  );
}
