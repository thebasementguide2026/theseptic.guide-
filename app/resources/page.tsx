import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Septic Resources | The Septic Guide',
  description: 'Helpful septic system resources including FAQs, guides, and tools for homeowners.',
  alternates: { canonical: 'https://theseptic.guide/resources' },
};

const faqs = [
  { q: 'How often should I pump my septic tank?', a: 'Most tanks should be pumped every 3-5 years, depending on household size and tank capacity.' },
  { q: 'What are signs my septic system is failing?', a: 'Slow drains, sewage odors, wet spots in the yard, and gurgling pipes are common warning signs.' },
  { q: 'How long does a septic system last?', a: 'A well-maintained septic system can last 25-30 years or more with proper care.' },
  { q: 'Can I use a garbage disposal with a septic system?', a: 'While possible, garbage disposals increase solids in your tank and may require more frequent pumping.' },
  { q: 'How much does a new septic system cost?', a: 'Costs range from $3,000 to $15,000+ depending on system type, soil conditions, and local regulations.' },
  { q: 'What should I never put in my septic system?', a: 'Avoid grease, chemicals, medications, wipes, and excessive amounts of household cleaners.' },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
                          <Breadcrumbs items={[{ label: 'Resources' }]} />
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Septic System Resources</h1>
          <p className="text-xl text-slate-300">
            Frequently asked questions and helpful resources for septic system owners
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-3xl py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="border border-slate-200 rounded-lg group">
              <summary className="p-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50 rounded-lg">
                {faq.q}
              </summary>
              <div className="px-4 pb-4 text-slate-600">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Have More Questions?</h2>
          <p className="text-slate-600 mb-8">
            Get personalized answers from local septic professionals.
          </p>
          <Link
            href="/get-quote"
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Get Free Quotes
          </Link>
        </div>
      </section>
    </main>
  );
}
