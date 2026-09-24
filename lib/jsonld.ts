import { contactEmail, siteName, siteUrl, socialProfiles } from "@/lib/seo";
import type { Service } from "@/lib/services";
import type { FAQ } from "@/lib/faqs";

const organizationId = `${siteUrl}/#organization`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": organizationId,
      name: siteName,
      url: siteUrl,
      email: contactEmail,
      sameAs: socialProfiles,
      description:
        "Custom websites, digital marketing and AI search optimisation for breweries, taprooms and pubs.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      founder: { "@type": "Person", name: "Joe Shipton" },
      knowsAbout: [
        "Website design and development",
        "Digital marketing",
        "Local SEO",
        "Generative engine optimisation",
        "Hospitality marketing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: "en-GB",
      publisher: { "@id": organizationId },
    },
  ],
};

export function faqJsonLd(faqs: Pick<FAQ, "question" | "answer">[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/${service.slug}#service`,
    name: service.title,
    url: `${siteUrl}/services/${service.slug}`,
    description: service.metaDescription ?? service.shortDescription,
    serviceType: service.title,
    provider: { "@id": organizationId },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    audience: {
      "@type": "Audience",
      audienceType: "Breweries, taprooms and pubs",
    },
    ...(service.subServices.length > 0 && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${service.title} services`,
        itemListElement: service.subServices.map((subService) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: subService.title,
            description: subService.shortDescription,
          },
        })),
      },
    }),
  };
}
