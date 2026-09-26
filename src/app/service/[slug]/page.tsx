import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import ServiceDetail from "@/components/sections/ServiceDetail";
import JsonLd from "@/components/seo/JsonLd";
import { DYNAMIC_SERVICES, getService } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { caseStudiesForService } from "@/data/case-studies";

// Only real service pages are generated; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return DYNAMIC_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc || svc.href) return { title: "Service Not Found", robots: { index: false } };
  return buildMetadata({
    title: svc.seoTitle ?? `${svc.title} | BizzOne Digital`,
    description: svc.seoDescription ?? svc.tagline,
    path: `/service/${svc.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc || svc.href) notFound();
  const path = `/service/${svc.slug}`;
  const name = svc.schemaName ?? svc.title;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name,
            serviceType: svc.serviceType ?? svc.title,
            path,
            description: svc.schemaDescription ?? svc.tagline,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: svc.title, path },
          ]),
        ]}
      />
      <Navbar />
      <main className="relative pt-20">
        <ServiceDetail slug={slug} caseStudies={caseStudiesForService(slug)} />
      </main>
      <Footer />
    </>
  );
}
