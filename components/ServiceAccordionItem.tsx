import Button from "@/components/Button";

type ServiceAccordionItemProps = {
  title: string;
  description: string;
  items: string[];
  href: string;
};

export default function ServiceAccordionItem({
  title,
  description,
  items,
  href,
}: ServiceAccordionItemProps) {
  return (
    <details className="group border-b border-line py-8">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 marker:content-none">
        <h3 className="font-display text-4xl md:text-5xl tracking-wide text-ink transition-colors group-hover:text-accent sm:text-6xl">
          {title}
        </h3>
        <span
          aria-hidden="true"
          className="shrink-0 font-sans text-4xl font-light leading-none text-accent transition-transform duration-200 group-open:rotate-45"
        >
          +
        </span>
      </summary>

      <div className="mt-6 max-w-3xl">
        <p className="leading-relaxed text-muted">{description}</p>
        {items.length > 0 && (
          <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
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
        <div className="mt-6">
          <Button href={href} variant="secondary" size="sm">
            Learn more
          </Button>
        </div>
      </div>
    </details>
  );
}
