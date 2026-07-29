import type { Metadata, Viewport } from "next";
import { Sora, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

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

const siteUrl = "https://bizzonedigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "BizzOne Digital: AI Automation & Digital Growth Agency",
    template: "%s | BizzOne Digital",
  },

  description:
    "We build growth engines, not just marketing campaigns. SEO, social media, paid ads, web development and AI automation for ambitious businesses.",

  keywords: [
    "digital marketing agency",
    "AI automation",
    "SEO",
    "paid ads",
    "web development",
    "BizzOne Digital",
  ],

  openGraph: {
    title: "BizzOne Digital: AI Automation & Digital Growth Agency",
    description:
      "From strategy to automation, we help businesses attract, engage, and convert.",
    url: siteUrl,
    siteName: "BizzOne Digital",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BizzOne Digital",
    description: "AI Automation & Digital Growth Agency",
  },

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
              fbq('init', '2095355321379011');
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
            src="https://www.facebook.com/tr?id=2095355321379011&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <div className="bg-space" />
        <div className="bg-grid" />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}