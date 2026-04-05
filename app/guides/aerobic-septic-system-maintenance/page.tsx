import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aerobic Septic System Maintenance: The Complete Owner\'s Guide | The Septic Guide',
  description: 'Complete aerobic septic system maintenance guide. Quarterly inspection schedule, chlorine tablets, aerator care, alarm troubleshooting, and what requires a licensed provider vs what you can do yourself.',
  alternates: { canonical: 'https://theseptic.guide/guides/aerobic-septic-system-maintenance' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often does an aerobic septic system need to be serviced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quarterly professional service is required by law in most states with significant ATU populations, including Texas (every four months per TCEQ regulations), Oklahoma, and Florida. The service must be performed by a licensed maintenance provider certified for your specific ATU brand. Monthly homeowner checks between professional visits are also recommended. Annual or semi-annual service schedules are not compliant with most state regulations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often do aerobic septic systems need to be pumped?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most aerobic systems need pumping every 3 to 5 years for an average household of 3 to 4 people, similar to conventional septic systems. However, the actual pumping schedule should be determined by sludge depth measurements taken during quarterly service visits, not by a fixed time interval. Your licensed maintenance provider will recommend pumping when sludge reaches approximately 50 percent of tank capacity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of chlorine tablets do I use in an aerobic septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use only calcium hypochlorite tablets specifically rated for wastewater treatment in aerobic systems. Never use swimming pool chlorine tablets (trichlor) because they contain cyanuric acid stabilizer that damages the ATU bacterial colony and corrodes system components. Calcium hypochlorite tablets are sold in 25-pound buckets from septic supply stores and online. Most households need one refill every 4 to 8 weeks depending on water usage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my aerobic septic system alarm going off?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common cause is aerator failure. The electric pump that injects air into the aeration chamber has stopped working. Other causes include a malfunctioning float switch, high water level in the tank from excessive household water use or a plumbing leak, or a failed pump in the pump chamber. Do not ignore the alarm. Call your licensed maintenance provider the same day and reduce household water use until the issue is resolved. Most alarms are not catastrophic emergencies but they require prompt attention.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do aerobic septic systems last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A properly maintained aerobic system typically lasts 20 to 30 years for the tank components. Mechanical components have shorter lifespans: aerators last 2 to 10 years ($500 to $1,000 to replace), pumps last 7 to 15 years, and control panels last 10 to 15 years. The key to maximum system lifespan is consistent quarterly maintenance, prompt aerator replacement when needed, and avoiding overloading the system with excessive water use or flushing inappropriate materials.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do my own aerobic septic system maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most homeowners cannot legally perform the required quarterly inspections and county reporting. This must be done by a licensed maintenance provider certified for your specific ATU brand. In Texas, homeowners may perform their own maintenance after the first two years of installation, but only after completing required TCEQ training and certification. For most homeowners, maintaining a professional service contract is the practical and legally compliant approach.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I not flush with an aerobic septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An aerobic system treats domestic wastewater and toilet paper only. Items that will harm the system include antibacterial soaps and cleaners (kill beneficial bacteria), bleach and chemical drain cleaners (destroy bacterial colony), grease and cooking oils (cause sludge accumulation), wet wipes even if labeled flushable (do not break down), feminine hygiene products, medications, and any non-biodegradable solids. The consequences of flushing harmful materials are more severe in an ATU than in a conventional system because the aerobic bacterial colony is more sensitive to chemical disruption.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does aerobic septic system maintenance cost per year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Annual maintenance costs for an aerobic system run $350 to $800 per year for a typical household, broken down as follows: quarterly service contract $200 to $500 per year, chlorine tablets $40 to $80 per year, and occasional spray head replacements $10 to $30 per head. Aerator replacement ($500 to $1,000) and tank pumping ($300 to $600 every 3 to 5 years) are additional periodic costs. This is significantly more than the $75 to $150 annual cost of maintaining a conventional septic system, which is the tradeoff for the higher treatment quality an ATU provides.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Aerobic Septic System Maintenance: The Complete Owner\'s Guide',
  description: 'Complete aerobic septic system maintenance guide. Quarterly inspection schedule, chlorine tablets, aerator care, alarm troubleshooting, and what requires a licensed provider vs what you can do yourself.',
  image: 'https://theseptic.guide/Aerobic%20septic%20maintenance.jpg',
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Maintain an Aerobic Septic System',
  description: 'Step-by-step guide to maintaining an aerobic treatment unit (ATU) including monthly homeowner checks and quarterly professional service requirements.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Check the control panel monthly',
      text: 'Verify the green light is on indicating the system is running. No alarm lights should be active. If the panel shows no power, check the circuit breaker dedicated to the ATU before calling your provider.',
    },
    {
      '@type': 'HowToStep',
      name: 'Listen to the aerator monthly',
      text: 'You should be able to hear or feel the aerator running as a low hum or vibration from the aeration chamber. Silence means the aerator has stopped and requires immediate attention.',
    },
    {
      '@type': 'HowToStep',
      name: 'Check the chlorine chamber monthly',
      text: 'Look inside the accessible chlorine tablet chamber. If tablets are depleted, refill with calcium hypochlorite tablets rated for wastewater treatment. Never use swimming pool chlorine tablets.',
    },
    {
      '@type': 'HowToStep',
      name: 'Inspect spray heads monthly (if applicable)',
      text: 'Walk your yard and check each spray head. They should rotate freely and spray a full, even pattern. Clean clogged heads with a thin wire or replace them.',
    },
    {
      '@type': 'HowToStep',
      name: 'Schedule quarterly professional service',
      text: 'A licensed maintenance provider must perform quarterly inspections including aerator function check, chlorine residual test, sludge depth measurement, spray head inspection, control panel test, and county report submission.',
    },
    {
      '@type': 'HowToStep',
      name: 'Refill chlorine tablets every 4 to 8 weeks',
      text: 'Use only calcium hypochlorite tablets rated for wastewater treatment. Buy in 25-pound buckets for cost savings. Monitor consumption rate based on household water usage.',
    },
    {
      '@type': 'HowToStep',
      name: 'Schedule tank pumping every 3 to 5 years',
      text: 'Have the pre-treatment trash tank pumped when sludge reaches 50 percent of capacity as measured during quarterly service visits. Use a pumper familiar with your specific ATU brand and model.',
    },
  ],
}

