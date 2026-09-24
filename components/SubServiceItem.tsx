import type { SubService } from "@/lib/services";

export default function SubServiceItem({ subService }: { subService: SubService }) {
  return (
    <details className="group border-b border-line py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl tracking-wide text-ink marker:content-none sm:text-3xl">
        {subService.title}
        <span className="shrink-0 font-sans text-2xl leading-none text-accent transition-transform duration-200 group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 text-sm font-semibold text-accent">
        {subService.shortDescription}
      </p>
      <p className="mt-3 max-w-2xl text-muted">{subService.longDescription}</p>
    </details>
  );
}
