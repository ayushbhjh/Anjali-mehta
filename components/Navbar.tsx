"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ivory/90 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="#" className="text-sm font-semibold uppercase tracking-[0.18em] text-navy">
          Anjali Mehta
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-muted transition-colors hover:text-navy">
              {item.label}
            </Link>
          ))}
          <Link
            href="#mentorship-form"
            className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#18345f]"
          >
            Book a Call
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="section-shell border-t border-line/80 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-white hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#mentorship-form"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-navy px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Book a Call
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
