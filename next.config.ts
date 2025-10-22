// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     formats: ['image/avif', 'image/webp'],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//   },
//   compress: true,
//   poweredByHeader: false,
//    eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     // Skip type checking during build
//     ignoreBuildErrors: true,
//   },
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // for static hosting
  images: { unoptimized: true }, // if using images
  assetPrefix: './', // ✅ important for GitHub Pages or custom domain
  trailingSlash: true,
};

export default nextConfig;
