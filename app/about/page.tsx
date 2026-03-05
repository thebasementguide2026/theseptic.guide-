import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About The Septic Guide | Expert Septic System Resources',
  description: 'Learn about The Septic Guide - your trusted resource for septic system installation, maintenance, and repair information.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About The Septic Guide</h1>
          <p className="text-xl text-slate-300">
            Your trusted resource for septic system information and guidance
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 mb-6">
            The Septic Guide was created to help homeowners navigate the often confusing world of septic systems. Whether you are installing a new system, maintaining an existing one, or dealing with repairs, we provide clear, expert-backed information to help you make informed decisions.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Cover</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Installation Guides</h3>
              <p className="text-slate-600 text-sm">Step-by-step guidance on septic system installation, permits, and site preparation.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Maintenance Tips</h3>
              <p className="text-slate-600 text-sm">Regular maintenance schedules, pumping guidelines, and preventive care advice.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Cost Information</h3>
              <p className="text-slate-600 text-sm">Detailed cost breakdowns for installation, repairs, and ongoing maintenance.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Problem Solving</h3>
              <p className="text-slate-600 text-sm">Troubleshooting common septic issues and knowing when to call a professional.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Get Expert Help</h2>
          <p className="text-slate-600 mb-6">
            Need professional assistance with your septic system? We connect homeowners with qualified, local septic professionals.
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
