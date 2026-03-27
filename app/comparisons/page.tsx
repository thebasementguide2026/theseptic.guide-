import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs';
import LeadForm from '@/components/LeadForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Septic System Comparisons | The Septic Guide',
  description: 'Compare septic systems, materials, and service providers. Side-by-side comparisons to help you make informed decisions.',
  alternates: { canonical: 'https://theseptic.guide/comparisons' },
};

const comparisons = [
  {
    title: 'Concrete vs Plastic Septic Tanks',
    description: 'Compare durability, cost, installation, and longevity of concrete and plastic septic tanks.',
    slug: 'concrete-vs-plastic-septic-tanks',
    badge: 'Tanks',
    badgeColor: 'bg-blue-100 text-blue-800',
  },
  {
    title: 'Aerobic vs Anaerobic Septic Systems',
    description: 'Understand the differences between aerobic and anaerobic treatment systems for your property.',
    slug: 'aerobic-vs-anaerobic-systems',
    badge: 'Systems',
    badgeColor: 'bg-green-100 text-green-800',
  },
  {
    title: 'Gravity vs Pressure Distribution',
    description: 'Compare gravity-fed and pressure distribution drain field systems for different soil types.',
    slug: 'gravity-vs-pressure-distribution',
    badge: 'Drain Fields',
    badgeColor: 'bg-purple-100 text-purple-800',
  },
  {
    title: 'Septic Tank vs Sewer Connection',
    description: 'Weigh the pros and cons of septic systems versus municipal sewer connections.',
    slug: 'septic-tank-vs-sewer',
    badge: 'Systems',
    badgeColor: 'bg-green-100 text-green-800',
  },
  {
    title: 'DIY vs Professional Septic Maintenance',
    description: 'Compare the costs and risks of maintaining your septic system yourself versus hiring professionals.',
    slug: 'diy-vs-professional-maintenance',
    badge: 'Maintenance',
    badgeColor: 'bg-amber-100 text-amber-800',
  },
  {
    title: 'Sand Filter vs Mound System',
    description: 'Compare alternative septic system types for properties with challenging soil conditions.',
    slug: 'sand-filter-vs-mound-system',
    badge: 'Systems',
    badgeColor: 'bg-green-100 text-green-800',
  },
];

export default function ComparisonsPage() {
  return (
    <main className="min-h-screen bg-white">
              <Breadcrumbs items={[{ label: 'Comparisons' }]} />
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Septic System Comparisons</h1>
          <p className="text-xl text-slate-300">
            Side-by-side comparisons to help you choose the right septic solutions
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((item) => (
            <div key={item.slug} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h2>
                <p className="text-slate-600 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
