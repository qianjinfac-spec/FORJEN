import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server output (server.js + only the deps it needs) —
  // the deployment shape SiteGround's Node.js Selector (and most non-Vercel
  // Node hosts) expects, instead of requiring `next start` + full node_modules.
  output: "standalone",
};

export default nextConfig;
