import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import FooterNotes from "./FooterNotes";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const social = [
  { href: "https://instagram.com/bevv.agency", label: "Instagram", Icon: FaInstagram },
  //{ href: "https://facebook.com/getpoured", label: "Facebook", Icon: FaFacebookF },
  { href: "https://www.linkedin.com/company/bevv", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "mailto:hello@bevv.co.uk", label: "Email", Icon: FaEnvelope },
];

const ctaBackground =
  "bg-[linear-gradient(135deg,var(--color-accent)_0%,var(--color-accent-dark)_100%)]";
const ctaSheen =
  "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(120%_120%_at_15%_-20%,rgba(255,255,255,0.35),transparent_60%)]";

export default function Footer() {
  return (
    <>
      <section className="bg-accent">
        <div className="flex flex-col items-start gap-6 py-15 px-6 2xl:px-16">
          <SectionHeading tone="light">Fancy a pint of this?</SectionHeading>
          <p className="text-paper/80">
            Brewery, taproom or pub, tell us what&rsquo;s going on. The site
            that&rsquo;s seen better days, the tap list nobody updates, the
            quiet Tuesdays. We&rsquo;ll listen, then put a plan together.
          </p>
          <p className="font-display text-2xl tracking-wide text-paper">
            The first pint&rsquo;s on us: a free 30-minute call and a health
            check of your website, search and AI visibility.
          </p>
          <Button href="/contact" variant="secondary" className="!border-paper !text-paper hover:!bg-paper hover:!text-accent">
            Get in touch
          </Button>
        </div>
      </section>

      <footer className="bg-ink">
        <div className="flex flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between 2xl:px-16">
          <div className="max-w-xl">
            <p className="font-display text-2xl tracking-wide text-paper">BEVV</p>
            <p className="mt-1 text-sm text-paper/70">
              Websites and marketing for people who pull pints, not PowerPoints.
            </p>
            <p className="mt-1 text-sm text-paper/70">
              Custom websites, digital marketing and AI search for breweries, taprooms and pubs across the UK. It&rsquo;s made properly, priced fairly and served with care.
            </p>
            <p className="mt-4 text-xs text-paper/70">
                Please drink responsibly. We&rsquo;ll handle the marketing.
              </p>

          </div>
          <div className="flex flex-col items-start gap-5 sm:items-end sm:text-right">
            <Link
              href="/contact"
              className="font-sans text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              Get in touch
            </Link>

            <div className="flex items-center gap-5">
              {social.map((item) => {
                const external = item.href.startsWith("http");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-paper transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
                  >
                    <item.Icon aria-hidden="true" className="h-6 w-6" />
                    <span className="sr-only">{item.label}</span>
                  </a>
                );
              })}
            </div>

            <Link
              href="/privacy"
              className="text-xs text-paper/60 underline underline-offset-4 transition-colors hover:text-accent"
            >
              Privacy Policy
            </Link>

            <p className="text-xs text-paper/60">
              &copy; {new Date().getFullYear()} BEVV. All rights reserved.
            </p>
          </div>
        </div>

      </footer>
      <FooterNotes />
    </>
  );
}
