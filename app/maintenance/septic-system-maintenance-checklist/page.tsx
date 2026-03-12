import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Septic System Maintenance Checklist: The Complete Seasonal Guide for Homeowners',
  description: 'The four essential septic maintenance tasks, seasonal checklists for spring, summer, fall, and winter, maintenance by system type, DIY vs pro tasks, and warning signs that mean call a pro now.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should I maintain my septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pump every 3 to 5 years, inspect annually or every 3 years for conventional systems, and clean the effluent filter every 6 to 12 months. The EPA recommends that alternative systems with mechanical components be inspected every year.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most important septic maintenance task?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pumping the tank on schedule. Regular pumping prevents solids from escaping into the drainfield, which is the primary cause of the most expensive septic failure: drainfield replacement at $5,000 to $15,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to pump a septic tank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fall is ideal. The ground is accessible, the water table is typically at its lowest, and you are clearing the system before winter when access is hardest and problems are most expensive to address.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do septic maintenance myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some tasks are DIY-friendly: cleaning the effluent filter, visual inspections, checking lids and ports, testing the alarm, and monitoring for warning signs. Pumping, professional inspections, and any repairs should always be done by licensed professionals. Never enter a septic tank.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does annual septic maintenance cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '$200 to $500 per year when annualized across pumping, inspections, and filter maintenance. This is a fraction of the cost of emergency repairs from deferred maintenance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I never put in my septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Never flush anything except human waste and septic-safe toilet paper. Never pour grease, chemicals, or medications down drains. Never use chemical drain cleaners like Drano or Liquid-Plumr. Use enzyme-based drain cleaners instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does my septic system need additives or treatments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EPA states that septic systems do not need additives to function properly. Enzyme-based treatments can support bacterial populations between pumpings, especially after heavy antibiotic use, but they are a supplement, not a substitute for pumping.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my septic system is failing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common warning signs are sewage backing up into the house, persistent sewage smell in the yard, standing water over the drainfield, bright green grass over the drainfield during dry weather, and multiple slow drains throughout the house.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get a septic inspection before buying a home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. A pre-purchase septic inspection ($300 to $500) can reveal problems that cost $5,000 to $25,000 to fix. Many buyers skip this and regret it.',
      },
    },
  ],
}

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Septic System Maintenance Schedule by System Type 2026',
  description: 'Comparison of maintenance requirements for 5 septic system types including pumping frequency, inspection frequency, special maintenance needs, and annual cost.',
  url: 'https://theseptic.guide/maintenance/septic-system-maintenance-checklist',
  license: 'https://creativecommons.org/licenses/by/4.0/',
  creator: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    url: 'https://theseptic.guide',
  },
  distribution: [
    {
      '@type': 'DataDownload',
      encodingFormat: 'application/json',
      contentUrl: 'https://theseptic.guide/maintenance/septic-system-maintenance-checklist',
    },
  ],
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'System Type', description: 'Type of septic system' },
    { '@type': 'PropertyValue', name: 'Pumping Frequency', description: 'How often the tank needs pumping' },
    { '@type': 'PropertyValue', name: 'Inspection Frequency', description: 'How often professional inspection is needed' },
    { '@type': 'PropertyValue', name: 'Special Maintenance', description: 'System-specific maintenance tasks' },
    { '@type': 'PropertyValue', name: 'Annual Cost', unitText: 'USD', description: 'Estimated annual maintenance cost' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Septic System Maintenance Checklist: The Complete Seasonal Guide for Homeowners',
  description: 'The four essential septic maintenance tasks, seasonal checklists, maintenance by system type, and warning signs.',
  image: 'https://theseptic.guide/septicmaintaince.jpg',
  author: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
  publisher: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
  datePublished: '2026-03-09',
  dateModified: '2026-03-09',
}

