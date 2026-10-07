import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { getProject, projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Case study | BEVV" };
  }

  return pageMetadata({
    title: project.metaTitle,
    description: project.metaDescription,
    path: `/work/${project.slug}`,
  });
}

const h2 = "font-display text-3xl leading-tight tracking-wide sm:text-5xl";

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const projectServices = services.filter((service) =>
    project.serviceSlugs.includes(service.slug),
  );

  return (
    <>
      <section className="w-full bg-paper">
        <Container className="pt-20 lg:pt-28 pb-10">
          <div>
            <Link
              href="/work"
              className="font-sans text-sm font-semibold uppercase tracking-wide text-muted transition-colors hover:text-accent"
            >
              &larr; All work
            </Link>
            <h1 className="mt-6 font-display text-[min(180px,max(9vw,min(17vw,4.5rem)))] leading-[0.85] tracking-wide text-ink">
              {project.headline[0]} {project.headline[1]}
            </h1>
          </div>
        </Container>
        <Container className="grid grid-cols-1 gap-10 pb-20 lg:grid-cols-2 lg:items-end lg:gap-16 lg:pb-28">
          <div className="max-w-xl">
            <p className="font-display text-3xl leading-tight tracking-wide text-ink sm:text-4xl">
              {project.tagline}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                sizeSm="md"
              >
                Visit the site
              </Button>
              <Button href="/contact" variant="secondary" size="sm" sizeSm="md">
                Get in touch
              </Button>
            </div>
          </div>

          <div>
            <h2 className={`${h2} text-ink`}>The pub</h2>
            <div className="space-y-5 text-muted">
            {project.client.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          </div>

          
          
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="py-16 lg:py-20">
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 text-center">
            {project.stats.map((stat) => (
              <div key={stat.label} className="max-w-sm">
                <p className="font-display text-6xl leading-none tracking-wide text-accent sm:text-7xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-paper/70">{stat.label}</p>
              </div>
            ))}
          </div>
          {project.statsNote && (
            <p className="mt-10 text-center text-sm text-paper/60">{project.statsNote}</p>
          )}
        </Container>
      </section>


      <section className="border-t border-line bg-paper">
        <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-[40fr_60fr] lg:gap-16 lg:py-28">
          <h2 className={`${h2} text-ink`}>The brief</h2>
          <div className="max-w-2xl space-y-5 text-muted">
            {project.brief.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      {project.quote && (
        <section className="w-full bg-mist">
          <Container className="py-20 lg:py-28">
            <blockquote>
              <p className="font-display text-[clamp(2rem,5vw,72px)] leading-[1.05] tracking-wide text-ink">
                &ldquo;{project.quote.text}&rdquo;
              </p>
              {/* <footer className="mt-6 text-sm text-muted">
                {project.quote.name}, {project.quote.role}
              </footer> */}
            </blockquote>
          </Container>
        </section>
      )}

      <section className="border-t border-line bg-paper">
        <Container className="py-20 lg:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[40fr_60fr] lg:gap-16">
            <h2 className={`${h2} text-ink`}>What we built</h2>
            <div className="max-w-2xl space-y-5 text-muted">
              {project.approach.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-16 space-y-16">
            {project.featureGroups.map((group) => (
              <div
                key={group.title}
                className="grid grid-cols-1 gap-6 border-t border-ink pt-6 lg:grid-cols-[40fr_60fr] lg:gap-16"
              >
                <h3 className="font-display text-3xl tracking-wide text-ink sm:text-4xl">
                  {group.title}
                </h3>
                <ul className="max-w-2xl divide-y divide-line">
                  {group.items.map((item) => (
                    <li key={item.title} className="py-4 first:pt-0">
                      <p className="font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-muted">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {project.tech && project.tech.length > 0 && (
              <div className="grid grid-cols-1 gap-6 border-t border-ink pt-6 lg:grid-cols-[40fr_60fr] lg:gap-16">
                <h3 className="font-display text-3xl tracking-wide text-ink sm:text-4xl">
                  Tech
                </h3>
                <ul className="flex max-w-2xl flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-3 py-1 text-sm text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </section>

      {project.showGallery && project.images && project.images.length > 0 && (
        <section className="w-full bg-mist">
          <Container className="py-20 lg:py-28">
            <h2 className={`${h2} text-ink`}>The site</h2>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
              {project.images.map((image) => (
                <figure key={image.src}>
                  <div className="relative aspect-[1914/994] overflow-hidden rounded-2xl border border-line bg-paper">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <figcaption className="mt-3 max-w-md text-sm text-muted">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-ink text-paper">
        <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-[40fr_60fr] lg:gap-16 lg:py-28">
          <h2 className={h2}>The results</h2>
          <ul className="max-w-2xl space-y-5 text-paper/70">
            {project.results.map((result) => (
              <li
                key={result}
                className="before:mr-3 before:text-accent before:content-['\2014']"
              >
                {result}
              </li>
            ))}
          </ul>
          {project.scores && (
            <div className="lg:col-start-2">
              <div className="max-w-2xl overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <caption className="mb-3 text-left font-sans text-xs font-semibold uppercase tracking-widest text-paper/50">
                    Google Lighthouse, original site &rarr; new site
                  </caption>
                  <thead>
                    <tr className="border-b border-paper/20 text-paper/50">
                      <th scope="col" className="py-3 pr-4 font-semibold">Score</th>
                      <th scope="col" className="py-3 pr-4 font-semibold">Mobile</th>
                      <th scope="col" className="py-3 font-semibold">Desktop</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.scores.map((row) => (
                      <tr key={row.label} className="border-b border-paper/10">
                        <th scope="row" className="py-3 pr-4 font-normal text-paper/70">
                          {row.label}
                        </th>
                        <td className="py-3 pr-4 text-paper">
                          {row.mobile[0]} <span className="text-paper/40">&rarr;</span>{" "}
                          <span className="font-semibold text-accent">{row.mobile[1]}</span>
                        </td>
                        <td className="py-3 text-paper">
                          {row.desktop[0]} <span className="text-paper/40">&rarr;</span>{" "}
                          <span className="font-semibold text-accent">{row.desktop[1]}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </Container>
      </section>

      {projectServices.length > 0 && (
        <section className="border-t border-line bg-mist">
          <Container className="flex flex-wrap items-center gap-x-8 gap-y-3 py-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-muted">
              Services used
            </p>
            {projectServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="font-sans text-sm font-semibold uppercase tracking-wide text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {service.title}
              </Link>
            ))}
          </Container>
        </section>
      )}
    </>
  );
}
