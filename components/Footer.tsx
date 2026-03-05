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
    <footer style={{ backgroundColor: '#1A2636' }} className="text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5 L35 17 L35 35 L5 35 L5 17 Z" fill="none" stroke="#C8875F" strokeWidth="2" />
                <rect x="14" y="19" width="12" height="10" rx="1.5" fill="none" stroke="#C8875F" strokeWidth="1.5" opacity="0.5" />
                <line x1="20" y1="35" x2="20" y2="39" stroke="#C8875F" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              </svg>
              <span className="text-lg">
                <span className="font-semibold opacity-55">The </span>
                <span className="font-extrabold">Septic Guide</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)' }} className="text-sm leading-relaxed">
              Independent resource for septic system maintenance, repair, and cost guidance. Written for homeowners, not contractors.
            </p>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold mb-4 tracking-wider">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ color: 'rgba(255,255,255,0.45)' }}
                      className="text-sm hover:text-[#C8875F] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p style={{ color: 'rgba(255,255,255,0.35)' }} className="text-sm">
            &copy; {new Date().getFullYear()} The Septic Guide. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-3">
            <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.35)' }} className="text-xs hover:text-[#C8875F] transition-colors">Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'rgba(255,255,255,0.35)' }} className="text-xs hover:text-[#C8875F] transition-colors">Terms of Use</Link>
            <Link href="/affiliate-disclosure" style={{ color: 'rgba(255,255,255,0.35)' }} className="text-xs hover:text-[#C8875F] transition-colors">Affiliate Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
