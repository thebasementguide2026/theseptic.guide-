import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Septic Cost Guides | The Septic Guide',
  description: 'Transparent cost breakdowns for septic services. Know what to expect before you call a contractor.',
  alternates: { canonical: 'https://theseptic.guide/cost-guides' },
}

const costGuides = [
  { title: 'Septic Tank Pumping Cost', range: '$300 - $600', href: '/cost-guides/pumping-cost', description: 'Average costs for septic tank pumping by tank size and location.' },
  { title: 'Septic Tank Cost Calculator', range: 'Free tool', href: '/cost-guides/septic-tank-cost-calculator', description: 'Free instant estimate for new installs, tank replacement, drainfield replacement, and full system replacement.' },
  { title: 'Septic System Installation Cost', range: '$3,000 - $15,000+', href: '/cost-guides/installation-cost', description: 'Complete breakdown of new septic system installation costs.' },
  { title: 'Drainfield Replacement Cost', range: '$5,000 - $20,000+', href: '/cost-guides/drainfield-replacement-cost', description: 'What to expect when replacing a failed drainfield.' },
  { title: 'Septic System Repair Cost', range: '$150 - $5,000', href: '/cost-guides/repair-cost', description: 'Common septic repairs and their typical costs.' },
  { title: 'Septic Inspection Cost', range: '$100 - $250', href: '/cost-guides/inspection-cost', description: 'Costs for routine and pre-purchase septic inspections.' },
  { title: 'Septic to Sewer Conversion Cost', range: '$5,000 – $15,000', href: '/cost-guides/septic-to-sewer-conversion-cost', description: 'Full cost breakdown for converting from septic to municipal sewer. Includes connection fees, line installation, decommissioning, grants, and 20-year financial comparison.' },
]

export default function CostGuidesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cost Guides' }]} />
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-extrabold mb-4">Septic Cost Guides</h1>
          <p className="text-lg opacity-70 max-w-2xl">Transparent cost breakdowns for every septic service. Know what to expect before you call a contractor.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3" style={{ backgroundColor: '#F3EAE0', color: '#8B5E3C' }}>Cost Guide</span>
                <h2 className="text-lg font-bold text-[#2C3E50] mb-2">{guide.title}</h2>
                <p className="text-2xl font-extrabold text-[#C8875F] mb-2">{guide.range}</p>
                <p className="text-sm text-[#5A6B7A]">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
