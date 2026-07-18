import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server output (server.js + only the deps it needs) —
  // the deployment shape SiteGround's Node.js Selector (and most non-Vercel
  // Node hosts) expects, instead of requiring `next start` + full node_modules.
  output: "standalone",
  async headers() {
    return [
      {
        // Let Hostinger's edge cache shield visitors from Node cold starts.
        // The short shared TTL keeps deployments fresh, while stale content
        // remains available during background revalidation or an origin wake-up.
        source: "/((?!_next/static|_next/image|api/).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=300, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
