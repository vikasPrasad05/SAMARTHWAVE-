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
  output: 'export', // ✅ For static hosting (like GitHub Pages)
  images: {
    unoptimized: true, // ✅ Disable Next image optimization for static export
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  compress: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  assetPrefix: './', // ✅ Important for relative paths on GitHub Pages
  trailingSlash: true, // ✅ Ensure proper routing on static export
};

module.exports = nextConfig;