export default function AerobicSepticSystemMaintenance() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

              <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: 'Aerobic Septic System Maintenance' }]} />
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/Aerobic septic maintenance.jpg'
          alt='Aerobic septic system maintenance components including aerator and control panel'
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
            Aerobic Septic System<br />
            <span className='text-amber-500'>Maintenance</span>
          </h1>
          <p className='text-slate-300 text-lg max-w-2xl mb-6 leading-relaxed'>
            The complete owner&apos;s guide &mdash; quarterly inspections, chlorine tablets, aerator care, and what you can do yourself vs what requires a licensed provider.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-sm'>SG</div>
            <div>
              <p className='text-white font-semibold'>The Septic Guide</p>
              <p className='text-slate-400 text-sm'>Updated Apr 2026 &middot; 14 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className='max-w-4xl mx-auto px-6 py-16'>

        {/* TL;DR Box */}
        <div className='bg-[#E1F5EE] border-l-4 border-[#1D9E75] rounded-lg p-6 mb-12'>
          <p className='font-bold text-slate-900 mb-2'>TL;DR</p>
          <p className='text-slate-700 leading-relaxed'>
            Aerobic septic systems require significantly more maintenance than conventional systems. The core schedule is: quarterly professional inspections (required by law in most states), chlorine tablet refills every 1 to 3 months, aerator checks monthly, and tank pumping every 3 to 5 years. Annual maintenance contracts are mandatory in Texas and many other states. Skipping quarterly service is not just neglect &mdash; it is a code violation that can result in fines and forced system shutdown. Budget $150 to $300 per quarterly visit and $500 to $1,000 for aerator replacement when it fails.
          </p>
        </div>

        {/* Introduction */}
        <div className='prose prose-lg max-w-none'>
          <p className='text-slate-600 leading-relaxed mb-8'>
            You have an aerobic septic system. You know this because the home inspector mentioned it, the seller handed you a folder of paperwork, and everyone moved on like that was sufficient information.
          </p>
          <p className='text-slate-600 leading-relaxed mb-8'>
            It was not.
          </p>
          <p className='text-slate-600 leading-relaxed mb-8'>
            Somewhere between month three and month six, one of three things happens. The alarm on the control panel starts blinking. The yard around the spray heads starts smelling. Or a certified letter arrives from the county telling you that your required maintenance contract lapsed and you are now out of compliance.
          </p>
          <p className='text-slate-600 leading-relaxed mb-8'>
            None of these are emergencies. All of them were preventable. And all of them happen to ATU owners who were never told what owning one of these systems actually requires.
          </p>
          <p className='text-slate-600 leading-relaxed mb-8'>
            Almost every piece of maintenance advice online is written for conventional septic systems. An aerobic treatment unit is a fundamentally different machine. It runs on electricity. It has mechanical components that wear out. It requires quarterly professional service by a licensed provider. And if you treat it like a conventional system by pumping it once every few years and forgetting about it, it will fail, and the repair bill will be substantial.
          </p>
          <p className='text-slate-600 leading-relaxed mb-8'>
            This guide covers everything you actually need to know to maintain an aerobic septic system correctly, legally, and cost-effectively.
          </p>
        </div>

        {/* The Four-Times-Per-Year Rule */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>The Four-Times-Per-Year Rule</h2>
          <div className='prose prose-lg max-w-none'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              The single most important thing to understand about aerobic septic system maintenance is this: quarterly professional service is not optional. In Texas, the TCEQ requires aerobic systems to be inspected every four months. Most other states with significant ATU populations including Oklahoma, Florida, and Louisiana have similar requirements. Many counties impose even stricter rules than the state minimum.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              This is not a suggestion like the &ldquo;pump every three to five years&rdquo; guidance for conventional systems. It is a legal requirement enforced by your local permitting authority. Homeowners who skip quarterly service risk fines, mandatory system upgrades, and in some jurisdictions, having their system shut down and condemned.
            </p>
            <p className='text-slate-700 font-semibold mb-4'>What happens at a quarterly service visit:</p>
            <ul className='list-disc pl-6 space-y-2 mb-6'>
              <li className='text-slate-600'>Aerator function check (verifying air is reaching the aeration chamber)</li>
              <li className='text-slate-600'>Chlorine residual test (effluent must test at 0.1 mg/L minimum before discharge)</li>
              <li className='text-slate-600'>Chlorine tablet refill as needed</li>
              <li className='text-slate-600'>Sludge depth measurement in all compartments</li>
              <li className='text-slate-600'>Spray head inspection and cleaning</li>
              <li className='text-slate-600'>Control panel and alarm test</li>
              <li className='text-slate-600'>Written report submitted to the county health department</li>
            </ul>
            <p className='text-slate-600 leading-relaxed mb-6'>
              The maintenance provider must be licensed by your state and certified by the manufacturer of your specific ATU brand. A Norweco-certified technician is not automatically qualified to service an Aerobic Systems Inc. or Clearstream unit. Manufacturer certification matters because each brand has proprietary components and specific service procedures.
            </p>
          </div>
        </div>

        {/* How an Aerobic Septic System Actually Works */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>How an Aerobic Septic System Actually Works</h2>
          <div className='prose prose-lg max-w-none'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              Understanding the maintenance requirements starts with understanding what the system is doing.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              A conventional septic system has one job: separate solids from liquid and allow the liquid to slowly drain into the soil. An aerobic treatment unit has a more complex job: actually treat the wastewater to a high standard before it leaves the system, typically achieving 85 to 98 percent contaminant removal compared to 60 to 80 percent for a conventional system.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              The treatment process moves through three to four stages:
            </p>
            <p className='text-slate-600 leading-relaxed mb-4'>
              <strong>Stage 1: Trash tank (pre-treatment):</strong> Raw sewage from the house enters a pre-treatment chamber where solids settle and grease floats. This functions similarly to a conventional septic tank.
            </p>
            <p className='text-slate-600 leading-relaxed mb-4'>
              <strong>Stage 2: Aeration chamber:</strong> An electric aerator pumps air into the wastewater, creating an oxygen-rich environment where aerobic bacteria thrive and aggressively break down organic matter. This is the heart of the system and the component that requires the most maintenance attention.
            </p>
            <p className='text-slate-600 leading-relaxed mb-4'>
              <strong>Stage 3: Clarifier/settling chamber:</strong> Treated water separates from remaining solids, which settle back into the aeration chamber.
            </p>
            <p className='text-slate-600 leading-relaxed mb-4'>
              <strong>Stage 4: Disinfection:</strong> Treated effluent passes through a chlorine chamber where calcium hypochlorite tablets dissolve into the water, killing remaining pathogens before discharge.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Discharge:</strong> Disinfected effluent either drains into a drip irrigation field, sprays onto the surface through spray heads, or drains into a conventional drainfield. Surface spray systems are the most common in Texas and require additional maintenance attention because the spray heads are exposed and can clog.
            </p>
          </div>
        </div>

        {/* Monthly Homeowner Checks */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Monthly Homeowner Checks</h2>

          {/* Critical Callout Box */}
          <div className='border border-red-200 bg-red-50 rounded-lg p-6 mb-8'>
            <p className='font-bold text-slate-900 mb-2'>Do not ignore your alarm.</p>
            <p className='text-slate-600 leading-relaxed'>
              Every aerobic system has a visual alarm (usually a red light on the control panel) and often an audible alarm. When it activates, something in the system has malfunctioned. The most common cause is aerator failure, which allows the aeration chamber to go anaerobic within hours. Do not wait for your quarterly service visit. Call your maintenance provider the same day. While you wait, reduce household water use to the absolute minimum.
            </p>
          </div>

          <div className='prose prose-lg max-w-none'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              Between quarterly professional visits, homeowners should perform these monthly checks:
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Check the control panel.</strong> The green light should be on, indicating the system is running. No alarm lights should be active. If the panel shows no power, check the circuit breaker dedicated to the ATU before calling your provider.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Listen to the aerator.</strong> You should be able to hear or feel the aerator running: a low hum or vibration from the aeration chamber. Silence means the aerator has stopped. This is the most critical failure mode in any aerobic system and requires immediate attention.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Check the chlorine chamber.</strong> Most ATUs have an accessible chlorine tablet chamber. Look inside. If tablets are depleted, the effluent is leaving your system without disinfection, which is both a health hazard and a code violation. Refill with calcium hypochlorite tablets rated for wastewater treatment. Never use swimming pool chlorine tablets because they contain stabilizers that damage the system&apos;s bacterial colony.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Inspect spray heads (if applicable).</strong> Walk your yard and look at each spray head. They should rotate freely and spray a full, even pattern. Clogged or broken heads are a compliance violation since they can create ponding of inadequately treated effluent. Clean clogged heads with a thin wire or replace them. They are inexpensive.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Check for alarm history.</strong> Many modern ATU control panels log alarm events. Review the log monthly so you can report any intermittent alarms to your service provider even if the alarm has cleared.
            </p>
          </div>
        </div>

        {/* Quarterly Professional Maintenance Table */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Quarterly Professional Maintenance: What to Expect</h2>
          <div className='prose prose-lg max-w-none'>
            <p className='text-slate-600 leading-relaxed mb-8'>
              Your licensed maintenance provider should complete the following tasks at every quarterly visit. Use this as a checklist to verify the service was actually performed:
            </p>
          </div>
          <div className='overflow-x-auto mb-8'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='text-left p-3 text-sm font-bold text-slate-900 border border-slate-200'>Task</th>
                  <th className='text-left p-3 text-sm font-bold text-slate-900 border border-slate-200'>What It Involves</th>
                  <th className='text-left p-3 text-sm font-bold text-slate-900 border border-slate-200'>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 text-sm text-slate-700 border border-slate-200 font-semibold'>Aerator inspection</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Check motor, diffusers, and air output</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Aerator failure kills the bacterial colony within hours</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-sm text-slate-700 border border-slate-200 font-semibold'>Chlorine residual test</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Test effluent for minimum 0.1 mg/L chlorine</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Below this level, system is not disinfecting (code violation)</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-slate-700 border border-slate-200 font-semibold'>Chlorine tablet refill</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Replenish calcium hypochlorite tablets</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Ensures continuous disinfection between visits</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-sm text-slate-700 border border-slate-200 font-semibold'>Sludge depth measurement</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Probe all compartments with a sludge judge</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Determines if pumping is needed; excessive sludge causes system failure</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-slate-700 border border-slate-200 font-semibold'>Spray head inspection</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Check each head for clogs, breakage, rotation</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Ponding treated effluent is a health hazard and compliance violation</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-sm text-slate-700 border border-slate-200 font-semibold'>Control panel test</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Test alarm, timer, float switches</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Catches electrical failures before they cause system failure</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-slate-700 border border-slate-200 font-semibold'>County report submission</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Written report filed with local health department</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Required by law in most jurisdictions with ATU regulations</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-600 leading-relaxed'>
            If your provider is not completing all of these tasks, you are paying for incomplete service and your system is not in compliance.
          </p>
        </div>

        {/* Chlorine Tablet Management */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Chlorine Tablet Management</h2>
          <div className='prose prose-lg max-w-none'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              Chlorine is what separates a legal, compliant aerobic system from an illegally discharging one. The treated effluent leaving your system must contain a minimum chlorine residual of 0.1 milligrams per liter at the point of discharge.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              Use only calcium hypochlorite tablets rated for wastewater treatment. These are sold specifically for ATU systems and are distinct from swimming pool chlorine tablets (trichlor), which contain cyanuric acid stabilizer that harms the ATU bacterial colony and is corrosive to system components, and from sodium hypochlorite (liquid bleach), which degrades too quickly and creates chemical imbalance.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Refill frequency</strong> depends on your household water usage and the size of your chlorine chamber. Most systems need refilling every 4 to 8 weeks. Higher water usage means faster tablet consumption. Your quarterly service provider will track this and advise on optimal refill intervals.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Buy tablets in bulk.</strong> A 25-pound bucket of calcium hypochlorite tablets costs $40 to $80 and lasts most households 6 to 12 months. Buying individual packages is significantly more expensive over time.
            </p>
          </div>
        </div>

        {/* Aerator Maintenance and Replacement */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Aerator Maintenance and Replacement</h2>
          <div className='prose prose-lg max-w-none'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              The aerator is the most mechanically demanding component in an aerobic system and the one most likely to fail. It runs continuously, 24 hours a day, 365 days a year, pumping air into the aeration chamber. That continuous operation means it wears out.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Expected aerator lifespan:</strong> 2 to 10 years depending on brand, model, and conditions. Economy aerators last 2 to 4 years. Higher-quality units last 7 to 10 years.
            </p>
            <p className='text-slate-700 font-semibold mb-4'>Signs of aerator failure or declining performance:</p>
            <ul className='list-disc pl-6 space-y-2 mb-6'>
              <li className='text-slate-600'>Alarm light activated on control panel</li>
              <li className='text-slate-600'>No audible hum from the aeration chamber</li>
              <li className='text-slate-600'>Foul odors from the system (aeration chamber going anaerobic)</li>
              <li className='text-slate-600'>Technician reports reduced dissolved oxygen in aeration chamber during quarterly visit</li>
              <li className='text-slate-600'>Increased sludge accumulation between service visits</li>
            </ul>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Aerator replacement cost:</strong> $500 to $1,000 for most residential units including parts and labor. This is a normal maintenance expense, not a system failure. Budget for it.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              Use brand-specific replacement parts. Each ATU manufacturer uses proprietary aerator designs. Installing a generic replacement aerator in a Norweco, Jet, or Clearstream unit voids the warranty, may not fit correctly, and can cause compliance issues if the system then fails inspection.
            </p>
          </div>
        </div>

        {/* Pumping Schedule */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Pumping Schedule</h2>
          <div className='prose prose-lg max-w-none'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              Aerobic systems need pumping less frequently than most homeowners expect, but they still need it. The pre-treatment (trash) tank accumulates sludge just like a conventional septic tank. If it is not pumped on schedule, sludge flows into the aeration chamber and overwhelms the system.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Standard pumping interval:</strong> Every 3 to 5 years for a household of 3 to 4 people
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Sludge-based pumping:</strong> Your quarterly service provider measures sludge depth at each visit. Most providers recommend pumping when sludge reaches 50 percent of tank capacity regardless of time elapsed.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>What happens during pumping:</strong> The licensed pumper removes accumulated sludge from the pre-treatment chamber and, if needed, the aeration and pump chambers. Unlike conventional systems, ATU pumping requires a pumper familiar with your specific brand and model. Some ATU components can be damaged if pumped incorrectly.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Pumping cost:</strong> $300 to $600 for a standard residential ATU pumping, similar to conventional system pumping.
            </p>
          </div>
        </div>

        {/* Warning Signs Table */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Warning Signs That Require Immediate Action</h2>
          <p className='text-slate-600 leading-relaxed mb-8'>
            Do not wait for your next quarterly visit if you observe any of the following:
          </p>
          <div className='overflow-x-auto mb-8'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='text-left p-3 text-sm font-bold text-slate-900 border border-slate-200'>Warning Sign</th>
                  <th className='text-left p-3 text-sm font-bold text-slate-900 border border-slate-200'>Likely Cause</th>
                  <th className='text-left p-3 text-sm font-bold text-slate-900 border border-slate-200'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 text-sm text-slate-700 border border-slate-200 font-semibold'>Alarm light on control panel</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Aerator failure, high water level, float switch failure</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Call maintenance provider same day, reduce water use</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-sm text-slate-700 border border-slate-200 font-semibold'>Foul odor from spray heads or yard</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Aerator failure, chlorine depletion, drainfield issue</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Call maintenance provider same day</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-slate-700 border border-slate-200 font-semibold'>Wet or soggy soil around spray heads</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Clogged spray heads, hydraulic overload, drainfield failure</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Stop non-essential water use, call provider</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-sm text-slate-700 border border-slate-200 font-semibold'>Spray heads not rotating or spraying</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Clogged heads, broken heads, pump failure</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Inspect heads, call provider if pump-related</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-slate-700 border border-slate-200 font-semibold'>Dark or discolored effluent visible</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Inadequate treatment, aerator failure</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Call provider immediately (health hazard)</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-sm text-slate-700 border border-slate-200 font-semibold'>Green or lush grass over drainfield</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Surfacing effluent (system is not treating properly)</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Call provider immediately</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-slate-700 border border-slate-200 font-semibold'>Multiple alarms in short period</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>System is cycling in and out of failure</td>
                  <td className='p-3 text-sm text-slate-600 border border-slate-200'>Call provider immediately</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* What You Can Do vs Licensed Provider */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>What You Can Do vs What Requires a Licensed Provider</h2>
          <div className='prose prose-lg max-w-none'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              Unlike conventional systems where a competent homeowner can handle most maintenance tasks, aerobic systems have a higher threshold for professional involvement due to legal requirements and mechanical complexity.
            </p>
            <p className='text-slate-700 font-semibold mb-4'>Homeowners can typically do:</p>
            <ul className='list-disc pl-6 space-y-2 mb-6'>
              <li className='text-slate-600'>Monthly visual inspection of control panel</li>
              <li className='text-slate-600'>Listening for aerator operation</li>
              <li className='text-slate-600'>Refilling chlorine tablets</li>
              <li className='text-slate-600'>Cleaning clogged spray heads</li>
              <li className='text-slate-600'>Mowing around the system and keeping vegetation trimmed back</li>
              <li className='text-slate-600'>Keeping records of maintenance visits and alarm events</li>
            </ul>
            <p className='text-slate-700 font-semibold mb-4'>Always requires a licensed provider:</p>
            <ul className='list-disc pl-6 space-y-2 mb-6'>
              <li className='text-slate-600'>Quarterly inspection and county reporting (legally required)</li>
              <li className='text-slate-600'>Sludge depth measurement and pumping determination</li>
              <li className='text-slate-600'>Chlorine residual testing</li>
              <li className='text-slate-600'>Aerator repair or replacement</li>
              <li className='text-slate-600'>Float switch replacement</li>
              <li className='text-slate-600'>Any work that requires opening the main tank compartments</li>
              <li className='text-slate-600'>Any repairs or modifications to system components</li>
            </ul>
            <p className='text-slate-600 leading-relaxed mb-6'>
              Note that in Texas, homeowners may perform their own maintenance after the first two years of system installation, but only if they obtain proper training and certification from TCEQ. Most homeowners are better served by maintaining a professional service contract even after the mandatory two-year initial period.
            </p>
          </div>
        </div>

        {/* Annual Maintenance Contract */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Annual Maintenance Contract: What to Look For</h2>
          <div className='prose prose-lg max-w-none'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              Most states require ATU owners to maintain a service contract with a licensed provider. Even where not legally required, a contract is strongly recommended because it ensures quarterly inspections happen on schedule, creates a paper trail of compliance for county reporting, provides priority response when the alarm activates, and keeps one provider familiar with your specific system&apos;s history.
            </p>
            <p className='text-slate-700 font-semibold mb-4'>What a good maintenance contract includes:</p>
            <ul className='list-disc pl-6 space-y-2 mb-6'>
              <li className='text-slate-600'>Four quarterly visits per year with full inspection and reporting</li>
              <li className='text-slate-600'>Chlorine tablets included or available at cost</li>
              <li className='text-slate-600'>Priority emergency response</li>
              <li className='text-slate-600'>Written reports after each visit</li>
              <li className='text-slate-600'>County report submission handled by the provider</li>
            </ul>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Annual contract cost:</strong> $200 to $500 per year depending on location and what is included. Some providers charge separately for chlorine tablets and parts. Ask before signing.
            </p>
            <p className='text-slate-600 leading-relaxed mb-6'>
              <strong>Red flags in a maintenance provider:</strong> Not certified by the manufacturer of your specific ATU brand, does not submit county reports, cannot provide written service reports, or offers annual rather than quarterly visits (below the minimum legal requirement in most jurisdictions).
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Frequently Asked Questions</h2>
          <div className='space-y-8'>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>How often does an aerobic septic system need to be serviced?</h3>
              <p className='text-slate-600 leading-relaxed'>
                Quarterly professional service is required by law in most states with significant ATU populations, including Texas (every four months per TCEQ regulations), Oklahoma, and Florida. The service must be performed by a licensed maintenance provider certified for your specific ATU brand. Monthly homeowner checks between professional visits are also recommended. Annual or semi-annual service schedules are not compliant with most state regulations.
              </p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>How often do aerobic septic systems need to be pumped?</h3>
              <p className='text-slate-600 leading-relaxed'>
                Most aerobic systems need pumping every 3 to 5 years for an average household of 3 to 4 people, similar to conventional septic systems. However, the actual pumping schedule should be determined by sludge depth measurements taken during quarterly service visits, not by a fixed time interval. Your licensed maintenance provider will recommend pumping when sludge reaches approximately 50 percent of tank capacity.
              </p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>What kind of chlorine tablets do I use in an aerobic septic system?</h3>
              <p className='text-slate-600 leading-relaxed'>
                Use only calcium hypochlorite tablets specifically rated for wastewater treatment in aerobic systems. Never use swimming pool chlorine tablets (trichlor) because they contain cyanuric acid stabilizer that damages the ATU bacterial colony and corrodes system components. Calcium hypochlorite tablets are sold in 25-pound buckets from septic supply stores and online. Most households need one refill every 4 to 8 weeks depending on water usage.
              </p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>Why is my aerobic septic system alarm going off?</h3>
              <p className='text-slate-600 leading-relaxed'>
                The most common cause is aerator failure. The electric pump that injects air into the aeration chamber has stopped working. Other causes include a malfunctioning float switch, high water level in the tank from excessive household water use or a plumbing leak, or a failed pump in the pump chamber. Do not ignore the alarm. Call your licensed maintenance provider the same day and reduce household water use until the issue is resolved. Most alarms are not catastrophic emergencies but they require prompt attention.
              </p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>How long do aerobic septic systems last?</h3>
              <p className='text-slate-600 leading-relaxed'>
                A properly maintained aerobic system typically lasts 20 to 30 years for the tank components. Mechanical components have shorter lifespans: aerators last 2 to 10 years ($500 to $1,000 to replace), pumps last 7 to 15 years, and control panels last 10 to 15 years. The key to maximum system lifespan is consistent quarterly maintenance, prompt aerator replacement when needed, and avoiding overloading the system with excessive water use or flushing inappropriate materials.
              </p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>Can I do my own aerobic septic system maintenance?</h3>
              <p className='text-slate-600 leading-relaxed'>
                Most homeowners cannot legally perform the required quarterly inspections and county reporting. This must be done by a licensed maintenance provider certified for your specific ATU brand. In Texas, homeowners may perform their own maintenance after the first two years of installation, but only after completing required TCEQ training and certification. For most homeowners, maintaining a professional service contract is the practical and legally compliant approach.
              </p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>What should I not flush with an aerobic septic system?</h3>
              <p className='text-slate-600 leading-relaxed'>
                An aerobic system treats domestic wastewater and toilet paper only. Items that will harm the system include antibacterial soaps and cleaners (kill beneficial bacteria), bleach and chemical drain cleaners (destroy bacterial colony), grease and cooking oils (cause sludge accumulation), wet wipes even if labeled flushable (do not break down), feminine hygiene products, medications, and any non-biodegradable solids. The consequences of flushing harmful materials are more severe in an ATU than in a conventional system because the aerobic bacterial colony is more sensitive to chemical disruption.
              </p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>How much does aerobic septic system maintenance cost per year?</h3>
              <p className='text-slate-600 leading-relaxed'>
                Annual maintenance costs for an aerobic system run $350 to $800 per year for a typical household, broken down as follows: quarterly service contract $200 to $500 per year, chlorine tablets $40 to $80 per year, and occasional spray head replacements $10 to $30 per head. Aerator replacement ($500 to $1,000) and tank pumping ($300 to $600 every 3 to 5 years) are additional periodic costs. This is significantly more than the $75 to $150 annual cost of maintaining a conventional septic system, which is the tradeoff for the higher treatment quality an ATU provides.
              </p>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Glossary</h2>
          <div className='space-y-4'>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Aerobic treatment unit (ATU)</h3>
              <p className='text-slate-600 text-sm'>A septic system that injects oxygen into the treatment chamber using a motorized aerator, supporting oxygen-dependent bacteria that break down waste more thoroughly than the anaerobic bacteria in conventional systems. ATUs achieve 85 to 98 percent contaminant removal compared to 60 to 80 percent for conventional systems. Required by code in many areas with poor soil conditions or small lot sizes.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Aerator</h3>
              <p className='text-slate-600 text-sm'>The electric motor and diffuser assembly that continuously pumps air into the aeration chamber of an ATU. Runs 24 hours a day, 365 days a year. Expected lifespan of 2 to 10 years depending on brand and conditions. The most frequently replaced mechanical component in an aerobic system. Must be replaced with a brand-specific part. Generic replacements are not compliant.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Calcium hypochlorite</h3>
              <p className='text-slate-600 text-sm'>The correct type of chlorine tablet for use in aerobic septic systems. Dissolves in the disinfection chamber to kill pathogens in treated effluent before discharge. Available in granular form or as pre-formed tablets. Not to be confused with trichlor pool tablets, which contain cyanuric acid stabilizer that damages ATU bacterial colonies.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Chlorine residual</h3>
              <p className='text-slate-600 text-sm'>The concentration of active chlorine remaining in treated effluent at the point of discharge. Minimum acceptable level is 0.1 milligrams per liter. Below this level the system is not adequately disinfecting effluent and is in violation of operating permit requirements. Tested at every quarterly service visit by the licensed maintenance provider.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Control panel</h3>
              <p className='text-slate-600 text-sm'>The electrical enclosure mounted near the ATU that houses the timer, float switches, alarm circuits, and power connections for the aerator and pump. Most modern panels include an alarm light and buzzer that activate when any component malfunctions. Some panels log alarm events for review during service visits.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>OSSF (On-Site Sewage Facility)</h3>
              <p className='text-slate-600 text-sm'>Texas&apos;s official regulatory term for septic systems including aerobic treatment units. Regulated by the Texas Commission on Environmental Quality (TCEQ). ATUs in Texas are required to be inspected every four months by a TCEQ-licensed maintenance provider certified by the ATU manufacturer.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Spray heads</h3>
              <p className='text-slate-600 text-sm'>The distribution devices used in surface application aerobic systems that spray disinfected effluent onto the lawn in a fine mist. Must be kept clean, properly rotating, and functioning at all times. Ponding or runoff from non-functioning spray heads is a health hazard and compliance violation. Spray heads are inexpensive and easy to replace.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>Trash tank</h3>
              <p className='text-slate-600 text-sm'>The pre-treatment chamber in an ATU where raw sewage first enters and solids settle before the partially clarified liquid flows into the aeration chamber. Functions similarly to a conventional septic tank. Requires pumping every 3 to 5 years to prevent sludge from overflowing into the aeration chamber and disrupting the treatment process.</p>
            </div>
            <div className='pb-4'>
              <h3 className='font-bold text-slate-900 mb-1'>TCEQ (Texas Commission on Environmental Quality)</h3>
              <p className='text-slate-600 text-sm'>The Texas state agency that regulates on-site sewage facilities including aerobic treatment units. Sets the requirements for quarterly inspections, licensed maintenance providers, and homeowner training for self-maintenance. The most comprehensive ATU regulatory framework in the United States.</p>
            </div>
          </div>
        </div>

        {/* External Resource */}
        <div className='mt-12'>
          <p className='text-slate-600 text-sm'>
            For additional information, see the <a href='https://www.epa.gov/septic' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline hover:text-amber-900'>EPA Septic Systems Overview</a>.
          </p>
        </div>

        {/* Related Guides */}
        <div className='mt-16'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Related Guides</h2>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>On theseptic.guide</h3>
          <div className='grid md:grid-cols-2 gap-6 mb-10'>
            <Link href='/comparisons/aerobic-vs-anaerobic-septic-systems' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Aerobic vs Anaerobic Septic Systems</h3>
              <p className='text-slate-600 text-xs'>A side-by-side comparison of aerobic and anaerobic septic systems including costs, maintenance, and which is right for your property.</p>
            </Link>
            <Link href='/maintenance/septic-system-maintenance-checklist' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic System Maintenance Checklist</h3>
              <p className='text-slate-600 text-xs'>The complete maintenance schedule for keeping your septic system healthy long-term.</p>
            </Link>
            <Link href='/problems/drainfield-failing' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Signs Your Drainfield Is Failing</h3>
              <p className='text-slate-600 text-xs'>Warning signs of drainfield failure from earliest to latest, what causes problems, and when you need a full replacement.</p>
            </Link>
            <Link href='/articles/what-can-cannot-flush-septic-system' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>What You Can and Cannot Flush with a Septic System</h3>
              <p className='text-slate-600 text-xs'>The complete list of what is safe to flush and what should never go into your septic system.</p>
            </Link>
            <Link href='/cost-guides/septic-system-repair-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic System Repair Cost</h3>
              <p className='text-slate-600 text-xs'>What individual repairs cost, from component replacement to full system rehabilitation.</p>
            </Link>
          </div>
        </div>

        {/* Lead Form */}
        <section className='py-12 bg-[#F5F0EB] rounded-2xl mt-12'>
          <div className='max-w-2xl mx-auto px-4'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#4A6741] text-center mb-3'>Get Expert Septic Help</h2>
            <p className='text-gray-600 text-center mb-8'>Connect with qualified septic professionals in your area. Free quotes, no obligation.</p>
            <BeehiivEmailCapture />

            <LeadForm />
          </div>
        </section>
      </article>

      {/* CTA */}
      <div className='bg-slate-900 rounded-2xl p-8 md:p-10 text-center'>
        <h2 className='text-xl md:text-2xl font-bold text-white mb-3'>Need Help With Your Aerobic System?</h2>
        <p className='text-slate-300 mb-6 max-w-xl mx-auto text-sm'>Connect with licensed ATU maintenance providers in your area for inspection, service contracts, or emergency repair.</p>
        <Link href='/get-quote' className='inline-block bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-lg transition-colors'>Get a Free Quote</Link>
      </div>
    </>
  )
}
