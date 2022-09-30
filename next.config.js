/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  basePath: '/out',
  assetPrefix: '/out/',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
}



module.exports = nextConfig
