import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { services } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Services | Websites, Marketing & GEO for Breweries and Pubs | POUR",
  description:
    "Custom websites, digital marketing and AI search optimisation for breweries, taprooms and pubs. It's premium work at a fair price, built around your venue.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="w-full bg-paper">
        <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-2 lg:items-end lg:gap-16 lg:py-28">
          <div>
            <h1 className="font-display text-[min(180px,max(9vw,min(28vw,7rem)))] leading-[0.85] tracking-wide text-ink">
              What&rsquo;ll
              <br />
              it be?
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="font-sans text-sm font-semibold uppercase tracking-wide text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <p className="max-w-xl text-ink/70">
            Websites, digital marketing and AI search for breweries, taprooms
            and pubs. Whether you need a new site, a busier diary or a spot in
            ChatGPT&rsquo;s recommendations, we make it for you and we do it
            properly. It&rsquo;s premium work at a price that won&rsquo;t make
            you choke on your pint.
          </p>
        </Container>
      </section>

      {services.map((service, index) => {
        const dark = index % 2 === 0;
        const hasSubServices = service.subServices.length > 0;

        return (
          <section
            key={service.slug}
            className={`flex min-h-[60vh] w-full items-center ${dark ? "bg-ink" : "bg-mist"}`}
          >
            <Container className="grid grid-cols-1 items-center gap-12 py-24 lg:grid-cols-2 lg:gap-16">
              <div>
                <Link href={`/services/${service.slug}`} className="group inline-block">
                  <h2 className={`font-display text-5xl leading-none tracking-wide ${dark ? "text-paper" : "text-ink"} transition-colors group-hover:text-accent md:text-7xl`}>
                    {service.title}
                  </h2>
                </Link>
                <p className={`mt-5 max-w-xl font-display text-2xl leading-tight tracking-wide md:text-3xl ${dark ? "text-paper" : "text-ink"}`}>
                  {service.shortDescription}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="sm"
                    sizeSm="md"
                    className={dark ? "!border-paper !text-paper hover:!bg-paper hover:!text-ink" : ""}
                  >
                    Enquire about {service.title}
                  </Button>
                  <Link
                    href={`/services/${service.slug}`}
                    className={`font-sans text-sm font-semibold uppercase tracking-wide underline underline-offset-4 transition-colors hover:text-accent hover:decoration-accent ${dark ? "text-paper decoration-paper/40" : "text-ink decoration-line"}`}
                  >
                    Full details
                  </Link>
                </div>
              </div>

              {hasSubServices && (
                <div className={`rounded-2xl p-8 shadow-xl sm:p-10 ${dark ? "bg-paper/10 text-paper" : "bg-ink text-paper"}`}>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
                    What&rsquo;s included
                  </p>
                  <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {service.subServices.map((subService) => (
                      <li
                        key={subService.title}
                        className="text-sm text-paper/80 before:mr-2 before:text-accent before:content-['—']"
                      >
                        {subService.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Container>
          </section>
        );
      })}
    </>
  );
}
