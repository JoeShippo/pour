import Button from "@/components/Button";
import ServiceAccordionItem from "@/components/ServiceAccordionItem";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FAQColumns from "@/components/FAQColumns";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { faqs } from "@/lib/faqs";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

const featuredFaqs = faqs.filter((faq) => faq.featured);

export const metadata = pageMetadata({
  title: "Websites, Marketing & AI Search for Breweries and Pubs | POUR",
  description:
    "Custom websites, digital marketing and AI search for breweries, taprooms and pubs. Premium work at a fair price. The first pint's on us.",
  path: "/",
});

const steps = [
  {
    number: "01",
    title: "The first pint",
    text: "A free 30-minute call and a health check of your website, search and AI visibility. You tell us what\u2019s going on, we tell you honestly what we\u2019d do.",
  },
  {
    number: "02",
    title: "The recipe",
    text: "We put together a clear plan and a fixed quote, built around what you actually need. No surprises, no padding.",
  },
  {
    number: "03",
    title: "The brew",
    text: "We design, build and launch, keeping you in the loop the whole way. You\u2019ll never be left wondering what\u2019s happening.",
  },
  {
    number: "04",
    title: "On tap",
    text: "We don\u2019t vanish after launch. Ongoing support, marketing and reporting, so it keeps working long after we\u2019ve shipped it.",
  },
];

