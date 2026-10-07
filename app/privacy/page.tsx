import { pageMetadata } from "@/lib/seo";
import Container from "@/components/Container";

export const metadata = pageMetadata({
  title: "Privacy Policy | BEVV",
  description:
    "How BEVV collects, uses and protects your personal data when you visit bevv.co.uk or get in touch.",
  path: "/privacy",
});

const lastUpdated = "6 October 2026";
const email = "hello@bevv.co.uk";

const h2 = "font-display text-4xl leading-none tracking-wide text-ink sm:text-5xl";
const list = "list-disc space-y-2 pl-6 marker:text-accent";
const link = "text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent";

export default function PrivacyPage() {
  return (
    <>
      <section className="w-full bg-paper">
        <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-2 lg:items-end lg:gap-16 lg:py-28">
          <h1 className="font-display text-[clamp(3rem,9vw,180px)] leading-[0.85] tracking-wide text-ink">
            Privacy
            <br />
            Policy
          </h1>
          <div className="max-w-xl space-y-3 text-ink/70">
            <p>
              Short version: we collect as little as we can, we only use it to
              run this website and reply to you, and we never sell it.
            </p>
            <p className="text-sm">Last updated {lastUpdated}.</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-mist">
        <Container className="py-20 lg:py-28">
          <div className="max-w-3xl space-y-14 text-muted">
            <div className="space-y-4">
              <h2 className={h2}>Who we are</h2>
              <p>
                This website, bevv.co.uk, is run by Joe Shipton, a sole
                trader trading as BEVV. I&rsquo;m the &ldquo;controller&rdquo;
                of the personal data described here, which means I decide how
                and why it&rsquo;s used. I follow the UK GDPR and the Data
                Protection Act 2018.
              </p>
              <p>
                Questions about this policy or your data? Email{" "}
                <a href={`mailto:${email}`} className={link}>
                  {email}
                </a>
                .
              </p>
            </div>

            <div className="space-y-4">
              <h2 className={h2}>What we collect, and why</h2>
              <p>
                <strong className="text-ink">When you get in touch.</strong>{" "}
                If you use our contact form, we collect your name, your email
                address, the name of your brewery, taproom or pub (if you give
                it), and whatever you write in your message. We use this to
                reply to you and to talk about working together. If you email
                us directly, we keep the email and your address for the same
                reason.
              </p>
              <p>
                <strong className="text-ink">When you browse the site.</strong>{" "}
                We use Vercel Web Analytics to understand how the site is used,
                such as which pages are visited, roughly where visitors are
                from (country level), and what device, browser and referring
                site they used. It doesn&rsquo;t use cookies and doesn&rsquo;t
                track you across other websites or build a profile of you as an
                individual.
              </p>
              <p>
                <strong className="text-ink">Technical data.</strong> Like
                every website, our hosting provider processes basic technical
                information, such as your IP address, to deliver pages and keep
                the site secure.
              </p>
              <p>
                We don&rsquo;t knowingly collect data about children, and this
                site isn&rsquo;t aimed at them.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className={h2}>Our legal basis</h2>
              <ul className={list}>
                <li>
                  <strong className="text-ink">Enquiries:</strong> our
                  legitimate interest in replying to you, and steps you ask us
                  to take before entering a contract.
                </li>
                <li>
                  <strong className="text-ink">Analytics and security:</strong>{" "}
                  our legitimate interest in understanding, improving and
                  protecting our website.
                </li>
                <li>
                  <strong className="text-ink">Legal obligations:</strong>{" "}
                  where we&rsquo;re required to keep or share information by
                  law.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className={h2}>Who we share it with</h2>
              <p>
                We never sell your data. We use a small number of trusted
                providers to run the site, and they only process data on our
                instructions:
              </p>
              <ul className={list}>
                <li>
                  <strong className="text-ink">Resend</strong> delivers the
                  emails sent from our contact form to our inbox.
                </li>
                <li>
                  <strong className="text-ink">Vercel</strong> hosts this
                  website and provides our analytics.
                </li>
              </ul>
              <p>
                We may also share information where the law requires it, or to
                protect our legal rights.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className={h2}>International transfers</h2>
              <p>
                Resend and Vercel may process data in the United States or
                other countries outside the UK. Where they do, we rely on
                appropriate safeguards, such as the UK&rsquo;s approved
                transfer mechanisms and the providers&rsquo; data processing
                terms, so your data is protected to UK standards.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className={h2}>How long we keep it</h2>
              <ul className={list}>
                <li>
                  <strong className="text-ink">Enquiries:</strong> for as long
                  as we need to deal with your message, and up to 12 months
                  afterwards in case you come back to us. If we work together,
                  we&rsquo;ll keep project records for as long as we need to
                  support you and meet our legal and accounting obligations.
                </li>
                <li>
                  <strong className="text-ink">Analytics:</strong> kept by
                  Vercel in aggregated form, in line with their retention
                  policy.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className={h2}>Cookies</h2>
              <p>
                We don&rsquo;t set any cookies for advertising or tracking, and
                our analytics is cookie-free, so you won&rsquo;t see a cookie
                banner. If that changes, we&rsquo;ll update this page and ask
                for your consent where required.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className={h2}>Your rights</h2>
              <p>Under UK data protection law, you have the right to:</p>
              <ul className={list}>
                <li>ask for a copy of the personal data we hold about you</li>
                <li>ask us to correct anything that&rsquo;s wrong</li>
                <li>ask us to delete your data</li>
                <li>ask us to restrict how we use it, or object to us using it</li>
                <li>ask for your data in a portable format</li>
              </ul>
              <p>
                To use any of these, just email{" "}
                <a href={`mailto:${email}`} className={link}>
                  {email}
                </a>
                . We&rsquo;ll respond within one month.
              </p>
              <p>
                If you&rsquo;re unhappy with how we&rsquo;ve handled your data,
                please tell us first so we can put it right. You also have the
                right to complain to the Information Commissioner&rsquo;s
                Office at{" "}
                <a
                  href="https://ico.org.uk/make-a-complaint/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link}
                >
                  ico.org.uk
                </a>
                .
              </p>
            </div>

            <div className="space-y-4">
              <h2 className={h2}>Other websites</h2>
              <p>
                This site links to other websites, such as our social media
                profiles and articles we reference. We&rsquo;re not responsible
                for their privacy practices, so please read their policies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className={h2}>Changes to this policy</h2>
              <p>
                We may update this policy from time to time. The date at the
                top of the page shows when it was last changed.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
