type StatBadgeProps = {
  title: string;
  subtitle: string;
};

export default function StatBadge({ title, subtitle }: StatBadgeProps) {
  return (
    <div className="surface-card flex min-h-28 flex-col justify-center p-5 transition-transform duration-300 hover:-translate-y-1">
      <p className="text-base font-semibold text-navy">{title}</p>
      <p className="mt-1 text-sm text-muted">{subtitle}</p>
    </div>
  );
}
