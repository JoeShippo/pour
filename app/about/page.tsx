import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";

export const metadata = pageMetadata({
  title: "To Pour or Not | Why POUR | Websites & Marketing for Breweries and Pubs",
  description:
    "Why breweries, taprooms and pubs choose a specialist. Custom websites, marketing and AI search from people who know the trade, at a price that won't make you wince.",
  path: "/about",
});

const stats = [
  { value: "2 a day", label: "pubs closed in Q1 2026", note: 1 },
  { value: "2,400", label: "jobs lost", note: 1 },
  { value: "137", label: "breweries closed in 2025", note: 2 },
  { value: "62%", label: "of local pubs out of reach", note: 3 },
];

function Note({ id }: { id: number }) {
  return (
    <sup className="ml-0.5 text-xs">
      <a href={`#fn-${id}`} className="text-accent hover:underline">
        {id}
      </a>
    </sup>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="w-full bg-paper">
        <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-2 lg:items-end lg:gap-16 lg:py-28">
          <h1 className="font-display text-[min(180px,max(9vw,min(28vw,7rem)))] leading-[0.85] tracking-wide text-ink">
            To Pour
            <br />
            or Not
          </h1>
          <div className="max-w-xl space-y-5 text-ink/70">
            <p>
              Let&rsquo;s not pretend otherwise. It&rsquo;s rough out there. In
              the first three months of 2026, two pubs a day shut their doors
              in England and Wales, taking 2,400 jobs with them.
              <Note id={1} /> Breweries had it just as bad in 2025, with 137
              closing across the UK, nearly three a week.
              <Note id={2} /> Add energy bills that read like a ransom note, a
              tax bill that keeps growing and margins that keep shrinking, and
              it&rsquo;s a wonder anyone&rsquo;s still pouring.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="py-16 lg:py-20">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <p className="font-display text-4xl leading-none tracking-wide text-accent sm:text-5xl">
                  {stat.value}
                  <Note id={stat.note} />
                </p>
                <p className="mt-3 text-sm text-paper/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full bg-paper">
        <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-[40fr_60fr] lg:gap-16 lg:py-28">
          <h2 className="font-display text-3xl leading-tight tracking-wide text-ink sm:text-5xl">
            And the crazy part? Demand isn&rsquo;t the problem.
          </h2>
          <div className="max-w-2xl space-y-5 text-muted">
            <p>
              People still want great local beer and a proper pub. What&rsquo;s
              squeezing the life out of the trade is costs and tax,
              <Note id={1} /> plus the fact that the average independent
              brewery can&rsquo;t get its beer into 62% of the pubs on its own
              doorstep.
              <Note id={3} /> That&rsquo;s exactly why your website, your
              search rankings and your own customers matter more than ever.
              They&rsquo;re the bits of the business nobody else can take away
              from you.
            </p>
            <p>
              If you&rsquo;re still pulling pints, brewing beer or keeping a
              taproom open, you&rsquo;re doing something hard, and you deserve
              better than a website held together with a template and a
              prayer.
            </p>
            <p>
              And yet here you are. The socials are run by whoever&rsquo;s free
              on a Tuesday. The tap list online is three beers out of date.
              And somewhere, a generalist agency is offering to &ldquo;elevate
              your digital presence&rdquo; for a number that makes your head
              brewer wince.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-mist">
        <Container className="py-20 text-center lg:py-28">
          <p className="font-display text-[clamp(3rem,8vw,140px)] leading-[0.9] tracking-wide text-ink">
            So, do you pour, <span className="text-accent">or not?</span>
          </p>
        </Container>
      </section>

      <section className="w-full bg-paper">
        <Container className="py-20 lg:py-28">
          <h2 className="font-display text-3xl leading-tight tracking-wide text-ink sm:text-5xl">The case for pouring</h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            <div className="border-t border-ink pt-6">
              <p className="font-display text-4xl tracking-wide text-accent">01</p>
              <p className="mt-4 text-muted">
                We only work with breweries, taprooms and pubs. Nobody else.
                That means we already know what a flight looks like on a menu,
                why your hours change for a bank holiday, and that
                &ldquo;seasonal&rdquo; isn&rsquo;t a marketing word, it&rsquo;s
                a delivery schedule. A generalist agency will ask you to
                explain your industry before they&rsquo;ve asked what you
                actually need. We skip that bit and get straight to the good
                stuff.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <p className="font-display text-4xl tracking-wide text-accent">02</p>
              <p className="mt-4 text-muted">
                Everything we make is built for you. No templates, no
                off-the-shelf packages, and no paying for things you&rsquo;ll
                never use. We build websites that tell your story and fill
                your diary. We run marketing that gets you found when someone
                searches &ldquo;pub near me&rdquo;. And we make sure the AI
                tools people now ask for recommendations, like ChatGPT and
                Google&rsquo;s AI Overviews, actually know you exist.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <p className="font-display text-4xl tracking-wide text-accent">03</p>
              <p className="mt-4 text-muted">
                It&rsquo;s premium work, priced fairly, because we know every
                penny&rsquo;s spoken for right now. If we can&rsquo;t show how
                something earns its keep, we won&rsquo;t sell it to you. No
                twelve-page brand bibles. No &ldquo;digital
                transformation&rdquo;. And nobody saying &ldquo;synergy&rdquo;
                in a meeting.
              </p>
              <p className="mt-4 text-muted">
                And we&rsquo;ll bring the pints. The first one&rsquo;s on us: a
                free 30-minute intro call and health check, no strings. Then,
                when your project goes live, we&rsquo;ll come down to your bar
                and the first round&rsquo;s on us too.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-[40fr_60fr] lg:gap-16 lg:py-28">
          <h2 className="font-display text-3xl leading-tight tracking-wide sm:text-5xl">
            The case against
          </h2>
          <div className="max-w-2xl space-y-5 text-paper/70">
            <p>
              Here&rsquo;s the honest bit. If you want one supplier for
              everything, from your website to your HR software to your new bar
              stools, we&rsquo;re not that. We do websites, marketing and AI
              search for the drinks and hospitality trade, and we do them
              properly.
            </p>
            <p>
              If that&rsquo;s a narrower brief than you&rsquo;re after, a
              generalist might suit you better. We&rsquo;d rather tell you that
              now than after you&rsquo;ve signed something.
            </p>
          </div>
        </Container>
      </section>

      <section className="w-full bg-paper">
        <Container className="grid grid-cols-1 items-center gap-10 py-20 lg:grid-cols-[40fr_60fr] lg:gap-16 lg:py-28">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-line bg-mist">
            <Image
              src="/images/joe.png"
              alt="Joe, founder of POUR"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl leading-tight tracking-wide text-ink sm:text-5xl">Who&rsquo;s behind the bar</h2>
            <div className="mt-6 max-w-2xl space-y-5 text-muted">
              <p>
                I&rsquo;m Joe. I started POUR because I kept watching
                brilliant breweries and pubs get treated like every other
                small business, handed the same templates, the same jargon and
                the same invoices as an estate agent. But this trade has its
                own rhythm, its own language and its own idea of what
                &ldquo;busy season&rdquo; means. And right now, it needs
                people in its corner who get that.
              </p>
              <p>
                POUR is built around exactly that. It&rsquo;s small enough to
                know your beer list and sharp enough to make it sell. When you
                work with us, you work with me, not an account manager who&rsquo;s
                never set foot in a taproom.
              </p>
              <p className="font-display text-3xl tracking-wide text-ink">
                So, to pour, or not? We think you already know.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact">
                Get Poured
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