export default function SepticMaintenanceChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <Image src="/septicmaintaince.jpg" alt="Septic System Maintenance Checklist 2026" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-[2px] bg-amber-500" />
            <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase">Maintenance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Septic System Maintenance Checklist
            <span className="text-amber-500 block">The Complete Seasonal Guide for Homeowners</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            The four essential septic maintenance tasks are pump the tank every 3 to 5 years ($300 to $600), get an annual inspection ($100 to $300), clean the effluent filter every 6 to 12 months, and follow septic-safe habits year-round.
          </p>
          <div className="flex items-center mt-6 space-x-4">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm">SG</div>
            <div>
              <p className="font-semibold">The Septic Guide</p>
              <p className="text-sm text-gray-300">Updated Mar 2026 &middot; 25 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-4 py-16">

        {/* Intro */}
        <section className="mb-16">
          <p className="text-gray-700 leading-relaxed mb-4">
            The EPA&#39;s SepticSmart program breaks maintenance into four pillars: inspect and pump frequently, use water efficiently, dispose of waste properly, and maintain your drainfield. Beyond these basics, each season brings specific tasks that protect your system from weather-related stress, prevent problems before they develop, and extend your system&#39;s lifespan by years.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This is the complete seasonal checklist. Print it, bookmark it, or save it to your phone. It covers everything you need to do and when.
          </p>
        </section>

        {/* Maintenance by System Type */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintenance by System Type: What Your System Actually Needs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Not all septic systems need the same maintenance schedule. The wrong schedule for your system type is almost as bad as no schedule at all.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-amber-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">System Type</th>
                  <th className="px-4 py-3 font-semibold">Pumping Frequency</th>
                  <th className="px-4 py-3 font-semibold">Inspection Frequency</th>
                  <th className="px-4 py-3 font-semibold">Special Maintenance</th>
                  <th className="px-4 py-3 font-semibold">Annual Cost</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 divide-y divide-gray-200">
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Conventional gravity-fed</td><td className="px-4 py-3">Every 3 to 5 years</td><td className="px-4 py-3">Every 3 years</td><td className="px-4 py-3">Effluent filter cleaning every 6 to 12 months</td><td className="px-4 py-3">$100&#8211;$200</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Aerobic treatment unit (ATU)</td><td className="px-4 py-3">Every 3 to 5 years</td><td className="px-4 py-3">Every year (often required by permit)</td><td className="px-4 py-3">Aerator motor check, chlorine/UV disinfection check, air compressor inspection</td><td className="px-4 py-3">$200&#8211;$500</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Mound system with lift pump</td><td className="px-4 py-3">Every 3 to 5 years</td><td className="px-4 py-3">Every year</td><td className="px-4 py-3">Pump chamber alarm test, pump float check, dosing cycle verification</td><td className="px-4 py-3">$200&#8211;$400</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Pressure distribution system</td><td className="px-4 py-3">Every 3 to 5 years</td><td className="px-4 py-3">Every year</td><td className="px-4 py-3">Pump test, lateral flushing, pressure check</td><td className="px-4 py-3">$200&#8211;$400</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Sand filter system</td><td className="px-4 py-3">Every 3 to 5 years</td><td className="px-4 py-3">Every year</td><td className="px-4 py-3">Filter media inspection, pump check, distribution uniformity test</td><td className="px-4 py-3">$250&#8211;$500</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
            <h3 className="text-amber-600 font-bold text-lg mb-3">&#128161; The Rule</h3>
            <p className="text-gray-700">If your system has any electrical component&mdash;a pump, aerator, alarm, float switch, or timer&mdash;it needs annual professional inspection. Conventional gravity-fed systems can go every 3 years between professional inspections as long as you do the seasonal checks in this guide.</p>
          </div>
          <p className="text-gray-500 text-sm mt-4">Learn more about the differences in our <Link href="/comparisons/aerobic-vs-anaerobic-septic-systems" className="text-amber-600 underline">aerobic vs anaerobic septic systems comparison</Link>.</p>
        </section>

        {/* Spring Checklist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Spring Checklist</h2>
          <p className="text-amber-600 font-semibold mb-6">March to May</p>
          <p className="text-gray-700 leading-relaxed mb-6">Spring is the highest-risk season for septic systems. Snowmelt, heavy rain, and rising groundwater can saturate your drainfield and stress every component.</p>
          <div className="space-y-6">
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">1</div><div><h3 className="text-gray-900 font-semibold text-lg">Walk the drainfield and tank area</h3><p className="text-gray-700">After winter, inspect for standing water, soggy soil, unusual odors, or areas where grass is noticeably greener than surrounding lawn. Any of these during dry weather are warning signs of drainfield trouble. If the ground is saturated above the drainfield and it has not rained recently, your system may be overloaded from spring runoff.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">2</div><div><h3 className="text-gray-900 font-semibold text-lg">Check for winter damage</h3><p className="text-gray-700">Look for frost heaving around the tank lids, risers, or inspection ports. Verify that lids are still seated properly and seals have not cracked from freeze-thaw cycles. A cracked riser lets surface water infiltrate the tank, adding volume the system was not designed to handle.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">3</div><div><h3 className="text-gray-900 font-semibold text-lg">Schedule your annual inspection</h3><p className="text-gray-700">Spring is ideal timing because a professional can assess how the system handled winter stress while the ground is still accessible. The EPA recommends inspecting conventional systems at least every three years and systems with mechanical components every year. A thorough inspection should include sludge and scum level measurement, baffle condition check, effluent filter assessment, and distribution box evaluation. Cost: $100 to $300. See our <Link href="/cost-guides/septic-inspection-cost" className="text-amber-600 underline">septic inspection cost guide</Link> for a full breakdown.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">4</div><div><h3 className="text-gray-900 font-semibold text-lg">Pump the tank if due</h3><p className="text-gray-700">If your pumping schedule falls in spring, book early. Septic companies get busy as homeowners discover winter-related problems. Scheduling in March or early April avoids the rush. The typical pumping cost is $300 to $600 depending on tank size and region.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">5</div><div><h3 className="text-gray-900 font-semibold text-lg">Divert spring runoff away from the drainfield</h3><p className="text-gray-700">Verify that roof gutters, downspouts, sump pump discharge, and landscape grading direct water away from the tank and drainfield area. Spring rain on top of a drainfield that is already handling household wastewater creates hydraulic overload. This is the single most common cause of <Link href="/problems/septic-overflow-after-rain" className="text-amber-600 underline">septic overflow after rain</Link>.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">6</div><div><h3 className="text-gray-900 font-semibold text-lg">Monitor tree root growth</h3><p className="text-gray-700">Spring is when roots grow most aggressively. If you have trees within 30 feet of septic components, watch for new root activity near pipes and consider root barriers if intrusion is a concern.</p></div></div>
          </div>
        </section>

        {/* Summer Checklist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Summer Checklist</h2>
          <p className="text-amber-600 font-semibold mb-6">June to August</p>
          <p className="text-gray-700 leading-relaxed mb-6">Summer means increased water use&mdash;guests, outdoor activities, more laundry&mdash;and higher biological activity in the tank. The focus is on preventing overload.</p>
          <div className="space-y-6">
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">1</div><div><h3 className="text-gray-900 font-semibold text-lg">Spread water use across the week</h3><p className="text-gray-700">Summer guests, extra laundry from outdoor activities, and increased showers can overwhelm the system if concentrated in one or two days. Space out laundry loads&mdash;no more than two per day. Avoid running the dishwasher and washing machine simultaneously. The EPA notes that a single washing machine load can send 15 to 45 gallons through the system.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">2</div><div><h3 className="text-gray-900 font-semibold text-lg">Protect the drainfield from summer activities</h3><p className="text-gray-700">Do not park vehicles, set up temporary structures (tents, bounce houses), or drive riding mowers across the drainfield. Soil compaction from summer traffic is permanent and reduces the drainfield&#39;s absorption capacity. This is one of the most common causes of premature drainfield failure.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">3</div><div><h3 className="text-gray-900 font-semibold text-lg">Mark system components before landscaping</h3><p className="text-gray-700">If you are planning any summer yard work, know exactly where your tank, distribution box, drainfield, and all pipes are located before digging. See our guide on <Link href="/how-to-find-your-septic-tank" className="text-amber-600 underline">how to find your septic tank</Link> for five methods that work.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">4</div><div><h3 className="text-gray-900 font-semibold text-lg">Check the drainfield for stress</h3><p className="text-gray-700">After extended dry periods, the drainfield should look the same as the rest of the yard&mdash;not greener, not wetter, not smellier. If it looks different, the system may be struggling. Greener grass over the drainfield during a drought is a classic warning sign that effluent is surfacing.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">5</div><div><h3 className="text-gray-900 font-semibold text-lg">Clean the effluent filter</h3><p className="text-gray-700">If your tank has an effluent filter and it was not cleaned during a spring pumping visit, mid-summer is a good time to check it. A clogged filter restricts flow and can cause backups. You can clean the filter yourself&mdash;pull it from the outlet baffle, hose it off over the open tank (so debris falls back in, not on the ground), and reinsert it. Takes five minutes and costs nothing.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">6</div><div><h3 className="text-gray-900 font-semibold text-lg">Be cautious with summer chemicals</h3><p className="text-gray-700">Pool water, hot tub drainage, and heavy use of antibacterial products can harm tank bacteria. Never drain a pool or hot tub into the septic system. Use septic-safe cleaning products. For guidance on what is and is not safe, see our complete <Link href="/what-can-cannot-flush-septic-system" className="text-amber-600 underline">flushing guide</Link>.</p></div></div>
          </div>
        </section>

        {/* Fall Checklist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Fall Checklist</h2>
          <p className="text-amber-600 font-semibold mb-6">September to November</p>
          <p className="text-gray-700 leading-relaxed mb-6">Fall is the ideal time for proactive maintenance before winter makes access difficult. Having your system inspected and pumped before freezing temperatures arrive is the best way to avoid winter emergencies.</p>
          <div className="space-y-6">
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">1</div><div><h3 className="text-gray-900 font-semibold text-lg">Pump the tank if due</h3><p className="text-gray-700">Fall is the best season for pumping. The ground is accessible, the water table is typically low, and you are clearing the system before winter when problems are hardest and most expensive to address. Our <Link href="/septic-tank-pumping-cost" className="text-amber-600 underline">pumping cost guide</Link> covers exactly what to expect.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">2</div><div><h3 className="text-gray-900 font-semibold text-lg">Inspect the system before winter</h3><p className="text-gray-700">A fall inspection catches any developing issues while they are still fixable. After the first hard freeze, accessing buried components becomes much more difficult and expensive.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">3</div><div><h3 className="text-gray-900 font-semibold text-lg">Check all lids, risers, and ports</h3><p className="text-gray-700">Ensure all access points are secure, sealed, and will not collect water that could freeze and crack the fittings. If your tank does not have risers, fall is the perfect time to install them. Risers bring the access lids to ground level permanently, eliminating the $50 to $200 digging fee at every future pumping visit.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">4</div><div><h3 className="text-gray-900 font-semibold text-lg">Clear the drainfield area</h3><p className="text-gray-700">Remove fallen leaves and debris from above the drainfield. A heavy layer of wet leaves can compact soil and reduce oxygen exchange. However, leave the grass intact since it provides insulation.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">5</div><div><h3 className="text-gray-900 font-semibold text-lg">Fix leaky fixtures before winter</h3><p className="text-gray-700">A running toilet or dripping faucet adds unnecessary water volume to the system year-round, but in winter, the extra water is especially problematic because it increases the volume of liquid that can freeze in pipes and saturate the drainfield during the slowest-processing months. A single running toilet can add 200 gallons per day to your system.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">6</div><div><h3 className="text-gray-900 font-semibold text-lg">Test your septic alarm</h3><p className="text-gray-700">If your system has a high-water alarm, press the test button and confirm the horn sounds and the warning light activates. Replace backup batteries even if the low-battery chirp has not sounded. You need the alarm working before winter, when power outages and pump failures are most common.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">7</div><div><h3 className="text-gray-900 font-semibold text-lg">Know your system location for winter access</h3><p className="text-gray-700">If snow covers your yard for months, mark the location of your tank lids and risers with stakes or permanent markers so a pumping crew can find them in an emergency.</p></div></div>
          </div>
        </section>

        {/* Winter Checklist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Winter Checklist</h2>
          <p className="text-amber-600 font-semibold mb-6">December to February</p>
          <p className="text-gray-700 leading-relaxed mb-6">Winter maintenance is mostly about prevention and monitoring. The goal is to avoid frozen pipes, avoid overloading the system, and catch problems before spring.</p>
          <div className="space-y-6">
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div><div><h3 className="text-gray-900 font-semibold text-lg">Keep water flowing through the system</h3><p className="text-gray-700">In occupied homes, normal daily use prevents pipes from freezing. If you are leaving the home vacant for an extended period, have the system winterized by a professional. Winterization typically involves pumping the tank, draining exposed pipes, and insulating vulnerable components.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div><div><h3 className="text-gray-900 font-semibold text-lg">Insulate vulnerable components</h3><p className="text-gray-700">If you have had freezing issues in previous winters, adding mulch (not soil) over the tank and pipe routes provides natural insulation. Do not compact snow over the drainfield&mdash;loose snow insulates better. Do not plow or drive over the drainfield.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div><div><h3 className="text-gray-900 font-semibold text-lg">Avoid chemical deicers near the system</h3><p className="text-gray-700">Salt and chemical ice melts used on driveways and walkways can leach into the soil and disrupt bacterial balance in the drainfield. Use sand or non-toxic alternatives near septic components.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">4</div><div><h3 className="text-gray-900 font-semibold text-lg">Monitor for warning signs</h3><p className="text-gray-700"><Link href="/problems/slow-drains" className="text-amber-600 underline">Slow drains</Link>, gurgling sounds, and sewage odors during winter can indicate a frozen pipe, a full tank, or a system that is struggling with cold-weather processing. Do not ignore these signs&mdash;winter problems get worse quickly.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">5</div><div><h3 className="text-gray-900 font-semibold text-lg">Reduce water use</h3><p className="text-gray-700">Winter is when the system processes wastewater most slowly&mdash;cold temperatures slow bacterial activity. Spreading out water use and avoiding large-volume activities (back-to-back laundry days) reduces stress on the system.</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">6</div><div><h3 className="text-gray-900 font-semibold text-lg">Do not wait until spring if something is wrong</h3><p className="text-gray-700">If you notice any signs of failure during winter, call a professional immediately. Waiting until spring often means the problem escalates into a more expensive repair. A $300 service call in January prevents a $5,000 drainfield problem in April.</p></div></div>
          </div>
        </section>

        {/* Year-Round Rules */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Year-Round Rules: Every Month, Every Season</h2>
          <p className="text-gray-700 leading-relaxed mb-6">These apply regardless of the season. No exceptions.</p>
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4"><p className="text-gray-700"><strong>Only flush human waste and toilet paper.</strong> No wipes (not even &ldquo;flushable&rdquo; ones), no feminine products, no paper towels, no chemicals. See our complete guide to <Link href="/what-can-cannot-flush-septic-system" className="text-amber-600 underline">what you can and cannot flush</Link>. Use <Link href="/reviews/best-toilet-paper-for-septic" className="text-amber-600 underline">septic-safe toilet paper</Link> that dissolves quickly.</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4"><p className="text-gray-700"><strong>No grease down any drain.</strong> Cooking oils and fats thicken the scum layer and can block the outlet baffle. Wipe greasy pans with a paper towel and throw it in the trash.</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4"><p className="text-gray-700"><strong>No chemical drain cleaners.</strong> Products like Drano and Liquid-Plumr kill the bacteria your tank needs to function. Use a plunger or drain snake for clogs, and use <Link href="/reviews/best-drain-cleaners-for-septic" className="text-amber-600 underline">enzyme-based drain cleaners</Link> for maintenance.</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4"><p className="text-gray-700"><strong>Fix leaks promptly.</strong> A single running toilet can add 200 gallons per day to your system. That is 6,000 gallons per month of unnecessary water your drainfield has to absorb.</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4"><p className="text-gray-700"><strong>Never drive or park on the drainfield.</strong> Not even once. Soil compaction is permanent and reduces absorption capacity.</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4"><p className="text-gray-700"><strong>Never build over the drainfield or tank.</strong> No sheds, patios, pools, or decks. These block access and disrupt the soil ecosystem your drainfield depends on.</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4"><p className="text-gray-700"><strong>Keep trees 30 feet from all septic components.</strong> Root intrusion is expensive to fix and preventable. If you already have trees near the system, monitor for <Link href="/problems/drainfield-failing" className="text-amber-600 underline">drainfield warning signs</Link> annually.</p></div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4"><p className="text-gray-700"><strong>Keep maintenance records.</strong> Every pumping receipt, inspection report, and repair record goes in a folder. This protects your property value and simplifies home sales. Buyers and their inspectors will ask for this documentation.</p></div>
          </div>
        </section>

        {/* What a Professional Inspection Includes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What a Professional Inspection Actually Includes</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Most homeowners have never seen a detailed inspection. Here is what a quality inspection covers versus what a lazy one skips.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-amber-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Task</th>
                  <th className="px-4 py-3 font-semibold">Good Inspection</th>
                  <th className="px-4 py-3 font-semibold">Quick-and-Cheap Inspection</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 divide-y divide-gray-200">
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Locate and expose tank lids</td><td className="px-4 py-3">Yes, uncovers all access points</td><td className="px-4 py-3">May only open one lid</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Measure sludge and scum levels</td><td className="px-4 py-3">Yes, with a sludge judge or similar tool</td><td className="px-4 py-3">Skips measurement, guesses</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Inspect inlet and outlet baffles</td><td className="px-4 py-3">Yes, checks both for cracks and proper position</td><td className="px-4 py-3">May not check baffles at all</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Check effluent filter</td><td className="px-4 py-3">Yes, cleans or notes condition</td><td className="px-4 py-3">Ignores filter if present</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Flush toilets and run water during visit</td><td className="px-4 py-3">Yes, verifies flow-through and checks for backups</td><td className="px-4 py-3">Does not test under load</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Inspect distribution box</td><td className="px-4 py-3">Yes, checks for even flow and structural integrity</td><td className="px-4 py-3">Rarely opens the D-box</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Walk the drainfield</td><td className="px-4 py-3">Yes, checks for wet spots, odors, surfacing effluent</td><td className="px-4 py-3">Skips drainfield entirely</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Provide written report</td><td className="px-4 py-3">Yes, with measurements, photos, and recommendations</td><td className="px-4 py-3">Verbal summary only</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4">A thorough inspection costs $200 to $400. A cheap one costs $100 to $150 and misses the things that matter. The <Link href="/cost-guides/septic-inspection-cost" className="text-amber-600 underline">inspection cost guide</Link> explains what each tier includes.</p>
        </section>

        {/* DIY vs Pro */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">DIY Maintenance vs. Hire a Pro</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-amber-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Task</th>
                  <th className="px-4 py-3 font-semibold">DIY?</th>
                  <th className="px-4 py-3 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 divide-y divide-gray-200">
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Visual drainfield walk</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">No tools needed. Walk your yard seasonally.</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Check tank lids and risers</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">Visual inspection only. Do not enter the tank.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Clean the effluent filter</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">Pull, hose off over the tank, reinsert. Five minutes.</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Test the septic alarm</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">Press the test button. Replace batteries annually.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Monitor water usage and fix leaks</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">Basic plumbing. Biggest impact for least effort.</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Pump the septic tank</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Requires a vacuum truck and licensed disposal.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Measure sludge and scum levels</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Requires a sludge judge and experience interpreting results.</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Inspect baffles and tank structure</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Requires opening the tank safely. Toxic gases can be fatal.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Repair or replace components</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Requires professional tools and knowledge.</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Drainfield diagnosis or repair</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Requires camera inspection, soil testing, or excavation.</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-6">
            <h3 className="text-red-600 font-bold text-lg mb-3">&#9888;&#65039; Critical Safety Note</h3>
            <p className="text-gray-700">Never enter a septic tank. The gases inside&mdash;hydrogen sulfide, methane, and carbon dioxide&mdash;can cause unconsciousness in seconds and death in minutes. Even leaning over an open tank can be dangerous. Leave anything that requires opening the main tank lid to a licensed professional.</p>
          </div>
        </section>

        {/* Annual Cost Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Annual Maintenance Cost Summary</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-amber-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Task</th>
                  <th className="px-4 py-3 font-semibold">Frequency</th>
                  <th className="px-4 py-3 font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 divide-y divide-gray-200">
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Tank pumping</td><td className="px-4 py-3">Every 3 to 5 years</td><td className="px-4 py-3">$300&#8211;$600</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Professional inspection</td><td className="px-4 py-3">Annually (ATU/pump) or every 3 years (conventional)</td><td className="px-4 py-3">$100&#8211;$400</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Effluent filter cleaning</td><td className="px-4 py-3">Every 6 to 12 months</td><td className="px-4 py-3">$0 (DIY) to $100</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Septic treatment (optional)</td><td className="px-4 py-3">Monthly</td><td className="px-4 py-3">$10&#8211;$20</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Alarm battery replacement</td><td className="px-4 py-3">Annually</td><td className="px-4 py-3">$5&#8211;$10</td></tr>
                <tr className="bg-amber-50 font-semibold"><td className="px-4 py-3 text-gray-900">Annualized total</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-amber-600">$200&#8211;$500/year</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4">For context, this is comparable to what municipal sewer customers pay in annual fees ($300 to $600/year in most areas), and it is a fraction of the $5,000 to $20,000 cost of the repairs and replacements that maintenance prevents.</p>
        </section>

        {/* Warning Signs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Warning Signs That Mean Call a Pro Now</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Do not wait for the next scheduled maintenance if you notice any of these:</p>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h3 className="text-red-600 font-semibold">Sewage backing up into the house</h3><p className="text-gray-700 text-sm">This is an emergency. Reduce all water use immediately and call a septic professional for same-day service. See our <Link href="/problems/tank-backing-up" className="text-amber-600 underline">tank backing up troubleshooting guide</Link>.</p></div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h3 className="text-red-600 font-semibold">Standing water or soggy soil over the drainfield during dry weather</h3><p className="text-gray-700 text-sm">This indicates the drainfield is failing to absorb effluent. The cause could be a full tank, a clogged pipe, or drainfield failure.</p></div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h3 className="text-red-600 font-semibold">Persistent sewage smell in the yard</h3><p className="text-gray-700 text-sm">Occasional faint odor after heavy rain can be normal. Persistent smell during dry weather means something is wrong. See our <Link href="/problems/septic-smell-in-yard" className="text-amber-600 underline">septic smell in yard guide</Link>.</p></div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h3 className="text-red-600 font-semibold">Alarm sounding (if equipped)</h3><p className="text-gray-700 text-sm">Your septic alarm exists for one reason&mdash;to warn you before the tank overflows. When it sounds, follow the troubleshooting steps in our <Link href="/reviews/best-septic-system-alarms" className="text-amber-600 underline">alarm guide</Link>.</p></div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h3 className="text-red-600 font-semibold">Bright green grass over the drainfield when the rest of the yard is brown</h3><p className="text-gray-700 text-sm">The drainfield is acting as a fertilizer because effluent is reaching the surface. This is a health hazard.</p></div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><h3 className="text-red-600 font-semibold">Multiple slow drains throughout the house</h3><p className="text-gray-700 text-sm">One slow drain is usually a pipe clog. Multiple slow drains simultaneously suggest the septic system itself is the problem.</p></div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq: any, index: number) => (
              <details key={index} className="group bg-gray-50 border border-gray-200 rounded-xl">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-gray-900 font-semibold hover:text-amber-600 transition-colors">
                  {faq.name}
                  <span className="ml-4 text-amber-500 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Glossary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Glossary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Effluent Filter</h3><p className="text-gray-500 text-sm">A screen at the tank outlet that catches suspended solids before they reach the drainfield. Needs cleaning every 6 to 12 months.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Hydraulic Overload</h3><p className="text-gray-500 text-sm">When more water enters the system than the drainfield can absorb, often caused by concentrated water use or external water sources.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Frost Heaving</h3><p className="text-gray-500 text-sm">Ground movement from freezing and thawing cycles that can shift tank lids, crack risers, or displace pipe connections.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Biomat</h3><p className="text-gray-500 text-sm">A bacterial layer on drainfield trench surfaces. Normal in thin layers, but excess biomat from neglected maintenance clogs the drainfield.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Winterization</h3><p className="text-gray-500 text-sm">Preparing a septic system for extended vacancy during cold months. Involves pumping, draining pipes, and insulating components.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Sludge Level</h3><p className="text-gray-500 text-sm">The depth of settled solids at the tank bottom. When sludge reaches one-third of total tank depth, pumping is needed.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Root Barrier</h3><p className="text-gray-500 text-sm">A physical or chemical barrier between trees and septic components to redirect root growth away from pipes and trenches.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Inspection Port</h3><p className="text-gray-500 text-sm">A small capped pipe extending from the tank or drainfield to near ground level, allowing quick visual checks.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Aerator</h3><p className="text-gray-500 text-sm">The mechanical component in an aerobic treatment unit that injects oxygen. Requires annual inspection, typical lifespan 3 to 5 years.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Distribution Box (D-box)</h3><p className="text-gray-500 text-sm">A small underground box that receives effluent from the tank and divides it equally among drainfield pipes.</p></div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/septic-tank-pumping-cost" className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-amber-400 transition-colors">
              <div className="relative h-48">
                <Image src="/pumpingcostguide.jpg" alt="Septic Tank Pumping Cost" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <p className="text-amber-600 text-sm font-semibold mb-1">Cost Guide</p>
                <h3 className="text-gray-900 font-bold group-hover:text-amber-600 transition-colors">Septic Tank Pumping Cost 2026</h3>
              </div>
            </Link>
            <Link href="/cost-guides/septic-inspection-cost" className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-amber-400 transition-colors">
              <div className="relative h-48">
                <Image src="/septic inspection.jpg" alt="Septic Inspection Cost" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <p className="text-amber-600 text-sm font-semibold mb-1">Cost Guide</p>
                <h3 className="text-gray-900 font-bold group-hover:text-amber-600 transition-colors">Septic Inspection Cost 2026</h3>
              </div>
            </Link>
            <Link href="/reviews/best-septic-system-alarms" className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-amber-400 transition-colors">
              <div className="relative h-48">
                <Image src="/septicalarms.jpg" alt="Best Septic System Alarms" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <p className="text-amber-600 text-sm font-semibold mb-1">Review</p>
                <h3 className="text-gray-900 font-bold group-hover:text-amber-600 transition-colors">Best Septic System Alarms (2026)</h3>
              </div>
            </Link>
          </div>
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

      {/* CTA */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Need Help With Your Septic System?</h2>
          <p className="text-black/80 text-lg mb-8">Connect with certified septic professionals in your area for inspections, pumping, and repairs.</p>
          <Link href="/" className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-900 transition-colors">Find Local Septic Pros</Link>
        </div>
      </section>
    </>
  )
}