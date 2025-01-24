import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
  },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;
