import type { Service } from "./types";

export const digitalMarketing: Service = {
  slug: "digital-marketing",
  title: "Digital Marketing",
  metaTitle: "Digital Marketing for Breweries, Taprooms and Pubs | SEO, PPC & Email",
  metaDescription:
    "Digital marketing for breweries, taprooms and pubs. Local SEO, paid search, AI search optimisation, email, social and clear reporting that shows what's working.",
  shortDescription:
    "SEO, paid search, and AI-ready marketing that gets you found - and keeps you found.",
  longDescription:
    "A great beer or a cracking pub only goes so far if people can't find you. From strategy to execution, we run marketing that actually moves the needle - local and organic SEO, paid search, AI search optimisation, email, social and content, plus reporting that shows exactly what's working.\n\nEverything is built around your business, your customers and your season, not a playbook borrowed from another industry. No vanity metrics, no jargon - just more people through the door, more bookings in the diary and more orders in the shop.",
  image: "/images/cask-barrels.jpg",
  hook: "A great beer or a cracking pub only goes so far if people can't find you.",
  contentIntro: ["Digital marketing for breweries, taprooms and pubs that want more people at the bar and fewer quiet Tuesdays. We help independent drinks and hospitality businesses get found, get booked and get remembered. We cover local SEO, paid search, email, social and content, and every campaign is built around your venue, your regulars and your calendar.", "Whether you're launching a new beer, filling the diary for Christmas or turning first-timers into regulars, we plan it, run it and show you exactly what it's doing. We don't report vanity metrics or hide behind jargon. You get clear numbers on bookings, orders and footfall, explained in plain English."],
  contentSpecialist: { title: "Brewery and Pub Marketing Specialists", paragraphs: ["Marketing a pub is nothing like marketing a SaaS company, so we don't pretend it is. We work only with breweries, taprooms and pubs, which means we know your seasons, your customers and the searches that bring them in, like \"pub near me\", \"Sunday roast\" and \"dog-friendly beer garden\".", "We pair long-term SEO with paid search for when you need results now. We also make sure you're ready for how people are starting to search, including AI tools like ChatGPT and Google's AI Overviews. Everything works from one strategy, so your channels back each other up instead of competing for budget."] },
  contentOfferings: { title: "Digital Marketing Services We Offer", description: "Whether you want to get found locally, fill a quiet midweek or build a list of regulars who actually open your emails, here's how we can help." },
  subServices: [
    {
      title: "Marketing Strategy",
      priority: true,
      shortDescription: "A plan built around your business, not a template.",
      longDescription:
        "Before any campaign goes live, we build a strategy around your goals, your customers and your calendar - summer trade, Christmas bookings, new releases, festival season. We look at where you are now, where the quick wins are, and where the bigger opportunities sit, then give you a clear plan with priorities you can actually act on.",
    },
    {
      title: "Local SEO",
      priority: true,
      shortDescription:
        "Showing up when people search for somewhere to drink nearby.",
      longDescription:
        "Most of your customers find you by searching for something close by - 'pub near me', 'brewery taproom in town', 'Sunday roast near me'. We optimise your website, local pages and listings so you show up in the map pack and local results at the moment people are deciding where to go.",
    },
    {
      title: "Organic SEO",
      shortDescription:
        "Long-term visibility that keeps working without a daily budget.",
      longDescription:
        "Keyword research, on-page optimisation, technical fixes and content that earns links - organic SEO builds visibility that compounds over time. We focus on the searches that bring real customers, not just traffic, and keep refining as search behaviour and algorithms change.",
    },
    {
      title: "Paid Search (PPC)",
      priority: true,
      shortDescription:
        "Targeted Google Ads when you need results now.",
      longDescription:
        "When you've got a launch, an event or a quiet midweek to fill, paid search gets you in front of the right people fast. We build and manage Google Ads campaigns with tight targeting, sensible budgets and proper tracking, working from the same strategy as your SEO so the two back each other up instead of competing.",
    },
    {
      title: "AI Search Optimisation",
      priority: true,
      shortDescription:
        "Getting recommended by ChatGPT, Perplexity and AI Overviews.",
      longDescription:
        "As people start asking AI where to drink instead of Googling it, we make sure your business is part of the answer - not left out of it. We shape your content, structured data and online presence so AI tools understand who you are and have good reason to mention you. For the full hospitality-specific approach, see GEO for Hospitality.",
    },
    {
      title: "Google Business Profile",
      priority: true,
      shortDescription:
        "A profile that sells you before anyone clicks through.",
      longDescription:
        "For a lot of customers, your Google Business Profile is the first thing they see - opening hours, photos, reviews, menus and posts. We set it up properly, keep it fresh and use it to promote events and releases, so it does real work for you rather than sitting there half-finished.",
    },
    {
      title: "Content & Storytelling",
      shortDescription:
        "Blogs, guides and stories that earn attention and rankings.",
      longDescription:
        "Brewing notes, new release write-ups, local guides, meet-the-team features - we plan and write content that people genuinely want to read and search engines want to rank. It gives your regulars something to share, gives new customers a reason to trust you, and gives AI tools something worth quoting.",
    },
    {
      title: "Email Marketing",
      priority: true,
      shortDescription: "Emails people actually open, not ones they delete.",
      longDescription:
        "From newsletters and new release announcements to automated welcome, birthday and beer club flows, we write and build email marketing that sounds like you, lands in the inbox, and gives people a reason to come back. We'll set up sign-ups that grow your list and segments that make sure the right people get the right message.",
    },
    {
      title: "Conversion Optimisation",
      shortDescription:
        "Turning more visitors into bookings, orders and regulars.",
      longDescription:
        "Traffic's only useful if it converts. We dig into how people use your site, spot where they drop off, then test and refine the pages, forms and checkout steps that move people from browsing to booking or buying. Small changes, measured properly, that add up to real revenue.",
    },
    {
      title: "Social Media Consulting",
      shortDescription:
        "Guidance and strategy for the channels that suit your brand.",
      longDescription:
        "We help you work out what to post, where, and why - building a social strategy that fits your time and your team, not an unrealistic content calendar. Expect practical templates, content ideas tied to your calendar and honest advice on which platforms are worth your effort.",
    },
    {
      title: "Reviews & Reputation",
      priority: true,
      shortDescription:
        "More good reviews, and a plan for handling the rest.",
      longDescription:
        "Reviews on Google, TripAdvisor and Untappd shape where people go and what AI tools recommend. We help you gather more of them from happy customers, respond in a way that sounds like you, and turn feedback into something useful for the business.",
    },
    {
      title: "Reporting & Analytics",
      priority: true,
      shortDescription: "Real numbers, explained in plain English.",
      longDescription:
        "No vanity metrics or jargon-filled dashboards - just clear reporting on what's working, what isn't, and what we're doing about it. We set up tracking properly from the start (GA4, conversions, call and booking tracking) so every decision is backed by numbers you can trust.",
    },
  ],
  faqs: [
    {
      question: "How long does SEO take to work?",
      answer:
        "Local SEO improvements can start showing within a few weeks, while competitive organic rankings usually build over three to six months. That's why we often pair SEO with paid search early on, so you're getting results while the long-term work takes hold.",
    },
    {
      question: "Do I need to sign a long contract?",
      answer:
        "No. We'd rather keep you because the results are good, not because you're locked in. We'll agree a sensible starting period so there's time to make a real difference, then carry on month by month.",
    },
    {
      question: "What will I actually see in your reports?",
      answer:
        "The numbers that matter to your business - bookings, orders, calls, direction requests and where they came from - plus what we did, what we learned and what's next. All in plain English, with no padding.",
    },
    {
      question: "Can you work alongside our in-house team?",
      answer:
        "Absolutely. Some clients hand us the lot, others want us to handle strategy and the technical bits while their team runs social or email day to day. We'll fit around however you work best.",
    },
  ],
};
