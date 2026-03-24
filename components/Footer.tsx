import Link from 'next/link'

const footerSections = [
  {
    title: 'GUIDES',
    links: [
      { label: 'Complete Septic Guide', href: '/articles/complete-septic-guide' },
      { label: 'How Often to Pump', href: '/articles/how-often-pump-septic-tank' },
      { label: 'Maintenance Guide', href: '/maintenance/septic-system-maintenance-checklist' },
      { label: 'Buying a Home with Septic', href: '/guides/buying-home-with-septic' },
                { label: 'Selling a Home with Septic', href: '/guides/selling-home-with-septic-system' },
      { label: 'How to Find Your Septic Tank', href: '/articles/how-to-find-your-septic-tank' },
      { label: 'Dos and Don\'ts', href: '/guides/septic-dos-and-donts' },
      { label: 'What to Flush', href: '/articles/what-can-cannot-flush-septic-system' },
      { label: 'Insurance Coverage', href: '/articles/does-insurance-cover-septic-repair-replacement' },
      { label: 'Tank Size Guide', href: '/guides/septic-tank-size-guide' },
      { label: 'How Long Systems Last', href: '/articles/how-long-does-a-septic-system-last' },
      { label: 'Septic Inspection Guide', href: '/guides/septic-inspection-guide' },
      { label: 'Mound Septic Systems', href: '/guides/mound-septic-system' },
      { label: 'Water Softeners & Septic', href: '/guides/water-softener-septic-systems' },
      { label: 'Plants & Septic Systems', href: '/guides/plants-septic-system' },
      { label: 'Safe Trees Near Septic', href: '/guides/safe-trees-near-septic-system' },
      { label: 'Septic System Permits', href: '/guides/septic-system-permits' },
      { label: 'Financial Assistance', href: '/guides/septic-system-financial-assistance' },
    ],
  },
  {
    title: 'COST GUIDES',
    links: [
      { label: 'Pumping Cost', href: '/articles/septic-tank-pumping-cost' },
      { label: 'Installation Cost', href: '/cost-guides/septic-system-installation-cost' },
      { label: 'Drainfield Replacement', href: '/cost-guides/drainfield-replacement-cost' },
      { label: 'Repair Cost', href: '/cost-guides/septic-system-repair-cost' },
      { label: 'Inspection Cost', href: '/cost-guides/septic-inspection-cost' },
            { label: 'Septic to Sewer Conversion', href: '/cost-guides/septic-to-sewer-conversion-cost' },
    ],
  },
  {
    title: 'PROBLEMS',
    links: [
      { label: 'Tank Backing Up', href: '/problems/tank-backing-up' },
      { label: 'Septic Smell in Yard', href: '/problems/septic-smell-in-yard' },
      { label: 'Drainfield Failing', href: '/problems/drainfield-failing' },
      { label: 'Overflow After Rain', href: '/problems/septic-overflow-after-rain' },
      { label: 'Slow Drains', href: '/problems/slow-drains' },
            { label: 'Septic Smell in House', href: '/problems/septic-smell-inside-house' },
      { label: 'Tree Roots in Septic', href: '/problems/tree-roots-septic-system' },
    ],
  },
  {
    title: 'COMPARISONS',
    links: [
      { label: 'Septic vs Sewer', href: '/comparisons/septic-vs-sewer' },
      { label: 'Aerobic vs Anaerobic', href: '/comparisons/aerobic-vs-anaerobic-septic-systems' },
      { label: 'Concrete vs Plastic vs Fiberglass', href: '/comparisons/concrete-vs-plastic-vs-fiberglass' },
    ],
  },
  {
    title: 'REVIEWS',
    links: [
      { label: 'Best Septic Treatments', href: '/reviews/best-septic-tank-treatments' },
      { label: 'Best Tank Risers', href: '/reviews/best-septic-tank-risers' },
      { label: 'Best System Alarms', href: '/reviews/best-septic-system-alarms' },
      { label: 'Best TP for Septic', href: '/reviews/best-toilet-paper-for-septic' },
      { label: 'Best Drain Cleaners', href: '/reviews/best-drain-cleaners-for-septic' },
      { label: 'Best Laundry Detergent', href: '/reviews/best-septic-safe-laundry-detergent' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-white'>
      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10'>
          {/* Brand Column */}
          <div className='lg:col-span-1'>
            <Link href='/' className='text-xl font-black tracking-tight'>
              The <span className='text-amber-500'>Septic Guide</span>
            </Link>
            <p className='text-slate-400 text-sm mt-4 leading-relaxed'>
              Independent resource for septic system maintenance, repair, and cost guidance. Written for homeowners, not contractors.
            </p>
          </div>
          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className='text-xs font-bold tracking-[0.2em] text-slate-400 mb-4'>{section.title}</h4>
              <ul className='space-y-2'>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className='text-sm text-slate-300 hover:text-amber-500 transition-colors'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sister Sites */}
        <div className='border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-slate-500 text-xs'>
            Our Network: <Link href='https://thebasement.guide/' className='text-slate-400 hover:text-amber-500'>The Basement Guide</Link> | <Link href='https://thegarage.guide/' className='text-slate-400 hover:text-amber-500'>The Garage Guide</Link>
          </p>
        </div>

        {/* Bottom */}
        <div className='border-t border-slate-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-slate-500 text-xs'>
            © {new Date().getFullYear()} The Septic Guide. All rights reserved.
          </p>
          <div className='flex gap-4'>
            <Link href='/privacy' className='text-slate-500 hover:text-slate-300 text-xs'>Privacy Policy</Link>
            <Link href='/terms' className='text-slate-500 hover:text-slate-300 text-xs'>Terms of Use</Link>
            <Link href='/affiliate-disclosure' className='text-slate-500 hover:text-slate-300 text-xs'>Affiliate Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
