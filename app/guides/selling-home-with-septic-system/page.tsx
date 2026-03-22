import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Selling a Home with a Septic System: The Complete 2026 Seller\u2019s Guide | The Septic Guide',
  description: 'Selling a home with a septic system requires a pre-sale inspection ($300\u2013$600), current pumping records, and proper disclosure. Complete guide to pre-listing preparation, disclosure requirements, negotiation strategies, and closing.',
  openGraph: {
    title: 'Selling a Home with a Septic System: The Complete 2026 Seller\u2019s Guide',
    description: 'Selling a home with a septic system requires a pre-sale inspection ($300\u2013$600), current pumping records, and proper disclosure. Complete guide for sellers.',
    url: 'https://theseptic.guide/guides/selling-home-with-septic-system',
    siteName: 'The Septic Guide',
    type: 'article',
    images: [{ url: 'https://theseptic.guide/sellinghomeonseptic.jpg', width: 1200, height: 630, alt: 'Selling a home with a septic system guide' }],
  },
  alternates: { canonical: 'https://theseptic.guide/guides/selling-home-with-septic-system' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Selling a Home with a Septic System: The Complete 2026 Seller\u2019s Guide',
  description: 'Selling a home with a septic system requires a pre-sale inspection ($300\u2013$600), current pumping records, and proper disclosure.',
  image: 'https://theseptic.guide/sellinghomeonseptic.jpg',
  datePublished: '2026-03-14',
  dateModified: '2026-03-14',
  author: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
  publisher: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    url: 'https://theseptic.guide',
    logo: { '@type': 'ImageObject', url: 'https://theseptic.guide/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://theseptic.guide/guides/selling-home-with-septic-system' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need to get my septic system inspected before selling my home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In some states, yes. Massachusetts Title 5, many New Jersey municipalities, and numerous county-level requirements across the country mandate a septic inspection before or shortly after title transfer. Even in states without mandatory inspection requirements, most buyers and their lenders will require one during the due diligence period. Getting your own inspection before listing is strongly recommended because it puts you in control: you know the results before any buyer does, you can fix issues on your own timeline, and you avoid the surprise of a failed inspection derailing your deal at the last minute. A pre-listing septic inspection costs $300 to $600 and is one of the highest-return investments a seller can make before going to market. See our septic inspection cost guide at https://theseptic.guide/cost-guides/septic-inspection-cost for detailed pricing by inspection type and region.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I sell a house with a failed septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most states, yes, but with significant limitations. You must disclose the failure on your state\'s real estate disclosure form, and buyers using FHA, VA, or USDA loans cannot close on a property with a failed septic system — this eliminates a large percentage of your buyer pool in rural areas where these loan types are most common. Cash buyers can purchase as-is but will negotiate steep discounts, often $15,000 to $25,000 below market value, because they are pricing in the repair cost plus the inconvenience and risk of managing the work themselves. In some states and municipalities, it is illegal to transfer property with a failing system that poses a health or environmental hazard, which can make an as-is sale legally impossible regardless of buyer financing. Check with your county health department for local transfer requirements before assuming an as-is sale is an option.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a failed septic system reduce home value?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A failed or failing septic system typically reduces a home\'s sale price by $10,000 to $25,000, which is often more than the actual cost of repair. This gap exists because buyers and their agents factor in not just the repair cost but the inconvenience of managing contractors after closing, the risk that additional problems exist beyond what the inspection found, and the possibility that the lender will require repairs before the loan closes anyway. A drainfield replacement that costs $10,000 to complete often results in a $15,000 to $20,000 price reduction in negotiations. Sellers who complete the repair before listing typically recover more than the cost of the repair in preserved sale price. The math almost always favors fixing first rather than disclosing and negotiating.',
      },
    },
    {
      '@type': 'Question',
      name: 'What septic records should I have when selling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compile a complete documentation package before listing: your most recent inspection report dated within 6 months, the most recent pumping receipt with date and company name, all historical pumping receipts you have accumulated, the original installation permit from the county health department, any repair or modification permits, and a system design or as-built drawing showing tank location, pipe routes, and drainfield location. Also document the tank size and material, the system age or best estimate, and the name and contact information of your septic service company. If you do not have historical records, contact your septic service company and county health department — both often retain records on file for years. Even partial records are significantly better than none, because any documentation reduces the uncertainty that causes buyers to discount their offers. See our how to find your septic tank guide at https://theseptic.guide/articles/how-to-find-your-septic-tank if you are unsure of your system\'s location.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I replace my septic system before selling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Replace the system before selling if the inspection reveals a failed drainfield, the system is significantly undersized for the number of bedrooms being advertised, or the system does not meet current code in a jurisdiction that requires compliance before sale. A new system installation ($7,000 to $20,000) typically preserves $10,000 to $25,000 or more in sale price compared to disclosing the failure and negotiating with buyers. Do not replace the system if the inspection passes clean, the system has documented remaining useful life, and your maintenance records are in order — in that case the documentation package alone is sufficient to satisfy buyers and lenders. The decision comes down to whether the preservation in sale price exceeds the cost of replacement, which it usually does when the system has failed outright. Get two or three contractor bids before deciding, and factor in how quickly you need to list.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do FHA and VA loans affect selling a home with septic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FHA and VA loans require the property to have a functioning septic system before the loan can close. If the system fails the buyer\'s inspection, the seller must repair or replace the system before closing, or the buyer must switch to a different loan program — which may not be possible depending on their financial situation. A home with a failed septic system is effectively unsellable to FHA and VA buyers, which represents approximately 30 to 40 percent of the buyer market in rural areas where septic systems are most common. USDA rural development loans carry the same requirement, further narrowing your buyer pool if the system cannot pass inspection. Ensuring your system passes inspection before listing keeps your full buyer pool intact and prevents late-stage deal collapses after you are already under contract.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the buyers inspection finds problems I did not know about?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the buyer\'s inspector identifies issues you genuinely did not know about, you are generally not liable for non-disclosure because you cannot disclose what you do not know. However, once the inspector\'s report is delivered, you now have documented knowledge of the problem and must decide how to respond. The buyer will likely request repairs, a repair credit, or a price reduction, and you will need to negotiate a resolution or risk losing the buyer. Your options are to fix the issue before closing, offer a documented credit based on contractor bids, reduce the price, or decline and accept that the buyer may walk. Having your own pre-listing inspection eliminates most of this risk because a thorough inspection before listing catches the majority of issues before any buyer is involved.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I handle the septic system during home showings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most buyers will not ask about the septic system during a showing, but your listing agent should have the full documentation package available for any buyer or agent who requests it. Do not volunteer information about problems that are not documented on your disclosure form — stick to the inspection report and disclosure form as your authoritative record. Keep the drainfield area clean, mowed, and completely free of vehicles, storage, garden beds, or any objects that suggest the area has been neglected or misused. If there is a visible riser lid, make sure it is flush, clean, and presentable — a well-maintained riser signals to observant buyers that the system has been cared for. If your system has a posted maintenance schedule (required for some aerobic systems), make sure it is current and visible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it worth getting a septic riser installed before selling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, in almost every case. A septic tank riser ($100 to $400 installed) brings the tank access point to ground level, eliminating the need to dig to locate the tank during future inspections and pumpings. This is a visible, low-cost signal to buyers and inspectors that the system has been properly maintained and accessed on a regular schedule. It also saves the buyer $50 to $200 per future pumping visit — the fee many companies charge to locate and excavate buried lids — which buyers with any septic knowledge will recognize as a tangible benefit. For a home already priced at $300,000 or more, a $300 riser installation is one of the easiest return-on-investment decisions available before listing. See our best septic tank risers guide at https://theseptic.guide/reviews/best-septic-tank-risers for product recommendations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my area is getting sewer and I still have septic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If municipal sewer is being extended to your area, check whether connection is mandatory and on what timeline before listing. If sewer connection is required within 1 to 3 years, disclose this to buyers because it represents a significant future expense ($5,000 to $15,000 for the conversion) that they will discover during due diligence regardless. Some buyers will view sewer availability as a positive — it eliminates septic maintenance permanently — while others will focus on the conversion cost as a near-term liability. If connection is optional, you can market it as a future choice rather than an obligation. See our septic to sewer conversion cost guide at https://theseptic.guide/cost-guides/septic-to-sewer-conversion-cost for full pricing by connection distance and local requirements.',
      },
    },
  ],
}

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Septic System Pre-Sale Preparation Costs 2026',
  description: 'Comparison of costs for preparing a septic system for home sale, including inspection, pumping, repairs, and documentation.',
  creator: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
  keywords: ['selling home septic system', 'septic inspection cost', 'pre-sale septic preparation', 'septic disclosure requirements'],
  variableMeasured: ['Service Type', 'Cost Range', 'Timeline', 'Required vs Optional', 'Impact on Sale'],
  includedInDataCatalog: { '@type': 'DataCatalog', name: 'The Septic Guide Cost Database' },
}

