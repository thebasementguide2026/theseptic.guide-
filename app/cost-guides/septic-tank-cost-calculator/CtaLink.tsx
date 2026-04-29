'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

type Gtag = (...args: unknown[]) => void

interface Props {
  href: string
  className?: string
  ctaText: string
  placement: string
  children: ReactNode
}

export default function CtaLink({ href, className, ctaText, placement, children }: Props) {
  const handleClick = () => {
    if (typeof window === 'undefined') return
    const w = window as unknown as { gtag?: Gtag }
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'calculator_cta_click', {
        calculator_name: 'septic_tank_cost_calculator',
        cta_text: ctaText,
        cta_destination: href,
        placement,
      })
    }
  }
  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
