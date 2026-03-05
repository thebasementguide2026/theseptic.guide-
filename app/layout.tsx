import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Septic Guide \u2014 Independent Septic System Advice for Homeowners',
  description: 'Your trusted resource for septic system installation, maintenance, and repair. Get expert advice, cost guides, and find local professionals.',
  keywords: 'septic system, septic tank, septic maintenance, septic installation, septic repair, drain field',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Septic Guide',
  url: 'https://theseptic.guide',
  logo: 'https://theseptic.guide/logo.png',
  description: 'Independent resource for septic system installation, maintenance, and repair advice for homeowners.',
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'The Septic Guide',
  url: 'https://theseptic.guide',
  description: 'Expert septic system advice for homeowners. Cost guides, maintenance tips, and professional referrals.',
  publisher: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    logo: {
      '@type': 'ImageObject',
      url: 'https://theseptic.guide/logo.png',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
