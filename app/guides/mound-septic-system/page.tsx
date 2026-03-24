import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Mound Septic Systems: How They Work, When You Need One | The Septic Guide',
  description: 'A mound septic system is required when soil depth, water table, or bedrock prevents a conventional drainfield. Here is how they work, what they cost to maintain, and how long they last.',
  openGraph: {
    title: 'Mound Septic Systems: How They Work, When You Need One',
    description: 'A mound septic system is required when soil depth, water table, or bedrock prevents a conventional drainfield. Here is how they work, what they cost to maintain, and how long they last.',
    url: 'https://theseptic.guide/guides/mound-septic-system',
    siteName: 'The Septic Guide',
    type: 'article',
    images: [{ url: 'https://theseptic.guide/moundsystem.jpg', width: 1200, height: 630, alt: 'Mound septic system guide' }],
  },
  alternates: { canonical: 'https://theseptic.guide/guides/mound-septic-system' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mound Septic Systems: How They Work, When You Need One, and How to Maintain It',
  description: 'A mound septic system is required when soil depth, water table, or bedrock prevents a conventional drainfield. Here is how they work, what they cost to maintain, and how long they last.',
  image: 'https://theseptic.guide/moundsystem.jpg',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  author: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
  publisher: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    url: 'https://theseptic.guide',
    logo: { '@type': 'ImageObject', url: 'https://theseptic.guide/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://theseptic.guide/guides/mound-septic-system' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a mound septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mound septic system is an engineered on-site wastewater treatment system in which the drainfield is built above the ground surface in a raised bed of imported sand rather than in underground trenches. It is required on properties where the native soil is too shallow, where the seasonal water table is too high, or where bedrock is too close to the surface to allow a conventional drainfield to treat effluent safely before it reaches groundwater. Effluent is pumped from a dosing chamber to the elevated sand bed in timed doses, where it percolates through the sand and is treated before reaching the native soil beneath.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why would I need a mound system instead of a conventional septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You need a mound system when your property's soil conditions prevent a conventional drainfield from functioning safely. The three most common reasons are: the soil above a restrictive layer (hardpan clay, bedrock, or dense gravel) is too shallow to provide adequate treatment depth, the seasonal high water table rises too close to the surface to maintain the required separation from a conventional drainfield, or the native soil fails the percolation test because it drains too slowly to treat effluent adequately. A licensed soil evaluator assesses these conditions during a site evaluation before any permit is issued.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a mound septic system cost to install?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mound septic system costs $10,000 to $20,000 installed for a typical residential property, compared to $3,000 to $8,000 for a conventional gravity-fed system. The higher cost reflects the imported sand and gravel required to build the bed, the pump and electrical components needed to deliver effluent to the elevated bed, the engineering required to design the system for the specific site conditions, and the additional labor for constructing an above-grade structure rather than digging below-grade trenches. See our septic system installation cost guide at https://theseptic.guide/cost-guides/septic-system-installation-cost for a full component-by-component breakdown.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often does a mound system need to be pumped?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The septic tank upstream of a mound system should be pumped every 3 to 5 years on the same schedule as any conventional septic tank, adjusted for household size and tank capacity. The pump tank (dosing chamber) should be inspected at each pump-out visit. Failing to pump on schedule allows solids to accumulate and eventually escape into the pump tank and distribution pipes, clogging the mound bed and requiring expensive repairs. See our how often to pump guide at https://theseptic.guide/articles/how-often-pump-septic-tank for the schedule by tank size and household size.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a mound septic system last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A well-maintained mound system lasts 25 to 40 years, comparable to a conventional drainfield. The sand bed has an indefinite functional life if the system is maintained properly and not hydraulically overloaded. The effluent pump typically needs replacement every 7 to 15 years at a cost of $500 to $1,300 including installation. Float switches and alarm components should be tested annually and replaced as needed. The overall system lifespan is most affected by pumping schedule adherence and water use management rather than by any inherent limitation of the mound design.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I build a mound system myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Mound septic systems require a site evaluation and percolation test by a licensed soil evaluator, a system design by a licensed engineer or designer, a permit from the local health department, and installation by a licensed septic contractor. The sand specification, bed dimensions, pipe layout, dosing schedule, and pump sizing are all engineered to the specific site conditions and are not variables that can be estimated or approximated. An improperly designed or installed mound system will fail to treat effluent adequately, which is both a public health risk and a code violation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the maintenance costs for a mound system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Annual and ongoing maintenance costs for a mound system include: septic tank pump-out every 3 to 5 years ($300 to $600), annual pump and alarm inspection ($150 to $300 from a licensed septic service company), pump replacement every 7 to 15 years ($500 to $1,300), and float switch or control panel replacement as needed ($100 to $400). Total annual maintenance cost averages $200 to $400 per year over the system's life, compared to $75 to $150 per year for a conventional gravity-fed system. The higher ongoing cost reflects the pump and electrical components that a gravity system does not have.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the pump fails in a mound system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the effluent pump fails, the high-water alarm in the pump tank should activate, alerting the homeowner that the system is not functioning. The pump tank will continue filling with incoming effluent from the house while the pump is inoperative. Reduce household water use immediately to slow the rate of filling and call a septic professional. Most pump failures are resolved by replacing the pump at a cost of $500 to $1,300. A pump tank that overflows because the alarm was ignored or the pump was not replaced promptly can result in effluent surfacing in the yard, which is a health hazard and a code violation.',
      },
    },
  ],
}

