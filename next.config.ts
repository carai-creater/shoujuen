import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/blog", destination: "/column", permanent: true },
      { source: "/blog/:slug", destination: "/column/:slug", permanent: true },
      { source: "/producers", destination: "/farms", permanent: true },
      { source: "/tea-library", destination: "/the-leaves", permanent: true },
      { source: "/brewing", destination: "/brew", permanent: true },
    ];
  },
};

export default nextConfig;
