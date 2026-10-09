import Container from "@/components/Container";
import PostRow from "@/components/PostRow";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Cellar Notes | Website, SEO & AI Search Advice for Pubs and Breweries | BEVV",
    description:
      "Straight-talking guides on websites, local SEO and AI search for pubs, taprooms and breweries. No jargon, no fluff, and the odd pint reference.",
    path: "/blog",
  }),
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/feed.xml" },
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="w-full bg-paper">
        <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-2 lg:items-end lg:gap-16 lg:py-28">
          <h1 className="font-display text-[min(180px,max(9vw,min(24vw,6rem)))] leading-[0.85] tracking-wide text-ink">
            Cellar
            <br />
            Notes
          </h1>
          <p className="max-w-xl text-ink/70">
            Straight-talking guides on websites, local search and AI for pubs,
            taprooms and breweries. No jargon, no fluff, and the odd pint
            reference.
          </p>
        </Container>
      </section>

      <section className="bg-mist">
        <Container className="py-12 lg:py-16">
          {posts.length > 0 ? (
            posts.map((post) => <PostRow key={post.slug} post={post} />)
          ) : (
            <p className="py-8 text-muted">The first notes are still in the barrel.</p>
          )}
        </Container>
      </section>
    </>
  );
}
