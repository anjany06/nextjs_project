import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'], // Add 'unsplash.com' to the list of allowed domains
  },
};

export default nextConfig;
