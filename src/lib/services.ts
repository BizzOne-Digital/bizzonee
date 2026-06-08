import {
  Search,
  Share2,
  Megaphone,
  Code2,
  Bot,
  Palette,
  FileText,
  Clapperboard,
  Video,
  Music2,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string; // card description
  badgeLabel: string;
  badgeValue: string;
  href?: string; // optional custom link (overrides /service/[slug])
  tagline: string; // detail hero subtitle
  overview: string[]; // detail paragraphs
  features: string[]; // "what's included"
}

export const SERVICES: Service[] = [
  {
    slug: "seo",
    icon: Search,
    title: "SEO",
    short: "Get noticed, rank higher and reach the right audience with data-driven SEO.",
    badgeLabel: "Ranking",
    badgeValue: "#1",
    tagline: "Crafted to help brands get noticed, rank higher and reach the right audience.",
    overview: [
      "Our SEO services are built to help brands get noticed, rank higher and reach the right audience. We dive deep into your market, competitors and customer intent to build a strategy that compounds over time.",
      "From technical fixes to content and authority building, we focus on the rankings that actually move revenue — not vanity metrics.",
    ],
    features: ["Technical SEO audit & fixes", "Keyword & intent research", "On-page optimization", "Content strategy & briefs", "Link & authority building", "Monthly ranking reports"],
  },
  {
    slug: "social-media-management",
    icon: Share2,
    title: "Social Media Management",
    short: "Convert followers into customers with tested social strategies.",
    badgeLabel: "Followers",
    badgeValue: "+320%",
    tagline: "Turn leads into customers and build a brand people follow.",
    overview: [
      "By using tested conversion techniques to turn leads into customers, we help you close more deals and make sure your social presence works as hard as you do.",
      "We handle content, scheduling, community management and reporting so your channels stay consistent, on-brand and growing.",
    ],
    features: ["Content calendar & scheduling", "On-brand post design", "Community management", "Hashtag & growth strategy", "Engagement & DMs", "Monthly performance reports"],
  },
  {
    slug: "meta-paid-advertising",
    icon: Megaphone,
    title: "Meta Paid Advertising",
    short: "Targeted Meta ads with persuasive messaging and strategic placement.",
    badgeLabel: "ROI",
    badgeValue: "+300%",
    tagline: "Targeted Meta ads that drive leads, sales and lasting growth.",
    overview: [
      "We create targeted Meta ads that combine persuasive messaging, professional visuals and strategic placements to drive leads, sales and lasting growth.",
      "Every campaign is built around clear KPIs, tested relentlessly and scaled only when the numbers prove out.",
    ],
    features: ["Audience research & targeting", "Ad creative & copy", "Campaign setup & structure", "A/B testing & scaling", "Pixel & conversion tracking", "Weekly spend & CPL reporting"],
  },
  {
    slug: "website-design-and-development",
    icon: Code2,
    title: "Website Design & Development",
    short: "Visually stunning, fast, modern sites built to elevate your brand.",
    badgeLabel: "Performance",
    badgeValue: "98%",
    href: "/web-development",
    tagline: "A visually stunning, fully optimized and modern site built to elevate your brand.",
    overview: [
      "Our website design and development service delivers a visually stunning, fully optimized and modern site built to elevate your brand and convert visitors into customers.",
      "Fast, responsive and SEO-ready — every site is engineered for performance on every device.",
    ],
    features: ["Custom UI/UX design", "Responsive development", "Performance & speed optimization", "SEO-ready structure", "CMS / easy editing", "Launch & support"],
  },
  {
    slug: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    short: "Streamline operations and enable smarter decisions with automation.",
    badgeLabel: "Efficiency",
    badgeValue: "+200%",
    tagline: "Streamline activities, automate operations and enable smarter decision-making.",
    overview: [
      "Our automation service streamlines your activities, automates operations and enables smarter decision-making. We don't simply add AI — we design systems that fit how your business actually works.",
      "From CRM and lead routing to follow-ups and reporting, we put the repetitive work on autopilot.",
    ],
    features: ["Workflow automation", "CRM & lead routing", "AI chat & follow-ups", "Email & WhatsApp automation", "Reporting dashboards", "Tool integrations"],
  },
  {
    slug: "graphics-designing",
    icon: Palette,
    title: "Graphics Designing",
    short: "Eye-catching social posts, ad creatives, banners and brand materials.",
    badgeLabel: "Brands",
    badgeValue: "300+",
    tagline: "Designs crafted to reflect your brand — and stop the scroll.",
    overview: [
      "From eye-catching social media posts and ad creatives to brochures, banners and promotional materials, we craft every design to reflect your brand and capture attention.",
      "Consistent, premium visuals across every touchpoint — built around a system, not one-off posts.",
    ],
    features: ["Social media creatives", "Ad & banner design", "Brand kit & guidelines", "Brochures & print", "Logo & identity", "Design system"],
  },
  {
    slug: "content-strategy",
    icon: FileText,
    title: "Content Strategy",
    short: "Content that tells your brand story and drives measurable growth.",
    badgeLabel: "Engagement",
    badgeValue: "+180%",
    tagline: "Content strategies that do more than fill space — they drive growth.",
    overview: [
      "We build content strategies that do more than just fill space — they tell your brand's story and drive measurable growth across every channel.",
      "Research-led planning, a clear content calendar and messaging that turns attention into action.",
    ],
    features: ["Content audit & research", "Messaging & tone of voice", "Editorial calendar", "Channel strategy", "Performance tracking", "Ongoing optimization"],
  },
  {
    slug: "video-editing",
    icon: Clapperboard,
    title: "Video Editing",
    short: "Turn raw footage into polished, engaging short-form and promo videos.",
    badgeLabel: "Views",
    badgeValue: "5M+",
    tagline: "Raw footage turned into polished, engaging, scroll-stopping content.",
    overview: [
      "Our video editing services turn raw footage into polished, engaging content. From short-form reels to promotional videos, we enhance visuals, pacing and storytelling.",
      "Captions, motion graphics and sound design included — built for the platforms your audience actually uses.",
    ],
    features: ["Short-form reels & shorts", "Promotional videos", "Captions & subtitles", "Motion graphics", "Color & sound", "Platform-ready exports"],
  },
  {
    slug: "videography",
    icon: Video,
    title: "Videography",
    short: "High-quality, on-site videography that delivers clean, engaging visuals.",
    badgeLabel: "Projects",
    badgeValue: "250+",
    tagline: "Clean, engaging visuals captured with pro equipment and direction.",
    overview: [
      "Whether capturing products, services or on-site operations, we use high-quality equipment and expert direction to deliver clean, engaging visuals.",
      "From concept to final cut, we handle the full production so your brand always looks its best on camera.",
    ],
    features: ["Pre-production & concept", "On-site filming", "Product & brand shoots", "Professional equipment", "Direction & lighting", "Edit & delivery"],
  },
  {
    slug: "tiktok-paid-advertising",
    icon: Music2,
    title: "TikTok Paid Advertising",
    short: "Trend-focused TikTok ad campaigns that cut through the noise.",
    badgeLabel: "Reach",
    badgeValue: "10M+",
    tagline: "TikTok campaigns designed to cut through the noise and captivate.",
    overview: [
      "We craft TikTok ad campaigns designed to cut through the noise and captivate your audience by combining trend-focused creative storytelling with sharp targeting.",
      "Native, scroll-stopping creative paired with data-driven optimization to turn views into customers.",
    ],
    features: ["Trend-based creative", "Audience targeting", "Hook & script writing", "Campaign management", "A/B creative testing", "Performance reporting"],
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);