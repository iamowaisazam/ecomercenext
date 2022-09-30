/** @type {import('next').NextConfig} */

const nextConfig = {

  trailingSlash: true,
  // basePath:process.env.NEXT_PUBLIC_BASE_URL,
  // assetPrefix:process.env.NEXT_PUBLIC_ASSET_URL,
  reactStrictMode: true,
  swcMinify: true,
}



module.exports = nextConfig
