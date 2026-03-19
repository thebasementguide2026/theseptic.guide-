import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Septic Inspection Cost 2026: What Each Type Costs and What\u2019s Actually Included | The Septic Guide',
  description: 'A septic inspection costs $150 to $650 depending on the type. Compare visual, routine, comprehensive, and real estate inspection costs, what each includes, hidden fees, and how to choose an inspector.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a septic inspection cost for a home sale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A real estate transaction inspection costs $300 to $650. This includes pumping the tank, inspecting all accessible components, running a flow test, and producing a written report suitable for lenders and attorneys. Camera inspection of the sewer line adds $125 to $500 and is strongly recommended for transactions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a septic inspection required when buying a house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Requirements vary significantly by state and municipality, and in some cases by the type of mortgage financing involved. Massachusetts, parts of New Jersey, Connecticut, and several other states mandate a septic inspection at every property transfer, and in those states a system that fails inspection must be repaired or replaced before the sale can close. Many mortgage lenders, particularly those issuing FHA and VA loans, require a septic inspection if the appraiser flags any concerns about the systems condition or age, and some lenders require one as standard practice for all properties on septic. Even where a septic inspection is not legally required, skipping it when buying a home is one of the costlier due diligence mistakes a buyer can make, because a failed or failing system that was not disclosed can cost $5,000 to $25,000 to repair or replace after closing with no recourse against the seller. Check your states specific requirements with your real estate agent and ask your lender directly whether they require a septic inspection before assuming it is optional.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do a septic inspection myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A homeowner can perform a basic visual check of the property by walking the drainfield area and looking for surface odors, soggy soil, standing water, or unusually green grass, and by monitoring whether all fixtures drain at normal speed throughout the house. However, a meaningful inspection requires opening the tank, measuring sludge and scum depth with a sludge judge, inspecting the inlet and outlet baffles for damage or blockage, checking and cleaning the effluent filter, and verifying that effluent is flowing properly to the distribution box and drainfield, none of which can be done without specialized tools and training. Camera inspection of the sewer line and drainfield probing require professional equipment that homeowners do not typically have access to. A DIY visual check is a useful supplement between professional inspections for a system you know is healthy and well-maintained, but it does not replace a professional inspection and is not acceptable for a real estate transaction, a suspected problem, or any system that has not been professionally inspected in more than three years. If you want to stay informed between professional visits, the most useful thing you can do is check the drainfield area seasonally and monitor drain speed throughout the house for early warning signs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a septic system fails inspection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A failed inspection means the system has a deficiency that needs repair or replacement. Common failures include cracked baffles, excessive sludge levels, drainfield saturation, broken lids, and distribution box problems. The severity ranges from a $200 baffle repair to a $15,000+ drainfield replacement. In a real estate transaction, the buyer and seller negotiate who pays for the repair.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the septic inspection include pumping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not always. Many companies quote the inspection and pumping as separate charges. A comprehensive inspection should include pumping because the inspector cannot fully evaluate the tank interior without removing the contents. Ask whether pumping is included in the quoted price. If not, budget an additional $300 to $600 for the pumping.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a septic inspection take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic visual inspection takes 20 to 30 minutes. A routine maintenance inspection takes 30 to 60 minutes. A full comprehensive or real estate transaction inspection takes 2 to 4 hours, including the time to pump the tank and run flow tests.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a septic inspection find all problems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No inspection is 100% comprehensive. Underground components (pipe interiors, drainfield soil conditions below the surface, and hidden cracks) may not be detectable without excavation or specialized testing. A quality inspection catches the majority of problems, but some issues only become apparent under specific conditions (heavy rain, peak water use, seasonal groundwater changes). This is why regular inspections over time are more valuable than any single inspection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I combine the septic inspection with a well inspection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the property has both a septic system and a private well, yes. Many inspectors offer a discount when both are done in the same visit. A well inspection ($250 to $550 with water quality testing) confirms that the septic system is not contaminating your drinking water, which is a critical health concern for properties with both systems.',
      },
    },
  ],
}

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Septic Inspection Costs by Type (2026)',
  description: 'Comparison of septic inspection types including cost range, duration, and when each type is needed.',
  url: 'https://theseptic.guide/cost-guides/septic-inspection-cost',
  license: 'https://creativecommons.org/licenses/by/4.0/',
  creator: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    url: 'https://theseptic.guide',
  },
  distribution: [
    {
      '@type': 'DataDownload',
      encodingFormat: 'application/json',
      contentUrl: 'https://theseptic.guide/cost-guides/septic-inspection-cost',
    },
  ],
  variableMeasured: [
    {
      '@type': 'PropertyValue',
      name: 'Inspection Type',
      description: 'Type of septic inspection performed',
    },
    {
      '@type': 'PropertyValue',
      name: 'Cost Range',
      unitText: 'USD',
      description: 'Typical cost range for inspection type',
    },
    {
      '@type': 'PropertyValue',
      name: 'Duration',
      description: 'Typical time required for inspection type',
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Septic Inspection Cost 2026: What Each Type Costs and What\u2019s Actually Included',
  description: 'A septic inspection costs $150 to $650 depending on the type. Compare visual, routine, comprehensive, and real estate inspection costs, what each includes, hidden fees, and how to choose an inspector.',
  image: 'https://theseptic.guide/septic inspection.jpg',
  author: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    url: 'https://theseptic.guide',
  },
  publisher: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    url: 'https://theseptic.guide',
  },
  datePublished: '2026-03-09',
  dateModified: '2026-03-09',
}

