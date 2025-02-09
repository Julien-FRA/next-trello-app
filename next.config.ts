import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Désactive l’optimisation des images
  },
  /* config options here */
};

export default nextConfig;
