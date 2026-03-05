import Link from 'next/link'

export const metadata = {
  title: 'Septic Cost Guides | The Septic Guide',
  description: 'Transparent cost breakdowns for septic services. Know what to expect before you hire.',
}

const costItems = [
  { service: 'Septic Tank Pumping', range: '$300 - $600', frequency: 'Every 3-5 years' },
  { service: 'Septic Inspection', range: '$100 - $250', frequency: 'Every 1-3 years' },
  { service: 'New System Installation', range: '$3,000 - $15,000+', frequency: 'One-time' },
  { service: 'Drain Field Repair', range: '$1,500 - $5,000', frequency: 'As needed' },
  { service: 'Tank Replacement', range: '$3,000 - $7,000', frequency: 'Every 25-30 years' },
  { service: 'Baffle Repair', range: '$300 - $900', frequency: 'As needed' },
  { service: 'Pipe Repair', range: '$150 - $1,000', frequency: 'As needed' },
  { service: 'System Replacement', range: '$5,000 - $20,000+', frequency: 'Every 25-30 years' },
]

export default function CostGuidesPage() {
  return (
    <>
      <section className="bg-brand-green-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Septic Cost Guides</h1>
          <p className="text-brand-green-light text-lg max-w-2xl">Know what to expect before you hire. Detailed cost articles coming soon.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-brand-green-dark text-white">
                  <th className="text-left p-4 font-semibold">Service</th>
                  <th className="text-left p-4 font-semibold">Cost Range</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">Frequency</th>
                </tr>
              </thead>
              <tbody>
                {costItems.map((item) => (
                  <tr key={item.service} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-medium text-brand-green-dark">{item.service}</td>
                    <td className="p-4 text-gray-700">{item.range}</td>
                    <td className="p-4 text-gray-500 hidden md:table-cell">{item.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
