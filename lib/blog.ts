import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  date: string;
  updated?: string;
  readingMinutes: number;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content", "blog");

function readPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const showDrafts = process.env.NODE_ENV === "development";

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .flatMap((file) => {
      const raw = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const { data, content } = matter(raw);

      if (data.draft && !showDrafts) return [];

      const body = content.replace(/^\s*#\s+.+\n/, "").trim();
      const words = body.split(/\s+/).length;
      const title = String(data.title);

      return [
        {
          slug: String(data.slug ?? file.replace(/^\d+-/, "").replace(/\.md$/, "")),
          title,
          metaTitle: String(data.meta_title ?? `${title} | BEVV`),
          metaDescription: String(data.meta_description ?? ""),
          targetKeyword: String(data.target_keyword ?? ""),
          date: String(data.date),
          updated: data.updated ? String(data.updated) : undefined,
          readingMinutes: Math.max(1, Math.round(words / 220)),
          content: body,
        },
      ];
    });
}

export function getAllPosts(): Post[] {
  return readPosts()
    .map((post, index) => ({ post, index }))
    .sort((a, b) => b.post.date.localeCompare(a.post.date) || a.index - b.index)
    .map(({ post }) => post);
}

export function getPost(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function formatPostDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
