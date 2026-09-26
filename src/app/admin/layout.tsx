import type { Metadata } from "next";

// Private area: never index. (Also disallowed in robots.txt and excluded from the sitemap.)
export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
