/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  basePath: '/temperamentos',
  assetPrefix: '/temperamentos/',
  // basePath: isProd ? '/temperamentos' : '',
  // assetPrefix: isProd ? '/temperamentos/' : undefined,
  output: 'export',
}

module.exports = nextConfig