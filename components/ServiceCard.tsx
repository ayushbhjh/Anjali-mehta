import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  outcomes: string[];
};

export default function ServiceCard({ title, description, outcomes }: ServiceCardProps) {
  return (
    <article className="surface-card group h-full p-6 sm:p-7">
      <h3 className="text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{description}</p>
      <ul className="mt-5 space-y-2 text-sm text-ink/90">
        {outcomes.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-[0.42rem] block h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href="#contact"
        className="mt-6 inline-flex items-center text-sm font-semibold text-teal transition-colors duration-300 group-hover:text-navy"
      >
        Learn More
      </Link>
    </article>
  );
}
