import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // SSR mode for Coolify/Nixpacks
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
