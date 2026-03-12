import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Buying a Home with a Septic System: What to Know Before You Close | The Septic Guide',
  description:
    'A septic inspection before closing costs $300–$1,000 and can reveal problems costing $5,000–$25,000 to fix. Learn what to ask, what to inspect, and how to negotiate.',
  openGraph: {
    title: 'Buying a Home with a Septic System: What to Know Before You Close',
    description:
      'A septic inspection before closing costs $300–$1,000 and can reveal problems costing $5,000–$25,000 to fix. Learn what to ask, what to inspect, and how to negotiate.',
    url: 'https://theseptic.guide/guides/buying-home-with-septic',
    siteName: 'The Septic Guide',
    type: 'article',
    images: [{ url: 'https://theseptic.guide/septicinspection.jpg', width: 1200, height: 630, alt: 'Buying a home with a septic system inspection guide' }],
  },
  alternates: { canonical: 'https://theseptic.guide/guides/buying-home-with-septic' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Buying a Home with a Septic System: What to Know Before You Close',
  description:
    'A septic inspection before closing costs $300–$1,000 and can reveal problems costing $5,000–$25,000 to fix. Learn what to ask, what to inspect, and how to negotiate.',
  image: 'https://theseptic.guide/septicinspection.jpg',
  datePublished: '2025-03-05',
  dateModified: '2026-03-05',
  author: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
  publisher: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    url: 'https://theseptic.guide',
    logo: { '@type': 'ImageObject', url: 'https://theseptic.guide/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://theseptic.guide/guides/buying-home-with-septic' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a septic inspection required when buying a house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Over 30 states require a septic inspection before a home sale can close. Even in states without a legal requirement, most mortgage lenders require one before approving the loan. A $300–$1,000 inspection can reveal problems costing $5,000–$25,000 to fix.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a septic inspection cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A visual inspection costs $100–$300. A full inspection — which includes pumping, tank interior assessment, baffle inspection, and backflow testing — costs $300–$1,000. Always opt for the full inspection when purchasing a home.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who pays for the septic inspection when buying a house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It varies by state and negotiation. In many states, the seller pays. In others, the buyer pays. In some transactions, it is negotiable. Regardless of who pays, the buyer should hire their own inspector to avoid any conflict of interest.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the septic system fails the inspection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You have several options: request the seller to repair before closing, negotiate a price reduction equal to the repair cost, arrange an escrow holdback, or exercise your inspection contingency and walk away.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do septic systems last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well-maintained conventional system typically lasts 20–30 years. Concrete tanks can last 40+ years. The drainfield usually has a shorter lifespan than the tank. Regular pumping and responsible use are the biggest factors in system longevity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a mortgage on a house with a failed septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most lenders will not approve a mortgage on a property with a failed septic system. The seller will typically need to repair or replace the system before the loan can close. FHA and VA loans have specific requirements for functional septic systems.',
      },
    },
  ],
}

export default function BuyingHomeWithSepticPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative w-full" style={{ minHeight: '420px' }}>
        <Image src="/septicinspection.jpg" alt="Buying a home with a septic system inspection" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-amber-500 text-white mb-3">Guide</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-3">
            Buying a Home with a Septic System
            <span className="block text-amber-400">What to Know Before You Close</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            A septic inspection before closing costs $300–$1,000 and can reveal problems that cost $5,000–$25,000 to fix. Here is everything you need to know.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white text-sm font-bold">SG</div>
            <div>
              <p className="text-white text-sm font-medium">The Septic Guide</p>
              <p className="text-gray-300 text-xs">Updated Mar 2026 · 25 min read</p>
            </div>
          </div>
        </div>
      </section>

            {/* Main Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          One in five homes in the United States uses a septic system. If you are buying one of them, the septic system should be as central to your due diligence as the roof, foundation, and HVAC. Over 30 states require a septic inspection before a home can be sold. Even if your state does not require one, skipping it is one of the most expensive mistakes a homebuyer can make.
        </p>
        <p className="text-lg text-slate-700 mb-10 leading-relaxed">
          This guide covers exactly what to ask, what to inspect, what the results mean, and how to negotiate if problems are found.
        </p>

                {/* 10 Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">10 Questions to Ask the Seller Before the Inspection</h2>
          <p className="text-slate-600 mb-6">These questions reveal how well the system has been maintained. The answers — or lack of answers — tell you a lot.</p>
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900">1. How old is the septic system?</h3>
              <p className="text-slate-600 mt-1">A well-maintained system lasts 20–30 years. If the system is 25+ years old, budget for potential replacement ($8,000–$20,000) within the next 5–10 years. The age should be on the original installation permit.</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900">2. When was the tank last pumped?</h3>
              <p className="text-slate-600 mt-1">A system that has been pumped every 3–5 years has been maintained. A seller who does not know the last pump date is a red flag.</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900">3. Do you have maintenance records?</h3>
              <p className="text-slate-600 mt-1">Pumping receipts, inspection reports, and repair records indicate responsible ownership. No records suggest deferred maintenance.</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900">4. Has the system ever backed up or had problems?</h3>
              <p className="text-slate-600 mt-1">Ask directly. In most states, sellers are legally required to disclose known defects.</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900">5. Where is the septic tank and drainfield located?</h3>
              <p className="text-slate-600 mt-1">A seller who cannot point to their tank and drainfield likely has not maintained the system. The local health department should have a site plan on file.</p>
            </div>
                        <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900">6. What type of system is it?</h3>
              <p className="text-slate-600 mt-1">Conventional, aerobic, mound, or chamber. Aerobic systems have mechanical components requiring annual maintenance and electricity. This affects your ongoing costs.</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900">7. What size is the tank?</h3>
              <p className="text-slate-600 mt-1">Tank size should match the home&apos;s bedroom count. A three-bedroom home typically needs a 1,000-gallon tank. If bedrooms have been added since the original installation, the system may be undersized.</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900">8. Is there a designated replacement drainfield area?</h3>
              <p className="text-slate-600 mt-1">Most original septic permits designate a reserve area for a future replacement drainfield. If that area has been built on (patio, shed, driveway), your replacement options are severely limited and more expensive.</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900">9. Has anything been built or parked over the tank or drainfield?</h3>
              <p className="text-slate-600 mt-1">Structures, patios, or regular vehicle traffic over septic components cause damage. Soil compaction over the drainfield is permanent and can lead to premature drainfield failure.</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900">10. Are there any trees within 30 feet of the drainfield?</h3>
              <p className="text-slate-600 mt-1">Tree roots are a common cause of pipe blockage and system failure. Large trees near the drainfield are a long-term risk.</p>
            </div>
          </div>
        </section>

                {/* Two Types of Inspections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Two Types of Septic Inspections</h2>
          <p className="text-slate-600 mb-6">Not all septic inspections are equal. Know the difference before you schedule.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Visual Inspection &mdash; $100–$300</h3>
              <p className="text-slate-600 text-sm">The inspector flushes toilets, runs water, checks drain speed, and walks the drainfield area looking for surface issues (wet spots, odors, green patches). They check the tank lid, risers, and any visible components. This is a surface-level assessment that can catch obvious problems but will not reveal what is happening inside the tank.</p>
              <p className="text-amber-700 font-semibold text-sm mt-3">Our recommendation: A visual inspection alone is not sufficient for a home purchase. It misses too much.</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Full Inspection &mdash; $300–$1,000</h3>
              <p className="text-slate-600 text-sm">A full inspection includes everything in a visual inspection plus: opening the tank, measuring sludge and scum levels, pumping the tank, inspecting baffles and the effluent filter, checking for backflow from the drainfield, assessing the distribution box, and sometimes a camera inspection of the sewer line.</p>
              <p className="text-amber-700 font-semibold text-sm mt-3">Our recommendation: Always get a full inspection when buying a home. The additional $200–$700 over a visual inspection is insignificant compared to the cost of a system you did not know was failing.</p>
            </div>
          </div>
        </section>

                {/* What a Full Inspection Checks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What a Full Inspection Checks</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Component</th>
                  <th className="px-4 py-3 text-left font-semibold">What the Inspector Looks For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Sewer line (house to tank)</td><td className="px-4 py-3 text-slate-600">Flow rate, blockages, root intrusion, pipe condition</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Septic tank</td><td className="px-4 py-3 text-slate-600">Structural integrity, cracks, water level, sludge/scum depth</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Inlet baffle</td><td className="px-4 py-3 text-slate-600">Presence, condition, blockages</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Outlet baffle</td><td className="px-4 py-3 text-slate-600">Presence, condition, blockages</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Effluent filter</td><td className="px-4 py-3 text-slate-600">Presence, condition, clogging</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Distribution box</td><td className="px-4 py-3 text-slate-600">Level, structural integrity, equal flow distribution</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Drainfield</td><td className="px-4 py-3 text-slate-600">Surface moisture, odor, grass condition, signs of surfacing</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Backflow test</td><td className="px-4 py-3 text-slate-600">After pumping, checks if effluent flows back from drainfield (indicates failure)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

                {/* How to Read Inspection Results */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Read the Inspection Results</h2>
          <p className="text-slate-600 mb-6">The inspector will give you a pass, a conditional pass, or a fail. Here is what each means for your purchase.</p>
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 text-lg">Pass</h3>
              <p className="text-slate-600 mt-1">The system is functioning properly. No immediate repairs needed. This is the green light to proceed. Ask for a copy of the report for your records and note the recommended pumping schedule going forward.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-yellow-800 text-lg">Conditional Pass</h3>
              <p className="text-slate-600 mt-1">The system is functional but has issues that need attention. Common conditional findings include:</p>
              <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 text-sm">
                <li>Clogged effluent filter ($50–$200 to clean/replace)</li>
                <li>Cracked baffle ($150–$500 to repair)</li>
                <li>Tank overdue for pumping ($300–$600)</li>
                <li>Lid that needs sealing</li>
              </ul>
              <p className="text-slate-600 mt-2 text-sm">These are manageable repairs. Negotiate with the seller to address them before closing or reduce the price accordingly.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-800 text-lg">Fail</h3>
              <p className="text-slate-600 mt-1">The system has a significant problem. Common failure findings include:</p>
              <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 text-sm">
                <li>Drainfield no longer absorbing effluent</li>
                <li>Cracked or leaking tank</li>
                <li>System does not meet current code</li>
                <li>System is undersized for the home</li>
              </ul>
              <p className="text-slate-600 mt-2 text-sm">A failed inspection means you are looking at $3,000–$20,000+ in repairs or replacement.</p>
            </div>
          </div>
        </section>

                {/* What to Do If Problems Found */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Do If the Inspection Reveals Problems</h2>
          <p className="text-slate-600 mb-6">A failed septic inspection does not mean you cannot buy the house. It means you need to negotiate.</p>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-900">Option 1: Seller Repairs Before Closing</h3>
              <p className="text-slate-600 mt-1">Request that the seller fix the issues at their expense before you close. Get a re-inspection to confirm the repairs were done properly. This is the cleanest option.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-900">Option 2: Price Reduction</h3>
              <p className="text-slate-600 mt-1">Get quotes for the required repairs and negotiate the purchase price down by that amount. This gives you control over the repair process and the contractors used.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-900">Option 3: Escrow Holdback</h3>
              <p className="text-slate-600 mt-1">The estimated repair cost is held in escrow at closing and released to cover the work after the sale. This is common when repairs cannot be completed before the closing date.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-900">Option 4: Walk Away</h3>
              <p className="text-slate-600 mt-1">If your purchase agreement includes a septic inspection contingency (and it absolutely should), you can terminate the deal without penalty if the inspection reveals problems you are unwilling to absorb. A $15,000+ system replacement on a house you have not even moved into is a legitimate reason to walk away.</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
            <p className="text-amber-800 font-semibold">Always get it in writing. Whatever you negotiate, include it in the purchase agreement. Verbal assurances from sellers about septic system condition have no legal weight.</p>
          </div>
        </section>

                {/* Red Flags */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags to Watch for During the House Tour</h2>
          <p className="text-slate-600 mb-6">You do not need an inspector to notice these warning signs. Look for them during any showing or walkthrough.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3 bg-red-50 rounded-lg p-4 border border-red-100">
              <span className="text-xl">&#x1F7E2;</span>
              <div><h4 className="font-bold text-slate-900 text-sm">Lush Green Strips</h4><p className="text-slate-600 text-sm mt-1">Strips of grass noticeably greener than the surrounding lawn, especially in dry weather. This often marks a drainfield leaking effluent near the surface.</p></div>
            </div>
            <div className="flex gap-3 bg-red-50 rounded-lg p-4 border border-red-100">
              <span className="text-xl">&#x1F4A7;</span>
              <div><h4 className="font-bold text-slate-900 text-sm">Wet or Soggy Soil</h4><p className="text-slate-600 text-sm mt-1">Wet, soggy, or spongy soil in areas away from downspouts or irrigation. This can indicate drainfield saturation or failure.</p></div>
            </div>
            <div className="flex gap-3 bg-red-50 rounded-lg p-4 border border-red-100">
              <span className="text-xl">&#x1F443;</span>
              <div><h4 className="font-bold text-slate-900 text-sm">Sewage Odor</h4><p className="text-slate-600 text-sm mt-1">Sewage odor anywhere in the yard, near the tank area, or inside the house &mdash; especially in the basement or lowest level.</p></div>
            </div>
            <div className="flex gap-3 bg-red-50 rounded-lg p-4 border border-red-100">
              <span className="text-xl">&#x1F6BD;</span>
              <div><h4 className="font-bold text-slate-900 text-sm">Gurgling Drains</h4><p className="text-slate-600 text-sm mt-1">Gurgling drains or slow-flushing toilets during the tour. Run water and flush toilets in multiple bathrooms to test.</p></div>
            </div>
            <div className="flex gap-3 bg-red-50 rounded-lg p-4 border border-red-100">
              <span className="text-xl">&#x1F3D7;&#xFE0F;</span>
              <div><h4 className="font-bold text-slate-900 text-sm">Structures Over Drainfield</h4><p className="text-slate-600 text-sm mt-1">Decks, patios, sheds, driveways, or parking areas over the drainfield indicate the previous owner did not understand or care about the system. This damage may be permanent.</p></div>
            </div>
            <div className="flex gap-3 bg-red-50 rounded-lg p-4 border border-red-100">
              <span className="text-xl">&#x1F333;</span>
              <div><h4 className="font-bold text-slate-900 text-sm">Large Trees Nearby</h4><p className="text-slate-600 text-sm mt-1">Mature trees within 30 feet of septic components have root systems that may already be infiltrating pipes.</p></div>
            </div>
          </div>
        </section>

                {/* Ongoing Costs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Ongoing Costs as a Septic Homeowner</h2>
          <p className="text-slate-600 mb-6">If you have never owned a septic system before, here is what to budget for annually.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Expense</th>
                  <th className="px-4 py-3 text-left font-semibold">Frequency</th>
                  <th className="px-4 py-3 text-left font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Tank pumping</td><td className="px-4 py-3 text-slate-600">Every 3–5 years</td><td className="px-4 py-3 text-slate-600">$300–$600</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Annual inspection</td><td className="px-4 py-3 text-slate-600">Yearly (recommended)</td><td className="px-4 py-3 text-slate-600">$100–$300</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Effluent filter cleaning</td><td className="px-4 py-3 text-slate-600">Every 1–2 years</td><td className="px-4 py-3 text-slate-600">$0 (DIY) to $100</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Septic-safe products</td><td className="px-4 py-3 text-slate-600">Ongoing</td><td className="px-4 py-3 text-slate-600">Comparable to regular products</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Monthly treatment (optional)</td><td className="px-4 py-3 text-slate-600">Monthly</td><td className="px-4 py-3 text-slate-600">$10–$20/month</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 mt-4">Averaged out, septic maintenance costs roughly $200–$400 per year. This is comparable to or less than the annual sewer fees many municipal homeowners pay. The key difference is that you are responsible for the maintenance, not the city.</p>
        </section>

                {/* First 30 Days */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">First 30 Days After Moving In</h2>
          <p className="text-slate-600 mb-6">If you have just closed on a home with a septic system, here is your checklist.</p>
          <div className="space-y-3">
                        <div className="flex gap-3 items-start bg-gray-50 rounded-lg p-4">
              <span className="text-green-600 font-bold text-lg">1</span>
              <div><h4 className="font-bold text-slate-900 text-sm">Locate all components</h4><p className="text-slate-600 text-sm">Find the tank, risers/lids, distribution box, and drainfield boundaries. Get a copy of the site plan from your local health department if you do not have one.</p></div>
            </div>
            <div className="flex gap-3 items-start bg-gray-50 rounded-lg p-4">
              <span className="text-green-600 font-bold text-lg">2</span>
              <div><h4 className="font-bold text-slate-900 text-sm">Pump the tank</h4><p className="text-slate-600 text-sm">If it was not pumped during the pre-sale inspection, pump it now. Start your ownership with a clean baseline.</p></div>
            </div>
            <div className="flex gap-3 items-start bg-gray-50 rounded-lg p-4">
              <span className="text-green-600 font-bold text-lg">3</span>
              <div><h4 className="font-bold text-slate-900 text-sm">Install risers</h4><p className="text-slate-600 text-sm">If the tank lids are buried, install risers. This one-time $200–$400 investment saves you money on every future service visit.</p></div>
            </div>
                        <div className="flex gap-3 items-start bg-gray-50 rounded-lg p-4">
              <span className="text-green-600 font-bold text-lg">4</span>
              <div><h4 className="font-bold text-slate-900 text-sm">Learn what not to flush</h4><p className="text-slate-600 text-sm">Read our <Link href="/articles/what-can-cannot-flush-septic-system" className="text-amber-700 underline hover:text-amber-900">complete dos and don&apos;ts guide</Link> and make sure everyone in the household knows the rules.</p></div>
            </div>
            <div className="flex gap-3 items-start bg-gray-50 rounded-lg p-4">
              <span className="text-green-600 font-bold text-lg">5</span>
              <div><h4 className="font-bold text-slate-900 text-sm">Set a pumping reminder</h4><p className="text-slate-600 text-sm">Mark your calendar for the next pumping based on your household size and tank capacity.</p></div>
            </div>
            <div className="flex gap-3 items-start bg-gray-50 rounded-lg p-4">
              <span className="text-green-600 font-bold text-lg">6</span>
              <div><h4 className="font-bold text-slate-900 text-sm">Keep a maintenance folder</h4><p className="text-slate-600 text-sm">Start documenting every service visit, inspection, and repair. This protects your investment and makes your future resale smoother.</p></div>
            </div>
          </div>
        </section>

                {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-lg border border-gray-200" open>
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">Is a septic inspection required when buying a house?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">Over 30 states require a septic inspection before a home sale can close. Even in states without a legal requirement, most mortgage lenders require one before approving the loan. Regardless of requirements, a septic inspection is always recommended to protect your investment. A $300–$1,000 inspection can reveal problems costing $5,000–$25,000 to fix.</div>
            </details>
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">How much does a septic inspection cost?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">A visual inspection costs $100–$300. A full inspection — which includes pumping, tank interior assessment, baffle inspection, and backflow testing — costs $300–$1,000. Always opt for the full inspection when purchasing a home.</div>
            </details>
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">Who pays for the septic inspection when buying a house?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">It varies by state and negotiation. In many states, the seller pays. In others, the buyer pays. In some transactions, it is negotiable. Regardless of who pays, the buyer should hire their own inspector to avoid any conflict of interest.</div>
            </details>
                        <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">What happens if the septic system fails the inspection?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">You have several options: request the seller to repair before closing, negotiate a price reduction equal to the repair cost, arrange an escrow holdback, or exercise your inspection contingency and walk away. A failed inspection is a negotiating tool, not necessarily a deal-breaker.</div>
            </details>
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">How long do septic systems last?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">A well-maintained conventional system typically lasts 20–30 years. Concrete tanks can last 40+ years. The drainfield usually has a shorter lifespan than the tank. Regular pumping and responsible use are the biggest factors in system longevity.</div>
            </details>
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">Can I get a mortgage on a house with a failed septic system?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">Most lenders will not approve a mortgage on a property with a failed septic system. The seller will typically need to repair or replace the system before the loan can close. FHA and VA loans have specific requirements for functional septic systems. If the seller will not fix it, the deal usually falls through unless alternative financing is arranged.</div>
            </details>
          </div>
        </section>

                {/* Glossary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Glossary</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-3">
              <h3 className="font-bold text-slate-900">Septic Inspection Contingency</h3>
              <p className="text-slate-600 text-sm mt-1">A clause in the purchase agreement that allows the buyer to cancel the deal or renegotiate if the septic inspection reveals significant problems. This should always be included in your offer on a home with a septic system.</p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <h3 className="font-bold text-slate-900">Point-of-Sale Inspection</h3>
              <p className="text-slate-600 text-sm mt-1">A septic inspection required by state or local law before a property can be legally transferred to a new owner. Over 30 states have some form of this requirement.</p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <h3 className="font-bold text-slate-900">Backflow Test</h3>
              <p className="text-slate-600 text-sm mt-1">During a full septic inspection, the tank is pumped and the inspector watches for effluent flowing back from the drainfield into the tank. Significant backflow indicates drainfield failure or saturation.</p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <h3 className="font-bold text-slate-900">As-Built Drawing</h3>
              <p className="text-slate-600 text-sm mt-1">A diagram showing the exact location, dimensions, and layout of the septic system as it was actually installed. Filed with the local health department at the time of installation and essential for future maintenance and repairs.</p>
            </div>
                        <div className="border-b border-gray-200 pb-3">
              <h3 className="font-bold text-slate-900">Reserve Drainfield Area</h3>
              <p className="text-slate-600 text-sm mt-1">A designated section of the property set aside for a future replacement drainfield, identified in the original septic permit. If this area has been built on or paved, replacement options become limited and significantly more expensive.</p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <h3 className="font-bold text-slate-900">Escrow Holdback</h3>
              <p className="text-slate-600 text-sm mt-1">An arrangement where a portion of the sale proceeds is held by a third party (usually the title company) to cover the cost of agreed-upon repairs after closing. Commonly used when septic repairs cannot be completed before the closing date.</p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <h3 className="font-bold text-slate-900">Certificate of Compliance</h3>
              <p className="text-slate-600 text-sm mt-1">A document issued by the local health department confirming that the septic system meets current code requirements. Required in many states as part of the property transfer process.</p>
            </div>
            <div className="pb-3">
              <h3 className="font-bold text-slate-900">Bedroom Count Capacity</h3>
              <p className="text-slate-600 text-sm mt-1">Septic systems are sized based on the number of bedrooms in the home (typically 120 gallons per bedroom per day), not the number of bathrooms. If bedrooms have been added since the original installation, the system may be undersized and non-compliant.</p>
            </div>
          </div>
        </section>

                {/* Related Guides */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/articles/complete-septic-guide" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900">The Complete Guide to Septic Systems</h3>
              <p className="text-slate-600 text-sm mt-1">How they work, types, and what every homeowner needs to know.</p>
            </Link>
            <Link href="/articles/what-can-cannot-flush-septic-system" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900">What You Can and Cannot Flush</h3>
              <p className="text-slate-600 text-sm mt-1">The complete list of safe and unsafe items for your septic system.</p>
            </Link>
            <Link href="/articles/how-often-pump-septic-tank" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900">How Often Should You Pump Your Septic Tank?</h3>
              <p className="text-slate-600 text-sm mt-1">Find your exact pumping schedule by tank and household size.</p>
            </Link>
            <Link href="/cost-guides/septic-system-installation-cost" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900">Septic System Installation Cost 2026</h3>
              <p className="text-slate-600 text-sm mt-1">Complete price breakdown by system type, tank material, and more.</p>
            </Link>
          </div>
        </section>

                {/* CTA */}
        <section className="bg-slate-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Need a Septic Inspection Quote?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">Get free quotes from licensed septic inspectors in your area. We connect you with professionals who specialize in pre-purchase septic evaluations.</p>
          <Link href="/get-quote" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Get Free Quotes
          </Link>
        </section>
      {/* Lead Form */}
            <section className='py-12 bg-[#F5F0EB] rounded-2xl mt-12'>
              <div className='max-w-2xl mx-auto px-4'>
                <h2 className='text-2xl md:text-3xl font-bold text-[#4A6741] text-center mb-3'>Get Expert Septic Help</h2>
                <p className='text-gray-600 text-center mb-8'>Connect with qualified septic professionals in your area. Free quotes, no obligation.</p>
                <LeadForm />
              </div>
            </section>
          </article>
    </>
  )
}
