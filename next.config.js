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
            {
        source: '/guides/find-your-septic-tank',
        destination: '/articles/how-to-find-your-septic-tank',
        permanent: true,
      },
            {
        source: '/articles/guides/buying-home-with-septic',
        destination: '/guides/buying-home-with-septic',
        permanent: true,
      },
            {
        source: '/articles/guides/septic-tank-size-guide',
        destination: '/guides/septic-tank-size-guide',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
