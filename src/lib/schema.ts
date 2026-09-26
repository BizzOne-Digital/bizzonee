/**
 * Schema.org JSON-LD builders. All business facts come from data/site.ts so the
 * structured data always matches the visible NAP.
 *
 * AggregateRating is intentionally NOT included. Add it only once the review
 * count is consistent site-wide, the reviews are visible on the same page and
 * the rating data is verified against Google.
 */
import { BUSINESS, SITE_URL, SOCIAL_LINKS } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const areaServed = BUSINESS.areaServed.map((name) => ({ "@type": "Country", name }));

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-default.jpg`,
    description: BUSINESS.description,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: BUSINESS.hours.schema.days,
        opens: BUSINESS.hours.schema.opens,
        closes: BUSINESS.hours.schema.closes,
      },
    ],
    areaServed,
    sameAs: SOCIAL_LINKS.map((s) => s.href),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: BUSINESS.name,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-CA",
  };
}

export function serviceSchema(input: { name: string; serviceType: string; path: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType,
    provider: { "@id": ORGANIZATION_ID },
    areaServed,
    url: absoluteUrl(input.path),
    description: input.description,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact BizzOne Digital",
    url: absoluteUrl("/contact"),
    mainEntity: { "@id": ORGANIZATION_ID },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    mainEntityOfPage: absoluteUrl(input.path),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    image: input.image ? absoluteUrl(input.image) : `${SITE_URL}/og-default.jpg`,
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
}
