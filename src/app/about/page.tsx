import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import AboutPage from "@/components/sections/AboutPage";

export const metadata: Metadata = buildMetadata({
  title: "About BizzOne Digital | AI & Digital Growth Agency",
  description:
    "Meet BizzOne Digital, a full-service AI automation and digital growth agency blending design, engineering and marketing to build results that compound.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <Navbar />
      <main className="relative pt-20">
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}