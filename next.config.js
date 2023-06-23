/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // basePath: '/temperamentos',
  // assetPrefix: '/temperamentos/',
  assetPrefix: isProd ? '/temperamentos' : '',
  assetPrefix: isProd ? '/temperamentos/' : undefined,
  output: 'export',
}

module.exports = nextConfig