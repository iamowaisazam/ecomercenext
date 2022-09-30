/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  basePath: '/ecomercenext',
  assetPrefix: '/ecomercenext/',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
}



module.exports = nextConfig
