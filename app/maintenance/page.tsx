import Link from 'next/link'
import LeadForm from '@/components/LeadForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Septic Maintenance Guide | The Septic Guide',
  description: 'Learn how to properly maintain your septic system. Tips, schedules, and expert advice for septic tank care.',
};

const tips = [
  { title: 'Pump Regularly', description: 'Have your septic tank pumped every 3-5 years depending on household size and usage.', icon: '🔄' },
  { title: 'Watch What You Flush', description: 'Only flush toilet paper and human waste. Avoid wipes, feminine products, and chemicals.', icon: '🚫' },
  { title: 'Conserve Water', description: 'Spread out laundry loads and fix leaky faucets to prevent overloading your system.', icon: '💧' },
  { title: 'Protect Your Drain Field', description: 'Never park vehicles or plant trees near your drain field area.', icon: '🌿' },
  { title: 'Schedule Inspections', description: 'Get a professional inspection every 1-3 years to catch problems early.', icon: '🔍' },
  { title: 'Use Septic-Safe Products', description: 'Choose cleaning products labeled safe for septic systems.', icon: '✅' },
];

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Septic System Maintenance</h1>
          <p className="text-xl text-slate-300">
            Keep your septic system running smoothly with proper care and maintenance
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Essential Maintenance Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div key={tip.title} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">{tip.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{tip.title}</h3>
              <p className="text-slate-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Professional Maintenance?</h2>
          <p className="text-slate-600 mb-8">
            Connect with qualified septic professionals in your area for inspections, pumping, and repairs.
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
