import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Septic System Repair Cost 2026: Every Repair Priced Out | The Septic Guide',
  description: 'Septic system repairs cost $600 to $3,000 on average. Complete pricing for every repair from $50 filter cleaning to $15,000 drainfield replacement.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to repair a septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The average septic repair costs $600 to $3,000. Minor repairs (filter, lid, baffle) cost $50 to $900. Mid-range repairs (pump, D-box, control panel) cost $300 to $1,500. Major repairs (line repair, root removal, drainfield rejuvenation) cost $500 to $5,000. Full drainfield replacement costs $5,000 to $15,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most expensive septic repair?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drainfield replacement at $5,000 to $15,000 is the most expensive single repair. Complete system replacement (tank plus drainfield) costs $8,000 to $20,000. Both are typically caused by years of deferred maintenance, specifically skipping regular tank pumping.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I repair or replace my septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Apply the 50% rule: if the repair costs more than half of what replacement would cost, replacement is usually the better investment. Also consider the system\'s age, the frequency of recent repairs, and whether the drainfield is still functioning properly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does homeowners insurance cover septic repairs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most standard homeowner policies do not cover septic repairs because they are considered maintenance. Some policies cover damage from sudden events like a tree falling on the tank but not gradual failure from age or neglect. A water backup endorsement may cover damage inside the home from a septic backup but will not cover the septic repair itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I prevent expensive septic repairs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pump your tank every 3 to 5 years, have annual inspections, only flush human waste and toilet paper, avoid pouring chemicals down drains, fix leaky fixtures, keep trees 30 feet from septic components, and never drive or park on the drainfield. These habits prevent the vast majority of expensive failures.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do septic system components last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Concrete tanks last 40+ years. Plastic and fiberglass tanks last 30 to 40 years. Drainfields last 15 to 30 years. Septic pumps last 7 to 15 years. Distribution boxes last 20+ years. Effluent filters need cleaning or replacement every 1 to 3 years. Baffles can last the life of the tank if not damaged.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Septic System Repair Cost 2026: Every Repair Priced Out',
  description: 'Septic system repairs cost $600 to $3,000 on average. Complete pricing for every repair from $50 filter cleaning to $15,000 drainfield replacement.',
  image: 'https://theseptic.guide/septic%20repair.jpg',
  datePublished: '2026-03-06',
  dateModified: '2026-03-06',
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

const repairCostSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Septic System Repair',
  description: 'Cost ranges for common septic system repairs in 2026.',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Septic Repair Cost Ranges',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Effluent filter cleaning or replacement',
        category: 'Routine',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 50,
          maxPrice: 200,
        },
      },
      {
        '@type': 'Offer',
        name: 'Tank lid replacement',
        category: 'Low',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 100,
          maxPrice: 300,
        },
      },
      {
        '@type': 'Offer',
        name: 'Riser installation or repair',
        category: 'Low',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 200,
          maxPrice: 400,
        },
      },
      {
        '@type': 'Offer',
        name: 'Baffle repair or replacement',
        category: 'Medium',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 250,
          maxPrice: 900,
        },
      },
      {
        '@type': 'Offer',
        name: 'Septic pump repair',
        category: 'Medium',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 250,
          maxPrice: 400,
        },
      },
      {
        '@type': 'Offer',
        name: 'Septic pump replacement',
        category: 'Medium',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 500,
          maxPrice: 1300,
        },
      },
      {
        '@type': 'Offer',
        name: 'Control panel replacement',
        category: 'Medium',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 300,
          maxPrice: 500,
        },
      },
      {
        '@type': 'Offer',
        name: 'Distribution box replacement',
        category: 'Medium',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 500,
          maxPrice: 1500,
        },
      },
      {
        '@type': 'Offer',
        name: 'Septic line repair (per linear foot)',
        category: 'High',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 50,
          maxPrice: 250,
        },
      },
      {
        '@type': 'Offer',
        name: 'Cracked tank repair (patching)',
        category: 'High',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 500,
          maxPrice: 850,
        },
      },
      {
        '@type': 'Offer',
        name: 'Root removal from pipes or tank',
        category: 'High',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 600,
          maxPrice: 1600,
        },
      },
      {
        '@type': 'Offer',
        name: 'Drainfield rejuvenation',
        category: 'High',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 1000,
          maxPrice: 5000,
        },
      },
      {
        '@type': 'Offer',
        name: 'Drainfield replacement',
        category: 'Critical',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 5000,
          maxPrice: 15000,
        },
      },
      {
        '@type': 'Offer',
        name: 'Full tank replacement',
        category: 'Critical',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 3000,
          maxPrice: 7000,
        },
      },
      {
        '@type': 'Offer',
        name: 'Complete system replacement (tank + drainfield)',
        category: 'Critical',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 8000,
          maxPrice: 20000,
        },
      },
    ],
  },
}

