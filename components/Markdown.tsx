import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Post } from "@/lib/blog";

function normalise(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function textOf(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(textOf).join("");
  return "";
}

export default function Markdown({ content, posts }: { content: string; posts: Post[] }) {
  function findMentioned(text: string) {
    const wanted = normalise(text);
    if (wanted.length < 12) return undefined;
    return posts.find((post) => normalise(post.title).startsWith(wanted));
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => (
          <h2 className="mt-14 font-display text-3xl leading-tight tracking-wide text-ink sm:text-4xl">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-10 font-display text-2xl leading-tight tracking-wide text-ink sm:text-3xl">
            {children}
          </h3>
        ),
        p: ({ children }) => <p className="mt-5 leading-relaxed text-ink/80">{children}</p>,
        strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
        em: ({ children }) => {
          const post = findMentioned(textOf(children));
          return post ? (
            <Link
              href={`/blog/${post.slug}`}
              className="italic text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
            >
              {children}
            </Link>
          ) : (
            <em>{children}</em>
          );
        },
        a: ({ href = "", children }) =>
          href.startsWith("/") ? (
            <Link href={href} className="text-ink underline decoration-accent underline-offset-4 hover:text-accent">
              {children}
            </Link>
          ) : (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-accent underline-offset-4 hover:text-accent"
            >
              {children}
            </a>
          ),
        ul: ({ className, children }: ComponentProps<"ul">) =>
          className?.includes("contains-task-list") ? (
            <ul className="mt-5 space-y-2 text-ink/80">{children}</ul>
          ) : (
            <ul className="mt-5 list-disc space-y-2 pl-6 text-ink/80 marker:text-accent">{children}</ul>
          ),
        ol: ({ children }) => (
          <ol className="mt-5 list-decimal space-y-2 pl-6 text-ink/80 marker:font-semibold marker:text-accent">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        input: (props: ComponentProps<"input">) => (
          <input {...props} disabled className="mr-3 h-4 w-4 translate-y-0.5 accent-accent" />
        ),
        blockquote: ({ children }) => (
          <blockquote className="mt-6 rounded-r-xl border-l-4 border-accent bg-mist px-6 py-4 text-sm [&_p]:mt-0 [&_p]:text-ink/70">
            {children}
          </blockquote>
        ),
        table: ({ children }) => (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">{children}</table>
          </div>
        ),
        th: ({ children }) => (
          <th className="border-b border-ink px-4 py-3 font-semibold text-ink">{children}</th>
        ),
        td: ({ children }) => (
          <td className="border-b border-line px-4 py-3 align-top text-ink/80">{children}</td>
        ),
        code: ({ children }) => (
          <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-[0.85em] text-ink">{children}</code>
        ),
        hr: () => <hr className="my-10 border-line" />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
