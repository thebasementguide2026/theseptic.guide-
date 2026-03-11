import Link from 'next/link'

const footerSections = [
  {
    title: 'GUIDES',
    links: [
      { label: 'Complete Septic Guide', href: '/articles/complete-septic-guide' },
      { label: 'How Often to Pump', href: '/articles/how-often-pump-septic-tank' },
      { label: 'Maintenance Guide', href: '/maintenance/septic-system-maintenance-checklist' },
      { label: 'Buying a Home with Septic', href: '/guides/buying-home-with-septic' },
      { label: 'How to Find Your Septic Tank', href: '/articles/how-to-find-your-septic-tank' },
      { label: 'Dos and Don\'ts', href: '/guides/septic-dos-and-donts' },
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
    ],
  },
]

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-white'>
      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
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
        <div className='border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-slate-500 text-xs'>
            Our Network: <a href='https://thebasement.guide/' className='text-slate-400 hover:text-amber-500 transition-colors'>The Basement Guide</a> | <a href='https://thegarage.guide/' className='text-slate-400 hover:text-amber-500 transition-colors'>The Garage Guide</a>
          </p>
        </div>
        {/* Bottom */}
        <div className='border-t border-slate-800 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-slate-500 text-xs'>&copy; {new Date().getFullYear()} The Septic Guide. All rights reserved.</p>
          <div className='flex gap-6'>
            <Link href='/privacy' className='text-slate-500 text-xs hover:text-slate-300 transition-colors'>Privacy Policy</Link>
            <Link href='/terms' className='text-slate-500 text-xs hover:text-slate-300 transition-colors'>Terms of Use</Link>
            <Link href='/affiliate-disclosure' className='text-slate-500 text-xs hover:text-slate-300 transition-colors'>Affiliate Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
