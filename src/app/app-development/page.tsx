import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import AppDevelopment from "@/components/sections/AppDevelopment";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { getService } from "@/lib/services";

export const metadata: Metadata = buildMetadata({
  title: "Mobile App Development (iOS & Android) | BizzOne Digital",
  description:
    "Custom iOS, Android and cross-platform app development, from lean MVPs to enterprise apps. Get a free, no-obligation quote from BizzOne Digital.",
  path: "/app-development",
});

export default function AppDevelopmentPage() {
  const svc = getService("app-development")!;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: svc.schemaName ?? svc.title,
            serviceType: svc.serviceType ?? svc.title,
            path: "/app-development",
            description: svc.schemaDescription ?? svc.tagline,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "App Development", path: "/app-development" },
          ]),
        ]}
      />
      <Navbar />
      <main className="relative pt-20">
        <AppDevelopment />
      </main>
      <Footer />
    </>
  );
}
