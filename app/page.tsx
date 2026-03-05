import Link from 'next/link'

const services = [
  {
    title: 'Septic Installation',
    description: 'Complete guide to new septic system installation, permits, and costs.',
    href: '/septic-services#installation',
    icon: '🏗️',
  },
  {
    title: 'Septic Pumping',
    description: 'When and how often to pump your septic tank, plus cost breakdowns.',
    href: '/septic-services#pumping',
    icon: '🔧',
  },
  {
    title: 'Maintenance Tips',
    description: 'Keep your septic system running smoothly with our expert maintenance advice.',
    href: '/maintenance',
    icon: '✅',
  },
  {
    title: 'Drain Field Care',
    description: 'Protect your drain field from common problems and costly repairs.',
    href: '/septic-services#drain-field',
    icon: '🌿',
  },
  {
    title: 'Septic Inspections',
    description: 'What to expect during a septic inspection and why it matters.',
    href: '/septic-services#inspections',
    icon: '🔍',
  },
  {
    title: 'Cost Guides',
    description: 'Transparent pricing for every septic service so you never overpay.',
    href: '/cost-guides',
    icon: '💰',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-green-dark to-brand-green text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Trusted Septic System Resource
          </h1>
          <p className="text-xl text-brand-green-light max-w-2xl mx-auto mb-8">
            Independent advice for homeowners on septic installation, maintenance, and repair. Make informed decisions and find qualified professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="bg-white text-brand-green-dark px-8 py-3 rounded-lg font-semibold hover:bg-brand-green-light transition-colors"
            >
              Get Free Quotes
            </Link>
            <Link
              href="/maintenance"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-green-dark transition-colors"
            >
              Maintenance Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-brand-neutral">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark text-center mb-12">
            Everything You Need to Know About Septic Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-brand-green-dark mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need Septic Help?</h2>
          <p className="text-brand-green-light text-lg mb-8 max-w-xl mx-auto">
            Connect with qualified septic professionals in your area. Get free, no-obligation quotes.
          </p>
          <Link
            href="/get-quote"
            className="inline-block bg-white text-brand-green-dark px-8 py-3 rounded-lg font-semibold hover:bg-brand-green-light transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
