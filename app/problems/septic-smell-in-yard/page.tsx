import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Septic Smell in Your Yard? 8 Causes and How to Fix Each One | The Septic Guide',
  description: 'A septic smell in your yard is caused by hydrogen sulfide and methane gas escaping from your septic system. Learn the 8 most common causes, how to diagnose each one, and the specific fix and cost for each.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does my yard smell like sewage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common cause is a septic tank that is full and overdue for pumping. Other causes include a damaged tank lid or riser seal, loose inspection port covers, a clogged plumbing vent, drainfield saturation or failure, a broken sewer line, or imbalanced pH in the tank. Locating where the smell is strongest helps identify the specific cause.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is septic gas dangerous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the low concentrations typically found outdoors, septic gases (hydrogen sulfide and methane) are unpleasant but not usually dangerous. However, in enclosed spaces or at high concentrations, hydrogen sulfide can cause headaches, nausea, and in extreme cases, loss of consciousness. Methane is flammable. Never enter a septic tank or any enclosed area where septic gases may have accumulated.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my septic system smell after pumping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pumping temporarily removes the bacterial colony that suppresses gas production. The tank may produce more odor for a few days as new waste enters and the bacterial population rebuilds. This is normal and should resolve within a week. If the smell persists longer than a week, check the tank lid seal. The pumping crew may not have re-sealed the lid properly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will septic additives fix the smell?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the smell is caused by a bacterial imbalance or low pH, a bacteria-based treatment can help restore the biological balance and reduce gas production. If the smell is caused by a full tank, damaged lid, clogged vent, or drainfield failure, no additive will fix it. Address the mechanical or structural cause first.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does weather affect septic odors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Heavy rain saturates the drainfield soil, preventing proper gas dispersal and sometimes forcing effluent to the surface. Cold weather can freeze vent pipe openings, trapping gases. Wind patterns can carry vent pipe gases downward into the yard. Seasonal odors that appear during wet weather and disappear during dry periods usually indicate temporary drainfield saturation, not permanent failure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to fix a septic smell?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the cause. Replacing a cap or gasket costs under $30. Pumping a full tank costs $300 to $600. Extending a vent pipe costs $200 to $500. Repairing a broken sewer line costs $500 to $3,000. Replacing a failed drainfield costs $5,000 to $15,000. Most outdoor septic odors are caused by inexpensive, fixable issues.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Septic Smell in Your Yard: 8 Causes and How to Fix Each One',
  description: 'A septic smell in your yard is caused by hydrogen sulfide and methane gas escaping from your septic system. Learn the 8 most common causes and how to fix each one.',
  image: 'https://theseptic.guide/badsepticsmell.jpg',
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

