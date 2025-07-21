import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "car-nextjs-api.cheatdev.online",
        pathname: "/uploads/**",
      },
    ],
    domains: ["i.pinimg.com"],
  },
};

export default nextConfig;