export default function SepticRepairCostArticle() {
  return (
    <div>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(repairCostSchema) }}
      />

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/septic repair.jpg'
          alt='Septic system repair with excavation on a residential property'
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
            Septic System Repair Cost<br />
            <span className='text-amber-500'>2026: Every Repair Priced Out</span>
          </h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Every specific repair priced out, from a $50 filter cleaning to a $15,000 drainfield replacement, so you know exactly what you&apos;re facing before calling a contractor.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm'>SG</div>
            <div>
              <p className='text-white font-semibold'>The Septic Guide</p>
              <p className='text-slate-400 text-sm'>Updated Mar 2026 &middot; 22 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>
        <p className='text-base text-slate-700 leading-relaxed mb-6'>
          Septic system repairs cost <strong>$600 to $3,000</strong> on average. Minor repairs (filter replacement, baffle repair, lid fix) cost <strong>$100 to $500</strong>. Mid-range repairs (pump replacement, distribution box, line repair) cost <strong>$500 to $1,500</strong>. Major repairs (drainfield rejuvenation, tank crack repair, root removal) cost <strong>$1,000 to $5,000</strong>. Full drainfield replacement costs <strong>$5,000 to $15,000</strong>. Full system replacement costs <strong>$8,000 to $20,000+</strong>.
        </p>
        <p className='text-base text-slate-700 leading-relaxed mb-12'>
          The range is enormous because septic repair covers everything from a $50 filter cleaning to a $15,000 drainfield replacement. This guide prices out every specific repair, so you know exactly what you&apos;re facing before calling a contractor.
        </p>

        {/* Every Septic Repair Priced Out Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>All Repairs</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Every Septic Repair Priced Out</h2>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-semibold'>Repair</th>
                  <th className='p-2 text-center font-semibold'>Cost Range</th>
                  <th className='p-2 text-center font-semibold'>Urgency</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2 font-semibold text-slate-900'>Effluent filter cleaning or replacement</td><td className='p-2 text-center text-slate-700'>$50 &ndash; $200</td><td className='p-2 text-center text-slate-700'>Routine</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 font-semibold text-slate-900'>Tank lid replacement</td><td className='p-2 text-center text-slate-700'>$100 &ndash; $300</td><td className='p-2 text-center text-slate-700'>Low</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 font-semibold text-slate-900'>Riser installation or repair</td><td className='p-2 text-center text-slate-700'>$200 &ndash; $400</td><td className='p-2 text-center text-slate-700'>Low</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 font-semibold text-slate-900'>Baffle repair or replacement</td><td className='p-2 text-center text-slate-700'>$250 &ndash; $900</td><td className='p-2 text-center text-slate-700'>Medium</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 font-semibold text-slate-900'>Septic pump repair</td><td className='p-2 text-center text-slate-700'>$250 &ndash; $400</td><td className='p-2 text-center text-slate-700'>Medium</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 font-semibold text-slate-900'>Septic pump replacement</td><td className='p-2 text-center text-slate-700'>$500 &ndash; $1,300</td><td className='p-2 text-center text-slate-700'>Medium</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 font-semibold text-slate-900'>Control panel replacement</td><td className='p-2 text-center text-slate-700'>$300 &ndash; $500</td><td className='p-2 text-center text-slate-700'>Medium</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 font-semibold text-slate-900'>Distribution box replacement</td><td className='p-2 text-center text-slate-700'>$500 &ndash; $1,500</td><td className='p-2 text-center text-slate-700'>Medium</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 font-semibold text-slate-900'>Septic line repair (per linear foot)</td><td className='p-2 text-center text-slate-700'>$50 &ndash; $250</td><td className='p-2 text-center text-slate-700'>High</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 font-semibold text-slate-900'>Cracked tank repair (patching)</td><td className='p-2 text-center text-slate-700'>$500 &ndash; $850</td><td className='p-2 text-center text-slate-700'>High</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 font-semibold text-slate-900'>Root removal from pipes or tank</td><td className='p-2 text-center text-slate-700'>$600 &ndash; $1,600</td><td className='p-2 text-center text-slate-700'>High</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 font-semibold text-slate-900'>Drainfield rejuvenation</td><td className='p-2 text-center text-slate-700'>$1,000 &ndash; $5,000</td><td className='p-2 text-center text-slate-700'>High</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 font-semibold text-slate-900'>Drainfield replacement</td><td className='p-2 text-center text-slate-700'>$5,000 &ndash; $15,000</td><td className='p-2 text-center text-red-700 font-semibold'>Critical</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 font-semibold text-slate-900'>Full tank replacement</td><td className='p-2 text-center text-slate-700'>$3,000 &ndash; $7,000</td><td className='p-2 text-center text-red-700 font-semibold'>Critical</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 font-semibold text-slate-900'>Complete system replacement (tank + drainfield)</td><td className='p-2 text-center text-slate-700'>$8,000 &ndash; $20,000+</td><td className='p-2 text-center text-red-700 font-semibold'>Critical</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg'>
            <p className='text-slate-700 font-medium text-sm'>This table is the most complete septic repair cost reference available. Bookmark it for when you need it.</p>
          </div>
        </div>

        {/* Minor Repairs */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Minor Repairs</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Minor Repairs ($50 to $500)</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>These are routine maintenance items that are inexpensive and preventable with regular service.</p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Effluent Filter Cleaning or Replacement &mdash; $50 to $200</h3>
              <p className='text-slate-700 text-sm mb-2'>The effluent filter sits at the tank outlet and catches solids before they reach the drainfield. It clogs naturally over time as part of normal operation.</p>
              <p className='text-slate-700 text-sm'>Cleaning is free if you do it yourself during a routine inspection, or $50 to $100 if the pumping crew does it. Replacement filters cost $50 to $200. This should be checked at every pumping visit.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Tank Lid Replacement &mdash; $100 to $300</h3>
              <p className='text-slate-700 text-sm mb-2'>Concrete lids crack. Plastic lid gaskets deteriorate. A damaged lid allows septic gases to escape into your yard and creates a safety hazard.</p>
              <p className='text-slate-700 text-sm'>Replacement costs $100 to $300, depending on material and size. If your lids are buried, consider upgrading to risers at the same time.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Riser Installation or Repair &mdash; $200 to $400</h3>
              <p className='text-slate-700 text-sm mb-2'>Risers bring tank access to ground level. Installing new risers costs $200 to $400 per access point. Repairing a cracked riser or replacing a damaged riser lid is typically $100 to $200.</p>
              <p className='text-slate-700 text-sm'>Risers are the single best investment for reducing future service costs because they eliminate digging fees at every pumping visit.</p>
            </div>
          </div>
        </div>

        {/* Mid-Range Repairs */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Mid-Range</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Mid-Range Repairs ($250 to $1,500)</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>These repairs indicate a component has worn out or failed. They&apos;re more expensive but still far cheaper than system replacement.</p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Baffle Repair or Replacement &mdash; $250 to $900</h3>
              <p className='text-slate-700 text-sm mb-2'>Your tank has two baffles: the inlet baffle directs incoming wastewater downward, and the outlet baffle prevents scum and sludge from exiting the tank. When baffles crack, deteriorate, or break off, solids escape into the drainfield.</p>
              <p className='text-slate-700 text-sm'>This is one of the most important repairs to make promptly because a missing outlet baffle is the fastest path to drainfield failure. The repair involves accessing the tank interior and installing a new PVC or concrete baffle.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Septic Pump Replacement &mdash; $500 to $1,300</h3>
              <p className='text-slate-700 text-sm mb-2'>Systems that rely on a pump to move effluent to the drainfield (mound systems, pressure distribution systems, and any system where the drainfield is higher than the tank) will eventually need pump replacement. Pumps typically last 7 to 15 years.</p>
              <p className='text-slate-700 text-sm'>Repair costs $250 to $400. Full replacement costs $500 to $1,300, including the pump, labor, and electrical connections.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Distribution Box Replacement &mdash; $500 to $1,500</h3>
              <p className='text-slate-700 text-sm mb-2'>The distribution box divides effluent equally among the drainfield lines. When a D-box cracks, shifts, or becomes unleveled, one section of the drainfield gets overloaded while the rest sits idle.</p>
              <p className='text-slate-700 text-sm'>Replacement involves excavating the box, installing a new one, and reconnecting the pipes. According to <a href='https://www.clemson.edu/extension/water/resources/be-septic-safe.html' target='_blank' rel='nofollow noopener noreferrer' className='text-amber-700 underline hover:text-amber-800'>Clemson University&apos;s septic maintenance resources</a>, ensuring equal distribution to all drainfield lines is critical for system longevity.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Control Panel Replacement &mdash; $300 to $500</h3>
              <p className='text-slate-700 text-sm mb-2'>Aerobic systems and pump-based systems have a control panel that monitors system functions, triggers pumps, and activates alarms. When the panel fails, the system can&apos;t regulate itself.</p>
              <p className='text-slate-700 text-sm'>Replacement includes the panel, wiring, and reconfiguration.</p>
            </div>
          </div>
        </div>

        {/* Major Repairs */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Major Repairs</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Major Repairs ($500 to $5,000+)</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>These repairs indicate a significant problem that requires professional diagnosis and intervention.</p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Septic Line Repair &mdash; $50 to $250 Per Linear Foot</h3>
              <p className='text-slate-700 text-sm mb-2'>The sewer line from your house to the tank, or the pipe from the tank to the drainfield, can crack, separate, or be crushed by roots or soil movement. Repair cost depends on the length of damaged pipe, depth, and accessibility.</p>
              <p className='text-slate-700 text-sm'>A camera inspection ($125 to $500) is usually needed first to locate and assess the damage. Total cost for a typical line repair runs $500 to $3,800.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Cracked Tank Repair &mdash; $500 to $850</h3>
              <p className='text-slate-700 text-sm mb-2'>Small cracks in concrete tanks can be repaired by pumping the tank dry and filling the cracks with hydraulic cement or specialized resin. This extends the tank&apos;s life by years.</p>
              <p className='text-slate-700 text-sm'>However, large structural cracks or a tank that&apos;s shifted may require full tank replacement ($3,000 to $7,000). The pumping crew can assess crack severity during a routine pump-out.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Root Removal &mdash; $600 to $1,600</h3>
              <p className='text-slate-700 text-sm mb-2'>Tree roots infiltrate septic pipes and tanks through tiny cracks and joints. Removal uses a mechanical auger, drain cable machine, or hydro-jetting to cut through and clear the roots.</p>
              <p className='text-slate-700 text-sm'>The problem will recur unless the tree is removed ($400 to $1,200 additional) or a root barrier is installed. A camera inspection before and after confirms the roots are fully cleared.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Drainfield Rejuvenation &mdash; $1,000 to $5,000</h3>
              <p className='text-slate-700 text-sm mb-2'>When a drainfield is struggling but hasn&apos;t completely failed, rejuvenation techniques can sometimes restore absorption capacity. Methods include soil aeration (fracturing compacted soil with pressurized air), hydro-jetting drainfield pipes to remove sediment, and bio-remediation (introducing bacteria to break down biomat).</p>
              <p className='text-slate-700 text-sm'>Success depends on the cause and severity of the problem. This costs far less than replacement but doesn&apos;t work in all cases.</p>
            </div>
          </div>
        </div>

        {/* When Repair Isn't Enough */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Replacement</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>When Repair Isn&apos;t Enough: Replacement Costs</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Some problems can&apos;t be fixed. Here&apos;s when replacement becomes necessary and what it costs.</p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Tank Replacement &mdash; $3,000 to $7,000</h3>
              <p className='text-slate-700 text-sm'>Replace the tank when it has major structural failure (large cracks, shifting, or collapse), when it&apos;s undersized for the home (bedrooms added since installation), or when the tank material has reached the end of its lifespan (steel tanks especially). Tank replacement reuses the existing drainfield if it&apos;s still functioning.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Drainfield Replacement &mdash; $5,000 to $15,000</h3>
              <p className='text-slate-700 text-sm'>Replace the drainfield when it has permanently lost absorption capacity from years of receiving solids, when pipes are crushed or collapsed, or when the system has reached the end of its natural lifespan (15 to 30 years). A new perc test and site evaluation ($500 to $1,500) are required. The replacement drainfield is installed in the designated reserve area identified in the original septic permit.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Complete System Replacement &mdash; $8,000 to $20,000+</h3>
              <p className='text-slate-700 text-sm'>When both the tank and drainfield need replacement, or when the entire system is non-compliant with current code, a complete replacement is necessary. Costs vary enormously based on system type. For a complete breakdown, see our <Link href='/cost-guides/septic-system-installation-cost' className='text-amber-700 underline hover:text-amber-800'>septic system installation cost guide</Link>.</p>
            </div>
          </div>
        </div>

        {/* Repair vs Replace */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Decision Guide</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>The Repair vs. Replace Decision</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Use the <strong>50% rule</strong>: if the repair cost exceeds 50% of the replacement cost, replacement is usually the better investment. Here are other factors that tip the decision:</p>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-green-50 border border-green-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-green-900 mb-3'>Lean Toward Repair When:</h3>
              <ul className='space-y-2 text-sm text-green-800'>
                <li>&bull; The system is under 15 years old</li>
                <li>&bull; The problem is a single component (pump, baffle, filter, D-box)</li>
                <li>&bull; The drainfield is still absorbing properly</li>
                <li>&bull; The tank is structurally sound</li>
              </ul>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-red-900 mb-3'>Lean Toward Replacement When:</h3>
              <ul className='space-y-2 text-sm text-red-800'>
                <li>&bull; The system is over 20 years old</li>
                <li>&bull; You&apos;re facing multiple simultaneous failures</li>
                <li>&bull; The drainfield shows signs of permanent failure (standing water in dry weather, sewage surfacing)</li>
                <li>&bull; Repairs have become frequent (more than one per year)</li>
                <li>&bull; The system doesn&apos;t meet current code and you&apos;re selling the home</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Save Money */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Save Money</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How to Save Money on Septic Repairs</h2>
          <div className='space-y-3'>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>1</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Get three quotes</h4>
                <p className='text-slate-600 text-xs'>Repair pricing varies significantly between contractors. Three quotes help you identify fair pricing and avoid overpaying.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>2</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Maintain proactively</h4>
                <p className='text-slate-600 text-xs'>Most expensive repairs are caused by skipped maintenance. Pumping on schedule, cleaning the effluent filter, and following septic-safe practices prevent the majority of failures.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>3</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Install risers</h4>
                <p className='text-slate-600 text-xs'>Every repair that requires accessing the tank is cheaper when risers are already installed. You save $50 to $200 in digging fees per service visit.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>4</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Catch problems early</h4>
                <p className='text-slate-600 text-xs'>A $250 baffle repair today prevents a $10,000 drainfield replacement in two years. Annual inspections ($100 to $300) catch developing problems before they escalate.</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg'>
              <span className='text-amber-700 font-bold mt-0.5 text-sm'>5</span>
              <div>
                <h4 className='font-bold text-slate-900 text-sm'>Ask what&apos;s included</h4>
                <p className='text-slate-600 text-xs'>Some repair quotes include pumping, inspection, and the repair. Others charge each separately. Always ask for an itemized breakdown.</p>
              </div>
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
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How much does it cost to repair a septic system?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>The average septic repair costs $600 to $3,000. Minor repairs (filter, lid, baffle) cost $50 to $900. Mid-range repairs (pump, D-box, control panel) cost $300 to $1,500. Major repairs (line repair, root removal, drainfield rejuvenation) cost $500 to $5,000. Full drainfield replacement costs $5,000 to $15,000.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What is the most expensive septic repair?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Drainfield replacement at $5,000 to $15,000 is the most expensive single repair. Complete system replacement (tank plus drainfield) costs $8,000 to $20,000. Both are typically caused by years of deferred maintenance, specifically skipping regular tank pumping.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Should I repair or replace my septic system?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Apply the 50% rule: if the repair costs more than half of what replacement would cost, replacement is usually the better investment. Also consider the system&apos;s age, the frequency of recent repairs, and whether the drainfield is still functioning properly.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Does homeowners insurance cover septic repairs?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Most standard homeowner policies do not cover septic repairs because they are considered maintenance. Some policies cover damage from sudden events like a tree falling on the tank but not gradual failure from age or neglect. A water backup endorsement may cover damage inside the home from a septic backup but will not cover the septic repair itself.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How can I prevent expensive septic repairs?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Pump your tank every 3 to 5 years, have annual inspections, only flush human waste and toilet paper, avoid pouring chemicals down drains, fix leaky fixtures, keep trees 30 feet from septic components, and never drive or park on the drainfield. These habits prevent the vast majority of expensive failures.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How long do septic system components last?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Concrete tanks last 40+ years. Plastic and fiberglass tanks last 30 to 40 years. Drainfields last 15 to 30 years. Septic pumps last 7 to 15 years. Distribution boxes last 20+ years. Effluent filters need cleaning or replacement every 1 to 3 years. Baffles can last the life of the tank if not damaged.</div>
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
              <dt className='font-bold text-slate-900 text-sm'>Baffle</dt>
              <dd className='text-slate-600 text-xs'>A T-shaped pipe fitting at the inlet and outlet of the septic tank. Baffles prevent solids from leaving the tank. A damaged outlet baffle is one of the most important repairs to address because it directly causes drainfield damage.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Distribution box (D-box)</dt>
              <dd className='text-slate-600 text-xs'>A small chamber that divides effluent equally among drainfield lines. When a D-box fails, one section of the drainfield is overloaded while others sit idle, leading to uneven failure.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Effluent filter</dt>
              <dd className='text-slate-600 text-xs'>A screen at the tank outlet that catches suspended solids. Requires regular cleaning every 1 to 3 years and occasional replacement ($50 to $200). The cheapest form of drainfield protection available.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Drainfield rejuvenation</dt>
              <dd className='text-slate-600 text-xs'>Techniques used to restore a struggling drainfield&apos;s absorption capacity without full replacement. Includes soil aeration, hydro-jetting, and bio-remediation. Costs $1,000 to $5,000 and works in some but not all cases.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Hydro-jetting</dt>
              <dd className='text-slate-600 text-xs'>High-pressure water cleaning used to clear roots, sediment, and buildup from septic pipes and drainfield lines. More effective than mechanical snaking for thorough cleaning.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Biomat</dt>
              <dd className='text-slate-600 text-xs'>The bacterial layer on the drainfield trench surfaces. Normal in thin layers, but excessive biomat from solid overflow seals the soil and causes drainfield failure. Rejuvenation targets biomat reduction.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>50% rule</dt>
              <dd className='text-slate-600 text-xs'>A decision guideline for repair vs. replacement. If the cost of repair exceeds 50% of the cost of full replacement, replacement is usually the more cost-effective long-term choice.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Camera inspection</dt>
              <dd className='text-slate-600 text-xs'>A video scope is inserted into septic pipes to visually assess pipe condition, locate cracks, root intrusion, or blockages. Costs $125 to $500 and is essential for accurate diagnosis before committing to a repair.</dd>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className='mb-16'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <Link href='/cost-guides/septic-system-installation-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic System Installation Cost 2026</h3>
              <p className='text-slate-600 text-xs'>Complete price breakdown by system type, materials, and hidden costs.</p>
            </Link>
            <Link href='/articles/septic-tank-pumping-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Tank Pumping Cost 2026</h3>
              <p className='text-slate-600 text-xs'>What pumping actually costs by tank size, region, and hidden fees.</p>
            </Link>
            <Link href='/problems/drainfield-failing' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Signs Your Drainfield Is Failing</h3>
              <p className='text-slate-600 text-xs'>Warning signs, causes, and what to do about drainfield failure.</p>
            </Link>
            <Link href='/articles/complete-septic-guide' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Complete Septic System Guide</h3>
              <p className='text-slate-600 text-xs'>How your system works, types, maintenance, and warning signs.</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className='bg-slate-900 rounded-2xl p-8 md:p-10 text-center'>
          <h2 className='text-xl md:text-2xl font-bold text-white mb-3'>Need a Septic Repair Quote?</h2>
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
