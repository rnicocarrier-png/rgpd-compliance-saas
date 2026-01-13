/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // Configuration pour Clerk
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig