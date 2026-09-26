import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import WebDevelopment from "@/components/sections/WebDevelopment";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { getSiteContent, getIndustries, getPackages } from "@/lib/webdevData";

// Re-generate every 5 minutes so admin-panel changes reach the server-rendered HTML.
export const revalidate = 300;

export const metadata: Metadata = buildMetadata({
  title: "Website Design & Development in Mississauga | BizzOne",
  description:
    "Fast, mobile-friendly websites for small businesses. Packages from $79 with SEO setup, booking and payments. See our work and start your project today.",
  path: "/web-development",
});

export default async function WebDevelopmentPage() {
  const [content, industries, packages] = await Promise.all([getSiteContent(), getIndustries(), getPackages()]);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Website Design & Development",
            serviceType: "Website design and development",
            path: "/web-development",
            description:
              "Fast, mobile-friendly websites for small businesses with SEO setup, booking forms, payment integration and eCommerce options.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Web Development", path: "/web-development" },
          ]),
        ]}
      />
      <Navbar />
      <main className="relative pt-20">
        <WebDevelopment initialContent={content} initialIndustries={industries} initialPackages={packages} />
      </main>
      <Footer />
    </>
  );
}
