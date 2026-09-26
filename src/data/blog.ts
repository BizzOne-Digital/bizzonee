/**
 * BLOG: scalable, file-based blog. Each post is typed content blocks, so no CMS
 * or markdown dependency is needed. Inline links use [anchor text](/path).
 *
 * - Set `status: "draft"` to hide a post from the blog index, sitemap and routes.
 * - `keyword` records the target keyword from the SEO guide's keyword map.
 * - Keep facts accurate: no invented statistics, prices or results.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  /** Meta title (≈30–60 chars) */
  seoTitle: string;
  /** Meta description (≈120–160 chars) */
  description: string;
  excerpt: string;
  keyword: string;
  category: string;
  date: string;
  updated?: string;
  readingMinutes: number;
  status: "published" | "draft";
  relatedService: { href: string; label: string };
  body: BlogBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-much-does-a-small-business-website-cost-in-canada",
    title: "How Much Does a Small Business Website Cost in Canada?",
    seoTitle: "Small Business Website Cost in Canada | BizzOne Digital",
    description:
      "What drives the cost of a small business website in Canada, what you should get at each price point, and the ongoing costs owners often forget.",
    excerpt: "The price of a website depends on a handful of clear factors. Here is how to budget, what to expect at each level and which ongoing costs to plan for.",
    keyword: "website design packages",
    category: "Web Design",
    date: "2026-09-26",
    readingMinutes: 6,
    status: "published",
    relatedService: { href: "/web-development", label: "Website design packages" },
    body: [
      { type: "p", text: "Ask five agencies what a website costs and you will get five very different answers. That is not because anyone is hiding the price. It is because \"a website\" can mean a one-page brochure or a full online store with bookings, payments and an admin dashboard. The good news: the cost comes down to a small number of factors you can control." },
      { type: "h2", text: "The five factors that decide the price" },
      { type: "ol", items: [
        "Number of pages. A five-page site (Home, About, Services, Gallery, Contact) is a very different job from a 20-page site with a page for every service and location.",
        "Design approach. A proven layout adapted to your brand is faster than a fully custom design built from a blank canvas.",
        "Features. Contact forms are standard. Booking forms, payment integration, product catalogues, customer portals and multi-language support each add build and testing time.",
        "Content. Writing copy and sourcing photos takes time. If you supply finished text and images, the project moves faster.",
        "SEO and performance setup. Page titles, meta descriptions, image compression and mobile optimisation should be included, but the depth varies a lot between providers.",
      ] },
      { type: "h2", text: "What you should expect at each level" },
      { type: "h3", text: "Starter website" },
      { type: "p", text: "Best for new businesses that need to look credible and be reachable. Expect up to about five pages, a contact form, mobile-responsive design and basic on-page SEO. This is enough for most trades and service providers to start collecting enquiries." },
      { type: "h3", text: "Growth website" },
      { type: "p", text: "For businesses that take appointments or payments online. Expect more pages, a booking or appointment form, payment setup, a gallery you can update yourself and a simple admin area." },
      { type: "h3", text: "eCommerce or custom website" },
      { type: "p", text: "For product sellers and businesses with complex workflows. Expect product management, order handling, payment gateways, automation and a custom design. Scope matters most here, so get a written list of what is included." },
      { type: "callout", text: "For reference, BizzOne Digital's published [website design packages](/web-development) start at $79 for a Standard site, with Premium and Advanced packages for bookings, payments and eCommerce, and custom quotes for larger builds. Check the packages page for current pricing and inclusions." },
      { type: "h2", text: "Ongoing costs owners often forget" },
      { type: "ul", items: [
        "Domain name renewal, paid every year.",
        "Hosting, unless it is included in your package.",
        "Business email, if you want addresses on your own domain.",
        "Updates and changes after launch, such as new pages, seasonal offers or new photos.",
        "Marketing. A website does not bring traffic on its own; SEO, Google Business Profile and ads do.",
      ] },
      { type: "h2", text: "How to compare quotes fairly" },
      { type: "p", text: "Put every quote side by side and check the same things: number of pages, features, whether SEO basics are included, who owns the site after launch, how long delivery takes and what support looks like afterwards. The cheapest quote is only good value if it includes what your business actually needs." },
      { type: "p", text: "Want a second opinion on a quote, or a clear price for your project? [Book a free strategy call](/contact) and we will tell you exactly what you need, and what you don't." },
    ],
  },
  {
    slug: "google-ads-vs-meta-ads-for-local-businesses",
    title: "Google Ads vs Meta Ads for Local Businesses",
    seoTitle: "Google Ads vs Meta Ads for Local Businesses | BizzOne",
    description:
      "Google Ads captures people already searching; Meta Ads creates demand. Here is how local businesses should choose, split budget and measure results.",
    excerpt: "Both platforms can generate leads. The right choice depends on whether people already search for what you sell, and how you will follow up.",
    keyword: "paid advertising agency",
    category: "Paid Advertising",
    date: "2026-09-26",
    readingMinutes: 6,
    status: "published",
    relatedService: { href: "/service/paid-advertising", label: "Paid advertising services" },
    body: [
      { type: "p", text: "Local business owners often ask us which platform is \"better\". The honest answer is that Google Ads and Meta Ads (Facebook and Instagram) do different jobs. Once you understand the difference, the choice usually becomes obvious." },
      { type: "h2", text: "Google Ads: capture existing demand" },
      { type: "p", text: "Google Ads shows your ad to people who are actively searching, for example \"emergency plumber Mississauga\" or \"window tint near me\". The intent is high because the person already has the problem. You pay for clicks, and competitive keywords can be expensive, but the leads tend to be ready to buy." },
      { type: "ul", items: [
        "Best for: urgent or high-intent services (repairs, legal, medical, automotive, home services).",
        "Watch out for: broad keywords that waste budget, and sending clicks to a slow or generic homepage.",
      ] },
      { type: "h2", text: "Meta Ads: create demand" },
      { type: "p", text: "Meta Ads reach people based on location, interests and behaviour while they scroll. Most of them were not looking for you a minute ago, so the creative has to stop the scroll and the offer has to be clear. Meta is strong for visual businesses, promotions and building awareness in a specific area." },
      { type: "ul", items: [
        "Best for: restaurants, salons, fitness, events, eCommerce and offers that sell on visuals.",
        "Watch out for: weak creative, vague offers and lead forms that attract low-quality enquiries.",
      ] },
      { type: "h2", text: "A simple way to decide" },
      { type: "ol", items: [
        "Do people search Google for your service when they need it? Start with Google Ads.",
        "Is your product visual, impulse-friendly or new to the market? Start with Meta Ads.",
        "Do you have budget for both? Use Google to capture demand and Meta to build it, then retarget website visitors on Meta.",
      ] },
      { type: "h2", text: "What matters more than the platform" },
      { type: "p", text: "The platform rarely decides whether a campaign works. These do:" },
      { type: "ul", items: [
        "Conversion tracking, so you know which ads produce leads rather than just clicks.",
        "A focused landing page with one clear call to action.",
        "Fast follow-up. A lead that waits hours for a reply often goes to a competitor. [CRM automation](/blog/what-is-crm-automation) can respond in seconds.",
        "Reporting on cost per lead (CPL) and lead quality, not only impressions and clicks.",
      ] },
      { type: "p", text: "Strong ads also need strong creative and consistent messaging, which is where [content strategy](/service/content-strategy) and [social media management](/service/social-media-management) support your paid campaigns." },
      { type: "p", text: "Not sure where to start? Our [paid advertising team](/service/paid-advertising) can review your market and recommend a starting budget and platform on a free strategy call." },
    ],
  },
  {
    slug: "what-is-crm-automation",
    title: "What Is CRM Automation and How Can a Small Business Use It?",
    seoTitle: "What Is CRM Automation? A Small Business Guide | BizzOne",
    description:
      "CRM automation handles lead follow-up, reminders and pipeline updates for you. Learn what it is, where small businesses start and what to automate first.",
    excerpt: "CRM automation lets a small team respond to every lead in seconds and stop things falling through the cracks. Here is where to start.",
    keyword: "CRM automation",
    category: "AI & Automation",
    date: "2026-09-26",
    readingMinutes: 5,
    status: "published",
    relatedService: { href: "/service/ai-automation", label: "AI & CRM automation services" },
    body: [
      { type: "p", text: "A CRM (customer relationship management system) is where your leads and customers live: names, contact details, conversations and where each person sits in your sales process. CRM automation means the system takes action for you when something happens, instead of relying on someone to remember." },
      { type: "h2", text: "Why small businesses need it most" },
      { type: "p", text: "Large companies have sales teams. Small businesses have an owner answering the phone between jobs. When a lead comes in from an ad or a website form and nobody replies for a few hours, that lead often books with whoever answered first. Automation closes that gap without hiring." },
      { type: "h2", text: "Five automations to set up first" },
      { type: "ol", items: [
        "Instant lead response. Send a text and email the moment a form is submitted, confirming you received it and offering a booking link.",
        "Missed-call text back. If you miss a call, the system texts the caller so the conversation keeps going.",
        "Appointment reminders. Automatic reminders before a booking reduce no-shows.",
        "Pipeline updates. Move a lead to the next stage when they book, pay or reply, so you always know where every deal stands.",
        "Review requests. After a job is marked complete, ask happy customers for a Google review.",
      ] },
      { type: "h2", text: "What CRM automation is not" },
      { type: "p", text: "It is not spam. Good automation sends the right message at the right time, stops as soon as a person replies and hands the conversation to a human when it matters. It also is not set-and-forget: review the messages and results every month." },
      { type: "h2", text: "How to get started" },
      { type: "ul", items: [
        "Map your current process from first enquiry to paid customer.",
        "Find the steps where leads wait or get forgotten.",
        "Automate those steps first, measure response time and booking rate, then expand.",
      ] },
      { type: "p", text: "Platforms like GoHighLevel make this practical for small teams. See our [GoHighLevel automation ideas for lead follow-up](/blog/gohighlevel-automation-ideas-for-lead-follow-up), or talk to us about [AI and CRM automation](/service/ai-automation) built around your process." },
    ],
  },
  {
    slug: "gohighlevel-automation-ideas-for-lead-follow-up",
    title: "GoHighLevel Automation Ideas for Lead Follow-up",
    seoTitle: "GoHighLevel Automation Ideas for Lead Follow-up | BizzOne",
    description:
      "Practical GoHighLevel workflows for faster lead follow-up: speed-to-lead, missed-call text back, nurture sequences, reminders, reviews and reactivation.",
    excerpt: "Seven GoHighLevel workflows that help small businesses reply faster, book more appointments and win back old leads.",
    keyword: "GoHighLevel automation",
    category: "AI & Automation",
    date: "2026-09-26",
    readingMinutes: 6,
    status: "published",
    relatedService: { href: "/service/ai-automation", label: "GoHighLevel & AI automation" },
    body: [
      { type: "p", text: "GoHighLevel combines a CRM, pipelines, messaging, calendars and workflow automation in one platform. Its real value comes from the workflows you build. Here are the follow-up automations we recommend most often for local and service businesses." },
      { type: "h2", text: "1. Speed-to-lead" },
      { type: "p", text: "Trigger: a new form submission or ad lead. Action: send a personalised text and email within seconds, create the contact, add them to the pipeline and notify your team. The goal is simple: be the first business to reply." },
      { type: "h2", text: "2. Missed-call text back" },
      { type: "p", text: "When a call goes unanswered, automatically text the caller: \"Sorry we missed you, how can we help?\" Many people prefer texting anyway, and the lead stays with you instead of calling the next business on the list." },
      { type: "h2", text: "3. Short nurture sequence" },
      { type: "p", text: "For leads who don't book straight away, send a few helpful messages over the next week or two: an answer to a common question, a recent project, then a clear offer. Stop the sequence automatically when they reply or book." },
      { type: "h2", text: "4. Appointment confirmations and reminders" },
      { type: "p", text: "Confirm the booking instantly, remind them the day before and again shortly before the appointment, with an easy way to reschedule. Fewer no-shows means more revenue from the same number of leads." },
      { type: "h2", text: "5. Pipeline stage automation" },
      { type: "p", text: "Move opportunities automatically when something happens: booked, showed, quoted, won. Your pipeline then reflects reality without manual updates, and your reports become trustworthy." },
      { type: "h2", text: "6. Review requests" },
      { type: "p", text: "When a job is marked won or complete, send a thank-you message with a direct link to your Google review page. Consistent reviews help both conversions and local SEO." },
      { type: "h2", text: "7. Database reactivation" },
      { type: "p", text: "Old leads and past customers are an asset. A respectful reactivation campaign with a relevant offer can restart conversations without spending more on ads." },
      { type: "h2", text: "Build it right" },
      { type: "ul", items: [
        "Get consent and include opt-out options in every text and email.",
        "Personalise with first names and the service they asked about.",
        "Always give a human an easy way to take over the conversation.",
        "Track response time, booking rate and show rate every month.",
      ] },
      { type: "p", text: "New to the concept? Start with [what CRM automation is](/blog/what-is-crm-automation). Ready to build? Our [AI automation team](/service/ai-automation) sets up GoHighLevel workflows around your exact sales process." },
    ],
  },
  {
    slug: "local-seo-checklist-for-mississauga-businesses",
    title: "Local SEO Checklist for Mississauga Businesses",
    seoTitle: "Local SEO Checklist for Mississauga Businesses | BizzOne",
    description:
      "A practical local SEO checklist for Mississauga businesses: Google Business Profile, NAP consistency, reviews, location pages, on-page SEO and tracking.",
    excerpt: "The local SEO basics that help Mississauga businesses show up in Google Maps and local search, in the order we would tackle them.",
    keyword: "SEO services Mississauga",
    category: "SEO",
    date: "2026-09-26",
    readingMinutes: 7,
    status: "published",
    relatedService: { href: "/service/seo", label: "SEO services in Mississauga" },
    body: [
      { type: "p", text: "When someone in Mississauga searches for a service \"near me\", Google shows a map with a handful of businesses above the regular results. Getting into that group is what local SEO is about. Use this checklist to cover the fundamentals." },
      { type: "h2", text: "1. Google Business Profile" },
      { type: "ul", items: [
        "Claim and verify your profile.",
        "Choose the most accurate primary category, then relevant secondary categories.",
        "Add your services, hours, service area, photos and a clear business description.",
        "Post updates and offers regularly, and answer questions in the Q&A.",
      ] },
      { type: "h2", text: "2. Consistent NAP everywhere" },
      { type: "p", text: "Your business name, address and phone number (NAP) should be identical on your website, Google Business Profile, Facebook, Instagram, LinkedIn, Yelp and directories. Small differences, such as \"Pl\" vs \"Place\" or an old phone number, create doubt about which details are correct." },
      { type: "h2", text: "3. Reviews" },
      { type: "ul", items: [
        "Ask every happy customer for a Google review, ideally with a direct link.",
        "Reply to every review, positive or negative, professionally.",
        "Never buy or fake reviews; it breaks Google's policies and can get your profile suspended.",
      ] },
      { type: "h2", text: "4. On-page SEO for local intent" },
      { type: "ul", items: [
        "A unique title tag and meta description on every page.",
        "One clear H1 per page that says what you do and where.",
        "A dedicated page for each core service rather than one page listing everything.",
        "Descriptive image filenames and alt text.",
        "Your full address and phone number in the footer, plus LocalBusiness schema markup.",
      ] },
      { type: "h2", text: "5. Location pages that add value" },
      { type: "p", text: "If you serve several areas, such as Port Credit, Streetsville, Meadowvale, Erin Mills or the City Centre, a location page can help, but only if it is genuinely useful: local projects, directions, area-specific details. Copy-paste pages with the city name swapped are thin content and rarely rank." },
      { type: "h2", text: "6. Technical health" },
      { type: "ul", items: [
        "Fast load times on mobile.",
        "An XML sitemap submitted in Google Search Console.",
        "A robots.txt that does not block important pages.",
        "One canonical version of your domain (www or non-www, always HTTPS).",
      ] },
      { type: "h2", text: "7. Local links and citations" },
      { type: "p", text: "Get listed in reputable local and industry directories, local business associations and community sponsorships. Relevant local mentions help Google trust your location." },
      { type: "h2", text: "8. Track what matters" },
      { type: "p", text: "Monitor calls, direction requests and website clicks from your Google Business Profile, plus rankings and organic leads from Search Console and analytics. Review them monthly." },
      { type: "p", text: "Want this done for you? Our [SEO services](/service/seo) cover local SEO, technical fixes and monthly reporting for businesses in Mississauga and across Canada. Learn more about our [digital marketing services in Mississauga](/digital-marketing-mississauga)." },
    ],
  },
  {
    slug: "logo-design-vs-full-brand-identity",
    title: "Logo Design vs Full Brand Identity: What Do You Need?",
    seoTitle: "Logo Design vs Brand Identity: What You Need | BizzOne",
    description:
      "A logo is one piece of your brand. Learn the difference between a logo and a full brand identity, and which one your business needs right now.",
    excerpt: "A logo is a mark. A brand identity is the system that makes everything you publish look like it came from the same business.",
    keyword: "logo design and branding services",
    category: "Branding",
    date: "2026-09-26",
    readingMinutes: 5,
    status: "published",
    relatedService: { href: "/service/design-and-branding", label: "Logo design & branding services" },
    body: [
      { type: "p", text: "\"We just need a logo\" is one of the most common requests we get. Sometimes that is exactly right. Other times the business really needs a brand identity, and a logo alone leaves them with inconsistent flyers, social posts and signage a few months later." },
      { type: "h2", text: "What a logo is" },
      { type: "p", text: "A logo is the mark that identifies your business: a symbol, a wordmark or both. A good logo package should include versions for light and dark backgrounds, a simplified icon version and the right file types for print and web." },
      { type: "h2", text: "What a full brand identity includes" },
      { type: "ul", items: [
        "The logo and its variations.",
        "A colour palette with exact colour codes for print and screen.",
        "Typography: which fonts to use for headings and body text.",
        "Brand guidelines showing how to use all of the above correctly.",
        "Templates for social media, ads, business cards and other materials.",
        "Tone of voice: how your brand sounds in writing.",
      ] },
      { type: "h2", text: "Which one do you need?" },
      { type: "h3", text: "A logo is enough if..." },
      { type: "ul", items: [
        "You are testing a new idea and need to look professional quickly.",
        "You will produce very little marketing material for now.",
      ] },
      { type: "h3", text: "Choose a full brand identity if..." },
      { type: "ul", items: [
        "You post on social media regularly or run ads.",
        "Several people or suppliers create materials for you.",
        "You are launching a website, signage or vehicle wraps.",
        "Your current materials all look slightly different.",
      ] },
      { type: "h2", text: "Why consistency pays off" },
      { type: "p", text: "Customers need to see a brand several times before they remember it. When every post, ad and sign uses the same colours, fonts and style, each impression builds on the last. When they don't, you are effectively starting again every time." },
      { type: "p", text: "Browse our [logo design portfolio](/our-work#logo) for examples, or explore our [logo design and branding services](/service/design-and-branding)." },
    ],
  },
  {
    slug: "how-to-plan-a-month-of-social-media-content",
    title: "How to Plan a Month of Social Media Content",
    seoTitle: "How to Plan a Month of Social Media Content | BizzOne",
    description:
      "A step-by-step process to plan a month of social media content: goals, content pillars, a posting schedule, batching, captions and monthly review.",
    excerpt: "Planning a month ahead turns social media from a daily scramble into a system. Here is the process we use with clients.",
    keyword: "content calendar and scheduling",
    category: "Social Media",
    date: "2026-09-26",
    readingMinutes: 6,
    status: "published",
    relatedService: { href: "/service/social-media-management", label: "Social media management services" },
    body: [
      { type: "p", text: "Posting whenever you find a spare minute leads to long gaps, rushed posts and content that doesn't support your business goals. A monthly content calendar fixes all three. Here is a simple process any small business can follow." },
      { type: "h2", text: "Step 1: Pick one goal for the month" },
      { type: "p", text: "More enquiries for a specific service, bookings for a new offer, event attendance or brand awareness in a new area. One clear goal makes every other decision easier." },
      { type: "h2", text: "Step 2: Choose three to five content pillars" },
      { type: "ul", items: [
        "Education: tips, how-tos and answers to common questions.",
        "Proof: before-and-after photos, projects and customer reviews.",
        "Behind the scenes: your team, process and workplace.",
        "Offers: promotions and clear calls to action.",
        "Community: local events, partners and customer stories.",
      ] },
      { type: "h2", text: "Step 3: Set a realistic posting schedule" },
      { type: "p", text: "Consistency beats volume. Three good posts a week, every week, will do more than daily posting for two weeks followed by silence. Decide which days you will post on each platform and which formats you will use: reels, carousels, stories or single images." },
      { type: "h2", text: "Step 4: Fill the calendar" },
      { type: "p", text: "Map your pillars to the schedule so the mix stays balanced, then add key dates: holidays, local events, launches and seasonal offers. Write a one-line idea for every slot before creating anything." },
      { type: "h2", text: "Step 5: Batch create" },
      { type: "ul", items: [
        "Shoot photos and short videos in one or two sessions.",
        "Design graphics using your brand templates.",
        "Write captions with a hook in the first line and one clear call to action.",
        "Schedule everything in advance using a scheduling tool.",
      ] },
      { type: "h2", text: "Step 6: Engage and review" },
      { type: "p", text: "Scheduling saves time, but replies and DMs still need a human. At the end of the month, check which posts drove profile visits, messages and enquiries, not just likes, and use that to plan next month." },
      { type: "p", text: "Need a strategy first? Start with [content strategy](/service/content-strategy). Want it handled for you? See our [social media management services](/service/social-media-management) and [video editing and production](/service/video-editing-and-production)." },
    ],
  },
  {
    slug: "how-much-does-it-cost-to-build-a-mobile-app",
    title: "How Much Does It Cost to Build a Mobile App?",
    seoTitle: "How Much Does It Cost to Build a Mobile App? | BizzOne",
    description:
      "Mobile app development cost depends on platforms, features, design, backend and support. Learn what drives the price and how to scope an MVP.",
    excerpt: "App budgets vary widely because apps vary widely. These are the factors that drive mobile app development cost, and how to keep yours under control.",
    keyword: "mobile app development cost",
    category: "App Development",
    date: "2026-09-26",
    readingMinutes: 6,
    status: "published",
    relatedService: { href: "/app-development", label: "Mobile app development" },
    body: [
      { type: "p", text: "There is no single price for a mobile app, and any fixed number quoted without understanding your idea is a guess. What we can do is explain exactly what drives the cost, so you can plan a sensible budget and ask the right questions." },
      { type: "h2", text: "What drives mobile app development cost" },
      { type: "h3", text: "1. Platforms" },
      { type: "p", text: "Building for iOS only, Android only or both makes a big difference. Cross-platform frameworks let one codebase run on both, which usually reduces cost compared with two separate native apps, while fully native builds can make sense for demanding performance or device features." },
      { type: "h3", text: "2. Features" },
      { type: "p", text: "Every feature adds design, development and testing time. User accounts, payments, bookings, chat, maps, push notifications, offline mode and third-party integrations are common cost drivers." },
      { type: "h3", text: "3. Design" },
      { type: "p", text: "A clean interface using standard patterns is quicker to build than a highly custom, animated experience. Good UX design still matters at every budget, because an app people find confusing won't be used." },
      { type: "h3", text: "4. Backend and admin" },
      { type: "p", text: "Most apps need a server, a database and an admin dashboard to manage users, content and orders. Complex roles, reporting and integrations add to the scope." },
      { type: "h3", text: "5. Launch and ongoing support" },
      { type: "p", text: "Budget for App Store and Play Store submission, bug fixes after launch, operating system updates, hosting and new features. An app is a product you maintain, not a one-off purchase." },
      { type: "h2", text: "Start with an MVP" },
      { type: "p", text: "A minimum viable product (MVP) includes only the features needed to prove your idea with real users. It reduces upfront cost, gets you to market sooner and gives you real data before you invest in the next version." },
      { type: "ol", items: [
        "List every feature you want.",
        "Mark the ones users need on day one to get the core value.",
        "Build those first; schedule the rest for later versions.",
      ] },
      { type: "h2", text: "How to get an accurate quote" },
      { type: "ul", items: [
        "Describe the problem the app solves and who will use it.",
        "List must-have features and nice-to-haves separately.",
        "Share examples of apps you like and why.",
        "Mention any systems it must connect to.",
      ] },
      { type: "p", text: "BizzOne Digital scopes every app individually, from lean MVPs to enterprise apps. [Request a free, no-obligation app development quote](/app-development) and we will send a tailored proposal." },
    ],
  },
];

export const PUBLISHED_POSTS = BLOG_POSTS.filter((p) => p.status === "published").sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPost = (slug: string) => PUBLISHED_POSTS.find((p) => p.slug === slug);
