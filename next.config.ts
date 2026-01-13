import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/datingwebsitesonline",
  assetPrefix: "/datingwebsitesonline/",
};

export default nextConfig;
