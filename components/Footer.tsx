import Link from 'next/link'

const footerSections = [
  {
    title: 'GUIDES',
    links: [
      { label: 'Complete Septic Guide', href: '/guides/complete-septic-guide' },
      { label: 'Maintenance Guide', href: '/guides/maintenance-guide' },
      { label: 'Buying a Home with Septic', href: '/guides/buying-home-with-septic' },
      { label: 'How to Find Your Septic Tank', href: '/guides/find-your-septic-tank' },
      { label: 'Dos and Don\'ts', href: '/guides/septic-dos-and-donts' },
    ],
  },
  {
    title: 'COST GUIDES',
    links: [
      { label: 'Pumping Cost', href: '/cost-guides/pumping-cost' },
      { label: 'Installation Cost', href: '/cost-guides/installation-cost' },
      { label: 'Drainfield Replacement', href: '/cost-guides/drainfield-replacement-cost' },
      { label: 'Repair Cost', href: '/cost-guides/repair-cost' },
      { label: 'Inspection Cost', href: '/cost-guides/inspection-cost' },
    ],
  },
  {
    title: 'PROBLEMS',
    links: [
      { label: 'Tank Backing Up', href: '/problems/tank-backing-up' },
      { label: 'Septic Smell in Yard', href: '/problems/septic-smell-in-yard' },
      { label: 'Drainfield Failing', href: '/problems/drainfield-failing' },
      { label: 'Overflow After Rain', href: '/problems/overflow-after-rain' },
      { label: 'Slow Drains', href: '/problems/slow-drains' },
    ],
  },
  {
    title: 'REVIEWS',
    links: [
      { label: 'Best Septic Treatments', href: '/reviews/best-septic-treatments' },
      { label: 'Best Tank Risers', href: '/reviews/best-tank-risers' },
      { label: 'Best System Alarms', href: '/reviews/best-system-alarms' },
      { label: 'Best TP for Septic', href: '/reviews/best-toilet-paper-for-septic' },
      { label: 'Best Drain Cleaners', href: '/reviews/best-drain-cleaners' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#1A2636] text-white">
      <div className="container mx-auto px-4 max-w-6xl py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold">
              The <span className="text-white">Septic Guide</span>
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Independent resource for septic system maintenance, repair, and cost guidance. Written for homeowners, not contractors.
            </p>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm tracking-wider mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sister Sites */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <span>Our Network:</span>
            <a href="https://thebasement.guide/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">
              The Basement Guide
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} The Septic Guide. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
