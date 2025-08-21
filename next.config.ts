import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
  unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'github.com', pathname: '/**' },
      { protocol: 'https', hostname: 'githubusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'camo.githubusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'ghchart.rshah.org', pathname: '/**' },
      { protocol: 'https', hostname: 'media.licdn.com', pathname: '/**' },
    ],
  },
  /* config options here */
};

export default nextConfig;
