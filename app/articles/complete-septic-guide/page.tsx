import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Complete Guide to Septic Systems: How They Work, Types & What Every Homeowner Needs to Know (2026) | The Septic Guide',
  description: 'Over 21 million homes in the US rely on septic systems. Learn how they work, the different types, maintenance schedules, costs, and warning signs of failure.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does a septic system work in simple terms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wastewater from your house flows into a buried tank where solids settle to the bottom and grease floats to the top. Bacteria break down some of the solids. The clarified liquid in the middle flows out to a drainfield, a network of pipes in gravel trenches buried in your yard. As the liquid filters through the soil, natural microorganisms remove harmful bacteria and contaminants.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should a septic tank be pumped?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every three to five years for a typical household, according to the EPA. The exact timing depends on tank size, household size, water usage, and whether you use a garbage disposal.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the signs of a failing septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common warning signs are slow drains throughout the house, sewage backing up into drains, foul odors in the yard near the tank or drainfield, standing water or soggy soil over the drainfield, unusually lush green grass over the drainfield, and gurgling sounds in the plumbing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a septic system last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well-maintained conventional system typically lasts 25 to 30 years. Concrete tanks can last 40 years. The drainfield usually fails before the tank. Regular pumping, responsible use, and annual inspections are the biggest factors in extending your system lifespan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you have a garbage disposal with a septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but it is not ideal. Garbage disposals significantly increase the amount of solids entering the tank, which means more frequent pumping and faster sludge accumulation. Many septic professionals recommend avoiding garbage disposals entirely or using them sparingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do septic additives work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EPA does not recommend septic additives, and most septic professionals agree. A properly maintained septic system has all the bacteria it needs to function. Additives that claim to eliminate the need for pumping can actually harm your system by breaking up the sludge layer, causing solids to flow into the drainfield and clog it.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to Septic Systems: How They Work, Types, and What Every Homeowner Needs to Know',
  description: 'Over 21 million homes in the US rely on septic systems. Learn how they work, the different types, maintenance schedules, costs, and warning signs of failure.',
  image: 'https://theseptic.guide/septic1.jpg',
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

