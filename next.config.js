/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // basePath: isProd ? '/temperamentos' : '',
  // assetPrefix: isProd ? '/temperamentos/' : '',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : '',
  reactStrictMode: true,
  output: 'export',
}

module.exports = nextConfig;