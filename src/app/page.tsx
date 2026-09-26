import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import AIAutomation from "@/components/sections/AIAutomation";
import TrustReviews from "@/components/sections/TrustReviews";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Digital Marketing & AI Automation Agency | BizzOne Digital",
  description:
    "Mississauga digital marketing and AI automation agency. SEO, paid ads, social media, web design and apps built to attract, engage and convert. Book a call.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <Process />
        <Work />
        <AIAutomation />
        <TrustReviews />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}