import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import AuthorBio from '@/components/AuthorBio'

export const metadata: Metadata = {
  title: 'Old Septic Tank Removal Cost: Full Removal vs. Filling in Place (2026) | The Septic Guide',
  description: 'Removing an old septic tank costs $1,500 to $6,000. Filling it in place runs $500 to $2,000. See which one you need, what\u2019s required, and what drives the price.',
  openGraph: {
    title: 'Old Septic Tank Removal Cost: Full Removal vs. Filling in Place (2026)',
    description: 'Removing an old septic tank costs $1,500 to $6,000. Filling it in place runs $500 to $2,000. See which one you need, what\u2019s required, and what drives the price.',
    url: 'https://theseptic.guide/cost-guides/septic-tank-removal-cost',
    siteName: 'The Septic Guide',
    type: 'article',
    images: [{ url: 'https://theseptic.guide/septic-tank-removal-hero.jpg', width: 1200, height: 800, alt: 'Old concrete septic tank being decommissioned in a backyard' }],
  },
  alternates: { canonical: 'https://theseptic.guide/cost-guides/septic-tank-removal-cost' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Old Septic Tank Removal Cost: Full Removal vs. Filling in Place (2026)',
  description: 'Removing an old septic tank costs $1,500 to $6,000. Filling it in place runs $500 to $2,000. See which one you need, what\u2019s required, and what drives the price.',
  image: 'https://theseptic.guide/septic-tank-removal-hero.jpg',
  datePublished: '2026-10-21',
  dateModified: '2026-10-21',
  author: { '@type': 'Organization', name: 'The Septic Guide Editorial Team', url: 'https://theseptic.guide' },
  publisher: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    url: 'https://theseptic.guide',
    logo: { '@type': 'ImageObject', url: 'https://theseptic.guide/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://theseptic.guide/cost-guides/septic-tank-removal-cost' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to remove an old septic tank?', acceptedAnswer: { '@type': 'Answer', text: 'Full removal typically costs $1,500 to $6,000, depending on tank size, material, and access. Filling the tank in place is cheaper, typically $500 to $2,000.' } },
    { '@type': 'Question', name: 'Do I have to remove an old septic tank?', acceptedAnswer: { '@type': 'Answer', text: 'Usually not. Most areas allow filling the tank in place after it\u2019s pumped and crushed. You need full removal if you plan to build over it.' } },
    { '@type': 'Question', name: 'Can I leave an old septic tank in the ground?', acceptedAnswer: { '@type': 'Answer', text: 'Only if it\u2019s properly decommissioned: pumped, crushed, filled, and inspected. Leaving an empty or unfilled tank buried is a collapse and fall hazard.' } },
    { '@type': 'Question', name: 'Do I need a permit to abandon a septic tank?', acceptedAnswer: { '@type': 'Answer', text: 'Most counties require one. Fees are often modest, around $50 in some counties, and an inspection is usually required after the work is done.' } },
    { '@type': 'Question', name: 'Can I abandon a septic tank myself?', acceptedAnswer: { '@type': 'Answer', text: 'Some counties let homeowners crush and fill a tank after a licensed hauler pumps it. Check with your county health department first.' } },
    { '@type': 'Question', name: 'What do you fill an old septic tank with?', acceptedAnswer: { '@type': 'Answer', text: 'Clean sand, gravel, or another fill material your county approves. Never fill it with trash or debris.' } },
    { '@type': 'Question', name: 'Can you build over an old septic tank?', acceptedAnswer: { '@type': 'Answer', text: 'Not over a tank that\u2019s only been filled in place. Remove it and compact the backfill before building a foundation, addition, or pool.' } },
    { '@type': 'Question', name: 'Does an old septic tank affect selling a house?', acceptedAnswer: { '@type': 'Answer', text: 'It can. Buyers\u2019 inspectors and lenders may ask for proof it was properly decommissioned. Keep your permit and inspection records. See our guide to selling a home with a septic system at https://theseptic.guide/guides/selling-home-with-septic-system.' } },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Filling in Place (Abandonment)',
  description: 'The standard steps for decommissioning an old septic tank by filling it in place.',
  step: [
    { '@type': 'HowToStep', name: 'Get an abandonment permit', text: 'Get an abandonment permit from the county health department.' },
    { '@type': 'HowToStep', name: 'Pump the tank', text: 'Have a licensed septage hauler pump the tank completely and keep the receipt.' },
    { '@type': 'HowToStep', name: 'Remove or crush the lid', text: 'Remove or crush the lid.' },
    { '@type': 'HowToStep', name: 'Crush the bottom', text: 'Crush the bottom or punch holes in it so the tank can\u2019t hold water.' },
    { '@type': 'HowToStep', name: 'Fill the tank', text: 'Fill the tank with clean sand, gravel, or other approved fill.' },
    { '@type': 'HowToStep', name: 'Cap the inlet pipe', text: 'Cap the old inlet pipe from the house.' },
    { '@type': 'HowToStep', name: 'Schedule the inspection', text: 'Schedule the county inspection.' },
  ],
}

export default function SepticTankRemovalCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Hero */}
      <section className="relative w-full" style={{ minHeight: '420px' }}>
        <Image src="/septic-tank-removal-hero.jpg" alt="Old concrete septic tank being decommissioned in a backyard" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-amber-500 text-white mb-3">Cost Guide</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-3">
            Old Septic Tank Removal Cost
            <span className="block text-amber-400">Full Removal vs. Filling in Place (2026)</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Removing an old septic tank costs $1,500 to $6,000. Filling it in place runs $500 to $2,000. Here is which one you need and what drives the price.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white text-sm font-bold">SG</div>
            <div>
              <p className="text-white text-sm font-medium">The Septic Guide Editorial Team</p>
              <p className="text-gray-300 text-xs">Updated Oct 2026 &middot; 12 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Cost Guides', href: '/cost-guides' },
        { label: 'Septic Tank Removal Cost' }
      ]} />

      {/* Main Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* TL;DR */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5 mb-10">
          <p className="text-slate-800 font-bold mb-2">TL;DR</p>
          <ul className="text-slate-800 leading-relaxed space-y-2 list-disc pl-5 text-sm">
            <li>Filling an old tank in place (also called abandonment or decommissioning) typically costs <strong>$500 to $2,000</strong>. Full removal typically costs <strong>$1,500 to $6,000</strong>.</li>
            <li>Most homeowners don't need full removal. Filling in place is allowed in most areas and is the standard approach when nothing will be built on top.</li>
            <li>You need full removal when you're building, adding on, or putting a pool or driveway over the tank.</li>
            <li>Never leave an old tank empty and buried. Lids rot, tanks collapse, and an open tank is a serious fall hazard.</li>
            <li>Most counties require a permit, a licensed pumper, and an inspection. Permit fees are often around $50 to a few hundred dollars.</li>
          </ul>
        </div>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          Old septic tanks turn up in a few common ways: the house switched to city sewer years ago, a new system was installed and the old tank was never dealt with, or a new owner finds a buried tank while landscaping or planning an addition. Whatever the reason, an unused tank has to be handled properly, both for safety and because it can come up in an inspection when you sell.
        </p>

        {/* Build-Over Rule */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Build-Over Rule</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Whether you fill or remove comes down to one question: will anything go on top of the tank?
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Your situation</th>
                  <th className="px-4 py-3 text-left font-semibold">What you need</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 text-slate-600">Nothing will be built over it (lawn or garden stays)</td><td className="px-4 py-3 text-slate-600">Fill in place. Cheapest, and accepted in most areas.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 text-slate-600">Building an addition, garage, deck footings, or pool over it</td><td className="px-4 py-3 text-slate-600">Full removal. Fill material in a crushed tank isn't a stable base for a foundation.</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 text-slate-600">Driveway or heavy equipment will cross it</td><td className="px-4 py-3 text-slate-600">Usually full removal, or an engineer's sign-off on compacted fill</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 text-slate-600">Steel tank or cesspool of unknown condition</td><td className="px-4 py-3 text-slate-600">Act soon. Steel tanks rust through and cesspools collapse. Ask about removal.</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 text-slate-600">Switching to sewer</td><td className="px-4 py-3 text-slate-600">Decommissioning is part of the conversion. See our <Link href="/cost-guides/septic-to-sewer-conversion-cost" className="text-amber-700 underline hover:text-amber-800">septic to sewer conversion cost guide</Link>.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 text-slate-600">Replacing your septic system</td><td className="px-4 py-3 text-slate-600">The old tank is usually decommissioned as part of the job. See our <Link href="/cost-guides/septic-system-installation-cost" className="text-amber-700 underline hover:text-amber-800">septic installation cost guide</Link>.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed">
            If you're unsure what will go there later, ask about removal now. Removing a tank you've already filled costs more than doing it once.
          </p>
        </section>

        {/* Just Found an Old Tank */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Just Found an Old Tank on Your Property?</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            New owners often discover an old tank while landscaping, building a fence, or planning an addition. Here's what to do.
          </p>
          <h3 className="text-lg font-bold text-slate-900 mb-3">Right away, if the lid is cracked, missing, or the ground is sinking:</h3>
          <ol className="list-decimal pl-6 text-slate-700 mb-6 space-y-2">
            <li>Keep people and pets away. Rotted lids give way without warning.</li>
            <li>Cover the area with a sheet of plywood weighted at the edges, and put up a barrier or caution tape.</li>
            <li>Don't step on the lid, and never climb into a tank. Septic tanks can hold toxic gases that cause collapse in seconds.</li>
            <li>Call a septic contractor. A failing lid over an open tank is an emergency job.</li>
          </ol>
          <h3 className="text-lg font-bold text-slate-900 mb-3">If the tank seems stable:</h3>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2">
            <li>Ask your county health department for records. They may show when the tank was installed and whether it was ever decommissioned.</li>
            <li>Find out whether the house is still connected to it. If you're on city sewer, the tank should be disconnected.</li>
            <li>Check your purchase documents and inspection report. If the tank wasn't mentioned, talk to your real estate agent or attorney about what the seller should have disclosed. Our <Link href="/guides/buying-home-with-septic" className="text-amber-700 underline hover:text-amber-800">guide to buying a home with a septic system</Link> covers what inspections should catch.</li>
            <li>Get quotes to decommission it. The rest of this guide covers the options and costs.</li>
          </ol>
        </section>

        {/* 5-Minute Diagnostic */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5-Minute Diagnostic: What Are You Dealing With?</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Before you call anyone, gather what a contractor will ask about.
          </p>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2">
            <li><strong>Find the tank.</strong> Check your property records, county health department, or old inspection reports. Our guide on <Link href="/articles/how-to-find-your-septic-tank" className="text-amber-700 underline hover:text-amber-800">how to find your septic tank</Link> walks through the methods.</li>
            <li><strong>Figure out the material.</strong> Concrete is the most common. Steel tanks are found on older homes and are the most likely to have rusted through. Fiberglass and plastic are lighter and easier to remove. See <Link href="/comparisons/concrete-vs-plastic-vs-fiberglass-septic-tanks" className="text-amber-700 underline hover:text-amber-800">concrete vs. plastic vs. fiberglass tanks</Link>.</li>
            <li><strong>Check whether it's still connected.</strong> If the house is on sewer, the old inlet pipe should be capped. If you're not sure, a plumber or septic contractor can confirm it.</li>
            <li><strong>Look at the lid and the ground around it.</strong> Cracked lids, sagging ground, or a soft spot over the tank all mean the tank should be dealt with soon. Keep kids and pets away.</li>
            <li><strong>Call your county health department.</strong> Ask whether they require a permit, whether filling in place is allowed, and what fill material they accept. This one call answers most of the cost questions.</li>
          </ol>
          <p className="text-slate-700 mt-4 leading-relaxed">
            Note every at-risk pipe and what it's made of. That's your project list.
          </p>
        </section>

        {/* What Each Option Involves */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What Each Option Involves</h2>

          <h3 className="text-lg font-bold text-slate-900 mb-3">Filling in Place (Abandonment)</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            This is the standard approach. Requirements vary by county, but the steps are usually:
          </p>
          <ol className="list-decimal pl-6 text-slate-700 mb-6 space-y-2">
            <li>Get an abandonment permit from the county health department.</li>
            <li>Have a licensed septage hauler pump the tank completely and keep the receipt.</li>
            <li>Remove or crush the lid.</li>
            <li>Crush the bottom or punch holes in it so the tank can't hold water.</li>
            <li>Fill the tank with clean sand, gravel, or other approved fill.</li>
            <li>Cap the old inlet pipe from the house.</li>
            <li>Schedule the county inspection.</li>
          </ol>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Some counties allow homeowners to do the crushing and filling themselves. Pumping almost always has to be done by a licensed hauler.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mb-3">Full Removal</h3>
          <p className="text-slate-700 mb-6 leading-relaxed">
            The tank is pumped, then excavated, broken up or lifted out, and hauled away. The hole is backfilled and compacted so the area can support a structure. Removal costs more because of the excavation equipment, hauling, disposal fees, and compaction.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mb-3">What About the Drainfield?</h3>
          <p className="text-slate-700 leading-relaxed">
            In most areas the old drainfield or leach lines can stay in place once the tank is decommissioned. You only need to remove them if you're building over that area. Excavation typically runs about $1 to $5 per square foot, so clearing a drainfield usually adds roughly $1,000 to $5,000, more for large fields or where trees and roots are involved. Check with your county, since a few areas have their own rules.
          </p>
        </section>

        {/* County Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Rules Vary by County: Four Real Examples</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Every county sets its own abandonment rules. These four show how much they differ:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">County</th>
                  <th className="px-4 py-3 text-left font-semibold">Who can do the work</th>
                  <th className="px-4 py-3 text-left font-semibold">What's required</th>
                  <th className="px-4 py-3 text-left font-semibold">How it's verified</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Licking County, OH</td><td className="px-4 py-3 text-slate-600">Pumping by a county-registered pumper</td><td className="px-4 py-3 text-slate-600">$50 permit. Remove or crush the top, crush at least one side, fill with clean fill.</td><td className="px-4 py-3 text-slate-600">On-site inspection plus a submitted form</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Hillsborough County, FL</td><td className="px-4 py-3 text-slate-600">Licensed septic contractor, licensed plumber, or the owner of an owner-occupied home</td><td className="px-4 py-3 text-slate-600">$50 permit. Pump, crush or puncture the bottom, fill, flag the location.</td><td className="px-4 py-3 text-slate-600">On-site inspection. Skipping it can mean a fine.</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Sacramento County, CA</td><td className="px-4 py-3 text-slate-600">Pumping by a county-registered firm</td><td className="px-4 py-3 text-slate-600">Destruction permit. Pump, puncture the bottom, fill with sand, gravel, or concrete.</td><td className="px-4 py-3 text-slate-600">Before-and-after photos plus the pumping receipt, emailed in</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Austin, TX</td><td className="px-4 py-3 text-slate-600">Licensed hauler pumps. The plumber doing a sewer hookup can abandon the tank.</td><td className="px-4 py-3 text-slate-600">Fee paid before work. Fill with material under 3 inches, no clay or debris.</td><td className="px-4 py-3 text-slate-600">On-site inspection</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Your county health department sets the rules where you live. For more on the permit process in general, see our <Link href="/guides/septic-system-permits" className="text-amber-700 underline hover:text-amber-800">septic system permits guide</Link>.
          </p>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Cost Breakdown</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Typical ranges. Your price depends on tank size and material, access, local disposal fees, and county requirements.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Cost item</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical range</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Permit</td><td className="px-4 py-3 text-slate-600">Often $50 to a few hundred dollars</td><td className="px-4 py-3 text-slate-600">Several counties charge $50</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Pumping</td><td className="px-4 py-3 text-slate-600">About $300 to $700</td><td className="px-4 py-3 text-slate-600">Required for both options. National averages run around $400. See our <Link href="/articles/septic-tank-pumping-cost" className="text-amber-700 underline hover:text-amber-800">pumping cost guide</Link>.</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Fill in place, total</td><td className="px-4 py-3 text-slate-600">$500 to $2,000</td><td className="px-4 py-3 text-slate-600">Includes pumping, crushing, fill, and capping</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Full removal, total</td><td className="px-4 py-3 text-slate-600">$1,500 to $6,000</td><td className="px-4 py-3 text-slate-600">Includes pumping, excavation, hauling, backfill, and compaction</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Drainfield removal (if needed)</td><td className="px-4 py-3 text-slate-600">Roughly $1,000 to $5,000</td><td className="px-4 py-3 text-slate-600">Excavation at about $1 to $5 per square foot. Only needed if you're building over it.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Locating a buried tank</td><td className="px-4 py-3 text-slate-600">Usually a few hundred dollars</td><td className="px-4 py-3 text-slate-600">Only if records don't show where it is</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-3">How Tank Material Affects the Price</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Tank material</th>
                  <th className="px-4 py-3 text-left font-semibold">Fill in place</th>
                  <th className="px-4 py-3 text-left font-semibold">Full removal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Concrete</td><td className="px-4 py-3 text-slate-600">Standard cost</td><td className="px-4 py-3 text-slate-600">Highest. Heavy, so it has to be broken up and hauled in pieces.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Steel</td><td className="px-4 py-3 text-slate-600">Standard cost, but often urgent because steel rusts through</td><td className="px-4 py-3 text-slate-600">Mid-range. Easier to cut and crush, but a corroded tank can collapse during excavation.</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Fiberglass or plastic</td><td className="px-4 py-3 text-slate-600">Standard cost</td><td className="px-4 py-3 text-slate-600">Lowest. Light enough to lift out mostly intact.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Cesspool (block or stone-lined pit)</td><td className="px-4 py-3 text-slate-600">Often required to be filled. Ask your county.</td><td className="px-4 py-3 text-slate-600">Varies. Depends on depth and how much lining must come out.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Filling in place costs about the same regardless of material. Material mostly matters when the tank has to come out.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mb-3">What pushes the price up:</h3>
          <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-2">
            <li>Large or multi-compartment tanks</li>
            <li>Tight access where equipment can't reach easily</li>
            <li>Steel tanks that have partially collapsed</li>
            <li>Rock, high water tables, or deep burial</li>
            <li>Counties that require an engineer or extra inspections</li>
          </ul>
          <h3 className="text-lg font-bold text-slate-900 mb-3">What brings it down:</h3>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>Doing it at the same time as a sewer hookup or new system install, when the equipment is already on site</li>
            <li>Counties that let homeowners do the crushing and filling</li>
          </ul>
        </section>

        {/* 10-Year TCO */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">10-Year Total Cost of Ownership</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Leaving an old tank alone looks free. Over a decade, it often isn't.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Option</th>
                  <th className="px-4 py-3 text-left font-semibold">Upfront cost</th>
                  <th className="px-4 py-3 text-left font-semibold">Ongoing risk</th>
                  <th className="px-4 py-3 text-left font-semibold">10-year outlook</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Leave it as is</td><td className="px-4 py-3 text-slate-600">$0</td><td className="px-4 py-3 text-slate-600">Collapse, sinkhole, fall hazard, possible fines, problems at sale</td><td className="px-4 py-3 text-slate-600">Often ends up costing more: emergency decommissioning plus whatever damage the collapse causes</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-slate-900">Fill in place</td><td className="px-4 py-3 text-slate-600">$500 to $2,000</td><td className="px-4 py-3 text-slate-600">Minimal if done to code and inspected</td><td className="px-4 py-3 text-slate-600">One-time cost. Paperwork protects you at sale.</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-slate-900">Full removal</td><td className="px-4 py-3 text-slate-600">$1,500 to $6,000</td><td className="px-4 py-3 text-slate-600">None</td><td className="px-4 py-3 text-slate-600">One-time cost. Area is usable for anything.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            If you plan to build over the area within 10 years, removal now is cheaper than filling now and digging it out later.
          </p>

          {/* CTA */}
          <div className="bg-slate-800 rounded-2xl p-8 text-center">
            <p className="text-slate-300 mb-4">Compare prices on decommissioning or removal before the ground freezes.</p>
            <Link href="/get-quote" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Get free quotes from local septic contractors
            </Link>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li><strong>Leaving an empty tank buried.</strong> An empty tank is more dangerous than a full one. The lid can rot and collapse with no warning.</li>
            <li><strong>Filling without pumping first.</strong> Sewage left in the tank contaminates the ground and almost always fails inspection.</li>
            <li><strong>Skipping the permit.</strong> Unpermitted work can lead to fines and can hold up a home sale when the buyer's inspector asks for records.</li>
            <li><strong>Filling with the wrong material.</strong> Use the clean fill your county approves. Trash, debris, and organic material settle and create sinkholes.</li>
            <li><strong>Building over a filled tank.</strong> A crushed, filled tank isn't a foundation. If anything goes on top, remove it.</li>
            <li><strong>Forgetting to cap the inlet pipe.</strong> An open line from the house can let sewer gas or water travel where it shouldn't.</li>
            <li><strong>Not keeping records.</strong> Save the permit, pumping receipt, and inspection sign-off. Buyers and their lenders may ask for them.</li>
          </ul>
        </section>

        {/* When to Call a Pro */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">When to Call a Pro</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Almost always. Pumping requires a licensed hauler in nearly every area, and full removal requires excavation equipment. Call a septic contractor when:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
            <li>You need the tank pumped (required for either option)</li>
            <li>You're doing full removal</li>
            <li>The tank is steel, collapsing, or in poor condition</li>
            <li>You can't find the tank or don't know its size</li>
            <li>Your county requires a licensed contractor for abandonment</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            The one part some homeowners handle themselves is crushing and filling a pumped tank, and only where the county allows it.
          </p>

          <h3 id="quote-checklist" className="text-lg font-bold text-slate-900 mb-3 mt-8">Quote Checklist</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Ask every contractor these questions. The answers are where quotes differ most:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
            <li>Does the price include the permit, or will I pull it myself?</li>
            <li>Is pumping included, and is your hauler licensed in this county?</li>
            <li>Are you filling in place or removing the tank? Why?</li>
            <li>What fill material are you using, and does the county approve it?</li>
            <li>Does the price include capping the inlet pipe?</li>
            <li>Are disposal and hauling fees included?</li>
            <li>Will you schedule the inspection and give me the sign-off paperwork?</li>
            <li>What happens to the price if the tank is larger than expected or partially collapsed?</li>
          </ul>
          <p className="text-slate-700 mb-8 leading-relaxed">
            Get at least three quotes. A quote that's much lower than the rest usually leaves out the permit, the inspection, or the fill.
          </p>

          {/* Lead Form */}
          <section className="py-12 bg-[#F5F0EB] rounded-2xl">
            <div className="max-w-2xl mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#4A6741] text-center mb-3">Get Expert Septic Help</h2>
              <p className="text-gray-600 text-center mb-8">Connect with qualified septic professionals in your area. Free quotes, no obligation.</p>
              <AuthorBio />
              <LeadForm />
            </div>
          </section>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">How much does it cost to remove an old septic tank?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">Full removal typically costs $1,500 to $6,000, depending on tank size, material, and access. Filling the tank in place is cheaper, typically $500 to $2,000.</div>
            </details>
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">Do I have to remove an old septic tank?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">Usually not. Most areas allow filling the tank in place after it's pumped and crushed. You need full removal if you plan to build over it.</div>
            </details>
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">Can I leave an old septic tank in the ground?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">Only if it's properly decommissioned: pumped, crushed, filled, and inspected. Leaving an empty or unfilled tank buried is a collapse and fall hazard.</div>
            </details>
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">Do I need a permit to abandon a septic tank?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">Most counties require one. Fees are often modest, around $50 in some counties, and an inspection is usually required after the work is done.</div>
            </details>
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">Can I abandon a septic tank myself?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">Some counties let homeowners crush and fill a tank after a licensed hauler pumps it. Check with your county health department first.</div>
            </details>
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">What do you fill an old septic tank with?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">Clean sand, gravel, or another fill material your county approves. Never fill it with trash or debris.</div>
            </details>
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">Can you build over an old septic tank?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">Not over a tank that's only been filled in place. Remove it and compact the backfill before building a foundation, addition, or pool.</div>
            </details>
            <details className="bg-gray-50 rounded-lg border border-gray-200">
              <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer">Does an old septic tank affect selling a house?</summary>
              <div className="px-5 pb-4 text-slate-600 text-sm">It can. Buyers' inspectors and lenders may ask for proof it was properly decommissioned. Keep your permit and inspection records. See our guide to <Link href="/guides/selling-home-with-septic-system" className="text-amber-700 underline hover:text-amber-800">selling a home with a septic system</Link>.</div>
            </details>
          </div>
        </section>

        {/* Glossary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Glossary</h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            <div className="border-b border-gray-200 pb-3">
              <dt className="font-bold text-slate-900 text-sm">Abandonment</dt>
              <dd className="text-slate-600 text-xs mt-1">Taking a septic tank out of service and leaving it in the ground after it's pumped, crushed, and filled.</dd>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <dt className="font-bold text-slate-900 text-sm">Decommissioning</dt>
              <dd className="text-slate-600 text-xs mt-1">Another term for abandonment, often used by health departments.</dd>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <dt className="font-bold text-slate-900 text-sm">Full removal</dt>
              <dd className="text-slate-600 text-xs mt-1">Excavating the tank and hauling it off-site.</dd>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <dt className="font-bold text-slate-900 text-sm">Septage hauler</dt>
              <dd className="text-slate-600 text-xs mt-1">A licensed company that pumps and disposes of septic tank contents.</dd>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <dt className="font-bold text-slate-900 text-sm">Inlet pipe</dt>
              <dd className="text-slate-600 text-xs mt-1">The pipe that carries wastewater from the house into the tank. It must be capped when the tank is decommissioned.</dd>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <dt className="font-bold text-slate-900 text-sm">Clean fill</dt>
              <dd className="text-slate-600 text-xs mt-1">Sand, gravel, or soil free of debris and organic material.</dd>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <dt className="font-bold text-slate-900 text-sm">Compaction</dt>
              <dd className="text-slate-600 text-xs mt-1">Packing backfill down in layers so it can support weight without settling.</dd>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <dt className="font-bold text-slate-900 text-sm">Drainfield</dt>
              <dd className="text-slate-600 text-xs mt-1">The area of buried pipes or chambers where treated wastewater soaks into the soil. Also called a leach field.</dd>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <dt className="font-bold text-slate-900 text-sm">Cesspool</dt>
              <dd className="text-slate-600 text-xs mt-1">An older, lined pit that collects wastewater without separate treatment. See <Link href="/comparisons/cesspool-vs-septic-system" className="text-amber-700 underline hover:text-amber-800">cesspool vs. septic system</Link>.</dd>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <dt className="font-bold text-slate-900 text-sm">Health department inspection</dt>
              <dd className="text-slate-600 text-xs mt-1">The county's sign-off that the tank was decommissioned correctly.</dd>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Related Guides</h2>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">On theseptic.guide</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Link href="/cost-guides/septic-to-sewer-conversion-cost" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Septic to Sewer Conversion Cost</h4>
              <p className="text-slate-600 text-sm mt-1">Full cost breakdown for converting from septic to municipal sewer, where tank decommissioning is one line item in a larger project.</p>
            </Link>
            <Link href="/cost-guides/septic-system-installation-cost" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Septic System Installation Cost</h4>
              <p className="text-slate-600 text-sm mt-1">What a new system costs, including decommissioning the old tank as part of a replacement job.</p>
            </Link>
            <Link href="/articles/how-to-find-your-septic-tank" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">How to Find Your Septic Tank</h4>
              <p className="text-slate-600 text-sm mt-1">Methods for locating a buried tank before you can get a decommissioning quote.</p>
            </Link>
            <Link href="/articles/septic-tank-pumping-cost" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Septic Tank Pumping Cost</h4>
              <p className="text-slate-600 text-sm mt-1">What pumping costs on its own, since it is required for both filling and removal.</p>
            </Link>
            <Link href="/guides/septic-system-permits" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Septic System Permits</h4>
              <p className="text-slate-600 text-sm mt-1">How the permit process works for septic work, including abandonment permits.</p>
            </Link>
            <Link href="/guides/buying-home-with-septic" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Buying a Home with a Septic System</h4>
              <p className="text-slate-600 text-sm mt-1">What inspections should catch, including an old tank that was never decommissioned.</p>
            </Link>
            <Link href="/guides/selling-home-with-septic-system" className="block bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900">Selling a Home with a Septic System</h4>
              <p className="text-slate-600 text-sm mt-1">How documentation of proper decommissioning protects you during a sale.</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
