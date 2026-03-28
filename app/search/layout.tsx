import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://theseptic.guide/search' },
}

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
