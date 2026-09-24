export type FAQ = {
  question: string;
  answer: string;
  featured: boolean;
};

export const faqs: FAQ[] = [
  // --- The basics ---
  {
    question: "Do you only work with breweries and pubs?",
    answer:
      "Pretty much, yeah. Breweries, taprooms, pubs, the odd bottle shop. It's what we know, so it's what we're best at.",
    featured: true,
  },
  {
    question: "Do you work with pubs outside the UK?",
    answer:
      "So far we're UK-focused, but get in touch anyway. We're not precious about postcodes.",
    featured: false,
  },
  {
    question: "Can we meet in person?",
    answer:
      "Where we can, absolutely. There's no better place to talk about your business than at your own bar. Otherwise a video call works just as well, and you can still have a pint in hand.",
    featured: false,
  },
  {
    question: "Who will I actually be working with?",
    answer:
      "Me, Joe. No account managers, no being passed around a team. The person you talk to on day one is the person building your site and running your marketing.",
    featured: true,
  },

  // --- Money and commitment ---
  {
    question: "How much does it cost?",
    answer:
      "Depends what you need. Get in touch and we'll give you a straight answer, not a \"let's hop on a call to discuss pricing.\"",
    featured: true,
  },
  {
    question: "Why don't you have packages?",
    answer:
      "Because no two breweries or pubs are the same. Packages mean paying for things you don't need or missing things you do. We scope everything around you and give you a fixed quote before we start.",
    featured: false,
  },
  {
    question: "What's included in the free health check?",
    answer:
      "A 30-minute call plus a look at your website, search visibility and how AI tools like ChatGPT currently see you. You'll come away with honest pointers you can use, whether you work with us or not.",
    featured: true,
  },
  {
    question: "Do I have to sign a long contract?",
    answer:
      "No. Website builds are a one-off project. For ongoing marketing we agree a sensible starting period so there's time to make a real difference, then it's month to month. We'd rather keep you because it's working.",
    featured: true,
  },
  {
    question: "What's a founding partner?",
    answer:
      "We're new, and we're looking for a handful of breweries, taprooms and pubs to be our first clients and case studies. Founding partners get a lot of attention and a very good deal. Get in touch and we'll tell you more.",
    featured: false,
  },

  // --- Websites ---
  {
    question: "How long does a website take?",
    answer:
      "Usually six to twelve weeks from kickoff to launch, depending on scope. You'll get a proper timeline once we know what you need, and we'll plan around your busy season, not through it.",
    featured: true,
  },
  {
    question: "What if I just want a website, not marketing?",
    answer:
      "Fine by us. Pick what you need. We don't do bundled packages you didn't ask for.",
    featured: false,
  },
  {
    question: "We already have a website. Can you improve it rather than start again?",
    answer:
      "Often, yes. We'll take an honest look first. If it can be fixed, we'll fix it. If it's held together with a template and a prayer, we'll tell you that too.",
    featured: true,
  },
  {
    question: "Will I be able to update the website myself?",
    answer:
      "Yes. You'll get an easy editor and a walkthrough, so changing beers, events and menus takes minutes. If you'd rather we handled it, that's fine too.",
    featured: false,
  },
  {
    question: "Who owns the website once it's built?",
    answer:
      "You do. Your domain, your content, your site. No hostage situations if you ever decide to move on.",
    featured: false,
  },
  {
    question: "Can you connect our tap list, bookings or online shop?",
    answer:
      "Yes. Untappd, booking systems, EPOS, e-commerce, beer club subscriptions. If your business runs on it, we can usually connect it to your website.",
    featured: false,
  },
  {
    question: "Do you handle hosting?",
    answer:
      "We can. We'll set you up with fast, secure hosting and keep an eye on it, so you're not the one getting the call when something goes down on a Saturday.",
    featured: false,
  },
  {
    question: "Do I need to already have branding sorted?",
    answer:
      "Not at all. We'll work with what you've got, whether that's a full brand book or a logo on a beer mat, and make sure your website and marketing look the part.",
    featured: false,
  },

  // --- Marketing and GEO ---
  {
    question: "Can you manage our social media too?",
    answer:
      "We focus on the strategy side. We'll work out what to post, where and why, and give you templates and ideas your team can actually keep up with.",
    featured: false,
  },
  {
    question: "How quickly will I see results from marketing?",
    answer:
      "Paid search can bring people in within days. Local SEO usually starts showing within a few weeks, and bigger organic rankings build over three to six months. We'll be upfront about what to expect.",
    featured: false,
  },
  {
    question: "What does GEO actually mean?",
    answer:
      "Generative Engine Optimisation. Making sure AI tools like ChatGPT and Google AI Overviews recommend you, not just traditional search engines.",
    featured: true,
  },
  {
    question: "Can you guarantee ChatGPT will recommend us?",
    answer:
      "Nobody can honestly guarantee that, and you should be wary of anyone who says they can. What we can do is make you as easy as possible for AI to understand and recommend, then track how it's going.",
    featured: false,
  },
  {
    question: "We already work with an agency. Can you work alongside them?",
    answer:
      "Happily. Some clients hand us everything, others just need us for one piece, like the website or GEO. We'll fit around whoever else you work with.",
    featured: false,
  },
];