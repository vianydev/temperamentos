/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/temperamentos' : '',
  assetPrefix: isProd ? '/temperamentos/' : '',
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
 
}

module.exports = nextConfig;