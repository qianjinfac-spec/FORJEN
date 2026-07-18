import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server output (server.js + only the deps it needs) —
  // the deployment shape SiteGround's Node.js Selector (and most non-Vercel
  // Node hosts) expects, instead of requiring `next start` + full node_modules.
  output: "standalone",
  async headers() {
    return [
      {
        // Revalidate HTML after every deployment so a CDN cannot pair an old
        // document with CSS/JS chunks from a newer build. Hashed static files
        // retain Next.js' immutable cache policy.
        source: "/((?!_next/static|_next/image|api/).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
