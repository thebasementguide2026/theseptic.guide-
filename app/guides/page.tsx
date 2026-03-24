import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'

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
  { title: 'Garbage Disposal and Septic Systems', href: '/guides/garbage-disposal-septic-systems', description: 'Can you use a garbage disposal with a septic system? Research-backed guide with costs, safe foods, rules, and recommendations.' },
        { title: 'Does Insurance Cover Septic Repair or Replacement?', href: '/articles/does-insurance-cover-septic-repair-replacement', description: 'What homeowners insurance covers, what it doesn\'t, add-on coverages worth buying, and how to protect yourself.' },
  { title: 'Septic System Inspection Guide', href: '/guides/septic-inspection-guide', description: 'What actually happens during a septic inspection, what inspectors look for at each component, how to prepare, and how to read the report.' },
  { title: 'Mound Septic System Guide', href: '/guides/mound-septic-system', description: 'How mound septic systems work, when you need one, what they cost to maintain, and how long they last.' },
  { title: 'Water Softeners and Septic Systems', href: '/guides/water-softener-septic-systems', description: 'Can you use a water softener with a septic system? Research-backed guide covering salt loads, drain field impact, system selection, and maintenance.' },
  { title: 'What to Plant Over and Around Your Septic System', href: '/guides/plants-septic-system', description: 'The right plants help your drainfield work better. Exactly what to plant over the tank, drainfield, and mound, what to avoid, and the vegetable garden question answered.' },
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

            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Guides' }
            ]} />
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
              {/* Lead Form */}
        <section className='py-12 bg-[#F5F0EB] rounded-2xl mt-12'>
          <div className='max-w-2xl mx-auto px-4'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#2C3E50] text-center mb-4'>Get Free Septic Quotes</h2>
            <p className='text-gray-600 text-center mb-8'>Connect with top-rated local septic professionals. Fast, free, no obligation.</p>
            <LeadForm />
          </div>
        </section>
    </>
  )
}
