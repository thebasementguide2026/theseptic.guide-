import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Find Your Septic Tank: 5 Methods That Work | The Septic Guide',
  description: 'Your septic tank is buried 5 to 25 feet from your house. Learn 5 proven methods to locate it, from checking records to using a soil probe, plus what to do after you find it.',
  alternates: { canonical: 'https://theseptic.guide/articles/how-to-find-your-septic-tank' },
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
        text: 'Most residential septic tanks are buried with the top of the tank sitting 6 inches to 4 feet below ground level, with the average being around 12 to 18 inches in areas without extreme frost concerns. The depth depends on several factors including the local frost line, the water table depth, the slope and grading of the property, and the depth of the sewer line where it exits the house foundation. In cold climates where the ground freezes deeply, tanks and sewer lines must be installed below the frost line to prevent freezing, which can push burial depth to 3 or 4 feet in northern states. Tanks installed with risers have their access lids brought to ground level regardless of how deep the tank itself is buried, which is why installing risers is strongly recommended after locating a deeply buried tank. If you probe the soil and cannot find the tank within 18 inches, extend your probing to 4 feet before concluding the tank is not in that location.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is a septic tank from the house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential septic tanks are located 5 to 25 feet from the house foundation, with 10 to 15 feet being the most common range in typical residential installations. Most jurisdictions require a minimum setback of 5 to 10 feet between the tank and the house foundation, and the original installation permit should specify the exact distance. The sewer line runs in a relatively straight line from the point where it exits the foundation to the tank inlet, so standing at the exit point and walking straight out is the most reliable way to estimate the tank\'s location when no records are available. Homes on smaller lots tend to have tanks closer to the house, while homes on larger rural properties may have tanks 20 to 25 feet away or more depending on the original installation design. If you reach 25 feet without finding the tank using a soil probe, check the direction again — the sewer line sometimes angles slightly away from the straight path you expect, particularly in older homes where the original installation predates modern permitting requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I find my septic tank myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most homeowners can locate their septic tank without professional help using one of the five methods described in this guide. The easiest approach is checking property records — your home inspection report, closing documents, or the as-built drawing filed with your local health department — which gives the exact location with measurements and takes five minutes. If records are not available, following the sewer line from the house foundation with a soil probe is reliable and requires only a $15 to $30 metal probe rod available at any hardware store. Visual clues including greener grass strips, slight soil depressions, and visible riser lids or inspection port caps at ground level can also narrow down the search area significantly before you start probing. The situations where professional help is genuinely needed are homes where the sewer line exits in an unexpected direction, properties where previous landscaping has obscured all visual clues, and any situation where the tank simply cannot be found after a thorough hands-on search.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a septic tank lid look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Septic tank lids vary significantly by material, age, and whether risers have been installed. On tanks with risers, the lids appear as circular green, black, or gray plastic covers at or near ground level, typically 18 to 24 inches in diameter, often secured with screws or a locking bolt to prevent accidental access by children. On buried tanks without risers, the lids are typically flat concrete slabs or heavy plastic covers sitting directly on top of the tank, covered by several inches to several feet of soil with no visible surface indication. Older concrete tanks often have two rectangular concrete lids, one over the inlet side and one over the outlet side, which are heavier and more difficult to remove than modern plastic lids. If you find a small 4 to 6 inch diameter PVC pipe cap at ground level rather than an 18 to 24 inch circular cover, that is an inspection port rather than the main access lid — the main tank access is typically larger and located a foot or two away.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to have a septic tank located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A professional septic tank location service costs $100 to $400 depending on the method used and local market rates. A sewer line camera inspection, where a small camera is fed through the sewer cleanout until it reaches the tank, costs $100 to $300 and is the most common professional location method because it also assesses the condition of the pipe between the house and the tank. An electronic transmitter flushed into the sewer system and tracked with a surface receiver costs $150 to $300 and works on all pipe materials including plastic which metal detectors cannot find. Ground-penetrating radar, the most accurate option, costs $300 to $500 and produces images of buried objects without any digging. Many septic pumping companies will locate the tank as part of a combined location and pump-out service visit at no additional charge beyond the pumping fee, making it worth asking whether the pumping company offers this service before paying separately for a locate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I install risers after finding my tank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, installing risers immediately after locating a buried tank is one of the highest-return investments a septic homeowner can make. Risers are vertical pipes or shafts that extend from the buried tank lids to ground level, eliminating the need to excavate the yard at every future service visit and saving $50 to $200 in digging fees each time the tank is pumped or inspected. At a one-time installed cost of $200 to $400, risers typically pay for themselves within two to three pump-out visits and make every future service faster, easier, and less disruptive to the yard. They also make it much easier to perform routine visual checks between service visits — with risers you can visually confirm water levels and check for obvious problems in minutes without any digging. See our best septic tank risers guide at https://theseptic.guide/reviews/best-septic-tank-risers for the top-rated options by tank opening size and cover type.',
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
          <p className='text-slate-700 leading-relaxed mb-8 text-sm'>
            Finding a septic tank is the process of locating the buried concrete, plastic, or fiberglass tank on a residential property that collects and begins treating household wastewater, along with its access lids, the distribution box, and the drainfield boundaries &mdash; all of which are underground and invisible without records or a systematic search. Most homeowners need to find their septic tank before scheduling a pump-out, after purchasing a home with no maintenance records, when a septic problem develops and the system components need to be inspected, or when planning landscaping or construction projects near the system. The fastest and most reliable method is checking property records and the as-built drawing filed with the <a href='https://www.epa.gov/septic/how-care-your-septic-system' className='text-amber-700 underline hover:text-amber-800' target='_blank' rel='noopener noreferrer'>local health department</a>, which gives the exact location with measurements in five minutes. When no records exist, following the sewer line from where it exits the house foundation and probing the soil with a metal rod every two feet is the next most reliable hands-on approach.
          </p>
          <p className='text-xl text-slate-700 leading-relaxed mb-8'>
            Your septic tank is buried <strong>5 to 25 feet</strong> from your house, typically <strong>6 inches to 4 feet</strong> underground. The fastest way to find it is to check your property records or call your <a href='https://www.epa.gov/septic/how-care-your-septic-system' className='text-amber-700 underline hover:text-amber-800' target='_blank' rel='noopener noreferrer'>local health department</a> for the as-built drawing.
          </p>
          <p className='text-slate-600 leading-relaxed mb-8'>
            If no records exist, follow the sewer line from where it exits your house and probe the soil every 2 feet until you hit a flat, hard surface.
          </p>
          <p className='text-slate-600 leading-relaxed mb-8'>
            Here are five methods, ranked from easiest to most effort. Most homeowners find their tank using the first or second method.
          </p>
        </div>

        {/* Which Method Should I Use? */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-4'>Which Method Should I Use?</h2>
          <p className='text-slate-600 leading-relaxed mb-6'>Match your situation to the fastest and most reliable starting point:</p>
          <div className='overflow-x-auto mb-8'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='text-left p-4 font-bold'>Your Situation</th>
                  <th className='text-left p-4 font-bold'>Best Starting Method</th>
                  <th className='text-left p-4 font-bold'>Time Required</th>
                  <th className='text-left p-4 font-bold'>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'>Just bought a home, have inspection report</td>
                  <td className='p-4 text-slate-700'>Method 1 &mdash; Check records</td>
                  <td className='p-4 text-slate-700'>5 minutes</td>
                  <td className='p-4 text-slate-700'>Free</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-4 text-slate-700'>New homeowner, no inspection report</td>
                  <td className='p-4 text-slate-700'>Method 1 &mdash; Call county health department</td>
                  <td className='p-4 text-slate-700'>15 minutes</td>
                  <td className='p-4 text-slate-700'>Free</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'>Have rough idea where tank is, want to confirm</td>
                  <td className='p-4 text-slate-700'>Method 2 &mdash; Follow sewer line and probe</td>
                  <td className='p-4 text-slate-700'>15 to 30 minutes</td>
                  <td className='p-4 text-slate-700'>$15 to $30 for probe</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-4 text-slate-700'>No idea where tank is, no records available</td>
                  <td className='p-4 text-slate-700'>Method 2 &mdash; Follow sewer line from house</td>
                  <td className='p-4 text-slate-700'>15 to 30 minutes</td>
                  <td className='p-4 text-slate-700'>$15 to $30 for probe</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'>Yard has obvious visual clues (green grass, depression)</td>
                  <td className='p-4 text-slate-700'>Method 3 &mdash; Visual inspection first</td>
                  <td className='p-4 text-slate-700'>10 minutes</td>
                  <td className='p-4 text-slate-700'>Free</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-4 text-slate-700'>Concrete tank installed before 1990</td>
                  <td className='p-4 text-slate-700'>Method 4 &mdash; Metal detector</td>
                  <td className='p-4 text-slate-700'>30 minutes</td>
                  <td className='p-4 text-slate-700'>$0 if borrowed, $20 to $50 to rent</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'>Plastic or fiberglass tank, no records</td>
                  <td className='p-4 text-slate-700'>Method 2 &mdash; Soil probe (metal detector won&apos;t work)</td>
                  <td className='p-4 text-slate-700'>15 to 30 minutes</td>
                  <td className='p-4 text-slate-700'>$15 to $30 for probe</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-4 text-slate-700'>All DIY methods failed</td>
                  <td className='p-4 text-slate-700'>Method 5 &mdash; Professional locate</td>
                  <td className='p-4 text-slate-700'>30 to 60 minutes</td>
                  <td className='p-4 text-slate-700'>$100 to $400</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'>Need tank located and pumped at same visit</td>
                  <td className='p-4 text-slate-700'>Method 5 &mdash; Call pumping company</td>
                  <td className='p-4 text-slate-700'>1 to 2 hours</td>
                  <td className='p-4 text-slate-700'>Included in pump-out</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-4 text-slate-700'>Planning construction or landscaping near system</td>
                  <td className='p-4 text-slate-700'>Method 1 first, Method 5 if needed</td>
                  <td className='p-4 text-slate-700'>Varies</td>
                  <td className='p-4 text-slate-700'>Free to $400</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'>Preparing home for sale, need documentation</td>
                  <td className='p-4 text-slate-700'>Method 1 &mdash; Get official as-built drawing</td>
                  <td className='p-4 text-slate-700'>15 minutes</td>
                  <td className='p-4 text-slate-700'>Free to $50</td>
                </tr>
              </tbody>
            </table>
          </div>
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
              <li>The <strong>as-built drawing or septic permit</strong> filed with your <a href='https://www.epa.gov/septic/how-care-your-septic-system' className='text-amber-700 underline hover:text-amber-800' target='_blank' rel='noopener noreferrer'>local health department</a> or county building department. This is the most detailed record and shows exactly where the tank, distribution box, and drainfield were installed. Most counties retain these records for all addresses. Call your county health department and provide your address.</li>
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
              <div className='px-4 pb-4 text-slate-600 text-sm'>Most residential septic tanks are buried with the top of the tank sitting 6 inches to 4 feet below ground level, with the average being around 12 to 18 inches in areas without extreme frost concerns. The depth depends on several factors including the local frost line, the water table depth, the slope and grading of the property, and the depth of the sewer line where it exits the house foundation. In cold climates where the ground freezes deeply, tanks and sewer lines must be installed below the frost line to prevent freezing, which can push burial depth to 3 or 4 feet in northern states. Tanks installed with risers have their access lids brought to ground level regardless of how deep the tank itself is buried, which is why installing risers is strongly recommended after locating a deeply buried tank. If you probe the soil and cannot find the tank within 18 inches, extend your probing to 4 feet before concluding the tank is not in that location.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>How far is a septic tank from the house?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Most residential septic tanks are located 5 to 25 feet from the house foundation, with 10 to 15 feet being the most common range in typical residential installations. Most jurisdictions require a minimum setback of 5 to 10 feet between the tank and the house foundation, and the original installation permit should specify the exact distance. The sewer line runs in a relatively straight line from the point where it exits the foundation to the tank inlet, so standing at the exit point and walking straight out is the most reliable way to estimate the tank&apos;s location when no records are available. Homes on smaller lots tend to have tanks closer to the house, while homes on larger rural properties may have tanks 20 to 25 feet away or more depending on the original installation design. If you reach 25 feet without finding the tank using a soil probe, check the direction again &mdash; the sewer line sometimes angles slightly away from the straight path you expect, particularly in older homes where the original installation predates modern permitting requirements.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>Can I find my septic tank myself?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Yes, most homeowners can locate their septic tank without professional help using one of the five methods described in this guide. The easiest approach is checking property records &mdash; your home inspection report, closing documents, or the as-built drawing filed with your <a href='https://www.epa.gov/septic/how-care-your-septic-system' className='text-amber-700 underline hover:text-amber-800' target='_blank' rel='noopener noreferrer'>local health department</a> &mdash; which gives the exact location with measurements and takes five minutes. If records are not available, following the sewer line from the house foundation with a soil probe is reliable and requires only a $15 to $30 metal probe rod available at any hardware store. Visual clues including greener grass strips, slight soil depressions, and visible riser lids or inspection port caps at ground level can also narrow down the search area significantly before you start probing. The situations where professional help is genuinely needed are homes where the sewer line exits in an unexpected direction, properties where previous landscaping has obscured all visual clues, and any situation where the tank simply cannot be found after a thorough hands-on search.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>What does a septic tank lid look like?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Septic tank lids vary significantly by material, age, and whether risers have been installed. On tanks with risers, the lids appear as circular green, black, or gray plastic covers at or near ground level, typically 18 to 24 inches in diameter, often secured with screws or a locking bolt to prevent accidental access by children. On buried tanks without risers, the lids are typically flat concrete slabs or heavy plastic covers sitting directly on top of the tank, covered by several inches to several feet of soil with no visible surface indication. Older concrete tanks often have two rectangular concrete lids, one over the inlet side and one over the outlet side, which are heavier and more difficult to remove than modern plastic lids. If you find a small 4 to 6 inch diameter PVC pipe cap at ground level rather than an 18 to 24 inch circular cover, that is an inspection port rather than the main access lid &mdash; the main tank access is typically larger and located a foot or two away.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>How much does it cost to have a septic tank located?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A professional septic tank location service costs $100 to $400 depending on the method used and local market rates. A sewer line camera inspection, where a small camera is fed through the sewer cleanout until it reaches the tank, costs $100 to $300 and is the most common professional location method because it also assesses the condition of the pipe between the house and the tank. An electronic transmitter flushed into the sewer system and tracked with a surface receiver costs $150 to $300 and works on all pipe materials including plastic which metal detectors cannot find. Ground-penetrating radar, the most accurate option, costs $300 to $500 and produces images of buried objects without any digging. Many septic pumping companies will locate the tank as part of a combined location and pump-out service visit at no additional charge beyond the pumping fee, making it worth asking whether the pumping company offers this service before paying separately for a locate.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50'>Should I install risers after finding my tank?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Yes, installing risers immediately after locating a buried tank is one of the highest-return investments a septic homeowner can make. Risers are vertical pipes or shafts that extend from the buried tank lids to ground level, eliminating the need to excavate the yard at every future service visit and saving $50 to $200 in digging fees each time the tank is pumped or inspected. At a one-time installed cost of $200 to $400, risers typically pay for themselves within two to three pump-out visits and make every future service faster, easier, and less disruptive to the yard. They also make it much easier to perform routine visual checks between service visits &mdash; with risers you can visually confirm water levels and check for obvious problems in minutes without any digging. See our <Link href='/reviews/best-septic-tank-risers' className='text-amber-700 underline hover:text-amber-800'>best septic tank risers guide</Link> for the top-rated options by tank opening size and cover type.</div>
            </details>
          </div>
        </div>

        {/* Glossary */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Glossary</h2>
          <div className='space-y-6'>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>As-built drawing</h3>
              <p className='text-slate-600 text-sm'>An as-built drawing is a diagram filed with the local health department at the time of septic installation showing the exact location, dimensions, and layout of the tank, distribution box, drainfield trenches, and all connecting pipes as they were actually constructed on the property. It is the single most reliable document for locating a septic system and should be the first resource checked before any hands-on search, as it gives precise measurements from fixed reference points like house corners that allow accurate location without any digging. See also: <Link href='/guides/buying-home-with-septic' className='text-amber-700 underline hover:text-amber-800'>Buying a Home with a Septic System</Link> and <Link href='/maintenance/septic-system-maintenance-checklist' className='text-amber-700 underline hover:text-amber-800'>Septic System Maintenance Checklist</Link>.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Soil probe</h3>
              <p className='text-slate-600 text-sm'>A soil probe is a thin metal rod typically three to four feet long that is pushed vertically into the ground to detect buried objects by feel, and it is the most practical and inexpensive tool for locating a septic tank when no property records are available. When the probe contacts the flat hard surface of a tank lid or tank wall, the resistance feels distinctly different from pushing through soft soil, and probing in a grid pattern along the expected sewer line route allows most homeowners to locate the tank within 30 minutes. See also: <Link href='/articles/how-often-pump-septic-tank' className='text-amber-700 underline hover:text-amber-800'>How Often Should You Pump Your Septic Tank?</Link> and <Link href='/articles/septic-tank-pumping-cost' className='text-amber-700 underline hover:text-amber-800'>Septic Tank Pumping Cost 2026</Link>.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Riser</h3>
              <p className='text-slate-600 text-sm'>A septic tank riser is a vertical pipe or shaft that extends from the buried tank lid up to ground level, eliminating the need to excavate the yard at every future service visit and saving $50 to $200 in digging fees each time the tank is pumped or inspected. Installing risers immediately after locating a buried tank is the highest-return upgrade a septic homeowner can make, with the one-time cost of $200 to $400 typically recovered within two to three pump-out visits. See also: <Link href='/reviews/best-septic-tank-risers' className='text-amber-700 underline hover:text-amber-800'>Best Septic Tank Risers</Link> and <Link href='/articles/septic-tank-pumping-cost' className='text-amber-700 underline hover:text-amber-800'>Septic Tank Pumping Cost 2026</Link>.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Sewer cleanout</h3>
              <p className='text-slate-600 text-sm'>A sewer cleanout is an access point in the sewer line between the house and the septic tank, typically a capped vertical pipe at or near ground level on the exterior of the house or in the basement, used for clearing blockages and for inserting a camera or electronic transmitter to locate the tank. Finding the sewer cleanout is often the starting point for both the hands-on soil probe method and the professional camera location method, because it gives the direction and depth of the sewer line before it enters the ground toward the tank. See also: <Link href='/cost-guides/septic-system-repair-cost' className='text-amber-700 underline hover:text-amber-800'>Septic System Repair Cost</Link> and <Link href='/problems/slow-drains' className='text-amber-700 underline hover:text-amber-800'>Slow Drains on a Septic System</Link>.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Ground-penetrating radar (GPR)</h3>
              <p className='text-slate-600 text-sm'>Ground-penetrating radar is a non-invasive professional location technology that transmits electromagnetic pulses into the ground and interprets the reflected signals to create images of buried objects, making it the most accurate method for locating septic tanks when all other methods have failed. It costs $300 to $500 for a residential locate and is the preferred method for properties where the tank&apos;s location cannot be determined by records, visual clues, or soil probing because of deep burial, unusual siting, or extensive landscaping that has obscured all surface evidence. See also: <Link href='/cost-guides/septic-inspection-cost' className='text-amber-700 underline hover:text-amber-800'>Septic Inspection Cost</Link>.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Inspection port</h3>
              <p className='text-slate-600 text-sm'>An inspection port is a small four to six inch diameter pipe extending from the septic tank or drainfield to ground level, capped with a removable plastic cover, used for quick visual checks of water levels and component condition without opening the main tank access lid. Finding an inspection port cap at ground level is a strong indicator that the main tank access lid is nearby &mdash; typically within one to two feet &mdash; and that risers may have been partially installed on the property. See also: <Link href='/maintenance/septic-system-maintenance-checklist' className='text-amber-700 underline hover:text-amber-800'>Septic System Maintenance Checklist</Link> and <Link href='/problems/drainfield-failing' className='text-amber-700 underline hover:text-amber-800'>Signs Your Drainfield Is Failing</Link>.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Distribution box (D-box)</h3>
              <p className='text-slate-600 text-sm'>A distribution box is a small watertight underground chamber located between the septic tank outlet and the drainfield that receives effluent and divides it equally among the multiple drainfield trench lines, and it is usually the second component located after the tank itself when mapping a septic system. Finding the distribution box matters because it confirms the drainfield direction and boundaries, and a D-box that is cracked, unlevel, or partially blocked is one of the most common and least expensive septic repairs when caught early during a routine inspection. See also: <Link href='/problems/drainfield-failing' className='text-amber-700 underline hover:text-amber-800'>Signs Your Drainfield Is Failing</Link> and <Link href='/cost-guides/septic-system-repair-cost' className='text-amber-700 underline hover:text-amber-800'>Septic System Repair Cost</Link>.</p>
            </div>
            <div className='pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Frost line</h3>
              <p className='text-slate-600 text-sm'>The frost line is the maximum depth at which soil freezes during winter in a given geographic location, and it determines the minimum burial depth required for septic tanks, sewer lines, and drainfield components to prevent freezing and pipe damage in cold climates. In northern states the frost line can reach three to four feet below grade, which directly affects how deep you need to probe when searching for a buried tank and explains why some tanks are significantly harder to find than others in cold regions. See also: <Link href='/guides/septic-system-winter-care' className='text-amber-700 underline hover:text-amber-800'>Septic System Winter Care</Link> and <Link href='/cost-guides/septic-system-installation-cost' className='text-amber-700 underline hover:text-amber-800'>Septic System Installation Cost 2026</Link>.</p>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Related Guides</h2>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>On theseptic.guide</h3>
          <div className='grid md:grid-cols-2 gap-6 mb-10'>
            <Link href='/reviews/best-septic-tank-risers' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Best Septic Tank Risers</h4>
              <p className='text-slate-600 text-xs'>The first upgrade to make after locating a buried tank, eliminating excavation fees at every future service visit and making routine maintenance permanently easier.</p>
            </Link>
            <Link href='/articles/septic-tank-pumping-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Septic Tank Pumping Cost 2026</h4>
              <p className='text-slate-600 text-xs'>What to budget for the pump-out that should follow immediately after locating a tank with no known service history, by tank size and region.</p>
            </Link>
            <Link href='/articles/how-often-pump-septic-tank' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>How Often Should You Pump Your Septic Tank?</h4>
              <p className='text-slate-600 text-xs'>The pumping schedule to establish once you have located and confirmed your tank size, by household size and tank capacity.</p>
            </Link>
            <Link href='/cost-guides/septic-inspection-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Septic Inspection Cost</h4>
              <p className='text-slate-600 text-xs'>What a professional inspection costs and why scheduling one immediately after locating a previously unmaintained tank gives you a complete baseline picture of the system&apos;s condition.</p>
            </Link>
            <Link href='/maintenance/septic-system-maintenance-checklist' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Septic System Maintenance Checklist</h4>
              <p className='text-slate-600 text-xs'>The complete ongoing maintenance schedule to follow once you have located all system components and established their condition.</p>
            </Link>
            <Link href='/guides/buying-home-with-septic' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Buying a Home with a Septic System</h4>
              <p className='text-slate-600 text-xs'>The full homebuyer&apos;s guide to septic due diligence including how to obtain the as-built drawing, what to look for during the pre-purchase inspection, and how to negotiate if problems are found.</p>
            </Link>
            <Link href='/guides/septic-tank-size-guide' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Septic Tank Size Guide</h4>
              <p className='text-slate-600 text-xs'>How to confirm your tank&apos;s capacity once it has been located and opened, and whether it is correctly sized for the number of bedrooms in your home.</p>
            </Link>
            <Link href='/problems/drainfield-failing' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Signs Your Drainfield Is Failing</h4>
              <p className='text-slate-600 text-xs'>After locating the tank, the next step is locating and assessing the drainfield &mdash; this guide covers what warning signs to look for once you find it.</p>
            </Link>
            <Link href='/articles/complete-septic-guide' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Complete Septic System Guide</h4>
              <p className='text-slate-600 text-xs'>How every component of the system works and where each one is typically located relative to the tank, useful for understanding what else to locate after finding the tank itself.</p>
            </Link>
            <Link href='/cost-guides/septic-system-repair-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Septic System Repair Cost</h4>
              <p className='text-slate-600 text-xs'>What repairs cost when a professional locate reveals component problems such as a cracked lid, damaged riser, or inaccessible access point.</p>
            </Link>
            <Link href='/guides/septic-dos-and-donts' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Septic Dos and Don&apos;ts</h4>
              <p className='text-slate-600 text-xs'>Now that you know where the tank and drainfield are, this guide covers the physical property rules including what cannot be built, parked, or planted over those areas.</p>
            </Link>
            <Link href='/guides/selling-home-with-septic-system' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Selling a Home with a Septic System</h4>
              <p className='text-slate-600 text-xs'>How having a documented, located, and maintained system with an accessible as-built drawing strengthens your position when selling.</p>
            </Link>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>From Our Network</h3>
          <div className='grid md:grid-cols-2 gap-6 mb-10'>
            <a href='https://thebasement.guide/articles/sump-pump-design-ideas' target='_blank' rel='noopener noreferrer' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Sump Pump Design Ideas for 2026</h4>
              <p className='text-slate-600 text-xs'>For homeowners locating both a septic system and basement drainage equipment on the same property, this guide covers how to integrate sump pump discharge routing away from the drainfield area.</p>
            </a>
            <a href='https://thebasement.guide/articles/best-sump-pumps-2026' target='_blank' rel='noopener noreferrer' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Best Sump Pumps 2026</h4>
              <p className='text-slate-600 text-xs'>Once you have located your septic drainfield, ensuring that sump pump discharge is routed away from that area is one of the most important steps in protecting long-term drainfield performance.</p>
            </a>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>External Resource</h3>
          <div className='grid md:grid-cols-2 gap-6'>
            <a href='https://www.epa.gov/septic/how-care-your-septic-system' target='_blank' rel='noopener noreferrer' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>EPA Septic System Care Guidance</h4>
              <p className='text-slate-600 text-xs'>The EPA&apos;s official guidance on septic system maintenance including recommendations for locating, documenting, and maintaining records for your on-site wastewater system.</p>
            </a>
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