export default function CompleteSepticGuideArticle() {
  return (
    <div>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image src='/septic1.jpg' alt='Residential septic system diagram showing tank and drainfield' fill className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100' priority />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-amber-700'></div>
            <span className='text-amber-500 font-bold tracking-[0.3em] text-sm uppercase'>Complete Guide</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            The Complete Guide<br />to Septic Systems<br />
            <span className='text-amber-500'>2026 Edition</span>
          </h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            How they work, the different types, maintenance schedules, warning signs, and what everything costs. The resource we wish existed when we started.
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
        <p className='text-base text-slate-700 leading-relaxed mb-6'>
          Over 21 million homes in the United States rely on septic systems to treat their wastewater. If yours is one of them, your septic system is quietly doing one of the most important jobs on your property. Every flush, every shower, every load of laundry flows into a system buried in your yard that you probably never think about &mdash; until something goes wrong.
        </p>
        <p className='text-base text-slate-700 leading-relaxed mb-12'>
          This guide is the resource we wish existed when we started learning about septic systems. No contractor sales pitch, no government jargon. Just a clear, honest explanation of how your system works, what can go wrong, what maintenance actually matters, and how much things cost when they need fixing.
        </p>

        {/* Section 1 - How Does a Septic System Work */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>How It Works</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How Does a Septic System Work?</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>A septic system does the same job as a municipal sewer treatment plant, just on a smaller scale, right in your yard. It collects all the wastewater from your home, separates solids from liquids, breaks down organic waste using naturally occurring bacteria, and returns treated water to the soil. The process happens in three stages across three main components.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3 mt-8'>Stage 1: Collection &mdash; The Septic Tank</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>Every drain in your house connects to a single main sewer line that slopes downhill to your septic tank. The tank is a buried, watertight container usually made of concrete, fiberglass, or polyethylene. Most residential tanks hold between 1,000 and 1,500 gallons.</p>
          <p className='text-slate-700 leading-relaxed mb-4'>Inside the tank, wastewater naturally separates into three layers: heavy solids sink to the bottom forming <strong>sludge</strong>, oils and grease float to the top forming <strong>scum</strong>, and between them sits <strong>effluent</strong> &mdash; partially clarified liquid.</p>
          <p className='text-slate-700 leading-relaxed mb-4'>Anaerobic bacteria go to work in the tank, breaking down a portion of the solid waste. This reduces the volume of sludge over time, but it cannot eliminate it entirely. That is why the tank needs to be <Link href='/cost-guides' className='text-amber-700 underline hover:text-amber-800'>pumped periodically</Link>.</p>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg my-6'>
            <p className='text-slate-700 font-medium'>Most modern septic tanks have two compartments separated by a wall with an opening. This two-chamber design significantly improves the quality of the effluent that reaches your drainfield.</p>
          </div>

          <h3 className='text-xl font-bold text-slate-900 mb-3 mt-8'>Stage 2: Distribution</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>The clarified effluent exits the tank and flows into a distribution box (D-box). This small component divides the effluent equally among the drainfield pipes. In some systems, a pump chamber replaces the gravity-fed distribution box.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3 mt-8'>Stage 3: Treatment &mdash; The Drainfield</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>The drainfield (also called a leach field) is where the real treatment happens. It is a network of perforated pipes laid in gravel-filled trenches, typically 18 to 36 inches below the surface. The effluent trickles out, filters through the gravel, and percolates into the surrounding soil where microorganisms remove harmful bacteria, viruses, and excess nutrients.</p>
          <div className='bg-amber-50 border border-amber-200 rounded-lg p-5 my-6'>
            <p className='text-amber-900 font-semibold mb-1'>Key Point</p>
            <p className='text-amber-800 text-sm'>A healthy drainfield needs unsaturated soil to work. If the soil becomes waterlogged, it cannot filter the effluent properly. This is why drainfield failure is the most common and most expensive <Link href='/problems' className='text-amber-700 underline hover:text-amber-800'>septic system problem</Link>.</p>
          </div>
        </div>

        {/* Section 2 - Types of Septic Systems */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>System Types</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>What Are the Different Types of Septic Systems?</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>Not every property can support a conventional gravity-fed septic system. Soil conditions, lot size, water table depth, and local regulations all influence which type of system is appropriate.</p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Conventional System (Gravity-Fed)</h3>
              <p className='text-slate-700 text-sm mb-2'>The most common type. Wastewater flows by gravity from the house to the tank, and from the tank to the drainfield. Simplest, least expensive, and easiest to maintain.</p>
              <p className='text-amber-700 font-semibold text-sm'>Installation: $3,000 &ndash; $8,000</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Chamber System</h3>
              <p className='text-slate-700 text-sm'>Uses connected, open-bottomed plastic chambers instead of gravel-filled trenches. Popular in areas with high water tables or where gravel is expensive.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Mound System</h3>
              <p className='text-slate-700 text-sm mb-2'>Effluent is pumped to a sand mound built above the natural soil surface when natural soil is too shallow or the water table is too high.</p>
              <p className='text-amber-700 font-semibold text-sm'>Installation: $10,000 &ndash; $20,000</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Aerobic Treatment Unit (ATU)</h3>
              <p className='text-slate-700 text-sm mb-2'>Injects oxygen into the treatment tank, supporting aerobic bacteria that break down waste much more efficiently. Common on smaller lots or properties with poor soil.</p>
              <p className='text-amber-700 font-semibold text-sm'>Installation: $10,000 &ndash; $20,000</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Sand Filter System</h3>
              <p className='text-slate-700 text-sm'>Effluent is pumped through a lined box filled with sand before being distributed to the drainfield, providing an extra layer of biological treatment.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Drip Distribution System</h3>
              <p className='text-slate-700 text-sm'>Uses drip irrigation tubing at shallow depth to distribute effluent. Works on sites where traditional drainfields will not fit but requires a pump, timer, and filter.</p>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed mt-6 text-sm'>For a head-to-head breakdown, see our guide on <Link href='/comparisons' className='text-amber-700 underline hover:text-amber-800'>conventional vs alternative septic systems</Link>.</p>
        </div>

        {/* Section 3 - Maintenance */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Maintenance</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How Often Does a Septic System Need Maintenance?</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>The most important maintenance task is having the tank pumped to remove accumulated sludge and scum. The <a href='https://www.epa.gov/septic/how-care-your-septic-system' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline hover:text-amber-800'>EPA recommends pumping every three to five years</a> for a typical household.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3 mt-8'>Pumping Schedule by Tank Size</h3>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-semibold'>Tank Size</th>
                  <th className='p-2 text-center font-semibold'>2 People</th>
                  <th className='p-2 text-center font-semibold'>3 People</th>
                  <th className='p-2 text-center font-semibold'>4 People</th>
                  <th className='p-2 text-center font-semibold'>5 People</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 font-semibold text-slate-900'>1,000 gal</td>
                  <td className='p-2 text-center text-slate-700'>Every 5.5 yrs</td>
                  <td className='p-2 text-center text-slate-700'>Every 3.5 yrs</td>
                  <td className='p-2 text-center text-slate-700'>Every 2.5 yrs</td>
                  <td className='p-2 text-center text-slate-700'>Every 2 yrs</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-2 font-semibold text-slate-900'>1,250 gal</td>
                  <td className='p-2 text-center text-slate-700'>Every 7 yrs</td>
                  <td className='p-2 text-center text-slate-700'>Every 4.5 yrs</td>
                  <td className='p-2 text-center text-slate-700'>Every 3 yrs</td>
                  <td className='p-2 text-center text-slate-700'>Every 2.5 yrs</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-2 font-semibold text-slate-900'>1,500 gal</td>
                  <td className='p-2 text-center text-slate-700'>Every 9 yrs</td>
                  <td className='p-2 text-center text-slate-700'>Every 5.5 yrs</td>
                  <td className='p-2 text-center text-slate-700'>Every 3.5 yrs</td>
                  <td className='p-2 text-center text-slate-700'>Every 3 yrs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Pumping costs typically run <strong>$300 to $600</strong>. Annual inspections ($100 to $300) are also recommended and can catch problems early.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3 mt-8'>Be Cautious With</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Some products are not outright harmful but can stress your system if overused:</p>
          <ul className='space-y-2 text-slate-700 text-sm mb-6 ml-4'>
            <li>&bull; Garbage disposal waste &mdash; increases solids significantly</li>
            <li>&bull; Antibacterial soaps and cleaners &mdash; can reduce beneficial bacteria</li>
            <li>&bull; Large volumes of laundry in a single day &mdash; can overwhelm the drainfield</li>
            <li>&bull; Water softener backwash &mdash; excess salt and water can disrupt tank bacteria</li>
          </ul>
        </div>

        {/* Section 4 - What Not to Flush */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Protection</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>What Should You Never Put in a Septic System?</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Your septic system relies on a living colony of bacteria to break down waste. Anything that kills those bacteria or introduces materials they cannot digest will shorten your system life.</p>
          <div className='grid md:grid-cols-2 gap-4 my-6'>
            <div className='bg-red-50 border border-red-200 rounded-lg p-5'>
              <p className='text-red-900 font-bold mb-2 text-sm'>Never Flush</p>
              <ul className='space-y-1 text-red-800 text-xs'>
                <li>&#10005; Wet wipes (even &ldquo;flushable&rdquo; ones)</li>
                <li>&#10005; Paper towels or feminine products</li>
                <li>&#10005; Condoms, dental floss, cat litter</li>
                <li>&#10005; Diapers, cigarette butts</li>
                <li>&#10005; Coffee grounds or medications</li>
              </ul>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-lg p-5'>
              <p className='text-red-900 font-bold mb-2 text-sm'>Never Pour Down Drains</p>
              <ul className='space-y-1 text-red-800 text-xs'>
                <li>&#10005; Cooking oil or grease</li>
                <li>&#10005; Paint or paint thinners</li>
                <li>&#10005; Chemical drain cleaners</li>
                <li>&#10005; Solvents, motor oil, pesticides</li>
                <li>&#10005; Large amounts of bleach or antibacterial products</li>
              </ul>
            </div>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg my-6'>
            <p className='text-slate-700 font-medium text-sm'>The simplest rule: if it is not human waste or toilet paper, do not flush it. And if it would kill bacteria in a petri dish, do not pour it down the drain.</p>
          </div>
        </div>

        {/* Section 5 - Warning Signs */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Warning Signs</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Signs Your Septic System Has a Problem</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Catching problems early can mean the difference between a $300 pump-out and a $15,000 drainfield replacement.</p>
          <div className='space-y-3'>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5'>1</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Slow drains throughout the house</h4>
                <p className='text-slate-600 text-xs'>Not just one fixture &mdash; often indicates a full tank or developing blockage.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5'>2</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Sewage backup into lowest drains</h4>
                <p className='text-slate-600 text-xs'>Sign the tank is full or there is a blockage in the inlet line. Requires immediate attention.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5'>3</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Foul odor near the tank or drainfield</h4>
                <p className='text-slate-600 text-xs'>Means effluent is surfacing or gases are not being properly contained.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5'>4</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Standing water or soggy soil over the drainfield</h4>
                <p className='text-slate-600 text-xs'>Strong indicator that the drainfield is failing and the soil can no longer absorb effluent.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5'>5</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Unusually green or lush grass over the drainfield</h4>
                <p className='text-slate-600 text-xs'>Indicates effluent is reaching the surface and fertilizing the grass. This is not a good sign.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5'>6</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Gurgling sounds in the plumbing</h4>
                <p className='text-slate-600 text-xs'>Can indicate a full tank or venting issues, especially after flushing or running water.</p>
              </div>
            </div>
          </div>
          <div className='bg-amber-50 border border-amber-200 rounded-lg p-5 mt-6'>
            <p className='text-amber-900 font-semibold mb-1 text-sm'>Do Not Wait</p>
            <p className='text-amber-800 text-xs'>If you notice any of these signs, a professional <Link href='/septic-services' className='text-amber-700 underline hover:text-amber-800'>septic inspection</Link> can diagnose the issue before a small problem becomes a catastrophic failure.</p>
          </div>
        </div>

        {/* Section 6 - Costs */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Costs</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How Much Does a Septic System Cost?</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Costs vary widely based on the type of system, local labor rates, soil conditions, and permit requirements. Here are typical ranges.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-semibold'>Item</th>
                  <th className='p-2 text-right font-semibold'>Typical Cost Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Routine pumping</td><td className='p-2 text-right text-slate-700'>$300 &ndash; $600</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Annual inspection</td><td className='p-2 text-right text-slate-700'>$100 &ndash; $300</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Conventional system installation</td><td className='p-2 text-right text-slate-700'>$3,000 &ndash; $8,000</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Mound system installation</td><td className='p-2 text-right text-slate-700'>$10,000 &ndash; $20,000</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Aerobic system installation</td><td className='p-2 text-right text-slate-700'>$10,000 &ndash; $20,000</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Septic tank replacement</td><td className='p-2 text-right text-slate-700'>$3,000 &ndash; $7,000</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Drainfield replacement</td><td className='p-2 text-right text-slate-700'>$5,000 &ndash; $15,000</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Minor repairs (pump, filter, baffle)</td><td className='p-2 text-right text-slate-700'>$200 &ndash; $1,500</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm'>For detailed breakdowns, see our individual <Link href='/cost-guides' className='text-amber-700 underline hover:text-amber-800'>cost guides</Link>.</p>
        </div>

        {/* Section 7 - System Lifespan */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Lifespan</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How Long Does a Septic System Last?</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>A well-maintained conventional septic system can last <strong>25 to 30 years</strong> or longer. Concrete tanks often last 40 years. The drainfield is typically the component with the shorter lifespan.</p>
          <div className='grid md:grid-cols-2 gap-4 my-6'>
            <div className='bg-red-50 border border-red-200 rounded-lg p-5'>
              <p className='text-red-900 font-bold mb-2 text-sm'>Shortens System Life</p>
              <ul className='space-y-1 text-red-800 text-xs'>
                <li>&#10005; Skipping regular pumping</li>
                <li>&#10005; Flushing inappropriate materials</li>
                <li>&#10005; Excessive water use</li>
                <li>&#10005; Driving vehicles over drainfield</li>
                <li>&#10005; Planting trees near drainfield</li>
              </ul>
            </div>
            <div className='bg-green-50 border border-green-200 rounded-lg p-5'>
              <p className='text-green-900 font-bold mb-2 text-sm'>Extends System Life</p>
              <ul className='space-y-1 text-green-800 text-xs'>
                <li>&#10003; Pumping on schedule</li>
                <li>&#10003; Annual inspections</li>
                <li>&#10003; Efficient water use</li>
                <li>&#10003; Keeping drainfield clear</li>
                <li>&#10003; Diverting surface water away</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 8 - Glossary */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>GLOSSARY</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Septic System Glossary</h2>
          <div className='grid md:grid-cols-2 gap-x-8 gap-y-3'>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Effluent</dt>
              <dd className='text-slate-600 text-xs'>The partially treated liquid that flows out of the septic tank and into the drainfield.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Sludge</dt>
              <dd className='text-slate-600 text-xs'>The layer of solid waste that settles at the bottom of the septic tank over time.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Scum</dt>
              <dd className='text-slate-600 text-xs'>The layer of fats, oils, and grease that floats on top of the wastewater in the tank.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Drainfield (Leach Field)</dt>
              <dd className='text-slate-600 text-xs'>A network of perforated pipes in gravel trenches where effluent is filtered through soil for final treatment.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Distribution Box (D-Box)</dt>
              <dd className='text-slate-600 text-xs'>A small box that evenly distributes effluent from the tank to the drainfield lines.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Anaerobic Bacteria</dt>
              <dd className='text-slate-600 text-xs'>Bacteria that break down waste without oxygen, found inside the septic tank.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Aerobic Bacteria</dt>
              <dd className='text-slate-600 text-xs'>Bacteria that require oxygen to function, used in aerobic treatment units (ATUs) for enhanced waste breakdown.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Perc Test (Percolation Test)</dt>
              <dd className='text-slate-600 text-xs'>A soil test that measures how quickly water drains, used to determine if a site is suitable for a septic drainfield.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Baffle</dt>
              <dd className='text-slate-600 text-xs'>A device inside the septic tank that directs wastewater flow and prevents solids or scum from exiting the tank.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Riser</dt>
              <dd className='text-slate-600 text-xs'>A vertical pipe extending from the septic tank lid to ground level for easy access during inspections and pumping.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Greywater</dt>
              <dd className='text-slate-600 text-xs'>Wastewater from sinks, showers, and laundry &mdash; everything except toilet waste.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Blackwater</dt>
              <dd className='text-slate-600 text-xs'>Wastewater from toilets containing human waste and pathogens.</dd>
            </div>
          </div>
        </div>

        {/* Section 9 - FAQ */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>FAQ</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-3'>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How does a septic system work in simple terms?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Wastewater from your house flows into a buried tank where solids settle to the bottom and grease floats to the top. Bacteria break down some of the solids. The clarified liquid flows out to a drainfield &mdash; a network of pipes in gravel trenches. As the liquid filters through the soil, natural microorganisms remove harmful bacteria and contaminants.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How often should a septic tank be pumped?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Every three to five years for a typical household. The exact timing depends on tank size, household size, water usage, and whether you use a garbage disposal.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What are the signs of a failing septic system?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Slow drains throughout the house, sewage backing up into drains, foul odors near the tank or drainfield, standing water or soggy soil over the drainfield, unusually lush grass over the drainfield, and gurgling sounds in the plumbing.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How long does a septic system last?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A well-maintained conventional system typically lasts 25 to 30 years. Concrete tanks can last 40 years. Regular pumping, responsible use, and annual inspections are the biggest factors.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Can you have a garbage disposal with a septic system?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Yes, but it is not ideal. Garbage disposals significantly increase solids in the tank, meaning more frequent pumping. Many professionals recommend avoiding them or using them sparingly.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Do septic additives work?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>The EPA does not recommend septic additives. A properly maintained system has all the bacteria it needs. Additives can actually harm your system by breaking up the sludge layer, causing solids to clog the drainfield.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What is the difference between a septic tank and a sewer system?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A septic system treats wastewater on your property using a buried tank and drainfield &mdash; you own and maintain it. A municipal sewer collects wastewater from many homes and treats it at a centralized plant, and you pay a sewer fee.</div>
            </details>
          </div>
        </div>

        {/* Related Guides */}
        <div className='mb-16'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <Link href='/maintenance' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Maintenance Guide</h3>
              <p className='text-slate-600 text-xs'>Essential tips for keeping your system running smoothly.</p>
            </Link>
            <Link href='/cost-guides' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Cost Guides</h3>
              <p className='text-slate-600 text-xs'>Detailed cost breakdowns for pumping, installation, and repairs.</p>
            </Link>
            <Link href='/problems' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Common Septic Problems</h3>
              <p className='text-slate-600 text-xs'>Troubleshooting guide for the most common septic issues.</p>
            </Link>
            <Link href='/comparisons' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>System Comparisons</h3>
              <p className='text-slate-600 text-xs'>Side-by-side comparisons of septic system types.</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className='bg-slate-900 rounded-2xl p-8 md:p-10 text-center'>
          <h2 className='text-xl md:text-2xl font-bold text-white mb-3'>Get Expert Help With Your Septic System</h2>
          <p className='text-slate-300 mb-6 max-w-xl mx-auto text-sm'>Connect with qualified septic professionals in your area. Free estimates, no obligation.</p>
          <Link href='/get-quote' className='inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-sm'>Get Free Quotes</Link>
        </div>
      </article>
    </div>
  )
}
