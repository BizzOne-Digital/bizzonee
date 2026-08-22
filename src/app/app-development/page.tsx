import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import AppDevelopment from "@/components/sections/AppDevelopment";

export const metadata: Metadata = {
  title: "App Development",
  description: "Custom iOS, Android and cross-platform app development built to launch fast and scale with your business.",
};

export default function AppDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-20">
        <AppDevelopment />
      </main>
      <Footer />
    </>
  );
}
