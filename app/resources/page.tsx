import Link from 'next/link'

export const metadata = {
  title: 'Septic Resources | The Septic Guide',
  description: 'Helpful septic system resources including FAQs, guides, and tools for homeowners.',
}

const faqs = [
  { q: 'How often should I pump my septic tank?', a: 'Most tanks should be pumped every 3-5 years, depending on household size and tank capacity.' },
  { q: 'What are signs my septic system is failing?', a: 'Slow drains, sewage odors, wet spots in the yard, and gurgling sounds in pipes are common warning signs.' },
  { q: 'How long does a septic system last?', a: 'A well-maintained septic system can last 25-30 years or more. Neglected systems may fail in as few as 10 years.' },
  { q: 'Can I use a garbage disposal with a septic system?', a: 'While possible, garbage disposals increase the load on your system and may require more frequent pumping.' },
  { q: 'How much does a new septic system cost?', a: 'Costs range from $3,000 to $15,000+ depending on system type, soil conditions, and local regulations.' },
]

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-brand-green-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Septic Resources</h1>
          <p className="text-brand-green-light text-lg max-w-2xl">Helpful guides, FAQs, and tools to help you manage your septic system. More resources coming soon.</p>
        </div>
      </section>
      <section id="faqs" className="py-16">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-brand-green-dark mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/get-quote" className="inline-block bg-brand-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-green-dark transition-colors">
              Get Expert Help
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
