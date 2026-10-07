export type ProjectStat = {
  value: string;
  label: string;
};

export type ScoreRow = {
  label: string;
  mobile: [string, string];
  desktop: [string, string];
};

export type ProjectFeature = {
  title: string;
  text: string;
};

export type ProjectFeatureGroup = {
  title: string;
  items: ProjectFeature[];
};

export type Project = {
  slug: string;
  name: string;
  headline: [string, string];
  url: string;
  type: string;
  location: string;
  tagline: string;
  summary: string;
  client: string[];
  metaTitle: string;
  metaDescription: string;
  tags: string[];
  cardTags: string[];
  serviceSlugs: string[];
  stats: ProjectStat[];
  statsNote?: string;
  scores?: ScoreRow[];
  brief: string[];
  approach: string[];
  featureGroups: ProjectFeatureGroup[];
  tech?: string[];
  results: string[];
  quote?: { text: string; name: string; role: string };
  showGallery?: boolean;
  images?: { src: string; alt: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "the-bell-and-bear",
    name: "The Bell & Bear",
    headline: ["The Bell", "& Bear"],
    url: "https://thebellandbear.co.uk",
    type: "Community pub website rebuild",
    location: "Emberton, Buckinghamshire",
    tagline: "From five years of bolted-on plugins to a site people actually enjoy using.",
    summary:
      "A full rebuild of a slow, plugin-heavy WordPress site as a fast custom theme, with bespoke blocks that make What’s On easy to keep up to date.",
    metaTitle: "The Bell & Bear Website Rebuild | Case Study | BEVV",
    metaDescription:
      "How BEVV rebuilt The Bell & Bear’s slow, plugin-heavy WordPress site as a fast custom theme with bespoke blocks, lifting Lighthouse performance to 97.",
    cardTags: ["WordPress", "Custom theme", "Events & food trucks"],
    tags: ["WordPress", "Custom theme", "Gutenberg blocks", "No page builders", "Events & food trucks", "Investors area", "SEO & migration", "Performance"],
    serviceSlugs: ["web-development"],
    stats: [
      {
        value: "61 \u2192 97",
        label: "Performance score on mobile, before and after",
      },
      {
        value: "46 \u2192 97",
        label: "Performance score on desktop, before and after",
      },
    ],
    statsNote: "Google Lighthouse. Work is still ongoing to push the scores higher.",
    scores: [
      { label: "Performance", mobile: ["61", "97"], desktop: ["46", "97"] },
      { label: "Accessibility", mobile: ["76", "93"], desktop: ["82", "93"] },
      { label: "Best practices", mobile: ["96", "100"], desktop: ["96", "100"] },
      { label: "SEO", mobile: ["85", "92"], desktop: ["85", "92"] },
      { label: "Agentic browsing", mobile: ["1/3", "2/3"], desktop: ["1/3", "2/3"] },
    ],
    client: [
      "The Bell & Bear is a community-owned village pub in Emberton, Buckinghamshire. It closed in 2019 and reopened in 2021, saved by more than 80 local investors who together own 100% of it. It has since been named CAMRA Pub of the Year 2026 for Real Ale & Real Cider in the Milton Keynes & North Bucks region.",
      "It’s an award-winning real ale pub with a rotating line-up of food trucks, a resident kitchen, a packed events diary and a shareholder base that needs its own private area. A pub that busy needs a website that keeps up.",
    ],
    brief: [
      "The Bell & Bear’s old website was created when the community was trying to buy the pub. It did its job, then it kept growing. Over five years, plugin after plugin was bolted on, until the site had become slow, hard to use and dependent on out-of-date plugins and themes.",
      "The brief was to replace it with something that looks like the pub (warm, characterful and community-led) and that the team can run themselves. Day-to-day jobs like adding an event, changing opening hours or posting a closure notice had to be quick and impossible to break.",
    ],
    approach: [
      "We tore the old site up and started again. WordPress stayed at the core, because it’s what the team already knows, but everything on top is new: a bespoke block theme with no page-builder plugins, built with native Gutenberg blocks and a strong core style, designed around the way the pub actually works.",
      "Instead of piling on more plugins, we built the tools the pub actually needed, for visitors, for shareholders and for the team.",
    ],
    featureGroups: [
      {
        title: "For visitors",
        items: [
          { title: "Scheduled hero slider", text: "Swipe, arrows and autoplay, with an “On Next” card. Slides go live when published and retire when the event ends." },
          { title: "What’s On diary", text: "Live filters by type and month, list and calendar views, event pop-ups and a next-up card on the homepage." },
          { title: "Food trucks and recurring events", text: "A carousel with upcoming dates per vendor, plus cuisine and type fields." },
          { title: "Live opening status", text: "“Open until 10pm” in the header, handling after-midnight closing, bank holidays and special hours automatically." },
          { title: "Reviews and alerts", text: "A Google reviews carousel fed from a CSV, and schedulable pop-ups like “We’re closed today”." },
          { title: "Contact and newsletter", text: "A spam-protected enquiry form with pre-selectable reasons, and a Mailchimp sign-up that hides itself until it’s connected." },
          { title: "Walking routes", text: "A custom block and admin screen, so routes are easy to publish and keep current." },
          { title: "Consent-first and mobile-first", text: "A cookie banner with Analytics loading only after opt-in, and a responsive design tuned in a dedicated pass." },
        ],
      },
      {
        title: "For shareholders",
        items: [
          { title: "Investors area", text: "A password-protected area that builds itself from AGM records: a current-meeting notice, downloadable documents stored privately with randomised filenames, year-by-year archives, and web forms for notice of attendance and proxy voting." },
        ],
      },
      {
        title: "For the team",
        items: [
          { title: "Quick-links dashboard", text: "What’s live on the site right now, the next events and recent enquiries." },
          { title: "Spreadsheet importer", text: "Paste a food truck rota from Excel and it creates dozens of linked events in one go, with a preview first." },
          { title: "Self-tidying events", text: "Old events move to the bin and are cleared out automatically." },
          { title: "Settings pages", text: "The footer banner, opening hours, special hours and site details, all editable without touching code." },
          { title: "Drag-to-reorder hero slides", text: "Slides live in their own list, so the homepage editor stays short." },
          { title: "An editor that matches the site", text: "Buttons and headings look the same while editing as they do on the front end." },
          { title: "Locked-down Site Editor", text: "A curated page-template list, so the design can’t be accidentally broken." },
        ],
      },
      {
        title: "Under the hood",
        items: [
          { title: "SEO", text: "Structured data for the pub (address, hours and special hours) merged with Yoast, a cleaned-up sitemap, noindex on private areas, and per-page titles and descriptions." },
          { title: "Migration", text: "A redirect map audited against the old site’s live sitemap, including old services, testimonials, events categories and blog posts." },
          { title: "Privacy", text: "A rebuilt privacy policy that updates itself as features switch on." },
          { title: "Delivery", text: "Developed locally, reviewed on a staging server, version-controlled in Git and moved live with Duplicator. It runs behind LiteSpeed caching with a short cache lifetime, so time-sensitive content stays fresh." },
        ],
      },
    ],
    quote: {
      text: "The old site had become a struggle for us to keep up to date. The new one is so much easier to use, and our customers can finally find what\u2019s on at a glance.",
      name: "Joe Shipton",
      role: "Manager of The Bell & Bear and founder of BEVV",
    },
    showGallery: false,
    images: [
      {
        src: "/work/bb/HomepageHero.png",
        alt: "The Bell & Bear homepage with a full-screen photo slider of locals at the bar, an 'On next' event card and What's On and Visit Us buttons.",
        caption: "The homepage hero slider, with the next event surfaced straight away.",
      },
      {
        src: "/work/bb/HomepageWhatsOn.png",
        alt: "A What's On section on The Bell & Bear homepage showing four event and food truck cards on a green background.",
        caption: "What\u2019s On on the homepage, pulled from the same events the team already manage.",
      },
      {
        src: "/work/bb/WhatsOn.png",
        alt: "The What's Happening page with All, Events and Food filters, a month selector, a list and calendar toggle, and event cards.",
        caption: "A full What\u2019s Happening page with filters, a month picker and list or calendar views.",
      },
      {
        src: "/work/bb/FoodTrucks.png",
        alt: "A Food Trucks Who's Who page with a carousel of vendor cards, each with a description and links to their Instagram and Facebook.",
        caption: "A rotating food truck line-up, with a profile and socials for each vendor.",
      },
    ],
    tech: [
      "WordPress block theme",
      "theme.json",
      "Custom static and dynamic Gutenberg blocks",
      "Custom post types",
      "PHP 8",
      "Embla Carousel",
      "Contact Form 7",
      "Flamingo",
      "Mailchimp for WordPress",
      "Yoast SEO",
      "Redirection",
      "FluentSMTP",
      "Cloudflare Turnstile",
      "LiteSpeed Cache",
    ],
    results: [
      "Google Lighthouse performance up from 61 to 97 on mobile and from 46 to 97 on desktop, with accessibility, best practices, SEO and agentic browsing scores all up as well.",
      "Work is ongoing to squeeze those scores further, including image compression and caching.",
      "Early feedback is that the new site is far easier to use, less clunky, and that the information people want is easy to find.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
