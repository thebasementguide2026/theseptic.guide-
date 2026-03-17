import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Septic Tank Pumping Cost 2026: What You\'ll Actually Pay | The Septic Guide',
  description: 'The average septic tank pumping costs $300 to $600. Learn real pricing by tank size, region, hidden fees to watch for, and the questions to ask before hiring.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to pump a septic tank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The national average is $300 to $600 for a standard residential tank (1,000 to 1,500 gallons). Your actual cost depends on tank size, location, accessibility, and whether the company charges separately for disposal. Always get a fully inclusive quote that covers pumping, disposal, and a basic inspection.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I pump my septic tank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every three to five years for a typical household of two to four people. Larger families, homes with garbage disposals, or smaller tanks may need pumping every two to three years. A professional can measure your sludge and scum levels during an inspection and give you a personalized schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I don\'t pump my septic tank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sludge and scum accumulate until they overflow into the drainfield, clogging the pipes and soil. This leads to sewage backing up into your home, surfacing in your yard, or both. Once the drainfield is clogged with solids, it cannot be unclogged. You\'ll need a drainfield replacement ($5,000 to $15,000) or a complete system replacement ($15,000 to $30,000).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is septic tank pumping the same as septic tank cleaning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not exactly. Pumping removes the liquid, sludge, and floating scum. Cleaning goes further by hydro-jetting the tank walls and floor to remove compacted material that the vacuum cannot reach. Most routine services are pumping only. Cleaning is recommended for severely neglected tanks and adds $200 to $300 to the cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time of year to pump a septic tank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fall and late summer are ideal for most climates. The ground is still accessible, the water table is typically lower, and septic companies tend to be less booked than in spring. Avoid pumping during or immediately after heavy rain, as an empty tank in saturated soil can float out of the ground.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get my tank pumped before selling my house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In many states, yes. Over 30 states require a septic inspection (which typically includes pumping) before a home can be sold. Even if your state does not require it, a recent pumping receipt and clean inspection report strengthens your negotiating position and prevents buyers from requesting credits for deferred maintenance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does homeowners insurance cover septic pumping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Routine septic tank pumping is considered maintenance and no homeowners insurance policy covers it. Insurance can cover damage caused by a septic failure in certain circumstances, but it does not cover the maintenance that would have prevented the failure.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Septic Tank Pumping Cost 2026: What You\'ll Actually Pay',
  description: 'The average septic tank pumping costs $300 to $600. Learn real pricing by tank size, region, hidden fees, and how to avoid overpaying.',
  image: 'https://theseptic.guide/pumpingcostguide.jpg',
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

