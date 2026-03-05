import Link from 'next/link'

export const metadata = {
  title: 'Septic Services Guide | The Septic Guide',
  description: 'Complete guide to septic services including installation, pumping, inspections, repairs, and drain field maintenance.',
}

const services = [
  {
    id: 'installation',
    title: 'Septic System Installation',
    description: 'Everything you need to know about installing a new septic system, from site evaluation to final inspection.',
    details: ['Site evaluation and soil testing', 'Permit requirements by state', 'Choosing the right system type', 'Average costs: $3,000 - $15,000+', 'Timeline and what to expect'],
  },
  {
    id: 'pumping',
    title: 'Septic Tank Pumping',
    description: 'Regular pumping is essential for a healthy septic system. Learn when and how often to schedule service.',
    details: ['Recommended every 3-5 years', 'Average cost: $300 - $600', 'Signs your tank needs pumping', 'What happens during pumping', 'Finding a reliable service provider'],
  },
  {
    id: 'inspections',
    title: 'Septic Inspections',
    description: 'Understand what a septic inspection covers and why it matters for home buyers and homeowners.',
    details: ['Pre-purchase inspections', 'Routine maintenance inspections', 'What inspectors look for', 'Average cost: $100 - $250', 'How to prepare for an inspection'],
  },
  {
    id: 'repairs',
    title: 'Septic System Repairs',
    description: 'From minor fixes to major overhauls, learn about common septic repairs and their costs.',
    details: ['Common problems and solutions', 'Repair vs. replacement decisions', 'Emergency repair guidance', 'Cost ranges for common repairs', 'Warning signs to watch for'],
  },
  {
    id: 'drain-field',
    title: 'Drain Field Services',
    description: 'Your drain field is crucial to your septic system. Learn how to protect and maintain it.',
    details: ['How drain fields work', 'Signs of drain field failure', 'Repair and restoration options', 'Prevention and maintenance tips', 'Replacement costs and considerations'],
  },
]

export default function SepticServicesPage() {
  return (
    <>
      <section className="bg-brand-green-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Septic Services Guide</h1>
          <p className="text-brand-green-light text-lg max-w-2xl">Your comprehensive resource for understanding every septic service. Content coming soon.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-brand-green-dark mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-gray-700">
                      <span className="text-brand-green mt-1">\u2713</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/get-quote" className="inline-block bg-brand-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-green-dark transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
