import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import JsonLd from "@/components/JsonLd";
import Markdown from "@/components/Markdown";
import PostRow from "@/components/PostRow";
import { formatPostDate, getAllPosts, getPost } from "@/lib/blog";
import { articleJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return { title: "Cellar Notes | BEVV" };

  const base = pageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });

  return {
    ...base,
    openGraph: {
      ...(base.openGraph as object),
      type: "article",
      publishedTime: post.date,
      authors: ["Joe Shipton"],
    } as Metadata["openGraph"],
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const posts = getAllPosts();
  const more = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />

      <section className="w-full bg-paper">
        <Container className="py-16 lg:py-24">
          <Link
            href="/blog"
            className="font-sans text-sm font-semibold uppercase tracking-wide text-muted transition-colors hover:text-accent"
          >
            &larr; Cellar Notes
          </Link>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,7vw,96px)] leading-[0.95] tracking-wide text-ink">
            {post.title}
          </h1>
          <p className="mt-6 text-sm text-muted">
            By Joe Shipton &middot; {formatPostDate(post.date)} &middot; {post.readingMinutes} min read
          </p>
        </Container>
      </section>

      <section className="w-full bg-paper">
        <Container className="pb-16 lg:pb-24">
          <article className="max-w-3xl border-t border-line pt-4 text-lg">
            <Markdown content={post.content} posts={posts} />
            <div className="mt-12">
              <Button href="/contact">Get in touch</Button>
            </div>
          </article>
        </Container>
      </section>

      {more.length > 0 && (
        <section className="bg-mist">
          <Container className="py-16 lg:py-20">
            <h2 className="font-display text-3xl leading-tight tracking-wide text-ink sm:text-5xl">
              Keep reading
            </h2>
            <div className="mt-8">
              {more.map((item) => (
                <PostRow key={item.slug} post={item} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
