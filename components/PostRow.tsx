import Link from "next/link";
import { formatPostDate, type Post } from "@/lib/blog";

export default function PostRow({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid grid-cols-1 gap-3 border-t border-line py-8 transition-colors hover:border-accent lg:grid-cols-[30fr_70fr] lg:gap-16"
    >
      <p className="text-sm text-muted">
        {formatPostDate(post.date)} &middot; {post.readingMinutes} min read
      </p>
      <div>
        <h2 className="font-display text-3xl leading-tight tracking-wide text-ink transition-colors group-hover:text-accent sm:text-4xl">
          {post.title}
        </h2>
        <p className="mt-3 max-w-2xl text-muted">{post.metaDescription}</p>
        <p className="mt-4 font-sans text-sm font-semibold uppercase tracking-wide text-ink">
          Read the note &rarr;
        </p>
      </div>
    </Link>
  );
}
