import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: every route is prerendered and ships as plain HTML/CSS/JS (out/), published by GitHub Pages (.github/workflows/deploy.yml).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: { rules: { "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" } } },
};

export default nextConfig;
