import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
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
        text: 'Rain-related septic overflow happens through one or more of five distinct mechanisms, and identifying which one applies to your property determines the correct fix. The most common cause is drainfield saturation, where heavy rain raises the soil moisture to the point where effluent cannot percolate, backing up through the system. Groundwater infiltration through cracked lids, deteriorated pipe connections, or unsealed risers fills the tank with water that displaces capacity meant for household wastewater. Stormwater inflow from connected downspouts, sump pumps, or foundation drains can deliver hundreds of gallons per hour directly into the tank, overwhelming it almost immediately. In many cases the rain does not cause the problem outright but exposes a system that was already near capacity from an overdue pump-out or a partially clogged drainfield. Use the diagnosis table in this guide to match your specific symptoms to the most likely mechanism before deciding on a fix.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I pump my septic tank during heavy rain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, and pumping during active flooding or saturated soil conditions can cause serious damage that is more expensive than the overflow itself. The EPA specifically warns against pumping when the ground is saturated because an empty tank in waterlogged soil is subject to hydrostatic pressure from surrounding groundwater that can literally lift the tank out of the ground, cracking inlet and outlet pipes and destroying connections in the process. The cost of repairing a floated tank and its broken pipe connections typically runs $3,000 to $8,000 or more, far exceeding the cost of simply waiting for conditions to improve. Wait until the water table has dropped and the soil around the tank is no longer visibly saturated before scheduling a pump-out. If you need to confirm the soil has dried sufficiently, insert a metal rod or probe into the ground near the tank — if it meets significant resistance rather than sliding through easily, the soil is still too wet. See the septic tank pumping cost guide at https://theseptic.guide/articles/septic-tank-pumping-cost for what a standard pump-out costs once conditions allow.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take for a septic system to recover after heavy rain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recovery time depends primarily on soil type and how much rain fell, with secondary factors including the slope of the property, the depth of the drainfield trenches, and whether the system was already stressed before the rain event. Sandy soil drains quickly and a system in sandy soil may recover in 1 to 2 days after rain stops. Loam takes 3 to 5 days. Clay-heavy soil can take 7 days or longer because it holds water and drains slowly even after surface conditions appear dry. Continue minimizing household water use throughout the recovery period to give the drainfield maximum opportunity to drain without additional effluent input. If the system has not returned to normal within 7 days of dry weather, the rain likely exposed an underlying problem — a partially failed drainfield, stormwater inflow, or groundwater infiltration — that will not resolve on its own. Call a septic professional for a diagnostic inspection if symptoms persist beyond one week of dry conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can connecting downspouts to my septic system cause overflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and this is one of the most common and most easily preventable causes of rain-related septic overflow. A single downspout on a 1,500 square foot roof section can deliver over 900 gallons per inch of rainfall, meaning a 2-inch rain event sends nearly 1,800 gallons through that one downspout alone into a tank designed to hold 1,000 to 1,500 gallons total. The same problem occurs with sump pumps, foundation drains, and yard drains that are connected to the septic system either intentionally during original construction or accidentally during subsequent renovations. The key diagnostic test is opening the tank during rain and checking whether water is flowing into the inlet pipe when nobody in the house is using water. If it is, trace the inlet pipe back to find the stormwater connection and redirect it at least 20 feet away from the tank and drainfield. This fix costs $0 to $300 in most cases and can completely eliminate rain-related overflow if stormwater inflow is the primary cause.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I prevent septic overflow during rain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prevention requires addressing all the pathways through which rain can add volume to a system sized only for household wastewater. Start with the free and low-cost fixes: verify that no downspouts, sump pumps, or foundation drains are connected to the septic system, and redirect any that are. Grade the ground around the drainfield so surface water flows away from it rather than toward it. Keep the tank pumped on schedule so it has reserve capacity to absorb the temporary reduction in drainfield absorption that occurs during any rain event. Seal tank lids, riser connections, and pipe penetrations to prevent groundwater infiltration when the water table rises. During periods of heavy rain, reduce household water use proactively by delaying laundry, running the dishwasher only when full, and taking shorter showers. See the septic system maintenance checklist at https://theseptic.guide/maintenance/septic-system-maintenance-checklist for the full prevention schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is septic overflow after rain dangerous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, septic overflow is a serious health hazard that requires immediate precautions for anyone on the property. Septic effluent contains bacteria including E. coli and Salmonella, viruses, and parasites that can cause gastrointestinal illness, skin infections, and more serious conditions with direct contact or ingestion. Keep children and pets completely away from any standing water near the septic system, drainfield, or yard until the overflow has fully resolved and the area has dried. Do not use well water until the overflow has resolved and the well has been tested by a certified laboratory, as surface overflow can contaminate shallow wells if the overflow reaches the well casing. If sewage has entered your home through floor drains or fixtures, avoid contact with the affected areas, ventilate thoroughly, and arrange for professional cleanup rather than attempting to clean sewage-contaminated areas yourself. Contact your local health department if overflow is reaching a neighboring property, waterway, or public area, as this may be a reportable event under local environmental regulations.',
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

              <Breadcrumbs items={[{ label: 'Problems', href: '/problems' }, { label: 'Septic Overflow After Rain' }]} />
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
          <p className='text-lg text-slate-700 leading-relaxed mb-12'>Septic overflow after rain is a specific failure event in which rainfall overwhelms one or more components of an on-site septic system that was functioning adequately under normal dry-weather conditions. It is distinct from a standard septic backup caused by a full tank or drainfield failure because the triggering factor is external water volume rather than internal system degradation, though rain frequently exposes pre-existing weaknesses that dry conditions were masking. The overflow occurs because a septic system is designed to handle only the wastewater generated inside the home, and any pathway that allows rainwater, groundwater, or stormwater runoff to enter the system adds volume the system was never sized to process. Understanding which of the five entry pathways is responsible for a specific overflow event determines whether the fix is free (disconnecting a downspout), inexpensive (sealing a tank lid), or significant (drainfield replacement).</p>
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

        {/* Prevention Priority Guide */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Prevention</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Prevention Priority Guide</h2>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-800 text-white'>
                  <th className='text-left p-3 font-bold'>Your Situation</th>
                  <th className='text-left p-3 font-bold'>Priority Action</th>
                  <th className='text-left p-3 font-bold'>Cost</th>
                  <th className='text-left p-3 font-bold'>When to Do It</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                <tr className='bg-white'>
                  <td className='p-3 font-medium text-slate-900'>Downspouts, sump pump, or foundation drains connected to septic</td>
                  <td className='p-3 text-slate-700'>Disconnect and redirect immediately</td>
                  <td className='p-3 text-slate-700'>$0 to $300</td>
                  <td className='p-3 text-slate-700'>Before the next rain event</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='p-3 font-medium text-slate-900'>Tank not pumped in 3 or more years</td>
                  <td className='p-3 text-slate-700'>Schedule pump-out as soon as ground is dry</td>
                  <td className='p-3 text-slate-700'>$300 to $600</td>
                  <td className='p-3 text-slate-700'>Within 30 days</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 font-medium text-slate-900'>Tank lids, risers, or pipe connections unsealed or cracked</td>
                  <td className='p-3 text-slate-700'>Seal with waterproof sealant, replace gaskets</td>
                  <td className='p-3 text-slate-700'>$50 to $400</td>
                  <td className='p-3 text-slate-700'>Before the next rain event</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='p-3 font-medium text-slate-900'>No effluent filter installed</td>
                  <td className='p-3 text-slate-700'>Install effluent filter at tank outlet</td>
                  <td className='p-3 text-slate-700'>$80 to $200</td>
                  <td className='p-3 text-slate-700'>At next pump-out visit</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 font-medium text-slate-900'>Surface water drains toward drainfield</td>
                  <td className='p-3 text-slate-700'>Regrade yard and install swales to redirect runoff</td>
                  <td className='p-3 text-slate-700'>$500 to $3,000</td>
                  <td className='p-3 text-slate-700'>Before wet season</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='p-3 font-medium text-slate-900'>Drainfield sits at base of slope</td>
                  <td className='p-3 text-slate-700'>Install curtain drain uphill of drainfield</td>
                  <td className='p-3 text-slate-700'>$1,000 to $4,000</td>
                  <td className='p-3 text-slate-700'>Before wet season</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 font-medium text-slate-900'>Overflow only during extreme rain, system otherwise healthy</td>
                  <td className='p-3 text-slate-700'>Reduce water use proactively during heavy rain forecasts</td>
                  <td className='p-3 text-slate-700'>$0</td>
                  <td className='p-3 text-slate-700'>Every significant rain event</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='p-3 font-medium text-slate-900'>Overflow recurring after every moderate rain</td>
                  <td className='p-3 text-slate-700'>Professional inspection to evaluate drainfield condition</td>
                  <td className='p-3 text-slate-700'>$300 to $600</td>
                  <td className='p-3 text-slate-700'>Immediately</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 font-medium text-slate-900'>Drainfield soggy even in dry weather</td>
                  <td className='p-3 text-slate-700'>Drainfield failure evaluation and likely replacement</td>
                  <td className='p-3 text-slate-700'>$5,000 to $15,000</td>
                  <td className='p-3 text-slate-700'>Immediately</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='p-3 font-medium text-slate-900'>Distribution box cracked or tilted</td>
                  <td className='p-3 text-slate-700'>D-box inspection, leveling, or replacement</td>
                  <td className='p-3 text-slate-700'>$200 to $500</td>
                  <td className='p-3 text-slate-700'>Within 60 days</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 font-medium text-slate-900'>Overflow started after nearby construction or excavation</td>
                  <td className='p-3 text-slate-700'>Check for new stormwater connections or soil compaction</td>
                  <td className='p-3 text-slate-700'>$0 to $1,000</td>
                  <td className='p-3 text-slate-700'>Immediately</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='p-3 font-medium text-slate-900'>Well located near drainfield overflow area</td>
                  <td className='p-3 text-slate-700'>Well water testing after every overflow event</td>
                  <td className='p-3 text-slate-700'>$50 to $150 per test</td>
                  <td className='p-3 text-slate-700'>After each overflow until resolved</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 font-medium text-slate-900'>Buying a home with history of rain-related overflow</td>
                  <td className='p-3 text-slate-700'>Full septic inspection before closing</td>
                  <td className='p-3 text-slate-700'>$300 to $600</td>
                  <td className='p-3 text-slate-700'>Before making an offer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>FAQ</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-3'>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Why does my septic system overflow when it rains?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Rain-related septic overflow happens through one or more of five distinct mechanisms, and identifying which one applies to your property determines the correct fix. The most common cause is drainfield saturation, where heavy rain raises the soil moisture to the point where effluent cannot percolate, backing up through the system. Groundwater infiltration through cracked lids, deteriorated pipe connections, or unsealed risers fills the tank with water that displaces capacity meant for household wastewater. Stormwater inflow from connected downspouts, sump pumps, or foundation drains can deliver hundreds of gallons per hour directly into the tank, overwhelming it almost immediately. In many cases the rain does not cause the problem outright but exposes a system that was already near capacity from an overdue pump-out or a partially clogged drainfield. Use the diagnosis table in this guide to match your specific symptoms to the most likely mechanism before deciding on a fix.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Should I pump my septic tank during heavy rain?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>No, and pumping during active flooding or saturated soil conditions can cause serious damage that is more expensive than the overflow itself. The EPA specifically warns against pumping when the ground is saturated because an empty tank in waterlogged soil is subject to hydrostatic pressure from surrounding groundwater that can literally lift the tank out of the ground, cracking inlet and outlet pipes and destroying connections in the process. The cost of repairing a floated tank and its broken pipe connections typically runs $3,000 to $8,000 or more, far exceeding the cost of simply waiting for conditions to improve. Wait until the water table has dropped and the soil around the tank is no longer visibly saturated before scheduling a pump-out. If you need to confirm the soil has dried sufficiently, insert a metal rod or probe into the ground near the tank &mdash; if it meets significant resistance rather than sliding through easily, the soil is still too wet. See our <Link href='/articles/septic-tank-pumping-cost' className='text-amber-700 underline hover:text-amber-900'>septic tank pumping cost guide</Link> for what a standard pump-out costs once conditions allow.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How long does it take for a septic system to recover after heavy rain?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Recovery time depends primarily on soil type and how much rain fell, with secondary factors including the slope of the property, the depth of the drainfield trenches, and whether the system was already stressed before the rain event. Sandy soil drains quickly and a system in sandy soil may recover in 1 to 2 days after rain stops. Loam takes 3 to 5 days. Clay-heavy soil can take 7 days or longer because it holds water and drains slowly even after surface conditions appear dry. Continue minimizing household water use throughout the recovery period to give the drainfield maximum opportunity to drain without additional effluent input. If the system has not returned to normal within 7 days of dry weather, the rain likely exposed an underlying problem &mdash; a partially failed drainfield, stormwater inflow, or groundwater infiltration &mdash; that will not resolve on its own. Call a septic professional for a diagnostic inspection if symptoms persist beyond one week of dry conditions.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Can connecting downspouts to my septic system cause overflow?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Yes, and this is one of the most common and most easily preventable causes of rain-related septic overflow. A single downspout on a 1,500 square foot roof section can deliver over 900 gallons per inch of rainfall, meaning a 2-inch rain event sends nearly 1,800 gallons through that one downspout alone into a tank designed to hold 1,000 to 1,500 gallons total. The same problem occurs with sump pumps, foundation drains, and yard drains that are connected to the septic system either intentionally during original construction or accidentally during subsequent renovations. The key diagnostic test is opening the tank during rain and checking whether water is flowing into the inlet pipe when nobody in the house is using water. If it is, trace the inlet pipe back to find the stormwater connection and redirect it at least 20 feet away from the tank and drainfield. This fix costs $0 to $300 in most cases and can completely eliminate rain-related overflow if stormwater inflow is the primary cause.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How do I prevent septic overflow during rain?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Prevention requires addressing all the pathways through which rain can add volume to a system sized only for household wastewater. Start with the free and low-cost fixes: verify that no downspouts, sump pumps, or foundation drains are connected to the septic system, and redirect any that are. Grade the ground around the drainfield so surface water flows away from it rather than toward it. Keep the tank pumped on schedule so it has reserve capacity to absorb the temporary reduction in drainfield absorption that occurs during any rain event. Seal tank lids, riser connections, and pipe penetrations to prevent groundwater infiltration when the water table rises. During periods of heavy rain, reduce household water use proactively by delaying laundry, running the dishwasher only when full, and taking shorter showers. See our <Link href='/maintenance/septic-system-maintenance-checklist' className='text-amber-700 underline hover:text-amber-900'>septic system maintenance checklist</Link> for the full prevention schedule.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Is septic overflow after rain dangerous?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Yes, septic overflow is a serious health hazard that requires immediate precautions for anyone on the property. Septic effluent contains bacteria including E. coli and Salmonella, viruses, and parasites that can cause gastrointestinal illness, skin infections, and more serious conditions with direct contact or ingestion. Keep children and pets completely away from any standing water near the septic system, drainfield, or yard until the overflow has fully resolved and the area has dried. Do not use well water until the overflow has resolved and the well has been tested by a certified laboratory, as surface overflow can contaminate shallow wells if the overflow reaches the well casing. If sewage has entered your home through floor drains or fixtures, avoid contact with the affected areas, ventilate thoroughly, and arrange for professional cleanup rather than attempting to clean sewage-contaminated areas yourself. Contact your local health department if overflow is reaching a neighboring property, waterway, or public area, as this may be a reportable event under local environmental regulations.</div>
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
              <dd className='text-slate-600 text-xs'>A condition where the soil surrounding the drainfield trenches is fully saturated with water, leaving no available pore space for septic effluent to percolate, and causing effluent to back up through the distribution lines into the tank and eventually into the home or onto the ground surface. Temporary saturation from a single rain event typically resolves within 1 to 7 days depending on soil type, while chronic saturation from a high water table or compacted soil indicates a drainfield that needs professional evaluation. See our <Link href='/problems/drainfield-failing' className='text-amber-700 underline hover:text-amber-900'>signs your drainfield is failing guide</Link> to distinguish temporary saturation from permanent drainfield failure.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Groundwater Infiltration</dt>
              <dd className='text-slate-600 text-xs'>The entry of subsurface groundwater into a septic tank through structural vulnerabilities including cracked lids, deteriorated rubber gaskets on riser connections, corroded pipe penetrations, or hairline cracks in the tank walls that widen over time. Groundwater infiltration displaces the tank&apos;s designed holding capacity with water that contributes nothing to the treatment process, causing the tank to fill faster than normal and pushing effluent toward the drainfield before adequate settling has occurred. Sealing tank lids, replacing gaskets, and repairing pipe penetrations costs $50 to $400 and eliminates this pathway entirely in most cases. See our <Link href='/articles/how-to-find-your-septic-tank' className='text-amber-700 underline hover:text-amber-900'>how to find your septic tank guide</Link> for locating access points to inspect during dry conditions.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Stormwater Inflow</dt>
              <dd className='text-slate-600 text-xs'>The direct entry of rainwater into the septic system through intentional or accidental connections between stormwater drainage components and the septic inlet pipe, including roof downspouts, sump pump discharge lines, foundation drain tiles, and yard catch basins. A single connected downspout can deliver more water in one hour during a heavy rain event than a household generates in an entire day, instantly overwhelming the tank&apos;s capacity and pushing partially settled effluent directly into the drainfield. Tracing and disconnecting all stormwater connections costs $0 to $300 in most residential situations and is the highest-return fix for homes that experience overflow specifically during rain events.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Hydrostatic Pressure</dt>
              <dd className='text-slate-600 text-xs'>The upward force exerted by groundwater on a buried structure such as a septic tank, which acts in proportion to the depth and volume of saturated soil surrounding the tank. When a septic tank is emptied by pumping while the surrounding soil is saturated, the tank loses the weight of its contents that was counteracting the upward hydrostatic force, and a lightweight plastic or older concrete tank can float upward out of the ground, shearing the inlet and outlet pipes. This is why the EPA recommends against pumping during flooding or saturated soil conditions, and why waiting for soil to dry before scheduling a post-rain pump-out is critical. See our <Link href='/comparisons/concrete-vs-plastic-vs-fiberglass-septic-tanks' className='text-amber-700 underline hover:text-amber-900'>concrete vs plastic vs fiberglass septic tanks guide</Link> for how tank material affects flotation risk.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Effluent Filter</dt>
              <dd className='text-slate-600 text-xs'>A cartridge filter installed at the outlet of the septic tank that catches suspended solids before they can flow into the drainfield distribution system, protecting the drainfield&apos;s percolation capacity over its lifespan. During rain events when the drainfield is under saturation stress, an effluent filter prevents the additional solid load that would otherwise reach already-stressed soil and accelerate clogging. Filters cost $80 to $200 installed and require cleaning annually, either as a DIY task or included in a professional pumping visit. See our <Link href='/maintenance/septic-system-maintenance-checklist' className='text-amber-700 underline hover:text-amber-900'>septic system maintenance checklist</Link> for the filter cleaning schedule.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Curtain Drain</dt>
              <dd className='text-slate-600 text-xs'>A shallow trench filled with gravel and perforated pipe installed uphill of the drainfield to intercept groundwater and surface runoff before it reaches the drainfield area and raises the local water table. Curtain drains redirect intercepted water to a safe discharge point downhill and away from the septic system, reducing the frequency and severity of drainfield saturation events during heavy rain. Installation costs $1,000 to $4,000 depending on trench length and discharge routing, and is one of the most effective long-term fixes for properties where the drainfield sits at the base of a slope that channels runoff toward it. See our <Link href='/cost-guides/drainfield-replacement-cost' className='text-amber-700 underline hover:text-amber-900'>drainfield replacement cost guide</Link> for context on how curtain drain installation compares in cost to drainfield replacement.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Percolation Rate</dt>
              <dd className='text-slate-600 text-xs'>The speed at which water moves downward through soil, measured in minutes per inch of drop, which determines how quickly a drainfield recovers after a rain event and how much effluent it can process per day under normal conditions. Sandy soil percolates at 1 to 5 minutes per inch and recovers from saturation within 1 to 2 days, while clay-heavy soil percolates at 60 minutes per inch or slower and may take a week or more to drain after a significant rain event. A site&apos;s percolation rate is measured by a licensed soil evaluator during the initial perc test and determines the required drainfield size at installation. See our <Link href='/comparisons/aerobic-vs-anaerobic-septic-systems' className='text-amber-700 underline hover:text-amber-900'>aerobic vs anaerobic septic systems guide</Link> for how a failed perc test affects system type requirements.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Distribution Box (D-box)</dt>
              <dd className='text-slate-600 text-xs'>A small underground concrete or plastic chamber that receives effluent from the septic tank outlet and divides it equally among the multiple drainfield lateral lines through a series of outlet ports at the same elevation. A cracked, tilted, or partially blocked D-box distributes effluent unevenly, overloading one or two lateral lines while underusing others, which concentrates saturation stress in a small area of the drainfield and makes those lines fail sooner and more severely during rain events. D-box inspection and leveling costs $200 to $500 and is a worthwhile diagnostic step for any property experiencing chronic one-area overflow or persistent wet spots in only part of the drainfield.</dd>
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
