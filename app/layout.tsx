import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Septic Guide \u2014 Expert Septic System Advice for Homeowners',
  description: 'Independent resource for septic system maintenance, repair, and cost guidance. Written for homeowners, not contractors.',
  keywords: 'septic system, septic tank, septic maintenance, septic installation, septic pumping, drainfield, septic cost',
  openGraph: {
    title: 'The Septic Guide \u2014 Expert Septic System Advice for Homeowners',
    description: 'Independent resource for septic system maintenance, repair, and cost guidance. Written for homeowners, not contractors.',
    siteName: 'The Septic Guide',
    type: 'website',
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
          <link rel="icon" href="/svgFavicon.svg" type="image/svg+xml" sizes="any" />
          <link rel="icon" href="/pngFavicon.png" type="image/png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WFHKQK63ZQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WFHKQK63ZQ');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
