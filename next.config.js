/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'sprinklersandlawns.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Required for API routes + file system on Vercel
  // Remove this if using static export only
};

module.exports = nextConfig;
