'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import SearchBar from '@/components/SearchBar'

const navItems = [
  {
    label: 'Guides',
    href: '/guides',
    dropdown: [
      { label: 'Complete Septic Guide', href: '/articles/complete-septic-guide' },
      { label: 'Maintenance Guide', href: '/guides/maintenance-guide' },
      { label: 'How Often to Pump', href: '/articles/how-often-pump-septic-tank' },
      { label: 'Buying a Home with Septic', href: '/guides/buying-home-with-septic' },
                { label: 'Selling a Home with Septic', href: '/guides/selling-home-with-septic-system' },
      { label: 'Find Your Septic Tank', href: '/guides/find-your-septic-tank' },
      { label: 'Dos and Don\'ts', href: '/guides/septic-dos-and-donts' },
      { label: 'Septic Inspection Guide', href: '/guides/septic-inspection-guide' },
    ],
  },
  {
    label: 'Cost Guides',
    href: '/cost-guides',
    dropdown: null,
  },
  {
    label: 'Reviews',
    href: '/reviews',
    dropdown: [
      { label: 'Septic Treatments', href: '/reviews/best-septic-treatments' },
      { label: 'Tank Risers', href: '/reviews/best-septic-tank-risers' },
      { label: 'System Alarms', href: '/reviews/best-septic-system-alarms' },
      { label: 'TP for Septic', href: '/reviews/best-toilet-paper-for-septic' },
      { label: 'Drain Cleaners', href: '/reviews/best-drain-cleaners-for-septic' },
              { label: 'Laundry Detergent', href: '/reviews/best-septic-safe-laundry-detergent' },
    ],
  },
  {
    label: 'Problems',
    href: '/problems',
    dropdown: [
      { label: 'Tank Backing Up', href: '/problems/tank-backing-up' },
      { label: 'Septic Smell in Yard', href: '/problems/septic-smell-in-yard' },
      { label: 'Drainfield Failing', href: '/problems/drainfield-failing' },
      { label: 'Overflow After Rain', href: '/problems/overflow-after-rain' },
      { label: 'Slow Drains', href: '/problems/slow-drains' },
            { label: 'Septic Smell in House', href: '/problems/septic-smell-inside-house' },
    ],
  },
  {
               label: 'Comparisons',
    href: '/comparisons',
    dropdown: null,
  },
  {
    label: 'About',
    href: '/about',
    dropdown: null,
  },
]

function HouseLogo({ color = '#2C3E50' }: { color?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5 L35 17 L35 35 L5 35 L5 17 Z" fill="none" stroke={color} strokeWidth="2" />
      <rect x="14" y="19" width="12" height="10" rx="1.5" fill="none" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <line x1="20" y1="35" x2="20" y2="39" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="bg-white border-b border-[#D5D0CA] sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <HouseLogo />
            <span className="text-xl">
              <span className="font-semibold opacity-55 text-[#2C3E50]">The </span>
              <span className="font-extrabold text-[#2C3E50]">Septic Guide</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#2C3E50] transition-colors rounded-lg hover:bg-gray-50 flex items-center gap-1"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <svg className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link href={item.href} className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#2C3E50] transition-colors rounded-lg hover:bg-gray-50">
                    {item.label}
                  </Link>
                )}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#2C3E50]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side: Search + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex items-center gap-1.5 text-gray-500 hover:text-[#2C3E50] transition-colors p-2 rounded-lg hover:bg-gray-50"
              aria-label="Search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-sm">Search</span>
            </button>
            <Link href="/get-quote" className="bg-[#C08B5C] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#A87A4F] transition-colors">
              Get Free Quotes
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-[#2C3E50]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Search bar dropdown */}
        {searchOpen && (
          <div className="border-t border-gray-100 py-3">
            <SearchBar onClose={() => setSearchOpen(false)} />
          </div>
        )}

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#2C3E50] rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-6 space-y-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-1.5 text-sm text-gray-500 hover:text-[#2C3E50]"
                        onClick={() => setMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/get-quote"
              className="block mx-4 mt-3 bg-[#C08B5C] text-white px-4 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-[#A87A4F] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Get Free Quotes
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
