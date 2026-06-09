import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow LAN access during `next dev` (e.g. http://192.168.x.x:3000)
  allowedDevOrigins: ["192.168.1.116", "192.168.1.116:3000"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
