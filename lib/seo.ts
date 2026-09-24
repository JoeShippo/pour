import type { Metadata } from "next";

export const siteUrl = "https://get-poured.co.uk";
export const siteName = "POUR";
export const contactEmail = "hello@get-poured.co.uk";
export const socialProfiles = [
  "https://instagram.com/_getpoured",
  "https://www.linkedin.com/company/getpoured",
];

const shareImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "POUR: websites and marketing for breweries, taprooms and pubs",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "en_GB",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage.url],
    },
  };
}
