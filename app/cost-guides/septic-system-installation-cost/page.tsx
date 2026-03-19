import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Septic System Installation Cost 2026: Complete Price Breakdown by Type | The Septic Guide',
  description: 'A new septic system costs $3,000 to $20,000 installed. Complete price breakdown by system type, cost components, tank materials, hidden costs, and how to save money.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to install a septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A conventional gravity-fed septic system costs $3,000 to $8,000 installed, making it the most affordable option and the one used on approximately 70 percent of residential installations where soil conditions are suitable. An aerobic treatment unit costs $10,000 to $20,000 installed due to the added mechanical components, electrical connections, and ongoing maintenance requirements. A mound system costs $10,000 to $20,000 installed because of the imported sand and gravel, pump equipment, and engineering required to build the elevated drainfield above natural soil. The national average across all system types is approximately $8,000, but that average is heavily skewed toward conventional systems and is not a reliable planning figure for properties that require engineered alternatives. For a realistic budget, start with a soil evaluation and perc test to determine which system type your property requires, then get three to five quotes from licensed installers in your area.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does septic system installation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A conventional system typically takes one to two weeks from the start of excavation to completed installation and final inspection, assuming no unexpected site conditions such as rock, high groundwater, or access difficulties that require additional equipment or time. Aerobic treatment units and mound systems are more complex and typically take two to four weeks to complete because of the additional components, engineered sand beds, pump systems, and electrical connections involved. Permitting adds significant time before installation can begin, with the design review and approval process taking one to six weeks depending on the local health department&#39;s workload and whether the design requires revisions. The perc test and soil evaluation must be completed and approved before a permit is issued, so the full timeline from initial soil testing to a functioning system is typically four to twelve weeks for a straightforward installation and longer for complex sites. Scheduling in late summer or fall when contractors have more availability can reduce wait times compared to the busy spring season.',
      },
    },
    {
      '@type': 'Question',
      name: 'What determines which type of septic system I need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your soil percolation rate (measured by a perc test), the depth of the water table, the depth to bedrock, the available lot space, and local health department regulations. You don\'t choose a system type based on preference or budget. The site conditions and regulations determine what is allowed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I install a septic system myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most states, no. Septic installation requires permits issued to licensed installers, and the system must pass a health department inspection. Even where regulations are less strict, the excavation, engineering, and proper installation require equipment and expertise that make DIY impractical and risky.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a new septic system increase home value?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A new, code-compliant septic system protects and can increase your home value, particularly in areas where buyers are cautious about older systems. A failed or non-compliant system can reduce your home value by the full cost of replacement ($10,000 to $20,000) because buyers will factor that expense into their offers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if my property fails the perc test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A failed perc test means conventional gravity-fed systems will not work on your property. You will need an engineered alternative such as a mound system, aerobic treatment unit, or sand filter system. These cost $10,000 to $20,000, significantly more than conventional systems. In rare cases where no system type is viable, the property may not be buildable.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Septic System Installation Cost 2026: Complete Price Breakdown by Type',
  description: 'A new septic system costs $3,000 to $20,000 installed. Complete price breakdown by system type, cost components, tank materials, and how to save.',
  image: 'https://theseptic.guide/costguide.jpg',
  datePublished: '2026-03-05',
  dateModified: '2026-03-05',
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
}

