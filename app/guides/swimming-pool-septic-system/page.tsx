import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: "Swimming Pools and Septic Systems: The Complete Homeowner's Guide | The Septic Guide",
  description: "Everything homeowners need to know about having a swimming pool and a septic system on the same property. Setback distances, backwash discharge rules, saltwater pool impacts, draining a pool safely, filling from a well, bather load during pool parties, and what to do if your pool is already too close to the drainfield.",
  openGraph: {
    title: "Swimming Pools and Septic Systems: The Complete Homeowner's Guide",
    description: "Everything homeowners need to know about having a swimming pool and a septic system on the same property — setback distances, backwash rules, saltwater impacts, draining safely, and what to do if your pool is too close to the drainfield.",
    url: 'https://theseptic.guide/guides/swimming-pool-septic-system',
    siteName: 'The Septic Guide',
    type: 'article',
    images: [{ url: 'https://theseptic.guide/septicpool.jpg', width: 1200, height: 630, alt: 'Residential in-ground swimming pool in a backyard with green lawn, illustrating pool and septic system coexistence on a private property.' }],
  },
  alternates: { canonical: 'https://theseptic.guide/guides/swimming-pool-septic-system' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Swimming Pools and Septic Systems: The Complete Homeowner's Guide",
  description: "Everything homeowners need to know about having a swimming pool and a septic system on the same property — setback distances, backwash discharge rules, saltwater pool impacts, draining safely, and what to do if a pool is already too close to the drainfield.",
  image: 'https://theseptic.guide/septicpool.jpg',
  dateModified: '2026-03-25',
  author: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
  publisher: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    url: 'https://theseptic.guide',
    logo: { '@type': 'ImageObject', url: 'https://theseptic.guide/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://theseptic.guide/guides/swimming-pool-septic-system' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you have an inground pool with a septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The key requirements are adequate setback distance — typically 25 feet minimum between the pool and the nearest septic component — correct backwash discharge routing away from the drainfield, and pool drainage graded away from the septic system. Before installation, obtain the as-built drawing of your septic system from the county health department and confirm your county's specific setback requirements.",
      },
    },
    {
      '@type': 'Question',
      name: 'How far does a pool need to be from a septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most widely cited guidance is 25 feet minimum from an in-ground pool to the nearest septic system component and 15 feet for above-ground pools. Requirements vary significantly by state and county. Always confirm with your county health department before finalizing pool placement. The setback applies to the entire system — tank, distribution box, drainfield, and all piping — not just the tank.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where should pool backwash be discharged if you have a septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pool backwash must not be discharged into the septic tank, onto the drainfield, or within 100 feet of any drainfield component. Correct options are: a vegetated area at least 100 feet from the drainfield where water can percolate into soil; a dedicated dry well or French drain sited away from the septic system; or where permitted, a road ditch or storm drain. Backwash near the drainfield causes hydraulic flooding from the volume and bacterial disruption from the chlorine concentration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you drain a pool into a septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. A typical pool holds 15,000 to 30,000 gallons — vastly exceeding a septic system's capacity. Pool water must be dechlorinated below 0.1 ppm and discharged at a controlled rate to a large vegetated area far from the septic system, or pumped off-site. Saltwater pool water must be diluted to below 1,000 ppm salt before any ground discharge and must never enter a septic system.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do saltwater pools damage septic systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not through normal bather use and splash-out, which involves small volumes. The concern is backwash and full pool drain events, which carry the pool's full salt concentration of approximately 3,200 ppm. Saltwater at this concentration discharged near a drainfield degrades soil structure, can harm drainfield bacteria, and affects vegetation. Saltwater backwash must be kept at least 100 feet from the drainfield and never introduced into the septic system.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a pool is installed over a septic drainfield?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Construction machinery compacts drainfield soil reducing absorption capacity. The pool shell or deck creates an impervious surface blocking evapotranspiration and oxygen exchange the drainfield needs. Pool drainage may redirect water onto the drainfield. The result is accelerated drainfield failure — surfacing effluent, sewage odors, and backups. Correction options include pool relocation or drainfield replacement, both costing $10,000 to $50,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a pool party cause septic problems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes if the system is stressed or the tank is full. A pool party with 20 guests using indoor bathrooms can add 150 to 200 gallons of hydraulic load to a system designed for 300 to 450 gallons per day — a 30 to 45 percent increase in a few hours. Mitigate by pumping the tank at the start of the season, using a portable toilet for large gatherings, and avoiding laundry on high-use days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I fill my pool from a private well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but plan the filling over multiple days rather than attempting continuous fill. A typical well produces 3 to 10 gallons per minute. A 15,000-gallon pool requires 25 to 83 hours of pumping at this rate. Fill over 2 to 3 days with rest periods to allow well recovery. Also be aware that hard well water can raise the pool\'s calcium hardness level — test water chemistry before and after filling.',
      },
    },
  ],
}

export default function SwimmingPoolSepticSystemPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative w-full" style={{ minHeight: '420px' }}>
        <Image src="/septicpool.jpg" alt="Residential in-ground swimming pool in a backyard with green lawn, illustrating pool and septic system coexistence on a private property." fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: '#E8F4FD', color: '#0D3D30' }}>GUIDE</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-3 max-w-4xl">Swimming Pools and Septic Systems: The Complete Homeowner&#39;s Guide</h1>
          <p className="mt-3 text-sm text-white/80">SG / The Septic Guide / Updated March 2026 · 14 min read</p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides' }, { label: 'Swimming Pools and Septic' }]} />

      <article className="py-12">
        <div className="container-custom max-w-3xl">

          {/* TL;DR Box */}
          <div className="rounded-lg p-5 mb-10" style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
            <p className="text-[#2C3E50] leading-relaxed"><strong>Quick answer:</strong> Yes, you can have a swimming pool and a septic system on the same property — but location, drainage, and maintenance practices matter significantly. The minimum setback between an in-ground pool and a septic drainfield is typically 25 feet, though requirements vary by state and county. Pool backwash must never be discharged onto the drainfield or into the septic tank. Pool water — whether chlorinated or saltwater — must be dechlorinated or desalted before any ground discharge near the system. Done correctly, a pool and a septic system coexist without conflict. Done incorrectly, a pool can flood a drainfield, kill septic bacteria, and cause system failure that costs $5,000 to $20,000 to repair.</p>
          </div>

          {/* The Short Answer */}
          <h2 className="text-2xl font-bold text-[#2C3E50] mt-10 mb-4">The Short Answer to &quot;Can I Have a Pool With a Septic System?&quot;</h2>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">Yes. Millions of American homes have both. The question is not whether it is possible but whether your specific property has the space to site the pool correctly, and whether you understand the ongoing practices that protect your septic system during pool operation.</p>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">The problems occur when homeowners do not know where their septic system components are before digging, when backwash is discharged in the wrong location, when pool water is drained directly toward the drainfield, or when a pool is installed over or too close to drainfield trenches. Every one of these mistakes is avoidable with basic knowledge and a site plan.</p>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">This guide covers every dimension of the pool and septic coexistence question so you can plan a new pool correctly, manage an existing pool safely, and understand your options if you have already discovered a problem.</p>

          {/* Setback Distances */}
          <h2 className="text-2xl font-bold text-[#2C3E50] mt-10 mb-4">Setback Distances: How Far Does a Pool Need to Be From a Septic System?</h2>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">Setback requirements between pools and septic systems vary by state and county and are less universally standardized than setbacks for other structures. The absence of a single national standard is the reason so many homeowners get this wrong — they assume no rule exists.</p>
          <p className="text-[#5A6B7A] leading-relaxed mb-2"><strong>What most jurisdictions require:</strong></p>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">The most commonly cited general guidance is:</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 rounded-lg p-5 bg-white border border-[#E8E4DE] text-center">
              <p className="text-3xl font-extrabold mb-1" style={{ color: '#1D9E75' }}>25 feet</p>
              <p className="text-sm text-[#5A6B7A]">minimum from <strong>in-ground pools</strong> to the nearest septic system component (tank, drainfield, distribution box, or piping)</p>
            </div>
            <div className="flex-1 rounded-lg p-5 bg-white border border-[#E8E4DE] text-center">
              <p className="text-3xl font-extrabold mb-1" style={{ color: '#1D9E75' }}>15 feet</p>
              <p className="text-sm text-[#5A6B7A]">minimum from <strong>above-ground pools</strong> to the nearest septic system component</p>
            </div>
          </div>

          {/* State examples reference block */}
          <div className="rounded-lg p-4 mb-6 bg-white" style={{ borderLeft: '3px solid #5A6B7A' }}>
            <p className="text-sm text-[#5A6B7A] leading-relaxed"><strong>Connecticut:</strong> 15 feet for above-ground, 25 feet for in-ground (public health code). <strong>Missouri:</strong> 15 feet. <strong>Florida:</strong> 5 feet minimum by state code, though most counties require more.</p>
          </div>

          <p className="text-[#5A6B7A] leading-relaxed mb-4"><strong>The critical point about what &quot;septic system&quot; means in these setbacks:</strong> The setback applies to the entire system — tank, distribution box, drainfield, and all associated piping. Many homeowners know where the tank is but do not know where the drainfield extends. A drainfield for a 3-bedroom home typically occupies 1,000 to 2,500 square feet. Measuring 25 feet from the tank may still put your pool directly over the drainfield lines.</p>

          <p className="text-[#5A6B7A] leading-relaxed mb-2"><strong>What to do before any pool installation:</strong></p>
          <ol className="space-y-2 text-[#5A6B7A] mb-4 ml-4 list-decimal list-inside">
            <li>Obtain the as-built drawing of your septic system from your county health department.</li>
            <li>Have the system physically located if the as-built drawing is unavailable or unclear.</li>
            <li>Confirm the setback requirements with your county health department before submitting a pool permit application.</li>
            <li>Include the confirmed septic system location on your pool permit site plan.</li>
          </ol>

          <p className="text-[#5A6B7A] leading-relaxed mb-4"><strong>The reserve area concern:</strong> Most states require every septic system to have a reserve drainfield area — undisturbed land designated for drainfield expansion or replacement if the primary drainfield fails. Installing a pool over the reserve area is as problematic as installing it over the active drainfield, because it eliminates the repair option. Confirm the reserve area location before finalizing pool placement.</p>

          {/* Why Pool Placement Matters */}
          <h2 className="text-2xl font-bold text-[#2C3E50] mt-10 mb-4">Why Pool Placement Matters: What Happens When a Pool Is Too Close</h2>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">Understanding why setbacks exist makes it easier to take them seriously. Several distinct mechanisms cause damage when a pool is sited too close to a septic system.</p>

          <h3 className="text-xl font-bold text-[#2C3E50] mt-6 mb-3">Physical Damage During Construction</h3>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">Pool excavation requires heavy machinery — excavators, dump trucks, and compaction equipment. All of this equipment operates over a footprint significantly larger than the pool itself. If the drainfield is within reach of construction traffic, the weight compacts the soil in the drainfield trenches. Compacted drainfield soil cannot absorb and percolate septic effluent at the designed rate. A drainfield compacted by equipment may fail within months of construction.</p>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">No operator will stop work to check for underground drainfield pipes. Excavation machinery can cut through distribution pipes, crush perforated drainfield pipe, and damage the gravel bed — all invisibly. The damage may not manifest as visible failure until the system backs up during high-use periods.</p>

          <h3 className="text-xl font-bold text-[#2C3E50] mt-6 mb-3">Impervious Surface Over the Drainfield</h3>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">An in-ground pool shell, a pool deck, or even a large above-ground pool placed over the drainfield creates an impervious surface that blocks two mechanisms the drainfield depends on: soil evapotranspiration (the process by which plants and soil surface evaporate effluent moisture) and oxygen exchange (the process by which aerobic bacteria in the soil receive oxygen from the surface). Both are impaired when a hard surface or pool shell sits on top of the drainfield.</p>

          <h3 className="text-xl font-bold text-[#2C3E50] mt-6 mb-3">Surface Water Redirection</h3>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">A pool and its surrounding deck create a large impervious area that redirects rainfall runoff. If the drainage pattern around the pool directs runoff toward the drainfield rather than away from it, rain events add hydraulic load to the drainfield. During heavy rain, a saturated drainfield receiving pool deck runoff can back up the entire septic system.</p>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">Pool installers are required to address drainage in their design, but the interaction with existing septic drainage patterns is rarely considered unless the homeowner raises it explicitly. Ask your pool contractor specifically how the pool and deck drainage will be directed relative to your septic system location.</p>

          {/* Backwash — Red Callout */}
          <div className="rounded-lg p-6 my-10" style={{ backgroundColor: '#FCEBEB', border: '1px solid #A32D2D' }}>
            <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Backwash: The Most Common and Most Damaging Pool-Septic Mistake</h2>
            <p className="text-[#5A6B7A] leading-relaxed mb-4">Filter backwashing is the most frequent source of damage to septic systems from swimming pools — and the most preventable.</p>

            <h3 className="text-xl font-bold text-[#2C3E50] mt-4 mb-3">What Backwashing Is</h3>
            <p className="text-[#5A6B7A] leading-relaxed mb-4">A pool sand filter or DE (diatomaceous earth) filter accumulates debris, algae, and contaminants in the filter media over time. To clean the filter, water flow is reversed, flushing the accumulated material out of the filter and discharging it as waste. A typical backwash cycle discharges 200 to 500 gallons of water in 3 to 5 minutes.</p>

            <h3 className="text-xl font-bold text-[#2C3E50] mt-4 mb-3">Why Backwash Cannot Go Into the Septic System or Near the Drainfield</h3>
            <p className="text-[#5A6B7A] leading-relaxed mb-3"><strong>Volume problem:</strong> 300 to 500 gallons discharged in 3 to 5 minutes is an instantaneous hydraulic shock to a septic system. The average household generates approximately 60 to 70 gallons per person per day — a 4-person household generates 240 to 280 gallons over 24 hours. A single backwash cycle can match or exceed the household&#39;s entire daily wastewater volume in under 5 minutes.</p>
            <p className="text-[#5A6B7A] leading-relaxed mb-3"><strong>Chlorine problem:</strong> Backwash water carries the same chlorine concentration as the pool — typically 1 to 3 ppm of free chlorine. The septic tank and drainfield rely on anaerobic and aerobic bacteria to treat wastewater. High concentrations of chlorine kill these bacteria.</p>
            <p className="text-[#5A6B7A] leading-relaxed mb-3"><strong>Sediment and chemical load:</strong> Backwash also contains algaecides, stabilizers, pH adjustment chemicals, and the accumulated debris the filter was cleaning. None of these belong in a septic system.</p>
            <p className="text-[#5A6B7A] leading-relaxed"><strong>The 100-foot rule:</strong> Published guidance from septic professionals and health departments consistently recommends that pool backwash discharge be kept at least 100 feet from any part of the drainfield.</p>
          </div>

          {/* Where Backwash Should Go — Teal Callout */}
          <div className="rounded-lg p-6 mb-10" style={{ backgroundColor: '#E1F5EE', border: '1px solid #1D9E75' }}>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-5">Where Backwash Should Go</h3>
            <p className="text-[#5A6B7A] leading-relaxed mb-5">Correct discharge options for properties on septic:</p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>1</span>
                <div>
                  <p className="text-[#2C3E50] font-semibold">Vegetated ground at least 100 feet from the drainfield</p>
                  <p className="text-[#5A6B7A] text-sm">The most practical solution on properties with adequate space. Run the backwash hose to a low-lying area well away from the septic system, where the water can percolate into the soil.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>2</span>
                <div>
                  <p className="text-[#2C3E50] font-semibold">Dry well or French drain</p>
                  <p className="text-[#5A6B7A] text-sm">A dedicated dry well or French drain installed specifically for pool backwash discharge. Must be sited at least 100 feet from the drainfield with adequate soil percolation. Cost: $500 to $2,000 installed.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>3</span>
                <div>
                  <p className="text-[#2C3E50] font-semibold">Road ditch or storm drain</p>
                  <p className="text-[#5A6B7A] text-sm">Where permitted by local code, backwash may be discharged to the road ditch or storm drain. Check with your county — some jurisdictions prohibit this because of the chemical content of pool water.</p>
                </div>
              </div>
            </div>
            <p className="text-[#5A6B7A] leading-relaxed mt-5 text-sm"><strong>What backwash must never do:</strong> Enter the septic tank through any indoor drain. Be discharged onto the drainfield or within 50 to 100 feet of the drainfield edge. Run toward the mound system on a mound septic installation.</p>
          </div>

          {/* Draining a Pool */}
          <h2 className="text-2xl font-bold text-[#2C3E50] mt-10 mb-4">Draining a Pool: The Rules for Septic Properties</h2>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">A full pool drain is a much larger volume event than backwash. A 15,000-gallon pool drained without planning can flood a drainfield and cause system failure that takes weeks to recover.</p>

          <h3 className="text-xl font-bold text-[#2C3E50] mt-6 mb-3">The Volume Reality</h3>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">A typical residential in-ground pool holds 15,000 to 30,000 gallons. A septic system is designed to handle the household&#39;s daily wastewater volume — 150 to 400 gallons per day for most households. There is no safe rate at which 15,000 gallons can be directed near a drainfield.</p>

          <h3 className="text-xl font-bold text-[#2C3E50] mt-6 mb-3">The Chlorine and Salt Problem for Ground Discharge</h3>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">Before discharging chlorinated pool water onto the ground — even far from the septic system — the chlorine must be reduced below 0.1 ppm. The standard method is to stop adding chlorine and allow the sun and natural off-gassing to reduce the chlorine concentration over 2 to 4 days. Test with a pool test kit before discharging.</p>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">For saltwater pools, the pool water contains approximately 3,200 ppm of dissolved salt — compared to freshwater at less than 500 ppm. Salt discharged into the soil affects soil structure, can harm vegetation, and at high concentrations affects septic bacteria. Saltwater pool discharge must not enter a septic system under any circumstances.</p>

          {/* Practical approach step card */}
          <div className="rounded-lg p-6 mb-8" style={{ backgroundColor: '#E1F5EE', border: '1px solid #1D9E75' }}>
            <h3 className="text-lg font-bold text-[#2C3E50] mb-5">The Practical Approach for a Full Pool Drain on a Septic Property</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>1</span>
                <p className="text-[#5A6B7A] text-sm">Stop adding chemicals 3 to 5 days before planned draining.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>2</span>
                <p className="text-[#5A6B7A] text-sm">Test chlorine and confirm below 0.1 ppm and pH between 6.0 and 8.0.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>3</span>
                <p className="text-[#5A6B7A] text-sm">For saltwater pools, confirm salt concentration below 1,000 ppm or arrange pump-out service.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>4</span>
                <p className="text-[#5A6B7A] text-sm">Discharge at a controlled rate (12 to 15 gallons per minute maximum) to a large vegetated area at least 100 feet from any septic component.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>5</span>
                <p className="text-[#5A6B7A] text-sm">Monitor the discharge area during draining — if water begins pooling rather than percolating, stop and redirect.</p>
              </div>
            </div>
          </div>

          {/* Saltwater Pools */}
          <h2 className="text-2xl font-bold text-[#2C3E50] mt-10 mb-4">Saltwater Pools and Septic Systems: The Specific Concerns</h2>
          <p className="text-[#5A6B7A] leading-relaxed mb-6">Saltwater pools have become the dominant pool type in new residential installations. They generate chlorine on-site from dissolved salt through electrolysis, maintaining a lower but continuous chlorine level (typically 0.5 to 1.5 ppm) compared to manually chlorinated pools (1 to 3 ppm).</p>

          <div className="space-y-4 mb-8">
            <div className="rounded-lg p-5 bg-white border border-[#E8E4DE]" style={{ borderLeft: '4px solid #1D9E75' }}>
              <h3 className="font-bold text-[#2C3E50] mb-2">Normal Bather Use and Splash Loss</h3>
              <p className="text-[#5A6B7A] text-sm leading-relaxed">The water that leaves a saltwater pool through normal use — splash out, bather carryout, evaporation — contains roughly 3,200 ppm of salt. However, the volumes involved in normal splash-out are small — a few gallons per day — and dispersed over a large area. This level is not a meaningful threat to a properly positioned drainfield. Check your pool drainage patterns and confirm water runs away from the septic system.</p>
            </div>
            <div className="rounded-lg p-5 bg-white border border-[#E8E4DE]" style={{ borderLeft: '4px solid #1D9E75' }}>
              <h3 className="font-bold text-[#2C3E50] mb-2">Backwash From a Saltwater Pool</h3>
              <p className="text-[#5A6B7A] text-sm leading-relaxed">Saltwater pool backwash carries the same 3,200 ppm salt concentration as the pool water and must be handled with the same precautions as a full pool drain in terms of ground discharge location and salt concentration. Saltwater backwash must not enter a septic system. It must not be discharged within 100 feet of a drainfield.</p>
            </div>
            <div className="rounded-lg p-5 bg-white border border-[#E8E4DE]" style={{ borderLeft: '4px solid #1D9E75' }}>
              <h3 className="font-bold text-[#2C3E50] mb-2">The Chlorine Level in Normal Use</h3>
              <p className="text-[#5A6B7A] text-sm leading-relaxed">During normal pool operation, a saltwater pool generator maintains approximately 0.5 to 1.5 ppm of free chlorine. Household cleaning products, laundry bleach, and dishwasher detergents introduce chlorine into the septic system at comparable or higher concentrations through normal household use. The chlorine level in a saltwater pool itself is not a significant threat to the septic system. The concern is the volume and concentration in a full drain or backwash event.</p>
            </div>
          </div>

          {/* Pool Parties — Grey Callout */}
          <div className="rounded-lg p-6 my-10" style={{ backgroundColor: '#F3F4F6', border: '1px solid #D1D5DB' }}>
            <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Pool Parties and Bather Load: What High-Use Days Do to Your Septic System</h2>
            <p className="text-[#5A6B7A] leading-relaxed mb-4">This is the pool-septic interaction that no competitor guide addresses but that every homeowner with a pool eventually encounters.</p>

            <h3 className="text-lg font-bold text-[#2C3E50] mt-4 mb-2">The Design Capacity of Your Septic System</h3>
            <p className="text-[#5A6B7A] leading-relaxed mb-4">A residential septic system is sized for the number of bedrooms in the house. The standard design loading in most states is 150 gallons per bedroom per day — so a 3-bedroom home has a system sized for approximately 450 gallons per day.</p>

            <h3 className="text-lg font-bold text-[#2C3E50] mt-4 mb-2">What a Pool Party Does</h3>
            <p className="text-[#5A6B7A] leading-relaxed mb-4">A pool party with 20 guests significantly exceeds this design capacity if those guests are using indoor bathrooms, kitchen facilities, or outdoor bathrooms connected to the septic system. 20 additional people each using the bathroom 3 to 4 times during a 6-hour party can add 150 to 200 gallons of hydraulic load — a 30 to 45 percent increase over the daily design capacity.</p>

            <h3 className="text-lg font-bold text-[#2C3E50] mt-4 mb-2">How to Protect Your Septic System During High-Use Events</h3>
            <p className="text-[#5A6B7A] leading-relaxed mb-3"><strong>Pump the tank before the season,</strong> not just when problems appear. A tank that starts summer already at high solid levels has less buffer capacity for high-use events.</p>
            <p className="text-[#5A6B7A] leading-relaxed mb-3"><strong>Use portable toilets for large gatherings.</strong> For parties with more than 15 to 20 guests, a portable toilet removes most of the septic load. Cost: $75 to $150 per unit per day rental.</p>
            <p className="text-[#5A6B7A] leading-relaxed mb-3"><strong>Spread water use over time.</strong> Stagger shower use rather than having everyone shower simultaneously at the end of the event.</p>
            <p className="text-[#5A6B7A] leading-relaxed mb-3"><strong>Avoid doing laundry on party day.</strong> Laundry adds 25 to 40 gallons per load to the system.</p>
            <p className="text-[#5A6B7A] leading-relaxed">See the <Link href="/maintenance/septic-system-maintenance-checklist" className="text-[#1D9E75] underline hover:text-[#2C3E50]">septic system maintenance checklist</Link> for the full pump schedule and seasonal maintenance guidance.</p>
          </div>

          {/* Filling a Pool From a Well */}
          <h2 className="text-2xl font-bold text-[#2C3E50] mt-10 mb-4">Filling a Pool From a Well</h2>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">If your property has a private well and you plan to fill or top off the pool from it, there are specific considerations that affect both the well and the septic system indirectly.</p>

          <h3 className="text-xl font-bold text-[#2C3E50] mt-6 mb-3">Well Yield and Recovery Rate</h3>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">A typical residential well produces 3 to 10 gallons per minute under normal pumping conditions. A 15,000-gallon pool takes 25 to 83 hours of continuous pumping to fill at this rate. Most well owners fill the pool over 2 to 3 days, pumping for several hours per day to allow the well adequate recovery time between pumping sessions.</p>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">Attempting to fill the pool in a single continuous session risks exceeding the well&#39;s sustainable yield. See the <a href="https://thewell.guide/problems/well-running-dry" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] underline hover:text-[#2C3E50]">well running dry guide</a> for signs of yield stress during heavy pumping.</p>

          <h3 className="text-xl font-bold text-[#2C3E50] mt-6 mb-3">Impact on Household Water Pressure</h3>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">Running the well pump at high output for extended periods during pool filling reduces household water pressure. This is normal and expected. Plan pool filling for times when household demand is low — overnight or early morning — to minimize the inconvenience.</p>

          <h3 className="text-xl font-bold text-[#2C3E50] mt-6 mb-3">Hardness and Pool Chemistry</h3>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">Well water is often significantly harder than municipal water. High-calcium water raises the pool&#39;s calcium hardness level, which can cause scaling on pool surfaces, tile, and equipment. Test the well water&#39;s hardness before filling and adjust pool chemistry accordingly. A calcium hardness level above 400 ppm in pool water causes scale formation.</p>

          {/* Pool Construction Over Septic */}
          <h2 className="text-2xl font-bold text-[#2C3E50] mt-10 mb-4">Pool Construction Over or Near the Septic System: What the Damage Looks Like and What It Costs</h2>
          <p className="text-[#5A6B7A] leading-relaxed mb-4">If you have discovered that a pool was already installed too close to or over a septic component — either when purchasing a home or after the fact — here is what you are dealing with.</p>

          <h3 className="text-xl font-bold text-[#2C3E50] mt-6 mb-3">Identifying the Problem</h3>
          <p className="text-[#5A6B7A] leading-relaxed mb-2">Signs that a pool-septic proximity issue has caused or is causing damage:</p>
          <ul className="space-y-1 text-[#5A6B7A] mb-6 ml-4">
            <li>• Soft or wet soil around the pool perimeter near where the drainfield is thought to be</li>
            <li>• Sewage odors in the yard near the pool</li>
            <li>• Slow drains or backups inside the house following pool use or heavy rain</li>
            <li>• Unusually lush or persistently wet grass in a band adjacent to the pool</li>
            <li>• A sewage smell in the pool itself (which can indicate drainfield effluent is surfacing near the pool)</li>
          </ul>

          {/* What Options Exist — Amber Callout */}
          <div className="rounded-lg p-6 mb-8" style={{ backgroundColor: '#FAEEDA', border: '1px solid #854F0B' }}>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-4">What Options Exist</h3>
            <p className="text-[#5A6B7A] leading-relaxed mb-4"><strong>If the pool is over or within 10 feet of the active drainfield:</strong> This is the most serious scenario. Options include:</p>
            <p className="text-[#5A6B7A] leading-relaxed mb-3"><strong>Relocating the pool</strong> — removing and rebuilding the pool in a code-compliant location. Cost: $15,000 to $50,000+ depending on pool type and size.</p>
            <p className="text-[#5A6B7A] leading-relaxed mb-3"><strong>Replacing the drainfield in a different location</strong> — if adequate reserve area exists elsewhere on the property. Cost: $5,000 to $20,000 for drainfield replacement. See the <Link href="/cost-guides/drainfield-replacement-cost" className="text-[#1D9E75] underline hover:text-[#2C3E50]">drainfield replacement cost guide</Link> for current pricing.</p>
            <p className="text-[#5A6B7A] leading-relaxed mb-4"><strong>Replacing with an alternative system</strong> — a mound system or alternative treatment system that uses a different area of the property. Cost: $10,000 to $30,000.</p>
            <p className="text-[#5A6B7A] leading-relaxed mb-4"><strong>If the pool is 10 to 25 feet from the drainfield:</strong> The system may be functioning adequately but is at risk. Correct all drainage to ensure pool water runs away from the system. Install a designated backwash discharge point at the code-required distance. Have the system inspected annually.</p>
            <p className="text-[#5A6B7A] leading-relaxed"><strong>If backwash has been incorrectly discharged near the drainfield for years:</strong> Have the septic tank pumped and inspected. Have a licensed inspector assess the drainfield for signs of premature failure. See the <Link href="/problems/drainfield-failing" className="text-[#1D9E75] underline hover:text-[#2C3E50]">signs your drainfield is failing guide</Link> for the full progression of failure indicators.</p>
          </div>

          {/* The Pre-Pool Checklist — Teal Step Card */}
          <div className="rounded-lg p-6 my-10" style={{ backgroundColor: '#E1F5EE', border: '1px solid #1D9E75' }}>
            <h2 className="text-2xl font-bold text-[#2C3E50] mb-5">The Pre-Pool Checklist: What to Do Before Installing a Pool</h2>
            <p className="text-[#5A6B7A] leading-relaxed mb-5">This is the sequence every homeowner should follow before a pool contractor breaks ground.</p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>1</span>
                <p className="text-[#5A6B7A] text-sm"><strong>Obtain the as-built drawing</strong> of your septic system from the county health department. This shows the tank location, distribution box, drainfield extent, and reserve area.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>2</span>
                <p className="text-[#5A6B7A] text-sm"><strong>Have the system physically marked</strong> if the as-built drawing is not clear or if the system predates reliable record-keeping. A licensed septic inspector marks all components with flags or paint.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>3</span>
                <p className="text-[#5A6B7A] text-sm"><strong>Confirm setback requirements</strong> with your county health department. Requirements vary and what applies in your jurisdiction may be more restrictive than the 25-foot general guidance.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>4</span>
                <p className="text-[#5A6B7A] text-sm"><strong>Check the reserve area location</strong> and confirm the proposed pool site does not block future drainfield repair or expansion options.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>5</span>
                <p className="text-[#5A6B7A] text-sm"><strong>Include septic system location on the pool permit site plan.</strong> Most counties require this; submit it proactively even if not explicitly required.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>6</span>
                <p className="text-[#5A6B7A] text-sm"><strong>Plan the backwash discharge point</strong> before construction. Determine where backwash will go, confirm it is at least 100 feet from the drainfield, and install the discharge infrastructure as part of the pool build.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>7</span>
                <p className="text-[#5A6B7A] text-sm"><strong>Confirm pool drainage pattern.</strong> Verify with the pool contractor that the pool and deck are graded to drain away from the septic system, not toward it.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#1D9E75' }}>8</span>
                <p className="text-[#5A6B7A] text-sm"><strong>Have the septic tank pumped</strong> before pool construction begins. Starting with a clean, pumped tank provides maximum buffer capacity during the construction period.</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <h2 className="text-2xl font-bold text-[#2C3E50] mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-10">
            <div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">Can you have an inground pool with a septic system?</h3>
              <p className="text-[#5A6B7A] leading-relaxed">Yes. Millions of homes have both. The key requirements are adequate setback distance — typically 25 feet minimum between the pool and the nearest septic component — correct backwash discharge routing away from the drainfield, and pool drainage graded away from the septic system. Before installation, obtain the as-built drawing of your septic system from the county health department, confirm your county&#39;s setback requirements, and include the septic system location on your pool permit site plan.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">How far does a pool need to be from a septic system?</h3>
              <p className="text-[#5A6B7A] leading-relaxed">The most widely cited guidance is 25 feet minimum from an in-ground pool to the nearest septic system component and 15 feet for above-ground pools. However, requirements vary significantly by state and county. Connecticut specifies 15 feet for above-ground and 25 feet for in-ground. Florida requires a minimum of 5 feet by state code, though many counties require more. Always confirm with your county health department. The setback applies to the entire septic system — tank, distribution box, drainfield, and all piping — not just the tank.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">Where should pool backwash be discharged if you have a septic system?</h3>
              <p className="text-[#5A6B7A] leading-relaxed">Pool backwash must not be discharged into the septic tank, onto the drainfield, or within 100 feet of any drainfield component. The correct options are: discharging to a vegetated area at least 100 feet from the drainfield; a dedicated dry well or French drain sited away from the septic system; or, where permitted, a road ditch or storm drain. Backwash discharged near the drainfield causes hydraulic flooding and bacterial disruption from the chlorine concentration.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">Can you drain a pool into a septic system?</h3>
              <p className="text-[#5A6B7A] leading-relaxed">No. A typical pool holds 15,000 to 30,000 gallons — vastly exceeding a septic system&#39;s capacity. Pool water must be dechlorinated (below 0.1 ppm chlorine) and discharged at a controlled rate to a large vegetated area far from the septic system, or pumped off-site by a professional service. Saltwater pool water must be diluted to below 1,000 ppm salt before any ground discharge and must never enter a septic system.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">Do saltwater pools damage septic systems?</h3>
              <p className="text-[#5A6B7A] leading-relaxed">Not through normal bather use and splash-out, which involves small volumes distributed over a large area. The concern is backwash and full pool drain events, which carry the pool&#39;s full salt concentration of approximately 3,200 ppm. Saltwater at this concentration discharged near a drainfield degrades soil structure, can harm drainfield bacteria, and affects vegetation. Saltwater backwash must be kept at least 100 feet from the drainfield and never introduced into the septic system.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">What happens if a pool is installed over a septic drainfield?</h3>
              <p className="text-[#5A6B7A] leading-relaxed">Several things go wrong. Construction machinery compacts the drainfield soil, reducing its absorption capacity. The pool shell or deck creates an impervious surface blocking evapotranspiration and oxygen exchange. Pool drainage may redirect water onto the drainfield. The result is accelerated drainfield failure — surfacing effluent, sewage odors, and backups. Correction options include pool removal and relocation or drainfield replacement, both costing $10,000 to $50,000 depending on the scenario.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">Can a pool party cause septic problems?</h3>
              <p className="text-[#5A6B7A] leading-relaxed">Yes if the system is already stressed or undersized for the event load. A pool party with 20 guests using indoor bathrooms can add 150 to 200 gallons of hydraulic load to a system designed for 300 to 450 gallons per day — a 30 to 45 percent increase in a few hours. Mitigate by pumping the tank at the start of the season, using a portable toilet for large gatherings, and avoiding laundry on high-use days.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">Can I fill my pool from a private well?</h3>
              <p className="text-[#5A6B7A] leading-relaxed">Yes, but plan the filling over multiple days rather than attempting a continuous fill. A typical well produces 3 to 10 gallons per minute. A 15,000-gallon pool requires 25 to 83 hours of pumping at this rate. Filling over 2 to 3 days with rest periods between sessions allows the well to recover and avoids running the pump beyond its design duty cycle. Hard well water can raise the pool&#39;s calcium hardness level — test the water chemistry before and after filling and adjust accordingly.</p>
            </div>
          </div>

          {/* Glossary */}
          <h2 className="text-2xl font-bold text-[#2C3E50] mt-10 mb-6">Glossary</h2>
          <div className="space-y-6 mb-10">
            <div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-1">Drainfield (Leach Field)</h3>
              <p className="text-[#5A6B7A] leading-relaxed">The subsurface network of perforated pipes buried in gravel-filled trenches that receives partially treated effluent from the septic tank and allows it to percolate slowly through the surrounding soil. The drainfield is the most expensive component of a septic system to repair or replace ($5,000 to $20,000) and the most vulnerable to damage from improper pool placement, drainage, and backwash discharge.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-1">Reserve Area</h3>
              <p className="text-[#5A6B7A] leading-relaxed">A designated area of undisturbed land on a property, identified at the time of septic system permitting, that is set aside for drainfield expansion or replacement if the primary drainfield fails. Most states require a reserve area equal to 50 to 100 percent of the primary drainfield size. Installing a pool over the reserve area eliminates the most cost-effective repair option.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-1">Backwash</h3>
              <p className="text-[#5A6B7A] leading-relaxed">The reverse-flow cleaning cycle of a pool sand filter or DE filter, in which water flow is reversed to flush accumulated debris, algae, and contaminants. A typical backwash cycle discharges 200 to 500 gallons in 3 to 5 minutes. This combination of high volume, elevated chlorine concentration, and chemical load makes backwash incompatible with septic system discharge or near-drainfield ground discharge.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-1">Hydraulic Loading</h3>
              <p className="text-[#5A6B7A] leading-relaxed">The total volume of water entering a septic system within a given time period. Septic systems are designed for a specific daily hydraulic load based on household size — typically 150 gallons per bedroom per day. Events that add large volumes in short periods create hydraulic overload that pushes solids from the tank into the drainfield before treatment is complete, which is one of the primary causes of drainfield failure.</p>
            </div>
          </div>

          {/* External Resource */}
          <div className="rounded-lg p-5 mb-10" style={{ backgroundColor: '#F3F4F6', border: '1px solid #D1D5DB' }}>
            <h2 className="text-xl font-bold text-[#2C3E50] mb-2">External Resource</h2>
            <p className="text-[#5A6B7A] leading-relaxed">The EPA&#39;s Septic Smart program at <a href="https://www.epa.gov/septic" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] underline hover:text-[#2C3E50]">epa.gov/septicsmart</a> provides guidance on protecting septic systems from hydraulic overload and chemical disruption — both directly relevant to pool ownership on a septic property. The program includes homeowner guidance on what should and should not enter a septic system and how to identify signs of system stress before failure occurs.</p>
          </div>

          {/* Related Guides */}
          <h2 className="text-2xl font-bold text-[#2C3E50] mt-10 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            <Link href="/problems/drainfield-failing" className="block p-4 rounded-lg border border-[#E8E4DE] hover:shadow-md transition-shadow bg-white">
              <span className="text-[#1D9E75] font-semibold text-sm">Signs Your Drainfield Is Failing →</span>
            </Link>
            <Link href="/cost-guides/drainfield-replacement-cost" className="block p-4 rounded-lg border border-[#E8E4DE] hover:shadow-md transition-shadow bg-white">
              <span className="text-[#1D9E75] font-semibold text-sm">Drainfield Replacement Cost →</span>
            </Link>
            <Link href="/maintenance/septic-system-maintenance-checklist" className="block p-4 rounded-lg border border-[#E8E4DE] hover:shadow-md transition-shadow bg-white">
              <span className="text-[#1D9E75] font-semibold text-sm">Septic System Maintenance Checklist →</span>
            </Link>
            <Link href="/guides/buying-home-with-septic" className="block p-4 rounded-lg border border-[#E8E4DE] hover:shadow-md transition-shadow bg-white">
              <span className="text-[#1D9E75] font-semibold text-sm">Buying a Home With a Septic System →</span>
            </Link>
            <Link href="/cost-guides/septic-system-installation-cost" className="block p-4 rounded-lg border border-[#E8E4DE] hover:shadow-md transition-shadow bg-white">
              <span className="text-[#1D9E75] font-semibold text-sm">Septic System Installation Cost →</span>
            </Link>
            <Link href="/articles/how-often-pump-septic-tank" className="block p-4 rounded-lg border border-[#E8E4DE] hover:shadow-md transition-shadow bg-white">
              <span className="text-[#1D9E75] font-semibold text-sm">How Often to Pump Your Septic Tank →</span>
            </Link>
          </div>

          <h2 className="text-xl font-bold text-[#2C3E50] mt-8 mb-4">Also on <span style={{ color: '#1D9E75' }}>The Well Guide</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            <a href="https://well.guide/problems/well-running-dry" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg border-l-4 hover:shadow-md transition-shadow bg-white" style={{ borderLeftColor: '#1D9E75', borderTop: '1px solid #E8E4DE', borderRight: '1px solid #E8E4DE', borderBottom: '1px solid #E8E4DE' }}>
              <span className="text-[#1D9E75] font-semibold text-sm">Well Running Dry: Causes, Fixes, and When to Drill Deeper →</span>
              <span className="block text-xs mt-1" style={{ color: '#1D9E75' }}>well.guide</span>
            </a>
            <a href="https://well.guide/guides/complete-well-guide" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg border-l-4 hover:shadow-md transition-shadow bg-white" style={{ borderLeftColor: '#1D9E75', borderTop: '1px solid #E8E4DE', borderRight: '1px solid #E8E4DE', borderBottom: '1px solid #E8E4DE' }}>
              <span className="text-[#1D9E75] font-semibold text-sm">The Complete Guide to Private Well Water Systems →</span>
              <span className="block text-xs mt-1" style={{ color: '#1D9E75' }}>well.guide</span>
            </a>
          </div>

        </div>
      </article>

      {/* Lead Form */}
      <section className="py-12 bg-[#F5F0EB] rounded-2xl mt-12">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] text-center mb-4">Get Free Septic Quotes</h2>
          <p className="text-gray-600 text-center mb-8">Connect with top-rated local septic professionals. Fast, free, no obligation.</p>
          <LeadForm />
        </div>
      </section>
    </>
  )
}
