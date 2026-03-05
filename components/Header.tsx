'use client'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'Septic Services', href: '/septic-services' },
  { label: 'Maintenance', href: '/maintenance' },
  { label: 'Resources', href: '/resources' },
  { label: 'Cost Guides', href: '/cost-guides' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 100 100" className="text-brand-green">
              <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.1" />
              <path d="M30 65 L50 25 L70 65 Z" fill="currentColor" />
            </svg>
            <span className="text-xl font-bold text-brand-green-dark">The Septic Guide</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-gray-600 hover:text-brand-green font-medium transition-colors">
                {item.label}
              </Link>
            ))}
            <Link href="/get-quote" className="bg-brand-green text-white px-5 py-2 rounded-lg font-semibold hover:bg-brand-green-dark transition-colors">
              Get a Quote
            </Link>
          </nav>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="block py-3 text-gray-600 hover:text-brand-green font-medium" onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/get-quote" className="block mt-2 bg-brand-green text-white px-5 py-2 rounded-lg font-semibold text-center hover:bg-brand-green-dark transition-colors" onClick={() => setMenuOpen(false)}>
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