export default function SellingHomeWithSepticSystem() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />

              <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: 'Selling Home with Septic System' }]} />
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image src='/sellinghomeonseptic.jpg' alt='Selling a home with a septic system' fill className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100' priority />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-amber-700'></div>
            <span className='text-amber-500 font-bold tracking-[0.3em] text-sm uppercase'>Guide</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Selling a Home with a<br />
            <span className='text-amber-500'>Septic System</span>
          </h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            The complete 2026 seller&rsquo;s guide to pre-listing preparation, disclosure requirements, inspection strategies, and closing without surprises.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm'>SG</div>
            <div>
              <p className='text-white font-semibold'>The Septic Guide</p>
              <p className='text-slate-400 text-sm'>Updated Mar 2026 &middot; 25 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Selling a home with a septic system requires a pre-sale inspection ($300 to $600), a current pumping record ($300 to $600), disclosure of the system&rsquo;s condition on your state&rsquo;s real estate disclosure form, and in many states a passing inspection result before the title can transfer. Homes with documented septic maintenance histories sell faster, attract more buyers, and command higher prices than homes with unknown or undocumented septic systems.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Over 21 million homes in the United States rely on septic systems for wastewater treatment. If you are selling one of them, the septic system will come up during the transaction &mdash; during the buyer&rsquo;s home inspection, during the lender&rsquo;s appraisal requirements, during the title search, and on your state&rsquo;s mandatory disclosure form. How you handle it determines whether the septic system is a non-issue that buyers accept without concern or a deal-killing problem that costs you tens of thousands of dollars in price reductions, repair credits, or lost buyers.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The sellers who prepare their septic system before listing control the narrative. The sellers who wait for the buyer&rsquo;s inspector to find problems lose control of the transaction. This guide walks you through every step.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Selling a home with a septic system differs from selling a sewer-connected property because the wastewater system is private infrastructure that the buyer is taking ownership of alongside the house. Septic systems have a finite lifespan, a maintenance history that may or may not be documented, and repair costs that range from minor to transaction-ending depending on what an inspection reveals. Buyers, their lenders, and their inspectors treat the septic system as a separate line item in due diligence &mdash; one with its own pass/fail outcome that can independently stall or kill a sale. Understanding how buyers and lenders evaluate septic systems is the foundation of a smooth transaction.</p>
          <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4'>
            <p className='text-slate-700 text-sm'><strong>Start this process 2 to 3 months before your planned listing date.</strong> Every step below builds the documentation package that protects you during negotiations and gives buyers confidence.</p>
          </div>
        </div>

        {/* Pre-Listing Checklist */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>The Pre-Listing Septic Checklist</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What to Do Before You List</h2>

          {/* Step 1 */}
          <div className='mb-10'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='bg-amber-700 text-white text-xs font-bold px-2 py-1 rounded'>Step 1</span>
              <h3 className='text-lg font-bold text-slate-900'>Get the System Pumped and Inspected (2 to 3 Months Before Listing)</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Schedule a professional septic pumping ($300 to $600) and a full inspection ($300 to $600) at the same time. Many septic companies offer both services in one visit for $500 to $1,000 total. The pumping empties the tank so the inspector can evaluate the interior walls, baffles, inlet and outlet pipes, and tank structural condition.</p>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>A full inspection includes measuring the sludge and scum layers before pumping, evaluating the tank structure (cracks, corrosion, settling), testing the drainfield with a dye test or distribution box evaluation, checking the effluent filter and baffles, verifying the system is sized correctly for the number of bedrooms, and providing a written report with pass, conditional-pass, or fail status.</p>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Do this early enough that you have time to address any issues the inspector finds before listing. An inspection 2 months before listing gives you a repair window. An inspection the week before listing gives you a panic. See our <Link href='/cost-guides/septic-inspection-cost' className='text-amber-700 underline hover:text-amber-800'>septic inspection cost guide</Link> for detailed pricing by inspection type.</p>
          </div>

          {/* Step 2 */}
          <div className='mb-10'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='bg-amber-700 text-white text-xs font-bold px-2 py-1 rounded'>Step 2</span>
              <h3 className='text-lg font-bold text-slate-900'>Fix Any Issues the Inspector Finds</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The inspection may reveal problems ranging from minor ($50 to $500) to major ($5,000 to $20,000). Here is how to prioritize.</p>
            <div className='space-y-4 mb-6'>
              <div>
                <p className='font-bold text-green-800 text-sm mb-2'>Fix before listing &mdash; always:</p>
                <div className='space-y-2'>
                  <div className='flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg'>
                    <span className='text-green-700 font-bold text-xs mt-0.5'>&#10003;</span>
                    <p className='text-slate-700 text-xs'><strong>Cracked or damaged baffles</strong> ($150 to $500 to replace)</p>
                  </div>
                  <div className='flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg'>
                    <span className='text-green-700 font-bold text-xs mt-0.5'>&#10003;</span>
                    <p className='text-slate-700 text-xs'><strong>Missing or clogged effluent filter</strong> ($50 to $200 to replace)</p>
                  </div>
                  <div className='flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg'>
                    <span className='text-green-700 font-bold text-xs mt-0.5'>&#10003;</span>
                    <p className='text-slate-700 text-xs'><strong>Minor tank cracks that are not structural</strong> ($200 to $500 to seal)</p>
                  </div>
                  <div className='flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg'>
                    <span className='text-green-700 font-bold text-xs mt-0.5'>&#10003;</span>
                    <p className='text-slate-700 text-xs'><strong>Overgrown drainfield area</strong> &mdash; clear trees, shrubs, and deep roots that are too close to the system</p>
                  </div>
                  <div className='flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg'>
                    <span className='text-green-700 font-bold text-xs mt-0.5'>&#10003;</span>
                    <p className='text-slate-700 text-xs'><strong>Missing or buried tank risers</strong> ($100 to $400 to add). This makes future pumping easier and signals to buyers that you maintain the system. See our <Link href='/reviews/best-septic-tank-risers' className='text-amber-700 underline hover:text-amber-800'>best septic tank risers guide</Link> for product recommendations.</p>
                  </div>
                </div>
              </div>
              <div>
                <p className='font-bold text-amber-800 text-sm mb-2'>Fix or disclose &mdash; judgment call based on cost:</p>
                <div className='space-y-2'>
                  <div className='flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg'>
                    <span className='text-amber-700 font-bold text-xs mt-0.5'>&#9744;</span>
                    <p className='text-slate-700 text-xs'><strong>Tank needs replacement</strong> ($3,000 to $8,000). If budget allows, replacing the tank before listing eliminates the biggest buyer concern and you can market the home with a new septic tank as a selling point. If budget does not allow, disclose the condition and expect buyers to negotiate a credit.</p>
                  </div>
                  <div className='flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg'>
                    <span className='text-amber-700 font-bold text-xs mt-0.5'>&#9744;</span>
                    <p className='text-slate-700 text-xs'><strong>Drainfield showing early signs of stress</strong> &mdash; slow drainage, occasional wet spots. Disclose and provide the inspection report. A stressed drainfield may have years of life remaining but will concern buyers. Disclose and price accordingly.</p>
                  </div>
                </div>
              </div>
              <div>
                <p className='font-bold text-red-800 text-sm mb-2'>Major issues &mdash; require serious decision-making:</p>
                <div className='space-y-2'>
                  <div className='flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg'>
                    <span className='text-red-700 font-bold text-xs mt-0.5'>!</span>
                    <p className='text-slate-700 text-xs'><strong>Drainfield failure requiring replacement</strong> ($5,000 to $15,000 for conventional, $10,000 to $20,000 for mound systems). See our <Link href='/cost-guides/drainfield-replacement-cost' className='text-amber-700 underline hover:text-amber-800'>drainfield replacement cost guide</Link> for pricing.</p>
                  </div>
                  <div className='flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg'>
                    <span className='text-red-700 font-bold text-xs mt-0.5'>!</span>
                    <p className='text-slate-700 text-xs'><strong>System is undersized</strong> for the number of bedrooms being advertised</p>
                  </div>
                  <div className='flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg'>
                    <span className='text-red-700 font-bold text-xs mt-0.5'>!</span>
                    <p className='text-slate-700 text-xs'><strong>System does not meet current code</strong> (grandfathered but non-compliant)</p>
                  </div>
                </div>
              </div>
            </div>
            <p className='text-slate-700 leading-relaxed text-sm'>See our <Link href='/cost-guides/septic-system-repair-cost' className='text-amber-700 underline hover:text-amber-800'>septic system repair cost guide</Link> for a complete pricing breakdown of every repair type.</p>
          </div>

          {/* Step 3 */}
          <div className='mb-10'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='bg-amber-700 text-white text-xs font-bold px-2 py-1 rounded'>Step 3</span>
              <h3 className='text-lg font-bold text-slate-900'>Compile Your Documentation Package</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The single most valuable thing you can hand to a buyer&rsquo;s agent is a complete septic documentation package. Homes with documented maintenance histories sell for more because they remove the uncertainty that makes buyers nervous.</p>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Your documentation package should include:</p>
            <div className='bg-white border border-slate-200 rounded-lg p-4 mb-4'>
              <ul className='text-slate-700 text-xs space-y-2'>
                <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>Current inspection report (dated within 6 months of listing)</li>
                <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>Current pumping receipt with date and company name</li>
                <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>All historical pumping receipts you have (the more years of records, the better)</li>
                <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>Copy of the original installation permit (available from your county health department)</li>
                <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>Copy of any repair or modification permits</li>
                <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>System design or as-built drawing showing tank location, pipe routes, and drainfield location</li>
                <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>Tank size and material (concrete, fiberglass, or plastic)</li>
                <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>Age of the system (or best estimate)</li>
                <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>Name and contact information of your septic service company</li>
              </ul>
            </div>
            <p className='text-slate-700 leading-relaxed text-sm'>If you do not have historical records, your septic service company or county health department may have records on file. Call both. Even partial records are better than none.</p>
          </div>

          {/* Step 4 */}
          <div className='mb-6'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='bg-amber-700 text-white text-xs font-bold px-2 py-1 rounded'>Step 4</span>
              <h3 className='text-lg font-bold text-slate-900'>Clear the Drainfield Area</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Walk the drainfield area and remove anything that does not belong there: vehicles, heavy equipment, storage sheds, garden beds, or anything that compacts the soil. Trim any trees or large shrubs within 10 feet of the drainfield. Mow the area neatly. The drainfield should look like a normal, well-maintained lawn area.</p>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>During showings, a buyer or inspector who sees vehicles parked on the drainfield, trees growing through it, or standing water over it will immediately raise concerns. A clean, well-maintained drainfield area signals that the seller understands and cares for the system.</p>
            <div className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'>If your home also has a basement, buyers will inspect both the septic system and the basement during due diligence. See <a href='https://thebasement.guide' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline hover:text-amber-800'>The Basement Guide&rsquo;s homebuyer basement inspection checklist</a> for what buyers and inspectors look for below grade.</p>
            </div>
          </div>
        </div>

        {/* Disclosure Requirements */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>What You Must Disclose</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>State Requirements</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Most states require sellers to disclose the existence and condition of a septic system on the real estate disclosure form. The specific requirements vary by state, but the general obligation is the same: you must disclose what you know.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>What Most States Require You to Disclose</h3>
          <div className='bg-white border border-slate-200 rounded-lg p-4 mb-6'>
            <ul className='text-slate-700 text-xs space-y-2'>
              <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>Whether the property has a septic system vs municipal sewer</li>
              <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>The type and size of the system (if known)</li>
              <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>The date of the last pumping</li>
              <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>The date of the last inspection and the result</li>
              <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>Any known problems, repairs, or failures (past or present)</li>
              <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>Whether the system meets current code requirements</li>
              <li className='flex items-start gap-2'><span className='text-amber-700 font-bold mt-0.5'>&#8226;</span>Whether there have been any sewage backups or drainfield issues</li>
            </ul>
          </div>
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6'>
            <p className='text-slate-700 text-sm'>The EPA&rsquo;s SepticSmart program provides federal guidance on septic system responsibilities during home sales, including inspection recommendations and maintenance documentation standards. See the <a href='https://www.epa.gov/septic/septic-systems-what-homebuyer-or-seller-needs-know' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline hover:text-amber-800'>EPA Septic Systems &mdash; Buying or Selling a Home</a> guide.</p>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>States With Specific Pre-Sale Inspection Requirements</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Some states go further and require a passing septic inspection before the property can transfer ownership.</p>
          <div className='space-y-3 mb-6'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h4 className='font-bold text-slate-900 text-sm mb-1'>Massachusetts</h4>
              <p className='text-slate-600 text-xs'>Requires a septic inspection within 2 years before a sale, or within 6 months after if weather prevents inspection at time of sale. Failed systems must be brought into compliance. For complete Title 5 requirements including exemptions and inspection timelines, see the <a href='https://www.mass.gov/info-details/buying-or-selling-property-with-a-septic-system' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline hover:text-amber-800'>Massachusetts official guide to buying or selling property with a septic system</a>.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h4 className='font-bold text-slate-900 text-sm mb-1'>New Jersey</h4>
              <p className='text-slate-600 text-xs'>Requires a septic inspection before closing in many municipalities. Requirements vary by township.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h4 className='font-bold text-slate-900 text-sm mb-1'>Minnesota</h4>
              <p className='text-slate-600 text-xs'>Requires written disclosure of septic system condition. Many counties and cities require compliance inspections, especially in shoreland areas.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h4 className='font-bold text-slate-900 text-sm mb-1'>New York</h4>
              <p className='text-slate-600 text-xs'>Sellers must disclose known issues or offer a $500 credit at closing instead of completing the disclosure form. Long Island and other areas have increasingly strict requirements due to groundwater concerns.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h4 className='font-bold text-slate-900 text-sm mb-1'>Florida</h4>
              <p className='text-slate-600 text-xs'>Multiple counties require inspections before sale, particularly in environmentally sensitive areas. BMAP zones may require advanced treatment system upgrades.</p>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Many other states and municipalities have local requirements beyond the state disclosure form. Always check with your county health department and your real estate agent about local requirements before listing.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>The Cost of Not Disclosing</h3>
          <div className='bg-red-50 border border-red-200 rounded-lg p-4 mb-4'>
            <p className='text-slate-700 text-sm'>Failing to disclose a known septic problem exposes you to post-sale lawsuits. If a buyer discovers an undisclosed septic issue after closing, they can sue for the cost of repair plus legal fees. In many states, the seller is liable for up to 2 years after closing for undisclosed material defects. A $5,000 repair that you failed to disclose can become a $15,000 to $25,000 legal bill. <strong>Full disclosure is always the cheaper option.</strong></p>
          </div>
        </div>

        {/* Buyer Financing */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Financing</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How Septic Systems Affect Buyer Financing</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>The type of mortgage your buyer uses determines how much the septic system matters to the transaction.</p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Conventional Loans</h3>
              <p className='text-slate-600 text-xs'>Most conventional mortgage lenders require a satisfactory home inspection but do not specifically mandate a septic inspection. However, if the home inspector notes septic concerns, the lender may require a professional septic evaluation before approving the loan. A system that passes inspection is a non-issue. A system that fails may require repair before closing.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>FHA Loans</h3>
              <p className='text-slate-600 text-xs'>The Federal Housing Administration requires that the property&rsquo;s septic system be in proper working order. FHA appraisers are trained to look for signs of septic failure: standing water, odors, wet spots over the drainfield. If the appraiser identifies concerns, a professional septic inspection is required, and the system must pass before the loan closes. Selling to an FHA buyer with a failed septic system is effectively impossible without repairing the system first.</p>
              <p className='text-slate-600 text-xs mt-2'>If your home has a basement bathroom, verify the septic system is sized for the additional fixtures before listing. An undersized system serving more fixtures than it was designed for is a red flag for inspectors and appraisers. See <a href='https://thebasement.guide' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline hover:text-amber-800'>The Basement Guide&rsquo;s basement bathroom guide</a> for how basement plumbing connects to your wastewater system.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>VA Loans</h3>
              <p className='text-slate-600 text-xs'>The Department of Veterans Affairs has similar requirements to FHA. The property must have a functioning wastewater system. VA appraisers check for septic system adequacy, and a failing system must be repaired before closing.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>USDA Rural Development Loans</h3>
              <p className='text-slate-600 text-xs'>Common in rural areas where septic systems are prevalent. USDA loans require the septic system to meet local health department standards. A current inspection report from a licensed inspector is typically required.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Cash Buyers</h3>
              <p className='text-slate-600 text-xs'>Cash buyers are not subject to lender requirements and can purchase a property with a failed septic system if they choose. Cash buyers often use septic problems as negotiating leverage to get significant price reductions. If you are selling a home with a serious septic issue, a cash buyer may be your most realistic path to closing &mdash; but expect a lower price.</p>
            </div>
          </div>
        </div>

        {/* Septic Age Strategy */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Listing Strategy</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How Septic Age Affects Your Listing Strategy</h2>
          <div className='space-y-4'>
            <div className='bg-white border-l-4 border-green-500 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>New System (0 to 5 Years Old)</h3>
              <p className='text-slate-600 text-xs'>A recently installed or replaced septic system is a selling point. Market it prominently in your listing: &ldquo;New septic system installed [year], fully permitted, [X]-year warranty.&rdquo; Provide the installation permit, as-built drawings, and any warranty documentation. Buyers will see this as a positive that removes a common concern about older rural properties.</p>
            </div>
            <div className='bg-white border-l-4 border-amber-400 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Mid-Life System (5 to 15 Years Old)</h3>
              <p className='text-slate-600 text-xs'>A well-maintained mid-life system should be a non-issue in the transaction. Provide your documentation package (inspection report, pumping records, maintenance history) and the system will likely pass the buyer&rsquo;s inspection without problems. The key is documentation &mdash; a 10-year-old system with 3 pumping receipts and a recent clean inspection is far more reassuring than a 10-year-old system with no records at all.</p>
            </div>
            <div className='bg-white border-l-4 border-orange-400 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Aging System (15 to 25 Years Old)</h3>
              <p className='text-slate-600 text-xs'>An aging system with good maintenance records can still pass inspection and sell without problems, but buyers will ask more questions about remaining lifespan. Be honest about the system&rsquo;s age and condition. If the inspection is clean, the system may have 5 to 15 more years of life. If the inspection shows early signs of drainfield stress, disclose it and consider pricing the home to reflect the eventual replacement cost. See our <Link href='/articles/how-long-does-a-septic-system-last' className='text-amber-700 underline hover:text-amber-800'>septic system lifespan guide</Link> for how long different system types last.</p>
            </div>
            <div className='bg-white border-l-4 border-red-500 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>End-of-Life System (25+ Years Old or Failing)</h3>
              <p className='text-slate-600 text-xs mb-2'>A system at or past its expected lifespan requires an honest conversation with your real estate agent about pricing strategy. Options include:</p>
              <ul className='text-slate-600 text-xs space-y-1 list-disc list-inside'>
                <li><strong>Replace the system before listing</strong> &mdash; most expensive upfront but allows you to list at full market value</li>
                <li><strong>Price the home below market</strong> to reflect the replacement cost &mdash; often the most practical approach</li>
                <li><strong>Offer a repair credit at closing</strong> &mdash; lets you list at a higher price while acknowledging the issue</li>
              </ul>
              <p className='text-slate-600 text-xs mt-2'>If you converted a garage to living space with a bathroom, the septic system must be sized to accommodate those additional fixtures. An unpermitted garage conversion with added plumbing is a disclosure risk that can derail a sale. See <a href='https://thegarage.guide' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline hover:text-amber-800'>The Garage Guide&rsquo;s garage conversion cost guide</a> for permit and plumbing requirements.</p>
            </div>
          </div>
        </div>

        {/* Negotiation Strategies */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Negotiation</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Negotiation Strategies When Septic Becomes a Deal Point</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>In roughly 15 to 20 percent of transactions involving septic systems, the septic inspection results become a negotiation point. Here is how to handle each scenario.</p>
          <div className='space-y-4'>
            <div className='bg-green-50 border border-green-200 rounded-xl p-5'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='bg-green-700 text-white text-xs font-bold px-2 py-1 rounded'>Scenario 1</span>
                <h3 className='font-bold text-slate-900 text-sm'>Inspection Passes Clean</h3>
              </div>
              <p className='text-slate-700 text-xs'>No negotiation needed. Provide the report to the buyer, congratulate yourself on maintaining your system, and move toward closing. A clean inspection report should end all septic-related discussion.</p>
            </div>
            <div className='bg-amber-50 border border-amber-200 rounded-xl p-5'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='bg-amber-700 text-white text-xs font-bold px-2 py-1 rounded'>Scenario 2</span>
                <h3 className='font-bold text-slate-900 text-sm'>Inspection Finds Minor Issues ($500 to $2,000)</h3>
              </div>
              <p className='text-slate-700 text-xs'>Fix the issues before closing and provide documentation of the repairs. Minor repairs (baffle replacement, filter replacement, minor crack sealing) cost less to fix than the price reduction a buyer would demand. Never offer a credit for minor repairs because the buyer will overvalue the problem. Fix it, document it, and move on.</p>
            </div>
            <div className='bg-orange-50 border border-orange-200 rounded-xl p-5'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='bg-orange-700 text-white text-xs font-bold px-2 py-1 rounded'>Scenario 3</span>
                <h3 className='font-bold text-slate-900 text-sm'>Inspection Finds Moderate Issues ($2,000 to $5,000)</h3>
              </div>
              <p className='text-slate-700 text-xs mb-2'>You have three options:</p>
              <ul className='text-slate-700 text-xs space-y-1 list-disc list-inside'>
                <li><strong>Option A:</strong> Fix the problem before closing (best for preserving your sale price)</li>
                <li><strong>Option B:</strong> Offer a repair credit equal to the documented repair cost from a licensed contractor (keeps the transaction moving)</li>
                <li><strong>Option C:</strong> Reduce the sale price by the repair cost (simplest but often results in a larger reduction than the actual repair cost)</li>
              </ul>
              <p className='text-slate-700 text-xs mt-2'><strong>Option A is almost always the best financial decision for the seller.</strong></p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-xl p-5'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='bg-red-700 text-white text-xs font-bold px-2 py-1 rounded'>Scenario 4</span>
                <h3 className='font-bold text-slate-900 text-sm'>Inspection Reveals Major Failure ($5,000 to $20,000)</h3>
              </div>
              <p className='text-slate-700 text-xs mb-2'>This is where transactions most commonly fall apart. If the system has failed or the drainfield needs replacement, expect one of three outcomes:</p>
              <ul className='text-slate-700 text-xs space-y-1 list-disc list-inside mb-2'>
                <li>The buyer walks away (common with FHA and VA buyers who cannot close without a functioning system)</li>
                <li>The buyer demands a credit or price reduction of $15,000 to $25,000 even if the actual repair cost is $10,000</li>
                <li>You agree to complete the repair before closing using escrow holdback arrangements</li>
              </ul>
              <p className='text-slate-700 text-xs'>The best strategy for sellers facing major septic issues: get multiple repair bids from licensed contractors, choose the best bid and complete the repair before the buyer&rsquo;s inspection if possible, and market the home with a new or recently repaired system as a selling point. A $10,000 repair completed before listing typically preserves $15,000 to $25,000 in sale price compared to disclosing the failed system and letting buyers negotiate.</p>
            </div>
          </div>
        </div>

        {/* Maintenance Records Premium */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Documentation Value</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>The Maintenance Records Premium: What Documentation Is Worth</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Real estate data consistently shows that homes with documented maintenance histories sell faster and for more than comparable homes without documentation. For septic systems specifically, the documentation premium exists because buyers fear the unknown.</p>
          <div className='grid md:grid-cols-2 gap-4 mb-6'>
            <div className='bg-green-50 border border-green-200 rounded-lg p-4'>
              <h3 className='font-bold text-green-800 text-sm mb-2'>Home with complete septic records</h3>
              <p className='text-slate-700 text-xs'>Annual inspections, regular pumping on schedule, repair receipts, original permit. This tells the buyer: &ldquo;This system has been cared for, I know exactly what I am buying, and the risk of surprise is low.&rdquo;</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
              <h3 className='font-bold text-red-800 text-sm mb-2'>Home with no septic records</h3>
              <p className='text-slate-700 text-xs'>This tells the buyer: &ldquo;I have no idea what condition this system is in, it may need $5,000 to $20,000 in work, and I need to discount my offer to account for that risk.&rdquo;</p>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The difference between these two scenarios is often $5,000 to $15,000 in sale price. Maintaining septic records throughout your ownership is a direct investment in your eventual sale price.</p>
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
            <p className='text-slate-700 text-sm'>Septic system condition is one of several below-grade factors that affect sale price. Foundation waterproofing is another major one. See <a href='https://thebasement.guide' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline hover:text-amber-800'>The Basement Guide&rsquo;s waterproofing and home appraisal value guide</a> for how basement condition impacts appraisals alongside septic condition.</p>
          </div>
        </div>

        {/* Which Strategy Is Right for Your Situation */}
        <div className='mb-16'>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Which Strategy Is Right for Your Situation</h2>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-sm'>
              <thead><tr className='bg-slate-800 text-white'><th className='px-4 py-3 text-left font-semibold'>Your Situation</th><th className='px-4 py-3 text-left font-semibold'>Recommended Action</th><th className='px-4 py-3 text-left font-semibold'>Expected Outcome</th></tr></thead>
              <tbody className='divide-y divide-gray-200'>
                <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>System passes inspection, maintenance records exist</td><td className='px-4 py-3 text-slate-600'>List as-is with full documentation package</td><td className='px-4 py-3 text-slate-600'>Clean transaction, no septic negotiation</td></tr>
                <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>System passes inspection, no maintenance records</td><td className='px-4 py-3 text-slate-600'>Get inspection now, compile what records exist, add riser if none present</td><td className='px-4 py-3 text-slate-600'>Buyers may ask questions but system passes</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Minor issues found ($500 to $2,000)</td><td className='px-4 py-3 text-slate-600'>Fix before listing, document repairs</td><td className='px-4 py-3 text-slate-600'>Eliminates negotiation, preserves full price</td></tr>
                <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Moderate issues found ($2,000 to $5,000)</td><td className='px-4 py-3 text-slate-600'>Fix before listing if possible; offer documented repair credit if not</td><td className='px-4 py-3 text-slate-600'>Fixing preserves more price than crediting</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Major failure, drainfield replacement needed</td><td className='px-4 py-3 text-slate-600'>Get contractor bids, replace before listing if finances allow</td><td className='px-4 py-3 text-slate-600'>$10,000 repair typically preserves $15,000 to $25,000 in price</td></tr>
                <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Major failure, cannot fund repair before listing</td><td className='px-4 py-3 text-slate-600'>Disclose fully, price to reflect replacement cost, target cash buyers</td><td className='px-4 py-3 text-slate-600'>Smaller buyer pool, lower price, faster close</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>System undersized for bedroom count</td><td className='px-4 py-3 text-slate-600'>Repair or upgrade before listing; disclose if not</td><td className='px-4 py-3 text-slate-600'>Undersized system will fail inspection and lender review</td></tr>
                <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>System at end of life but still passing inspection</td><td className='px-4 py-3 text-slate-600'>Disclose age, provide inspection report, price to reflect remaining lifespan</td><td className='px-4 py-3 text-slate-600'>Buyers accept with documentation; avoid overpricing</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Mandatory compliance jurisdiction (e.g. Massachusetts Title 5)</td><td className='px-4 py-3 text-slate-600'>Confirm compliance status with county health department before listing</td><td className='px-4 py-3 text-slate-600'>Non-compliant system can block title transfer entirely</td></tr>
                <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Sewer connection mandatory within 1 to 3 years</td><td className='px-4 py-3 text-slate-600'>Disclose conversion requirement and estimated cost ($5,000 to $15,000)</td><td className='px-4 py-3 text-slate-600'>Buyers factor conversion cost into offer; disclose early</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Selling to FHA, VA, or USDA buyer</td><td className='px-4 py-3 text-slate-600'>System must pass inspection before loan closes; repair any failures first</td><td className='px-4 py-3 text-slate-600'>Failed system = loan cannot close without repair</td></tr>
                <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Selling as-is to cash buyer</td><td className='px-4 py-3 text-slate-600'>Disclose all known defects, price below market to reflect repair cost plus risk premium</td><td className='px-4 py-3 text-slate-600'>Faster close, lower price, no lender requirements</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>FAQ</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-3'>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Do I need to get my septic system inspected before selling my home?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>In some states, yes. Massachusetts Title 5, many New Jersey municipalities, and numerous county-level requirements across the country mandate a septic inspection before or shortly after title transfer. Even in states without mandatory inspection requirements, most buyers and their lenders will require one during the due diligence period. Getting your own inspection before listing is strongly recommended because it puts you in control: you know the results before any buyer does, you can fix issues on your own timeline, and you avoid the surprise of a failed inspection derailing your deal at the last minute. A pre-listing septic inspection costs $300 to $600 and is one of the highest-return investments a seller can make before going to market. See our <Link href='/cost-guides/septic-inspection-cost' className='text-amber-700 underline hover:text-amber-800'>septic inspection cost guide</Link> for detailed pricing by inspection type and region.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Can I sell a house with a failed septic system?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>In most states, yes, but with significant limitations. You must disclose the failure on your state&rsquo;s real estate disclosure form, and buyers using FHA, VA, or USDA loans cannot close on a property with a failed septic system &mdash; this eliminates a large percentage of your buyer pool in rural areas where these loan types are most common. Cash buyers can purchase as-is but will negotiate steep discounts, often $15,000 to $25,000 below market value, because they are pricing in the repair cost plus the inconvenience and risk of managing the work themselves. In some states and municipalities, it is illegal to transfer property with a failing system that poses a health or environmental hazard, which can make an as-is sale legally impossible regardless of buyer financing. Check with your county health department for local transfer requirements before assuming an as-is sale is an option.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How much does a failed septic system reduce home value?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A failed or failing septic system typically reduces a home&rsquo;s sale price by $10,000 to $25,000, which is often more than the actual cost of repair. This gap exists because buyers and their agents factor in not just the repair cost but the inconvenience of managing contractors after closing, the risk that additional problems exist beyond what the inspection found, and the possibility that the lender will require repairs before the loan closes anyway. A drainfield replacement that costs $10,000 to complete often results in a $15,000 to $20,000 price reduction in negotiations. Sellers who complete the repair before listing typically recover more than the cost of the repair in preserved sale price. The math almost always favors fixing first rather than disclosing and negotiating.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What septic records should I have when selling?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Compile a complete documentation package before listing: your most recent inspection report dated within 6 months, the most recent pumping receipt with date and company name, all historical pumping receipts you have accumulated, the original installation permit from the county health department, any repair or modification permits, and a system design or as-built drawing showing tank location, pipe routes, and drainfield location. Also document the tank size and material, the system age or best estimate, and the name and contact information of your septic service company. If you do not have historical records, contact your septic service company and county health department &mdash; both often retain records on file for years. Even partial records are significantly better than none, because any documentation reduces the uncertainty that causes buyers to discount their offers. See our <Link href='/articles/how-to-find-your-septic-tank' className='text-amber-700 underline hover:text-amber-800'>how to find your septic tank guide</Link> if you are unsure of your system&rsquo;s location.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Should I replace my septic system before selling?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Replace the system before selling if the inspection reveals a failed drainfield, the system is significantly undersized for the number of bedrooms being advertised, or the system does not meet current code in a jurisdiction that requires compliance before sale. A new system installation ($7,000 to $20,000) typically preserves $10,000 to $25,000 or more in sale price compared to disclosing the failure and negotiating with buyers. Do not replace the system if the inspection passes clean, the system has documented remaining useful life, and your maintenance records are in order &mdash; in that case the documentation package alone is sufficient to satisfy buyers and lenders. The decision comes down to whether the preservation in sale price exceeds the cost of replacement, which it usually does when the system has failed outright. Get two or three contractor bids before deciding, and factor in how quickly you need to list.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How do FHA and VA loans affect selling a home with septic?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>FHA and VA loans require the property to have a functioning septic system before the loan can close. If the system fails the buyer&rsquo;s inspection, the seller must repair or replace the system before closing, or the buyer must switch to a different loan program &mdash; which may not be possible depending on their financial situation. A home with a failed septic system is effectively unsellable to FHA and VA buyers, which represents approximately 30 to 40 percent of the buyer market in rural areas where septic systems are most common. USDA rural development loans carry the same requirement, further narrowing your buyer pool if the system cannot pass inspection. Ensuring your system passes inspection before listing keeps your full buyer pool intact and prevents late-stage deal collapses after you are already under contract.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What happens if the buyer&rsquo;s inspection finds problems I did not know about?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>If the buyer&rsquo;s inspector identifies issues you genuinely did not know about, you are generally not liable for non-disclosure because you cannot disclose what you do not know. However, once the inspector&rsquo;s report is delivered, you now have documented knowledge of the problem and must decide how to respond. The buyer will likely request repairs, a repair credit, or a price reduction, and you will need to negotiate a resolution or risk losing the buyer. Your options are to fix the issue before closing, offer a documented credit based on contractor bids, reduce the price, or decline and accept that the buyer may walk. Having your own pre-listing inspection eliminates most of this risk because a thorough inspection before listing catches the majority of issues before any buyer is involved.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How do I handle the septic system during home showings?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Most buyers will not ask about the septic system during a showing, but your listing agent should have the full documentation package available for any buyer or agent who requests it. Do not volunteer information about problems that are not documented on your disclosure form &mdash; stick to the inspection report and disclosure form as your authoritative record. Keep the drainfield area clean, mowed, and completely free of vehicles, storage, garden beds, or any objects that suggest the area has been neglected or misused. If there is a visible riser lid, make sure it is flush, clean, and presentable &mdash; a well-maintained riser signals to observant buyers that the system has been cared for. If your system has a posted maintenance schedule (required for some aerobic systems), make sure it is current and visible.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Is it worth getting a septic riser installed before selling?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Yes, in almost every case. A septic tank riser ($100 to $400 installed) brings the tank access point to ground level, eliminating the need to dig to locate the tank during future inspections and pumpings. This is a visible, low-cost signal to buyers and inspectors that the system has been properly maintained and accessed on a regular schedule. It also saves the buyer $50 to $200 per future pumping visit &mdash; the fee many companies charge to locate and excavate buried lids &mdash; which buyers with any septic knowledge will recognize as a tangible benefit. For a home already priced at $300,000 or more, a $300 riser installation is one of the easiest return-on-investment decisions available before listing. See our <Link href='/reviews/best-septic-tank-risers' className='text-amber-700 underline hover:text-amber-800'>best septic tank risers guide</Link> for product recommendations.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What if my area is getting sewer and I still have septic?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>If municipal sewer is being extended to your area, check whether connection is mandatory and on what timeline before listing. If sewer connection is required within 1 to 3 years, disclose this to buyers because it represents a significant future expense ($5,000 to $15,000 for the conversion) that they will discover during due diligence regardless. Some buyers will view sewer availability as a positive &mdash; it eliminates septic maintenance permanently &mdash; while others will focus on the conversion cost as a near-term liability. If connection is optional, you can market it as a future choice rather than an obligation. See our <Link href='/cost-guides/septic-to-sewer-conversion-cost' className='text-amber-700 underline hover:text-amber-800'>septic to sewer conversion cost guide</Link> for full pricing by connection distance and local requirements.</div>
            </details>
          </div>
        </div>

        {/* Glossary */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Glossary</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Glossary of Septic Real Estate Terms</h2>
          <div className='space-y-3'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Septic disclosure</h3>
              <p className='text-slate-600 text-xs'>A section of the state real estate disclosure form where the seller reports the existence, type, condition, maintenance history, and any known problems with the property&rsquo;s septic system. Most states require sellers to complete this disclosure, and failure to disclose a known material defect can result in post-sale lawsuits and financial liability for up to 2 years after closing in many jurisdictions. Sellers who have completed a <Link href='/cost-guides/septic-inspection-cost' className='text-amber-700 underline hover:text-amber-800'>pre-listing septic inspection</Link> are in the strongest position to complete the disclosure form accurately and defend their disclosures if challenged.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Pre-listing inspection</h3>
              <p className='text-slate-600 text-xs'>A septic inspection arranged and paid for by the seller before the home is listed for sale, costing $300 to $600 and giving the seller full knowledge of the system&rsquo;s condition before any buyer is involved. Pre-listing inspections allow the seller to fix problems on their own timeline, compile a complete documentation package, and avoid the leverage a buyer gains when a failed inspection is discovered during the due diligence period. This is distinct from the buyer&rsquo;s inspection, which occurs after an offer is accepted and whose results the seller cannot control. See our <Link href='/cost-guides/septic-inspection-cost' className='text-amber-700 underline hover:text-amber-800'>septic inspection cost guide</Link> for pricing by inspection type.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Title 5 (Massachusetts)</h3>
              <p className='text-slate-600 text-xs'>The Massachusetts state regulation (310 CMR 15.000) that governs septic system design, installation, inspection, and transfer requirements, and is the most commonly referenced state-specific septic regulation in residential real estate transactions. Title 5 requires a septic inspection within 2 years before a property sale and mandates that failed systems be brought into compliance before the title can transfer. It is the model that many other states have used as a framework for their own pre-sale inspection requirements.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Repair credit</h3>
              <p className='text-slate-600 text-xs'>A negotiated dollar amount that the seller agrees to credit to the buyer at closing to offset the cost of septic system repairs that the buyer will complete after taking ownership. Repair credits allow the transaction to close without the seller performing the work, but buyers typically demand a credit larger than the actual repair cost to account for the inconvenience, contractor coordination, and risk of discovering additional problems once work begins. For moderate issues ($2,000 to $5,000), completing the repair before closing almost always preserves more sale price than offering a credit. See our <Link href='/cost-guides/septic-system-repair-cost' className='text-amber-700 underline hover:text-amber-800'>septic system repair cost guide</Link> for documented repair pricing to use as a negotiation baseline.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>As-is sale</h3>
              <p className='text-slate-600 text-xs'>A property sold in its current condition without the seller making any repairs, most commonly used for properties with failed or end-of-life septic systems where the seller cannot or does not wish to fund repairs before closing. As-is sales attract cash buyers who can close without lender-mandated septic requirements, but these buyers price the repair cost &mdash; and a risk premium on top of it &mdash; into their offers, typically resulting in a sale price $15,000 to $25,000 below market. Even in as-is transactions, sellers must still disclose all known material defects on the state disclosure form in most jurisdictions.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Escrow holdback</h3>
              <p className='text-slate-600 text-xs'>An arrangement where a portion of the sale proceeds is held by the title company or closing attorney after closing to fund specific repairs that could not be completed before the closing date. Escrow holdbacks are sometimes used for septic repairs that require contractor scheduling, permit processing, or seasonal conditions that make pre-closing completion impractical. The escrowed funds are released to the contractor upon documented completion of the work, protecting both the buyer and the seller.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Drainfield (leach field)</h3>
              <p className='text-slate-600 text-xs'>The underground network of perforated pipes and gravel beds where treated wastewater from the septic tank percolates through soil for final treatment and dispersal. Drainfield failure is the most expensive septic repair ($5,000 to $20,000) and the most common deal-breaker in real estate transactions involving septic systems, because a failed drainfield cannot be unclogged or restored &mdash; only replaced. See our <Link href='/problems/drainfield-failing' className='text-amber-700 underline hover:text-amber-800'>signs your drainfield is failing guide</Link> for the warning signs that typically appear before a full failure.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>System compliance</h3>
              <p className='text-slate-600 text-xs'>Whether a septic system meets current local health department and state environmental regulations at the time of sale, as distinct from the codes that were in effect when the system was originally installed. Some jurisdictions require the system to be brought into full current compliance before a property can be sold, while others allow grandfathered systems to transfer as long as they are functioning. Sellers in compliance-required jurisdictions should verify their system&rsquo;s status with the county health department before listing, because a non-compliant system can block the title transfer entirely regardless of whether the system is currently functioning.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Dye test</h3>
              <p className='text-slate-600 text-xs'>A diagnostic inspection method where a colored dye is flushed into the septic system to trace the path of effluent through the tank, distribution box, and drainfield. Inspectors use dye tests to verify that wastewater is reaching the drainfield correctly and is not surfacing in the yard, reaching waterways, or bypassing system components. A positive dye test result &mdash; meaning dye appears on the ground surface or in a nearby waterway &mdash; is confirmation of system failure and will be noted in the inspection report that gets shared with buyers and lenders.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>As-built drawing</h3>
              <p className='text-slate-600 text-xs'>A diagram showing the actual installed locations of all septic system components &mdash; tank, distribution box, drainfield lines, cleanouts, and connecting pipes &mdash; as they were constructed on the property. As-built drawings are created during or after installation and filed with the county health department, and are one of the most valuable documents a seller can include in their documentation package because they allow buyers and inspectors to locate every component without excavation. If you do not have a copy, contact your county health department, as most retain filed as-built drawings permanently. See our <Link href='/articles/how-to-find-your-septic-tank' className='text-amber-700 underline hover:text-amber-800'>how to find your septic tank guide</Link> for methods to locate components when no drawing is available.</p>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className='mb-16'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <Link href='/guides/buying-home-with-septic' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Buying a Home with a Septic System</h3>
              <p className='text-slate-600 text-xs'>What buyers need to inspect, ask, and verify before closing.</p>
            </Link>
            <Link href='/cost-guides/septic-inspection-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Inspection Cost</h3>
              <p className='text-slate-600 text-xs'>Pricing by inspection type, region, and system complexity.</p>
            </Link>
            <Link href='/cost-guides/septic-system-repair-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic System Repair Cost</h3>
              <p className='text-slate-600 text-xs'>Complete pricing breakdown for every septic repair type.</p>
            </Link>
            <Link href='/cost-guides/drainfield-replacement-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Drainfield Replacement Cost</h3>
              <p className='text-slate-600 text-xs'>Conventional, mound, and alternative system replacement pricing.</p>
            </Link>
            <Link href='/cost-guides/septic-system-installation-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic System Installation Cost</h3>
              <p className='text-slate-600 text-xs'>New system installation costs by type and region.</p>
            </Link>
            <Link href='/cost-guides/septic-to-sewer-conversion-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic to Sewer Conversion Cost</h3>
              <p className='text-slate-600 text-xs'>What it costs to abandon septic and connect to municipal sewer.</p>
            </Link>
            <Link href='/problems/drainfield-failing' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Signs Your Drainfield Is Failing</h3>
              <p className='text-slate-600 text-xs'>Warning signs, causes, and what to do before it becomes a deal-breaker.</p>
            </Link>
            <Link href='/articles/how-long-does-a-septic-system-last' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>How Long Does a Septic System Last</h3>
              <p className='text-slate-600 text-xs'>Expected lifespan by system type and maintenance history.</p>
            </Link>
            <Link href='/articles/how-to-find-your-septic-tank' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>How to Find Your Septic Tank</h3>
              <p className='text-slate-600 text-xs'>Methods for locating your tank before inspection or sale.</p>
            </Link>
            <Link href='/reviews/best-septic-tank-risers' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Best Septic Tank Risers</h3>
              <p className='text-slate-600 text-xs'>Top-rated risers to bring your tank access to ground level.</p>
            </Link>
            <Link href='/articles/does-insurance-cover-septic-repair-replacement' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Does Insurance Cover Septic Repair?</h3>
              <p className='text-slate-600 text-xs'>What homeowner&rsquo;s insurance covers and what it does not.</p>
            </Link>
            <Link href='/comparisons/septic-vs-sewer' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic vs Sewer</h3>
              <p className='text-slate-600 text-xs'>Cost, maintenance, and value comparison for buyers and sellers.</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className='bg-slate-900 rounded-2xl p-8 md:p-10 text-center mb-10'>
          <h2 className='text-xl md:text-2xl font-bold text-white mb-3'>Need Professional Septic Service?</h2>
          <p className='text-slate-300 mb-6 max-w-xl mx-auto text-sm'>Connect with licensed septic professionals in your area for inspection, pumping, or repair before listing your home.</p>
          <Link href='/get-quote' className='inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-sm'>Get Free Quotes</Link>
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