export default function SepticPumpingCostArticle() {
  return (
    <div>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image src='/pumpingcostguide.jpg' alt='Septic tank pumping truck servicing a residential property' fill className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100' priority />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-amber-700'></div>
            <span className='text-amber-500 font-bold tracking-[0.3em] text-sm uppercase'>Cost Guide</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Septic Tank Pumping Cost<br />
            <span className='text-amber-500'>2026: What You&apos;ll Actually Pay</span>
          </h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Real pricing by tank size, region, and situation &mdash; plus the hidden fees nobody warns you about and the questions to ask before hiring.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm'>SG</div>
            <div>
              <p className='text-white font-semibold'>The Septic Guide</p>
              <p className='text-slate-400 text-sm'>Updated Mar 2026 &middot; 18 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Articles', href: '/articles' }, { label: 'Septic Tank Pumping Cost' }]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>
            <p className='text-base text-slate-700 leading-relaxed mb-6'>Septic tank pumping is the process of removing accumulated sludge, scum, and liquid waste from a residential septic tank using a vacuum truck, and it is the single most important maintenance task for any home on a septic system. The average cost to pump a septic tank in 2026 is $300 to $600 for a standard 1,000 to 1,500 gallon tank, with most homeowners paying around $400. Cost varies by tank size, region, accessibility, and whether the company charges separately for disposal, inspection, and effluent filter cleaning. This guide breaks down real 2026 pricing by tank size and region, covers every hidden fee to watch for, explains what a quality pumping service should include, and tells you exactly what to ask before hiring.</p>
        <p className='text-base text-slate-700 leading-relaxed mb-6'>
          The average septic tank pumping costs <strong>$300 to $600</strong> for a standard residential tank. Most homeowners pay around $400 to $450. But that national average hides a lot of variation, and the final number on your invoice depends on factors that most cost guides skip over entirely.
        </p>
        <p className='text-base text-slate-700 leading-relaxed mb-6'>
          This guide breaks down real pricing by tank size, region, and situation. More importantly, it covers the hidden costs, the add-on fees nobody warns you about, and the specific questions you should ask before hiring a pumping company so you don&apos;t overpay.
        </p>
        <p className='text-base text-slate-700 leading-relaxed mb-12'>
          If you&apos;re new to septic ownership and want to understand the full system first, start with our <Link href='/articles/complete-septic-guide' className='text-amber-700 underline hover:text-amber-800'>complete guide to septic systems</Link>. For industry standards on septic maintenance, the <a href='https://www.epa.gov/septic/how-care-your-septic-system' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline hover:text-amber-800'>EPA</a> and the <a href='https://www.nowra.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline hover:text-amber-800'>National Onsite Wastewater Recycling Association (NOWRA)</a> are the authoritative sources.
        </p>

        {/* Section 1 - Cost by Tank Size */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Tank Size</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Septic Pumping Cost by Tank Size</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Tank size is the single biggest factor in what you&apos;ll pay. Larger tanks hold more waste, take longer to pump, and generate higher disposal fees at the treatment facility. Here&apos;s what to expect in 2026:</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-semibold'>Tank Size</th>
                  <th className='p-2 text-center font-semibold'>Typical Cost</th>
                  <th className='p-2 text-left font-semibold'>Common For</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 font-semibold text-slate-900'>500&ndash;750 gallons</td>
                  <td className='p-2 text-center text-slate-700'>$200 &ndash; $350</td>
                  <td className='p-2 text-slate-700'>Small homes, cabins, 1&ndash;2 bedrooms</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 font-semibold text-slate-900'>1,000 gallons</td>
                  <td className='p-2 text-center text-slate-700'>$300 &ndash; $450</td>
                  <td className='p-2 text-slate-700'>Most 3-bedroom homes &mdash; most common size</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 font-semibold text-slate-900'>1,250 gallons</td>
                  <td className='p-2 text-center text-slate-700'>$350 &ndash; $500</td>
                  <td className='p-2 text-slate-700'>3&ndash;4 bedroom homes</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 font-semibold text-slate-900'>1,500 gallons</td>
                  <td className='p-2 text-center text-slate-700'>$400 &ndash; $550</td>
                  <td className='p-2 text-slate-700'>4&ndash;5 bedroom homes</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 font-semibold text-slate-900'>2,000 gallons</td>
                  <td className='p-2 text-center text-slate-700'>$500 &ndash; $700</td>
                  <td className='p-2 text-slate-700'>Large homes, 5+ bedrooms</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 font-semibold text-slate-900'>2,500 gallons</td>
                  <td className='p-2 text-center text-slate-700'>$700 &ndash; $1,000</td>
                  <td className='p-2 text-slate-700'>Multi-family or commercial</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg'>
            <p className='text-slate-700 font-medium text-sm'>If you don&apos;t know your tank size, check your property records, the original septic permit on file with your local health department, or ask the pumping technician to read the stamp on the tank lid during the first service.</p>
          </div>
        </div>

        {/* Section 2 - Cost by Region */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>By Region</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Septic Pumping Cost by Region</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Where you live affects pricing significantly because labor rates, disposal fees, and the number of available septic companies all vary by area.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-semibold'>Region</th>
                  <th className='p-2 text-center font-semibold'>Typical Range</th>
                  <th className='p-2 text-left font-semibold'>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 font-semibold text-slate-900'>Northeast (NY, NJ, CT, MA, PA)</td>
                  <td className='p-2 text-center text-slate-700'>$350 &ndash; $650</td>
                  <td className='p-2 text-slate-700'>Higher labor costs, stricter environmental regulations, higher disposal fees</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 font-semibold text-slate-900'>Southeast (FL, GA, NC, SC, TN)</td>
                  <td className='p-2 text-center text-slate-700'>$275 &ndash; $450</td>
                  <td className='p-2 text-slate-700'>More septic companies competing, lower labor costs</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 font-semibold text-slate-900'>Midwest (OH, MI, IN, IL, WI, MN)</td>
                  <td className='p-2 text-center text-slate-700'>$300 &ndash; $500</td>
                  <td className='p-2 text-slate-700'>Mid-range labor, rural areas often cheaper</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 font-semibold text-slate-900'>West Coast (CA, WA, OR)</td>
                  <td className='p-2 text-center text-slate-700'>$400 &ndash; $700</td>
                  <td className='p-2 text-slate-700'>Highest overall service costs, strict regulations</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 font-semibold text-slate-900'>Mountain/Plains (CO, UT, ID, MT)</td>
                  <td className='p-2 text-center text-slate-700'>$275 &ndash; $500</td>
                  <td className='p-2 text-slate-700'>Varies widely based on travel distance to rural properties</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 font-semibold text-slate-900'>South Central (TX, OK, AR, LA)</td>
                  <td className='p-2 text-center text-slate-700'>$250 &ndash; $450</td>
                  <td className='p-2 text-slate-700'>Competitive market, lower cost of living</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm'>Rural properties sometimes cost more than suburban ones despite lower regional averages because the pumping truck has to travel farther. If you&apos;re 30+ miles from the nearest provider, expect a travel surcharge of <strong>$50 to $150</strong>.</p>
        </div>

        {/* Section 3 - Hidden Costs */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Hidden Costs</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Hidden Costs and Add-On Fees Most Guides Don&apos;t Mention</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>The base pumping fee is just the starting point. These additional charges are common, often undisclosed until the invoice arrives, and completely avoidable if you know to ask upfront.</p>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Digging and Access Fees &mdash; $50 to $200</h3>
              <p className='text-slate-700 text-sm mb-2'>If your tank lids are buried under soil, grass, gravel, or a deck, the crew has to dig to find them. This adds time and labor. Most companies charge $50 to $200 depending on depth and difficulty.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: Install septic tank risers ($200&ndash;$400 one-time). Risers bring the access lids to ground level permanently, eliminating this fee for every future pumping. They pay for themselves in two to three pump-outs.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Tank Locating Fee &mdash; $50 to $150</h3>
              <p className='text-slate-700 text-sm mb-2'>If nobody knows where the tank is buried and there are no records, the technician has to locate it using a probe, electronic locator, or camera. Some companies include this in their base rate. Many don&apos;t.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: Locate your tank once, mark it permanently, and keep a diagram. See our <Link href='/guides/find-your-septic-tank' className='underline hover:text-amber-800'>guide on how to find your septic tank</Link>.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Disposal Fees &mdash; Sometimes Separate</h3>
              <p className='text-slate-700 text-sm'>Some companies include waste disposal in their flat rate. Others charge the pumping labor separately from the disposal fee ($25 to $75 per load). Always ask: <em>&ldquo;Does your quoted price include disposal, or is that billed separately?&rdquo;</em></p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Pumping vs. Cleaning &mdash; $200 to $300 Extra</h3>
              <p className='text-slate-700 text-sm'>Standard pumping removes liquid and floating solids. But in a neglected tank, hardened sludge can crust along the bottom and walls that the vacuum alone can&apos;t remove. Cleaning involves hydro-jetting the tank interior. If your tank hasn&apos;t been pumped in 7+ years, expect the technician to recommend cleaning.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Emergency and After-Hours Surcharges &mdash; $150 to $300 Extra</h3>
              <p className='text-slate-700 text-sm'>If sewage is backing up into your house on a Saturday night, you&apos;ll pay a premium. Emergency service typically adds $150 to $300, bringing the total to $500 to $1,000. The best way to avoid this is to never let it reach the emergency stage.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Effluent Filter Cleaning or Replacement &mdash; $50 to $200</h3>
              <p className='text-slate-700 text-sm'>Many modern septic tanks have an effluent filter at the outlet pipe that catches solids before they reach the drainfield. This filter needs to be cleaned or replaced during pumping. Some companies include this; others charge separately. If your tank has a filter and it&apos;s not being cleaned during pumping, ask why.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Baffle Inspection and Repair &mdash; $150 to $500</h3>
              <p className='text-slate-700 text-sm'>A good pumping company inspects the baffles (inlet and outlet T-fittings) while the tank is empty. Cracked or missing baffles allow scum and sludge to escape into the drainfield &mdash; the fastest path to drainfield failure. If found, repair costs $150 to $500. Far cheaper than a $5,000&ndash;$15,000 drainfield replacement.</p>
            </div>
          </div>
        </div>

        {/* Section 4 - What Pumping Includes */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>What to Expect</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>What Pumping Actually Includes &mdash; And What It Should Include</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Not all pumping services are equal. A quality pumping visit should include all of the following:</p>
          <div className='space-y-2 mb-6'>
            {[
              'Full pump-out of all liquids, sludge, and scum from the tank.',
              'A visual inspection of the tank interior checking for cracks, baffle condition, and structural integrity.',
              'Measurement of the tank\'s sludge and scum levels before pumping to help calibrate your pumping schedule.',
              'Cleaning or inspection of the effluent filter if one is present.',
              'A written service report noting the date, volume pumped, tank condition, and any recommended repairs.',
              'Proper disposal of septage at a licensed treatment facility.',
            ].map((item, i) => (
              <div key={i} className='flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg'>
                <span className='text-green-700 font-bold text-sm mt-0.5'>&#10003;</span>
                <p className='text-slate-700 text-sm'>{item}</p>
              </div>
            ))}
          </div>
          <div className='bg-amber-50 border border-amber-200 rounded-lg p-5'>
            <p className='text-amber-900 font-semibold mb-1 text-sm'>Important</p>
            <p className='text-amber-800 text-xs'>If the company shows up, pumps the tank in 20 minutes, and leaves without telling you anything about the tank&apos;s condition, you didn&apos;t get a full service. The inspection portion is arguably more valuable than the pumping itself &mdash; it catches developing problems before they become expensive failures.</p>
          </div>
        </div>

        {/* Section 5 - Questions to Ask */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Before You Hire</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Questions to Ask Before Hiring a Pumping Company</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Getting three quotes before choosing is standard practice. The cheapest quote is not always the best value if it skips the inspection. Ask every company:</p>
          <div className='grid md:grid-cols-2 gap-3 mb-6'>
            {[
              'How much do you charge for a [tank size] pump-out?',
              'Does that price include disposal, or is that billed separately?',
              'Do you charge extra for digging if the lids are buried?',
              'Do you inspect the baffles and effluent filter during pumping?',
              'Will I receive a written service report?',
              'Are you licensed and insured?',
              'Can you provide references or reviews?',
              'Is there a travel surcharge for my address?',
            ].map((q, i) => (
              <div key={i} className='flex items-start gap-2 p-3 bg-slate-50 border border-slate-200 rounded-lg'>
                <span className='text-amber-700 font-bold text-xs mt-0.5'>Q</span>
                <p className='text-slate-700 text-xs'>{q}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6 - Cost Comparison */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Real Cost</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Pumping vs. Not Pumping: The Real Cost Comparison</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Homeowners who skip or delay pumping because it seems expensive are making one of the costliest mistakes in home maintenance. Here&apos;s what the numbers actually look like:</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-semibold'>Scenario</th>
                  <th className='p-2 text-right font-semibold'>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Routine pumping every 3&ndash;5 years</td><td className='p-2 text-right text-green-700 font-semibold'>$300 &ndash; $600</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Emergency pumping (backup into house)</td><td className='p-2 text-right text-amber-700 font-semibold'>$500 &ndash; $1,000</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Septic tank repair (cracked baffle, damaged pipe)</td><td className='p-2 text-right text-amber-700 font-semibold'>$200 &ndash; $1,500</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Drainfield rejuvenation (clogged from skipped pumping)</td><td className='p-2 text-right text-red-700 font-semibold'>$1,000 &ndash; $5,000</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Full drainfield replacement</td><td className='p-2 text-right text-red-700 font-semibold'>$5,000 &ndash; $15,000</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Complete septic system replacement</td><td className='p-2 text-right text-red-700 font-semibold'>$15,000 &ndash; $30,000</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-900 rounded-lg p-5'>
            <p className='text-white font-semibold mb-2 text-sm'>The Bottom Line</p>
            <p className='text-slate-300 text-xs'>A homeowner who pumps every four years for 20 years spends roughly $2,000 to $3,000 total. A homeowner who skips pumping and suffers a drainfield failure at year 12 spends $10,000 to $15,000 in a single event, plus landscaping restoration and potential health department fines. Routine pumping is not an expense &mdash; it&apos;s insurance against a five-figure repair bill.</p>
          </div>
        </div>

        {/* Section 7 - How to Save Money */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Save Money</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How to Save Money on Septic Pumping</h2>
          <div className='space-y-3'>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>1</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Install risers</h4>
                <p className='text-slate-600 text-xs'>The one-time cost of $200 to $400 eliminates the $50 to $200 digging fee at every future pumping. They pay for themselves in two to three visits and save you money for the life of the system.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>2</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Know your tank size and location</h4>
                <p className='text-slate-600 text-xs'>Having this information ready when you call for quotes avoids the locating fee and helps you compare prices accurately across companies.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>3</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Schedule off-peak</h4>
                <p className='text-slate-600 text-xs'>Fall and late winter tend to be slower seasons for septic companies in most regions. You may get better availability and sometimes better pricing compared to the busy spring season.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>4</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Bundle with a neighbor</h4>
                <p className='text-slate-600 text-xs'>Some companies offer a discount when they pump multiple tanks in the same area on the same visit. If your neighbors also have septic systems, coordinate your pumping schedules and ask about a multi-home rate.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>5</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Don&apos;t over-pump</h4>
                <p className='text-slate-600 text-xs'>Pumping too often wastes money. If your tank was last pumped two years ago and the technician tells you sludge is only at 15&ndash;20%, you can wait another year or two. A good technician will measure and tell you honestly.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>6</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Maintain your system between pumpings</h4>
                <p className='text-slate-600 text-xs'>Using septic-safe products, avoiding garbage disposals, fixing leaky fixtures, and spreading laundry loads across the week all reduce the rate of solid accumulation, extending the time between pumpings.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8 - Insurance */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Insurance</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Does Insurance Cover Septic Pumping?</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>No. Routine septic tank pumping is considered maintenance, and no homeowners insurance policy covers it. It&apos;s your responsibility as the system owner &mdash; the same way changing your furnace filter or cleaning your gutters is your responsibility.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>Insurance can cover <em>damage caused by</em> a septic failure (like sewage backing up into your house) in certain circumstances, but it does not cover the maintenance that would have prevented the failure. Some policies require a water backup endorsement to cover any septic-related damage at all.</p>
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
              <dt className='font-bold text-slate-900 text-sm'>Septage</dt>
              <dd className='text-slate-600 text-xs'>The combined mixture of sludge, scum, and liquid waste removed when pumping. Must be transported and disposed of at a licensed treatment facility.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Sludge</dt>
              <dd className='text-slate-600 text-xs'>The layer of heavy solid waste that settles to the bottom of the septic tank. The primary material removed during pumping.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Scum</dt>
              <dd className='text-slate-600 text-xs'>The layer of oils, grease, and lightweight solids that floats on top of the wastewater inside the tank. Also removed during pumping.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Effluent</dt>
              <dd className='text-slate-600 text-xs'>The partially clarified liquid between the sludge and scum layers. After pumping, this is the first thing to refill the tank from normal household use.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Baffle</dt>
              <dd className='text-slate-600 text-xs'>A T-shaped fitting at the inlet and outlet of the septic tank that prevents scum and sludge from leaving the tank. Should be inspected during every pumping visit.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Effluent Filter</dt>
              <dd className='text-slate-600 text-xs'>A screen installed at the tank outlet that catches suspended solids before they reach the drainfield. Needs cleaning or replacement during pumping.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Riser</dt>
              <dd className='text-slate-600 text-xs'>A vertical pipe from the septic tank lid to ground level. Eliminates the need to dig for pumping and inspection access.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Hydro-jetting</dt>
              <dd className='text-slate-600 text-xs'>A cleaning method using high-pressure water to break up compacted sludge inside the tank. Used when standard pumping cannot remove hardened material.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Distribution Box (D-box)</dt>
              <dd className='text-slate-600 text-xs'>A small underground box that receives effluent from the septic tank and divides it equally among the drainfield pipes.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Drainfield (Leach Field)</dt>
              <dd className='text-slate-600 text-xs'>The network of perforated pipes in gravel-filled trenches where effluent is filtered through soil. Drainfield failure from skipped pumping is the most expensive septic repair.</dd>
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
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How much does it cost to pump a septic tank?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>The national average is $300 to $600 for a standard residential tank (1,000 to 1,500 gallons). Your actual cost depends on tank size, location, accessibility, and whether the company charges separately for disposal. Always get a fully inclusive quote.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How often should I pump my septic tank?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Every three to five years for a typical household. Larger families or homes with garbage disposals may need pumping every two to three years. A professional can give you a personalized schedule based on your actual sludge levels.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What happens if I don&apos;t pump my septic tank?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Sludge and scum accumulate until they overflow into the drainfield, clogging the pipes and soil. This leads to sewage backup or surfacing in your yard. Once the drainfield is clogged with solids, it cannot be unclogged &mdash; you&apos;ll need a replacement costing $5,000 to $30,000.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Is septic tank pumping the same as cleaning?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Not exactly. Pumping removes liquids, sludge, and floating scum. Cleaning goes further with hydro-jetting to remove compacted material. Most routine services are pumping only. Cleaning is recommended for neglected tanks and adds $200 to $300.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>When is the best time of year to pump?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Fall and late summer are ideal. The ground is accessible, the water table is lower, and companies are less booked than in spring. Avoid pumping during or immediately after heavy rain &mdash; an empty tank in saturated soil can float out of the ground.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Should I pump before selling my house?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>In many states, yes. Over 30 states require a septic inspection before a home sale. Even if not required, a recent pumping receipt and clean inspection report strengthens your negotiating position and prevents buyers from requesting repair credits.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Does homeowners insurance cover septic pumping?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>No. Routine pumping is maintenance and is never covered by homeowners insurance. Some policies cover damage caused by a septic failure, but not the maintenance that would have prevented it.</div>
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
            <Link href='/cost-guides' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>All Septic Cost Guides</h3>
              <p className='text-slate-600 text-xs'>Installation, repair, inspection, and drainfield replacement costs.</p>
            </Link>
            <Link href='/problems' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Common Septic Problems</h3>
              <p className='text-slate-600 text-xs'>Diagnose and fix the most common septic issues.</p>
            </Link>
            <Link href='/guides/find-your-septic-tank' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>How to Find Your Septic Tank</h3>
              <p className='text-slate-600 text-xs'>Step-by-step guide to locating your tank before the pumper arrives.</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className='bg-slate-900 rounded-2xl p-8 md:p-10 text-center'>
          <h2 className='text-xl md:text-2xl font-bold text-white mb-3'>Ready to Get Your Tank Pumped?</h2>
          <p className='text-slate-300 mb-6 max-w-xl mx-auto text-sm'>Connect with licensed septic professionals in your area. Get free, no-obligation quotes and compare prices before you commit.</p>
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
