/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during production builds
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'www.en.etemaaddaily.com'
      },
      {
        hostname: 'uploads-ssl.webflow.com'
      },
      {
        hostname: "marksmanhealthcare.com"
      }
    ]
  }
}

module.exports = nextConfig;