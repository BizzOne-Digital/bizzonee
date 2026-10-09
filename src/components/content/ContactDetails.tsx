import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { BUSINESS, googleMapsEmbedUrl, googleMapsLinkUrl, whatsappUrl } from "@/data/site";

/** Full NAP block + map. All values come from data/site.ts. */
export default function ContactDetails({ showMap = true, mapTitle = "Map showing BizzOne Digital's office in Mississauga" }: { showMap?: boolean; mapTitle?: string }) {
  const items = [
    { icon: Phone, label: "Call us", value: BUSINESS.phoneDisplay, href: BUSINESS.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us on WhatsApp", href: whatsappUrl(), external: true },
    { icon: Mail, label: "Email", value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex items-center gap-4 rounded-2xl glass p-5 transition-shadow duration-300 hover:shadow-glow-mint"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-mint/10 text-brand-mint"><it.icon size={18} aria-hidden="true" /></span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-ink/45">{it.label}</span>
              <span className="block text-base font-semibold text-ink group-hover:text-brand-mint">{it.value}</span>
            </span>
          </a>
        ))}

        <div className="flex items-start gap-4 rounded-2xl glass p-5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-mint/10 text-brand-mint"><MapPin size={18} aria-hidden="true" /></span>
          <address className="not-italic">
            <span className="block text-xs font-semibold uppercase tracking-wider text-ink/45">Office</span>
            <span className="block text-base font-semibold text-ink">{BUSINESS.name}</span>
            <span className="block text-sm text-ink/70">{BUSINESS.address.streetAddress}</span>
            <span className="block text-sm text-ink/70">
              {BUSINESS.address.addressLocality}, {BUSINESS.address.addressRegion} {BUSINESS.address.postalCode}
            </span>
            <span className="block text-sm text-ink/70">{BUSINESS.address.countryName}</span>
            <a href={googleMapsLinkUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-semibold text-brand-mint underline-offset-4 hover:underline">
              Get directions on Google Maps
            </a>
          </address>
        </div>

        <div className="flex items-start gap-4 rounded-2xl glass p-5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-mint/10 text-brand-mint"><Clock size={18} aria-hidden="true" /></span>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-ink/45">Business hours</span>
            <span className="block text-sm text-ink/80">{BUSINESS.hours.display}</span>
            <span className="block text-sm text-ink/80">{BUSINESS.hours.closed}</span>
          </div>
        </div>
      </div>

      {showMap && (
        <div className="min-h-[360px] overflow-hidden rounded-3xl border border-ink/10 glass-strong p-2">
          <iframe
            title={mapTitle}
            src={googleMapsEmbedUrl}
            className="h-full min-h-[340px] w-full rounded-2xl"
            style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.8)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
