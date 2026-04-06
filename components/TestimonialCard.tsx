type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export default function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure className="surface-card h-full p-6 sm:p-7">
      <blockquote className="text-sm leading-relaxed text-ink/90 sm:text-base">"{quote}"</blockquote>
      <figcaption className="mt-5 border-t border-line pt-4">
        <p className="font-semibold text-navy">{name}</p>
        <p className="text-sm text-muted">{role}</p>
      </figcaption>
    </figure>
  );
}
