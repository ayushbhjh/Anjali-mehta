import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white/70 py-10">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-lg">
          <p className="text-lg font-semibold text-navy">Anjali Mehta</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Personal mentorship and strategic guidance for MBA careers, startups, research publications, and PhD pathways.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-muted">
          <Link href="mailto:anjali@example.com" className="transition-colors hover:text-navy">
            anjali@example.com
          </Link>
          <Link href="https://www.linkedin.com/in/anjali-mehta-du/" target="_blank" className="transition-colors hover:text-navy">
            LinkedIn
          </Link>
          <Link href="#home" className="transition-colors hover:text-navy">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
