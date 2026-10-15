import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/data/site";

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path d="M15.8 8.4h-1.6c-.5 0-.9.3-.9.9V11h2.5l-.3 2.6h-2.2V21h-2.7v-7.4H8.4V11h2.2V9.3c0-2 1.3-3.5 3.3-3.5h2v2.6z" fill="#FFFFFF" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="igfoot-simple" x1="0" y1="24" x2="24" y2="0">
          <stop offset="0" stopColor="#FEE411" />
          <stop offset="0.35" stopColor="#FD5949" />
          <stop offset="0.65" stopColor="#D6249F" />
          <stop offset="1" stopColor="#285AEB" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#igfoot-simple)" />
      <rect x="6" y="6" width="12" height="12" rx="3.5" fill="none" stroke="#FFFFFF" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3" fill="none" stroke="#FFFFFF" strokeWidth="1.6" />
      <circle cx="16" cy="8" r="0.9" fill="#FFFFFF" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        d="M16.5 13.4c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.1-.3 0-.4.1-.5l.3-.4c.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.4 3.8 3.4.5.2.9.4 1.3.5.5.2 1 .1 1.3.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.8.1-1z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <div className="bg-simple-footer-bg text-simple-footer-text">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-9 px-6 pb-8 pt-14">
        <div className="grid grid-cols-1 gap-8 text-[15px] sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <Image src="/fav.png" alt="BizzOne Digital logo" width={36} height={36} />
              <span className="font-display text-xl font-bold text-white">
                BizzOne <span className="text-simple-purple-light">Digital</span>
              </span>
            </div>
            <div>A full-service digital marketing and automation agency helping businesses attract, engage and convert.</div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-bold text-white">Quick Links</div>
            <Link href="/" className="text-simple-footer-text no-underline hover:text-white">Home</Link>
            <Link href="/about" className="text-simple-footer-text no-underline hover:text-white">About Us</Link>
            <Link href="/services" className="text-simple-footer-text no-underline hover:text-white">All Services</Link>
            <Link href="/pricing" className="text-simple-footer-text no-underline hover:text-white">Pricing</Link>
            <Link href="/our-work" className="text-simple-footer-text no-underline hover:text-white">Our Work</Link>
            <Link href="/contact" className="text-simple-footer-text no-underline hover:text-white">Contact</Link>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-bold text-white">Contact</div>
            <a href={BUSINESS.phoneHref} className="text-simple-footer-text no-underline hover:text-white">{BUSINESS.phoneDisplay}</a>
            <a href={`mailto:${BUSINESS.email}`} className="text-simple-footer-text no-underline hover:text-white">{BUSINESS.email}</a>
            <div>{BUSINESS.addressLine}</div>
            <div>{BUSINESS.hours.display}</div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="font-bold text-white">Follow us</div>
            <a href="https://www.facebook.com/Bizzonedigital" className="flex items-center gap-2 text-simple-footer-text no-underline hover:text-white">
              <FacebookIcon /> Facebook
            </a>
            <a href="https://www.instagram.com/bizzonedigital" className="flex items-center gap-2 text-simple-footer-text no-underline hover:text-white">
              <InstagramIcon /> Instagram
            </a>
            <a href={`https://wa.me/${BUSINESS.whatsappNumber}`} className="flex items-center gap-2 text-simple-footer-text no-underline hover:text-white">
              <WhatsAppIcon /> WhatsApp
            </a>
            <a href="https://www.linkedin.com/company/102540390" className="pl-[26px] text-simple-footer-text hover:text-white">LinkedIn</a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-simple-footer-line pt-[22px] text-sm">
          <div>© {new Date().getFullYear()} BizzOne Digital. All rights reserved.</div>
          <div className="flex flex-wrap gap-5">
            <a href="/privacy-policy" className="text-simple-footer-text hover:text-white">Privacy Policy</a>
            <a href="/terms-and-conditions" className="text-simple-footer-text hover:text-white">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}