const aiLogos = [
  {
    src: "/images/aiBrands/chatgpt.png",
    alt: "ChatGPT",
    top: "4%",
    left: "6%",
    width: 160,
    height: 46,
    rotate: -8,
    duration: "6s",
    delay: "0s",
  },
  {
    src: "/images/aiBrands/Claude-Logo-PNG-SVG-Vector.png",
    alt: "Claude",
    top: "12%",
    left: "48%",
    width: 210,
    height: 45,
    rotate: 6,
    duration: "7s",
    delay: "0.6s",
  },
  {
    src: "/images/aiBrands/Google_Gemini_logo.svg.webp",
    alt: "Gemini",
    top: "56%",
    left: "10%",
    width: 190,
    height: 70,
    rotate: 10,
    duration: "5.5s",
    delay: "1.1s",
  },
  {
    src: "/images/aiBrands/New_Siri_app_logo.png",
    alt: "Siri",
    top: "60%",
    left: "60%",
    width: 100,
    height: 100,
    rotate: -12,
    duration: "6.5s",
    delay: "0.3s",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(featuredFaqs)} />
      <section className="relative flex h-screen w-full items-center overflow-hidden bg-ink">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/Hero-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative z-10 flex w-full max-w-6xl flex-col items-start gap-6 px-6 2xl:px-16">
          <h1 className="font-display text-[min(220px,max(9vw,min(21vw,5.5rem)))] leading-[0.85] tracking-wide text-paper">
            Who said <br />Beer can&rsquo;t<br /> be <span className="text-accent">sexy?</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/services/web-development" size="sm" sizeSm="md" size2xl="lg" variant="accent">
              Web Development
            </Button>
            <Button href="/services/digital-marketing" size="sm" sizeSm="md" size2xl="lg" variant="accent">
              Digital Marketing
            </Button>
            <Button href="/services/geo-for-hospitality" size="sm" sizeSm="md" size2xl="lg" variant="accent">
              GEO for Hospitality
            </Button>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 z-10 hidden max-w-sm md:block 2xl:bottom-10 2xl:right-16">
          <h2 className="text-2xl font-display leading-relaxed text-paper/90">We Are Pour</h2>
          <p className="text-sm leading-relaxed text-paper/60 mb-3">
            We build websites, run marketing and sort AI search for independent breweries, taprooms and pubs. No agency-speak. No stock photos of laptops.
          </p>
          <p className="text-sm leading-relaxed text-paper/60 mb-3">
            Get in touch and the first pint&rsquo;s on us: a free 30-minute intro call and health check.
          </p>
          <Button variant="accent" size="sm" href="/contact">Get started</Button>
        </div>

      </section>

      <section>
        <Container className="pt-20 md:py-48">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[35fr_65fr] lg:gap-16">
            <div className="relative hidden aspect-[4/5] w-full overflow-hidden rounded-2xl bg-mist md:block">
              <Image
                src="/images/home-temp.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="">
              <h2 className="font-display text-5xl md:text-7xl tracking-wide text-ink">We&rsquo;re POUR</h2>
              <div className="mt-6 space-y-5 text-muted">
                <p>
                  The trade&rsquo;s having a rough time of it. Costs are up, margins are down, and too many websites still look like they were built in the MySpace era. We want to be part of the fix, with premium work at prices that don&rsquo;t sting.
                </p>
                <p>
                  We build the websites and run the marketing that help people find their new favourite pint, and the breweries, taprooms and pubs behind it.
                </p>
                <p>
                  Think of us as the bit of the business you don&rsquo;t have to think about. We take the load off, so you can get back to what you&rsquo;re actually good at.
                </p>
                <h3 className="font-display text-3xl">Why POUR?</h3>
                <p>
                  We only work with breweries, taprooms and pubs, so you&rsquo;ll never have to explain what a firkin is or why bank holidays change everything. Everything we make is built for you. There are no templates, no bloated packages and no paying for things you don&rsquo;t need.
                </p>
                <p>
                  And when people start asking ChatGPT where to drink instead of Google, we make sure your name comes up. We cover websites, marketing and AI search, and we do them properly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="pb-20 md:pb-48">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-16">
            <div className="text-muted">
              <p>
                A website&rsquo;s only as good as the pint it&rsquo;s selling. We build the sites, run the marketing and handle everything in between, so more people find your taproom, order online and turn up thirsty. No agency-speak, no bloated packages. Just work that earns its keep.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Button href="/services" variant="secondary">
                What we do
              </Button>
            </div>
          </div>

          <div className="mt-10 border-t border-line">
            {services.map((service) => (
              <ServiceAccordionItem
                key={service.title}
                title={service.title}
                description={service.shortDescription}
                items={service.subServices.map((subService) => subService.title)}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink">
        <Container className="py-20 lg:py-28">
          <h2 className="font-display text-5xl md:text-7xl leading-none tracking-wide text-paper">
            How we pour
          </h2>
          <p className="mt-6 max-w-2xl text-paper/70">
            No mystery, no drawn-out pitch process. Here&rsquo;s how it goes.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="border-t border-paper/20 pt-6">
                <p className="font-display text-4xl tracking-wide text-accent">
                  {step.number}
                </p>
                <h3 className="mt-2 font-display text-3xl tracking-wide text-paper">
                  {step.title}
                </h3>
                <p className="mt-4 text-paper/70">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/contact" variant="accent">
              Start with a free chat
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-mist">
        <Container className="py-20">
          <h2 className="font-display text-5xl md:text-7xl leading-none tracking-wide text-ink">
            Bottled Projects
          </h2>
          <p className="mt-6 max-w-2xl text-muted">
            We&rsquo;re a new studio, so the shelf&rsquo;s still filling up. The first batch is brewing, and we&rsquo;re looking for a handful of breweries, taprooms and pubs to become founding partners. Could you be the missing ingredient?
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="secondary">
              Be our first batch
            </Button>
          </div>
        </Container>
      </section>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_-10%,rgba(255,90,31,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(0,0,0,0.45))]" />
        <Container className="relative z-10 py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-16">
            <div>
              <h2 className="font-display text-5xl md:text-7xl tracking-wide text-paper">GEO? GE-OH??</h2>
              <h3 className="mt-4 max-w-2xl font-display text-2xl tracking-wide text-accent sm:text-3xl">
                Get found when people ask AI where to drink
              </h3>
              <p className="mt-6 max-w-2xl text-paper/70">
                Drinkers aren&rsquo;t just Googling anymore. They&rsquo;re asking ChatGPT, Google AI Overviews and voice assistants where to grab a decent pint. Our GEO service makes sure your brewery, taproom or pub is easy for AI to read, understand and recommend. We cover everything from structured data and crawlability to answer-led content and ongoing visibility monitoring.
              </p>
              <div className="mt-10">
                <Button href="/services/geo-for-hospitality" variant="accent">
                  Get found by AI
                </Button>
              </div>
            </div>

            <div className="relative hidden h-80 sm:h-96 lg:block">
              {aiLogos.map((logo) => {
                const padding = 32;
                return (
                  <div
                    key={logo.alt}
                    className="absolute flex items-center justify-center rounded-2xl bg-paper shadow-lg shadow-black/30 ring-1 ring-black/5"
                    style={{
                      top: logo.top,
                      left: logo.left,
                      width: logo.width + padding,
                      height: logo.height + padding,
                      animationName: "float",
                      animationDuration: logo.duration,
                      animationDelay: logo.delay,
                      animationTimingFunction: "ease-in-out",
                      animationIterationCount: "infinite",
                      ["--float-rotate" as string]: `${logo.rotate}deg`,
                    }}
                  >
                    <div
                      className="relative"
                      style={{ width: logo.width, height: logo.height }}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes="220px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper">
        <Container className="py-20">
          <h2 className="font-display text-5xl md:text-7xl leading-none tracking-wide text-ink">Silly Questions? No Such Thing!</h2>
          <p className="mt-6 max-w-2xl text-muted">
            Everything we get asked before someone books a chat, with honest answers and no sales spin.
          </p>
          <div className="mt-10">
            <FAQColumns faqs={featuredFaqs} />
          </div>
        </Container>
      </section>


    </>
  );
}
