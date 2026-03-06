/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/guides/maintenance-guide',
        destination: '/maintenance',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
