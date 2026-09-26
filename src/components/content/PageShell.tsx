import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

/** Standard page wrapper used by every content page (matches existing pages). */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="relative pt-20">{children}</main>
      <Footer />
    </>
  );
}
