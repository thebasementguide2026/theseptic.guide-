import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | The Septic Guide',
  description: 'Get in touch with The Septic Guide. Send us your questions, feedback, or suggestions.',
  alternates: { canonical: 'https://theseptic.guide/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{}{children}</>
}
