import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Septic Guide',
  description: 'Privacy Policy for The Septic Guide — learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
            <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-slate-300">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
          <p className="text-slate-600 mb-8">
            The Septic Guide (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates theseptic.guide. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information. By using our site, you agree to the practices described here.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
          <p className="text-slate-600 mb-4">We collect information in two ways:</p>

          <h3 className="text-xl font-bold text-slate-900 mb-2">Information You Provide</h3>
          <p className="text-slate-600 mb-6">
            When you submit a quote request through our lead form, we collect your name, email address, phone number, ZIP code, and project type. This information is used to connect you with contractors in your area.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-2">Information Collected Automatically</h3>
          <p className="text-slate-600 mb-8">
            When you visit our site, we automatically collect certain information including your IP address, browser type, pages visited, and time spent on pages. This is collected via cookies and analytics tools (such as Google Analytics) to help us improve our content.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
            <li>To connect you with licensed contractors in your area when you submit a quote request</li>
            <li>To share your lead information with our referral network partners (such as Modernize Home Services) who may contact you about your project</li>
            <li>To improve our website content and user experience</li>
            <li>To analyze site traffic and performance via analytics tools</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Lead Form Data &amp; Third-Party Sharing</h2>
          <p className="text-slate-600 mb-4">
            When you submit a quote request on our site, your information may be shared with up to three licensed contractors and/or our referral network partners. By submitting the form, you consent to being contacted by these parties via phone, email, or text message regarding your project. Standard message and data rates may apply for text messages.
          </p>
          <p className="text-slate-600 mb-8">
            You are under no obligation to hire any contractor you are connected with.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies</h2>
          <p className="text-slate-600 mb-8">
            We use cookies to analyze site traffic and improve your experience. You can control cookie settings through your browser preferences. Disabling cookies may affect some site functionality. We use Google Analytics to understand how visitors use our site — Google&apos;s privacy policy applies to data collected through this service.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Affiliate Links</h2>
          <p className="text-slate-600 mb-8">
            Our site contains affiliate links. When you click these links, the affiliated company may set cookies on your browser. See our <Link href="/affiliate-disclosure" className="text-blue-600 hover:text-blue-800 underline">Affiliate Disclosure</Link> for full details.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
          <p className="text-slate-600 mb-4">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>
          <p className="text-slate-600 mb-8">
            To exercise any of these rights, <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">contact us</Link>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
          <p className="text-slate-600 mb-8">
            We take reasonable measures to protect your personal information. However, no method of internet transmission is 100% secure. We cannot guarantee absolute security of your data.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Children&apos;s Privacy</h2>
          <p className="text-slate-600 mb-8">
            Our site is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has submitted information to us, please contact us immediately.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
          <p className="text-slate-600 mb-8">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the site after changes constitutes acceptance of the new policy.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
          <p className="text-slate-600 mb-8">
            Questions about this Privacy Policy? <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">Contact us here</Link>.
          </p>

          <div className="mt-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 underline">← Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
