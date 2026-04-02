import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import AuthorBio from '@/components/AuthorBio'

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
        text: 'Over 30 states require a septic inspection before a home sale can close, and in those states a system that fails inspection must be repaired or replaced before the transfer can proceed. Even in states without a legal requirement, most mortgage lenders including FHA and VA loan programs require a functioning septic system before approving financing, which effectively makes an inspection mandatory for most financed purchases. Beyond legal and lender requirements, a septic inspection is one of the most financially important due diligence steps in any home purchase involving an on-site system, because a $300 to $1,000 inspection can reveal problems costing $5,000 to $25,000 to fix that would otherwise transfer entirely to the buyer at closing. Skipping the inspection to save money or speed up the closing process is one of the most consistently expensive mistakes homebuyers make, particularly in rural markets where septic systems are common and buyers may be less familiar with the risks involved. Always include a septic inspection contingency in your purchase agreement so you have the legal right to renegotiate or walk away if the inspection reveals significant problems.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a septic inspection cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic visual inspection costs $100 to $300 and involves the inspector walking the property, checking drain speed, and looking for surface signs of problems without opening the tank or evaluating internal components. A full inspection that includes opening the tank, pumping the contents, measuring sludge and scum levels, inspecting the inlet and outlet baffles, checking the effluent filter, evaluating the distribution box, running a backflow test, and producing a written report costs $300 to $1,000 depending on location, tank size, and whether the tank has accessible risers. Adding a camera inspection of the sewer line between the house and the tank costs $125 to $500 on top of the base inspection fee and is strongly recommended for homes with older plumbing, large trees near the sewer line route, or any history of drain problems. When purchasing a home, always opt for the full inspection rather than the visual check, because the additional $200 to $700 is negligible compared to the cost of discovering a drainfield failure after closing. See our septic inspection cost guide for a full breakdown of what each inspection type includes and what to insist on.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who pays for the septic inspection when buying a house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Who pays for the septic inspection varies by state, local custom, and negotiation, and there is no universal rule that applies across all markets. In many states the seller pays for the inspection as part of their disclosure obligations, particularly in states with mandatory point-of-sale inspection requirements. In other markets the buyer pays for the inspection as part of their due diligence costs, similar to how buyers typically pay for the general home inspection. Regardless of who pays the fee, the buyer should always hire their own independent inspector rather than relying on one recommended or paid for by the seller, because an inspector hired by the seller has an inherent conflict of interest that can affect the thoroughness of the evaluation. The cost of the inspection, typically $300 to $1,000, is worth paying independently even in markets where the seller would normally cover it, because your inspector works for you and will be more likely to flag borderline issues that a seller-paid inspector might downplay.',
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
        text: 'A well-maintained conventional septic system typically lasts 20 to 30 years, though the tank and drainfield have different lifespans and both are affected significantly by how well the system was maintained by previous owners. Concrete tanks are the most durable component and can last 40 or more years when not subjected to soil movement or structural stress. The drainfield typically has a shorter functional lifespan than the tank, usually 15 to 30 years, and its longevity is determined primarily by whether solids were kept out of it through regular tank pumping every three to five years. A drainfield that received solids from a neglected tank can fail in under 10 years, while one that was protected through consistent maintenance can exceed 30 years. When evaluating a home for purchase, the age of the system combined with the documented pumping history gives you the most reliable picture of remaining lifespan and the likelihood of near-term replacement costs.',
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

            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Guides', href: '/guides' },
              { label: 'Buying a Home with Septic' }
            ]} />

            {/* Main Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Buying a home with a septic system means purchasing a property that manages its own wastewater treatment through an on-site system consisting of a septic tank, drainfield, and connecting pipes rather than connecting to a municipal sewer, making the condition, age, and maintenance history of that system a direct financial liability that transfers to the buyer at closing. A septic system in poor condition can require $5,000 to $20,000 in repairs or replacement immediately after purchase, and unlike a roof or HVAC system, septic failures are almost never covered by standard homeowners insurance because they result from gradual deterioration rather than sudden accidental damage. The pre-purchase septic inspection is the only reliable tool for assessing system condition before closing, and a full inspection including tank pumping, baffle assessment, drainfield evaluation, and a backflow test costs $300 to $1,000 - a fraction of what a missed failure costs to fix.
        </p>
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
              <p className="text-slate-600 mt-1">A seller who cannot point to their tank and drainfield likely has not maintained the system. The <a href="https://www.epa.gov/septic/how-care-your-septic-system" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900">local health department</a> should have a site plan on file.</p>
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
              <div><h4 className="font-bold text-slate-900 text-sm">Locate all components</h4><p className="text-slate-600 text-sm">Find the tank, risers/lids, distribution box, and drainfield boundaries. Get a copy of the site plan from your <a href="https://www.epa.gov/septic/how-care-your-septic-system" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900">local health department</a> if you do not have one.</p></div>
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
              <div className="px-5 pb-4 text-slate-600 text-sm">Over 30 states require a septic inspection before a home sale can close, and in those states a system that fails inspection must be repaired or replaced before the transfer can proceed. Even in states without a legal requirement, most mortgage lenders including FHA and VA loan programs require a functioning septic system before approving financing, which effectively makes an inspection mandatory for most financed purchases. Beyond legal and lender requirements, a septic inspection is one of the most financially important due diligence steps in any home purchase involving an on-site system, because a $300 to $1,000 inspection can reveal problems costing $5,000 to $25,000 to fix that would otherwise transfer entirely to the buyer at closing. Skipping the inspection to save money or speed up the closing process is one of the most consistently expensive mistakes homebuyers make, particularly in rural markets where septic systems are common and buyers may be less familiar with the risks involved. Always include a septic inspection contingency in your purchase agreement so you have the legal right to renegotiate or walk away if the inspection reveals significant problems.</div>
            </details>
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">How much does a septic inspection cost?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">A basic visual inspection costs $100 to $300 and involves the inspector walking the property, checking drain speed, and looking for surface signs of problems without opening the tank or evaluating internal components. A full inspection that includes opening the tank, pumping the contents, measuring sludge and scum levels, inspecting the inlet and outlet baffles, checking the effluent filter, evaluating the distribution box, running a backflow test, and producing a written report costs $300 to $1,000 depending on location, tank size, and whether the tank has accessible risers. Adding a camera inspection of the sewer line between the house and the tank costs $125 to $500 on top of the base inspection fee and is strongly recommended for homes with older plumbing, large trees near the sewer line route, or any history of drain problems. When purchasing a home, always opt for the full inspection rather than the visual check, because the additional $200 to $700 is negligible compared to the cost of discovering a drainfield failure after closing. See our septic inspection cost guide for a full breakdown of what each inspection type includes and what to insist on.</div>
            </details>
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">Who pays for the septic inspection when buying a house?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">Who pays for the septic inspection varies by state, local custom, and negotiation, and there is no universal rule that applies across all markets. In many states the seller pays for the inspection as part of their disclosure obligations, particularly in states with mandatory point-of-sale inspection requirements. In other markets the buyer pays for the inspection as part of their due diligence costs, similar to how buyers typically pay for the general home inspection. Regardless of who pays the fee, the buyer should always hire their own independent inspector rather than relying on one recommended or paid for by the seller, because an inspector hired by the seller has an inherent conflict of interest that can affect the thoroughness of the evaluation. The cost of the inspection, typically $300 to $1,000, is worth paying independently even in markets where the seller would normally cover it, because your inspector works for you and will be more likely to flag borderline issues that a seller-paid inspector might downplay.</div>
            </details>
                        <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">What happens if the septic system fails the inspection?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">A failed septic inspection is a negotiating event, not necessarily a deal-breaker, and how you respond depends on the severity of the failure and your leverage in the transaction. For minor failures such as a clogged effluent filter, a cracked baffle, or a tank overdue for pumping, requesting the seller to complete the repairs before closing at their expense is the cleanest resolution and typically costs $50 to $900 to address. For moderate failures such as a distribution box replacement or a sewer line repair, negotiating a price reduction equal to the documented repair cost gives you control over the repair process and the contractor selected. For major failures such as drainfield replacement at $5,000 to $15,000 or full system replacement at $8,000 to $20,000, you have three realistic options: require the seller to replace the system before closing, negotiate a substantial price reduction that fully accounts for the replacement cost, or exercise your inspection contingency and walk away from the purchase entirely. Whatever is agreed upon must be documented in a written amendment to the purchase agreement, as verbal assurances from sellers about septic system condition carry no legal weight.'</div>
            </details>
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">How long do septic systems last?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">A well-maintained conventional septic system typically lasts 20 to 30 years, though the tank and drainfield have different lifespans and both are affected significantly by how well the system was maintained by previous owners. Concrete tanks are the most durable component and can last 40 or more years when not subjected to soil movement or structural stress. The drainfield typically has a shorter functional lifespan than the tank, usually 15 to 30 years, and its longevity is determined primarily by whether solids were kept out of it through regular tank pumping every three to five years. A drainfield that received solids from a neglected tank can fail in under 10 years, while one that was protected through consistent maintenance can exceed 30 years. When evaluating a home for purchase, the age of the system combined with the documented pumping history gives you the most reliable picture of remaining lifespan and the likelihood of near-term replacement costs.</div>
            </details>
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">Can I get a mortgage on a house with a failed septic system?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">Most conventional, FHA, and VA mortgage lenders will not approve financing on a property with a failed or non-compliant septic system, because the system&apos;s condition affects the property&apos;s habitability and value in ways that lenders consider an unacceptable risk. FHA and VA loans have specific written requirements for functional septic systems and will typically require the seller to repair or replace a failed system before the appraisal can be completed and the loan approved. Conventional lenders vary in their requirements but most follow similar standards, particularly when the appraiser flags the septic system as a potential concern during the valuation. If the seller refuses to address a failed system and the buyer is unwilling or unable to use cash financing, the transaction typically falls through because no standard mortgage product will fund it. In situations where a system failure is discovered after an offer is accepted, the buyer&apos;s best leverage is the combination of the inspection contingency in the purchase agreement and the lender&apos;s own requirement for a functional system, both of which give the buyer strong grounds to require seller action or exit the transaction without penalty.</div>
            </details>
          </div>
        </section>

                {/* Glossary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Glossary</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-3">
              <h3 className="font-bold text-slate-900">Septic Inspection Contingency</h3>
              <p className="text-slate-600 text-sm mt-1">A septic inspection contingency is a clause in the purchase agreement that gives the buyer the legal right to cancel the transaction or renegotiate the terms if the septic inspection reveals significant problems, without forfeiting their earnest money deposit. This contingency should always be included in any offer on a home with a septic system, and it should specify a timeframe for completing the inspection, what constitutes a failure triggering the contingency, and what remedies are available to the buyer.</p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <h3 className="font-bold text-slate-900">Point-of-Sale Inspection</h3>
              <p className="text-slate-600 text-sm mt-1">A point-of-sale inspection is a septic evaluation required by state or local law before a property with an on-site wastewater system can be legally transferred to a new owner, designed to ensure that failing systems are identified and addressed before the financial burden transfers to an unsuspecting buyer. Over 30 states have some form of this requirement, and in those states a system that fails the inspection must be repaired or replaced before the sale can close, giving buyers significant protection that does not exist in states without the requirement.</p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <h3 className="font-bold text-slate-900">Backflow Test</h3>
              <p className="text-slate-600 text-sm mt-1">A backflow test is a diagnostic procedure performed during a full septic inspection in which the tank is pumped empty and the inspector monitors whether effluent flows back from the drainfield into the tank, which indicates that the drainfield soil is saturated or has lost its absorption capacity and can no longer accept effluent at a normal rate. Significant backflow is one of the clearest indicators of drainfield failure or severe saturation and is a finding that typically warrants either professional rejuvenation at $1,000 to $5,000 or full drainfield replacement at $5,000 to $15,000.</p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <h3 className="font-bold text-slate-900">As-Built Drawing</h3>
              <p className="text-slate-600 text-sm mt-1">An as-built drawing is a diagram filed with the <a href="https://www.epa.gov/septic/how-care-your-septic-system" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900">local health department</a> at the time of septic system installation showing the exact location, dimensions, and layout of every system component including the tank, distribution box, drainfield trenches, and all connecting pipes as they were actually constructed. Requesting a copy of the as-built drawing before closing is essential for understanding where all components are located, confirming the system was built as permitted, and planning future maintenance access without excavating the entire yard to find buried components.</p>
            </div>
                        <div className="border-b border-gray-200 pb-3">
              <h3 className="font-bold text-slate-900">Reserve Drainfield Area</h3>
              <p className="text-slate-600 text-sm mt-1">A reserve drainfield area is a section of the property designated in the original septic permit specifically for a future replacement drainfield, set aside at the time of initial installation to ensure a viable replacement location exists when the original field reaches the end of its lifespan. If the reserve area has been built on, paved, or otherwise compromised by the previous owner, replacement options become severely limited and may require expensive engineered alternatives or creative site engineering, significantly increasing the cost of an eventual drainfield replacement.</p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <h3 className="font-bold text-slate-900">Escrow Holdback</h3>
              <p className="text-slate-600 text-sm mt-1">An escrow holdback is an arrangement in a real estate transaction where an agreed-upon amount of money is withheld from the seller&apos;s proceeds at closing and held by the title company or escrow agent until specified repairs have been completed and verified, commonly used when septic repairs cannot be finished before the closing date. The holdback amount should equal the full estimated cost of the repairs plus a contingency buffer of 10 to 20 percent, because septic repair costs can increase once excavation begins and actual conditions are assessed.</p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <h3 className="font-bold text-slate-900">Certificate of Compliance</h3>
              <p className="text-slate-600 text-sm mt-1">A certificate of compliance is a document issued by the <a href="https://www.epa.gov/septic/how-care-your-septic-system" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900">local health department</a> confirming that the septic system meets current code requirements at the time of inspection, required in many states as a condition of property transfer. In states with point-of-sale inspection requirements, the certificate of compliance is the official document that allows the sale to proceed, and a system that cannot obtain one must be repaired or replaced before the transfer can be completed.</p>
            </div>
            <div className="pb-3">
              <h3 className="font-bold text-slate-900">Bedroom Count Capacity</h3>
              <p className="text-slate-600 text-sm mt-1">Bedroom count capacity is the method used by health departments to size residential septic systems, based on the assumption that each bedroom represents a potential additional occupant generating approximately 120 gallons of wastewater per day, which determines the minimum tank size and drainfield area required for the property. If bedrooms have been added to the home since the original septic permit was issued without a corresponding upgrade to the system, the tank may be undersized and non-compliant with current code, which can affect the sale, financing, and long-term system performance.</p>
            </div>
          </div>
        </section>

                {/* Related Guides */}
                <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Related Guides</h2>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">On theseptic.guide</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Link href="/cost-guides/septic-inspection-cost" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Septic Inspection Cost</h4>
              <p className="text-slate-600 text-sm mt-1">Every inspection type priced out, what each level includes, what to insist on for a home purchase, and the hidden fees that inflate quotes.</p>
            </Link>
            <Link href="/guides/selling-home-with-septic" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Selling a Home with a Septic System</h4>
              <p className="text-slate-600 text-sm mt-1">The seller&apos;s counterpart to this guide covering pre-listing inspections, disclosure requirements, and how a well-documented system protects your asking price.</p>
            </Link>
            <Link href="/cost-guides/drainfield-replacement-cost" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Drainfield Replacement Cost</h4>
              <p className="text-slate-600 text-sm mt-1">The most expensive outcome of a failed pre-purchase inspection, with a full cost breakdown by system type and what drives the price from $5,000 to $20,000.</p>
            </Link>
            <Link href="/cost-guides/septic-system-repair-cost" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Septic System Repair Cost</h4>
              <p className="text-slate-600 text-sm mt-1">Every repair priced out from a $50 filter cleaning to a $15,000 drainfield replacement so you can evaluate inspection findings against realistic repair costs before negotiating.</p>
            </Link>
            <Link href="/cost-guides/septic-system-installation-cost" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Septic System Installation Cost 2026</h4>
              <p className="text-slate-600 text-sm mt-1">Full cost breakdown for new and replacement systems by type, relevant when an inspection reveals the system needs full replacement before or after closing.</p>
            </Link>
            <Link href="/articles/signs-drainfield-is-failing" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Signs Your Drainfield Is Failing</h4>
              <p className="text-slate-600 text-sm mt-1">The warning sign progression to look for during house tours and inspections, from earliest symptoms to complete failure.</p>
            </Link>
            <Link href="/articles/how-often-pump-septic-tank" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">How Often Should You Pump Your Septic Tank?</h4>
              <p className="text-slate-600 text-sm mt-1">The pumping schedule you will need to follow as a new septic homeowner, by tank size and household size.</p>
            </Link>
            <Link href="/cost-guides/septic-tank-pumping-cost" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Septic Tank Pumping Cost 2026</h4>
              <p className="text-slate-600 text-sm mt-1">What to budget for routine maintenance after closing, with real pricing by tank size and region.</p>
            </Link>
            <Link href="/articles/complete-septic-guide" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Complete Septic System Guide</h4>
              <p className="text-slate-600 text-sm mt-1">How every component of the system works, what each one costs to repair or replace, and what responsible ownership looks like from day one.</p>
            </Link>
            <Link href="/articles/does-insurance-cover-septic" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Does Insurance Cover Septic Repair and Replacement?</h4>
              <p className="text-slate-600 text-sm mt-1">Why most septic repairs are out-of-pocket expenses and what optional coverage is worth adding to your homeowners policy after closing.</p>
            </Link>
            <Link href="/maintenance/septic-system-maintenance-checklist" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Septic System Maintenance Checklist</h4>
              <p className="text-slate-600 text-sm mt-1">The complete ongoing maintenance schedule to follow as a new septic homeowner to protect the system you just purchased.</p>
            </Link>
            <Link href="/articles/how-to-find-your-septic-tank" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">How to Find Your Septic Tank</h4>
              <p className="text-slate-600 text-sm mt-1">Step-by-step instructions for locating the tank, distribution box, and drainfield boundaries on your new property if the seller cannot provide an as-built drawing.</p>
            </Link>
            <Link href="/articles/septic-tank-size-guide" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Septic Tank Size Guide</h4>
              <p className="text-slate-600 text-sm mt-1">How to confirm the tank is correctly sized for the number of bedrooms in the home you are purchasing and what undersizing means for maintenance costs.</p>
            </Link>
            <Link href="/articles/what-can-cannot-flush-septic-system" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">What You Can and Cannot Flush</h4>
              <p className="text-slate-600 text-sm mt-1">The household rules every new septic homeowner needs to know on day one to protect the system from the most common and preventable causes of failure.</p>
            </Link>
            <Link href="/articles/best-septic-tank-risers" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Best Septic Tank Risers</h4>
              <p className="text-slate-600 text-sm mt-1">The first upgrade worth making after closing if the tank lids are buried, eliminating excavation fees at every future service visit.</p>
            </Link>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">From Our Network</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://thebasement.guide/articles/basement-flooding-insurance" target="_blank" rel="noopener noreferrer" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Does Homeowners Insurance Cover Basement Flooding?</h4>
              <p className="text-slate-600 text-sm mt-1">For homebuyers purchasing a home with both a septic system and a basement, this guide covers the insurance gaps that exist for both systems and how to close them.</p>
            </a>
            <a href="https://thebasement.guide/articles/best-sump-pumps" target="_blank" rel="noopener noreferrer" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Best Sump Pumps 2026</h4>
              <p className="text-slate-600 text-sm mt-1">Homes with septic systems often also have sump pumps managing groundwater. Reviewed and ranked options for homeowners managing both systems after closing.</p>
            </a>
          </div>

          <p className="text-slate-600 text-sm mt-4">If the property also has a private well, see our guide on <a href='/guides/swimming-pool-septic-system' className='underline' style={{ color: '#1D9E75' }}>swimming pools and septic systems</a> for how a pool on the same property affects the septic system &mdash; a common scenario on rural and semi-rural properties with both systems.</p>

          <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-4">Also on <span style={{ color: '#1D9E75' }}>The Well Guide</span></h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://www.thewell.guide/guides/buying-house-with-well" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg p-5 border-l-4 hover:shadow-md transition-shadow" style={{ borderLeftColor: '#1D9E75', borderTop: '1px solid #E8E4DE', borderRight: '1px solid #E8E4DE', borderBottom: '1px solid #E8E4DE' }}>
              <h4 className="font-bold text-slate-900">Buying a House With a Well: The Complete Inspection and Negotiation Guide</h4>
              <p className="text-slate-600 text-sm mt-1">If the property also has a private well, this companion guide covers water testing, pump inspection, and negotiation strategies specific to well systems.</p>
              <span className="text-xs mt-2 inline-block" style={{ color: '#1D9E75' }}>well.guide</span>
            </a>
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
                <AuthorBio />
                <LeadForm />
              </div>
            </section>
          </article>
    </>
  )
}
