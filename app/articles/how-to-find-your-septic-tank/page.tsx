import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Find Your Septic Tank: 5 Methods That Work | The Septic Guide',
  description: 'Your septic tank is buried 5 to 25 feet from your house. Learn 5 proven methods to locate it, from checking records to using a soil probe, plus what to do after you find it.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How deep is a septic tank buried?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential septic tanks are buried 6 inches to 4 feet below ground level. The depth depends on the local water table, frost line, and site grading. Tanks with risers have access lids at or near ground level regardless of tank depth.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is a septic tank from the house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typically 5 to 25 feet from the foundation. Most jurisdictions require a minimum of 5 to 10 feet of separation between the tank and the house. The exact distance depends on local building codes and the property layout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I find my septic tank myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most homeowners can locate their tank using property records, by following the sewer line from the house with a soil probe, or by looking for visual clues in the yard. If these methods fail, a professional can locate it for $100 to $400.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a septic tank lid look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Septic tank lids vary by material and age. Concrete tanks have flat concrete or heavy plastic lids, sometimes buried under soil. Tanks with risers have green or black circular plastic lids at ground level, typically 18 to 24 inches in diameter, secured with screws or bolts. Older tanks may have metal lids or handles.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to have a septic tank located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A professional septic tank locate costs $100 to $400 depending on the method used. A sewer camera inspection runs $100 to $300. Ground-penetrating radar costs $300 to $500. Many pumping companies will locate the tank as part of a pumping service at no additional charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I install risers after finding my tank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Risers are the most cost-effective upgrade you can make. At $200 to $400 installed, they eliminate $50 to $200 in digging fees at every future service visit and make inspections and pumping faster and easier. They pay for themselves within two to three pump-outs.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Find Your Septic Tank: 5 Methods That Work',
  description: 'Your septic tank is buried 5 to 25 feet from your house. Learn 5 proven methods to locate it, from checking records to using a soil probe, plus what to do after you find it.',
  image: 'https://theseptic.guide/how to find your septic tank.jpg',
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

