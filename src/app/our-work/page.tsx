import type { Metadata } from "next";
import OurWorkPage from "@/components/sections/OurWorkPage";
import { buildMetadata } from "@/lib/seo";
import { getIndustries } from "@/lib/webdevData";
import { CASE_STUDIES } from "@/data/case-studies";

export const revalidate = 300;

export const metadata: Metadata = buildMetadata({
  title: "Our Work: Web Design, Logos & Social Media | BizzOne",
  description:
    "Explore BizzOne Digital's portfolio of websites, logo design, brand identity, social media and video content created for businesses across Canada and the US.",
  path: "/our-work",
});

export default async function OurWork() {
  const industries = await getIndustries();
  const caseStudies = CASE_STUDIES.map(({ slug, client, title, summary }) => ({ slug, client, title, summary }));
  return <OurWorkPage initialIndustries={industries} caseStudies={caseStudies} />;
}
