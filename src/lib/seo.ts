import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/data/site";

export { SITE_URL, SITE_NAME };

/** Default social preview image (1200×630). */
export const DEFAULT_OG_IMAGE = {
  url: "/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "BizzOne Digital: Digital Marketing & AI Automation Agency",
};

/** Absolute canonical URL for a path, always on https://www. */
export function absoluteUrl(path = "/"): string {
  const clean = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return clean === "/" ? SITE_URL : `${SITE_URL}${clean}`;
}

interface BuildMetadataInput {
  /** Full page title exactly as it should appear (not templated). */
  title: string;
  description: string;
  /** Path of the page, e.g. "/about". Used for canonical + og:url. */
  path: string;
  image?: { url: string; width?: number; height?: number; alt?: string };
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

/**
 * One place to build page metadata: unique title/description, self-referencing
 * canonical, Open Graph and Twitter tags. No meta keywords (ignored by Google).
 */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = { width: 1200, height: 630, alt: title, ...image };

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_CA",
      type,
      images: [ogImage],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
