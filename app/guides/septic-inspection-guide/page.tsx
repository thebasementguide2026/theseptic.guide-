import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Septic System Inspection Guide: What Happens, Step by Step | The Septic Guide',
  description: 'What actually happens during a septic inspection, what inspectors look for at each component, how to prepare your property, and how to read the report when it arrives.',
  openGraph: {
    title: 'Septic System Inspection Guide: What Happens, Step by Step',
    description: 'What actually happens during a septic inspection, what inspectors look for at each component, how to prepare your property, and how to read the report when it arrives.',
    url: 'https://theseptic.guide/guides/septic-inspection-guide',
    siteName: 'The Septic Guide',
    type: 'article',
    images: [{ url: 'https://theseptic.guide/septicinspectionguide.jpg', width: 1200, height: 630, alt: 'Septic system inspection guide' }],
  },
  alternates: { canonical: 'https://theseptic.guide/guides/septic-inspection-guide' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Septic System Inspection Guide: What Happens, Step by Step',
  description: 'What actually happens during a septic inspection, what inspectors look for at each component, how to prepare your property, and how to read the report when it arrives.',
  image: 'https://theseptic.guide/septicinspectionguide.jpg',
  datePublished: '2026-03-23',
  dateModified: '2026-03-23',
  author: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
  publisher: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    url: 'https://theseptic.guide',
    logo: { '@type': 'ImageObject', url: 'https://theseptic.guide/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://theseptic.guide/guides/septic-inspection-guide' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a septic inspector actually do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A septic inspector opens the tank, measures sludge and scum depth, pumps the tank, checks the inlet and outlet baffles and effluent filter, opens and assesses the distribution box, probes the drainfield for saturation, conducts a flow test, and produces a written report documenting all findings. A thorough comprehensive inspection takes 2 to 4 hours including pumping. An inspector who spends 20 to 30 minutes without opening the tank has conducted a visual check, not a comprehensive inspection.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are inspectors looking for in the drainfield?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inspectors look for surface signs of failure including soggy soil, standing water, unusually lush grass, visible effluent breakout, or odor at the surface. They also probe the ground at multiple points across the drainfield to assess soil saturation, and observe whether effluent backs up from the distribution box during the inspection. See our signs your drainfield is failing guide at https://theseptic.guide/problems/drainfield-failing for the full progression of failure indicators.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I prepare my property for a septic inspection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Locate the tank and drainfield before inspection day using county health department records. Expose buried tank lids if possible to save time and digging fees. Avoid heavy water use the evening before but maintain normal morning use so the inspector can observe flow. Clear the drainfield area of vehicles and stored items. Gather any available documentation including pumping receipts and previous inspection reports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I watch my own septic inspection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and you should if you can. Being present lets you see findings firsthand, ask questions about what the inspector observes, understand the report better when it arrives, and get real-time explanations of the severity of any problems found. A good inspector will narrate findings as they work and welcome an engaged homeowner. An inspector who discourages you from watching is a red flag.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean if the inspector finds backflow from the drainfield?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Backflow from the drainfield into the tank during pumping means effluent is sitting in the distribution lines because the drainfield soil is not absorbing it at the rate it is receiving effluent. A small amount of backflow from residual liquid in the pipes is normal. A large, continuous flow of effluent returning from the drainfield is one of the strongest indicators of drainfield failure. Whether it represents temporary saturation or permanent soil clogging depends on the history of the system and the other findings. See our signs your drainfield is failing guide at https://theseptic.guide/problems/drainfield-failing for how to interpret this finding in context.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should a septic inspection report contain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A quality inspection report should contain: a system description (tank size, type, age, location), measured sludge depth and scum thickness with their relationship to the pump-out threshold, a component-by-component assessment with a specific finding for each, photographs of all significant findings, recommended corrective actions for any non-passing findings, and a clear overall pass, conditional pass, or fail designation. A report that summarizes the system as "functional at time of inspection" without measurements or photographs is not a quality report.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long after a septic inspection is the report valid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most lenders and health departments treat a septic inspection report as valid for 30 to 90 days depending on jurisdiction and loan type. Massachusetts Title 5 inspections are valid for 2 years under normal circumstances. The validity period reflects that a system can change condition, particularly following weather events or changes in occupancy. If significant flooding or a major rain event occurs after an inspection but before a real estate transaction closes, a re-inspection is recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a septic inspection and a home inspection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A home inspection covers the visible and accessible components of the entire house, including basic observations about the septic system, but does not open the tank, measure sludge or scum depth, probe the drainfield, or assess internal components. A dedicated septic inspection is a comprehensive evaluation of the wastewater system conducted by a septic professional. For any property with a septic system, both a home inspection and a dedicated septic inspection are necessary. A home inspection cannot substitute for a septic inspection.',
      },
    },
  ],
}

