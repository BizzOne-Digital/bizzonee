import {
  Megaphone,
  Palette,
  Video,
  FileText,
  Share2,
  Bot,
  Smartphone,
  Search,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  badgeLabel: string;
  badgeValue: string;
  href?: string;
  tagline: string;
  overview: string[];
  features: string[];
  /** SEO: exact client-approved title / description / H1 (see SEO guide) */
  seoTitle?: string;
  seoDescription?: string;
  h1?: string;
  /** Part of the H1 rendered with the brand gradient */
  h1Accent?: string;
  /** Schema.org Service fields */
  schemaName?: string;
  serviceType?: string;
  schemaDescription?: string;
  /** Contextual internal links shown on the service page */
  related?: { href: string; label: string; text: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: "app-development",
    icon: Smartphone,
    title: "App Development",
    short: "iOS, Android and cross-platform apps designed to launch fast and scale with your business.",
    badgeLabel: "Platforms",
    badgeValue: "iOS + Android",
    href: "/app-development",
    tagline: "From idea to App Store, mobile apps built to perform and scale.",
    overview: [
      "We design and build custom iOS, Android and cross-platform apps, from MVPs to full-featured products, with clean architecture and a smooth, intuitive user experience.",
      "Every app is planned around real user needs and your business goals, then tested rigorously before it ever reaches the App Store or Play Store.",
    ],
    features: ["iOS & Android apps", "Cross-platform development", "UI/UX design & prototyping", "App Store & Play Store submission", "Backend & API integration", "Post-launch support"],
    schemaName: "Mobile App Development",
    serviceType: "Mobile app development",
    schemaDescription: "Custom iOS, Android and cross-platform app development, from lean MVPs to enterprise apps, including UI/UX design, backend integration and store submission.",
  },
  {
    slug: "seo",
    icon: Search,
    title: "SEO",
    short: "Local SEO, technical fixes, on-page optimisation and content that get your business found on Google.",
    badgeLabel: "Focus",
    badgeValue: "Local + Technical",
    href: "/service/seo",
    tagline: "Get found on Google by the customers already searching for what you sell.",
    overview: [
      "We audit, fix and grow your search visibility with local SEO, technical fixes, on-page optimisation and content built around what your customers search for.",
    ],
    features: ["SEO audit", "Keyword research", "On-page SEO", "Technical SEO", "Local SEO & Google Business Profile", "Monthly reporting"],
    schemaName: "SEO Services",
    serviceType: "Search engine optimization",
    schemaDescription: "Local SEO, technical SEO audits and fixes, on-page optimisation, keyword research, content and monthly reporting.",
  },
  {
    slug: "paid-advertising",
    icon: Megaphone,
    title: "Paid Advertising",
    short: "High-converting Meta, Google & TikTok ads that bring quality leads and maximize ROI.",
    badgeLabel: "ROI",
    badgeValue: "+300%",
    tagline: "Targeted ads that drive leads, sales and lasting growth across every platform.",
    overview: [
      "We create and manage high-performance ad campaigns across Meta, Google and TikTok, combining persuasive messaging, professional visuals and strategic placements to drive leads, sales and lasting growth.",
      "Every campaign is built around clear KPIs, tested relentlessly and scaled only when the numbers prove out. No wasted spend, no guesswork.",
    ],
    features: ["Audience research & targeting", "Ad creative & copy", "Campaign setup & structure", "A/B testing & scaling", "Pixel & conversion tracking", "Weekly spend & CPL reporting"],
    seoTitle: "Paid Advertising: Google, Meta & TikTok Ads | BizzOne",
    seoDescription: "Performance-driven Google, Meta and TikTok ad campaigns with A/B testing, conversion tracking and weekly CPL reporting. Book a free strategy call.",
    h1: "Paid Advertising Services: Google, Meta & TikTok Ads",
    h1Accent: "Paid Advertising Services",
    schemaName: "Paid Advertising Services",
    serviceType: "Pay-per-click and social media advertising",
    schemaDescription: "Google, Meta and TikTok ad campaign management with audience research, ad creative, A/B testing, conversion tracking and weekly CPL reporting.",
    related: [
      { href: "/service/social-media-management", label: "Social media management", text: "Keep your organic channels active so people who click your ads find a brand worth following." },
      { href: "/service/content-strategy", label: "Content strategy", text: "Plan the messaging and offers your campaigns test, so every ad starts from a clear angle." },
      { href: "/service/design-and-branding", label: "Ad creative and branding", text: "Scroll-stopping ad designs that stay consistent with your brand." },
      { href: "/blog/google-ads-vs-meta-ads-for-local-businesses", label: "Google Ads vs Meta Ads for local businesses", text: "Our guide to choosing the right platform for your budget." },
    ],
  },
  {
    slug: "design-and-branding",
    icon: Palette,
    title: "Design & Branding",
    short: "Eye-catching creatives, brand identity and visual systems that make you stand out.",
    badgeLabel: "Brands",
    badgeValue: "300+",
    tagline: "Designs crafted to reflect your brand and stop the scroll.",
    overview: [
      "From logos and brand guidelines to social media creatives, ad banners and promotional materials, we craft every design to reflect your brand and capture attention.",
      "Consistent, premium visuals across every touchpoint, built around a system, not one-off posts.",
    ],
    features: ["Logo & brand identity", "Brand guidelines & kit", "Social media creatives", "Ad & banner design", "Brochures & print", "Design system"],
    seoTitle: "Logo Design & Branding Services | BizzOne Digital",
    seoDescription: "Logo design, brand identity, brand guidelines and social creatives that help your business stand out. Book a free strategy call with BizzOne Digital.",
    h1: "Logo Design & Branding Services",
    h1Accent: "Branding Services",
    schemaName: "Logo Design & Branding Services",
    serviceType: "Logo design and brand identity",
    schemaDescription: "Logo design, brand identity, brand guidelines, social media creatives, ad and banner design and print materials.",
    related: [
      { href: "/our-work#logo", label: "Logo design portfolio", text: "See logos and brand identities we have created for real clients." },
      { href: "/web-development", label: "Website design and development", text: "Carry your new brand through to a fast, mobile-friendly website." },
      { href: "/blog/logo-design-vs-full-brand-identity", label: "Logo design vs full brand identity", text: "Not sure which you need? Read our guide." },
    ],
  },
  {
    slug: "video-editing-and-production",
    icon: Video,
    title: "Video Editing & Production",
    short: "Professional video editing, production and visual content that engages and converts.",
    badgeLabel: "Views",
    badgeValue: "5M+",
    tagline: "Scroll-stopping content, from raw footage to polished, platform-ready delivery.",
    overview: [
      "We handle the full content production pipeline, from on-site videography and product shoots to professional video editing, motion graphics and platform-ready exports.",
      "Whether it's short-form reels, promotional videos or brand content, we deliver polished visuals that engage your audience and drive action.",
    ],
    features: ["Short-form reels & shorts", "Promotional videos", "On-site videography", "Motion graphics & captions", "Product & brand shoots", "Platform-ready exports"],
    seoTitle: "Video Editing & Production Services | BizzOne Digital",
    seoDescription: "Short-form reels, promotional videos, on-site videography and motion graphics, edited and delivered platform-ready. Talk to BizzOne Digital today.",
    h1: "Video Editing & Production Services",
    h1Accent: "Video Editing & Production",
    schemaName: "Video Editing & Production Services",
    serviceType: "Video editing and video production",
    schemaDescription: "Short-form reels, promotional videos, on-site videography, product and brand shoots, motion graphics and platform-ready exports.",
    related: [
      { href: "/our-work#content", label: "Video and content portfolio", text: "Browse reels and short-form content we have produced." },
      { href: "/service/social-media-management", label: "Social media management", text: "Get your videos scheduled, posted and managed consistently." },
      { href: "/service/paid-advertising", label: "Paid advertising", text: "Turn your best-performing videos into ads that generate leads." },
    ],
  },
  {
    slug: "content-strategy",
    icon: FileText,
    title: "Content Strategy",
    short: "Research-led content planning that tells your brand story and drives measurable growth.",
    badgeLabel: "Engagement",
    badgeValue: "+180%",
    tagline: "Content strategies that do more than fill space, they drive growth.",
    overview: [
      "We build content strategies that do more than just fill space, they tell your brand's story and drive measurable growth across every channel.",
      "Research-led planning, a clear content calendar and messaging that turns attention into action.",
    ],
    features: ["Content audit & research", "Messaging & tone of voice", "Editorial calendar", "Channel strategy", "Performance tracking", "Ongoing optimization"],
    seoTitle: "Content Strategy Services | BizzOne Digital",
    seoDescription: "Research-led content strategy with audits, messaging, editorial calendars and performance tracking that turns attention into growth. Book a free call.",
    h1: "Content Strategy Services That Drive Growth",
    h1Accent: "Content Strategy Services",
    schemaName: "Content Strategy Services",
    serviceType: "Content strategy and editorial planning",
    schemaDescription: "Content audits and research, messaging and tone of voice, editorial calendars, channel strategy and performance tracking.",
    related: [
      { href: "/service/seo", label: "SEO services", text: "Make sure the content you publish is built to be found on Google." },
      { href: "/service/social-media-management", label: "Social media management", text: "Put your content calendar into action across every channel." },
      { href: "/blog/how-to-plan-a-month-of-social-media-content", label: "How to plan a month of social media content", text: "A practical walkthrough of our planning process." },
    ],
  },
  {
    slug: "social-media-management",
    icon: Share2,
    title: "Social Media Management",
    short: "Convert followers into customers with tested social strategies and consistent content.",
    badgeLabel: "Followers",
    badgeValue: "+320%",
    tagline: "Turn leads into customers and build a brand people follow.",
    overview: [
      "By using tested conversion techniques to turn leads into customers, we help you close more deals and make sure your social presence works as hard as you do.",
      "We handle content, scheduling, community management and reporting so your channels stay consistent, on-brand and growing.",
    ],
    features: ["Content calendar & scheduling", "On-brand post design", "Community management", "Hashtag & growth strategy", "Engagement & DMs", "Monthly performance reports"],
    seoTitle: "Social Media Management Services | BizzOne Digital",
    seoDescription: "Content calendars, on-brand posts, community management and monthly reporting to grow your followers and convert them into customers. Get started.",
    h1: "Social Media Management Services",
    h1Accent: "Social Media Management",
    schemaName: "Social Media Management Services",
    serviceType: "Social media management",
    schemaDescription: "Content calendars and scheduling, on-brand post design, community management, engagement and monthly performance reports.",
    related: [
      { href: "/our-work#social", label: "Social media portfolio", text: "See posts, stories and carousels we have designed for clients." },
      { href: "/service/content-strategy", label: "Content strategy", text: "Start with a plan so every post has a purpose." },
      { href: "/service/paid-advertising", label: "Paid social advertising", text: "Boost reach and leads with targeted Meta and TikTok campaigns." },
    ],
  },
  {
    slug: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    short: "Smart automation systems that save time, reduce manual work and scale your business.",
    badgeLabel: "Time Saved",
    badgeValue: "80%",
    tagline: "Work smarter and automate the repetitive so you can focus on what matters.",
    overview: [
      "We build custom AI automation systems that handle your repetitive tasks, from lead follow-up and CRM workflows to content generation, reporting and customer communication.",
      "Whether it's GoHighLevel automations, AI chatbots, or custom-built pipelines, we design systems that run 24/7 so your team doesn't have to.",
    ],
    features: ["AI chatbot setup", "Lead follow-up sequences", "CRM & pipeline automation", "Reporting automation", "Custom AI integrations"],
    seoTitle: "AI Automation & CRM Automation Services | BizzOne Digital",
    seoDescription: "AI chatbots, lead follow-up, CRM pipelines and reporting automation, including GoHighLevel, built to run 24/7. Book a free strategy call today.",
    h1: "AI Automation Services for Lead Follow-up & CRM",
    h1Accent: "AI Automation Services",
    schemaName: "AI Automation Services",
    serviceType: "AI and CRM automation",
    schemaDescription: "AI chatbots, lead follow-up sequences, CRM and pipeline automation, and reporting automation.",
    related: [
      { href: "/blog/what-is-crm-automation", label: "What is CRM automation?", text: "How a small business can use CRM automation to stop losing leads." },
      { href: "/blog/gohighlevel-automation-ideas-for-lead-follow-up", label: "GoHighLevel automation ideas for lead follow-up", text: "Practical workflows you can set up this month." },
      { href: "/service/paid-advertising", label: "Paid advertising", text: "Feed your automated follow-up with a steady flow of new leads." },
    ],
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

/** Canonical URL path for a service (some services have dedicated pages). */
export const serviceHref = (s: Service) => s.href ?? `/service/${s.slug}`;

/** Services rendered by the dynamic /service/[slug] route. */
export const DYNAMIC_SERVICES = SERVICES.filter((s) => !s.href);

/* Flat string array for dropdowns / selects */
export const SERVICES_LIST = SERVICES.map((s) => s.title);