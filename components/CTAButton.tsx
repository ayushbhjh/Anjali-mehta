import Link from "next/link";
import { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function CTAButton({ href, children, variant = "primary", className = "" }: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const styles =
    variant === "primary"
      ? "bg-navy text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#19345e] focus-visible:ring-navy"
      : "border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-accent hover:text-navy focus-visible:ring-accent";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
