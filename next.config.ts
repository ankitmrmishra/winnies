import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1400, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      "images.unsplash.com",
      "sjc6.discourse-cdn.com",
      "assets.aceternity.com",
      "winnies.in",
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "dynamic-media-cdn.tripadvisor.com",
      "www.holidify.com",
      "www.exoticmiles.com",
    ],
  },
};

export default nextConfig;
