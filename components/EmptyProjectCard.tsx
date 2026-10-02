type EmptyProjectCardProps = {
  number: string;
  label: string;
};

export default function EmptyProjectCard({ number, label }: EmptyProjectCardProps) {
  return (
    <div className="flex min-h-64 flex-col justify-between rounded-2xl border border-dashed border-line p-6 transition-colors hover:border-accent">
      <p className="font-display text-7xl leading-none tracking-wide text-ink/20">{number}</p>
      <div>
        <div className="mb-5 h-px w-full bg-line" />
        <p className="font-display text-2xl tracking-wide text-ink">{label}</p>
        <p className="mt-2 text-sm text-muted">Empty tank. For now.</p>
      </div>
    </div>
  );
}
