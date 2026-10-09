"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/content";
import { BUSINESS, SOCIAL_LINKS } from "@/data/site";

/** Every service page, linked directly (no more /#services placeholders). */
const SERVICES_LINKS = [
  { label: "SEO", href: "/service/seo" },
  { label: "Paid Advertising", href: "/service/paid-advertising" },
  { label: "Design & Branding", href: "/service/design-and-branding" },
  { label: "Video Editing & Production", href: "/service/video-editing-and-production" },
  { label: "Content Strategy", href: "/service/content-strategy" },
  { label: "Social Media Management", href: "/service/social-media-management" },
  { label: "AI Automation", href: "/service/ai-automation" },
  { label: "App Development", href: "/app-development" },
  { label: "Web Development", href: "/web-development" },
];

const ICONS = { Facebook, Instagram, LinkedIn: Linkedin } as const;
const SOCIALS = SOCIAL_LINKS.map((s) => ({ ...s, icon: ICONS[s.name] }));

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/10 pt-16">
      <div className="section pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label="BizzOne Digital home">
              <Image
                src="/fav.png"
                alt="BizzOne Digital logo"
                width={34}
                height={34}
                className="rounded-lg"
              />
              <span className="font-display text-base font-bold text-ink">
                BizzOne
                <span className="text-brand-mint"> Digital</span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/50">
              An AI Automation & Digital Growth Agency helping businesses
              attract, engage and convert with data-driven solutions.
            </p>

            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`BizzOne Digital on ${name}`}
                  className="grid h-9 w-9 place-items-center rounded-lg glass text-ink/70 transition-colors hover:text-brand-mint"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
              Quick Links
            </h2>

            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink/55 transition-colors hover:text-brand-mint"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
              Services
            </h2>

            <ul className="mt-4 space-y-2.5">
              {SERVICES_LINKS.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-ink/55 transition-colors hover:text-brand-mint"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
              Newsletter
            </h2>

            <p className="mt-4 text-sm text-ink/55">
              Get tips & insights to grow your business digitally.
            </p>

            <div className="mt-4 flex items-center gap-2 rounded-xl glass p-1.5">
              <label htmlFor="footer-newsletter-email" className="sr-only">Email address</label>
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-2 text-sm text-ink placeholder:text-ink/35 focus:outline-none"
              />

              <button
                aria-label="Subscribe"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-ink"
                style={{
                  background: "linear-gradient(135deg,#C8F31D,#B47BFF)",
                }}
              >
                <Send size={15} />
              </button>
            </div>

            <div className="mt-6 space-y-1.5 text-sm text-ink/50">
              <p><a href={`mailto:${BUSINESS.email}`} className="transition-colors hover:text-brand-mint">{BUSINESS.email}</a></p>
              <p><a href={BUSINESS.phoneHref} className="transition-colors hover:text-brand-mint">{BUSINESS.phoneDisplay}</a></p>
            </div>
          </div>
        </div>

        {/* Hours & Address */}
        <div className="mt-10 grid gap-8 border-t border-ink/10 pt-8 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
              Business Hours
            </h2>
            <div className="mt-3 space-y-1 text-sm text-ink/55">
              <p>{BUSINESS.hours.display}</p>
              <p>{BUSINESS.hours.closed}</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
              Visit Us
            </h2>
            <address className="mt-3 space-y-1 text-sm not-italic text-ink/55">
              <p>{BUSINESS.name}</p>
              <p>{BUSINESS.addressLine}</p>
              <p>
                <Link href="/contact" className="text-brand-mint underline-offset-4 hover:underline">Contact us &amp; get directions</Link>
              </p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10 py-6">
        <div className="section flex flex-col items-center justify-between gap-3 text-xs text-ink/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>

          <div className="flex gap-4 sm:-translate-x-4">
            <Link href="/privacy-policy" className="text-ink/80 transition-colors hover:text-brand-mint">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-ink/80 transition-colors hover:text-brand-mint">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}