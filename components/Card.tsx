import Link from "next/link";
import Button from "@/components/Button";

type CardProps = {
  title: string;
  description: string;
  items?: string[];
  meta?: string;
  href?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function Card({
  title,
  description,
  items,
  meta,
  href,
  ctaHref,
  ctaLabel = "Learn more",
}: CardProps) {
  const content = (
    <>
      {meta && (
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-muted">
          {meta}
        </p>
      )}
      <h3 className="font-display text-6xl tracking-wide text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      {items && items.length > 0 && (
        <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
          {items.map((item) => (
            <li
              key={item}
              className="text-sm text-muted before:mr-2 before:text-accent before:content-['—']"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {ctaHref && (
        <div className="mt-6">
          <Button href={ctaHref} variant="secondary" size="sm">
            {ctaLabel}
          </Button>
        </div>
      )}
    </>
  );

  const classes =
    "block h-full border-b border-line bg-paper py-16 transition-colors";

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
