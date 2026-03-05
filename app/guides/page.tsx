import Link from 'next/link'

export const metadata = {
  title: 'Septic System Guides | The Septic Guide',
  description: 'Comprehensive guides for homeowners on septic systems, maintenance, installation, and more.',
}

const guides = [
  { title: 'Complete Guide to Septic Systems', href: '/articles/complete-septic-guide', description: 'Everything homeowners need to know about how septic systems work, types, and maintenance.' },
  { title: 'Septic Maintenance Guide', href: '/guides/maintenance-guide', description: 'Step-by-step maintenance schedule to keep your septic system running smoothly.' },
  { title: 'Buying a Home with Septic', href: '/guides/buying-home-with-septic', description: 'What every homebuyer should know before purchasing a home with a septic system.' },
  { title: 'How to Find Your Septic Tank', href: '/guides/find-your-septic-tank', description: 'Methods to locate your septic tank on your property.' },
  { title: 'Septic Dos and Don\'ts', href: '/guides/septic-dos-and-donts', description: 'Essential rules every septic system owner should follow.' },
  { title: 'How Often to Pump Your Septic Tank', href: '/articles/how-often-pump-septic-tank', description: 'Find your exact pumping schedule by tank size and household size, with EPA-based guidelines.' },
  { title: 'What You Can and Cannot Flush', href: '/articles/what-can-cannot-flush-septic-system', description: 'The complete list of what is safe to flush, what to keep out of your drains, and why it matters.' },
]

export default function GuidesPage() {
  return (
    <>
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-extrabold mb-4">Septic System Guides</h1>
          <p className="text-lg opacity-70 max-w-2xl">Comprehensive, homeowner-focused guides on every aspect of septic systems.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3" style={{ backgroundColor: '#E0E6EC', color: '#2C3E50' }}>Guide</span>
                <h2 className="text-lg font-bold text-[#2C3E50] mb-2">{guide.title}</h2>
                <p className="text-sm text-[#5A6B7A]">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
