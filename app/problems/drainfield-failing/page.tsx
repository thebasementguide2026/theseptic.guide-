import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Signs Your Drainfield Is Failing: Warning Signs, Causes & What to Do | The Septic Guide',
  description: 'Learn the 7 warning signs of drainfield failure from earliest to latest. Understand what causes drainfield problems, which ones are fixable, and when you need a full replacement.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if my drainfield is failing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The earliest signs are slow drains throughout the house (not just one fixture), gurgling sounds in the plumbing, and sewage odor in the yard. More advanced signs include unusually green grass over the drainfield, soggy soil, standing water, and sewage surfacing. If multiple signs are present, call a septic professional for an inspection.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a drainfield last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well-maintained drainfield typically lasts 15 to 30 years. The biggest factor is whether solids were kept out of the drainfield through regular tank pumping. Drainfields that receive solids from a neglected tank can fail in under 10 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a failed drainfield be repaired?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the cause and severity. Temporary saturation, early-stage biomat, and clogged filters can often be addressed without full replacement. Long-term solid accumulation, crushed pipes, and severe root damage usually require a new drainfield.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to replace a drainfield?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A conventional drainfield replacement costs $5,000 to $15,000. If soil conditions require a mound system or alternative technology, costs can reach $20,000 or more. Site evaluation, permitting, and landscaping restoration add to the total.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does homeowners insurance cover drainfield replacement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typically no. Most standard homeowner policies consider drainfield failure a maintenance issue and exclude it from coverage. Some policies cover damage caused by a sudden event like a tree falling on the drainfield but not gradual failure from neglect or age.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I plant over my drainfield?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grass is ideal. It stabilizes the soil, promotes evaporation, and has shallow roots that will not interfere with the pipes. Avoid trees, shrubs, vegetable gardens, and any deep-rooted plants. Do not pave, cover, or build any structure over the drainfield.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Signs Your Drainfield Is Failing and What to Do About It',
  description: 'Learn the 7 warning signs of drainfield failure from earliest to latest. Understand what causes drainfield problems, which ones are fixable, and when you need a full replacement.',
  image: 'https://theseptic.guide/drainfieldexample.jpg',
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

