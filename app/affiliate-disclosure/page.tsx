import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | The Septic Guide',
  description: 'Learn about affiliate relationships and how The Septic Guide earns revenue while maintaining editorial independence.',
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Affiliate Disclosure</h1>
          <p className="text-xl text-slate-300">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Short Version</h2>
          <p className="text-slate-600 mb-6">
            Some links on The Septic Guide are affiliate links. If you click one and make a purchase, we may earn a commission — at no extra cost to you. This helps us keep our content free and our site running.
          </p>
          <p className="text-slate-600 mb-8">
            We only recommend products and services we genuinely believe are worth your money. Our editorial opinions are never influenced by affiliate relationships.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Full Disclosure</h2>
          <p className="text-slate-600 mb-4">
            The Septic Guide is a participant in affiliate advertising programs, including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
            <li>Amazon Services LLC Associates Program — an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com</li>
            <li>Home Depot Affiliate Program</li>
            <li>Other home improvement and contractor referral programs</li>
          </ul>
          <p className="text-slate-600 mb-8">
            When you click an affiliate link and complete a purchase or form submission, we may receive a commission. The price you pay is never affected by whether or not we earn a commission.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Identify Affiliate Links</h2>
          <p className="text-slate-600 mb-8">
            We do our best to clearly identify affiliate links and sponsored content throughout the site. You may see disclosures like &quot;affiliate link,&quot; &quot;we may earn a commission,&quot; or similar language near product recommendations. This disclosure page applies site-wide as an additional notice in accordance with FTC guidelines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Editorial Independence</h2>
          <p className="text-slate-600 mb-4">
            Affiliate relationships never influence our recommendations or editorial content. Here&apos;s how we protect that:
          </p>
          <ul className="text-slate-600 mb-8 space-y-2">
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> We research products independently before including affiliate links</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> We will recommend a non-affiliate product over an affiliate product if it&apos;s genuinely better</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Negative reviews are published even when we have an affiliate relationship with the brand</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Brands cannot pay for positive editorial coverage</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contractor Lead Referrals</h2>
          <p className="text-slate-600 mb-8">
            The Septic Guide also operates a contractor quote request form. When you submit a quote request, your information may be shared with licensed contractors in your area or with our referral network partners. We may receive compensation for these referrals. You are under no obligation to hire any contractor you are connected with. See our <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link> for details on how your data is handled.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions?</h2>
          <p className="text-slate-600 mb-8">
            If you have any questions about our affiliate relationships or editorial practices, please <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">contact us</Link>. We&apos;re happy to explain any specific recommendation or relationship.
          </p>

          <div className="mt-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 underline">← Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
