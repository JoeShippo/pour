import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd } from "@/lib/jsonld";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Websites, Marketing & AI Search for Breweries and Pubs | POUR",
  description:
    "Custom websites, digital marketing and AI search for breweries, taprooms and pubs. Premium work at a fair price. The first pint's on us.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-ink">
        <Nav
          serviceLinks={services.map((service) => ({
            href: `/services/${service.slug}`,
            label: service.title,
          }))}
        />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <JsonLd data={organizationJsonLd} />
      </body>
    </html>
  );
}
