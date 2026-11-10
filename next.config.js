/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'sprinklersandlawns.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // www -> non-www (301 permanent). Canonical version: https://sprinklersandlawns.com
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.sprinklersandlawns.com' }],
        destination: 'https://sprinklersandlawns.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;