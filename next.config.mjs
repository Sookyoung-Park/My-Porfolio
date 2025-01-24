/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript:{
        ignoreBuildErrors:true,
    },
    images: {
        domains: ['s00kyoung.me'],
        unoptimized: true,
    },
};

export default nextConfig