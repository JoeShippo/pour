export type SubService = {
  title: string;
  priority?: boolean;
  shortDescription: string;
  longDescription: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  hook?: string;
  subServices: SubService[];
  image?: string;
  // Extra page content - not used by any component yet
  contentIntro?: string[];
  contentSpecialist?: { title: string; paragraphs: string[] };
  contentOfferings?: { title: string; description: string };
  // Optional SEO extras - safe to ignore if your components don't use them yet
  metaTitle?: string;
  metaDescription?: string;
  faqs?: ServiceFaq[];
};
