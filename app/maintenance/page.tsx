import Link from 'next/link'

export const metadata = {
  title: 'Septic Maintenance Guide | The Septic Guide',
  description: 'Learn how to properly maintain your septic system. Tips, schedules, and best practices to extend the life of your system.',
}

const tips = [
  { title: 'Pump Regularly', description: 'Have your septic tank pumped every 3-5 years depending on household size and usage.' },
  { title: 'Watch What You Flush', description: 'Only flush toilet paper and human waste. Avoid flushing wipes, feminine products, or chemicals.' },
  { title: 'Conserve Water', description: 'Spread out laundry loads and fix leaky faucets to avoid overloading your system.' },
  { title: 'Protect Your Drain Field', description: 'Never park vehicles or plant trees over your drain field. Keep the area clear.' },
  { title: 'Schedule Inspections', description: 'Get a professional inspection every 1-3 years to catch problems early.' },
  { title: 'Use Septic-Safe Products', description: 'Choose cleaning products labeled safe for septic systems to protect beneficial bacteria.' },
]

export default function MaintenancePage() {
  return (
    <>
      <section className="bg-brand-green-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Septic Maintenance Guide</h1>
          <p className="text-brand-green-light text-lg max-w-2xl">Keep your septic system running smoothly with these essential maintenance tips. Detailed content coming soon.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-brand-green-dark mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/get-quote" className="inline-block bg-brand-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-green-dark transition-colors">
              Find a Maintenance Professional
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
