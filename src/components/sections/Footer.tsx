"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Send } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/content";

const SERVICES_LINKS = ["SEO", "Social Media Marketing", "Paid Ads Management", "Web Development", "AI Automation"];
const SOCIALS = [Facebook, Instagram, Linkedin, Twitter, Youtube];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16">
      <div className="section pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/#home" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="BizzOne Digital" width={34} height={34} className="rounded-lg" />
              <span className="font-display text-base font-bold text-white">BizzOne<span className="text-brand-mint"> Digital</span></span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              An AI Automation & Digital Growth Agency helping businesses attract, engage and convert with data-driven solutions.
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map((S, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-lg glass text-white/70 transition-colors hover:text-brand-mint">
                  <S size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-white/55 transition-colors hover:text-brand-mint">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES_LINKS.map((l) => (
                <li key={l}><Link href="/#services" className="text-sm text-white/55 transition-colors hover:text-brand-mint">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Newsletter</h4>
            <p className="mt-4 text-sm text-white/55">Get tips & insights to grow your business digitally.</p>
            <div className="mt-4 flex items-center gap-2 rounded-xl glass p-1.5">
              <input type="email" placeholder="Enter your email" className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none" />
              <button aria-label="Subscribe" className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-ink" style={{ background: "linear-gradient(135deg,#C8F31D,#B47BFF)" }}><Send size={15} /></button>
            </div>
            <div className="mt-6 space-y-1.5 text-sm text-white/50">
              <p>{COMPANY.email}</p>
              <p>{COMPANY.phone}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="section flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>Built for growth — futuristic by design.</p>
        </div>
      </div>
    </footer>
  );
}