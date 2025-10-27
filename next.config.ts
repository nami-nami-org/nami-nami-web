import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.elsaborperuano.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'elsaborperuano.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
