import { pageMetadata } from "@/lib/seo";
import Button from "@/components/Button";
import Link from "next/link";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = pageMetadata({
  title: "Our Work | Websites & Marketing for Breweries and Pubs | POUR",
  description:
    "POUR is new and the first batch is in the tank. We're looking for a few breweries, taprooms and pubs to become our founding partners.",
  path: "/work",
});

const batches = [
  { number: "01", project: projects[0] },
  { number: "02", label: "Your project here" },
  { number: "03", label: "Waiting to be filled" },
];

export default function WorkPage() {
  return (
    <>
      <section className="w-full bg-paper">
        <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-2 lg:items-end lg:gap-16 lg:py-28">
          <h1 className="font-display text-[min(180px,max(9vw,min(17vw,4.5rem)))] leading-[0.85] tracking-wide text-ink">
            We&rsquo;re still
            <br />
            brewing here.
          </h1>
          <div className="max-w-xl">
            <p className="font-display text-3xl leading-tight tracking-wide text-ink sm:text-4xl">
              Could you be the missing ingredient?
            </p>
            <p className="mt-6 text-ink/70">
              Every good brewery starts with an empty tank, and so does every
              good portfolio. POUR is brand new, which means this page is
              waiting for its first batch, and it could be yours.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="sm" sizeSm="md">
                Get in Touch
              </Button>
              <Button href="/services" variant="secondary" size="sm" sizeSm="md">
                Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-mist">
        <Container className="py-20 lg:py-28">
          <h2 className="max-w-4xl font-display text-3xl leading-tight tracking-wide text-ink sm:text-5xl">
            We&rsquo;re looking for a small number of breweries, taprooms and
            pubs to become founding partners.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <div className="border-t border-ink pt-6">
              <p className="font-display text-4xl tracking-wide text-accent">You get</p>
              <p className="mt-4 max-w-lg text-muted">
                A custom website, marketing or AI search work built properly
                from the start, with a lot of attention from people who care
                about getting it right. And the first pint&rsquo;s on us: a
                free 30-minute intro call and health check.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <p className="font-display text-4xl tracking-wide text-accent">We get</p>
              <p className="mt-4 max-w-lg text-muted">
                A great story to tell and a case study we&rsquo;re proud of.
                Everyone walks away happy, and nobody gets a flat pint.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink">
        <Container className="py-20 lg:py-28">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {batches.map((batch) =>
              batch.project ? (
                <ProjectCard key={batch.number} project={batch.project} number={batch.number} />
              ) : (
                <div
                  key={batch.number}
                  className="flex min-h-64 flex-col justify-between rounded-2xl border border-dashed border-paper/30 p-8 transition-colors hover:border-accent"
                >
                  <p className="font-display text-7xl leading-none tracking-wide text-paper/30">
                    {batch.number}
                  </p>
                  <div>
                    <div className="mb-5 h-px w-full bg-paper/20" />
                    <p className="font-display text-3xl tracking-wide text-paper">
                      {batch.label}
                    </p>
                    <p className="mt-2 text-sm text-paper/50">Empty tank. For now.</p>
                  </div>
                </div>
              ),
            )}
          </div>
        </Container>
      </section>


      <section className="bg-paper">
        <Container className="py-20 lg:py-28">
          <p className="font-display text-[clamp(2.5rem,6vw,96px)] leading-[0.95] tracking-wide text-ink">
            If you&rsquo;ve got a good story and you&rsquo;re ready to tell it
            better, <Link
              href="/contact"
              className="text-accent underline decoration-accent/40 underline-offset-8 transition-colors hover:decoration-accent"
            >
              let&rsquo;s talk
            </Link> before
            the spots are gone.
          </p>
        </Container>
      </section>
    </>
  );
}
