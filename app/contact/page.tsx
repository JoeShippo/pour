import { pageMetadata } from "@/lib/seo";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import FAQColumns from "@/components/FAQColumns";
import { faqs } from "@/lib/faqs";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/jsonld";

export const metadata = pageMetadata({
  title: "Contact BEVV | Get in Touch | Websites & Marketing for Breweries and Pubs",
  description:
    "Get in touch with BEVV about your brewery, taproom or pub's website, marketing or AI search. The first pint's on us: a free 30-minute intro call and health check.",
  path: "/contact",
});

const links = [
  { label: "Email", value: "hello@bevv.co.uk", href: "mailto:hello@bevv.co.uk" },
  { label: "Instagram", value: "@bevv.agency", href: "https://instagram.com/bevv.agency" },
  { label: "LinkedIn", value: "BEVV on LinkedIn", href: "https://www.linkedin.com/company/bevv" },
  //{ label: "Facebook", value: "@getpoured", href: "https://facebook.com/getpoured" },
];

const reasons = [
  {
    number: "01",
    title: "Trade specialists",
    text: "We only work with breweries, taprooms and pubs. Nobody else. We already know your seasons, your customers and why your hours change for a bank holiday, so you don’t have to explain your industry to us.",
  },
  {
    number: "02",
    title: "Built for you",
    text: "No templates, no off-the-shelf packages and no paying for things you’ll never use. Websites, marketing and AI search made around your venue and the way your trade actually works.",
  },
  {
    number: "03",
    title: "Priced fairly",
    text: "Premium work at a price that won’t make you wince, because every penny’s spoken for right now. If we can’t show how something earns its keep, we won’t sell it to you.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <section className="w-full bg-paper">
        <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-2 lg:items-end lg:gap-16 lg:py-28">
          <h1 className="font-display text-[min(180px,max(9vw,min(28vw,7rem)))] leading-[0.85] tracking-wide text-ink">
            Get in
            <br />
            touch
          </h1>
          <div className="max-w-xl">
            <p className="font-display text-3xl leading-tight tracking-wide text-ink sm:text-4xl">
              The first pint&rsquo;s on us.
            </p>
            <p className="mt-6 text-ink/70">
              Tell us about your brewery, taproom or pub, and what&rsquo;s not
              working online right now. Get in touch for a free 30-minute
              intro call and health check of your website, search and AI
              visibility. We&rsquo;ll get back to you personally, no automated
              &ldquo;one of our team will be in touch shortly.&rdquo;
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-mist">
        <Container className="grid grid-cols-1 gap-12 py-20 lg:grid-cols-[60fr_40fr] lg:gap-16 lg:py-28">
          <div>
            <h2 className="font-display text-3xl leading-tight tracking-wide text-ink sm:text-5xl">
              Tell us what&rsquo;s brewing
            </h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="lg:pl-8">
            <h2 className="font-display text-3xl tracking-wide text-ink">
              Or skip the form
            </h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {links.map((link) => {
                const external = link.href.startsWith("http");

                return (
                  <li key={link.label} className="py-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                      {link.label}
                    </p>
                    <a
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="mt-1 inline-block text-lg font-semibold text-ink transition-colors hover:text-accent"
                    >
                      {link.value}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-ink">
        <Container className="py-20 lg:py-28">
          <h2 className="font-display text-3xl leading-tight tracking-wide text-paper sm:text-5xl">
            Why BEVV
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {reasons.map((reason) => (
              <div key={reason.number} className="border-t border-paper/20 pt-6">
                <p className="font-display text-4xl tracking-wide text-accent">
                  {reason.number}
                </p>
                <h3 className="mt-2 font-display text-3xl tracking-wide text-paper">
                  {reason.title}
                </h3>
                <p className="mt-4 text-paper/70">{reason.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 lg:py-28">
          <h2 className="font-display text-3xl leading-tight tracking-wide text-ink sm:text-5xl">
            Silly Questions? No Such Thing!
          </h2>
          <p className="mt-6 max-w-2xl text-muted">
            Everything we get asked before someone books a chat, with honest
            answers and no sales spin.
          </p>
          <div className="mt-10">
            <FAQColumns faqs={faqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
