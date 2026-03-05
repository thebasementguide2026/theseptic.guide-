import Link from 'next/link'

const footerSections = [
  {
    title: 'SEPTIC SERVICES',
    links: [
      { label: 'Installation', href: '/septic-services#installation' },
      { label: 'Pumping', href: '/septic-services#pumping' },
      { label: 'Inspections', href: '/septic-services#inspections' },
      { label: 'Repairs', href: '/septic-services#repairs' },
      { label: 'Drain Field', href: '/septic-services#drain-field' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { label: 'Maintenance Guide', href: '/maintenance' },
      { label: 'Cost Guides', href: '/cost-guides' },
      { label: 'FAQs', href: '/resources#faqs' },
      { label: 'Find a Professional', href: '/get-quote' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">The Septic Guide</h3>
            <p className="text-brand-green-light text-sm leading-relaxed">
              Your independent resource for septic system advice. We help homeowners make informed decisions about installation, maintenance, and repair.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm mb-4 tracking-wider">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-brand-green-light hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-sm text-brand-green-light">
          <p>&copy; {new Date().getFullYear()} The Septic Guide. All rights reserved.</p>
          <p className="mt-1">Independent advice for homeowners. We may earn commissions from partner referrals.</p>
        </div>
      </div>
    </footer>
  )
}
