import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Septic System Dos and Don\u2019ts: The Rules That Protect a $15,000 Investment | The Septic Guide',
  description: 'Every do and don\u2019t for septic system owners with specific damage and repair costs for each violation. Flushing rules, chemical warnings, drainfield protection, and daily habits.',
  openGraph: {
    title: 'Septic System Dos and Don\u2019ts: The Rules That Protect a $15,000 Investment',
    description: 'Every do and don\u2019t for septic system owners with specific damage and repair costs for each violation. Flushing rules, chemical warnings, drainfield protection, and daily habits.',
    url: 'https://theseptic.guide/guides/septic-dos-and-donts',
    siteName: 'The Septic Guide',
    type: 'article',
    images: [{ url: 'https://theseptic.guide/dos and donts.jpg', width: 1200, height: 630, alt: 'Septic System Dos and Donts Guide' }],
  },
  alternates: { canonical: 'https://theseptic.guide/guides/septic-dos-and-donts' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Septic System Dos and Don\u2019ts: The Rules That Protect a $15,000 Investment',
  description: 'Every do and don\u2019t for septic system owners with specific damage and repair costs for each violation.',
  image: 'https://theseptic.guide/dos and donts.jpg',
  datePublished: '2026-03-09',
  dateModified: '2026-03-09',
  author: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
  publisher: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    url: 'https://theseptic.guide',
    logo: { '@type': 'ImageObject', url: 'https://theseptic.guide/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://theseptic.guide/guides/septic-dos-and-donts' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can I use Drano if I have a septic system?', acceptedAnswer: { '@type': 'Answer', text: 'No. Drano contains sodium hydroxide and bleach, both of which kill the bacteria your septic tank needs to break down waste. A single use will not destroy your system, but it suppresses bacterial activity for days. Repeated use causes chronic underperformance. Use a plunger, drain snake, or enzyme-based cleaner instead.' } },
    { '@type': 'Question', name: 'Are flushable wipes safe for septic systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. Despite the marketing, flushable wipes do not disintegrate like toilet paper. They accumulate in the tank, wrap around pump impellers, and can block outlet baffles.' } },
    { '@type': 'Question', name: 'Can I use bleach to clean my toilets and showers?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, in normal cleaning amounts. A cap of bleach in the toilet bowl or a standard cleaning session will not harm your tank. What causes damage is pouring large amounts directly down the drain.' } },
    { '@type': 'Question', name: 'How often should I pump my septic tank?', acceptedAnswer: { '@type': 'Answer', text: 'Every 3 to 5 years for a typical household. The exact interval depends on tank size, household size, and water usage.' } },
    { '@type': 'Question', name: 'Can I plant a vegetable garden over my drainfield?', acceptedAnswer: { '@type': 'Answer', text: 'This is generally not recommended. Root vegetables can come into contact with inadequately treated effluent, creating a health risk. The safest drainfield cover is grass.' } },
    { '@type': 'Question', name: 'What happens if I never pump my septic tank?', acceptedAnswer: { '@type': 'Answer', text: 'Sludge and scum accumulate until they overflow the outlet baffle and enter the drainfield. Solids clog the drainfield pipes and soil pores. You will need a full drainfield replacement costing $5,000 to $15,000.' } },
    { '@type': 'Question', name: 'Is it OK to use a garbage disposal with a septic system?', acceptedAnswer: { '@type': 'Answer', text: 'Technically yes, but with caution. Garbage disposals increase sludge accumulation by 30 to 50 percent. If you use one regularly, expect to pump every 2 to 3 years instead of every 3 to 5.' } },
    { '@type': 'Question', name: 'Should I add bacteria or enzyme treatments to my tank?', acceptedAnswer: { '@type': 'Answer', text: 'Your tank naturally produces the bacteria it needs. The EPA states that additives are not necessary. Enzyme-based treatments can help recover bacterial populations after heavy antibiotic use or chemical exposure.' } },
  ],
}

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Septic System Harmful Items and Chemicals Damage Reference 2026',
  description: 'Comparison of items and chemicals that damage septic systems, including the specific damage each causes and estimated repair costs.',
  url: 'https://theseptic.guide/guides/septic-dos-and-donts',
  license: 'https://creativecommons.org/licenses/by/4.0/',
  creator: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
  distribution: [{ '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: 'https://theseptic.guide/guides/septic-dos-and-donts' }],
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Item', description: 'The harmful item or chemical' },
    { '@type': 'PropertyValue', name: 'Damage Caused', description: 'Specific damage to the septic system' },
    { '@type': 'PropertyValue', name: 'Consequence', description: 'Repair cost or long-term effect' },
    { '@type': 'PropertyValue', name: 'Duration', description: 'How long the damage lasts' },
  ],
}

