import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	experimental: {
		viewTransition: true
	},
	images: {
		domains: ['img.freepik.com']
  	}
}

export default nextConfig
