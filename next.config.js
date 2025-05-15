/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Next.js GitHub Pages specific configuration
  basePath: process.env.NODE_ENV === 'production' ? '/d24-i9-LifeFlowAi' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