export default function MoundSepticSystemGuide() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

              <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: 'Mound Septic System Guide' }]} />
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image src='/moundsystem.jpg' alt='Mound septic system guide' fill className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100' priority />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-amber-700'></div>
            <span className='text-amber-500 font-bold tracking-[0.3em] text-sm uppercase'>Guide</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Mound Septic Systems:<br />
            <span className='text-amber-500'>How They Work, When You Need One</span>
          </h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            A mound septic system is required when soil depth, water table, or bedrock prevents a conventional drainfield. Here is how they work, what they cost to maintain, and how long they last.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm'>SG</div>
            <div>
              <p className='text-white font-semibold'>The Septic Guide</p>
              <p className='text-slate-400 text-sm'>Updated Mar 2026 &middot; 20 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* Entity Definition + Intro */}
        <div className='mb-12'>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>A <strong>mound septic system</strong> is an engineered on-site wastewater treatment system in which the drainfield is constructed above the natural ground surface in a raised bed of imported sand rather than being buried in native soil. It is required when the native soil is too shallow, too close to a seasonal high water table, or too close to bedrock to safely treat septic effluent before it reaches groundwater. The mound replaces the underground trench drainfield of a conventional system with an elevated bed that provides the soil depth the property&rsquo;s natural conditions cannot.</p>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>Mound systems are more expensive to install than conventional systems, require a pump to deliver effluent to the elevated bed, and need more ongoing attention than a gravity-fed system. But on properties where the soil fails a percolation test or where the water table is too high for a conventional drainfield, a mound system is often the only permitted option outside of an <Link href='/comparisons/aerobic-vs-anaerobic-septic-systems' className='text-amber-700 underline hover:text-amber-800'>aerobic treatment unit</Link>.</p>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>For full installation pricing by system type, see our <Link href='/cost-guides/septic-system-installation-cost' className='text-amber-700 underline hover:text-amber-800'>septic system installation cost guide</Link>.</p>
        </div>

        {/* When Is a Mound System Required? */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Site Conditions</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>When Is a Mound System Required?</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>A mound system is required when at least one of three site conditions prevents a conventional gravity-fed drainfield from functioning safely.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Shallow soil depth above a restrictive layer</h3>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Conventional drainfields require a minimum depth of usable soil between the bottom of the distribution pipes and any restrictive layer below, typically 24 to 36 inches depending on state regulations. A restrictive layer is any material that prevents or significantly slows the downward movement of effluent: hardpan clay, fractured bedrock, dense gravel that drains too fast, or solid bedrock. Properties in rocky terrain, glaciated regions, or areas with heavy clay subsoil commonly encounter this condition.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>High seasonal water table</h3>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>The soil between the drainfield trenches and the water table is what treats effluent before it reaches groundwater. Most regulations require a minimum separation distance of 12 to 36 inches between the bottom of the drainfield and the seasonal high water table. On properties near rivers, lakes, wetlands, or in low-lying areas where the water table rises significantly in wet seasons, this separation cannot be achieved at grade. The mound raises the drainfield above grade so the required separation distance exists within the imported sand bed rather than in native soil that does not provide it.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Failed percolation test</h3>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>A soil that percolates too slowly (water moves through it at more than 60 minutes per inch in most jurisdictions) does not treat effluent adequately. Native clay-heavy soils, compacted subsoils, and certain glacial till types commonly fail the perc test. A mound system uses carefully graded imported sand with a known percolation rate to provide the treatment that the native soil cannot.</p>

          <div className='bg-amber-50 border border-amber-200 rounded-lg p-4'>
            <p className='text-slate-700 text-sm'><strong>Not every property that needs a mound system has all three conditions.</strong> One is enough for a mound to be required.</p>
          </div>
        </div>

        {/* How a Mound System Works */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>How It Works</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How a Mound System Works</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>The process is the same as a conventional septic system through the tank stage. All household wastewater flows to the septic tank, where solids settle to the bottom, grease floats to the top, and the liquid effluent in the middle is discharged for treatment. The difference begins at the point where a conventional system sends effluent by gravity to underground trenches.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>The pump tank</h3>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Effluent from the septic tank flows into a second buried chamber called the pump tank or dosing chamber. A submersible pump in the pump tank delivers effluent to the mound in measured doses controlled by a timer or float switches. The pump is necessary because the mound is elevated above grade and effluent cannot reach it by gravity.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>The mound bed</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The mound itself is a rectangular raised structure built on the ground surface. It consists of several distinct layers, from the bottom up:</p>
          <ul className='list-disc pl-6 text-slate-700 text-sm space-y-2 mb-6'>
            <li>A base of native soil or a thin sand interface layer that transitions from the natural ground surface into the imported fill</li>
            <li>A main body of clean, coarse sand imported to the site, typically 18 to 36 inches deep, which provides the treatment zone where biological and physical filtration of the effluent occurs</li>
            <li>A layer of gravel in the upper portion of the sand bed, surrounding the perforated distribution pipes</li>
            <li>The distribution pipes themselves, which receive pressurized effluent from the pump and distribute it evenly across the entire bed</li>
            <li>A layer of topsoil over the gravel and pipes to support vegetation and protect the bed from erosion and temperature extremes</li>
          </ul>

          {/* Embedded image */}
          <div className='my-8 rounded-xl overflow-hidden'>
            <Image src='/moundsystem.jpg' alt='Cross-section view of a mound septic system showing the sand bed, distribution pipes, and gravel layers' width={900} height={500} className='w-full h-auto' />
            <p className='text-xs text-slate-500 mt-2 italic'>A mound septic system uses a raised sand bed to treat effluent when native soil conditions are inadequate for a conventional drainfield.</p>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Treatment process</h3>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>As effluent percolates down through the gravel and sand, aerobic bacteria in the upper soil layers break down pathogens and organic material. By the time effluent reaches the native soil beneath the mound, it has been treated to a level safe for final dispersal. The treatment is more reliable than a conventional drainfield in marginal soil because the imported sand is specified to a known particle size and percolation rate, rather than relying on whatever native soil happens to be present.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Dosing</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Unlike a conventional system where effluent flows continuously by gravity, a mound system receives effluent in timed doses. The pump runs for a set period (typically 15 to 30 minutes) several times per day, distributing a controlled volume of effluent across the entire bed with each dose. This dosing pattern prevents any single area of the bed from being overloaded while allowing the rest of the bed to drain and rest between doses. The rest periods are critical to maintaining treatment capacity and preventing biomat accumulation.</p>
        </div>

        {/* Components Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Components</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Mound System Components</h2>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border border-slate-200 rounded-lg overflow-hidden'>
              <thead>
                <tr className='bg-slate-50'>
                  <th className='text-left p-3 font-bold text-slate-900 border-b border-slate-200'>Component</th>
                  <th className='text-left p-3 font-bold text-slate-900 border-b border-slate-200'>Function</th>
                  <th className='text-left p-3 font-bold text-slate-900 border-b border-slate-200'>Typical Lifespan</th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                <tr className='border-b border-slate-100'>
                  <td className='p-3 font-medium'>Septic tank</td>
                  <td className='p-3'>Primary treatment, solids separation</td>
                  <td className='p-3'>30 to 50 years</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50/50'>
                  <td className='p-3 font-medium'>Pump tank / dosing chamber</td>
                  <td className='p-3'>Stores effluent between doses, houses the pump</td>
                  <td className='p-3'>20 to 40 years</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='p-3 font-medium'>Effluent pump</td>
                  <td className='p-3'>Delivers effluent to the mound under pressure</td>
                  <td className='p-3'>7 to 15 years</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50/50'>
                  <td className='p-3 font-medium'>Float switches / timer controls</td>
                  <td className='p-3'>Control pump operation and dosing cycle</td>
                  <td className='p-3'>5 to 15 years</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='p-3 font-medium'>Distribution pipes</td>
                  <td className='p-3'>Disperse effluent across the mound bed</td>
                  <td className='p-3'>20 to 30 years</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50/50'>
                  <td className='p-3 font-medium'>Imported sand bed</td>
                  <td className='p-3'>Primary treatment zone</td>
                  <td className='p-3'>Indefinite if maintained</td>
                </tr>
                <tr>
                  <td className='p-3 font-medium'>Alarm system</td>
                  <td className='p-3'>Alerts homeowner to pump failure or high water</td>
                  <td className='p-3'>10 to 20 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mound vs Conventional */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Comparison</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Mound System vs. Conventional System: Key Differences</h2>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border border-slate-200 rounded-lg overflow-hidden'>
              <thead>
                <tr className='bg-slate-50'>
                  <th className='text-left p-3 font-bold text-slate-900 border-b border-slate-200'>Factor</th>
                  <th className='text-left p-3 font-bold text-slate-900 border-b border-slate-200'>Conventional System</th>
                  <th className='text-left p-3 font-bold text-slate-900 border-b border-slate-200'>Mound System</th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                <tr className='border-b border-slate-100'>
                  <td className='p-3 font-medium'>Required soil conditions</td>
                  <td className='p-3'>Adequate depth and percolation</td>
                  <td className='p-3'>Soil that fails depth or perc requirements</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50/50'>
                  <td className='p-3 font-medium'>Drainfield location</td>
                  <td className='p-3'>Below ground surface</td>
                  <td className='p-3'>Above ground surface</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='p-3 font-medium'>Effluent delivery</td>
                  <td className='p-3'>Gravity flow</td>
                  <td className='p-3'>Pressurized pump dosing</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50/50'>
                  <td className='p-3 font-medium'>Moving parts</td>
                  <td className='p-3'>None</td>
                  <td className='p-3'>Pump, float switches, controls</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='p-3 font-medium'>Electricity required</td>
                  <td className='p-3'>No</td>
                  <td className='p-3'>Yes, for the pump</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50/50'>
                  <td className='p-3 font-medium'>Maintenance requirements</td>
                  <td className='p-3'>Pump every 3 to 5 years, inspect filter</td>
                  <td className='p-3'>All of the above plus pump inspection and alarm testing</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='p-3 font-medium'>Installed cost</td>
                  <td className='p-3'>$3,000 to $8,000</td>
                  <td className='p-3'>$10,000 to $20,000</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50/50'>
                  <td className='p-3 font-medium'>Visibility on property</td>
                  <td className='p-3'>Invisible at grade</td>
                  <td className='p-3'>Raised mound visible above grade</td>
                </tr>
                <tr>
                  <td className='p-3 font-medium'>Lifespan</td>
                  <td className='p-3'>25 to 40 years</td>
                  <td className='p-3'>25 to 40 years with proper maintenance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* How to Maintain */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Maintenance</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How to Maintain a Mound Septic System</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>A mound system requires everything a conventional system requires, plus additional attention to the pump and electrical components that a gravity system does not have.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Pump the septic tank on schedule</h3>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>The septic tank upstream of a mound system must be pumped on the same schedule as any other septic tank: every 3 to 5 years for a typical household. The pump tank (dosing chamber) should be inspected at the same visit. If solids from the septic tank escape into the pump tank because the septic tank was not pumped on schedule, those solids can clog the pump, clog the distribution pipes in the mound bed, or accelerate biomat formation in the sand. Any of those outcomes is expensive to repair. See our <Link href='/articles/how-often-pump-septic-tank' className='text-amber-700 underline hover:text-amber-800'>how often to pump guide</Link> for the schedule by tank size and household.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Inspect and test the pump annually</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The effluent pump is the only mechanical component the system cannot function without. A pump failure means the pump tank fills, the alarm activates, and effluent has nowhere to go until the pump is repaired or replaced. Annual inspection includes:</p>
          <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mb-4'>
            <li>Confirming the pump activates when the float rises</li>
            <li>Checking the pump discharge pressure</li>
            <li>Inspecting the power cord and float switch for wear or damage</li>
            <li>Testing the high-water alarm by manually raising the float</li>
          </ul>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Pump replacement costs $300 to $800 for the unit plus $200 to $500 for installation. Pumps in mound systems typically last 7 to 15 years depending on usage frequency and effluent quality.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Test the alarm system</h3>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Every mound system has a high-water alarm that sounds when the pump tank water level rises above the normal operating range, indicating the pump has failed or the system is being hydraulically overloaded. Test the alarm at least once a year by manually raising the float above the alarm threshold and confirming the alarm activates. An alarm that does not work gives no warning before the pump tank overflows.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Protect the mound surface</h3>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>The vegetated surface of the mound is the barrier that protects the sand bed from erosion, UV exposure, and temperature extremes. Mow the grass on the mound regularly but do not scalp it. Never drive vehicles over the mound. Keep heavy equipment away from the entire mound footprint. Never plant trees, shrubs, or deep-rooted plants on or immediately adjacent to the mound. Roots penetrate the distribution pipes and the sand bed. Shallow-rooted grasses are the only appropriate vegetation.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Manage water use</h3>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Mound systems are sized for a specific daily effluent volume based on the property&rsquo;s bedroom count. Exceeding that volume on a sustained basis can overwhelm the bed&rsquo;s treatment capacity. The dosing schedule is calibrated to the design volume, and sending significantly more water than that volume to the pump tank causes the pump to run longer and more frequently than the bed can handle. Spread laundry loads across the week, run dishwashers only when full, and be aware of peak water use events like house guests or extended visits.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Do not use the system as a dump for non-household waste</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Everything that applies to conventional systems applies here: no grease, no flushable wipes, no chemical drain cleaners, no antibacterial products in large quantities. Mound systems are if anything less tolerant of chemical disruption than conventional systems because the pump tank concentrates whatever enters it before delivering it to the sand bed.</p>
        </div>

        {/* How Long Does a Mound System Last? */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Lifespan</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How Long Does a Mound System Last?</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>A well-maintained mound system lasts 25 to 40 years, which is comparable to a conventional drainfield. The sand bed itself, if properly specified and protected, does not have a fixed lifespan in the way that mechanical components do. The factors that shorten mound system life are the same ones that shorten any drainfield&rsquo;s life: hydraulic overloading from too much water entering the system, solids escaping from an unpumped septic tank and clogging the bed, and biomat accumulation from infrequent dosing cycles.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The pump and electrical components have shorter service lives and should be treated as maintenance items rather than components that last the life of the system. Budget for pump replacement every 10 to 12 years as a routine cost of ownership.</p>
        </div>

        {/* Warning Signs */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Warning Signs</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What Are the Warning Signs of a Failing Mound System?</h2>
          <div className='space-y-4'>
            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>The high-water alarm is sounding.</strong> This is the system telling you the pump has failed or the pump tank is filling faster than the pump can empty it. Reduce water use immediately and call a septic professional. Do not ignore a sounding alarm.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>The pump is running constantly.</strong> If the pump runs more frequently or for longer periods than its normal dosing cycle, the pump tank may be receiving more water than the system was designed for, or the distribution pipes in the mound may be partially blocked.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Wet or soggy soil at the base of the mound.</strong> Effluent seeping out from the base or sides of the mound indicates the sand bed is saturated and no longer treating effluent before it exits the bed. This is a serious finding requiring professional assessment.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Odors at the mound surface.</strong> A functioning mound system should not produce noticeable odors at the surface. Sewage smell at the mound indicates effluent is reaching the surface rather than percolating through the sand.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Slow drains throughout the house.</strong> Same as with any septic system: whole-house slow drains point to the pump tank being full, the effluent pump failing, or the mound bed losing absorption capacity.</p>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed mt-4 text-sm'>See our <Link href='/problems/drainfield-failing' className='text-amber-700 underline hover:text-amber-800'>signs your drainfield is failing guide</Link> for the full progression of symptoms and how to interpret them.</p>
        </div>

        {/* Pros and Cons */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Evaluation</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Mound System Pros and Cons</h2>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Pros</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>It makes development possible on sites where no other system would be approved. For a property owner whose land fails a perc test, a mound system is often the difference between being able to build and not being able to build at all.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The imported sand bed provides more consistent treatment than native soil because its percolation characteristics are known and specified. In that sense, a mound system treats effluent more reliably than a conventional system in marginal soil.</p>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>The pressurized dosing system distributes effluent more evenly across the bed than gravity flow distributes effluent across conventional trenches, which reduces the risk of any single section being overloaded.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Cons</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The installed cost is two to three times higher than a conventional system. The pump and electrical components add ongoing maintenance costs and failure risk that a gravity system does not have. The mound is visible above grade, which some property owners find objectionable aesthetically. The system requires electricity to operate, which matters on off-grid properties.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The mound occupies significant surface area on the property. A mound for a three-bedroom home typically covers 2,000 to 4,000 square feet of land surface and rises 2 to 4 feet above grade. That footprint must be kept clear of vehicles, structures, and deep-rooted vegetation permanently.</p>
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
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What is a mound septic system?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A mound septic system is an engineered on-site wastewater treatment system in which the drainfield is built above the ground surface in a raised bed of imported sand rather than in underground trenches. It is required on properties where the native soil is too shallow, where the seasonal water table is too high, or where bedrock is too close to the surface to allow a conventional drainfield to treat effluent safely before it reaches groundwater. Effluent is pumped from a dosing chamber to the elevated sand bed in timed doses, where it percolates through the sand and is treated before reaching the native soil beneath.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Why would I need a mound system instead of a conventional septic system?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>You need a mound system when your property&rsquo;s soil conditions prevent a conventional drainfield from functioning safely. The three most common reasons are: the soil above a restrictive layer (hardpan clay, bedrock, or dense gravel) is too shallow to provide adequate treatment depth, the seasonal high water table rises too close to the surface to maintain the required separation from a conventional drainfield, or the native soil fails the percolation test because it drains too slowly to treat effluent adequately. A licensed soil evaluator assesses these conditions during a site evaluation before any permit is issued.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How much does a mound septic system cost to install?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A mound septic system costs $10,000 to $20,000 installed for a typical residential property, compared to $3,000 to $8,000 for a conventional gravity-fed system. The higher cost reflects the imported sand and gravel required to build the bed, the pump and electrical components needed to deliver effluent to the elevated bed, the engineering required to design the system for the specific site conditions, and the additional labor for constructing an above-grade structure rather than digging below-grade trenches. See our <Link href='/cost-guides/septic-system-installation-cost' className='text-amber-700 underline hover:text-amber-800'>septic system installation cost guide</Link> for a full component-by-component breakdown.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How often does a mound system need to be pumped?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>The septic tank upstream of a mound system should be pumped every 3 to 5 years on the same schedule as any conventional septic tank, adjusted for household size and tank capacity. The pump tank (dosing chamber) should be inspected at each pump-out visit. Failing to pump on schedule allows solids to accumulate and eventually escape into the pump tank and distribution pipes, clogging the mound bed and requiring expensive repairs. See our <Link href='/articles/how-often-pump-septic-tank' className='text-amber-700 underline hover:text-amber-800'>how often to pump guide</Link> for the schedule by tank size and household size.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How long does a mound septic system last?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A well-maintained mound system lasts 25 to 40 years, comparable to a conventional drainfield. The sand bed has an indefinite functional life if the system is maintained properly and not hydraulically overloaded. The effluent pump typically needs replacement every 7 to 15 years at a cost of $500 to $1,300 including installation. Float switches and alarm components should be tested annually and replaced as needed. The overall system lifespan is most affected by pumping schedule adherence and water use management rather than by any inherent limitation of the mound design.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Can I build a mound system myself?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>No. Mound septic systems require a site evaluation and percolation test by a licensed soil evaluator, a system design by a licensed engineer or designer, a permit from the local health department, and installation by a licensed septic contractor. The sand specification, bed dimensions, pipe layout, dosing schedule, and pump sizing are all engineered to the specific site conditions and are not variables that can be estimated or approximated. An improperly designed or installed mound system will fail to treat effluent adequately, which is both a public health risk and a code violation.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What are the maintenance costs for a mound system?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Annual and ongoing maintenance costs for a mound system include: septic tank pump-out every 3 to 5 years ($300 to $600), annual pump and alarm inspection ($150 to $300 from a licensed septic service company), pump replacement every 7 to 15 years ($500 to $1,300), and float switch or control panel replacement as needed ($100 to $400). Total annual maintenance cost averages $200 to $400 per year over the system&rsquo;s life, compared to $75 to $150 per year for a conventional gravity-fed system. The higher ongoing cost reflects the pump and electrical components that a gravity system does not have.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What happens if the pump fails in a mound system?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>When the effluent pump fails, the high-water alarm in the pump tank should activate, alerting the homeowner that the system is not functioning. The pump tank will continue filling with incoming effluent from the house while the pump is inoperative. Reduce household water use immediately to slow the rate of filling and call a septic professional. Most pump failures are resolved by replacing the pump at a cost of $500 to $1,300. A pump tank that overflows because the alarm was ignored or the pump was not replaced promptly can result in effluent surfacing in the yard, which is a health hazard and a code violation.</div>
            </details>
          </div>
        </div>

        {/* Glossary */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Glossary</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Glossary of Mound System Terms</h2>
          <div className='space-y-3'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Dosing chamber (pump tank)</h3>
              <p className='text-slate-600 text-xs'>A second buried chamber downstream from the septic tank that receives effluent and stores it between pump cycles, housing the effluent pump and the float switches or timer controls that regulate dosing. The dosing chamber allows the mound system to deliver effluent in controlled timed doses rather than continuously, which prevents the sand bed from being hydraulically overloaded and allows the bed to drain and rest between doses. Its size is engineered to hold at least one full day&rsquo;s effluent volume to provide a buffer in the event of a pump failure.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Effluent pump</h3>
              <p className='text-slate-600 text-xs'>A submersible pump installed in the dosing chamber that delivers effluent to the mound distribution pipes under pressure on a timed dosing schedule. Effluent pumps in mound systems are not the same as sump pumps and must be specified for sewage service with resistance to the corrosive conditions inside a dosing chamber. They typically last 7 to 15 years depending on how frequently the pump cycles, which is determined by household water use volume and the size of the dosing chamber.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Restrictive layer</h3>
              <p className='text-slate-600 text-xs'>Any subsurface material that prevents or significantly slows the downward percolation of effluent, including hardpan clay, solid bedrock, fractured rock with insufficient depth, dense gravel that drains too quickly for treatment, and seasonally saturated soil. The depth from the ground surface to the restrictive layer is the primary factor that determines whether a conventional drainfield can be installed and what minimum drainfield depth is required. When that depth is insufficient under state regulations, a mound system or other alternative is required.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Pressurized distribution</h3>
              <p className='text-slate-600 text-xs'>A method of delivering effluent to drainfield pipes under pump pressure through small orifices that distribute the effluent in a fine spray across the entire pipe length, ensuring even distribution throughout the bed with each dose. Pressurized distribution is more uniform than gravity-fed distribution because it actively pushes effluent to all parts of the bed rather than relying on gradient flow, which tends to favor the sections of the bed nearest the inlet. Even distribution is essential in a mound system because uneven loading can overload sections of the sand bed while others are underused.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Biomat</h3>
              <p className='text-slate-600 text-xs'>A layer of microbial growth and organic material that forms at the soil interface within the mound sand bed as effluent percolates through it. In controlled amounts, biomat is a normal and beneficial part of the treatment process, slowing percolation slightly and increasing biological treatment. Excess biomat from chronic hydraulic overloading or solids escaping an unpumped tank can reduce the bed&rsquo;s absorption capacity to the point where effluent cannot percolate through the sand and begins to surface at the mound base. Unlike drainfield biomat in native soil, mound biomat can sometimes be partially recovered through rest periods and reduced loading, but severe cases require bed renovation or replacement.</p>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className='mt-16'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>

          <h3 className='text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3'>On theseptic.guide</h3>
          <div className='grid md:grid-cols-2 gap-6 mb-10'>
            <Link href='/cost-guides/septic-system-installation-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Septic System Installation Cost 2026</h4>
              <p className='text-slate-600 text-xs'>Full cost breakdown for every system type including mound systems, with component-by-component pricing and the site conditions that determine which type is required.</p>
            </Link>
            <Link href='/comparisons/aerobic-vs-anaerobic-septic-systems' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Aerobic vs Anaerobic Septic Systems</h4>
              <p className='text-slate-600 text-xs'>How aerobic treatment units compare to conventional anaerobic systems as an alternative when soil conditions prevent a conventional drainfield, with cost and maintenance differences.</p>
            </Link>
            <Link href='/articles/how-often-pump-septic-tank' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>How Often Should You Pump Your Septic Tank?</h4>
              <p className='text-slate-600 text-xs'>The pumping schedule by tank size and household size that applies to the septic tank upstream of any mound system.</p>
            </Link>
            <Link href='/problems/drainfield-failing' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Signs Your Drainfield Is Failing</h4>
              <p className='text-slate-600 text-xs'>The warning sign progression that applies to mound systems as well as conventional drainfields, including how to distinguish temporary saturation from permanent failure.</p>
            </Link>
            <Link href='/cost-guides/drainfield-replacement-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Drainfield Replacement Cost 2026</h4>
              <p className='text-slate-600 text-xs'>What it costs to replace a failed mound bed or conventional drainfield by system type and site condition.</p>
            </Link>
            <Link href='/cost-guides/septic-system-repair-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Septic System Repair Cost 2026</h4>
              <p className='text-slate-600 text-xs'>Pricing for every common repair including pump replacement, float switch replacement, distribution pipe repair, and alarm system service for mound systems.</p>
            </Link>
            <Link href='/articles/how-long-does-a-septic-system-last' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>How Long Does a Septic System Last?</h4>
              <p className='text-slate-600 text-xs'>Expected lifespan by system type and maintenance history, including mound systems and the mechanical components that require periodic replacement.</p>
            </Link>
            <Link href='/maintenance/septic-system-maintenance-checklist' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Septic System Maintenance Checklist</h4>
              <p className='text-slate-600 text-xs'>The full maintenance schedule adapted for both conventional and alternative systems including mound systems, with pump inspection and alarm testing intervals.</p>
            </Link>
            <Link href='/guides/septic-tank-size-guide' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Septic Tank Size Guide</h4>
              <p className='text-slate-600 text-xs'>How tank sizing requirements apply to mound systems, including why the tank upstream of a mound system must be correctly sized for the bedroom count.</p>
            </Link>
            <Link href='/guides/buying-home-with-septic' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Buying a Home with a Septic System</h4>
              <p className='text-slate-600 text-xs'>What to verify when buying a property with a mound system, including pump maintenance history, alarm functionality, and whether the mound footprint has been protected.</p>
            </Link>
            <Link href='/reviews/best-septic-system-alarms' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Best Septic System Alarms</h4>
              <p className='text-slate-600 text-xs'>Monitoring options for the high-water alarm that is a required component of every mound system, including WiFi-connected alarms that send alerts to your phone.</p>
            </Link>
          </div>

          <h3 className='text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3'>From Our Network</h3>
          <div className='grid md:grid-cols-2 gap-6 mb-10'>
            <a href='https://thebasement.guide/articles/basement-flooding-insurance' target='_blank' rel='noopener noreferrer' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Basement Flooding Insurance &middot; thebasement.guide</h4>
              <p className='text-slate-600 text-xs'>For homes in the high water table conditions that typically require mound systems, basement flooding risk from the same saturated soil is a related concern.</p>
            </a>
            <a href='https://thebasement.guide/articles/crawl-space-encapsulation-guide' target='_blank' rel='noopener noreferrer' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Crawl Space Encapsulation Guide &middot; thebasement.guide</h4>
              <p className='text-slate-600 text-xs'>Properties in shallow soil or high water table conditions that require mound septic systems often have the same moisture challenges in crawl spaces.</p>
            </a>
          </div>

          <h3 className='text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3'>External Resource</h3>
          <div className='grid md:grid-cols-2 gap-6 mb-10'>
            <a href='https://www.epa.gov/septic/types-of-septic-systems' target='_blank' rel='noopener noreferrer' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>EPA Types of Septic Systems &middot; U.S. EPA</h4>
              <p className='text-slate-600 text-xs'>The EPA&apos;s official overview of alternative septic system types including mound systems, with guidance on site conditions, design principles, and regulatory considerations.</p>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className='bg-slate-900 rounded-2xl p-8 md:p-10 text-center mb-10'>
          <h2 className='text-xl md:text-2xl font-bold text-white mb-3'>Need Professional Septic Service?</h2>
          <p className='text-slate-300 mb-6 max-w-xl mx-auto text-sm'>Connect with licensed septic professionals in your area for mound system installation, inspection, or repair.</p>
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