export default function DrainfieldFailing() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/drainfieldexample.jpg'
          alt='Drainfield area showing signs of septic system failure'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-amber-700'></div>
            <span className='text-amber-500 font-bold tracking-[0.3em] text-sm uppercase'>Problem</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Signs Your Drainfield<br />
            <span className='text-amber-500'>Is Failing</span>
          </h1>
          <p className='text-slate-300 text-lg max-w-2xl mb-6 leading-relaxed'>
            And what to do about it &mdash; from the earliest warning signs to full replacement options and costs.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-sm'>SG</div>
            <div>
              <p className='text-white font-semibold'>The Septic Guide</p>
              <p className='text-slate-400 text-sm'>Updated Mar 2026 &middot; 20 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className='max-w-4xl mx-auto px-6 py-16'>

        {/* Introduction */}
        <div className='prose prose-lg max-w-none'>
          <p className='text-xl text-slate-700 leading-relaxed mb-8'>
            Your drainfield is the most expensive component of your septic system &mdash; and the one most likely to fail. When it does, you&apos;re looking at <strong>$5,000 to $15,000</strong> for a replacement, plus weeks of disruption, landscape restoration, and potentially health department involvement.
          </p>
          <p className='text-slate-600 leading-relaxed mb-8'>
            The good news is that drainfield failure doesn&apos;t happen overnight. It develops over months or years, and there are clear warning signs at every stage. If you catch the problem early, you may be able to save the drainfield. If you ignore the signs, you&apos;ll eventually face a full replacement.
          </p>
          <p className='text-slate-600 leading-relaxed mb-8'>
            This guide walks you through the warning signs in order from earliest to latest, explains what causes each one, tells you which problems are fixable and which ones mean the drainfield is done, and gives you the honest cost picture for each scenario.
          </p>
        </div>

        {/* What Your Drainfield Actually Does */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>What Your Drainfield Actually Does</h2>
          <div className='prose prose-lg max-w-none'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              Before diagnosing problems, it helps to understand what a healthy drainfield looks like. The drainfield &mdash; also called a leach field or absorption field &mdash; is a network of perforated pipes buried in gravel-filled trenches, typically 18 to 36 inches below your yard.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              Partially treated wastewater (effluent) from your <Link href='/articles/complete-septic-guide' className='text-amber-700 underline hover:text-amber-900'>septic tank</Link> flows through these pipes and percolates into the surrounding soil. The soil is where the real treatment happens. Microorganisms in the ground remove bacteria, viruses, and excess nutrients from the effluent. By the time the water reaches the groundwater table, it&apos;s been naturally purified.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              A healthy drainfield is invisible. The grass above it looks the same as the rest of the yard. There&apos;s no smell, no wet spots, and no standing water. When any of those things change, something is wrong.
            </p>
          </div>
        </div>

        {/* Drainfield Reference Image */}
        <div className='mt-16 mb-4'>
          <div className='relative w-full aspect-video rounded-xl overflow-hidden shadow-lg'>
            <Image
              src='/drainfieldexample.jpg'
              alt='Diagram showing the components of a septic drainfield system including perforated pipes, distribution box, and soil layers'
              fill
              className='object-contain'
            />
          </div>
          <p className='text-sm text-slate-500 mt-3 text-center italic'>A typical drainfield layout showing the distribution box, perforated pipes, and gravel trenches.</p>
        </div>

        {/* The Seven Warning Signs */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-2'>The Seven Warning Signs</h2>
          <p className='text-amber-700 font-semibold mb-10'>Earliest to Latest</p>

          {/* Sign 1 */}
          <div className='border border-slate-200 rounded-lg p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-3'>1. Slow Drains Throughout the House</h3>
            <p className='text-slate-600 leading-relaxed mb-4'>
              This is often the first sign, and it&apos;s the easiest to misdiagnose. If multiple fixtures &mdash; sinks, showers, toilets &mdash; are draining slowly at the same time, the problem is likely systemic, not a single clogged pipe. When the drainfield can&apos;t absorb effluent fast enough, the entire system backs up incrementally.
            </p>
            <p className='text-slate-600 leading-relaxed mb-4'>
              <strong>What it could also be:</strong> A full tank that needs <Link href='/articles/how-often-pump-septic-tank' className='text-amber-700 underline hover:text-amber-900'>pumping</Link>, a clogged effluent filter, or a blocked outlet baffle. These are cheaper fixes. Have the tank inspected first before assuming it&apos;s the drainfield.
            </p>
            <p className='text-slate-600 leading-relaxed'>
              <strong>What to do:</strong> Call a septic professional for an inspection. They&apos;ll pump the tank, check the filter and baffles, and assess whether effluent is draining properly to the distribution box and drainfield.
            </p>
          </div>

          {/* Sign 2 */}
          <div className='border border-slate-200 rounded-lg p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-3'>2. Gurgling Sounds in the Plumbing</h3>
            <p className='text-slate-600 leading-relaxed mb-4'>
              Gurgling from toilets or drains when you run water elsewhere in the house means air is getting trapped in the plumbing because wastewater can&apos;t exit the system freely. This indicates a restriction somewhere downstream, often in the drainfield or the pipe connecting the tank to the drainfield.
            </p>
            <p className='text-slate-600 leading-relaxed'>
              <strong>What to do:</strong> Same as above. Inspection, pump the tank, check the filter. If those come back clean and the gurgling persists, the drainfield is the likely culprit.
            </p>
          </div>

          {/* Sign 3 */}
          <div className='border border-slate-200 rounded-lg p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-3'>3. Sewage Odor in the Yard</h3>
            <p className='text-slate-600 leading-relaxed mb-4'>
              If you smell sewage outdoors near the septic tank or drainfield area, effluent is either surfacing or the system is producing gases that aren&apos;t being properly contained. A healthy drainfield is completely odor-free. Any noticeable smell is a sign that wastewater isn&apos;t being adequately absorbed by the soil.
            </p>
            <p className='text-slate-600 leading-relaxed'>
              <strong>What to do:</strong> Don&apos;t ignore this. Sewage gases contain hydrogen sulfide and methane, which are unpleasant and potentially dangerous in concentrated amounts. Have the system inspected promptly.
            </p>
          </div>

          {/* Sign 4 */}
          <div className='border border-slate-200 rounded-lg p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-3'>4. Unusually Lush or Green Grass Over the Drainfield</h3>
            <p className='text-slate-600 leading-relaxed mb-4'>
              If the grass directly above your drainfield is noticeably greener, taller, or thicker than the surrounding lawn &mdash; especially during dry weather &mdash; it means effluent is reaching the root zone at or near the surface rather than percolating deep into the soil. The nutrients in wastewater are essentially fertilizing that strip of grass.
            </p>
            <p className='text-slate-600 leading-relaxed mb-4'>
              <strong>Why this matters:</strong> Many homeowners see this as a positive &mdash; great, free fertilizer. It&apos;s not. It means the soil is no longer absorbing effluent at the proper depth. The treatment process is compromised, and the situation will get worse.
            </p>
            <p className='text-slate-600 leading-relaxed'>
              <strong>What to do:</strong> This is an intermediate warning sign. The drainfield isn&apos;t dead yet, but it&apos;s struggling. Reduce water use, pump the tank, and have a professional assess whether the drainfield can be rehabilitated.
            </p>
          </div>

          {/* Sign 5 */}
          <div className='border border-slate-200 rounded-lg p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-3'>5. Wet, Soggy, or Spongy Soil Over the Drainfield</h3>
            <p className='text-slate-600 leading-relaxed mb-4'>
              When the soil above the drainfield is consistently wet, soft, or spongy to walk on in dry weather, the drainfield has reached or exceeded its absorption capacity. Effluent is rising to the surface because the soil below can no longer accept it.
            </p>
            <p className='text-slate-600 leading-relaxed mb-4'>
              <strong>Temporary vs. permanent:</strong> If this happens after several days of heavy rain, the soil may be temporarily saturated and may recover once it dries out. If it happens during dry weather or persists after the rain stops, the drainfield is in serious trouble.
            </p>
            <p className='text-slate-600 leading-relaxed'>
              <strong>What to do:</strong> Stop using water immediately to reduce the load on the system. Have the tank pumped. If the problem is temporary saturation, give the drainfield several days to dry out. If the problem persists in dry conditions, the drainfield is likely failing or has failed.
            </p>
          </div>

          {/* Sign 6 */}
          <div className='border border-red-200 bg-red-50 rounded-lg p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-3'>6. Standing Water or Sewage Surfacing in the Yard</h3>
            <p className='text-slate-600 leading-relaxed mb-4'>
              This is the most visible and alarming sign. Wastewater pooling on the surface above or near the drainfield means the soil has completely lost its ability to absorb effluent in that area. According to <a href='https://content.ces.ncsu.edu/why-do-septic-systems-fail' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline hover:text-amber-900'>NC State Extension&apos;s septic failure research</a>, surfacing effluent is a clear indicator that the drainfield&apos;s soil absorption capacity has been exceeded, either due to excess solids, soil compaction, or hydraulic overloading.
            </p>
            <p className='text-slate-600 leading-relaxed mb-4'>
              <strong>Health hazard:</strong> Standing sewage is a biohazard. Keep children, pets, and anyone else away from the area. Do not let it drain into any water feature, storm drain, or neighbor&apos;s property.
            </p>
            <p className='text-slate-600 leading-relaxed'>
              <strong>What to do:</strong> This is an emergency. Stop all water use in the house, pump the tank, and call a septic professional immediately. At this stage, the drainfield may need to be replaced.
            </p>
          </div>

          {/* Sign 7 */}
          <div className='border border-red-200 bg-red-50 rounded-lg p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-3'>7. Sewage Backing Up Into the House</h3>
            <p className='text-slate-600 leading-relaxed mb-4'>
              When the drainfield completely fails, the entire system backs up. Sewage enters the home through the lowest drains &mdash; basement floor drains, ground-floor bathtubs, and toilets. This is the final stage of drainfield failure and means the system can no longer process any wastewater.
            </p>
            <p className='text-slate-600 leading-relaxed'>
              <strong>What to do:</strong> Follow the emergency steps in our <Link href='/problems/tank-backing-up' className='text-amber-700 underline hover:text-amber-900'>septic backup guide</Link>. Stop all water use, avoid contact with sewage, call a professional immediately.
            </p>
          </div>
        </div>

        {/* What Causes Drainfield Failure */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>What Causes Drainfield Failure</h2>
          <p className='text-slate-600 leading-relaxed mb-8'>Understanding the cause determines whether the drainfield can be saved or needs to be replaced.</p>

          <div className='space-y-6'>
            <div className='border-l-4 border-amber-500 pl-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Solids Escaping the Tank <span className='text-amber-700 text-sm font-normal'>(Most Common Cause)</span></h3>
              <p className='text-slate-600 leading-relaxed'>
                When the septic tank isn&apos;t <Link href='/articles/how-often-pump-septic-tank' className='text-amber-700 underline hover:text-amber-900'>pumped on schedule</Link>, sludge and scum accumulate until they overflow into the drainfield. These solids clog the gravel, soil pores, and perforated pipes. Over time, a thick layer of biological material called biomat builds up on the trench surfaces and seals the soil, preventing effluent from percolating. This is the number one cause of premature drainfield failure &mdash; and it is entirely preventable with regular pumping.
              </p>
            </div>

            <div className='border-l-4 border-amber-500 pl-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Hydraulic Overloading</h3>
              <p className='text-slate-600 leading-relaxed'>
                Sending more water into the system than the drainfield can absorb overwhelms the soil&apos;s capacity. This happens from excessive water use (multiple loads of laundry in a row, leaky toilets, running fixtures) or from external water sources (roof runoff, sump pump discharge, surface water draining toward the drainfield).
              </p>
            </div>

            <div className='border-l-4 border-amber-500 pl-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Soil Compaction</h3>
              <p className='text-slate-600 leading-relaxed'>
                Driving vehicles, parking, or placing heavy structures (sheds, pools, patios) over the drainfield compacts the soil and crushes the pipes. Compacted soil loses its ability to absorb water. This damage is usually permanent.
              </p>
            </div>

            <div className='border-l-4 border-amber-500 pl-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Tree Root Intrusion</h3>
              <p className='text-slate-600 leading-relaxed'>
                Roots from trees and large shrubs seek out the moisture and nutrients in drainfield trenches. Once they infiltrate the perforated pipes, they block effluent distribution and can crack or collapse the pipes entirely.
              </p>
            </div>

            <div className='border-l-4 border-amber-500 pl-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Poor Original Design or Installation</h3>
              <p className='text-slate-600 leading-relaxed'>
                Some drainfields were installed in soil that was too shallow, too dense, too permeable, or had a water table too high for proper treatment. These systems were undersized or poorly matched to their site conditions from the start. No amount of maintenance can fix a fundamentally flawed design.
              </p>
            </div>

            <div className='border-l-4 border-amber-500 pl-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Age</h3>
              <p className='text-slate-600 leading-relaxed'>
                Even well-maintained drainfields have a finite lifespan, typically 15 to 30 years. Over decades, the soil&apos;s absorption capacity gradually diminishes as biomat naturally accumulates. Eventually, the drainfield reaches the end of its functional life.
              </p>
            </div>
          </div>
        </div>

        {/* Can a Failing Drainfield Be Saved? */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Can a Failing Drainfield Be Saved?</h2>
          <p className='text-slate-600 leading-relaxed mb-8'>Sometimes yes, sometimes no. Here&apos;s how to tell.</p>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-green-50 border border-green-200 rounded-lg p-6'>
              <h3 className='text-lg font-bold text-green-900 mb-4'>Potentially Fixable</h3>
              <ul className='space-y-3 text-slate-600 text-sm'>
                <li><strong>Temporary saturation</strong> from heavy rain or flooding. Reduce water use, pump the tank, and let the drainfield dry out. If absorption returns to normal, the drainfield is fine.</li>
                <li><strong>Clogged effluent filter</strong> causing the tank to overflow into the drainfield. Clean or replace the filter ($50 to $200) and pump the tank.</li>
                <li><strong>Early-stage biomat buildup.</strong> Some professionals offer drainfield rejuvenation techniques including soil aeration (fracturing compacted soil with pressurized air), jetting (flushing drainfield pipes to remove sediment), and bio-remediation (introducing bacteria to break down biomat). These cost $1,000 to $5,000 and work in some cases, particularly when caught early.</li>
                <li><strong>Uneven distribution</strong> caused by a failing distribution box. If one section of the drainfield is overloaded because the D-box isn&apos;t distributing evenly, replacing the D-box ($500 to $1,500) can restore balance to the system.</li>
              </ul>
            </div>

            <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
              <h3 className='text-lg font-bold text-red-900 mb-4'>Not Fixable &mdash; Replacement Needed</h3>
              <ul className='space-y-3 text-slate-600 text-sm'>
                <li>Long-term clogging from years of solids entering the drainfield due to skipped pumping. Once the soil pores are sealed with compacted biomat and solid waste, they cannot be reopened.</li>
                <li>Crushed or collapsed pipes from vehicle traffic or structural weight. The pipes must be replaced.</li>
                <li>Severe root damage that has compromised multiple trench lines.</li>
                <li>Fundamental design flaws where the soil was never suitable for the system installed.</li>
                <li>A drainfield that has simply reached the end of its natural lifespan after 20+ years of service.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Drainfield Replacement */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Drainfield Replacement: What to Expect</h2>
          <p className='text-slate-600 leading-relaxed mb-6'>
            If the drainfield needs to be replaced, here&apos;s the process and what it costs. A site evaluation and soil test (perc test) determines where the new drainfield can go. Most properties have a designated replacement drainfield area identified in the original septic permit. If no replacement area exists, the options become more limited and expensive.
          </p>

          <div className='overflow-x-auto mb-8'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='text-left p-4 font-bold'>Item</th>
                  <th className='text-left p-4 font-bold'>Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'>Site evaluation and perc test</td>
                  <td className='p-4 text-slate-900 font-semibold'>$500 &ndash; $1,500</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-4 text-slate-700'>Conventional drainfield replacement</td>
                  <td className='p-4 text-slate-900 font-semibold'>$5,000 &ndash; $15,000</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'>Mound system (if soil conditions require it)</td>
                  <td className='p-4 text-slate-900 font-semibold'>$10,000 &ndash; $20,000</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-4 text-slate-700'>Alternative system (chamber, drip, sand filter)</td>
                  <td className='p-4 text-slate-900 font-semibold'>$8,000 &ndash; $20,000</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'>Distribution box replacement</td>
                  <td className='p-4 text-slate-900 font-semibold'>$500 &ndash; $1,500</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-4 text-slate-700'>Landscaping restoration</td>
                  <td className='p-4 text-slate-900 font-semibold'>$500 &ndash; $3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-600 leading-relaxed'>
            The total project typically takes one to three weeks from evaluation to completed installation, depending on permitting timelines in your area. For a deeper cost breakdown, see our guide on <Link href='/articles/septic-tank-pumping-cost' className='text-amber-700 underline hover:text-amber-900'>septic system costs</Link>.
          </p>
        </div>

        {/* How to Protect Your Drainfield */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>How to Protect Your Drainfield</h2>
          <p className='text-slate-600 leading-relaxed mb-6'>Every cause of failure listed above is preventable except age. Here&apos;s how to maximize your drainfield&apos;s lifespan.</p>

          <div className='space-y-4'>
            <div className='flex items-start space-x-3'>
              <span className='text-amber-600 font-bold mt-1'>&#10003;</span>
              <p className='text-slate-600'><strong>Pump your tank on schedule.</strong> This is the single most important thing you can do. Keeping solids out of the drainfield is the primary defense against premature failure.</p>
            </div>
            <div className='flex items-start space-x-3'>
              <span className='text-amber-600 font-bold mt-1'>&#10003;</span>
              <p className='text-slate-600'><strong>Only <Link href='/articles/what-can-cannot-flush-septic-system' className='text-amber-700 underline hover:text-amber-900'>flush appropriate materials</Link>.</strong> Everything that clogs the drainfield started as something flushed or poured down a drain that shouldn&apos;t have been.</p>
            </div>
            <div className='flex items-start space-x-3'>
              <span className='text-amber-600 font-bold mt-1'>&#10003;</span>
              <p className='text-slate-600'><strong>Spread water use across the week.</strong> Avoid doing multiple loads of laundry in one day. Fix leaky toilets and faucets promptly.</p>
            </div>
            <div className='flex items-start space-x-3'>
              <span className='text-amber-600 font-bold mt-1'>&#10003;</span>
              <p className='text-slate-600'><strong>Divert surface water away from the drainfield.</strong> Roof gutters, downspouts, sump pumps, and landscape grading should direct water away from the drainfield area, not toward it.</p>
            </div>
            <div className='flex items-start space-x-3'>
              <span className='text-amber-600 font-bold mt-1'>&#10003;</span>
              <p className='text-slate-600'><strong>Never drive or park on the drainfield.</strong> No vehicles, no riding mowers, no heavy equipment. The soil compaction is permanent.</p>
            </div>
            <div className='flex items-start space-x-3'>
              <span className='text-amber-600 font-bold mt-1'>&#10003;</span>
              <p className='text-slate-600'><strong>Never build structures over the drainfield.</strong> No sheds, patios, pools, decks, or driveways. You need the area clear for air exchange, evaporation, and future access for maintenance or replacement.</p>
            </div>
            <div className='flex items-start space-x-3'>
              <span className='text-amber-600 font-bold mt-1'>&#10003;</span>
              <p className='text-slate-600'><strong>Plant only grass over the drainfield.</strong> No trees, shrubs, or deep-rooted plants within 30 feet of the drainfield perimeter. Roots will find the pipes.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>How do I know if my drainfield is failing?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>The earliest signs are slow drains throughout the house (not just one fixture), gurgling sounds in the plumbing, and sewage odor in the yard. More advanced signs include unusually green grass over the drainfield, soggy soil, standing water, and sewage surfacing. If multiple signs are present, call a septic professional for an inspection.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>How long does a drainfield last?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A well-maintained drainfield typically lasts 15 to 30 years. The biggest factor is whether solids were kept out of the drainfield through regular tank pumping. Drainfields that receive solids from a neglected tank can fail in under 10 years.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>Can a failed drainfield be repaired?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>It depends on the cause and severity. Temporary saturation, early-stage biomat, and clogged filters can often be addressed without full replacement. Long-term solid accumulation, crushed pipes, and severe root damage usually require a new drainfield.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>How much does it cost to replace a drainfield?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A conventional drainfield replacement costs $5,000 to $15,000. If soil conditions require a mound system or alternative technology, costs can reach $20,000 or more. Site evaluation, permitting, and landscaping restoration add to the total.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>Does homeowners insurance cover drainfield replacement?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Typically no. Most standard homeowner policies consider drainfield failure a maintenance issue and exclude it from coverage. Some policies cover damage caused by a sudden event like a tree falling on the drainfield but not gradual failure from neglect or age. Check your policy for specific exclusions.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>What should I plant over my drainfield?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Grass is ideal. It stabilizes the soil, promotes evaporation, and has shallow roots that won&apos;t interfere with the pipes. Avoid trees, shrubs, vegetable gardens, and any deep-rooted plants. Do not pave, cover, or build any structure over the drainfield.</div>
            </details>
          </div>
        </div>

        {/* Glossary */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Glossary</h2>
          <div className='space-y-6'>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Drainfield (leach field, absorption field)</h3>
              <p className='text-slate-600 text-sm'>The network of perforated pipes in gravel-filled trenches where septic tank effluent is distributed into the soil for final treatment. The most expensive component of a septic system to replace.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Biomat</h3>
              <p className='text-slate-600 text-sm'>A layer of biological material (bacteria, organic solids, and slime) that forms on the bottom and sides of drainfield trenches. A thin biomat is normal and aids in treatment. A thick biomat caused by excess solids seals the soil and prevents effluent absorption, leading to failure.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Effluent</h3>
              <p className='text-slate-600 text-sm'>The partially treated liquid that exits the septic tank and flows to the drainfield. Clean effluent keeps the drainfield healthy. Effluent contaminated with solids from a neglected tank damages the drainfield.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Perc test (percolation test)</h3>
              <p className='text-slate-600 text-sm'>A soil test that measures how quickly water drains through the soil at a specific site. Required before installing or replacing a drainfield to ensure the soil can absorb effluent at an adequate rate.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Distribution box (D-box)</h3>
              <p className='text-slate-600 text-sm'>A small underground box that divides effluent equally among multiple drainfield trench lines. A failing D-box sends too much effluent to one section while the rest sits idle, overloading part of the drainfield.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Hydraulic overload</h3>
              <p className='text-slate-600 text-sm'>When more water enters the septic system than the drainfield can absorb. Caused by excessive water use, leaky fixtures, or external water sources (rain, runoff) draining toward the drainfield.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Soil compaction</h3>
              <p className='text-slate-600 text-sm'>Permanent compression of soil caused by vehicle traffic, heavy structures, or construction equipment over the drainfield. Compacted soil loses its ability to absorb water and cannot be restored without excavation.</p>
            </div>
            <div className='pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Root intrusion</h3>
              <p className='text-slate-600 text-sm'>When tree or shrub roots grow into drainfield pipes and trenches, blocking effluent distribution and potentially crushing pipe sections. Prevented by maintaining a 30-foot clearance between trees and drainfield components.</p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <Link href='/problems/tank-backing-up' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Tank Backing Up Into House</h3>
              <p className='text-slate-600 text-xs'>What to do when sewage backs up and how to prevent it.</p>
            </Link>
            <Link href='/articles/septic-tank-pumping-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Tank Pumping Cost 2026</h3>
              <p className='text-slate-600 text-xs'>Real pricing by tank size, region, and hidden fees to watch for.</p>
            </Link>
            <Link href='/articles/how-often-pump-septic-tank' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>How Often Should You Pump Your Septic Tank?</h3>
              <p className='text-slate-600 text-xs'>Find your exact pumping schedule by tank size and household size.</p>
            </Link>
            <Link href='/articles/complete-septic-guide' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Complete Septic System Guide</h3>
              <p className='text-slate-600 text-xs'>How your system works, types, maintenance, and more.</p>
            </Link>
          </div>
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

      {/* CTA */}
      <div className='bg-slate-900 rounded-2xl p-8 md:p-10 text-center'>
        <h2 className='text-xl md:text-2xl font-bold text-white mb-3'>Need Emergency Septic Service?</h2>
        <p className='text-slate-300 mb-6 max-w-xl mx-auto text-sm'>Connect with licensed septic professionals in your area for drainfield inspection, repair, or replacement.</p>
        <Link href='/get-quote' className='inline-block bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-lg transition-colors'>Get a Free Quote</Link>
      </div>
    </>
  )
}
