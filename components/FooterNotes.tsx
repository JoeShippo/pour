"use client";

import { usePathname } from "next/navigation";
import { pageSources } from "@/lib/sources";

export default function FooterNotes() {
  const sources = pageSources[usePathname()];

  if (!sources) return null;

  return (
    <section className="bg-ink px-6 py-3 2xl:px-16 border-t border-paper/20">
      <ol className="grid grid-cols-1 gap-x-10 gap-y-1 text-xxs leading-relaxed text-paper/60">
        {sources.map((source) => (
          <li key={source.id} id={`fn-${source.id}`} className="scroll-mt-24">
            {source.id}. {source.text}{" "}
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-accent"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
