/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-iad3-2.xx.fbcdn.net',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
