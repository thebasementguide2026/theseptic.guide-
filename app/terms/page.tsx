import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | The Septic Guide',
  description: 'Terms of Use for The Septic Guide — your trusted resource for septic system information and guidance.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="text-xl text-slate-300">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Acceptance of Terms</h2>
          <p className="text-slate-600 mb-8">
            By accessing or using theseptic.guide (&quot;the Site&quot;), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site. We reserve the right to update these terms at any time — continued use of the Site after changes constitutes acceptance.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Use of Content</h2>
          <p className="text-slate-600 mb-4">
            All content on The Septic Guide — including articles, guides, images, pricing data, and recommendations — is provided for informational purposes only. You may:
          </p>
          <ul className="text-slate-600 mb-4 space-y-2">
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Read and use our content for personal, non-commercial purposes</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Share links to our articles</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Quote brief excerpts with attribution and a link back to the source</li>
          </ul>
          <p className="text-slate-600 mb-4">You may not:</p>
          <ul className="text-slate-600 mb-8 space-y-2">
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">✗</span> Copy, reproduce, or republish our content in full without written permission</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">✗</span> Use our content for commercial purposes without a license</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">✗</span> Scrape or systematically download content from the Site</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">✗</span> Remove copyright or attribution notices from our content</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Informational Purposes Only</h2>
          <p className="text-slate-600 mb-8">
            The content on The Septic Guide is for general informational purposes only. It is not a substitute for professional advice from a licensed septic contractor, engineer, or other qualified professional. Always consult a qualified professional before undertaking any septic system project. Costs, techniques, and building codes vary by location and change over time — verify all information with local professionals before making decisions.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contractor Referrals</h2>
          <p className="text-slate-600 mb-8">
            When you submit a quote request through our site, we connect you with third-party contractors and referral network partners. The Septic Guide does not employ, endorse, or guarantee the work of any contractor. We are not a party to any agreement between you and a contractor. Always verify contractor licenses, insurance, and references independently before hiring.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Affiliate Links &amp; Advertising</h2>
          <p className="text-slate-600 mb-8">
            The Site contains affiliate links and may display advertising. See our <Link href="/affiliate-disclosure" className="text-blue-600 hover:text-blue-800 underline">Affiliate Disclosure</Link> for full details. We are not responsible for the content, products, or practices of third-party sites linked from our Site.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimer of Warranties</h2>
          <p className="text-slate-600 mb-8">
            The Site and its content are provided &quot;as is&quot; without any warranty of any kind, express or implied. We do not warrant that the Site will be error-free, uninterrupted, or free of viruses. We do not warrant the accuracy, completeness, or timeliness of any content on the Site.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
          <p className="text-slate-600 mb-8">
            To the fullest extent permitted by law, The Septic Guide shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or reliance on any content published here. Our total liability to you for any claim shall not exceed $100.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law</h2>
          <p className="text-slate-600 mb-8">
            These Terms shall be governed by the laws of the State of New York, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Suffolk County, New York.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact</h2>
          <p className="text-slate-600 mb-8">
            Questions about these Terms? <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">Contact us here</Link>.
          </p>

          <div className="mt-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 underline">← Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