export default function SepticInspectionCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <Image
          src="/septic inspection.jpg"
          alt="Septic Inspection Cost 2026: What Each Type Costs and What's Actually Included"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-[2px] bg-amber-500" />
            <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase">Cost Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Septic Inspection Cost 2026
            <span className="text-amber-500 block">What Each Type Costs and What&#39;s Actually Included</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            A septic inspection costs $150 to $650 depending on the type. This guide breaks down each inspection type, what should be included at every price point, the add-on fees that inflate the bill, and specific guidance for homebuyers, sellers, and homeowners.
          </p>
          <div className="flex items-center mt-6 space-x-4">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm">SG</div>
            <div>
              <p className="font-semibold">The Septic Guide</p>
              <p className="text-sm text-gray-300">Updated Mar 2026 &middot; 22 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cost Guides', href: '/cost-guides' }, { label: 'Septic Inspection Cost' }]} />

      {/* Intro Section */}
      <article className="max-w-4xl mx-auto px-4 py-12">
                <p className="text-base text-slate-700 leading-relaxed mb-6">
            A septic inspection is a professional evaluation of an on-site wastewater treatment system in which a licensed inspector assesses the condition and functionality of the septic tank, drainfield, baffles, effluent filter, and distribution box to determine whether the system is operating correctly and identify any deficiencies requiring repair. The EPA recommends inspections every one to three years for routine homeowner maintenance, and most real estate transactions involving a property with a septic system require one before closing. Unlike a home inspection, which covers the septic system only superficially, a dedicated septic inspection opens the tank, measures sludge and scum levels, and evaluates components that are entirely underground and invisible from the surface.
          </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          A septic inspection costs <strong>$150 to $650</strong> depending on the type. A routine maintenance inspection runs <strong>$150 to $300</strong> and takes 30 to 60 minutes. A real estate transaction inspection costs <strong>$300 to $650</strong> and takes 2 to 4 hours. A camera inspection adds <strong>$125 to $500</strong> on top of either type. The national average across all inspection types is approximately <strong>$400</strong>.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The problem with these numbers is that &ldquo;septic inspection&rdquo; means different things to different companies. A $150 inspection from one provider might be a 20-minute visual check that tells you almost nothing. A $500 inspection from another might include pumping, camera scoping, and a full written report suitable for a mortgage lender.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          If you do not know exactly what is included before you book, you will either overpay for a basic check or underpay for an inspection that misses critical problems. This guide breaks down each inspection type, what should be included at every price point, the add-on fees that inflate the bill, and specific guidance for homebuyers, sellers, and homeowners scheduling routine maintenance.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          For a complete overview of how septic systems work and why inspections matter, see our <Link href="/articles/complete-septic-guide" className="text-amber-600 underline">complete septic system guide</Link>.
        </p>

        {/* Inspection Costs by Type Table */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Inspection Costs by Type</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Inspection Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Cost Range</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Duration</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">When You Need It</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Visual/basic inspection</td>
                <td className="px-4 py-3 text-sm text-gray-700">$100 &ndash; $200</td>
                <td className="px-4 py-3 text-sm text-gray-700">20 &ndash; 30 min</td>
                <td className="px-4 py-3 text-sm text-gray-700">Quick annual check between full inspections</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Routine maintenance inspection</td>
                <td className="px-4 py-3 text-sm text-gray-700">$150 &ndash; $300</td>
                <td className="px-4 py-3 text-sm text-gray-700">30 &ndash; 60 min</td>
                <td className="px-4 py-3 text-sm text-gray-700">Every 1 to 3 years per EPA recommendation</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Full/comprehensive inspection</td>
                <td className="px-4 py-3 text-sm text-gray-700">$300 &ndash; $500</td>
                <td className="px-4 py-3 text-sm text-gray-700">2 &ndash; 3 hours</td>
                <td className="px-4 py-3 text-sm text-gray-700">Every 3 to 5 years, or when problems are suspected</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Real estate transaction inspection</td>
                <td className="px-4 py-3 text-sm text-gray-700">$300 &ndash; $650</td>
                <td className="px-4 py-3 text-sm text-gray-700">2 &ndash; 4 hours</td>
                <td className="px-4 py-3 text-sm text-gray-700">Buying or selling a home with a septic system</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Title 5 inspection (MA and similar)</td>
                <td className="px-4 py-3 text-sm text-gray-700">$400 &ndash; $900</td>
                <td className="px-4 py-3 text-sm text-gray-700">2 &ndash; 4 hours</td>
                <td className="px-4 py-3 text-sm text-gray-700">Required by state law at property transfer</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Camera/scoped inspection (add-on)</td>
                <td className="px-4 py-3 text-sm text-gray-700">$125 &ndash; $500</td>
                <td className="px-4 py-3 text-sm text-gray-700">30 &ndash; 60 min</td>
                <td className="px-4 py-3 text-sm text-gray-700">Suspected pipe damage, root intrusion, or blockage</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Dye test (add-on)</td>
                <td className="px-4 py-3 text-sm text-gray-700">$150 &ndash; $250</td>
                <td className="px-4 py-3 text-sm text-gray-700">1 &ndash; 2 hours</td>
                <td className="px-4 py-3 text-sm text-gray-700">Tracing flow path, confirming drainfield absorption</td>
              </tr>
            </tbody>
          </table>
        </div>

                  {/* Which Inspection Do I Need? */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Which Inspection Do I Need?</h2>
          <p className="text-gray-700 mb-6">Match your situation to the inspection type, minimum requirements, and realistic all-in budget.</p>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Your Situation</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Inspection Type Needed</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Minimum Requirements</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Realistic All-In Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 text-sm font-medium text-gray-900">Routine homeowner maintenance, system functioning normally</td><td className="px-4 py-3 text-sm text-gray-700">Routine maintenance inspection</td><td className="px-4 py-3 text-sm text-gray-700">Open tank, measure sludge and scum, check baffles and filter, written report</td><td className="px-4 py-3 text-sm text-gray-700">$150 &ndash; $300 plus $300 &ndash; $600 if pumping needed</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 text-sm font-medium text-gray-900">System not inspected in 3 or more years</td><td className="px-4 py-3 text-sm text-gray-700">Full comprehensive inspection</td><td className="px-4 py-3 text-sm text-gray-700">Everything above plus D-box check, drainfield probe, flow test</td><td className="px-4 py-3 text-sm text-gray-700">$300 &ndash; $500 including pump-out</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 text-sm font-medium text-gray-900">Slow drains, odor in yard, or soggy drainfield</td><td className="px-4 py-3 text-sm text-gray-700">Diagnostic comprehensive inspection</td><td className="px-4 py-3 text-sm text-gray-700">Full inspection plus camera scope of sewer line and dye test</td><td className="px-4 py-3 text-sm text-gray-700">$500 &ndash; $900</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 text-sm font-medium text-gray-900">Buying a home with a septic system</td><td className="px-4 py-3 text-sm text-gray-700">Real estate transaction inspection</td><td className="px-4 py-3 text-sm text-gray-700">Full inspection, flow test, written report for lender, camera scope strongly recommended</td><td className="px-4 py-3 text-sm text-gray-700">$500 &ndash; $800</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 text-sm font-medium text-gray-900">Selling a home with a septic system</td><td className="px-4 py-3 text-sm text-gray-700">Pre-listing comprehensive inspection</td><td className="px-4 py-3 text-sm text-gray-700">Full inspection, written report, all deficiencies identified before listing</td><td className="px-4 py-3 text-sm text-gray-700">$300 &ndash; $500</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 text-sm font-medium text-gray-900">State-mandated inspection at property transfer (MA, NJ, CT)</td><td className="px-4 py-3 text-sm text-gray-700">Title 5 or equivalent</td><td className="px-4 py-3 text-sm text-gray-700">State-specific protocol, written report filed with health department</td><td className="px-4 py-3 text-sm text-gray-700">$400 &ndash; $900</td></tr>
                            <tr className="bg-white"><td className="px-4 py-3 text-sm font-medium text-gray-900">System is 15 or more years old</td><td className="px-4 py-3 text-sm text-gray-700">Annual comprehensive inspection</td><td className="px-4 py-3 text-sm text-gray-700">Full inspection plus camera scope of sewer line</td><td className="px-4 py-3 text-sm text-gray-700">$500 &ndash; $800</td></tr>
                            <tr className="bg-gray-50"><td className="px-4 py-3 text-sm font-medium text-gray-900">Suspected root intrusion or pipe damage</td><td className="px-4 py-3 text-sm text-gray-700">Camera inspection add-on</td><td className="px-4 py-3 text-sm text-gray-700">Camera scope of sewer line from house to tank, written findings</td><td className="px-4 py-3 text-sm text-gray-700">$125 &ndash; $500 on top of base inspection</td></tr>
                            <tr className="bg-white"><td className="px-4 py-3 text-sm font-medium text-gray-900">Property has both a well and a septic system</td><td className="px-4 py-3 text-sm text-gray-700">Combined well and septic inspection</td><td className="px-4 py-3 text-sm text-gray-700">Full septic inspection plus well water quality testing</td><td className="px-4 py-3 text-sm text-gray-700">$600 &ndash; $1,200</td></tr>
                            <tr className="bg-gray-50"><td className="px-4 py-3 text-sm font-medium text-gray-900">After heavy rain caused system overflow or backup</td><td className="px-4 py-3 text-sm text-gray-700">Emergency diagnostic inspection</td><td className="px-4 py-3 text-sm text-gray-700">Full inspection focused on drainfield saturation and tank capacity</td><td className="px-4 py-3 text-sm text-gray-700">$300 &ndash; $600</td></tr>
                            <tr className="bg-white"><td className="px-4 py-3 text-sm font-medium text-gray-900">New homeowner, no inspection history available</td><td className="px-4 py-3 text-sm text-gray-700">Full comprehensive inspection</td><td className="px-4 py-3 text-sm text-gray-700">Full inspection, establish baseline sludge accumulation rate</td><td className="px-4 py-3 text-sm text-gray-700">$300 &ndash; $500 including pump-out</td></tr>
            </tbody>
          </table>
        </div>

        {/* What Each Inspection Level Includes */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Each Inspection Level Includes</h2>
        <p className="text-gray-700 mb-8">The biggest gap in this space is that nobody tells you exactly what you should get for your money. Here is what each tier should include, and what it should not.</p>

        {/* Visual/Basic Inspection */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Visual/Basic Inspection</h3>
          <p className="text-amber-600 font-semibold text-lg mb-4">$100 &ndash; $200</p>
          <h4 className="font-semibold text-gray-900 mb-2">What&#39;s included:</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Walk the property and visually inspect the drainfield area for standing water, soggy soil, or odor</li>
            <li>Check the area around the tank for surface-level signs of problems</li>
            <li>Verify the tank location</li>
            <li>Provide a verbal summary of findings</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">What&#39;s NOT included:</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Opening the tank</li>
            <li>Measuring sludge or scum levels</li>
            <li>Checking baffles, filters, or internal components</li>
            <li>Written report</li>
            <li>Any testing (dye, camera, flow)</li>
          </ul>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-sm text-gray-700"><strong>When this is sufficient:</strong> As a quick annual check between full inspections for a system you know is healthy and well-maintained. This is <strong>not sufficient</strong> for a real estate transaction, a suspected problem, or a system you have not inspected in 3+ years.</p>
          </div>
        </div>

        {/* Routine Maintenance Inspection */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Routine Maintenance Inspection</h3>
          <p className="text-amber-600 font-semibold text-lg mb-4">$150 &ndash; $300</p>
          <h4 className="font-semibold text-gray-900 mb-2">What&#39;s included:</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Open the tank (requires accessible risers or digging to the lid)</li>
            <li>Measure sludge and scum levels</li>
            <li>Inspect inlet and outlet baffles for damage or blockage</li>
            <li>Check the effluent filter (clean if needed)</li>
            <li>Run water in the house and verify flow into the tank</li>
            <li>Check the drainfield area visually</li>
            <li>Written report with findings and recommended next steps</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">What&#39;s NOT included:</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Pumping the tank (usually quoted separately at <Link href="/articles/septic-tank-pumping-cost" className="text-amber-600 underline">$300 to $600</Link>)</li>
            <li>Camera inspection of pipes</li>
            <li>Dye testing</li>
            <li>Drainfield probing or excavation</li>
            <li>Distribution box inspection (unless accessible)</li>
          </ul>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-sm text-gray-700"><strong>When this is sufficient:</strong> For routine maintenance every 1 to 3 years on a system that is functioning normally. This is the inspection the <a href="https://www.epa.gov/septic/how-care-your-septic-system" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">EPA recommends</a> as standard homeowner maintenance.</p>
          </div>
        </div>

        {/* Full/Comprehensive Inspection */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Full/Comprehensive Inspection</h3>
          <p className="text-amber-600 font-semibold text-lg mb-4">$300 &ndash; $500</p>
          <h4 className="font-semibold text-gray-900 mb-2">What&#39;s included:</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Everything in the maintenance inspection, plus:</li>
            <li>Pump the tank (often included in the price or quoted as a package)</li>
            <li>Inspect the distribution box (D-box)</li>
            <li>Probe the drainfield for saturation or failure</li>
            <li>Check for backflow from the drainfield into the tank</li>
            <li>Detailed written report with photos</li>
            <li>Recommendations for repairs with estimated costs</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">What&#39;s NOT included:</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Camera inspection (add-on)</li>
            <li>Dye test (add-on)</li>
            <li>Soil testing or perc testing</li>
            <li>Repair work</li>
          </ul>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-sm text-gray-700"><strong>When this is sufficient:</strong> Every 3 to 5 years as a thorough system evaluation, or any time you suspect a problem. This is the inspection level that catches developing issues before they become emergencies. If you are noticing <Link href="/problems/slow-drains" className="text-amber-600 underline">slow drains</Link> or <Link href="/problems/septic-smell-in-yard" className="text-amber-600 underline">septic odors in your yard</Link>, start here.</p>
          </div>
        </div>

        {/* Real Estate Transaction Inspection */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Real Estate Transaction Inspection</h3>
          <p className="text-amber-600 font-semibold text-lg mb-4">$300 &ndash; $650</p>
          <h4 className="font-semibold text-gray-900 mb-2">What&#39;s included:</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Everything in the comprehensive inspection, plus:</li>
            <li>Formatted written report suitable for lenders, attorneys, and health departments</li>
            <li>Documentation of system type, age, size, and maintenance history</li>
            <li>Assessment of remaining system lifespan</li>
            <li>Identification of code compliance issues</li>
            <li>Flow test &mdash; run a specific volume of water to verify the system processes it</li>
            <li>May include water quality testing if the property also has a well</li>
          </ul>
          <h4 className="font-semibold text-gray-900 mb-2">What&#39;s NOT included:</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Repair work</li>
            <li>Guarantees about future performance</li>
            <li>Camera inspection (add-on, but strongly recommended for transactions)</li>
          </ul>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-sm text-gray-700"><strong>When this is required:</strong> Any time a property with a septic system changes ownership. Many states, municipalities, and lenders require a septic inspection before closing. Some states (Massachusetts, New Jersey, parts of New York) mandate specific inspection protocols (Title 5 or equivalent). See our <Link href="/guides/buying-home-with-septic" className="text-amber-600 underline">buying a home with septic guide</Link> for more details.</p>
          </div>
        </div>

        {/* Hidden Fees and Add-On Costs */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Hidden Fees and Add-On Costs</h2>
        <p className="text-gray-700 mb-6">These are the charges that turn a $300 quote into a $700 bill. Ask about every one of them before booking.</p>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Add-On</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Cost</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">When It Applies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white"><td className="px-4 py-3 text-sm font-medium text-gray-900">Digging to expose tank lid (no risers)</td><td className="px-4 py-3 text-sm text-gray-700">$50 &ndash; $250</td><td className="px-4 py-3 text-sm text-gray-700">Tank is buried without risers</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-3 text-sm font-medium text-gray-900">Pumping the tank</td><td className="px-4 py-3 text-sm text-gray-700">$300 &ndash; $600</td><td className="px-4 py-3 text-sm text-gray-700">Often quoted separately from the inspection fee</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 text-sm font-medium text-gray-900">Camera inspection of sewer line</td><td className="px-4 py-3 text-sm text-gray-700">$125 &ndash; $500</td><td className="px-4 py-3 text-sm text-gray-700">Suspected pipe damage, root intrusion, or blockage</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-3 text-sm font-medium text-gray-900">Dye test</td><td className="px-4 py-3 text-sm text-gray-700">$150 &ndash; $250</td><td className="px-4 py-3 text-sm text-gray-700">Tracing system flow, checking for surface breakout</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 text-sm font-medium text-gray-900">Locating the tank (no records)</td><td className="px-4 py-3 text-sm text-gray-700">$100 &ndash; $300</td><td className="px-4 py-3 text-sm text-gray-700">Tank location unknown, no as-built drawing</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-3 text-sm font-medium text-gray-900">Second trip / re-inspection</td><td className="px-4 py-3 text-sm text-gray-700">$100 &ndash; $200</td><td className="px-4 py-3 text-sm text-gray-700">Common in real estate transactions</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 text-sm font-medium text-gray-900">Rush/emergency scheduling</td><td className="px-4 py-3 text-sm text-gray-700">$50 &ndash; $100 premium</td><td className="px-4 py-3 text-sm text-gray-700">Inspection needed within 24 to 48 hours</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-3 text-sm font-medium text-gray-900">Report formatting for lender/health dept</td><td className="px-4 py-3 text-sm text-gray-700">$50 &ndash; $150</td><td className="px-4 py-3 text-sm text-gray-700">Some companies charge extra for official documentation</td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-8">
          <p className="text-sm text-gray-700"><strong>The riser savings:</strong> Installing <Link href="/reviews/best-septic-tank-risers" className="text-amber-600 underline">septic tank risers</Link> ($100 to $400 one-time cost) eliminates the $50 to $250 digging fee at every service visit. If you plan to stay in the home for more than 2 to 3 years, risers pay for themselves and make every future inspection and pumping faster and cheaper.</p>
        </div>

        {/* Septic Inspection for Homebuyers */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Septic Inspection for Homebuyers</h2>
        <p className="text-gray-700 mb-4">
          If you are buying a home with a septic system, the inspection is one of the most important due diligence steps in the transaction. A $300 to $650 inspection can reveal problems costing $5,000 to $25,000 to fix.
        </p>
        <p className="text-gray-700 mb-6">
          For a detailed walkthrough of the entire homebuying process with septic, see our <Link href="/guides/buying-home-with-septic" className="text-amber-600 underline">buying a home with septic guide</Link>.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">What Buyers Should Insist On</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Non-Negotiable</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Why It Matters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Tank must be pumped as part of the inspection</td>
                <td className="px-4 py-3 text-sm text-gray-700">You cannot assess baffle condition, tank integrity, or sludge levels without pumping. An inspector who does not pump is guessing.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Distribution box must be opened and inspected</td>
                <td className="px-4 py-3 text-sm text-gray-700">The D-box is a common failure point. If it is not inspected, a cracked or tilted D-box can cause <Link href="/problems/drainfield-failing" className="text-amber-600 underline">drainfield failure</Link> within months of closing.</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Written report with photos</td>
                <td className="px-4 py-3 text-sm text-gray-700">A verbal &ldquo;looks fine&rdquo; is worthless if problems emerge after closing. The written report is your documentation.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Flow test</td>
                <td className="px-4 py-3 text-sm text-gray-700">Running a known volume of water through the system confirms it can handle a household load. Without this, you are buying a system that might fail under normal use.</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Camera inspection of the sewer line (recommended)</td>
                <td className="px-4 py-3 text-sm text-gray-700">The pipe from house to tank is buried and invisible. Tree roots, pipe bellies, and cracks are only visible with a camera. Adds $125 to $500 but can reveal $2,000 to $5,000 problems.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Pays for the Inspection?</h3>
        <p className="text-gray-700 mb-6">
          In most markets, the <strong>buyer pays</strong> for the septic inspection as part of their due diligence, similar to the home inspection. However, this is negotiable. In some states and municipalities, the seller is required to provide a passing septic inspection before transfer. Check local requirements with your real estate agent.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Do If the System Fails Inspection</h3>
        <p className="text-gray-700 mb-2">If the inspection reveals problems, you have several options:</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li><strong>Negotiate a price reduction</strong> equal to the estimated repair cost</li>
          <li><strong>Require the seller to complete repairs</strong> before closing</li>
          <li><strong>Walk away</strong> if the problems are severe and the seller will not negotiate &mdash; this is what the inspection contingency in your contract protects</li>
          <li><strong>Accept the condition</strong> with full knowledge of what repairs you will need and their cost</li>
        </ul>
        <p className="text-sm text-gray-500 mb-8">See our <Link href="/cost-guides/septic-system-repair-cost" className="text-amber-600 underline">septic system repair cost guide</Link> for pricing on every common repair.</p>

        {/* Septic Inspection for Sellers */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Septic Inspection for Sellers</h2>
        <p className="text-gray-700 mb-4">
          Sellers benefit from a pre-listing septic inspection. Discovering and fixing a $500 problem before listing is far better than having a buyer&#39;s inspection reveal it during negotiations, which often results in a larger price concession than the actual repair cost.
        </p>
        <p className="text-gray-700 mb-4">
          A pre-listing inspection costs the same $300 to $500 as any full inspection. If the system passes, you can include the inspection report in your listing materials, which builds buyer confidence and can speed up the closing process.
        </p>
        <p className="text-gray-700 mb-8">
          If it does not pass, you have time to make repairs on your schedule rather than under the pressure of a closing deadline.
        </p>

        {/* How Often Do You Need a Septic Inspection? */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How Often Do You Need a Septic Inspection?</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Situation</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Recommended Inspection Frequency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white"><td className="px-4 py-3 text-sm font-medium text-gray-900">Standard homeowner maintenance</td><td className="px-4 py-3 text-sm text-gray-700">Every 1 to 3 years (visual or routine)</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-3 text-sm font-medium text-gray-900">System is 15+ years old</td><td className="px-4 py-3 text-sm text-gray-700">Annually</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 text-sm font-medium text-gray-900">Household size increased since install</td><td className="px-4 py-3 text-sm text-gray-700">Annually until confirmed adequate</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-3 text-sm font-medium text-gray-900">After heavy rain caused system overflow</td><td className="px-4 py-3 text-sm text-gray-700">As soon as the ground dries</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 text-sm font-medium text-gray-900">Slow drains or odor in yard</td><td className="px-4 py-3 text-sm text-gray-700">Immediately (diagnostic inspection)</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-3 text-sm font-medium text-gray-900">Buying or selling a home</td><td className="px-4 py-3 text-sm text-gray-700">Required before closing in most areas</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 text-sm font-medium text-gray-900">After major landscaping or construction near system</td><td className="px-4 py-3 text-sm text-gray-700">Within 30 days</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-8">
          The <a href="https://www.epa.gov/septic/how-care-your-septic-system" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">EPA recommends</a> inspecting every 1 to 3 years and pumping every 3 to 5 years. Many homeowners combine the inspection with pumping to save on the service call fee. See our <Link href="/articles/how-often-pump-septic-tank" className="text-amber-600 underline">pumping frequency guide</Link> for the exact schedule based on your tank size and household size.
        </p>

        {/* How to Choose a Septic Inspector */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How to Choose a Septic Inspector</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-1">Verify licensing</h4>
            <p className="text-sm text-gray-700">Most states require septic inspectors to hold a specific license or certification. Check with your state&#39;s department of environmental quality or health department for licensing requirements.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-1">Ask what&#39;s included</h4>
            <p className="text-sm text-gray-700">Get a written list of exactly what the inspection covers before booking. If the answer is vague (&ldquo;we&#39;ll check everything&rdquo;), find a different inspector.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-1">Confirm they will pump the tank</h4>
            <p className="text-sm text-gray-700">Any comprehensive inspection should include pumping. If it does not, the inspector cannot evaluate internal tank conditions and baffle integrity. An inspection without pumping is incomplete.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-1">Get at least three quotes</h4>
            <p className="text-sm text-gray-700">Pricing varies 30% to 50% between providers in the same market. Compare not just price but what is included at each price point.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-1">Check for conflicts of interest</h4>
            <p className="text-sm text-gray-700">Some inspectors also sell repair services. This creates a financial incentive to find problems. Consider using an independent inspector for the evaluation and a separate contractor for any repairs.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-1">Ask for a sample report</h4>
            <p className="text-sm text-gray-700">A quality inspector produces a detailed written report with photos, measurements, and specific recommendations. If they cannot show you a sample, their reporting may be inadequate.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-12">
          {faqSchema.mainEntity.map((faq: any, index: number) => (
            <details key={index} className="bg-gray-50 border border-gray-200 rounded-lg">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-amber-600">
                {faq.name}
              </summary>
              <div className="px-6 pb-4 text-gray-700 text-sm leading-relaxed">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>

        {/* Glossary */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Glossary</h2>
        <div className="space-y-4 mb-12">
          <div className="border-b border-gray-200 pb-3">
            <h4 className="font-semibold text-gray-900">Visual inspection</h4>
            <p className="text-sm text-gray-700">A visual inspection is the most basic level of septic evaluation in which the inspector walks the property surface, checks the drainfield area for standing water, soggy soil, odor, and unusually green grass, and provides a verbal summary of findings without opening the tank or measuring any internal components. It is useful as a quick annual check between full inspections for a system known to be healthy and well-maintained, but it is not sufficient for a real estate transaction, a suspected problem, or any system that has not been professionally inspected in more than three years.</p>
          </div>
          <div className="border-b border-gray-200 pb-3">
            <h4 className="font-semibold text-gray-900">Comprehensive inspection</h4>
            <p className="text-sm text-gray-700">A comprehensive inspection is a thorough professional evaluation that includes pumping the tank, measuring sludge and scum levels with a sludge judge, inspecting the inlet and outlet baffles and effluent filter, opening and checking the distribution box, probing the drainfield for saturation or failure, running a flow test, and producing a detailed written report with photos and repair recommendations. It is the appropriate inspection level every three to five years for routine homeowner maintenance and the minimum standard for any real estate transaction involving a property with a septic system.</p>
          </div>
          <div className="border-b border-gray-200 pb-3">
            <h4 className="font-semibold text-gray-900">Title 5 inspection</h4>
            <p className="text-sm text-gray-700">A Title 5 inspection is a state-mandated septic evaluation protocol required in Massachusetts at every property transfer, refinancing, and change of use, established under the Massachusetts Title 5 regulations to protect public health and groundwater quality. It is more rigorous and more expensive than a standard inspection, typically costing 400 to 900, and a system that fails Title 5 must be repaired or replaced before the property can be transferred.</p>
          </div>
          <div className="border-b border-gray-200 pb-3">
            <h4 className="font-semibold text-gray-900">Flow test</h4>
            <p className="text-sm text-gray-700">A flow test is a procedure conducted during a comprehensive or real estate transaction inspection in which a known volume of water is run through the household plumbing and into the septic system to verify that the system can handle a realistic household load and that effluent is flowing freely from the tank to the drainfield without backing up. A system that passes a static visual inspection but fails a flow test under realistic water use conditions reveals a functional limitation that would only become apparent when the home is occupied, making the flow test a critical component of any transaction inspection.</p>
          </div>
          <div className="border-b border-gray-200 pb-3">
            <h4 className="font-semibold text-gray-900">Dye test</h4>
            <p className="text-sm text-gray-700">A dye test is a diagnostic procedure in which non-toxic colored dye is flushed into the septic system and the inspector then checks the drainfield area, surrounding soil, and nearby water features for dye breakout, which indicates that the drainfield is not properly containing and absorbing effluent. It is an effective and inexpensive way to confirm suspected drainfield failure or surface breakout of effluent, though it cannot detect problems in the tank interior or pipe condition.</p>
          </div>
          <div className="border-b border-gray-200 pb-3">
            <h4 className="font-semibold text-gray-900">Distribution box (D-box)</h4>
            <p className="text-sm text-gray-700">A distribution box is a small concrete or plastic underground chamber located between the septic tank outlet and the drainfield that receives effluent and divides it equally among multiple drainfield trench lines to prevent any single section from being hydraulically overloaded. A cracked, tilted, or partially blocked D-box is one of the most commonly overlooked failure points in a septic system and can cause premature drainfield failure in the overloaded section while leaving other sections underused.</p>
          </div>
          <div className="border-b border-gray-200 pb-3">
            <h4 className="font-semibold text-gray-900">Sludge level</h4>
            <p className="text-sm text-gray-700">The sludge level is the measured depth of settled solid waste at the bottom of the septic tank, determined during an inspection using a sludge judge or similar measuring tool, and compared to the tanks total depth to calculate what percentage of the tanks capacity has been consumed by accumulated solids. When the sludge layer reaches one third of the tanks total depth or comes within 12 inches of the outlet tee, the EPA recommends pumping to prevent solids from escaping into the drainfield where they cause irreversible clogging.</p>
          </div>
          <div className="border-b border-gray-200 pb-3">
            <h4 className="font-semibold text-gray-900">Effluent filter</h4>
            <p className="text-sm text-gray-700">An effluent filter is a removable screen installed at the outlet pipe of the septic tank that catches suspended solids before they reach the drainfield, and it should be checked, cleaned, and if necessary replaced at every inspection and pump-out visit. A clogged effluent filter restricts outflow from the tank and produces the same whole-house slow drain symptoms as a full tank, making it one of the most commonly overlooked causes of apparent system problems that is actually an inexpensive maintenance fix.</p>
          </div>
        </div>

                {/* Related Guides */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Related Guides</h2>
        <h3 className="text-lg font-semibold text-gray-500 mb-6">On theseptic.guide</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/articles/septic-tank-pumping-cost" className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-amber-600 uppercase">Cost Guide</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">Septic Tank Pumping Cost 2026</h3>
            <p className="text-sm text-gray-600 mt-1">What pump-outs cost by tank size and region, and how to combine pumping with your inspection to save on service call fees.</p>
          </Link>
          <Link href="/articles/how-often-pump-septic-tank" className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-amber-600 uppercase">Guide</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">How Often Should You Pump Your Septic Tank?</h3>
            <p className="text-sm text-gray-600 mt-1">The EPA-based pumping and inspection schedule by tank size and household size, so you know how often to book each service.</p>
          </Link>
          <Link href="/cost-guides/septic-system-repair-cost" className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-amber-600 uppercase">Cost Guide</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">Septic System Repair Cost</h3>
            <p className="text-sm text-gray-600 mt-1">What every common repair costs after a failed inspection, from a cracked baffle to full drainfield replacement.</p>
          </Link>
          <Link href="/cost-guides/septic-system-installation-cost" className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-amber-600 uppercase">Cost Guide</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">Septic System Installation Cost 2026</h3>
            <p className="text-sm text-gray-600 mt-1">Full cost breakdown for new and replacement systems, relevant when an inspection reveals the system has reached end of life.</p>
          </Link>
          <Link href="/cost-guides/drainfield-replacement-cost" className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-amber-600 uppercase">Cost Guide</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">Drainfield Replacement Cost</h3>
            <p className="text-sm text-gray-600 mt-1">The most expensive outcome of a failed inspection, with a full cost breakdown by system type and site condition.</p>
          </Link>
          <Link href="/problems/drainfield-failing" className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-amber-600 uppercase">Problem</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">Signs Your Drainfield Is Failing</h3>
            <p className="text-sm text-gray-600 mt-1">The warning sign progression that a thorough inspection is designed to catch early, from slow drains to surfacing sewage.</p>
          </Link>
          <Link href="/guides/buying-home-with-septic" className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-amber-600 uppercase">Guide</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">Buying a Home with a Septic System</h3>
            <p className="text-sm text-gray-600 mt-1">The complete homebuyer&#39;s guide to septic due diligence, what to insist on in the inspection, and how to negotiate repairs.</p>
          </Link>
          <Link href="/guides/selling-home-with-septic" className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-amber-600 uppercase">Guide</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">Selling a Home with a Septic System</h3>
            <p className="text-sm text-gray-600 mt-1">How a pre-listing inspection protects your asking price and speeds up the closing process.</p>
          </Link>
          <Link href="/articles/septic-system-maintenance-checklist" className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-amber-600 uppercase">Guide</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">Septic System Maintenance Checklist</h3>
            <p className="text-sm text-gray-600 mt-1">The full ongoing maintenance schedule that keeps your system in passing condition between professional inspections.</p>
          </Link>
          <Link href="/reviews/best-septic-tank-risers" className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-amber-600 uppercase">Review</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">Best Septic Tank Risers</h3>
            <p className="text-sm text-gray-600 mt-1">The one upgrade that eliminates the $50 to $250 digging fee at every inspection and pump-out visit, paying for itself within two to three service calls.</p>
          </Link>
          <Link href="/problems/slow-drains" className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-amber-600 uppercase">Problem</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">Slow Drains on a Septic System</h3>
            <p className="text-sm text-gray-600 mt-1">When slow drains prompt an unscheduled inspection, this guide helps you diagnose whether the cause is a full tank, a clogged filter, or a drainfield problem before you call.</p>
          </Link>
          <Link href="/articles/complete-septic-guide" className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-amber-600 uppercase">Guide</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">Complete Septic System Guide</h3>
            <p className="text-sm text-gray-600 mt-1">How every component of the system works and what inspectors are looking for when they evaluate each one.</p>
          </Link>
          <Link href="/articles/does-insurance-cover-septic" className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-amber-600 uppercase">Guide</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">Does Insurance Cover Septic Repair and Replacement?</h3>
            <p className="text-sm text-gray-600 mt-1">What homeowners insurance covers when an inspection reveals a failed component, and what riders are available to reduce out-of-pocket repair costs.</p>
          </Link>
        </div>

        <h3 className="text-lg font-semibold text-gray-500 mb-6 mt-8">From Our Network</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a href="https://thebasement.guide/articles/sump-pump-design-ideas" className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-amber-600 uppercase">Guide</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">Sump Pump Design Ideas for 2026</h3>
            <p className="text-sm text-gray-600 mt-1">For homes where a basement inspection and a septic inspection are being scheduled together, this guide covers basement water management equipment that protects both systems.</p>
          </a>
          <a href="https://thebasement.guide/reviews/best-sump-pumps" className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-amber-600 uppercase">Review</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">Best Sump Pumps 2026</h3>
            <p className="text-sm text-gray-600 mt-1">Homes on septic systems with high water tables often need sump pumps to manage groundwater that would otherwise saturate the drainfield. Reviewed and ranked for every budget.</p>
          </a>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Need a Septic Inspection?</h2>
          <p className="text-gray-300 mb-4">Get free quotes from licensed septic inspectors in your area.</p>
          <Link href="/#get-quote" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Get Free Quotes
          </Link>
        </div>

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
