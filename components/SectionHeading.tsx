type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const center = align === "center";

  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-teal">{eyebrow}</p>
      <h2 className="font-[var(--font-display)] text-3xl font-semibold leading-tight text-navy sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
    </div>
  );
}
