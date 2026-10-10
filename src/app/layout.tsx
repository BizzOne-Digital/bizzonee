import type { Metadata, Viewport } from "next";
import { Sora, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/data/site";
import { professionalServiceSchema, websiteSchema } from "@/lib/schema";

const display = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Fallback only (404 and private pages). Every indexable page sets its own
  // unique title, description, canonical, Open Graph and Twitter tags via buildMetadata().
  title: {
    default: "BizzOne Digital",
    template: "%s | BizzOne Digital",
  },
  applicationName: "BizzOne Digital",
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18342985285"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18342985285');
              gtag('config', 'G-LTWWHTWNJD');
            `,
          }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2365259790964821');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2365259790964821&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <JsonLd data={[professionalServiceSchema(), websiteSchema()]} />
        <div className="bg-space" />
        <div className="bg-grid" />
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          async
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6ac562f5f71147f2c22dd0a1"
          data-source="WEB_USER"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                function pin(el) {
                  el.style.setProperty('position', 'fixed', 'important');
                  el.style.setProperty('bottom', '20px', 'important');
                  el.style.setProperty('right', '20px', 'important');
                  el.style.setProperty('left', 'auto', 'important');
                  el.style.setProperty('top', 'auto', 'important');
                  el.style.setProperty('z-index', '999999', 'important');
                  el.style.setProperty('margin', '0', 'important');
                }
                function isChatWidget(node) {
                  if (!(node instanceof HTMLElement)) return false;
                  if (node.id && node.id.toLowerCase().indexOf('chat-widget') !== -1) return true;
                  if (node.tagName && node.tagName.toLowerCase().indexOf('chat-widget') !== -1) return true;
                  return !!node.querySelector && !!node.querySelector('iframe[src*="leadconnectorhq"]');
                }
                var observer = new MutationObserver(function (mutations) {
                  mutations.forEach(function (m) {
                    m.addedNodes.forEach(function (node) {
                      if (isChatWidget(node)) pin(node);
                    });
                  });
                });
                observer.observe(document.body, { childList: true });
              })();
            `,
          }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}