export default function SepticSmellInYard() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/badsepticsmell.jpg'
          alt='Septic smell in yard caused by hydrogen sulfide and methane gas'
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
            Septic Smell in Your Yard<br />
            <span className='text-amber-500'>8 Causes and How to Fix Each One</span>
          </h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            A septic smell in your yard is caused by hydrogen sulfide and methane gas escaping from your septic system. This guide identifies the eight most common causes and gives you the specific fix and cost for each.
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

        {/* Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>A healthy septic system produces no noticeable outdoor odor. If you smell sewage in your yard, something is wrong. The most common cause is a full tank that is overdue for pumping. Other causes include damaged tank lids, clogged vent pipes, a failing drainfield, and broken sewer lines.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>This guide identifies the eight most common causes, tells you exactly how to diagnose which one is your problem, and gives you the specific fix and cost for each.</p>
        </div>

        {/* Diagnostic Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Diagnosis</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Where Is the Smell Coming From?</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Before you can fix the problem, you need to locate it. Walk your property and identify where the odor is strongest. The location narrows the cause significantly.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-semibold'>Smell Location</th>
                  <th className='p-2 text-left font-semibold'>Most Likely Cause</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Near the septic tank</td><td className='p-2 text-slate-700'>Full tank, damaged lid or riser seal, loose inspection port cover</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Near the drainfield</td><td className='p-2 text-slate-700'>Drainfield saturation or failure, broken inspection pipe cap</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>General yard &mdash; no specific spot</td><td className='p-2 text-slate-700'>Plumbing vent pipe too short, wind carrying gases downward</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Near the house foundation</td><td className='p-2 text-slate-700'>Broken sewer line between house and tank, cracked vent pipe</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Near the distribution box</td><td className='p-2 text-slate-700'>D-box failure, uneven effluent distribution</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg'>
            <p className='text-slate-700 text-sm'>Knowing where the smell originates saves you money by directing the professional to the right area immediately.</p>
          </div>
        </div>

        {/* The 8 Causes */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Causes</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The 8 Causes and How to Fix Each One</h2>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>1. Full Septic Tank</h3>
              <p className='text-slate-700 text-sm mb-2'><strong>The cause:</strong> When sludge and scum fill the tank beyond capacity, gases have nowhere to go. Hydrogen sulfide and methane escape through any available opening &mdash; the tank lid, inspection ports, the inlet pipe, and even the drainfield. A full tank also forces poorly treated effluent into the drainfield, which produces its own odor as it surfaces.</p>
              <p className='text-slate-700 text-sm mb-2'><strong>How to confirm:</strong> Check when the tank was last pumped. If it&apos;s been more than three to five years (or shorter for larger households), an overdue tank is the most probable cause.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: Have the tank pumped. Cost: $300 to $600. This is the single most common cause of outdoor septic odor, and the cheapest to fix. See our <Link href='/cost-guides/septic-tank-pumping-cost' className='text-amber-700 underline hover:text-amber-800'>pumping cost guide</Link> for details.</p>
            </div>

            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>2. Damaged or Unsealed Tank Lid</h3>
              <p className='text-slate-700 text-sm mb-2'><strong>The cause:</strong> Your septic tank lid creates a seal that keeps gases contained. Concrete lids can crack or shift over time. Plastic lids have rubber gaskets that deteriorate. If the seal is broken, hydrogen sulfide escapes directly into the air above the tank.</p>
              <p className='text-slate-700 text-sm mb-2'>This is the most overlooked cause of septic smell. According to the <a href='https://extension.umn.edu/septic-system-maintenance' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline hover:text-amber-800'>University of Minnesota Onsite Sewage Treatment Program</a>, damaged rubber seals on plastic lids are a frequent source of yard odors.</p>
              <p className='text-slate-700 text-sm mb-2'><strong>How to confirm:</strong> Locate your tank lid and check for visible cracks, a missing gasket, or a lid that doesn&apos;t sit flush. If you have risers, check that the riser-to-tank connection is sealed and the riser lid is tightly fastened.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: Replace the rubber gasket on plastic lids ($10 to $30 DIY). Apply weather stripping to concrete lids as a temporary seal ($5 to $15). Replace a cracked lid entirely ($100 to $300). Upgrade to a modern riser with a screw-down lid and integrated gasket ($200 to $400) for a permanent solution.</p>
            </div>

            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>3. Loose or Missing Inspection Port Covers</h3>
              <p className='text-slate-700 text-sm mb-2'><strong>The cause:</strong> Inspection ports are small 4- to 6-inch pipes that extend from the tank or drainfield to the surface. They&apos;re capped with plastic or PVC covers. If a cover is cracked, missing, or doesn&apos;t fit tightly, septic gases escape through the opening.</p>
              <p className='text-slate-700 text-sm mb-2'><strong>How to confirm:</strong> Walk the area above your tank and drainfield. Look for small pipe caps at ground level. Check that each one is present and fits snugly.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: Replace missing or damaged caps ($5 to $15 each at any hardware store). This is a five-minute DIY fix that can eliminate the odor entirely if this is the cause.</p>
            </div>

            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>4. Blocked or Short Plumbing Vent Pipe</h3>
              <p className='text-slate-700 text-sm mb-2'><strong>The cause:</strong> Your home&apos;s plumbing vent pipe &mdash; the pipe that extends through the roof &mdash; serves two purposes: it equalizes air pressure in the plumbing and it vents septic gases above the roofline where wind disperses them. If the vent is clogged with leaves, debris, ice, or a bird&apos;s nest, gases can&apos;t escape upward. They back up and exit through the tank, the drainfield, or back into the house.</p>
              <p className='text-slate-700 text-sm mb-2'>Even if the vent is clear, it may be too short. Homes in valleys, wooded areas, or low-lying terrain don&apos;t always get enough wind to carry gases away. Instead, air currents push the gases downward into the yard.</p>
              <p className='text-slate-700 text-sm mb-2'><strong>How to confirm:</strong> Look at your roof. The vent pipe is usually a 3- to 4-inch PVC pipe extending above the roofline. Check for visible obstructions. If the vent appears clear but you&apos;re in a sheltered location, the pipe may need to be extended.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: Clear debris from the vent pipe (free if you&apos;re comfortable on a roof, or $100 to $200 for a plumber). Extend the vent pipe to improve dispersal ($200 to $500). Install an activated carbon filter on top of the vent to absorb odors ($30 to $75, replaced annually).</p>
              <div className='bg-amber-50 border border-amber-200 rounded-lg p-3 mt-3'>
                <p className='text-slate-700 text-xs'><strong>Note:</strong> In freezing climates, carbon filters can collect moisture and ice over in winter, so remove them during cold months.</p>
              </div>
            </div>

            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>5. Drainfield Saturation or Failure</h3>
              <p className='text-slate-700 text-sm mb-2'><strong>The cause:</strong> When the drainfield can&apos;t absorb effluent properly, wastewater rises toward the surface. As it reaches the root zone and topsoil layer, it releases gases directly into the air. This produces a strong, persistent sewage smell concentrated over the drainfield area, often accompanied by soggy soil, standing water, or unusually green grass.</p>
              <p className='text-slate-700 text-sm mb-2'><strong>How to confirm:</strong> Walk the drainfield area. If the soil is wet, spongy, or has standing water during dry weather, or if the grass is noticeably greener than the surrounding lawn, the drainfield is struggling or has failed. For a detailed guide, see our <Link href='/problems/drainfield-failing' className='text-amber-700 underline hover:text-amber-800'>drainfield failure guide</Link>.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: If caused by temporary saturation from heavy rain, reduce water use and let the drainfield dry out over several days. If caused by long-term failure, the drainfield may need rejuvenation ($1,000 to $5,000) or full replacement ($5,000 to $15,000). Have the tank pumped first to rule out a simple full-tank issue before assuming drainfield failure.</p>
            </div>

            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>6. Broken Sewer Line Between House and Tank</h3>
              <p className='text-slate-700 text-sm mb-2'><strong>The cause:</strong> The pipe connecting your house to the septic tank can crack, separate at joints, or be crushed by tree roots, vehicle traffic, or soil settlement. When the pipe is breached, raw sewage leaks into the soil between the house and the tank, producing a localized odor along the pipe route.</p>
              <p className='text-slate-700 text-sm mb-2'><strong>How to confirm:</strong> The smell is strongest along the path between the house and the tank &mdash; not at the tank or drainfield itself. You may also notice slow drains or wet spots along this route.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: A plumber can camera-inspect the sewer line to locate the break ($100 to $300 for the inspection). Repair costs range from $500 to $3,000 depending on the location, depth, and extent of the damage.</p>
            </div>

            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>7. High Water Table or Seasonal Conditions</h3>
              <p className='text-slate-700 text-sm mb-2'><strong>The cause:</strong> In spring after snowmelt, during extended rainy periods, or in areas with naturally high water tables, groundwater can rise to the level of the drainfield trenches. This saturates the soil and forces gases to the surface. It can also temporarily reduce the drainfield&apos;s treatment capacity, producing odors that weren&apos;t present during drier conditions.</p>
              <p className='text-slate-700 text-sm mb-2'><strong>How to confirm:</strong> The smell appears seasonally (spring, wet season) and fades during dry weather. The drainfield area may be wet during these periods but dry up on its own.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: This is often temporary and resolves when the water table drops. Reduce water use during wet periods to ease the load. Long-term solutions include improving surface drainage around the drainfield (grading, swales, French drains) to divert runoff, and ensuring roof gutters, downspouts, and sump pump discharge are directed away from the system.</p>
            </div>

            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>8. Imbalanced Tank pH or Dead Bacteria</h3>
              <p className='text-slate-700 text-sm mb-2'><strong>The cause:</strong> The bacteria in your septic tank operate best at a pH between 6.8 and 7.6. When the pH drops too acidic &mdash; from dumping chemicals, excessive use of antibacterial products, or pouring vinegar-based cleaners in large quantities &mdash; hydrogen sulfide production increases. This is the rotten-egg smell. If bacteria have been killed by chemicals, waste isn&apos;t being digested properly, and the tank produces more gas than a healthy system.</p>
              <p className='text-slate-700 text-sm mb-2'><strong>How to confirm:</strong> The smell is a distinct rotten-egg odor concentrated near the tank. It may appear after heavy use of cleaning products, bleach, or after chemicals were accidentally poured down a drain.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: Add a cup of baking soda to a sink drain or toilet once a week for several weeks to help buffer the pH back toward neutral. Avoid flushing chemicals, antibacterial products, and harsh cleaners. Time and normal use will allow the bacterial colony to recover. If the problem persists, a bacteria-based septic treatment can help rebuild the colony. See our <Link href='/articles/what-can-cannot-flush-septic-system' className='text-amber-700 underline hover:text-amber-800'>flushing guide</Link> for what to keep out of your system.</p>
            </div>
          </div>
        </div>

        {/* DIY vs Pro Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Costs</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>When to Call a Professional vs. DIY</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Some odor issues are simple enough to handle yourself. Others require professional diagnosis.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-semibold'>Problem</th>
                  <th className='p-2 text-center font-semibold'>DIY or Pro?</th>
                  <th className='p-2 text-right font-semibold'>Estimated Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Replace inspection port cap</td><td className='p-2 text-center text-slate-700'>DIY</td><td className='p-2 text-right text-slate-700'>$5 &ndash; $15</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Replace rubber gasket on tank lid</td><td className='p-2 text-center text-slate-700'>DIY</td><td className='p-2 text-right text-slate-700'>$10 &ndash; $30</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Apply weather stripping to concrete lid</td><td className='p-2 text-center text-slate-700'>DIY</td><td className='p-2 text-right text-slate-700'>$5 &ndash; $15</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Add baking soda to buffer pH</td><td className='p-2 text-center text-slate-700'>DIY</td><td className='p-2 text-right text-slate-700'>Under $5</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Clear debris from roof vent</td><td className='p-2 text-center text-slate-700'>DIY (if comfortable on roof)</td><td className='p-2 text-right text-slate-700'>Free</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Pump a full tank</td><td className='p-2 text-center text-slate-700'>Professional</td><td className='p-2 text-right text-slate-700'>$300 &ndash; $600</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Install carbon filter on vent</td><td className='p-2 text-center text-slate-700'>DIY or plumber</td><td className='p-2 text-right text-slate-700'>$30 &ndash; $75</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Extend vent pipe</td><td className='p-2 text-center text-slate-700'>Plumber</td><td className='p-2 text-right text-slate-700'>$200 &ndash; $500</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Camera-inspect sewer line</td><td className='p-2 text-center text-slate-700'>Professional</td><td className='p-2 text-right text-slate-700'>$100 &ndash; $300</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Repair broken sewer line</td><td className='p-2 text-center text-slate-700'>Professional</td><td className='p-2 text-right text-slate-700'>$500 &ndash; $3,000</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Drainfield assessment</td><td className='p-2 text-center text-slate-700'>Professional</td><td className='p-2 text-right text-slate-700'>$200 &ndash; $500</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Drainfield replacement</td><td className='p-2 text-center text-red-700 font-semibold'>Professional</td><td className='p-2 text-right text-red-700 font-semibold'>$5,000 &ndash; $15,000</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg'>
            <p className='text-slate-700 text-sm'><strong>Start with the cheapest, simplest fixes first.</strong> Check your inspection port caps, check your tank lid seal, and verify when the tank was last pumped. These three steps cost under $50 and solve the majority of outdoor septic odor complaints.</p>
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
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Why does my yard smell like sewage?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>The most common cause is a septic tank that is full and overdue for pumping. Other causes include a damaged tank lid or riser seal, loose inspection port covers, a clogged plumbing vent, drainfield saturation or failure, a broken sewer line, or imbalanced pH in the tank. Locating where the smell is strongest helps identify the specific cause.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Is septic gas dangerous?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>In the low concentrations typically found outdoors, septic gases (hydrogen sulfide and methane) are unpleasant but not usually dangerous. However, in enclosed spaces or at high concentrations, hydrogen sulfide can cause headaches, nausea, and in extreme cases, loss of consciousness. Methane is flammable. Never enter a septic tank or any enclosed area where septic gases may have accumulated.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Why does my septic system smell after pumping?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Pumping temporarily removes the bacterial colony that suppresses gas production. The tank may produce more odor for a few days as new waste enters and the bacterial population rebuilds. This is normal and should resolve within a week. If the smell persists longer than a week or is very strong, check the tank lid seal. The pumping crew may not have re-sealed the lid properly.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Will septic additives fix the smell?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>If the smell is caused by a bacterial imbalance or low pH, a bacteria-based treatment can help restore the biological balance and reduce gas production. If the smell is caused by a full tank, damaged lid, clogged vent, or drainfield failure, no additive will fix it. Address the mechanical or structural cause first.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Does weather affect septic odors?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Yes. Heavy rain saturates the drainfield soil, preventing proper gas dispersal and sometimes forcing effluent to the surface. Cold weather can freeze vent pipe openings, trapping gases. Wind patterns can carry vent pipe gases downward into the yard rather than dispersing them upward. Seasonal odors that appear during wet weather and disappear during dry periods usually indicate temporary drainfield saturation, not permanent failure.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How much does it cost to fix a septic smell?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>It depends on the cause. Replacing a cap or gasket costs under $30. Pumping a full tank costs $300 to $600. Extending a vent pipe costs $200 to $500. Repairing a broken sewer line costs $500 to $3,000. Replacing a failed drainfield costs $5,000 to $15,000. Most outdoor septic odors are caused by inexpensive, fixable issues.</div>
            </details>
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
              <dt className='font-bold text-slate-900 text-sm'>Hydrogen Sulfide</dt>
              <dd className='text-slate-600 text-xs'>A gas produced by anaerobic bacteria during waste decomposition. Responsible for the rotten-egg smell associated with septic systems. Unpleasant at low concentrations and potentially dangerous at high concentrations in enclosed spaces.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Methane</dt>
              <dd className='text-slate-600 text-xs'>A flammable, odorless gas produced during anaerobic decomposition in the septic tank. While methane itself has no smell, it is produced alongside hydrogen sulfide, which does.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Plumbing Vent Pipe</dt>
              <dd className='text-slate-600 text-xs'>A vertical pipe extending through the roof of your home that allows septic gases to escape above the roofline and equalizes air pressure in the plumbing system. A blocked or short vent causes gases to exit through the tank or back into the house.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Riser</dt>
              <dd className='text-slate-600 text-xs'>A vertical pipe or shaft from the septic tank lid to ground level. Modern risers include screw-down lids with rubber gaskets that create an airtight seal, preventing gas escape. Older risers or poorly sealed lids are a common source of yard odors.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Biomat</dt>
              <dd className='text-slate-600 text-xs'>A bacterial layer that forms on drainfield trench surfaces. When biomat becomes excessively thick from solids entering the drainfield, it traps gases beneath the soil surface, which eventually escape and produce odor in the yard.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Activated Carbon Filter</dt>
              <dd className='text-slate-600 text-xs'>A filter placed on top of the plumbing vent pipe that absorbs hydrogen sulfide and other odorous gases before they enter the air. Needs to be replaced annually and removed during freezing weather to prevent ice blockage.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>P-trap</dt>
              <dd className='text-slate-600 text-xs'>A U-shaped pipe section under sinks and floor drains that holds water to create a seal against sewer gas. When the water in a P-trap evaporates from infrequent use, septic gases can enter the home through that drain.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Distribution Box (D-box)</dt>
              <dd className='text-slate-600 text-xs'>A small underground chamber that divides effluent equally among drainfield lines. A cracked or tilted D-box can cause uneven distribution, overloading one section of the drainfield and producing localized odor.</dd>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className='mb-16'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <Link href='/articles/how-often-pump-septic-tank' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>How Often to Pump Your Septic Tank</h3>
              <p className='text-slate-600 text-xs'>EPA-based pumping schedule by tank size and household size.</p>
            </Link>
            <Link href='/problems/drainfield-failing' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Signs Your Drainfield Is Failing</h3>
              <p className='text-slate-600 text-xs'>Warning signs, causes, and what to do when your drainfield is struggling.</p>
            </Link>
            <Link href='/problems/tank-backing-up' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Tank Backing Up?</h3>
              <p className='text-slate-600 text-xs'>Causes, emergency steps, and how to fix and prevent backups.</p>
            </Link>
            <Link href='/articles/what-can-cannot-flush-septic-system' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>What You Can and Cannot Flush</h3>
              <p className='text-slate-600 text-xs'>The complete list of what&apos;s safe and what damages your system.</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className='bg-slate-900 rounded-2xl p-8 md:p-10 text-center'>
          <h2 className='text-xl md:text-2xl font-bold text-white mb-3'>Need Help Diagnosing the Smell?</h2>
          <p className='text-slate-300 mb-6 max-w-xl mx-auto text-sm'>Connect with licensed septic professionals in your area who can identify the source and fix it fast.</p>
          <Link href='/get-quote' className='inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-sm'>Get Free Quotes</Link>
        </div>
      </article>
    </>
  )
}
