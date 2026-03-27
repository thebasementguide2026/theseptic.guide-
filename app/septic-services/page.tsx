import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Septic Services Guide | The Septic Guide',
  description: 'Complete guide to septic services including installation, pumping, inspection, and repair.',
  alternates: { canonical: 'https://theseptic.guide/septic-services' },
};

const services = [
  {
    id: 'installation',
    title: 'Septic System Installation',
    description: 'Everything you need to know about installing a new septic system, from site evaluation to final inspection.',
    details: ['Site evaluation and soil testing', 'Permit requirements by state', 'Choosing the right system type', 'Installation timeline and process'],
  },
  {
    id: 'pumping',
    title: 'Septic Tank Pumping',
    description: 'Regular pumping is essential for septic system longevity. Learn about schedules, costs, and what to expect.',
    details: ['Recommended pumping frequency', 'Average costs by region', 'Signs you need pumping', 'What happens during pumping'],
  },
  {
    id: 'inspection',
    title: 'Septic Inspection',
    description: 'Professional inspections help catch problems early. Required for real estate transactions in many states.',
    details: ['Types of inspections', 'What inspectors look for', 'Inspection costs', 'When inspections are required'],
  },
  {
    id: 'repair',
    title: 'Septic System Repair',
    description: 'From minor fixes to major overhauls, understanding repair options helps you make informed decisions.',
    details: ['Common repair types', 'Repair vs replacement', 'Emergency repair services', 'Cost estimates'],
  },
];

export default function SepticServicesPage() {
  return (
    <main className="min-h-screen bg-white">
              <Breadcrumbs items={[{ label: 'Septic Services' }]} />
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Septic Services Guide</h1>
          <p className="text-xl text-slate-300">
            Comprehensive information on all septic system services for homeowners
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <span className="text-amber-700 mt-1">&#10003;</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Find a Septic Professional</h2>
          <p className="text-slate-600 mb-8">
            Connect with licensed septic service providers in your area for free estimates.
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
