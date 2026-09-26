/**
 * BUSINESS INFORMATION: single source of truth for NAP (name, address, phone),
 * hours, social profiles and the canonical site URL.
 *
 * Used by: footer, contact page, location page, JSON-LD schema, metadata.
 * Change a value here and it updates everywhere on the site.
 *
 * OWNER VERIFICATION REQUIRED (see ADDRESS_VERIFICATION below):
 * The street type ("Pl") and postal code ("L4Z 1V9") were corrected from the old
 * "PI" / "L4Z IV9" spelling. "L4Z IV9" is not a valid Canadian postal code
 * format (the letter I is never used), and public building listings use
 * "55 Village Centre Pl, Mississauga, ON L4Z 1V9". Before launch, confirm this
 * matches the Google Business Profile exactly, including any suite/unit number.
 */

export const SITE_URL = "https://www.bizzonedigital.com";
export const SITE_NAME = "BizzOne Digital";

export const BUSINESS = {
  name: "BizzOne Digital",
  legalName: "BizzOne Digital",
  email: "info@bizzonedigital.com",
  phoneDisplay: "+1 (289) 412-1562",
  /** E.164-style format for tel: links and schema */
  phoneE164: "+1-289-412-1562",
  phoneHref: "tel:+12894121562",
  whatsappNumber: "12894121562",
  address: {
    streetAddress: "55 Village Centre Pl",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: "L4Z 1V9",
    addressCountry: "CA",
    countryName: "Canada",
  },
  /** One-line address shown in the footer and contact page */
  addressLine: "55 Village Centre Pl, Mississauga, ON L4Z 1V9, Canada",
  hours: {
    display: "Monday – Saturday: 9:00 AM – 5:00 PM",
    closed: "Sunday: Closed",
    schema: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "17:00" },
  },
  areaServed: ["Canada", "United States"],
  description:
    "AI automation and digital growth agency offering SEO, paid advertising, social media, web development and app development.",
  googleReviewsUrl: "https://share.google/TRInEQdM2L3d3szfQ",
  mapsQuery: "55 Village Centre Pl, Mississauga, ON L4Z 1V9",
} as const;

export const ADDRESS_VERIFICATION = {
  verifiedAgainstGoogleBusinessProfile: false,
  note: "Confirm street type, postal code and any suite/unit number against the Google Business Profile / Canada Post before launch.",
} as const;

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/Bizzonedigital" },
  { name: "Instagram", href: "https://www.instagram.com/bizzonedigital" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/102540390" },
] as const;

export const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapsQuery)}&output=embed`;
export const googleMapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapsQuery)}`;
export const whatsappUrl = (message = "Hi BizzOne Digital! I'm interested in your services.") =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
