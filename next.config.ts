import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/parvezkhan.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