export default function SepticInspectionGuide() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

              <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: 'Septic System Inspection Guide' }]} />
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image src='/septicinspectionguide.jpg' alt='Septic system inspection guide' fill className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100' priority />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-amber-700'></div>
            <span className='text-amber-500 font-bold tracking-[0.3em] text-sm uppercase'>Guide</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Septic System Inspection Guide:<br />
            <span className='text-amber-500'>What Happens, Step by Step</span>
          </h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            What actually happens during a septic inspection, what inspectors look for at each component, how to prepare your property, and how to read the report when it arrives.
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

        {/* Entity Definition + Intro */}
        <div className='mb-12'>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>A <strong>septic inspection</strong> is a professional evaluation of an on-site wastewater treatment system that includes opening the tank, measuring what is inside, testing each component for proper function, and producing a written report documenting the findings. Understanding what actually happens during an inspection helps you prepare your property, follow along as the work is done, and interpret the results accurately once the report arrives.</p>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>For pricing information by inspection type, see our <Link href='/cost-guides/septic-inspection-cost' className='text-amber-700 underline hover:text-amber-800'>septic inspection cost guide</Link>. For how inspections factor into buying or selling a home, see our <Link href='/guides/buying-home-with-septic' className='text-amber-700 underline hover:text-amber-800'>buying a home with a septic system guide</Link>.</p>
        </div>

        {/* What a Septic Inspection Is (and What It Is Not) */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Understanding the Process</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What a Septic Inspection Is (and What It Is Not)</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>A septic inspection is a functional evaluation, not a guarantee. The inspector assesses the system&rsquo;s condition on the day of the visit based on what is visible, measurable, and testable. They cannot see inside pipes that are not camera-scoped, cannot assess drainfield soil conditions below the surface without probing, and cannot predict how the system will perform under conditions different from those present during the inspection.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>A septic inspection is distinct from a septic pump-out in that pumping removes waste from the tank while inspection evaluates the condition of components. A thorough inspection almost always includes pumping because the tank interior cannot be assessed without first removing its contents, but the two services are not synonymous. See our <Link href='/articles/septic-tank-cleaning-vs-pumping' className='text-amber-700 underline hover:text-amber-800'>septic tank cleaning vs pumping guide</Link> for how the two relate.</p>
        </div>

        {/* How to Prepare for a Septic Inspection */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Preparation</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How to Prepare for a Septic Inspection</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Preparation directly affects how quickly and thoroughly the inspection goes. An inspector who spends 45 minutes digging to find a buried tank lid has 45 fewer minutes to evaluate the system itself.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Locate the system before the inspector arrives</h3>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Find the tank and drainfield before inspection day. Your county health department has the original installation permit on file, which includes a site plan showing component locations. If no records exist, see our <Link href='/articles/how-to-find-your-septic-tank' className='text-amber-700 underline hover:text-amber-800'>how to find your septic tank guide</Link> for the methods that work.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Expose the tank lid if possible</h3>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>If your tank has <Link href='/reviews/best-septic-tank-risers' className='text-amber-700 underline hover:text-amber-800'>septic tank risers</Link> bringing access to ground level, the inspector can open the lid immediately. If the lid is buried, exposing it yourself before the inspector arrives saves time and may save you a digging fee ($50 to $250 at many companies).</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Do not use the system heavily the day before</h3>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Running large amounts of water through the system shortly before inspection makes it harder to accurately assess normal operating conditions. Avoid running multiple laundry loads, long showers, or dishwasher cycles the evening before and the morning of the inspection.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Do normal water use the morning of inspection</h3>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>While avoiding heavy use, do run water normally during the morning. The inspector will want to observe water entering the system and confirm flow, which requires the system to be in active use rather than completely dormant.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Gather any available documentation</h3>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Pull together whatever you have: pumping receipts, previous inspection reports, the original installation permit, any repair records. This history helps the inspector assess whether findings represent a new problem or a long-standing condition.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Clear the drainfield area</h3>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Remove vehicles, stored equipment, lawn furniture, or anything that obscures the drainfield surface. The inspector needs to walk the entire drainfield area and observe surface conditions, which requires an unobstructed view.</p>
        </div>

        {/* The Inspection Process, Step by Step */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>The Inspection Process</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Inspection Process, Step by Step</h2>
          <p className='text-slate-700 leading-relaxed mb-8 text-sm'>A full comprehensive inspection follows a consistent sequence. Here is what happens at each stage and what the inspector is specifically evaluating.</p>

          {/* Step 1 */}
          <div className='mb-10'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='bg-amber-700 text-white text-xs font-bold px-2 py-1 rounded'>Step 1</span>
              <h3 className='text-lg font-bold text-slate-900'>Property Walk and Visual Assessment</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Before opening anything, the inspector walks the entire property looking for visible surface indicators that the system is failing or under stress.</p>
            <p className='text-slate-700 leading-relaxed mb-2 text-sm font-semibold'>What they are looking for:</p>
            <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mb-4'>
              <li>Unusually green or lush grass over the drainfield, which indicates effluent is surfacing and fertilizing rather than percolating normally</li>
              <li>Standing water or soggy soil over the drainfield or tank area, indicating saturation</li>
              <li>Odors in the drainfield area, particularly sulfur or sewage smell indicating effluent at the surface</li>
              <li>Any structures, vehicles, trees, or landscaping over or within setback distances of the tank or drainfield</li>
              <li>General condition of risers, lids, and cleanout access points visible at grade</li>
            </ul>
            <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4'>
              <p className='text-slate-700 text-sm'><strong>What a finding here means:</strong> Surface evidence of drainfield failure is the most serious finding in any inspection. A drainfield that is surfacing effluent has failed and cannot recover. This is a $5,000 to $15,000 replacement in most cases. See our <Link href='/problems/drainfield-failing' className='text-amber-700 underline hover:text-amber-800'>signs your drainfield is failing guide</Link>.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className='mb-10'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='bg-amber-700 text-white text-xs font-bold px-2 py-1 rounded'>Step 2</span>
              <h3 className='text-lg font-bold text-slate-900'>Sewer Line Inspection (Camera Scope, If Included)</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Before opening the tank, inspectors who include a camera scope run a camera from the cleanout at the house through the pipe to the tank inlet.</p>
            <p className='text-slate-700 leading-relaxed mb-2 text-sm font-semibold'>What they are looking for:</p>
            <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mb-4'>
              <li>Root intrusion through pipe joints, which narrows the pipe interior and causes blockages</li>
              <li>Pipe belly or sag, where a section has settled below minimum slope, creating a low point where solids accumulate</li>
              <li>Offset joints where a pipe section has shifted and is partially blocked</li>
              <li>Cracks or breaks in the pipe wall</li>
              <li>Flow rate and consistency as water is run from inside the house</li>
            </ul>
            <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4'>
              <p className='text-slate-700 text-sm'><strong>What a finding here means:</strong> Root intrusion and pipe sags are relatively common in systems 15 or more years old. Minor root intrusion can be cleared for $300 to $600. A broken pipe requires excavation and replacement at $500 to $2,000 depending on length. A pipe belly may require re-grading at $800 to $3,000.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className='mb-10'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='bg-amber-700 text-white text-xs font-bold px-2 py-1 rounded'>Step 3</span>
              <h3 className='text-lg font-bold text-slate-900'>Locating and Exposing the Tank</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>If the tank lid is buried, the inspector locates it using the site plan or a probe rod and exposes it. If risers are present, this step takes under a minute.</p>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Most residential tanks have two access points: the inlet side and the outlet side. A thorough inspection opens both. Inspectors who open only one lid are performing an incomplete evaluation.</p>
          </div>

          {/* Step 4 */}
          <div className='mb-10'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='bg-amber-700 text-white text-xs font-bold px-2 py-1 rounded'>Step 4</span>
              <h3 className='text-lg font-bold text-slate-900'>Pre-Pump Measurements</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Before pumping, the inspector measures sludge depth and scum layer thickness using a sludge judge, a clear plastic tube with a check valve that traps a core sample when lowered to the tank bottom.</p>
            <p className='text-slate-700 leading-relaxed mb-2 text-sm font-semibold'>What they are measuring:</p>
            <ul className='list-disc pl-6 text-slate-700 text-sm space-y-2 mb-4'>
              <li><strong>Sludge depth:</strong> The settled solids layer at the bottom. The EPA recommends pumping when sludge reaches one third of total liquid depth or within 12 inches of the outlet tee.</li>
              <li><strong>Scum thickness:</strong> The floating grease and oil layer at the top. Excessive scum can block the outlet.</li>
              <li><strong>Liquid level:</strong> Whether the tank is operating at normal depth. A tank full to the lid before pumping indicates recent overloading, groundwater infiltration, or a failing drainfield.</li>
            </ul>
          </div>

          {/* Step 5 */}
          <div className='mb-10'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='bg-amber-700 text-white text-xs font-bold px-2 py-1 rounded'>Step 5</span>
              <h3 className='text-lg font-bold text-slate-900'>Pumping the Tank</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The inspector coordinates with or directly performs the pump-out, removing all contents from the tank. This is not optional for a comprehensive inspection. The tank interior, baffles, and walls cannot be assessed while the tank is full.</p>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>As the tank empties, the inspector monitors the outlet for backflow from the drainfield &mdash; which is assessed in the next step.</p>
          </div>

          {/* Step 6 */}
          <div className='mb-10'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='bg-amber-700 text-white text-xs font-bold px-2 py-1 rounded'>Step 6</span>
              <h3 className='text-lg font-bold text-slate-900'>Backflow Test</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>As the tank empties during pumping, the inspector watches the outlet pipe for water flowing back in from the drainfield side.</p>
            <p className='text-slate-700 leading-relaxed mb-2 text-sm font-semibold'>What they are looking for:</p>
            <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mb-4'>
              <li>Clear backflow from the drainfield into the emptying tank indicates saturated drainfield soil</li>
              <li>Rate of backflow: a small amount from residual pipe contents is normal; a large continuous flow indicates significant drainfield saturation</li>
            </ul>
            <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4'>
              <p className='text-slate-700 text-sm'><strong>What a finding here means:</strong> A large, continuous flow of effluent returning from the drainfield is one of the most diagnostic signs of drainfield failure and requires follow-up drainfield assessment to determine whether saturation is temporary or permanent.</p>
            </div>
          </div>

          {/* Step 7 */}
          <div className='mb-10'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='bg-amber-700 text-white text-xs font-bold px-2 py-1 rounded'>Step 7</span>
              <h3 className='text-lg font-bold text-slate-900'>Tank Interior Inspection</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>With the tank empty, the inspector evaluates all accessible interior surfaces and components.</p>

            <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Inlet baffle:</strong> A T-shaped pipe or baffle directing incoming waste downward. Inspector checks whether it is present, intact, and positioned to extend 6 to 12 inches below the liquid surface. A missing or damaged inlet baffle allows raw waste to short-circuit to the outlet without settling.</p>

            <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Outlet baffle:</strong> Draws effluent from the middle liquid zone of the tank rather than allowing scum or sludge to exit. Inspector checks presence, condition, and depth below the scum layer. A cracked or missing outlet baffle is one of the most common causes of premature drainfield failure.</p>

            <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Effluent filter:</strong> If installed, the inspector removes, assesses, and cleans it. A clogged effluent filter restricts outflow and produces whole-house slow drain symptoms. It is one of the most easily fixed problems in the system, costing nothing to clean and $50 to $200 to replace if damaged. See our <Link href='/maintenance/septic-system-maintenance-checklist' className='text-amber-700 underline hover:text-amber-800'>septic system maintenance checklist</Link> for the cleaning schedule.</p>

            <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Tank walls and floor:</strong> Checked for cracks, deterioration, or structural compromise. Minor surface scaling in older concrete tanks is normal. Horizontal cracks, active seeping, or large eroded sections are significant findings.</p>

            <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Inlet and outlet pipe connections:</strong> Both pipe penetrations are checked for proper sealing. A gap around the inlet pipe allows surface water or groundwater to enter the tank, reducing effective capacity.</p>
          </div>

          {/* Step 8 */}
          <div className='mb-10'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='bg-amber-700 text-white text-xs font-bold px-2 py-1 rounded'>Step 8</span>
              <h3 className='text-lg font-bold text-slate-900'>Distribution Box Inspection</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The inspector locates and opens the distribution box (D-box), which receives effluent from the tank and divides it among drainfield lateral lines.</p>
            <p className='text-slate-700 leading-relaxed mb-2 text-sm font-semibold'>What they are looking for:</p>
            <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mb-4'>
              <li>Whether the D-box is level: a tilted D-box distributes effluent unevenly, overloading some lateral lines while underusing others</li>
              <li>Whether all outlet ports are clear and at the same elevation</li>
              <li>Whether the D-box is structurally sound: cracks allow groundwater entry or effluent leakage</li>
              <li>Whether effluent is backing up into the D-box from the laterals, indicating drainfield saturation</li>
            </ul>
            <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4'>
              <p className='text-slate-700 text-sm'><strong>What a finding here means:</strong> A tilted D-box can often be re-leveled or replaced for $200 to $500, which restores even distribution and can significantly extend drainfield life if caught early.</p>
            </div>
          </div>

          {/* Step 9 */}
          <div className='mb-10'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='bg-amber-700 text-white text-xs font-bold px-2 py-1 rounded'>Step 9</span>
              <h3 className='text-lg font-bold text-slate-900'>Drainfield Probe and Assessment</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The inspector probes the drainfield soil with a probe rod at multiple points across the drainfield area.</p>
            <p className='text-slate-700 leading-relaxed mb-2 text-sm font-semibold'>What they are looking for:</p>
            <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mb-4'>
              <li>Soil saturation: probe holes that immediately fill with water indicate the soil is not absorbing effluent</li>
              <li>Effluent breakout: pulling the probe rod may bring up effluent-contaminated soil, confirming drainfield failure</li>
              <li>Lateral line locations relative to the permit drawing</li>
              <li>Soil condition above the laterals: excessive compaction, root mass, or disturbed soil</li>
            </ul>
            <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4'>
              <p className='text-slate-700 text-sm'><strong>What a finding here means:</strong> A drainfield where probe holes fill with effluent-saturated water has failed. Whether temporary or permanent requires judgment from an experienced inspector. Temporary saturation in an otherwise healthy system can resolve within days with reduced water use.</p>
            </div>
          </div>

          {/* Step 10 */}
          <div className='mb-10'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='bg-amber-700 text-white text-xs font-bold px-2 py-1 rounded'>Step 10</span>
              <h3 className='text-lg font-bold text-slate-900'>Flow Test</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'>After the system has been pumped and components inspected, the inspector runs a flow test by sending a measured volume of water through the household plumbing.</p>
            <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>What they are doing:</strong> Flushing all toilets multiple times, running all faucets simultaneously for several minutes, and monitoring that water flows freely into the tank without backing up in the house.</p>
            <p className='text-slate-700 leading-relaxed mb-2 text-sm font-semibold'>What they are looking for:</p>
            <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mb-4'>
              <li>No backup at fixtures, confirming the sewer line is clear</li>
              <li>Appropriate flow rate at the tank inlet</li>
              <li>No immediate overflow at the distribution box under household-level flow</li>
            </ul>
            <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4'>
              <p className='text-slate-700 text-sm'><strong>What a finding here means:</strong> A flow test that causes backup at fixtures indicates a blockage between house and tank. A flow test that overwhelms the D-box or causes immediate effluent surfacing indicates compromised hydraulic capacity.</p>
            </div>
          </div>
        </div>

        {/* What the Written Report Should Include */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>The Report</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What the Written Report Should Include</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>A quality inspection report is the documentation that lenders, attorneys, and health departments require and the record you need if problems emerge later.</p>

          <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>System identification:</strong> Tank size, material, number of compartments, estimated age, system type, and location on the property.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Measured findings:</strong> Actual sludge depth in inches, scum thickness in inches, liquid level at time of inspection, and comparison to pump-out thresholds.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Component-by-component assessment:</strong> A pass, conditional pass, or fail for each component evaluated: sewer line, inlet baffle, outlet baffle, effluent filter, tank walls, D-box, drainfield. Findings should be specific (&ldquo;outlet baffle cracked at the pipe joint, approximately 4 inches from the top&rdquo;) rather than general (&ldquo;baffles in fair condition&rdquo;).</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Photographs:</strong> Every finding should have a photograph. A report without photos is incomplete and difficult to use as documentation.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Recommended actions:</strong> Each non-passing finding should have a specific recommended action with a cost range.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Overall system status:</strong> A clear pass, conditional pass, or fail designation with the basis stated explicitly.</p>
        </div>

        {/* Red Flags That Indicate an Inadequate Inspection */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Red Flags</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Red Flags That Indicate an Inadequate Inspection</h2>

          <div className='space-y-4'>
            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>The inspector did not pump the tank.</strong> A tank that is not pumped cannot be properly assessed. Baffle condition, tank wall integrity, and liquid level readings from a full tank are all less reliable than readings from an empty one.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Only one access point was opened.</strong> A two-compartment tank requires opening both the inlet and outlet sides. An inspector who opens only one side has not seen the inlet baffle.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>No sludge measurements were taken.</strong> If the report describes the system as &ldquo;appearing healthy&rdquo; without sludge depth in inches, the inspector used a visual assessment where a measurement was required.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>The D-box was not opened.</strong> The distribution box is a common failure point. An inspector who does not open and assess it has left a significant gap in the evaluation.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>No flow test was conducted.</strong> A static inspection without confirming the system can accept a household water load does not reflect how the system performs under actual use.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>The report contains no photographs.</strong> Photographs document findings at the time of inspection and protect both inspector and client.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>The whole inspection took under 45 minutes.</strong> A comprehensive inspection for a conventional residential system takes at minimum 2 to 3 hours including pumping.</p>
            </div>
          </div>
        </div>

        {/* What Inspectors Cannot See */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Limitations</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What Inspectors Cannot See</h2>

          <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Pipe interiors without camera scope.</strong> The sewer line and the laterals within the drainfield are invisible without a camera. A camera scope is an add-on strongly recommended for systems 15 or more years old.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Drainfield soil conditions below the surface.</strong> Probe testing gives surface-level soil moisture readings but cannot assess how far biomat clogging has penetrated. A drainfield that passes on a dry day may fail during a wet season.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Intermittent problems.</strong> A system that backs up only during heavy water use, rainy weather, or full-household occupancy may pass an inspection conducted under normal conditions. Inspectors rely on homeowner descriptions to flag potential intermittent issues.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Future performance.</strong> A system that passes today may fail next year if water use increases, a major rain event saturates the drainfield, or a component reaches end of life between inspections.</p>
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
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What does a septic inspector actually do?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A septic inspector opens the tank, measures sludge and scum depth, pumps the tank, checks the inlet and outlet baffles and effluent filter, opens and assesses the distribution box, probes the drainfield for saturation, conducts a flow test, and produces a written report documenting all findings. A thorough comprehensive inspection takes 2 to 4 hours including pumping. An inspector who spends 20 to 30 minutes without opening the tank has conducted a visual check, not a comprehensive inspection.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What are inspectors looking for in the drainfield?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Inspectors look for surface signs of failure including soggy soil, standing water, unusually lush grass, visible effluent breakout, or odor at the surface. They also probe the ground at multiple points across the drainfield to assess soil saturation, and observe whether effluent backs up from the distribution box during the inspection. See our <Link href='/problems/drainfield-failing' className='text-amber-700 underline hover:text-amber-800'>signs your drainfield is failing guide</Link> for the full progression of failure indicators.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How do I prepare my property for a septic inspection?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Locate the tank and drainfield before inspection day using county health department records. Expose buried tank lids if possible to save time and digging fees. Avoid heavy water use the evening before but maintain normal morning use so the inspector can observe flow. Clear the drainfield area of vehicles and stored items. Gather any available documentation including pumping receipts and previous inspection reports.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Can I watch my own septic inspection?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Yes, and you should if you can. Being present lets you see findings firsthand, ask questions about what the inspector observes, understand the report better when it arrives, and get real-time explanations of the severity of any problems found. A good inspector will narrate findings as they work and welcome an engaged homeowner. An inspector who discourages you from watching is a red flag.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What does it mean if the inspector finds backflow from the drainfield?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Backflow from the drainfield into the tank during pumping means effluent is sitting in the distribution lines because the drainfield soil is not absorbing it at the rate it is receiving effluent. A small amount of backflow from residual liquid in the pipes is normal. A large, continuous flow of effluent returning from the drainfield is one of the strongest indicators of drainfield failure. Whether it represents temporary saturation or permanent soil clogging depends on the history of the system and the other findings. See our <Link href='/problems/drainfield-failing' className='text-amber-700 underline hover:text-amber-800'>signs your drainfield is failing guide</Link> for how to interpret this finding in context.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What should a septic inspection report contain?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A quality inspection report should contain: a system description (tank size, type, age, location), measured sludge depth and scum thickness with their relationship to the pump-out threshold, a component-by-component assessment with a specific finding for each, photographs of all significant findings, recommended corrective actions for any non-passing findings, and a clear overall pass, conditional pass, or fail designation. A report that summarizes the system as &ldquo;functional at time of inspection&rdquo; without measurements or photographs is not a quality report.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How long after a septic inspection is the report valid?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Most lenders and health departments treat a septic inspection report as valid for 30 to 90 days depending on jurisdiction and loan type. Massachusetts Title 5 inspections are valid for 2 years under normal circumstances. The validity period reflects that a system can change condition, particularly following weather events or changes in occupancy. If significant flooding or a major rain event occurs after an inspection but before a real estate transaction closes, a re-inspection is recommended.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What is the difference between a septic inspection and a home inspection?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>A home inspection covers the visible and accessible components of the entire house, including basic observations about the septic system, but does not open the tank, measure sludge or scum depth, probe the drainfield, or assess internal components. A dedicated septic inspection is a comprehensive evaluation of the wastewater system conducted by a septic professional. For any property with a septic system, both a home inspection and a dedicated septic inspection are necessary. A home inspection cannot substitute for a septic inspection.</div>
            </details>
          </div>
        </div>

        {/* Glossary */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Glossary</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Glossary of Septic Inspection Terms</h2>
          <div className='space-y-3'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Sludge judge</h3>
              <p className='text-slate-600 text-xs'>A clear plastic tube with a check valve at the bottom used to measure sludge depth in a septic tank by lowering it to the tank floor, allowing it to fill with material, and pulling it up to measure the depth and character of the contents. The reading tells the inspector how close the sludge layer is to the outlet pipe and whether the tank is due for pumping, with the EPA recommending pump-out when sludge reaches one third of total tank depth or comes within 12 inches of the outlet tee. A sludge judge reading is one of the two most important measurements taken during any inspection, alongside scum layer thickness.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Biomat</h3>
              <p className='text-slate-600 text-xs'>A layer of microbial growth and organic material that forms on the soil surface within drainfield trenches as effluent percolates through, which in moderate amounts is a normal part of the treatment process but in excess reduces the soil&rsquo;s ability to absorb effluent until it eventually seals the trench. Biomat accumulation is the most common mechanism of drainfield failure in older systems, developing faster when solids escape the septic tank due to missed pump-outs, damaged baffles, or heavy disposal use. A drainfield failure caused by biomat cannot be reversed by resting the system and typically requires replacement of the affected sections.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Backflow</h3>
              <p className='text-slate-600 text-xs'>The return flow of effluent or groundwater from the drainfield into the septic tank, observed during pumping when the tank level drops and any liquid in the distribution system flows back toward the now-lower tank. A small amount of backflow from residual effluent in the distribution lines is normal, while a large continuous flow indicates that the drainfield trenches contain effluent that cannot percolate into the soil. See our <Link href='/problems/septic-overflow-after-rain' className='text-amber-700 underline hover:text-amber-800'>septic overflow after rain guide</Link> for the conditions that cause temporary versus permanent drainfield saturation.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Probe rod</h3>
              <p className='text-slate-600 text-xs'>A solid metal rod used by inspectors to probe drainfield soil by pushing it to various depths at multiple points across the drainfield, assessing soil moisture, confirming lateral line locations, and detecting effluent saturation near the surface. A probe hole that immediately fills with liquid effluent indicates the soil at that location is saturated and no longer accepting flow. Multiple saturated probe points across the drainfield indicate system-wide failure rather than a localized wet area.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Septage</h3>
              <p className='text-slate-600 text-xs'>The combined contents of a septic tank at the time of pump-out, consisting of the settled sludge layer, the floating scum layer, and the liquid effluent between them, removed as a unit by the vacuum pump on the service truck and transported to a licensed septage receiving facility. The volume and character of septage removed during a pump-out gives the inspector information about how well the tank has been maintained and how quickly solids are accumulating relative to the pumping schedule.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Flow test</h3>
              <p className='text-slate-600 text-xs'>A procedure conducted during a comprehensive septic inspection in which a known volume of water is run through the household plumbing into the septic system to verify it can accept a realistic household water load without backing up, overflowing at the distribution box, or causing effluent to surface at the drainfield. A system that passes a static visual inspection but fails a flow test reveals a functional limitation that would only become apparent under actual occupancy conditions, making the flow test a critical component of any real estate transaction inspection.</p>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className='mt-16'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>

          <h3 className='text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3'>On theseptic.guide</h3>
          <div className='grid md:grid-cols-2 gap-6 mb-10'>
            <Link href='/cost-guides/septic-inspection-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Septic Inspection Cost 2026</h4>
              <p className='text-slate-600 text-xs'>What each inspection type costs, what should be included at every price point, and the add-on fees that most companies do not quote upfront.</p>
            </Link>
            <Link href='/articles/how-often-pump-septic-tank' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>How Often Should You Pump Your Septic Tank?</h4>
              <p className='text-slate-600 text-xs'>The EPA-based pumping and inspection schedule by tank size and household size, and why combining the two services saves money on service call fees.</p>
            </Link>
            <Link href='/problems/drainfield-failing' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Signs Your Drainfield Is Failing</h4>
              <p className='text-slate-600 text-xs'>The surface indicators and symptom progression that a thorough inspection is designed to catch before full failure, and what each finding means for system lifespan.</p>
            </Link>
            <Link href='/maintenance/septic-system-maintenance-checklist' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Septic System Maintenance Checklist</h4>
              <p className='text-slate-600 text-xs'>The full ongoing maintenance schedule that keeps a system in passing condition between professional inspections, including filter cleaning intervals and tank access maintenance.</p>
            </Link>
            <Link href='/articles/how-to-find-your-septic-tank' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>How to Find Your Septic Tank</h4>
              <p className='text-slate-600 text-xs'>The methods that reliably locate a tank before inspection day, eliminating the digging fees that add $50 to $250 to the bill when the inspector arrives to an unmarked property.</p>
            </Link>
            <Link href='/reviews/best-septic-tank-risers' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Best Septic Tank Risers</h4>
              <p className='text-slate-600 text-xs'>The single upgrade that eliminates digging at every inspection and pump-out, paying for itself in two to three service visits.</p>
            </Link>
            <Link href='/guides/buying-home-with-septic' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Buying a Home with a Septic System</h4>
              <p className='text-slate-600 text-xs'>How to use inspection findings in a real estate transaction, including pre-purchase questions, negotiation strategies, and what to do when the inspection reveals problems.</p>
            </Link>
            <Link href='/guides/selling-home-with-septic-system' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Selling a Home with a Septic System</h4>
              <p className='text-slate-600 text-xs'>How a pre-listing inspection protects your asking price and builds buyer confidence, and what to do when the inspection reveals issues before you list.</p>
            </Link>
            <Link href='/cost-guides/septic-system-repair-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Septic System Repair Cost 2026</h4>
              <p className='text-slate-600 text-xs'>What every common repair costs after an inspection reveals a deficiency, from a cracked baffle to full drainfield replacement.</p>
            </Link>
            <Link href='/articles/what-can-cannot-flush-septic-system' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>What You Can and Cannot Flush on a Septic System</h4>
              <p className='text-slate-600 text-xs'>The household practices that affect what inspectors find in the tank, particularly regarding effluent filter condition and sludge accumulation rate.</p>
            </Link>
            <Link href='/articles/septic-tank-cleaning-vs-pumping' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Septic Tank Cleaning vs Pumping</h4>
              <p className='text-slate-600 text-xs'>How pumping relates to the full inspection process and when additional cleaning beyond a standard pump-out is warranted.</p>
            </Link>
            <Link href='/articles/complete-septic-guide' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Complete Septic System Guide</h4>
              <p className='text-slate-600 text-xs'>How every component the inspector evaluates actually functions, and why each matters to overall system health.</p>
            </Link>
          </div>

          <h3 className='text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3'>From Our Network</h3>
          <div className='grid md:grid-cols-2 gap-6 mb-10'>
            <a href='https://thebasement.guide/articles/homebuyers-basement-inspection-checklist' target='_blank' rel='noopener noreferrer' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>Homebuyer&apos;s Basement Inspection Checklist &middot; thebasement.guide</h4>
              <p className='text-slate-600 text-xs'>For buyers scheduling both a septic inspection and a basement evaluation before closing, this checklist covers what inspectors look for below grade in the home itself alongside the wastewater system.</p>
            </a>
            <a href='https://thebasement.guide/articles/how-to-hire-basement-waterproofing-contractor' target='_blank' rel='noopener noreferrer' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>How to Hire a Basement Waterproofing Contractor &middot; thebasement.guide</h4>
              <p className='text-slate-600 text-xs'>The same vetting principles that apply to finding a qualified septic inspector: how to verify credentials, compare quotes, and identify red flags before hiring.</p>
            </a>
          </div>

          <h3 className='text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3'>External Resource</h3>
          <div className='grid md:grid-cols-2 gap-6 mb-10'>
            <a href='https://www.epa.gov/septic/how-care-your-septic-system' target='_blank' rel='noopener noreferrer' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-1 text-sm'>EPA Septic System Inspection Guidance &middot; U.S. EPA</h4>
              <p className='text-slate-600 text-xs'>The EPA&apos;s official homeowner guidance on septic system care, including inspection frequency recommendations and what a standard inspection should cover.</p>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className='bg-slate-900 rounded-2xl p-8 md:p-10 text-center mb-10'>
          <h2 className='text-xl md:text-2xl font-bold text-white mb-3'>Need Professional Septic Service?</h2>
          <p className='text-slate-300 mb-6 max-w-xl mx-auto text-sm'>Connect with licensed septic professionals in your area for inspection, pumping, or repair.</p>
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
