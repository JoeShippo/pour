import Link from "next/link";
import type { Project } from "@/lib/projects";

type Tone = "dark" | "light";

type ProjectCardProps = {
  project: Project;
  number: string;
  tone?: Tone;
  className?: string;
};

const tones = {
  dark: {
    card: "border-paper/30 bg-paper/5",
    divider: "bg-paper/20",
    name: "text-paper",
    meta: "text-paper/70",
    tag: "border-paper/30 text-paper/70",
    link: "text-paper",
  },
  light: {
    card: "border-line bg-mist",
    divider: "bg-line",
    name: "text-ink",
    meta: "text-muted",
    tag: "border-line text-muted",
    link: "text-ink",
  },
};

export default function ProjectCard({
  project,
  number,
  tone = "dark",
  className = "",
}: ProjectCardProps) {
  const t = tones[tone];

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group flex min-h-64 flex-col justify-between rounded-2xl border p-8 transition-colors hover:border-accent ${t.card} ${className}`}
    >
      <p className="font-display text-7xl leading-none tracking-wide text-accent">{number}</p>
      <div>
        <div className={`mb-5 h-px w-full ${t.divider}`} />
        <p className={`font-display text-3xl tracking-wide transition-colors group-hover:text-accent ${t.name}`}>
          {project.name}
        </p>
        <p className={`mt-2 text-sm ${t.meta}`}>
          {project.type} &middot; {project.location.split(",")[0]}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.cardTags.map((tag) => (
            <li
              key={tag}
              className={` text-xs font-semibold uppercase tracking-wide ${t.tag}`}
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className={`mt-4 font-sans text-sm font-semibold uppercase tracking-wide ${t.link}`}>
          Read the case study &rarr;
        </p>
      </div>
    </Link>
  );
}
