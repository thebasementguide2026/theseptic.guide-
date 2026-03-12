import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Septic Overflow After Rain? Why It Happens and How to Fix It | The Septic Guide',
  description: 'Septic overflow after rain is caused by groundwater saturating your drainfield, stormwater entering your tank, or a system that was already near capacity. Learn the 5 mechanisms, emergency steps, and long-term fixes.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does my septic system overflow when it rains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heavy rain saturates the soil around your drainfield, preventing it from absorbing effluent. Water backs up through the system. Other causes include groundwater infiltrating the tank through cracks or unsealed lids, and stormwater directly connected to the septic system through downspouts, sump pumps, or foundation drains.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I pump my septic tank during heavy rain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The EPA warns against pumping during flooding or when the ground is saturated. An empty tank in waterlogged soil can float out of the ground due to hydrostatic pressure, cracking pipes and destroying connections. Wait until the soil has dried before pumping.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take for a septic system to recover after heavy rain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recovery time depends on soil type. Sandy soil may drain in 1 to 2 days. Loam takes 3 to 5 days. Clay-heavy soil can take 7 days or longer. Continue minimizing water use until drains flow normally. If the system has not recovered within 7 days of dry weather, call a professional.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can connecting downspouts to my septic system cause overflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. This is one of the most common causes of rain-related septic failure. A single downspout can deliver hundreds of gallons per hour during heavy rain, overwhelming a system designed only for household wastewater. Disconnect all downspouts, sump pumps, and foundation drains from the septic system immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I prevent septic overflow during rain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The key preventive steps are: pump your tank on schedule so it has capacity to absorb surges, disconnect all stormwater sources from the septic system, improve surface drainage around the drainfield with grading and swales, seal tank lids and risers to prevent groundwater infiltration, and reduce water use during heavy rain events.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is septic overflow after rain dangerous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Septic overflow contains bacteria, viruses, and parasites that pose serious health risks. Keep children and pets away from any standing water near the septic system or drainfield. Do not use well water until the overflow has fully resolved and the well has been tested. If sewage has entered your home, professional cleanup is recommended.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Septic Overflow After Rain: Why It Happens and How to Fix It',
  description: 'Septic overflow after rain is caused by groundwater saturating your drainfield, stormwater entering your tank, or a system near capacity. Learn the 5 mechanisms, emergency steps, and long-term fixes.',
  image: 'https://theseptic.guide/septicafterrain.jpg',
  datePublished: '2026-03-09',
  dateModified: '2026-03-09',
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

