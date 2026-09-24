import type { Service } from "./types";

export const webDevelopment: Service = {
  slug: "web-development",
  title: "Web Development",
  metaTitle: "Website Design & Development for Breweries, Taprooms and Pubs",
  metaDescription:
    "Custom websites for breweries, taprooms and pubs. Fast, mobile-first, SEO-ready builds on WordPress or headless, with tap lists, bookings and ongoing support.",
  shortDescription:
    "Fast, custom-built websites for breweries, taprooms and pubs - made to get people through the door, not just look nice on a laptop.",
  longDescription:
    "Your website is often the first pint someone has with you. We design and build sites that tell your story properly, load in a flash, and make it dead easy to check what's on, book a table or order a case.\n\nEvery build is made for you, not squeezed into a template - modern architecture, mobile-first, SEO-ready from day one, and backed by support that doesn't vanish after launch. WordPress, headless or something fully custom, we'll pick the right tool for the job and build it to keep working long after we've shipped it. Premium work, priced fairly.",
  image: "/images/opt-1.png",
  hook: "Your website is often the first pint someone has with you.",
  contentIntro: ["Websites for breweries, taprooms and pubs that do more than look pretty on a laptop. We design and build custom websites that tell your story, load in a flash and make it dead easy to check what's pouring, book a table or order a mixed case. We don't start from a template or a theme. Every site is built around your venue, your customers and the way your trade actually works.", "Whether you need a brand new site, a rebuild of one that's past its best, or a shop for your beer club, we build it properly on WordPress, headless or fully custom. Every site is mobile-first, SEO-ready from day one and backed by support that doesn't vanish after launch. It's premium work at a price that won't make you choke on your pint."],
  contentSpecialist: { title: "Hospitality Web Design Specialists", paragraphs: ["We don't build websites for dentists, accountants and the odd pub. We build them for breweries, taprooms and pubs, and nobody else. That means we already know what your customers are looking for: tap lists, opening hours, events, bookings, directions and a reason to pick you over the place down the road.", "We're fluent in the tools your trade runs on, from Untappd and booking platforms to EPOS and beer club subscriptions, and we connect them so your website keeps up with your cellar. You get a site that looks the part, works on a phone with one bar of signal in a beer garden, and actually fills seats."] },
  contentOfferings: { title: "Web Development Services We Offer", description: "Whether you need a site that tells your story, takes bookings or sells beer while you sleep, here's everything we can build for you." },
  subServices: [
    {
      title: "UX/UI Design",
      priority: true,
      shortDescription:
        "Interfaces designed around how people actually order, browse and book.",
      longDescription:
        "We design every screen around real behaviour - how someone scrolls a tap list, books a table for Friday, or hunts for your opening hours with one bar of signal. We map the journeys that matter to your business first, then design an interface that looks the part and gets out of the way. The result feels like your place, and makes the next step obvious.",
    },
    {
      title: "Brand Storytelling Pages",
      priority: true,
      shortDescription:
        "The people, the process and the reason you started, told properly.",
      longDescription:
        "People don't just buy a beer, they buy into the brewery behind it. We build the pages that tell that story - who you are, why you started, the brewers and the kit, how a recipe goes from idea to tap. Written in your voice, backed with proper photography and video where it counts, and structured so both humans and search engines understand what makes you different.",
    },
    {
      title: "Modern Site Architecture",
      shortDescription:
        "Built on solid foundations, not templates stacked on templates.",
      longDescription:
        "Clean, modern architecture underneath every build - fast to load, easy to maintain, and built to grow with your business instead of against it. Opening a second site, launching a beer club or adding a shop later shouldn't mean starting again, so we plan for where you're heading, not just where you are today.",
    },
    {
      title: "Mobile-First Design",
      priority: true,
      shortDescription: "Looks and works right, whatever they're holding.",
      longDescription:
        "Most of your visitors are on their phone in a beer garden, not sat at a desktop. Every build is designed mobile-first and tested across real devices and browsers, so menus are readable, buttons are thumb-sized and bookings work first time - not bolted on as an afterthought once the desktop version is signed off.",
    },
    {
      title: "SEO Foundations",
      priority: true,
      shortDescription: "Built to be found, not just built to look good.",
      longDescription:
        "Search-friendly foundations from day one - structured data, fast load times, sensible page structure, proper meta content and clean code that gives you a real shot at ranking. We set up the technical groundwork so searches like 'brewery near me' or 'dog-friendly pub in town' have something solid to find, rather than leaving SEO as a job for later.",
    },
    {
      title: "WordPress Development",
      priority: true,
      shortDescription:
        "Flexible, content-friendly builds on the platform you already know.",
      longDescription:
        "For brands who want a site they can update themselves without calling us every time, we build on WordPress - customised to you, fast, secure and built properly, not a bargain-bin theme with plugins piled on top. You get an editing experience that makes sense, so adding a new beer, event or blog post takes minutes, not a support ticket.",
    },
    {
      title: "Headless Development",
      shortDescription:
        "Maximum speed and flexibility, for teams who want more control.",
      longDescription:
        "For businesses that need serious performance or a more custom setup, we build headless - separating the front end from the content management behind it. That means lightning-fast pages, tighter security, and the freedom to push the same content to your website, app, taproom screens or anywhere else it needs to go. More control, and plenty of room to grow.",
    },
    {
      title: "Tap List & Menu Integration",
      priority: true,
      shortDescription:
        "Always-current tap lists and menus, without the manual updates.",
      longDescription:
        "Nothing puts people off faster than a website listing a beer that ran dry last month. We connect your site to the tools you already use, like Untappd for Business or your own beer database, so tap lists, food menus and bottle shop stock stay up to date automatically. Change the lines in the cellar, and the website keeps up.",
    },
    {
      title: "Bookings & Events",
      priority: true,
      shortDescription:
        "Table bookings, tours and events that are easy to find and easier to book.",
      longDescription:
        "Brewery tours, tasting sessions, quiz nights, live music, private hire - we build events calendars and booking flows that make it simple to see what's on and grab a spot. We'll integrate with the booking platform you already use, or recommend one that fits, so bookings land in one place and nobody's double-booked.",
    },
    {
      title: "E-commerce & Beer Clubs",
      shortDescription:
        "Online shops and subscriptions that sell while you're pouring.",
      longDescription:
        "From mixed cases and merch to monthly beer club subscriptions, we build online shops that are simple to run and nice to buy from. Age verification, delivery zones, click and collect and recurring payments are all handled properly, so your web shop becomes a reliable revenue stream rather than another thing to babysit.",
    },
    {
      title: "Custom Integrations",
      shortDescription:
        "Connecting your site to the tools you already rely on.",
      longDescription:
        "Booking systems, EPOS, stock, CRM, email platforms, loyalty schemes - whatever your business runs on, we connect it to your website so nothing needs doing twice. Fewer spreadsheets, fewer copy-and-paste jobs, and fewer mistakes when things get busy.",
    },
    {
      title: "Accessibility",
      shortDescription: "Websites everyone can use, not just most people.",
      longDescription:
        "We build to recognised accessibility standards (WCAG) as standard - readable contrast, proper headings, keyboard-friendly navigation and screen reader support. It's the right thing to do, it widens your audience, and it tends to help your search rankings along the way too.",
    },
    {
      title: "Hosting, Performance & Security",
      shortDescription:
        "Fast, secure hosting that stays up when you need it most.",
      longDescription:
        "A slow or broken site on a sunny Saturday costs you real customers. We set you up with quality hosting, SSL, backups, caching and security hardening, then keep an eye on performance so your site stays quick and stays online - even when a new release has everyone checking your page at once.",
    },
    {
      title: "Support & Maintenance",
      priority: true,
      shortDescription: "We don't disappear after launch.",
      longDescription:
        "Ongoing updates, monitoring, fixes and small improvements, so your site keeps working long after we've shipped it - without you needing to think about it. Need a new page for a seasonal release or a tweak before a big event? Drop us a line and it's sorted, by people who already know your site inside out.",
    },
  ],
  faqs: [
    {
      question: "How much does a website cost?",
      answer:
        "Every project is scoped around what you actually need, so there's no one-size price list. We're a premium studio, but we keep things good value - you only pay for what moves your business forward, and we'll give you a clear, fixed quote before any work starts.",
    },
    {
      question: "How long does a website build take?",
      answer:
        "Most builds take between six and twelve weeks from kick-off to launch, depending on the size of the site, the integrations involved and how quickly content comes together. We'll agree a realistic timeline up front, and plan around your busy season rather than through it.",
    },
    {
      question: "Should I choose WordPress or headless?",
      answer:
        "WordPress is ideal if you want a flexible site you can easily update yourself. Headless suits businesses that need top-end speed, more custom functionality or content shared across several places. We'll recommend the right fit for you, not the one that's most fun for us to build.",
    },
    {
      question: "Can I update the website myself?",
      answer:
        "Yes. Every site we build comes with an easy-to-use editor and a walkthrough, so you can change beers, events, menus and news without touching any code. And if you'd rather we handled it, our support plans have you covered.",
    },
  ],
};
