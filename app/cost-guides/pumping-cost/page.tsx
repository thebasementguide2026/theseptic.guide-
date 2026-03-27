import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Septic Tank Pumping Cost 2026: What You\'ll Actually Pay | The Septic Guide',
  description: 'The average septic tank pumping costs $300 to $600. Real pricing by tank size, region, hidden fees to watch for, and the questions to ask before hiring.',
  alternates: { canonical: 'https://theseptic.guide/cost-guides/pumping-cost' },
}

export default function PumpingCostRedirect() {
  redirect('/articles/septic-tank-pumping-cost')
}