export default function SepticDosAndDontsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />

              <Breadcrumbs />
      {/* Hero */}
      <section className="relative w-full" style={{ minHeight: '420px' }}>
        <Image src="/dos and donts.jpg" alt="Septic System Dos and Donts" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-amber-500 text-white mb-3">Guide</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-3">
            Septic System Dos and Don&rsquo;ts
            <span className="block text-amber-400">The Rules That Protect a $15,000 Investment</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">Your septic system costs $3,000 to $20,000 to install and $5,000 to $15,000 to replace the drainfield alone. The difference between a system that lasts 30 years and one that fails at year 12 comes down to daily habits.</p>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white text-sm font-bold">SG</div>
            <div>
              <p className="text-white text-sm font-medium">The Septic Guide</p>
              <p className="text-gray-300 text-xs">Updated Mar 2026 &middot; 30 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-lg text-slate-700 mb-6 leading-relaxed">Most of these habits are simple. The problem is that nobody explains why each rule matters or what it actually costs when you break it. This guide covers every do and don&rsquo;t for septic system owners, organized by category, with the specific damage and repair cost for each violation. Bookmark it and share it with everyone in your household.</p>
        <p className="text-lg text-slate-700 mb-10 leading-relaxed">If you are new to septic ownership, start with our <Link href="/articles/complete-septic-guide" className="text-amber-700 underline hover:text-amber-900">complete guide to how septic systems work</Link>.</p>
        {/* THE DOS */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Dos: What to Do</h2>

          {/* Maintenance Dos */}
          <h3 className="text-xl font-bold text-amber-600 mb-4 mt-8">Maintenance Dos</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4"><h4 className="font-bold text-slate-900">Do pump the tank on schedule</h4><p className="text-slate-600 mt-1">Every 3 to 5 years for most households. This is the single most important thing you can do. When you skip pumping, solids escape the tank and clog your drainfield. Drainfield clogs are irreversible and cost $5,000 to $15,000 to fix. Pumping costs $300 to $600. See our <Link href="/articles/how-often-pump-septic-tank" className="text-amber-700 underline hover:text-amber-900">pumping schedule guide</Link>.</p></div>
            <div className="border-l-4 border-green-500 pl-4"><h4 className="font-bold text-slate-900">Do get regular inspections</h4><p className="text-slate-600 mt-1">The EPA recommends inspecting conventional systems at least every 3 years and systems with mechanical components every year. An inspection costs $100 to $400. See our <Link href="/cost-guides/septic-inspection-cost" className="text-amber-700 underline hover:text-amber-900">inspection cost guide</Link>.</p></div>
            <div className="border-l-4 border-green-500 pl-4"><h4 className="font-bold text-slate-900">Do clean the effluent filter</h4><p className="text-slate-600 mt-1">If your tank has an effluent filter, clean it every 6 to 12 months. Pull it out, hose it off over the open tank, and reinsert it. Five minutes of work that prevents drainfield clogs. If your tank does not have a filter, ask about adding one during the next pumping. They cost $50 to $200.</p></div>
            <div className="border-l-4 border-green-500 pl-4"><h4 className="font-bold text-slate-900">Do install risers</h4><p className="text-slate-600 mt-1">Septic tank risers bring the access lids to ground level permanently, eliminating the $50 to $200 digging fee at every future service visit. One-time cost of $200 to $400. See our <Link href="/reviews/best-septic-tank-risers" className="text-amber-700 underline hover:text-amber-900">best septic tank risers guide</Link>.</p></div>
            <div className="border-l-4 border-green-500 pl-4"><h4 className="font-bold text-slate-900">Do keep records</h4><p className="text-slate-600 mt-1">Every pumping receipt, inspection report, and repair invoice goes in a folder. This protects your property value and simplifies home sales.</p></div>
            <div className="border-l-4 border-green-500 pl-4"><h4 className="font-bold text-slate-900">Do install a high-water alarm</h4><p className="text-slate-600 mt-1">A $30 to $200 alarm warns you when the tank water level gets dangerously high. See our <Link href="/reviews/best-septic-system-alarms" className="text-amber-700 underline hover:text-amber-900">best septic system alarms guide</Link>.</p></div>
          </div>

          {/* Water Usage Dos */}
          <h3 className="text-xl font-bold text-amber-600 mb-4 mt-8">Water Usage Dos</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4"><h4 className="font-bold text-slate-900">Do spread water use across the week</h4><p className="text-slate-600 mt-1">Six loads of laundry on Saturday pushes 180 to 270 gallons through the system in one day. Space it out to one or two loads per day. Avoid running the dishwasher and washing machine at the same time.</p></div>
            <div className="border-l-4 border-green-500 pl-4"><h4 className="font-bold text-slate-900">Do fix leaks immediately</h4><p className="text-slate-600 mt-1">A running toilet adds 200 gallons per day. That is 6,000 gallons per month. The EPA&rsquo;s WaterSense program estimates that fixing household water waste can reduce septic system loading by 20,000 gallons per year.</p></div>
            <div className="border-l-4 border-green-500 pl-4"><h4 className="font-bold text-slate-900">Do install water-efficient fixtures</h4><p className="text-slate-600 mt-1">High-efficiency toilets (1.28 gallons per flush vs 3.5 to 5 in older toilets), low-flow showerheads, and front-loading washing machines all reduce daily volume.</p></div>
            <div className="border-l-4 border-green-500 pl-4"><h4 className="font-bold text-slate-900">Do spread showers across peak hours</h4><p className="text-slate-600 mt-1">Four family members showering back-to-back in 30 minutes sends 80 to 120 gallons in a burst. Spreading showers across morning and evening reduces peak flow.</p></div>
          </div>

          {/* Drainfield Dos */}
          <h3 className="text-xl font-bold text-amber-600 mb-4 mt-8">Drainfield Dos</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4"><h4 className="font-bold text-slate-900">Do know where your drainfield is</h4><p className="text-slate-600 mt-1">Check your property records or see our <Link href="/articles/how-to-find-your-septic-tank" className="text-amber-700 underline hover:text-amber-900">guide to finding your septic tank</Link>. Mark it permanently.</p></div>
            <div className="border-l-4 border-green-500 pl-4"><h4 className="font-bold text-slate-900">Do keep the drainfield planted with grass</h4><p className="text-slate-600 mt-1">Grass is the ideal drainfield cover. The root system is shallow enough to avoid pipe damage, dense enough to prevent erosion, and helps absorb moisture.</p></div>
            <div className="border-l-4 border-green-500 pl-4"><h4 className="font-bold text-slate-900">Do divert surface water away from the drainfield</h4><p className="text-slate-600 mt-1">Roof gutters, downspouts, sump pump discharge, and landscape grading should all direct water away from the drainfield. See our guide on <Link href="/problems/septic-overflow-after-rain" className="text-amber-700 underline hover:text-amber-900">septic overflow after rain</Link>.</p></div>
            <div className="border-l-4 border-green-500 pl-4"><h4 className="font-bold text-slate-900">Do follow our seasonal maintenance checklist</h4><p className="text-slate-600 mt-1">Each season brings specific tasks. See our <Link href="/maintenance/septic-system-maintenance-checklist" className="text-amber-700 underline hover:text-amber-900">seasonal maintenance checklist</Link>.</p></div>
          </div>
        </section>

        {/* THE DONTS */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Don&rsquo;ts: What Never to Do</h2>

          {/* Flushing Donts */}
          <h3 className="text-xl font-bold text-red-600 mb-4 mt-8">Flushing Don&rsquo;ts</h3>
          <p className="text-slate-600 mb-4">The only things that should ever enter your septic system through the toilet: human waste and toilet paper. That is it. Use <Link href="/reviews/best-toilet-paper-for-septic" className="text-amber-700 underline hover:text-amber-900">septic-safe toilet paper</Link> that dissolves quickly. For the comprehensive list, see our <Link href="/articles/what-can-cannot-flush-septic-system" className="text-amber-700 underline hover:text-amber-900">complete flushing guide</Link>.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-slate-800 text-white"><th className="px-4 py-3 text-left font-semibold">Item</th><th className="px-4 py-3 text-left font-semibold">Why It Damages Your Septic</th><th className="px-4 py-3 text-left font-semibold">Consequence</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Flushable wipes</td><td className="px-4 py-3 text-slate-600">Do not break down like toilet paper. Accumulate in tank, wrap around pumps, clog outlet baffles.</td><td className="px-4 py-3 text-slate-600">Pump jam $200&ndash;$800 repair or premature pumping</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Feminine hygiene products</td><td className="px-4 py-3 text-slate-600">Cotton and plastic do not decompose. Add to sludge layer and can block outlet.</td><td className="px-4 py-3 text-slate-600">Accelerated pumping schedule and potential baffle clog</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Paper towels and tissues</td><td className="px-4 py-3 text-slate-600">Designed to stay intact when wet. Build sludge faster.</td><td className="px-4 py-3 text-slate-600">30&ndash;50% faster sludge accumulation</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Condoms</td><td className="px-4 py-3 text-slate-600">Latex does not decompose. Floats in scum layer, can block outlet.</td><td className="px-4 py-3 text-slate-600">Baffle blockage $150&ndash;$500 repair</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Dental floss</td><td className="px-4 py-3 text-slate-600">Does not decompose. Tangles around pump impellers.</td><td className="px-4 py-3 text-slate-600">Pump failure $300&ndash;$1,500 replacement</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Cat litter</td><td className="px-4 py-3 text-slate-600">Clay litter settles like concrete. Even flushable litter adds excessive solids.</td><td className="px-4 py-3 text-slate-600">Rapid sludge buildup and possible pipe blockage</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Diapers</td><td className="px-4 py-3 text-slate-600">Plastic and super-absorbent polymer expand in water.</td><td className="px-4 py-3 text-slate-600">Outlet blockage, emergency pumping</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Medications</td><td className="px-4 py-3 text-slate-600">Antibiotics kill tank bacteria. Other meds pass to groundwater.</td><td className="px-4 py-3 text-slate-600">Bacterial die-off slows processing for days to weeks</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Cigarette butts</td><td className="px-4 py-3 text-slate-600">Filters are plastic. Do not decompose.</td><td className="px-4 py-3 text-slate-600">Cumulative scum buildup</td></tr>
              </tbody>
            </table>
          </div>

          {/* Chemical Donts */}
          <h3 className="text-xl font-bold text-red-600 mb-4 mt-8">Chemical Don&rsquo;ts</h3>
          <p className="text-slate-600 mb-4">What to use instead for drain clogs: a plunger, a manual drain snake, or <Link href="/reviews/best-drain-cleaners-for-septic" className="text-amber-700 underline hover:text-amber-900">enzyme-based drain cleaners</Link>. For monthly maintenance, <Link href="/reviews/best-septic-tank-treatments" className="text-amber-700 underline hover:text-amber-900">septic-safe treatments</Link> support bacterial health.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-slate-800 text-white"><th className="px-4 py-3 text-left font-semibold">Chemical</th><th className="px-4 py-3 text-left font-semibold">What It Does to Your Septic</th><th className="px-4 py-3 text-left font-semibold">How Long Damage Lasts</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Drano / Liquid-Plumr</td><td className="px-4 py-3 text-slate-600">Kills bacterial colonies. Destroys the biological process that breaks down waste.</td><td className="px-4 py-3 text-slate-600">Days to weeks of reduced processing</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Sulfuric acid drain openers</td><td className="px-4 py-3 text-slate-600">Corrodes pipes. Kills all biological activity. Can damage concrete tanks.</td><td className="px-4 py-3 text-slate-600">Weeks. May require re-inoculation.</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Bleach in large amounts</td><td className="px-4 py-3 text-slate-600">Suppresses bacterial activity. Normal cleaning amounts are OK.</td><td className="px-4 py-3 text-slate-600">Hours to days depending on amount</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Antibacterial hand soap (triclosan)</td><td className="px-4 py-3 text-slate-600">Chronic suppression of tank bacteria with daily use.</td><td className="px-4 py-3 text-slate-600">Cumulative. Long-term performance reduction.</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Paint, paint thinner, solvents</td><td className="px-4 py-3 text-slate-600">Kills bacteria. Introduces toxins that pass to groundwater.</td><td className="px-4 py-3 text-slate-600">Weeks to months. May contaminate well water.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Motor oil, gasoline, antifreeze</td><td className="px-4 py-3 text-slate-600">Floats on scum layer. Passes through to drainfield. Poisons soil microbes.</td><td className="px-4 py-3 text-slate-600">Months to permanent drainfield contamination.</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Pesticides and herbicides</td><td className="px-4 py-3 text-slate-600">Kill soil organisms the drainfield depends on.</td><td className="px-4 py-3 text-slate-600">Months. Drainfield may need recovery time.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Photographic chemicals</td><td className="px-4 py-3 text-slate-600">Heavy metals and fixers are toxic to all biological processes.</td><td className="px-4 py-3 text-slate-600">Permanent contamination risk.</td></tr>
              </tbody>
            </table>
          </div>

          {/* Drainfield Donts */}
          <h3 className="text-xl font-bold text-red-600 mb-4 mt-8">Drainfield Don&rsquo;ts</h3>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h4 className="font-bold text-slate-900">Don&rsquo;t drive or park on the drainfield</h4><p className="text-slate-600 text-sm mt-1">Soil compaction from vehicle weight crushes air spaces. Once compacted, soil does not recover. This includes cars, trucks, riding mowers, construction equipment, and ATVs. Not even once.</p></div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h4 className="font-bold text-slate-900">Don&rsquo;t build anything over the drainfield or tank</h4><p className="text-slate-600 text-sm mt-1">No sheds, patios, decks, pools, driveways, sport courts, or concrete. These block oxygen exchange, prevent access, compact soil, and can crush pipes.</p></div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h4 className="font-bold text-slate-900">Don&rsquo;t plant trees or deep-rooted shrubs near the drainfield</h4><p className="text-slate-600 text-sm mt-1">Keep trees at least 30 feet from all septic components. Some species with aggressive root systems need 50 feet. Grass and shallow-rooted groundcover are the only safe plantings. See our <Link href="/problems/drainfield-failing" className="text-amber-700 underline hover:text-amber-900">drainfield failure warning signs guide</Link>.</p></div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h4 className="font-bold text-slate-900">Don&rsquo;t drain a pool or hot tub into the septic system</h4><p className="text-slate-600 text-sm mt-1">A pool holds 10,000 to 30,000 gallons. Dumping this volume stirs up settled solids, pushes them into the drainfield, and overwhelms capacity. Chlorinated water also kills tank bacteria.</p></div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h4 className="font-bold text-slate-900">Don&rsquo;t allow surface water to drain toward the drainfield</h4><p className="text-slate-600 text-sm mt-1">Downspouts, sump pump discharge, and landscape grading should route water away. Adding external water is the primary cause of <Link href="/problems/septic-overflow-after-rain" className="text-amber-700 underline hover:text-amber-900">septic overflow after rain</Link>.</p></div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h4 className="font-bold text-slate-900">Don&rsquo;t cover the drainfield with impervious material</h4><p className="text-slate-600 text-sm mt-1">Plastic landscape fabric, rubber mulch mats, and other impervious covers prevent oxygen exchange. Use grass or permeable organic mulch only.</p></div>
          </div>

          {/* Household Habit Donts */}
          <h3 className="text-xl font-bold text-red-600 mb-4 mt-8">Household Habit Don&rsquo;ts</h3>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h4 className="font-bold text-slate-900">Don&rsquo;t use a garbage disposal (or use it sparingly)</h4><p className="text-slate-600 text-sm mt-1">Garbage disposals increase sludge accumulation by 30 to 50 percent. This means more frequent pumping and higher risk of drainfield contamination. Compost kitchen scraps instead.</p></div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h4 className="font-bold text-slate-900">Don&rsquo;t do all your laundry in one day</h4><p className="text-slate-600 text-sm mt-1">Every load sends 15 to 45 gallons through the system. Five loads on Saturday can push 150 gallons through the drainfield in a few hours, exceeding its absorption capacity.</p></div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h4 className="font-bold text-slate-900">Don&rsquo;t ignore warning signs</h4><p className="text-slate-600 text-sm mt-1"><Link href="/problems/slow-drains" className="text-amber-700 underline hover:text-amber-900">Slow drains</Link>, <Link href="/problems/septic-smell-in-yard" className="text-amber-700 underline hover:text-amber-900">sewage smells in the yard</Link>, standing water over the drainfield, bright green grass during drought, gurgling toilets, or a sounding alarm are all signals. Every week you delay makes the problem more expensive.</p></div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h4 className="font-bold text-slate-900">Don&rsquo;t enter a septic tank</h4><p className="text-slate-600 text-sm mt-1">The gases inside&mdash;hydrogen sulfide, methane, carbon dioxide&mdash;can cause unconsciousness in seconds and death in minutes. Leave any work requiring opening the main lid to a licensed professional.</p></div>
          </div>
        </section>

        {/* Gray Areas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Gray Areas: What Is Actually OK</h2>
          <p className="text-slate-600 mb-6">Some things that sound harmful are actually fine in normal amounts.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-slate-800 text-white"><th className="px-4 py-3 text-left font-semibold">Item</th><th className="px-4 py-3 text-left font-semibold">Verdict</th><th className="px-4 py-3 text-left font-semibold">Why</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Bleach (small amounts)</td><td className="px-4 py-3 text-green-600 font-semibold">OK</td><td className="px-4 py-3 text-slate-600">A cap of bleach in the toilet or a normal load of whites will not harm your tank. Pouring a full bottle will.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Dishwasher detergent</td><td className="px-4 py-3 text-green-600 font-semibold">OK</td><td className="px-4 py-3 text-slate-600">Normal use is fine. Use liquid over powder. Avoid products with phosphates.</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Liquid hand soap (non-antibacterial)</td><td className="px-4 py-3 text-green-600 font-semibold">OK</td><td className="px-4 py-3 text-slate-600">Regular soap does not harm bacteria. Antibacterial soap with triclosan does over time.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Baking soda</td><td className="px-4 py-3 text-green-600 font-semibold">OK</td><td className="px-4 py-3 text-slate-600">Mildly alkaline. Actually helps buffer tank pH. Safe in any normal amount.</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Vinegar</td><td className="px-4 py-3 text-green-600 font-semibold">OK</td><td className="px-4 py-3 text-slate-600">Mildly acidic. Safe in normal household amounts.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Yeast</td><td className="px-4 py-3 text-yellow-600 font-semibold">Harmless but useless</td><td className="px-4 py-3 text-slate-600">A common myth says flushing yeast feeds tank bacteria. It does not help or hurt.</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Septic tank additives</td><td className="px-4 py-3 text-yellow-600 font-semibold">Mostly unnecessary</td><td className="px-4 py-3 text-slate-600">The EPA states septic systems do not need additives. Enzyme treatments can support bacteria but are not a substitute for pumping.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Garbage disposal (minimal use)</td><td className="px-4 py-3 text-yellow-600 font-semibold">Cautiously OK</td><td className="px-4 py-3 text-slate-600">Light use is manageable if you pump more frequently. Heavy use is not recommended.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* New Homeowner Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What New Septic Homeowners Get Wrong</h2>
          <p className="text-slate-600 mb-6">If you just moved into a home with a septic system for the first time, these are the five most common mistakes.</p>
          <div className="space-y-4">
            <div className="flex gap-3 items-start bg-gray-50 rounded-lg p-4"><span className="text-amber-600 font-bold text-lg">1</span><div><h4 className="font-bold text-slate-900 text-sm">They assume it works like city sewer</h4><p className="text-slate-600 text-sm">City sewer handles anything. Your septic tank is a living biological system. What you put in it matters.</p></div></div>
            <div className="flex gap-3 items-start bg-gray-50 rounded-lg p-4"><span className="text-amber-600 font-bold text-lg">2</span><div><h4 className="font-bold text-slate-900 text-sm">They do not find out when it was last pumped</h4><p className="text-slate-600 text-sm">Ask the previous owner or check county records. If nobody knows, schedule a pumping immediately.</p></div></div>
            <div className="flex gap-3 items-start bg-gray-50 rounded-lg p-4"><span className="text-amber-600 font-bold text-lg">3</span><div><h4 className="font-bold text-slate-900 text-sm">They do not locate the tank and drainfield</h4><p className="text-slate-600 text-sm">Find them, mark them, and sketch their location. See our <Link href="/articles/how-to-find-your-septic-tank" className="text-amber-700 underline hover:text-amber-900">tank locating guide</Link>.</p></div></div>
            <div className="flex gap-3 items-start bg-gray-50 rounded-lg p-4"><span className="text-amber-600 font-bold text-lg">4</span><div><h4 className="font-bold text-slate-900 text-sm">They keep using chemical drain cleaners</h4><p className="text-slate-600 text-sm">Replace Drano with an <Link href="/reviews/best-drain-cleaners-for-septic" className="text-amber-700 underline hover:text-amber-900">enzyme-based drain cleaner</Link> immediately.</p></div></div>
            <div className="flex gap-3 items-start bg-gray-50 rounded-lg p-4"><span className="text-amber-600 font-bold text-lg">5</span><div><h4 className="font-bold text-slate-900 text-sm">They do not tell their guests</h4><p className="text-slate-600 text-sm">Visitors will flush wipes, pour grease, and take 20-minute showers. A simple heads-up prevents problems during holiday gatherings.</p></div></div>
          </div>
          <p className="text-slate-600 mt-4">For a complete homebuyer checklist, see our guide on <Link href="/guides/buying-home-with-septic" className="text-amber-700 underline hover:text-amber-900">buying a home with a septic system</Link>.</p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq: any, index: number) => (
              <details key={index} className="bg-gray-50 rounded-lg border border-gray-200">
                <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer hover:text-amber-600 transition-colors">{faq.name}<span className="ml-2 text-amber-500">+</span></summary>
                <div className="px-5 pb-4 text-slate-600 text-sm">{faq.acceptedAnswer.text}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Glossary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Glossary</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-3"><h3 className="font-bold text-slate-900">Effluent</h3><p className="text-slate-600 text-sm mt-1">The partially treated liquid wastewater that flows from the septic tank to the drainfield.</p></div>
            <div className="border-b border-gray-200 pb-3"><h3 className="font-bold text-slate-900">Scum Layer</h3><p className="text-slate-600 text-sm mt-1">The floating layer of oils, grease, and lightweight solids on top of the wastewater inside the tank. Prevented from leaving by the outlet baffle.</p></div>
            <div className="border-b border-gray-200 pb-3"><h3 className="font-bold text-slate-900">Sludge Layer</h3><p className="text-slate-600 text-sm mt-1">The settled layer of heavy solid waste at the bottom of the tank. Measured during inspections to determine when pumping is needed.</p></div>
            <div className="border-b border-gray-200 pb-3"><h3 className="font-bold text-slate-900">Baffle</h3><p className="text-slate-600 text-sm mt-1">A T-shaped fitting at the inlet and outlet of the septic tank that prevents scum and sludge from leaving. Outlet baffle failure is one of the fastest paths to drainfield destruction.</p></div>
            <div className="border-b border-gray-200 pb-3"><h3 className="font-bold text-slate-900">Hydraulic Overload</h3><p className="text-slate-600 text-sm mt-1">When more water enters the system than the drainfield can absorb and process.</p></div>
            <div className="border-b border-gray-200 pb-3"><h3 className="font-bold text-slate-900">Biomat</h3><p className="text-slate-600 text-sm mt-1">A bacterial layer on drainfield trench surfaces. Normal in thin layers. Excess biomat from neglected maintenance clogs soil pores.</p></div>
            <div className="border-b border-gray-200 pb-3"><h3 className="font-bold text-slate-900">Effluent Filter</h3><p className="text-slate-600 text-sm mt-1">A screen at the tank outlet that catches suspended solids. The cheapest form of drainfield protection. Needs cleaning every 6 to 12 months.</p></div>
            <div className="pb-3"><h3 className="font-bold text-slate-900">Root Intrusion</h3><p className="text-slate-600 text-sm mt-1">When tree or shrub roots grow into septic pipes or drainfield trenches, attracted by moisture and nutrients. Causes blockages and pipe damage.</p></div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/articles/what-can-cannot-flush-septic-system" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow"><h3 className="font-bold text-slate-900">What You Can and Cannot Flush</h3><p className="text-slate-600 text-sm mt-1">The complete list of safe and unsafe items for your septic system.</p></Link>
            <Link href="/maintenance/septic-system-maintenance-checklist" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow"><h3 className="font-bold text-slate-900">Septic System Maintenance Checklist</h3><p className="text-slate-600 text-sm mt-1">The complete seasonal guide for homeowners.</p></Link>
            <Link href="/articles/how-often-pump-septic-tank" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow"><h3 className="font-bold text-slate-900">How Often Should You Pump?</h3><p className="text-slate-600 text-sm mt-1">Find your exact pumping schedule by tank and household size.</p></Link>
            <Link href="/guides/buying-home-with-septic" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow"><h3 className="font-bold text-slate-900">Buying a Home with a Septic System</h3><p className="text-slate-600 text-sm mt-1">What to know before you close.</p></Link>
            <Link href="/reviews/best-septic-tank-treatments" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow"><h3 className="font-bold text-slate-900">Best Septic Tank Treatments</h3><p className="text-slate-600 text-sm mt-1">Honest reviews after real testing.</p></Link>
            <Link href="/problems/drainfield-failing" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow"><h3 className="font-bold text-slate-900">Signs Your Drainfield Is Failing</h3><p className="text-slate-600 text-sm mt-1">Warning signs, causes, and what to do.</p></Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Need Help With Your Septic System?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">Connect with certified septic professionals in your area for inspections, pumping, and repairs.</p>
          <Link href="/get-quote" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-colors">Get Free Quotes</Link>
        </section>
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
