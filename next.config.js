/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // basePath: isProd ? '/temperamentos' : '',
  // assetPrefix: isProd ? '/temperamentos/' : undefined,
  basePath: '/temperamentos',
  assetPrefix: '/temperamentos/',
  output: 'export',
}

module.exports = nextConfig;