export default function HowToFindYourSepticTank() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/how to find your septic tank.jpg'
          alt='Homeowner locating septic tank in yard'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-amber-700'></div>
            <span className='text-amber-500 font-bold tracking-[0.3em] text-sm uppercase'>Guide</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            How to Find Your<br />
            <span className='text-amber-500'>Septic Tank</span>
          </h1>
          <p className='text-slate-300 text-lg max-w-2xl mb-6 leading-relaxed'>
            5 methods that work &mdash; ranked from easiest to most effort. Most homeowners find their tank using the first or second method.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-sm'>SG</div>
            <div>
              <p className='text-white font-semibold'>The Septic Guide</p>
              <p className='text-slate-400 text-sm'>Updated Mar 2026 &middot; 18 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Articles', href: '/articles' }, { label: 'How to Find Your Septic Tank' }]} />

      {/* Article Content */}
      <article className='max-w-4xl mx-auto px-6 py-16'>
        {/* Introduction */}
        <div className='prose prose-lg max-w-none'>
          <p className='text-xl text-slate-700 leading-relaxed mb-8'>
            Your septic tank is buried <strong>5 to 25 feet</strong> from your house, typically <strong>6 inches to 4 feet</strong> underground. The fastest way to find it is to check your property records or call your local health department for the as-built drawing.
          </p>
          <p className='text-slate-600 leading-relaxed mb-8'>
            If no records exist, follow the sewer line from where it exits your house and probe the soil every 2 feet until you hit a flat, hard surface.
          </p>
          <p className='text-slate-600 leading-relaxed mb-8'>
            Here are five methods, ranked from easiest to most effort. Most homeowners find their tank using the first or second method.
          </p>
        </div>

        {/* Method 1 */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-2'>Method 1: Check Your Records</h2>
          <p className='text-amber-700 font-semibold mb-6'>5 Minutes</p>
          <div className='prose prose-lg max-w-none'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              This is the fastest and most reliable method. You may already have the information without realizing it.
            </p>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Where to Look</h3>
            <ul className='space-y-3 text-slate-600 mb-6'>
              <li>Your <strong>home inspection report</strong> from when you purchased the property. The septic system location is almost always documented in the inspection.</li>
              <li>Your <strong>property deed or closing documents</strong>. Some include a site plan showing the septic layout.</li>
              <li>The <strong>as-built drawing or septic permit</strong> filed with your local health department or county building department. This is the most detailed record and shows exactly where the tank, distribution box, and drainfield were installed. Most counties retain these records for all addresses. Call your county health department and provide your address.</li>
              <li>Your county&apos;s <strong>online property records portal</strong>. Some jurisdictions have digitized septic permits and make them available online.</li>
            </ul>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>What You&apos;re Looking For</h3>
            <p className='text-slate-600 leading-relaxed mb-6'>
              A diagram showing the tank&apos;s position relative to the house, with measurements &mdash; distance from the foundation, direction from a specific corner. The diagram should also show the drainfield location and any replacement drainfield area.
            </p>
            <p className='text-slate-600 leading-relaxed'>
              If records exist, this method takes five minutes and gives you an exact location. Skip to <strong>After You Find It</strong> at the bottom.
            </p>
          </div>
        </div>

        {/* Method 2 */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-2'>Method 2: Follow the Sewer Line From the House</h2>
          <p className='text-amber-700 font-semibold mb-6'>15 to 30 Minutes</p>
          <div className='prose prose-lg max-w-none'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              If records aren&apos;t available, this is the most reliable hands-on method.
            </p>
            <div className='space-y-6'>
              <div className='border-l-4 border-amber-500 pl-6'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 1</h3>
                <p className='text-slate-600'>Find where the main sewer line exits your house. Go to your basement or crawlspace and look for a 4-inch diameter pipe &mdash; usually PVC, sometimes cast iron in older homes &mdash; heading through the foundation wall toward the yard. In homes without basements, check where the main drain exits through the slab or foundation on the side of the house facing the yard.</p>
              </div>
              <div className='border-l-4 border-amber-500 pl-6'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 2</h3>
                <p className='text-slate-600'>Go outside and stand at the point where that pipe exits the foundation. The sewer line runs in a straight line (or close to it) from this point toward the septic tank. Mark this starting point.</p>
              </div>
              <div className='border-l-4 border-amber-500 pl-6'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 3</h3>
                <p className='text-slate-600'>Walk in a straight line away from the house in the direction the pipe was heading. The tank is typically 10 to 25 feet from the foundation, though it can be as close as 5 feet.</p>
              </div>
              <div className='border-l-4 border-amber-500 pl-6'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 4</h3>
                <p className='text-slate-600'>Use a thin metal soil probe (available at hardware stores for $15 to $30) and push it into the ground every 2 feet along the line. Push gently to a depth of about 4 feet. When you hit something flat and hard &mdash; concrete, fiberglass, or plastic &mdash; you&apos;ve likely found the tank.</p>
              </div>
              <div className='border-l-4 border-amber-500 pl-6'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 5</h3>
                <p className='text-slate-600'>Once you hit the tank, probe around its edges to determine the tank&apos;s outline. A standard residential tank is approximately 4.5 feet wide by 8 feet long. The access lids are usually on top, centered along the length.</p>
              </div>
            </div>
            <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 mt-6'>
              <p className='text-slate-700 text-sm'><strong>Safety note:</strong> Probe gently. You don&apos;t want to crack a pipe or damage the tank. If you feel hollow space or the probe drops suddenly, stop and mark the spot. You may be directly over a lid or access port.</p>
            </div>
          </div>
        </div>

        {/* Method 3 */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-2'>Method 3: Look for Visual Clues in the Yard</h2>
          <p className='text-amber-700 font-semibold mb-6'>10 Minutes</p>
          <div className='prose prose-lg max-w-none'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              Your yard often shows signs of where the septic system is buried. Walk the area 5 to 30 feet from the house and look for these indicators.
            </p>
            <div className='space-y-4'>
              <div className='border border-slate-200 rounded-lg p-6'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Greener or Taller Grass</h3>
                <p className='text-slate-600 text-sm'>A strip of grass that&apos;s greener or taller than the surrounding lawn can indicate a shallow-buried tank or a drainfield below. The extra moisture and nutrients from the system fertilize the grass directly above it.</p>
              </div>
              <div className='border border-slate-200 rounded-lg p-6'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Depression or Dip in the Soil</h3>
                <p className='text-slate-600 text-sm'>Over time, the soil above a septic tank can settle, creating a subtle low spot. This is especially noticeable in older installations.</p>
              </div>
              <div className='border border-slate-200 rounded-lg p-6'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Slight Mound or Raised Area</h3>
                <p className='text-slate-600 text-sm'>Some tanks &mdash; especially newer ones with risers &mdash; create a barely perceptible raised area.</p>
              </div>
              <div className='border border-slate-200 rounded-lg p-6'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Bare Patches</h3>
                <p className='text-slate-600 text-sm'>A very shallow-buried tank can prevent root growth and create a bald spot where grass doesn&apos;t grow.</p>
              </div>
              <div className='border border-slate-200 rounded-lg p-6'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Snow Melting Faster</h3>
                <p className='text-slate-600 text-sm'>The biological activity inside the tank generates slight warmth. In cold climates, snow will melt first directly above the tank.</p>
              </div>
              <div className='border border-slate-200 rounded-lg p-6'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Visible Lids, Caps, or Cleanout Pipes</h3>
                <p className='text-slate-600 text-sm'>If the previous owner installed risers, you may see green or black circular lids at ground level. Small 4 to 6 inch PVC pipes sticking up slightly above the ground are inspection ports.</p>
              </div>
              <div className='border border-slate-200 rounded-lg p-6'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Unexplained Electrical Box</h3>
                <p className='text-slate-600 text-sm'>An electrical box or conduit running from the house into the yard with no obvious purpose may power a pump for an aerobic system or a pump chamber.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Method 4 */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-2'>Method 4: Use a Metal Detector</h2>
          <p className='text-amber-700 font-semibold mb-6'>30 Minutes</p>
          <div className='prose prose-lg max-w-none'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              If your tank has metal components &mdash; rebar in concrete, metal lids, metal handles, or a cast iron inlet/outlet pipe &mdash; a metal detector can help locate it. This works best for concrete tanks (which contain rebar) and older tanks with metal fittings.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              Sweep the metal detector across the suspected area in a grid pattern, 5 to 25 feet from the house. Mark any hits and cross-reference with the sewer line direction from Method 2.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              A strong, consistent signal over a rectangular area (roughly 4.5 by 8 feet) is likely the tank.
            </p>
            <div className='bg-slate-100 border border-slate-200 rounded-lg p-6'>
              <p className='text-slate-700 text-sm'><strong>Note:</strong> Metal detectors won&apos;t find plastic or fiberglass tanks with no metal components. For those, the soil probe method (Method 2) is more reliable.</p>
            </div>
          </div>
        </div>

        {/* Method 5 */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-2'>Method 5: Call a Professional</h2>
          <p className='text-amber-700 font-semibold mb-6'>$100 to $400</p>
          <div className='prose prose-lg max-w-none'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              If the first four methods don&apos;t work, or if you&apos;d rather not probe your yard yourself, a septic professional can locate the tank using specialized equipment.
            </p>
            <div className='overflow-x-auto mb-8'>
              <table className='w-full border-collapse'>
                <thead>
                  <tr className='bg-slate-900 text-white'>
                    <th className='text-left p-4 font-bold'>Method</th>
                    <th className='text-left p-4 font-bold'>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-slate-200'>
                    <td className='p-4 text-slate-700'>Sewer line camera inspection</td>
                    <td className='p-4 text-slate-900 font-semibold'>$100 &ndash; $300</td>
                  </tr>
                  <tr className='border-b border-slate-200 bg-slate-50'>
                    <td className='p-4 text-slate-700'>Electronic transmitter</td>
                    <td className='p-4 text-slate-900 font-semibold'>$150 &ndash; $300</td>
                  </tr>
                  <tr className='border-b border-slate-200'>
                    <td className='p-4 text-slate-700'>Ground-penetrating radar</td>
                    <td className='p-4 text-slate-900 font-semibold'>$300 &ndash; $500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className='text-slate-600 leading-relaxed mb-6'>
              A <strong>sewer line camera inspection</strong> feeds a small camera through the sewer cleanout inside the house and pushes it through the pipe until it reaches the tank, confirming the exact direction and distance.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              An <strong>electronic transmitter</strong> is flushed down the toilet or inserted into the sewer line. The technician uses a receiver above ground to follow the signal directly to the tank.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Ground-penetrating radar</strong> scans the soil and produces images of buried objects. This is the most expensive option but the most reliable for hard-to-find tanks.
            </p>
            <p className='text-slate-600 leading-relaxed'>
              A professional locate typically takes 30 to 60 minutes and includes identifying the tank, lids, distribution box, and drainfield boundaries.
            </p>
          </div>
        </div>

        {/* After You Find It */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>After You Find It: 4 Things to Do Immediately</h2>
          <div className='space-y-6'>
            <div className='border border-slate-200 rounded-lg p-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>1. Mark the Location Permanently</h3>
              <p className='text-slate-600 leading-relaxed mb-4'>
                Don&apos;t rely on memory. Options include driving a small stake near (not into) the tank, placing a decorative rock or garden feature as a marker, recording GPS coordinates on your phone, or drawing a simple map with measurements from two fixed points (house corners work well).
              </p>
              <p className='text-slate-600 leading-relaxed'>
                The goal is that anyone &mdash; including a future pumping crew, a home buyer, or your spouse &mdash; can find the tank without starting from scratch.
              </p>
            </div>
            <div className='border border-amber-200 bg-amber-50 rounded-lg p-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>2. Install Risers</h3>
              <p className='text-slate-600 leading-relaxed mb-4'>
                If your tank lids are buried below ground, installing risers (<strong>$200 to $400</strong>) brings the access lids to ground level permanently. This eliminates digging fees ($50 to $200) at every future pumping visit and makes routine inspections trivial.
              </p>
              <p className='text-slate-600 leading-relaxed'>
                Risers pay for themselves in two to three service visits. This is the single best upgrade you can make after locating your tank. Learn more about risers in our <Link href='/reviews/best-septic-tank-risers' className='text-amber-700 underline hover:text-amber-900'>best tank risers</Link> review.
              </p>
            </div>
            <div className='border border-slate-200 rounded-lg p-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>3. Schedule a Pump-Out</h3>
              <p className='text-slate-600 leading-relaxed mb-4'>
                If you don&apos;t know when the tank was last pumped, have it pumped now. Starting with a clean tank gives you a baseline and lets the technician inspect the tank interior, baffles, and effluent filter while it&apos;s accessible.
              </p>
              <p className='text-slate-600 leading-relaxed'>
                They can also confirm your tank size and note any issues. See our <Link href='/articles/how-often-pump-septic-tank' className='text-amber-700 underline hover:text-amber-900'>pumping schedule guide</Link> for recommended intervals.
              </p>
            </div>
            <div className='border border-slate-200 rounded-lg p-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>4. Start a Maintenance File</h3>
              <p className='text-slate-600 leading-relaxed'>
                Create a folder (physical or digital) for your septic records. Include the tank location map, pump-out receipts, inspection reports, and any repair records. This documentation protects your property value and simplifies your next home sale.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>How deep is a septic tank buried?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Most residential septic tanks are buried 6 inches to 4 feet below ground level. The depth depends on the local water table, frost line, and site grading. Tanks with risers have access lids at or near ground level regardless of tank depth.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>How far is a septic tank from the house?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Typically 5 to 25 feet from the foundation. Most jurisdictions require a minimum of 5 to 10 feet of separation between the tank and the house. The exact distance depends on local building codes and the property&apos;s layout.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>Can I find my septic tank myself?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Yes. Most homeowners can locate their tank using property records, by following the sewer line from the house with a soil probe, or by looking for visual clues in the yard. If these methods fail, a professional can locate it for $100 to $400.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>What does a septic tank lid look like?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Septic tank lids vary by material and age. Concrete tanks have flat concrete or heavy plastic lids, sometimes buried under soil. Tanks with risers have green or black circular plastic lids at ground level, typically 18 to 24 inches in diameter, secured with screws or bolts. Older tanks may have metal lids or handles.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>How much does it cost to have a septic tank located?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A professional septic tank locate costs $100 to $400 depending on the method used. A sewer camera inspection runs $100 to $300. Ground-penetrating radar costs $300 to $500. Many pumping companies will locate the tank as part of a pumping service at no additional charge.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>Should I install risers after finding my tank?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Yes. Risers are the most cost-effective upgrade you can make. At $200 to $400 installed, they eliminate $50 to $200 in digging fees at every future service visit and make inspections and pumping faster and easier. They pay for themselves within two to three pump-outs.</div>
            </details>
          </div>
        </div>

        {/* Glossary */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Glossary</h2>
          <div className='space-y-6'>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>As-built drawing</h3>
              <p className='text-slate-600 text-sm'>A diagram filed with the local health department at the time of septic installation showing the exact location and dimensions of the tank, distribution box, drainfield, and any other system components. The most reliable record for locating your system.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Soil probe</h3>
              <p className='text-slate-600 text-sm'>A thin metal rod (3 to 4 feet long) pushed into the ground to detect buried objects. Used to locate septic tanks by feeling for the hard surface of the tank lid or walls. Available at hardware stores for $15 to $30.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Riser</h3>
              <p className='text-slate-600 text-sm'>A vertical pipe or shaft from the septic tank lid to ground level. Brings the access point to the surface so the tank can be serviced without digging. The single most recommended upgrade after locating a buried tank.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Sewer cleanout</h3>
              <p className='text-slate-600 text-sm'>An access point in the sewer line between the house and the septic tank, typically a capped pipe at or near ground level. Used for clearing blockages and for inserting a camera to locate the tank.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Ground-penetrating radar (GPR)</h3>
              <p className='text-slate-600 text-sm'>A non-invasive technology that uses electromagnetic pulses to create images of buried objects. The most accurate professional method for locating septic tanks but also the most expensive.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Inspection port</h3>
              <p className='text-slate-600 text-sm'>A small (4 to 6 inch) pipe extending from the septic tank or drainfield to ground level, capped with a removable cover. Used for quick visual checks of the system without opening the main tank lid.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Distribution box (D-box)</h3>
              <p className='text-slate-600 text-sm'>A small underground box that distributes effluent from the tank equally among drainfield lines. Usually located between the tank and the drainfield and often the second component located after the tank itself.</p>
            </div>
            <div className='pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Frost line</h3>
              <p className='text-slate-600 text-sm'>The maximum depth at which the ground freezes in winter. Septic tanks and sewer lines must be installed below the frost line to prevent freezing. Affects how deep the tank is buried in your area.</p>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <Link href='/articles/complete-septic-guide' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Complete Septic System Guide</h3>
              <p className='text-slate-600 text-xs'>How your system works, types, maintenance, and more.</p>
            </Link>
            <Link href='/articles/how-often-pump-septic-tank' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>How Often Should You Pump Your Septic Tank?</h3>
              <p className='text-slate-600 text-xs'>Find your exact pumping schedule by tank size and household size.</p>
            </Link>
            <Link href='/articles/septic-tank-pumping-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Tank Pumping Cost 2026</h3>
              <p className='text-slate-600 text-xs'>Real pricing by tank size, region, and hidden fees to watch for.</p>
            </Link>
            <Link href='/reviews/best-septic-tank-risers' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Best Septic Tank Risers</h3>
              <p className='text-slate-600 text-xs'>Top-rated risers to bring your tank lids to ground level.</p>
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
        <h2 className='text-xl md:text-2xl font-bold text-white mb-3'>Need Help Finding Your Septic Tank?</h2>
        <p className='text-slate-300 mb-6 max-w-xl mx-auto text-sm'>Connect with licensed septic professionals in your area for tank locating, pumping, and inspection services.</p>
        <Link href='/get-quote' className='inline-block bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-lg transition-colors'>Get a Free Quote</Link>
      </div>
    </>
  )
}