export default function SepticOverflowAfterRain() {
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
          src='/septicafterrain.jpg'
          alt='Septic system overflow after heavy rain with saturated drainfield'
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
            Septic Overflow After Rain<br />
            <span className='text-amber-500'>Why It Happens and How to Fix It</span>
          </h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Septic overflow after rain is caused by groundwater saturating your drainfield, stormwater entering your tank, or a system that was already near capacity. This guide covers the five mechanisms, what to do during an active overflow, and the long-term fixes that prevent it from happening again.
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

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>A properly functioning septic system handles normal rainfall without any problems. But when heavy or prolonged rain overwhelms the system, sewage can back up into your home, surface in your yard, or pool over the drainfield. This is not just unpleasant &mdash; it is a health hazard.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>This guide explains the five mechanisms that cause rain-related septic overflow, what to do during an active overflow, and the specific fixes that prevent it from recurring.</p>
        </div>

        {/* Understanding the Problem */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Understanding</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Understanding Why Rain Causes Septic Overflow</h2>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Mechanism 1: Drainfield Saturation</h3>
              <p className='text-slate-700 text-sm mb-2'>Your drainfield relies on unsaturated soil to absorb and filter effluent. When heavy rain saturates the surrounding soil, there is nowhere for the effluent to go. It backs up through the distribution lines, into the tank, and eventually into the house or onto the ground surface.</p>
              <p className='text-slate-700 text-sm mb-2'>The effluent itself may also rise to the surface over the drainfield, creating wet spots, foul odors, and visible sewage on the lawn.</p>
              <p className='text-amber-700 font-semibold text-sm'><strong>Key indicator:</strong> Problems appear only during or after heavy rain and resolve within a few days of dry weather.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Mechanism 2: Groundwater Infiltration Into the Tank</h3>
              <p className='text-slate-700 text-sm mb-2'>When the water table rises during prolonged rain, groundwater can enter the septic tank through cracked lids, unsealed risers, deteriorated pipe connections, or cracks in the tank walls. This fills the tank with clean water that has no business being there, displacing capacity meant for household wastewater.</p>
              <p className='text-slate-700 text-sm mb-2'>A tank receiving groundwater infiltration may fill faster than it can discharge to the drainfield, causing backup.</p>
              <p className='text-amber-700 font-semibold text-sm'><strong>Key indicator:</strong> The tank refills unusually fast after pumping, even with minimal water use in the home.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Mechanism 3: Stormwater Inflow (Direct Connection)</h3>
              <p className='text-slate-700 text-sm mb-2'>This is the most damaging and most preventable cause. When roof downspouts, sump pumps, foundation drains, or yard drains are connected to the septic system &mdash; either intentionally or by accident &mdash; hundreds of gallons of stormwater per hour can flood the tank during a rain event.</p>
              <p className='text-slate-700 text-sm mb-2'>A single downspout on a 1,500 square foot roof section can deliver over 900 gallons per inch of rainfall. A typical residential septic tank holds 1,000 to 1,500 gallons total.</p>
              <p className='text-amber-700 font-semibold text-sm'><strong>Key indicator:</strong> Opening the tank during rain reveals water flowing into the inlet pipe when no one in the house is using water.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Mechanism 4: Saturated Soil Compaction Over the Drainfield</h3>
              <p className='text-slate-700 text-sm mb-2'>If vehicles, heavy equipment, or even consistent foot traffic crosses the drainfield when the soil is saturated, the soil compacts. Compacted soil loses the air spaces that allow effluent to percolate. This turns a temporary rain problem into a permanent drainfield failure.</p>
              <p className='text-amber-700 font-semibold text-sm'><strong>Key indicator:</strong> Overflow problems that started after a specific event (parking on the drainfield, construction equipment crossing the area) and never fully resolved.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Mechanism 5: System Already at Capacity</h3>
              <p className='text-slate-700 text-sm mb-2'>A tank that is overdue for pumping or a drainfield that is aging and partially clogged may function adequately under normal conditions but fail under the added stress of heavy rain. The rain does not cause the problem &mdash; it exposes it.</p>
              <p className='text-amber-700 font-semibold text-sm'><strong>Key indicator:</strong> Slow drains or occasional odors even during dry weather, with full backup only during rain.</p>
            </div>
          </div>
        </div>

        {/* Emergency Steps */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Emergency Steps</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>What to Do Right Now During an Active Overflow</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>If your septic system is currently backing up during or after rain, take these steps in order.</p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 1: Stop Using Water Immediately</h3>
              <p className='text-slate-700 text-sm'>Every gallon you send into the system makes the problem worse. No laundry, no dishwasher, no long showers, no baths. Use toilets only when absolutely necessary and flush only once.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 2: Do Not Pump the Tank While the Ground Is Saturated</h3>
              <p className='text-slate-700 text-sm'>This is counterintuitive but critical. The EPA specifically warns against pumping during flooding. Pumping an empty tank in saturated soil can cause the tank to <strong>float out of the ground</strong> due to hydrostatic pressure, cracking pipes and destroying connections. Wait until the water table drops and the soil around the tank is no longer saturated.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 3: Check for Sewage Backup Inside the House</h3>
              <p className='text-slate-700 text-sm'>If sewage is coming up through basement floor drains, shower drains, or toilets, plug the lowest drains immediately. A rubber test plug or inflatable drain plug ($10 to $20 at any hardware store) prevents sewage from entering your living space. If sewage has already entered, avoid contact, ventilate the area, and plan for cleanup after the water recedes.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 4: Do Not Drive or Walk on the Drainfield</h3>
              <p className='text-slate-700 text-sm'>Saturated soil compacts easily under weight. Compacted soil loses its ability to absorb effluent, turning a temporary problem into a permanent one. Keep vehicles, heavy equipment, and foot traffic off the drainfield area until it has fully dried.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 5: Wait for the Soil to Dry</h3>
              <p className='text-slate-700 text-sm'>In most cases, the system will recover on its own once the drainfield soil drains and dries. Recovery time depends on soil type &mdash; sandy soil may drain in 1 to 2 days, clay-heavy soil may take 5 to 7 days or longer. Continue minimizing water use until drains are flowing normally.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 6: Call a Professional if Symptoms Persist More Than 7 Days</h3>
              <p className='text-slate-700 text-sm'>If the system does not recover within a week of dry weather, the rain likely exposed an underlying problem &mdash; clogged drainfield, cracked tank, or stormwater inflow &mdash; that needs professional diagnosis. See our <Link href='/problems/tank-backing-up' className='text-amber-700 underline hover:text-amber-800'>septic tank backup guide</Link> for more details.</p>
            </div>
          </div>
        </div>

        {/* Diagnostic Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Diagnosis</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Diagnosing Which Mechanism Is Causing Your Problem</h2>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Observation</th><th className='p-2 text-left font-semibold'>Most Likely Mechanism</th><th className='p-2 text-left font-semibold'>Next Step</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Problems only during/after heavy rain, resolve within days</td><td className='p-2'>Drainfield saturation</td><td className='p-2'>Improve surface drainage (normal unless chronic)</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Problems during even moderate rain</td><td className='p-2'>Groundwater infiltration or stormwater inflow</td><td className='p-2'>Inspect tank for entry points, check for connected stormwater</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Tank refills quickly after pumping with no water use</td><td className='p-2'>Groundwater infiltration into tank</td><td className='p-2'>Inspect and seal tank lids, risers, pipe connections</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Inlet pipe has water flowing when no one is using water</td><td className='p-2'>Stormwater inflow (direct connection)</td><td className='p-2'>Trace and disconnect stormwater source</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Drainfield area is soggy even in dry weather</td><td className='p-2'>Drainfield failure (not just rain-related)</td><td className='p-2'>Drainfield inspection and potential replacement</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Sewage smell in yard during/after rain</td><td className='p-2'>Effluent surfacing from saturated drainfield</td><td className='p-2'>Reduce water use, improve grading, may need drainfield work</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>Problem is new (never happened before in heavy rain)</td><td className='p-2'>New stormwater connection, recent construction, or tank damage</td><td className='p-2'>Investigate recent changes to property drainage</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Long-Term Fixes */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Fixes</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Long-Term Fixes to Prevent Rain-Related Overflow</h2>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>1. Disconnect All Stormwater Sources</h3>
              <p className='text-slate-700 text-sm mb-2'>Verify that no downspouts, sump pumps, foundation drains, or yard drains are connected to the septic system. Redirect all stormwater at least 20 feet away from the tank and drainfield. This is the single most impactful fix for homes that experience overflow during rain.</p>
              <p className='text-amber-700 font-semibold text-sm'>Cost: $0 to $500 depending on rerouting complexity.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>2. Improve Surface Drainage Around the Drainfield</h3>
              <p className='text-slate-700 text-sm mb-2'>Grade the ground around the drainfield so surface water flows away from it, not toward it or over it. Install swales, French drains, or berms uphill of the drainfield to divert runoff. Ensure gutters and downspouts discharge well away from the drainfield area.</p>
              <p className='text-amber-700 font-semibold text-sm'>Cost: $500 to $3,000 for grading and drainage work.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>3. Seal the Septic Tank Against Groundwater</h3>
              <p className='text-slate-700 text-sm mb-2'>Inspect tank lids, risers, and all pipe connections for cracks, gaps, or deteriorated gaskets. Replace rubber gaskets on plastic lids. Seal concrete lid joints with waterproof sealant. Ensure risers have watertight connections to the tank. This prevents groundwater from infiltrating and filling the tank during high water table conditions.</p>
              <p className='text-amber-700 font-semibold text-sm'>Cost: $50 to $400 for sealing and gasket replacement.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>4. Pump on Schedule</h3>
              <p className='text-slate-700 text-sm mb-2'>A tank that is pumped on schedule has reserve capacity to handle the temporary reduction in drainfield absorption during rain. An overdue tank has no buffer. Pump every 3 to 5 years for a typical household, or more frequently for larger families or smaller tanks.</p>
              <p className='text-amber-700 font-semibold text-sm'>Cost: $300 to $600 per pumping. See our <Link href='/articles/how-often-pump-septic-tank' className='text-amber-700 underline hover:text-amber-800'>pumping schedule guide</Link>.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>5. Install an Effluent Filter</h3>
              <p className='text-slate-700 text-sm mb-2'>An effluent filter on the tank outlet prevents solids from reaching the drainfield, extending its life and maintaining its ability to handle rain events. A clogged drainfield is far more vulnerable to rain-related overflow than a healthy one.</p>
              <p className='text-amber-700 font-semibold text-sm'>Cost: $80 to $200 installed. Clean annually during pumping.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>6. Reduce Water Use During Heavy Rain</h3>
              <p className='text-slate-700 text-sm mb-2'>When heavy rain is forecasted, reduce household water use proactively. Delay laundry, run dishwashers only when full, and take shorter showers. This reduces the volume entering the tank during the period when the drainfield is least able to handle it.</p>
              <p className='text-amber-700 font-semibold text-sm'>Cost: Free.</p>
            </div>
          </div>
        </div>

        {/* Cost Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Costs</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Repair and Prevention Costs</h2>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Fix</th><th className='p-2 text-center font-semibold'>DIY or Pro?</th><th className='p-2 text-right font-semibold'>Estimated Cost</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Redirect downspouts away from system</td><td className='p-2 text-center text-slate-700'>DIY</td><td className='p-2 text-right text-slate-700'>$0 &ndash; $100</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Disconnect sump pump from septic</td><td className='p-2 text-center text-slate-700'>DIY or Plumber</td><td className='p-2 text-right text-slate-700'>$0 &ndash; $300</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Replace tank lid gasket</td><td className='p-2 text-center text-slate-700'>DIY</td><td className='p-2 text-right text-slate-700'>$10 &ndash; $30</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Seal tank lids and risers</td><td className='p-2 text-center text-slate-700'>DIY</td><td className='p-2 text-right text-slate-700'>$20 &ndash; $100</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Install effluent filter</td><td className='p-2 text-center text-slate-700'>Professional</td><td className='p-2 text-right text-slate-700'>$80 &ndash; $200</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Pump septic tank</td><td className='p-2 text-center text-slate-700'>Professional</td><td className='p-2 text-right text-slate-700'>$300 &ndash; $600</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Grading and surface drainage work</td><td className='p-2 text-center text-slate-700'>Professional</td><td className='p-2 text-right text-slate-700'>$500 &ndash; $3,000</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Install curtain drain uphill of drainfield</td><td className='p-2 text-center text-slate-700'>Professional</td><td className='p-2 text-right text-slate-700'>$1,000 &ndash; $4,000</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Drainfield rejuvenation</td><td className='p-2 text-center text-slate-700'>Professional</td><td className='p-2 text-right text-slate-700'>$1,000 &ndash; $5,000</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Drainfield replacement</td><td className='p-2 text-center text-red-700 font-semibold'>Professional</td><td className='p-2 text-right text-red-700 font-semibold'>$5,000 &ndash; $15,000</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg'>
            <p className='text-slate-700 text-sm'><strong>Start with the free and low-cost fixes.</strong> Disconnecting stormwater sources, sealing tank lids, and reducing water use during rain cost almost nothing and solve the majority of rain-related overflow problems.</p>
          </div>
        </div>

        {/* FAQ */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>FAQ</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-3'>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Why does my septic system overflow when it rains?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Heavy rain saturates the soil around your drainfield, preventing it from absorbing effluent. Water backs up through the system. Other causes include groundwater infiltrating the tank through cracks or unsealed lids, and stormwater directly connected to the septic system through downspouts, sump pumps, or foundation drains.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Should I pump my septic tank during heavy rain?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>No. The EPA warns against pumping during flooding or when the ground is saturated. An empty tank in waterlogged soil can float out of the ground due to hydrostatic pressure, cracking pipes and destroying connections. Wait until the soil has dried before pumping.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How long does it take for a septic system to recover after heavy rain?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Recovery time depends on soil type. Sandy soil may drain in 1 to 2 days. Loam takes 3 to 5 days. Clay-heavy soil can take 7 days or longer. Continue minimizing water use until drains flow normally. If the system has not recovered within 7 days of dry weather, call a professional.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Can connecting downspouts to my septic system cause overflow?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Yes. This is one of the most common causes of rain-related septic failure. A single downspout can deliver hundreds of gallons per hour during heavy rain, overwhelming a system designed only for household wastewater. Disconnect all downspouts, sump pumps, and foundation drains from the septic system immediately.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How do I prevent septic overflow during rain?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>The key preventive steps are: pump your tank on schedule so it has capacity to absorb surges, disconnect all stormwater sources from the septic system, improve surface drainage around the drainfield with grading and swales, seal tank lids and risers to prevent groundwater infiltration, and reduce water use during heavy rain events.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Is septic overflow after rain dangerous?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Yes. Septic overflow contains bacteria, viruses, and parasites that pose serious health risks. Keep children and pets away from any standing water near the septic system or drainfield. Do not use well water until the overflow has fully resolved and the well has been tested. If sewage has entered your home, professional cleanup is recommended.</div>
            </details>
          </div>
        </div>

        {/* Glossary */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Glossary</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Glossary</h2>
          <div className='grid md:grid-cols-2 gap-x-8 gap-y-3'>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Drainfield Saturation</dt>
              <dd className='text-slate-600 text-xs'>A condition where the soil surrounding the drainfield trenches is fully saturated with water, preventing the absorption of septic effluent. The most common cause of rain-related septic overflow.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Groundwater Infiltration</dt>
              <dd className='text-slate-600 text-xs'>The entry of groundwater into a septic tank through cracks, gaps in lids, or deteriorated pipe connections. Displaces tank capacity and can cause backup during high water table conditions.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Stormwater Inflow</dt>
              <dd className='text-slate-600 text-xs'>The direct entry of rainwater into the septic system through connected downspouts, sump pumps, foundation drains, or yard drains. Can deliver hundreds of gallons per hour and overwhelm the system rapidly.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Hydrostatic Pressure</dt>
              <dd className='text-slate-600 text-xs'>The upward pressure exerted by groundwater on a buried object like a septic tank. When the water table is high and the tank is empty (after pumping), this pressure can lift the tank out of the ground.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Effluent Filter</dt>
              <dd className='text-slate-600 text-xs'>A device installed at the outlet of the septic tank that prevents solids from entering the drainfield. Protects drainfield longevity and maintains its ability to absorb effluent during rain events.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Curtain Drain</dt>
              <dd className='text-slate-600 text-xs'>A shallow trench filled with gravel and perforated pipe installed uphill of the drainfield to intercept and redirect groundwater before it reaches the drainfield area. A common long-term fix for chronic saturation.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Percolation Rate</dt>
              <dd className='text-slate-600 text-xs'>The speed at which water moves through soil, measured in minutes per inch. Sandy soil percolates fast (1-5 min/inch), clay soil percolates slowly (60+ min/inch). Determines how quickly a drainfield recovers after rain.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Distribution Box (D-box)</dt>
              <dd className='text-slate-600 text-xs'>A small underground chamber that divides effluent equally among drainfield lines. A damaged or tilted D-box can overload one section of the drainfield, making it more vulnerable to rain-related failure.</dd>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className='mb-16'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <Link href='/problems/septic-smell-in-yard' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Smell in Your Yard</h3>
              <p className='text-slate-600 text-xs'>8 causes of outdoor septic odor and the specific fix for each one.</p>
            </Link>
            <Link href='/problems/drainfield-failing' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Signs Your Drainfield Is Failing</h3>
              <p className='text-slate-600 text-xs'>Warning signs, causes, and what to do when your drainfield is struggling.</p>
            </Link>
            <Link href='/problems/tank-backing-up' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Tank Backing Up?</h3>
              <p className='text-slate-600 text-xs'>Causes, emergency steps, and how to fix and prevent backups.</p>
            </Link>
            <Link href='/articles/how-often-pump-septic-tank' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>How Often to Pump Your Septic Tank</h3>
              <p className='text-slate-600 text-xs'>EPA-based pumping schedule by tank size and household size.</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className='bg-slate-900 rounded-2xl p-8 md:p-10 text-center'>
          <h2 className='text-xl md:text-2xl font-bold text-white mb-3'>Septic System Overflowing After Rain?</h2>
          <p className='text-slate-300 mb-6 max-w-xl mx-auto text-sm'>Connect with licensed septic professionals in your area who can diagnose the cause and fix it before the next storm.</p>
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
