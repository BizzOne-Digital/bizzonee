/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // NOTE on the canonical host: https://bizzonedigital.com -> https://www.bizzonedigital.com
  // is already handled at the Vercel domain level (checked: one permanent redirect that
  // preserves the path). An app-level host redirect is deliberately NOT added here, to
  // avoid a conflicting rule or redirect loop if the Vercel domain settings change.
  async redirects() {
    return [
      // App Development has a dedicated page; the old duplicate service URL points to it.
      { source: "/service/app-development", destination: "/app-development", statusCode: 301 },
    ];
  },
};

export default nextConfig;
