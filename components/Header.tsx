'use client'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'Guides', href: '/guides' },
  { label: 'Cost Guides', href: '/cost-guides' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Problems', href: '/problems' },
  { label: 'Comparisons', href: '/comparisons' },
  { label: 'About', href: '/about' },
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
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#5A6B7A] hover:text-[#2C3E50] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/get-quote" className="btn-primary text-sm">
              Get Free Quotes
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#2C3E50]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-[#E8E4DE]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium text-[#5A6B7A] hover:text-[#2C3E50]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/get-quote"
              className="btn-primary text-sm mt-2 text-center block"
              onClick={() => setMenuOpen(false)}
            >
              Get Free Quotes
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