export default function SepticInstallationCostArticle() {
  return (
    <div>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/costguide.jpg'
          alt='Septic system installation with excavation equipment on a residential property'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-amber-700'></div>
            <span className='text-amber-500 font-bold tracking-[0.3em] text-sm uppercase'>Cost Guide</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Septic System Installation Cost<br />
            <span className='text-amber-500'>2026: Complete Price Breakdown</span>
          </h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            What every type of system costs, where your money goes, hidden costs most estimates miss, and how to avoid overpaying.
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

      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Cost Guides', href: '/cost-guides' },
        { label: 'Septic System Installation Cost' }
      ]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>
                  <p className='text-base text-slate-700 leading-relaxed mb-6'>
            Septic system installation cost is the total expense of designing, permitting, excavating, and constructing a new on-site wastewater treatment system on a residential property, encompassing the septic tank, drainfield, connecting pipes, distribution box, and all associated labor, permitting, and site restoration. The installed cost ranges from $3,000 to $8,000 for a conventional gravity-fed system on a property with suitable soil to $10,000 to $20,000 or more for engineered alternatives such as aerobic treatment units and mound systems required when soil conditions, water table depth, or lot size prevent a conventional installation. The type of system required is determined entirely by a soil evaluation and percolation test conducted before permitting, meaning the homeowner&apos;s budget does not determine the system type the property&apos;s physical conditions do. Understanding what drives cost from the low end to the high end of the range, what hidden costs most contractor estimates omit, and what assistance programs exist is essential before requesting quotes or committing to a contractor.
          </p>
        <p className='text-base text-slate-700 leading-relaxed mb-6'>
          A new septic system costs <strong>$3,000 to $20,000</strong> installed. A conventional gravity-fed system costs <strong>$3,000 to $8,000</strong>. An aerobic treatment unit costs <strong>$10,000 to $20,000</strong>. A mound system costs <strong>$10,000 to $20,000</strong>. The national average for all types is approximately <strong>$8,000</strong>.
        </p>
        <p className='text-base text-slate-700 leading-relaxed mb-6'>
          Those are the numbers. The rest of this guide explains exactly what drives your cost from one end of that range to the other, what each type of system costs and why, what hidden costs most estimates leave out, and how to avoid overpaying.
        </p>
        <p className='text-base text-slate-700 leading-relaxed mb-12'>
          If you&apos;re new to septic systems entirely, start with our <Link href='/articles/complete-septic-guide' className='text-amber-700 underline hover:text-amber-800'>complete guide to how septic systems work</Link>.
        </p>

        {/* Section 1 - Cost by Type */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>By Type</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Septic System Cost by Type</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The type of system you need is the single biggest cost variable. Your soil conditions, lot size, water table depth, and local health department regulations determine which type is required. You don&apos;t always get to choose the cheapest option.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-semibold'>System Type</th>
                  <th className='p-2 text-center font-semibold'>Installed Cost</th>
                  <th className='p-2 text-left font-semibold'>Best For</th>
                  <th className='p-2 text-center font-semibold'>Drainfield Size</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 font-semibold text-slate-900'>Conventional (gravity-fed)</td>
                  <td className='p-2 text-center text-slate-700'>$3,000 &ndash; $8,000</td>
                  <td className='p-2 text-slate-700'>Suitable soil, adequate space, low water table</td>
                  <td className='p-2 text-center text-slate-700'>Large</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 font-semibold text-slate-900'>Chamber system</td>
                  <td className='p-2 text-center text-slate-700'>$5,000 &ndash; $12,000</td>
                  <td className='p-2 text-slate-700'>High water table, sites where gravel is expensive</td>
                  <td className='p-2 text-center text-slate-700'>Medium</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 font-semibold text-slate-900'>Aerobic treatment unit (ATU)</td>
                  <td className='p-2 text-center text-slate-700'>$10,000 &ndash; $20,000</td>
                  <td className='p-2 text-slate-700'>Small lots, poor soil, strict treatment requirements</td>
                  <td className='p-2 text-center text-slate-700'>Small</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 font-semibold text-slate-900'>Mound system</td>
                  <td className='p-2 text-center text-slate-700'>$10,000 &ndash; $20,000</td>
                  <td className='p-2 text-slate-700'>Shallow soil, high water table, high bedrock</td>
                  <td className='p-2 text-center text-slate-700'>Large (elevated)</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 font-semibold text-slate-900'>Sand filter system</td>
                  <td className='p-2 text-center text-slate-700'>$7,000 &ndash; $18,000</td>
                  <td className='p-2 text-slate-700'>Challenging soil, environmental sensitivity</td>
                  <td className='p-2 text-center text-slate-700'>Medium</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 font-semibold text-slate-900'>Drip distribution</td>
                  <td className='p-2 text-center text-slate-700'>$8,000 &ndash; $18,000</td>
                  <td className='p-2 text-slate-700'>Shallow soil, irregular lots, limited space</td>
                  <td className='p-2 text-center text-slate-700'>Distributed</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 font-semibold text-slate-900'>Evapotranspiration</td>
                  <td className='p-2 text-center text-slate-700'>$10,000 &ndash; $15,000</td>
                  <td className='p-2 text-slate-700'>Dry/arid climates only</td>
                  <td className='p-2 text-center text-slate-700'>Open-air</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 font-semibold text-slate-900'>Engineered/complex</td>
                  <td className='p-2 text-center text-slate-700'>$15,000 &ndash; $50,000</td>
                  <td className='p-2 text-slate-700'>Sites that fail perc tests, multiple challenges</td>
                  <td className='p-2 text-center text-slate-700'>Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Which System Do I Need */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Which System</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Which System Do I Need? Property Conditions to System Type</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Your property&apos;s physical conditions determine which system type will be permitted. Use this table to match your site conditions to the most likely system requirement and budget range.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-semibold'>Property Condition</th>
                  <th className='p-2 text-left font-semibold'>System Type Required</th>
                  <th className='p-2 text-center font-semibold'>Estimated Installed Cost</th>
                  <th className='p-2 text-left font-semibold'>Key Driver of Extra Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 text-slate-700'>Good soil drainage, low water table, adequate space</td>
                  <td className='p-2 font-semibold text-slate-900'>Conventional (gravity-fed)</td>
                  <td className='p-2 text-center text-slate-700'>$3,000 &ndash; $8,000</td>
                  <td className='p-2 text-slate-700'>Baseline &mdash; no additional requirements</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 text-slate-700'>Good soil but gravel is expensive or unavailable locally</td>
                  <td className='p-2 font-semibold text-slate-900'>Chamber system</td>
                  <td className='p-2 text-center text-slate-700'>$5,000 &ndash; $12,000</td>
                  <td className='p-2 text-slate-700'>Plastic chambers replace gravel trenches</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 text-slate-700'>High water table, shallow soil depth</td>
                  <td className='p-2 font-semibold text-slate-900'>Mound system</td>
                  <td className='p-2 text-center text-slate-700'>$10,000 &ndash; $20,000</td>
                  <td className='p-2 text-slate-700'>Imported sand and gravel, pump equipment, engineering</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 text-slate-700'>Small lot, poor soil, strict treatment requirements</td>
                  <td className='p-2 font-semibold text-slate-900'>Aerobic treatment unit</td>
                  <td className='p-2 text-center text-slate-700'>$10,000 &ndash; $20,000</td>
                  <td className='p-2 text-slate-700'>Aerator, electrical connection, ongoing maintenance</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 text-slate-700'>Challenging soil, environmentally sensitive site</td>
                  <td className='p-2 font-semibold text-slate-900'>Sand filter system</td>
                  <td className='p-2 text-center text-slate-700'>$7,000 &ndash; $18,000</td>
                  <td className='p-2 text-slate-700'>Lined filter box, pump, additional piping</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 text-slate-700'>Shallow soil, irregular lot shape, limited space</td>
                  <td className='p-2 font-semibold text-slate-900'>Drip distribution system</td>
                  <td className='p-2 text-center text-slate-700'>$8,000 &ndash; $18,000</td>
                  <td className='p-2 text-slate-700'>Pressure-dosed drip emitters, pump, controls</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 text-slate-700'>Arid or semi-arid climate with low rainfall</td>
                  <td className='p-2 font-semibold text-slate-900'>Evapotranspiration system</td>
                  <td className='p-2 text-center text-slate-700'>$10,000 &ndash; $15,000</td>
                  <td className='p-2 text-slate-700'>Open-air bed design, climate-dependent viability</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 text-slate-700'>Multiple site challenges, fails standard perc test</td>
                  <td className='p-2 font-semibold text-slate-900'>Engineered/complex system</td>
                  <td className='p-2 text-center text-slate-700'>$15,000 &ndash; $50,000</td>
                  <td className='p-2 text-slate-700'>Custom engineering, specialized components</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 text-slate-700'>Replacing failed drainfield, tank still usable</td>
                  <td className='p-2 font-semibold text-slate-900'>Drainfield replacement only</td>
                  <td className='p-2 text-center text-slate-700'>$5,000 &ndash; $15,000</td>
                  <td className='p-2 text-slate-700'>New trenches, gravel, pipes, D-box</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 text-slate-700'>Replacing failed tank, drainfield still functional</td>
                  <td className='p-2 font-semibold text-slate-900'>Tank replacement only</td>
                  <td className='p-2 text-center text-slate-700'>$3,000 &ndash; $7,000</td>
                  <td className='p-2 text-slate-700'>New tank, connections, decommissioning old tank</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 text-slate-700'>Buying land with no existing system</td>
                  <td className='p-2 font-semibold text-slate-900'>New first-time installation</td>
                  <td className='p-2 text-center text-slate-700'>$5,000 &ndash; $25,000</td>
                  <td className='p-2 text-slate-700'>Perc test result determines system type and total cost</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg'>
            <p className='text-slate-700 font-medium text-sm'>The perc test result is the decision point. Until a licensed soil evaluator tests your property, any cost estimate is speculative. Budget for a conventional system as a baseline and treat the perc test result as the variable that either confirms that budget or expands it.</p>
          </div>
                    </div>


        {/* System Type Details */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>System Details</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>System Type Details</h2>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Conventional System &mdash; $3,000 to $8,000</h3>
              <p className='text-slate-700 text-sm mb-2'>A conventional gravity-fed system is the simplest and least expensive to install. Wastewater flows by gravity from the house to the tank, then from the tank to the drainfield. No pumps, no mechanical components, no electricity required.</p>
              <p className='text-slate-700 text-sm'>It works well on properties with suitable soil (passes a perc test), adequate space for the drainfield, and a low water table. Roughly 70% of residential septic installations are conventional systems.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Aerobic Treatment Unit &mdash; $10,000 to $20,000</h3>
              <p className='text-slate-700 text-sm mb-2'>Aerobic systems inject oxygen into the treatment tank, supporting bacteria that break down waste far more efficiently than the anaerobic bacteria in conventional tanks. The result is cleaner effluent that requires less drainfield area.</p>
              <p className='text-slate-700 text-sm'>ATUs are common on smaller lots or sites with poor soil. They cost more because they include an aerator, electrical connections, and often a pump chamber. They also require ongoing maintenance (annual inspections, sometimes quarterly) and electricity to run, adding $100 to $200 per year in operating costs.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Mound System &mdash; $10,000 to $20,000</h3>
              <p className='text-slate-700 text-sm mb-2'>When natural soil is too shallow, the water table is too high, or bedrock is too close to the surface, a mound system is the solution. Effluent is pumped up to an engineered sand mound built above the natural ground surface. The sand provides additional filtration before water reaches the native soil.</p>
              <p className='text-slate-700 text-sm'>Mound systems are expensive because of the imported sand and gravel, the pump equipment, and the engineering required. They also create a visible raised area in the yard.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Chamber System &mdash; $5,000 to $12,000</h3>
              <p className='text-slate-700 text-sm'>Chamber systems use connected plastic chambers instead of gravel-filled trenches. They&apos;re easier to install (no gravel hauling), work well in high water table areas, and are increasingly popular for residential installations. Cost falls between conventional and aerobic systems.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Sand Filter System &mdash; $7,000 to $18,000</h3>
              <p className='text-slate-700 text-sm'>Effluent is pumped through a lined box filled with sand before reaching the drainfield. The sand provides an extra treatment layer. These systems work on sites with challenging soil but add complexity and cost due to the pump, filter box, and additional piping.</p>
            </div>
          </div>
        </div>

        {/* Section 3 - Cost Breakdown */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Cost Breakdown</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Cost Breakdown: Where Your Money Goes</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Labor accounts for 50% to 70% of the total installation cost. Here&apos;s how the budget typically breaks down for a conventional system:</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-semibold'>Component</th>
                  <th className='p-2 text-center font-semibold'>Cost Range</th>
                  <th className='p-2 text-left font-semibold'>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2 font-semibold text-slate-900'>Septic tank (1,000 gal concrete)</td><td className='p-2 text-center text-slate-700'>$800 &ndash; $1,500</td><td className='p-2 text-slate-700'>Concrete most common; plastic $500&ndash;$1,200; fiberglass $1,200&ndash;$2,000</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 font-semibold text-slate-900'>Drainfield installation</td><td className='p-2 text-center text-slate-700'>$2,000 &ndash; $5,000</td><td className='p-2 text-slate-700'>Includes trenching, gravel, perforated pipe, and distribution box</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 font-semibold text-slate-900'>Excavation and site prep</td><td className='p-2 text-center text-slate-700'>$1,000 &ndash; $4,000</td><td className='p-2 text-slate-700'>Depends on soil conditions, slope, and access</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 font-semibold text-slate-900'>Piping (house to tank to field)</td><td className='p-2 text-center text-slate-700'>$500 &ndash; $1,500</td><td className='p-2 text-slate-700'>PVC pipe, fittings, connections</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 font-semibold text-slate-900'>Permits and inspections</td><td className='p-2 text-center text-slate-700'>$400 &ndash; $2,000</td><td className='p-2 text-slate-700'>Varies significantly by county and state</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 font-semibold text-slate-900'>Perc test and soil evaluation</td><td className='p-2 text-center text-slate-700'>$250 &ndash; $1,500</td><td className='p-2 text-slate-700'>Required before installation</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 font-semibold text-slate-900'>Land survey</td><td className='p-2 text-center text-slate-700'>$300 &ndash; $900</td><td className='p-2 text-slate-700'>Required in most jurisdictions</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 font-semibold text-slate-900'>Distribution box</td><td className='p-2 text-center text-slate-700'>$150 &ndash; $500</td><td className='p-2 text-slate-700'>Divides effluent among drainfield lines</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 font-semibold text-slate-900'>Effluent filter</td><td className='p-2 text-center text-slate-700'>$50 &ndash; $200</td><td className='p-2 text-slate-700'>Recommended at tank outlet</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 font-semibold text-slate-900'>Risers and lids</td><td className='p-2 text-center text-slate-700'>$200 &ndash; $400</td><td className='p-2 text-slate-700'>Brings access lids to ground level</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 font-semibold text-slate-900'>Final grading and restoration</td><td className='p-2 text-center text-slate-700'>$500 &ndash; $2,000</td><td className='p-2 text-slate-700'>Backfill, topsoil, seeding, landscape restoration</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg'>
            <p className='text-slate-700 font-medium text-sm'>For a conventional system serving a three-bedroom home, a realistic all-in budget is <strong>$5,000 to $8,000</strong> including permits, testing, and restoration. For an aerobic or mound system, budget <strong>$12,000 to $20,000</strong>.</p>
          </div>
        </div>

        {/* Section 4 - Tank Material */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Tank Material</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Tank Material: Concrete vs. Plastic vs. Fiberglass</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The tank itself is a relatively small portion of total cost, but material choice affects longevity and performance.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-semibold'>Material</th>
                  <th className='p-2 text-center font-semibold'>Cost (1,000 gal)</th>
                  <th className='p-2 text-center font-semibold'>Lifespan</th>
                  <th className='p-2 text-left font-semibold'>Pros</th>
                  <th className='p-2 text-left font-semibold'>Cons</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 font-semibold text-slate-900'>Concrete</td>
                  <td className='p-2 text-center text-slate-700'>$800 &ndash; $1,500</td>
                  <td className='p-2 text-center text-slate-700'>40+ years</td>
                  <td className='p-2 text-slate-700'>Most durable, heavy (won&apos;t float), proven track record</td>
                  <td className='p-2 text-slate-700'>Can crack over time, requires heavy equipment</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 font-semibold text-slate-900'>Plastic (polyethylene)</td>
                  <td className='p-2 text-center text-slate-700'>$500 &ndash; $1,200</td>
                  <td className='p-2 text-center text-slate-700'>30&ndash;40 years</td>
                  <td className='p-2 text-slate-700'>Lightweight, easy to install, crack-resistant</td>
                  <td className='p-2 text-slate-700'>Can shift in saturated soil, potential floating</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 font-semibold text-slate-900'>Fiberglass</td>
                  <td className='p-2 text-center text-slate-700'>$1,200 &ndash; $2,000</td>
                  <td className='p-2 text-center text-slate-700'>30&ndash;40 years</td>
                  <td className='p-2 text-slate-700'>Lightweight, rust-proof, crack-resistant</td>
                  <td className='p-2 text-slate-700'>Most expensive, can shift in wet soil</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm'>Concrete is the most common choice for permanent residential installations. It&apos;s the heaviest, which means it won&apos;t float in saturated soil, and it has the longest proven track record. Plastic is popular for smaller installations and sites with difficult access.</p>
        </div>

        {/* Section 5 - Installation Process */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Process</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>The Installation Process Step by Step</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Understanding the process helps you evaluate contractor quotes and timelines.</p>
          <div className='space-y-3'>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>1</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Site evaluation and perc test (1&ndash;4 weeks before installation)</h4>
                <p className='text-slate-600 text-xs'>A licensed soil evaluator tests the soil&apos;s absorption rate and depth. This determines which system type your property can support and where the drainfield can be located. Required before a permit is issued.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>2</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>System design and permitting (1&ndash;6 weeks)</h4>
                <p className='text-slate-600 text-xs'>Based on perc test results, a designer or engineer creates the system plan. Your local health department reviews and approves the design before issuing a permit.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>3</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Excavation and site preparation (day 1&ndash;2)</h4>
                <p className='text-slate-600 text-xs'>The contractor excavates the tank hole, drainfield trenches, and pipe routes. This is the most labor-intensive phase and requires heavy equipment.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>4</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Tank installation (day 2&ndash;3)</h4>
                <p className='text-slate-600 text-xs'>The septic tank is set in the excavated hole, leveled, and connected to the inlet pipe from the house and the outlet pipe to the distribution box. Risers and lids are installed if included.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>5</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Drainfield construction (day 3&ndash;5)</h4>
                <p className='text-slate-600 text-xs'>Gravel is laid in the trenches, perforated pipes are set, the distribution box is connected, and the trenches are covered. For mound systems, the sand bed is built and the pump system is installed.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>6</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Connections and testing (day 5&ndash;6)</h4>
                <p className='text-slate-600 text-xs'>All plumbing connections are completed and the system is tested for proper flow. The effluent filter is installed at the tank outlet.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>7</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Final inspection, backfill, and restoration (day 6&ndash;7)</h4>
                <p className='text-slate-600 text-xs'>The health department inspects before it&apos;s covered. Once approved, the contractor backfills, grades the site, adds topsoil, and seeds or sods the disturbed areas.</p>
              </div>
            </div>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg mt-6'>
            <p className='text-slate-700 font-medium text-sm'>Total timeline for a conventional system is typically <strong>one to two weeks</strong> from excavation to completion. Complex systems (mound, ATU) can take <strong>two to four weeks</strong>.</p>
          </div>
        </div>

        {/* Section 6 - Hidden Costs */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Hidden Costs</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Hidden Costs Most Estimates Miss</h2>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Failed perc test &mdash; $5,000 to $15,000 extra</h3>
              <p className='text-slate-700 text-sm'>If your soil fails the initial perc test, you can&apos;t install a conventional system. You&apos;ll need an engineered alternative (mound, ATU, sand filter), which costs $5,000 to $15,000 more than a conventional system.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Tree and stump removal &mdash; $500 to $3,000</h3>
              <p className='text-slate-700 text-sm'>If the designated drainfield area has trees, they must be removed along with their root systems. Budget $500 to $3,000, depending on the number and size of trees.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Rock removal &mdash; $1,000 to $5,000</h3>
              <p className='text-slate-700 text-sm'>If excavation encounters bedrock or large boulders, the contractor may need specialized equipment. This can add $1,000 to $5,000 to the project.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Existing system decommissioning &mdash; $500 to $2,000</h3>
              <p className='text-slate-700 text-sm'>If you&apos;re replacing an old system, the existing tank must be properly decommissioned (pumped, crushed or filled with sand, and covered).</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Electrical connection (ATU only) &mdash; $500 to $1,500</h3>
              <p className='text-slate-700 text-sm'>Aerobic systems require a dedicated electrical circuit for the aerator and alarm. An electrician typically charges $500 to $1,500 for this work.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Landscaping restoration &mdash; $1,000 to $5,000</h3>
              <p className='text-slate-700 text-sm'>The basic estimate usually covers rough grading and seeding. If you want sod, retaining walls, or full landscape restoration, add $1,000 to $5,000.</p>
            </div>
          </div>
        </div>

        {/* Section 7 - New vs Replacement */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>New vs Replace</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>New Installation vs. Replacement Cost Differences</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Replacing an existing system is often less expensive than a first-time installation because the site has already been evaluated, the permit history exists, and some infrastructure may be reusable.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-semibold'>Scenario</th>
                  <th className='p-2 text-right font-semibold'>Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>New conventional system (first-time)</td><td className='p-2 text-right text-slate-700 font-semibold'>$5,000 &ndash; $10,000</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>New aerobic/mound system (first-time)</td><td className='p-2 text-right text-slate-700 font-semibold'>$12,000 &ndash; $25,000</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Tank replacement only (existing drainfield reused)</td><td className='p-2 text-right text-green-700 font-semibold'>$3,000 &ndash; $7,000</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Drainfield replacement only (existing tank reused)</td><td className='p-2 text-right text-amber-700 font-semibold'>$5,000 &ndash; $15,000</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Complete system replacement (tank + drainfield)</td><td className='p-2 text-right text-red-700 font-semibold'>$8,000 &ndash; $20,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm'>If your tank is still structurally sound but your drainfield has failed, you may only need to replace the drainfield. If the tank has cracked or deteriorated but the drainfield is healthy, replacing just the tank saves thousands. See our <Link href='/problems/drainfield-failing' className='text-amber-700 underline hover:text-amber-800'>guide on drainfield failure signs</Link>.</p>
        </div>

        {/* Section 8 - How to Save Money */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Save Money</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How to Save Money on Installation</h2>
          <div className='space-y-3'>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>1</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Get multiple quotes</h4>
                <p className='text-slate-600 text-xs'>Three to five quotes from licensed installers in your area give you a realistic picture of local pricing and help you identify outliers.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>2</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Schedule in the off-season</h4>
                <p className='text-slate-600 text-xs'>Late fall and winter (outside of frozen-ground climates) are slower periods for septic installers. You may get better pricing and faster scheduling.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>3</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Prepare the site yourself</h4>
                <p className='text-slate-600 text-xs'>If you can clear brush, remove small trees, and ensure equipment access before the contractor arrives, you save on labor hours. Confirm with your contractor what site prep you can handle.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>4</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Choose conventional if your soil allows it</h4>
                <p className='text-slate-600 text-xs'>A conventional gravity-fed system is $5,000 to $12,000 cheaper than an engineered alternative. Don&apos;t pay for an ATU or mound system if your perc test supports conventional.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>5</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Include risers in the initial installation</h4>
                <p className='text-slate-600 text-xs'>Adding risers to a new tank costs $200 to $400 during installation. Retrofitting them later costs more. Risers save $50 to $200 on every future pumping visit by eliminating digging fees.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>6</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Check for financial assistance</h4>
                <p className='text-slate-600 text-xs'>The <a href='https://www.rd.usda.gov/programs-services/single-family-housing-programs/single-family-housing-repair-loans-grants#:~:text=Very%2Dlow%20income%20homeowners%20in,Checklist%20(Spanish%20version%20not%20available)' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline hover:text-amber-800'>USDA Rural Development program</a> offers low-interest loans for septic installations in rural areas. Some states and counties offer grants or rebates for systems that protect water quality. Your local health department can direct you to available programs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Glossary</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Glossary</h2>
          <div className='grid md:grid-cols-2 gap-x-8 gap-y-3'>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Perc test (percolation test)</dt>
              <dd className='text-slate-600 text-xs'>A perc test is a soil evaluation that measures how quickly water drains through the ground at a proposed drainfield location, expressed as the number of minutes it takes for water to drop one inch in a test hole. The results determine which septic system types are permitted on the property and where the drainfield can be located, and a failed perc test means a conventional system cannot be installed and a more expensive engineered alternative will be required.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Conventional (gravity-fed) system</dt>
              <dd className='text-slate-600 text-xs'>A conventional gravity-fed septic system is the most common and least expensive type of on-site wastewater treatment system, in which wastewater flows by gravity from the house to the septic tank and then from the tank outlet through a distribution box to perforated pipes in gravel-filled drainfield trenches where effluent percolates into the surrounding soil. No pumps, electrical connections, or mechanical components are required, which keeps installation cost low and eliminates ongoing operating expenses, making it the preferred system type when soil conditions support it.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Aerobic treatment unit (ATU)</dt>
              <dd className='text-slate-600 text-xs'>An aerobic treatment unit is a septic system that injects oxygen into the treatment tank to support aerobic bacteria that break down waste far more efficiently than the anaerobic bacteria in a conventional tank, producing cleaner effluent that requires less drainfield area and can be used on smaller lots or sites with poor soil conditions. ATUs cost significantly more than conventional systems because they include an aerator, electrical connections, a pump chamber, and alarm systems, and they require ongoing maintenance including annual or quarterly inspections and electricity to run the aerator year-round.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Mound system</dt>
              <dd className='text-slate-600 text-xs'>A mound system is an engineered septic system in which effluent is pumped from the septic tank up to an elevated drainfield constructed from imported sand and gravel built above the natural ground surface, used when native soil is too shallow, too dense, or the water table is too high for a conventional below-grade drainfield. Mound systems are among the most expensive residential septic options because of the volume of imported materials, the pump equipment required to move effluent uphill, and the engineering involved in designing and constructing the elevated sand bed.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Distribution box (D-box)</dt>
              <dd className='text-slate-600 text-xs'>A distribution box is a small, watertight underground chamber that receives effluent from the septic tank outlet pipe and divides it equally among the multiple perforated pipe lines that make up the drainfield, ensuring no single trench line receives a disproportionate volume of effluent that would cause premature failure in that section. When the D-box cracks, shifts out of level, or deteriorates, it creates uneven distribution that overloads one drainfield section while leaving others underused, which is a common and relatively inexpensive repair compared to drainfield replacement.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Effluent filter</dt>
              <dd className='text-slate-600 text-xs'>An effluent filter is a removable screen installed at the outlet pipe of the septic tank that catches suspended solids and prevents them from reaching the drainfield, where they would clog the gravel trenches and accelerate biomat formation and drainfield failure. It costs $50 to $200 to install and is one of the highest-value components in the entire system relative to its cost, as it significantly extends drainfield lifespan by keeping solids in the tank where they belong.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Riser</dt>
              <dd className='text-slate-600 text-xs'>A septic tank riser is a vertical pipe or shaft that extends from the buried tank lid up to ground level, eliminating the need to excavate the yard to access the tank for routine pumping, inspection, and maintenance. Installing risers during the initial system installation costs only $200 to $400 and saves $50 to $200 on every future service visit by eliminating the digging fee, making them one of the best long-term value additions to any new installation.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Decommissioning</dt>
              <dd className='text-slate-600 text-xs'>Decommissioning is the process of properly shutting down and neutralizing an old septic tank that is being replaced or taken out of service, which involves pumping all remaining waste from the tank and then either crushing the tank in place or filling it completely with sand, gravel, or concrete to prevent future collapse that could create a dangerous sinkhole. Local health departments typically require proof of proper decommissioning before issuing a permit for a replacement system, and the cost of $500 to $2,000 is a hidden expense that many contractor estimates omit from their initial quotes.</dd>
            </div>
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
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How much does it cost to install a septic system?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A conventional gravity-fed septic system costs $3,000 to $8,000 installed, making it the most affordable option and the one used on approximately 70 percent of residential installations where soil conditions are suitable. An aerobic treatment unit costs $10,000 to $20,000 installed due to the added mechanical components, electrical connections, and ongoing maintenance requirements. A mound system costs $10,000 to $20,000 installed because of the imported sand and gravel, pump equipment, and engineering required to build the elevated drainfield above natural soil. The national average across all system types is approximately $8,000, but that average is heavily skewed toward conventional systems and is not a reliable planning figure for properties that require engineered alternatives. For a realistic budget, start with a soil evaluation and perc test to determine which system type your property requires, then get three to five quotes from licensed installers in your area.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How long does septic system installation take?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A conventional system typically takes one to two weeks from the start of excavation to completed installation and final inspection, assuming no unexpected site conditions such as rock, high groundwater, or access difficulties that require additional equipment or time. Aerobic treatment units and mound systems are more complex and typically take two to four weeks to complete because of the additional components, engineered sand beds, pump systems, and electrical connections involved. Permitting adds significant time before installation can begin, with the design review and approval process taking one to six weeks depending on the local health department's workload and whether the design requires revisions. The perc test and soil evaluation must be completed and approved before a permit is issued, so the full timeline from initial soil testing to a functioning system is typically four to twelve weeks for a straightforward installation and longer for complex sites. Scheduling in late summer or fall when contractors have more availability can reduce wait times compared to the busy spring season.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What determines which type of septic system I need?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Your soil&apos;s percolation rate (measured by a perc test), the depth of the water table, the depth to bedrock, the available lot space, and local health department regulations. You don&apos;t choose a system type based on preference or budget.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Can I install a septic system myself?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>In most states, no. Septic installation requires permits issued to licensed installers, and the system must pass a health department inspection. The excavation, engineering, and proper installation require equipment and expertise that make DIY impractical and risky.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Does a new septic system increase home value?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A new, code-compliant septic system protects and can increase your home&apos;s value. A failed or non-compliant system can reduce value by $10,000 to $20,000 because buyers factor replacement cost into their offers.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What happens if my property fails the perc test?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A failed perc test means conventional systems won&apos;t work. You&apos;ll need an engineered alternative (mound, ATU, sand filter) costing $10,000 to $20,000. In rare cases where no system type is viable, the property may not be buildable.</div>
            </details>
          </div>
        </div>

        {/* Related Guides */}
        <div className='mb-16'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <Link href='/articles/complete-septic-guide' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Complete Septic System Guide</h3>
              <p className='text-slate-600 text-xs'>How your system works, types, maintenance, and warning signs.</p>
            </Link>
            <Link href='/articles/septic-tank-pumping-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Tank Pumping Cost 2026</h3>
              <p className='text-slate-600 text-xs'>What pumping actually costs by tank size, region, and hidden fees.</p>
            </Link>
            <Link href='/problems/drainfield-failing' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Signs Your Drainfield Is Failing</h3>
              <p className='text-slate-600 text-xs'>Warning signs, causes, and what to do about drainfield failure.</p>
            </Link>
            <Link href='/problems/tank-backing-up' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Tank Backing Up?</h3>
              <p className='text-slate-600 text-xs'>Causes, fixes, and when to call a pro for septic backups.</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className='bg-slate-900 rounded-2xl p-8 md:p-10 text-center'>
          <h2 className='text-xl md:text-2xl font-bold text-white mb-3'>Ready to Get Installation Quotes?</h2>
          <p className='text-slate-300 mb-6 max-w-xl mx-auto text-sm'>Connect with licensed septic installers in your area. Get free, no-obligation quotes and compare prices before you commit.</p>
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
    </div>
  )
}
