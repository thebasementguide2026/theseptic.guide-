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
      {
        source: '/articles/maintenance/septic-system-maintenance-checklist',
        destination: '/maintenance/septic-system-maintenance-checklist',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
