// import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript:{
        ignoreBuildErrors:true,
    }
};

// export default withSentryConfig(nextConfig, {
// silent: true,
// org: "s00kyoung",
// project: "s00kyoung-portfolio",
// }, {
// widenClientFileUpload: true,
// transpileClientSDK: true,

// // Hides source maps from generated client bundles
// hideSourceMaps: true,
// // Automatically tree-shake Sentry logger statements to reduce bundle size
// disableLogger: true,
// automaticVercelMonitors: true,
// });