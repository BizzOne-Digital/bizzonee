/**
 * SITE STATISTICS & CLAIMS: single source of truth for every public number.
 *
 * The SEO audit found the same claim shown with different values on different
 * pages (e.g. businesses served: 100+ on Home, 500+ in the Services strip,
 * 180+ on About; countries: "Canada & the US" vs "12+ countries").
 * All components now read from this file, so the site can never contradict itself.
 *
 * IMPORTANT: none of these values have been verified by the business owner.
 * Where pages disagreed, the most conservative value already published on the
 * site is used until the owner confirms the real figure. Update `value`, then set
 * `verified: true`. Do NOT publish a number you cannot back up.
 */

export interface SiteStat {
  /** Number used by animated counters */
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  verified: boolean;
  /** Why this needs a decision / what was on the site before */
  ownerNote: string;
}

const stat = (s: SiteStat) => s;

export const SITE_STATS = {
  businessesServed: stat({
    value: 100, suffix: "+", label: "Businesses served", verified: false,
    ownerNote: "Was 100+ (Home hero, Trusted By), 500+ (Home services strip) and 180+ (About). Using the conservative 100+ until confirmed.",
  }),
  projectsDelivered: stat({
    value: 500, suffix: "+", label: "Projects delivered", verified: false,
    ownerNote: "Shown on About only. Confirm.",
  }),
  websitesLaunched: stat({
    value: 120, suffix: "+", label: "Sites launched", verified: false,
    ownerNote: "Shown on Web Development (stats + hero copy from the admin panel). Confirm.",
  }),
  appProjectsLaunched: stat({
    value: 120, suffix: "+", label: "Projects launched", verified: false,
    ownerNote: "Shown on App Development. Same number as websites launched: confirm it is correct for apps.",
  }),
  clientRetention: stat({
    value: 98, suffix: "%", label: "Client retention", verified: false,
    ownerNote: "Was 98% on About and 99% on App Development. Using 98% on both until confirmed.",
  }),
  leadsGenerated: stat({
    value: 10, suffix: "M+", label: "Leads generated", verified: false,
    ownerNote: "Shown on About (10M+). An unused data file had 1M+. Confirm.",
  }),
  clientRevenue: stat({
    value: 30, prefix: "$", suffix: "M+", label: "Revenue generated for clients", verified: false,
    ownerNote: "Shown on About. The audit also flagged a '₹250 Crore' figure; it is no longer in the codebase. Confirm $30M+ or remove.",
  }),
  teamMembers: stat({
    value: 25, suffix: "+", label: "Dedicated team members", verified: false,
    ownerNote: "Shown on About. Confirm.",
  }),
} as const;

/** Markets served. Was "Canada & the US" on Home and "12+ countries" on About. */
export const MARKETS_SERVED = {
  short: "Canada & the US",
  long: "Canada and the United States",
  verified: false,
  ownerNote: "Using Canada & the US (matches the Home page and schema areaServed). If you serve 12+ countries, update here and in data/site.ts areaServed.",
} as const;

export const formatStat = (s: SiteStat) => `${s.prefix ?? ""}${s.value}${s.suffix}`;
