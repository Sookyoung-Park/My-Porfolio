import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
    typescript:{
        ignoreBuildErrors:true,
    },
    images: {
      domains: ['s00kyoung.me'],
      unoptimized: true,
    },
    // eslint: {
    //   ignoreDuringBuilds: true,
    // },
};

module.exports = nextConfig
