/**
 * CASE STUDIES: scalable structure for client case studies.
 *
 * Rules (from the SEO guide):
 * - Only use real clients whose work exists in this project.
 * - Never invent measurable results. `results` stays empty until the owner
 *   supplies client-approved numbers; the page hides the section when empty.
 * - Quotes must be authentic. The quotes below are copied from the clients'
 *   public Google reviews already shown on this site.
 *
 * To add a case study: add an entry, point images at /public/portfolio files,
 * and list the related service slugs so it is linked from those service pages.
 */

export interface CaseStudyResult {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  /** What the client needed (based on the scope of work actually delivered) */
  brief: string;
  /** Work performed */
  work: string[];
  /** Client-approved measurable results only. Leave empty if none are verified. */
  results: CaseStudyResult[];
  quote?: { text: string; author: string; source: string };
  images: { src: string; alt: string; width: number; height: number }[];
  /** Service slugs this case study relates to (used for internal links) */
  services: string[];
  seoTitle: string;
  seoDescription: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "haven-tint-and-tire",
    client: "Haven Tint & Tire Garage",
    industry: "Automotive services",
    title: "Haven Tint & Tire: Google Ads, Social Media and Brand Content",
    summary:
      "Lead generation with Google Ads, sales process support and consistent social media content for an automotive tint, tire and paint protection garage.",
    brief:
      "Haven needed a steady flow of enquiries for its tint, tire, PPF and ceramic coating services, plus a social presence that showed off the quality of its work.",
    work: [
      "Google Ads lead generation campaigns",
      "Support with the sales and follow-up process",
      "Social media management with branded posts, stories and carousels",
      "Facebook cover and page branding",
      "Short-form video content",
    ],
    results: [],
    quote: {
      text: "They're far and away one of the best teams we've worked with, consistently delivering exceptional results. They've handled everything from lead generation through Google Ads to running our sales process and managing social media, all at a high level.",
      author: "Haven Tint & Tire Garage",
      source: "Google review",
    },
    images: [
      { src: "/portfolio/media/social-media-facebook-cover-haven-tire-garage.webp", alt: "Facebook cover design for Haven Tire Garage by BizzOne Digital", width: 1600, height: 900 },
      { src: "/portfolio/media/social-media-instagram-carousel-haven-ceramic-coating.webp", alt: "Instagram carousel on PPF and ceramic coating for Haven Tint & Tire", width: 1080, height: 1080 },
      { src: "/portfolio/media/social-media-instagram-story-haven-paint-protection-film.webp", alt: "Instagram story promoting paint protection film for Haven Tint & Tire", width: 1080, height: 1080 },
    ],
    services: ["paid-advertising", "social-media-management", "video-editing-and-production"],
    seoTitle: "Haven Tint & Tire Case Study | BizzOne Digital",
    seoDescription:
      "How BizzOne Digital supports Haven Tint & Tire Garage with Google Ads lead generation, social media management and short-form video content.",
  },
  {
    slug: "horizon-driving-school",
    client: "Horizon Driving School",
    industry: "Driver education",
    title: "Horizon Driving School: Logo, Social Media and Video Content",
    summary:
      "A new logo, educational social media content and short-form driving tips videos for an Ontario driving school.",
    brief:
      "Horizon Driving School needed a recognisable brand and helpful content that speaks to new drivers on Ontario roads.",
    work: [
      "Logo design and brand identity",
      "Educational Instagram carousels and stories for new Ontario drivers",
      "Short-form driving tips reels",
    ],
    results: [],
    quote: {
      text: "I love their work. They're very honest, quick, easy, and professional.",
      author: "Horizon Driving School",
      source: "Google review",
    },
    images: [
      { src: "/portfolio/logo/logo-design-horizon-driving-school.webp", alt: "Logo design for Horizon Driving School by BizzOne Digital", width: 1080, height: 1080 },
      { src: "/portfolio/media/social-media-instagram-carousel-horizon-driving-school.webp", alt: "Instagram carousel on Ontario driving tips for Horizon Driving School", width: 1080, height: 1080 },
      { src: "/portfolio/content/video-reel-horizon-driving-school.webp", alt: "Driving tips reel for Horizon Driving School playing on a phone", width: 1080, height: 1080 },
    ],
    services: ["design-and-branding", "social-media-management", "video-editing-and-production", "content-strategy"],
    seoTitle: "Horizon Driving School Case Study | BizzOne Digital",
    seoDescription:
      "Logo design, educational social media content and short-form driving tips videos created by BizzOne Digital for Horizon Driving School.",
  },
  {
    slug: "dollar-customs",
    client: "Dollar Customs",
    industry: "Automotive customization",
    title: "Dollar Customs: Building a Brand From Scratch",
    summary:
      "Logo, website, social media, videography and video editing for an automotive customization business starting from zero.",
    brief:
      "Dollar Customs came to us with no brand assets. They needed everything, from a logo to a website and ongoing content.",
    work: [
      "Logo design and brand identity",
      "Website design and development",
      "Social media management",
      "On-site videography and video editing",
    ],
    results: [],
    quote: {
      text: "We started with BizzOne Digital from absolute scratch. They created our logo, built our website, handled our social media, videography, and video editing, literally everything from start to finish.",
      author: "Dollar Customs",
      source: "Google review",
    },
    images: [
      { src: "/portfolio/logo/logo-design-dollar-customs.webp", alt: "Gold emblem logo design for Dollar Customs by BizzOne Digital", width: 1080, height: 1080 },
    ],
    services: ["design-and-branding", "web-development", "social-media-management", "video-editing-and-production"],
    seoTitle: "Dollar Customs Case Study | BizzOne Digital",
    seoDescription:
      "How BizzOne Digital built the Dollar Customs brand from scratch: logo design, website, social media, videography and video editing.",
  },
];

export const getCaseStudy = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);

export const caseStudiesForService = (serviceSlug: string) =>
  CASE_STUDIES.filter((c) => c.services.includes(serviceSlug)).map(({ slug, client, title, summary }) => ({
    slug,
    client,
    title,
    summary,
  }));

export type CaseStudySummary = ReturnType<typeof caseStudiesForService>[number];
