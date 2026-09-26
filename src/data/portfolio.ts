/**
 * Portfolio data: single source of truth for /our-work and homepage previews.
 * Filenames are descriptive and alt text describes what each image shows.
 * To add an item: export a WebP into /public/portfolio/<folder>/ with a descriptive
 * lowercase-hyphenated filename, then add an entry below with accurate alt text.
 */

export interface PortfolioImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  span: string;
  video?: boolean;
}

export interface PortfolioCategory {
  id: string;
  title: string;
  sub: string;
  color: string;
  accent: string;
  /** Related service page, used for internal linking */
  serviceHref: string;
  images: PortfolioImage[];
}

export const PORTFOLIO: PortfolioCategory[] = [
  {
    id: "logo",
    title: "Logo Design",
    sub: "Brand Identity",
    color: "#B47BFF",
    accent: "#4C0A8F",
    serviceHref: "/service/design-and-branding",
    images: [
      { src: "/portfolio/logo/logo-design-bizzone-digital.webp", alt: "BizzOne Digital logo design shown on a branded coffee mug", width: 1080, height: 1080, span: "col-span-1 row-span-2" },
      { src: "/portfolio/logo/logo-design-silken-traders.webp", alt: "Gold lion shield logo design for Silken Traders by BizzOne Digital", width: 1080, height: 1080, span: "col-span-1 row-span-2" },
      { src: "/portfolio/logo/logo-design-hands-that-heal.webp", alt: "Logo design for Hands That Heal, a beauty and wellness clinic, by BizzOne Digital", width: 1080, height: 1080, span: "col-span-1" },
      { src: "/portfolio/logo/logo-design-aur-landscaping-renovation.webp", alt: "Logo design for AUR Landscaping & Renovation by BizzOne Digital", width: 1080, height: 1080, span: "col-span-1" },
      { src: "/portfolio/logo/logo-design-daana-paani-sweets-bar-grill.webp", alt: "Logo design for Daana Paani Sweets, Bar & Grill shown on a storefront sign", width: 1080, height: 1080, span: "col-span-1 row-span-2" },
      { src: "/portfolio/logo/logo-design-horizon-driving-school.webp", alt: "Logo design for Horizon Driving School by BizzOne Digital", width: 1080, height: 1080, span: "col-span-1" },
      { src: "/portfolio/logo/logo-design-ali-motors.webp", alt: "Logo design for Ali Motors, a car dealership, by BizzOne Digital", width: 1080, height: 1080, span: "col-span-1" },
      { src: "/portfolio/logo/logo-design-tint-iq.webp", alt: "Logo design for Tint IQ, an automotive window tint brand, by BizzOne Digital", width: 1080, height: 1080, span: "col-span-1" },
      { src: "/portfolio/logo/logo-design-baba-burger.webp", alt: "Logo and packaging design for Baba Burger by BizzOne Digital", width: 1080, height: 1080, span: "col-span-1 row-span-2" },
      { src: "/portfolio/logo/logo-design-royal-pizzeria-and-bar.webp", alt: "Logo design for The Royal Pizzeria and Bar shown on a restaurant sign", width: 1080, height: 1080, span: "col-span-1" },
      { src: "/portfolio/logo/logo-design-dollar-customs.webp", alt: "Gold emblem logo design for Dollar Customs by BizzOne Digital", width: 1080, height: 1080, span: "col-span-1" },
      { src: "/portfolio/logo/logo-design-canitsm.webp", alt: "Logo design for CanITSM, an IT services company, by BizzOne Digital", width: 1080, height: 1080, span: "col-span-1" },
      { src: "/portfolio/logo/logo-design-luxe-auto-accessories.webp", alt: "Logo design for Luxe Auto Accessories by BizzOne Digital", width: 1080, height: 1080, span: "col-span-1" },
    ],
  },
  {
    id: "web",
    title: "Web Design Portfolio",
    sub: "Website Design & Development",
    color: "#C8F31D",
    accent: "#1a3a00",
    serviceHref: "/web-development",
    images: [
      { src: "/portfolio/web/website-design-bizzone-digital.webp", alt: "BizzOne Digital agency website displayed on a laptop", width: 1600, height: 900, span: "col-span-1 row-span-2" },
      { src: "/portfolio/web/website-design-cobb-church-network.webp", alt: "Website design for Cobb Church Network shown on a desktop monitor", width: 1600, height: 900, span: "col-span-1" },
      { src: "/portfolio/web/website-design-a1-furnished-homes.webp", alt: "Website design for A1 Furnished Homes, a GTA furnished rentals company", width: 1600, height: 900, span: "col-span-1" },
      { src: "/portfolio/web/website-design-toronto-notary.webp", alt: "Website design for Toronto Notary, a legal documents service", width: 1600, height: 900, span: "col-span-1" },
      { src: "/portfolio/web/website-design-iso-9001-consulting.webp", alt: "Website design for an ISO 9001 certification consultancy serving SMEs", width: 1600, height: 900, span: "col-span-1" },
      { src: "/portfolio/web/website-design-corner-store.webp", alt: "Website design for Corner Store, a local convenience store", width: 1600, height: 900, span: "col-span-1" },
    ],
  },
  {
    id: "social",
    title: "Social Media",
    sub: "Content Creation & Creative",
    color: "#EA4335",
    accent: "#4e0a0a",
    serviceHref: "/service/social-media-management",
    images: [
      { src: "/portfolio/media/social-media-facebook-cover-haven-tire-garage.webp", alt: "Facebook cover design for Haven Tire Garage by BizzOne Digital", width: 1600, height: 900, span: "col-span-1" },
      { src: "/portfolio/media/social-media-facebook-cover-silken-traders.webp", alt: "Facebook cover design for Silken Traders by BizzOne Digital", width: 1600, height: 900, span: "col-span-1" },
      { src: "/portfolio/media/social-media-facebook-cover-hands-that-heal.webp", alt: "Facebook cover design for Hands That Heal wellness clinic", width: 1600, height: 900, span: "col-span-1" },
      { src: "/portfolio/media/social-media-instagram-carousel-horizon-driving-school.webp", alt: "Instagram carousel on Ontario driving tips for Horizon Driving School", width: 1080, height: 1080, span: "col-span-1 row-span-2" },
      { src: "/portfolio/media/social-media-instagram-story-haven-paint-protection-film.webp", alt: "Instagram story promoting paint protection film for Haven Tint & Tire", width: 1080, height: 1080, span: "col-span-1 row-span-2" },
      { src: "/portfolio/media/social-media-instagram-story-rose-pasta.webp", alt: "Instagram story featuring rosé pasta for a restaurant client", width: 1080, height: 1080, span: "col-span-1 row-span-2" },
      { src: "/portfolio/media/social-media-instagram-story-wood-panel-feature-wall.webp", alt: "Instagram story showing a wood panel feature wall for a renovation client", width: 1080, height: 1080, span: "col-span-1 row-span-2" },
      { src: "/portfolio/media/social-media-instagram-story-horizon-driving-school.webp", alt: "Instagram story for Horizon Driving School aimed at new Ontario drivers", width: 1080, height: 1080, span: "col-span-1 row-span-2" },
      { src: "/portfolio/media/social-media-instagram-carousel-restaurant-menu.webp", alt: "Instagram carousel of fish pakora and pasta dishes for a restaurant client", width: 1080, height: 1080, span: "col-span-1 row-span-2" },
      { src: "/portfolio/media/social-media-instagram-carousel-haven-ceramic-coating.webp", alt: "Instagram carousel on PPF and ceramic coating for Haven Tint & Tire", width: 1080, height: 1080, span: "col-span-1 row-span-2" },
      { src: "/portfolio/media/social-media-instagram-carousel-renovation-projects.webp", alt: "Instagram carousel of bathroom and office renovation projects", width: 1080, height: 1080, span: "col-span-1 row-span-2" },
    ],
  },
  {
    id: "content",
    title: "Content Creation",
    sub: "Video Editing & Production",
    color: "#FBBC05",
    accent: "#4e3a00",
    serviceHref: "/service/video-editing-and-production",
    images: [
      { src: "/portfolio/content/video-reel-amritsari-kulcha.webp", alt: "Short-form food reel featuring Amritsari kulcha, shown on a phone", width: 1080, height: 1080, span: "col-span-1 row-span-2" },
      { src: "/portfolio/content/video-reel-haven-tint-and-tire.webp", alt: "Short-form video for Haven Tint & Tire shown on a smartphone", width: 1080, height: 1080, span: "col-span-1 row-span-2" },
      { src: "/portfolio/content/video-reel-horizon-driving-school.webp", alt: "Driving tips reel for Horizon Driving School playing on a phone", width: 1080, height: 1080, span: "col-span-1" },
      { src: "/portfolio/content/video-reel-teeth-whitening.webp", alt: "Teeth whitening promo reel for a beauty and wellness client", width: 1080, height: 1080, span: "col-span-1" },
    ],
  },
];

export const getPortfolioCategory = (id: string) => PORTFOLIO.find((c) => c.id === id);
