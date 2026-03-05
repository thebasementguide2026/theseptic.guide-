import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Septic Tank Backing Up Into House: Causes, What to Do & How to Fix It | The Septic Guide',
  description: 'Sewage backing up into your home? Learn the immediate steps to take, how to diagnose the cause, the 7 most common reasons for septic backups, and how to fix and prevent them.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What causes a septic tank to back up?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common cause is a tank that is overdue for pumping. Other causes include clogged inlet pipes from grease or tree roots, blocked inlet baffles, clogged effluent filters, drainfield failure, heavy rain saturating the soil, and flushing non-degradable items.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is sewage backing up dangerous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sewage contains bacteria including E. coli and Salmonella, viruses, parasites, and other pathogens that can cause serious illness through skin contact, ingestion, or inhalation of airborne particles. Wear protective gear during any contact with sewage and sanitize all affected surfaces thoroughly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to fix a septic backup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the cause. A simple pump-out costs $300 to $600 plus $150 to $300 for emergency service. Clearing a clogged inlet pipe runs $100 to $500. Replacing an effluent filter costs $50 to $200. Drainfield repair or replacement is $5,000 to $15,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can heavy rain cause a septic backup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Heavy or prolonged rain can saturate the soil around the drainfield, preventing it from absorbing effluent. This is usually temporary. Once the soil dries out and the tank is pumped, the system typically returns to normal function. Do not pump the tank during active flooding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will pumping the tank fix the backup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the backup was caused by a full tank, yes. But if the backup was caused by a clogged pipe, broken baffle, root intrusion, or drainfield failure, pumping alone will not solve the underlying issue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use Drano or drain cleaner for a septic backup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Never. Chemical drain cleaners contain harsh acids or alkalis that kill the bacteria your septic system depends on. A single dose can sterilize the tank for days, allowing raw sewage to pass through untreated. Use a plunger or a mechanical drain snake instead.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Septic Tank Backing Up Into House: Causes, What to Do, and How to Fix It',
  description: 'Sewage backing up into your home? Learn the immediate steps to take, how to diagnose the cause, and how to fix and prevent septic backups.',
  image: 'https://theseptic.guide/1.jpg',
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

export default function SepticTankBackingUp() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/1.jpg'
          alt='Septic tank backing up into house causing sewage backup'
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
            Septic Tank Backing Up<br />
            <span className='text-amber-500'>Into Your House</span>
          </h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Causes, what to do immediately, and how to fix it &mdash; plus how to prevent it from ever happening again.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm'>SG</div>
            <div>
              <p className='text-white font-semibold'>The Septic Guide</p>
              <p className='text-slate-400 text-sm'>Updated Mar 2026 &middot; 16 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* Emergency Steps */}
        <div className='bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-12'>
          <h2 className='text-xl font-bold text-red-800 mb-4'>If Sewage Is Backing Up Right Now:</h2>
          <div className='space-y-3'>
            <div className='flex items-start gap-3'>
              <span className='text-red-700 font-bold text-sm mt-0.5'>1</span>
              <p className='text-slate-700 text-sm'><strong>Stop using all water.</strong> No flushing, no sinks, no showers, no laundry, no dishwasher. Every gallon you send down the drain makes the problem worse.</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='text-red-700 font-bold text-sm mt-0.5'>2</span>
              <p className='text-slate-700 text-sm'><strong>Do not touch the sewage with bare hands.</strong> Sewage contains bacteria, viruses, and parasites. Wear rubber gloves, waterproof boots, and a mask. Keep children and pets away.</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='text-red-700 font-bold text-sm mt-0.5'>3</span>
              <p className='text-slate-700 text-sm'><strong>Call a licensed septic professional.</strong> Describe which drains are backing up, whether you see or smell sewage in the yard, and when the problem started. Expect an emergency surcharge of $150 to $300 after hours.</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='text-red-700 font-bold text-sm mt-0.5'>4</span>
              <p className='text-slate-700 text-sm'><strong>Do not pour chemical drain cleaner down the drain.</strong> It won&apos;t fix a septic backup and will kill the bacteria your system needs. For more on what to avoid, see our <Link href='/articles/what-can-cannot-flush-septic-system' className='text-amber-700 underline hover:text-amber-800'>flushing guide</Link>.</p>
            </div>
          </div>
        </div>

        {/* Diagnostic Section */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Diagnosis</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How to Tell If It&apos;s a Septic Problem or a Plumbing Problem</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>This is the most important diagnostic step. Not every backup is a septic issue. Misdiagnosing this costs you money because you&apos;ll pay for an emergency pump-out you didn&apos;t need.</p>
          <div className='grid md:grid-cols-2 gap-4 mb-6'>
            <div className='bg-blue-50 border border-blue-200 rounded-lg p-5'>
              <h3 className='font-bold text-blue-900 mb-3 text-sm'>It&apos;s Probably a Plumbing Clog If:</h3>
              <ul className='space-y-2 text-slate-700 text-xs'>
                <li className='flex items-start gap-2'><span className='text-blue-600 mt-0.5'>&#8226;</span>Only one fixture is backing up (one toilet, one sink, or one shower)</li>
                <li className='flex items-start gap-2'><span className='text-blue-600 mt-0.5'>&#8226;</span>Other fixtures in the house drain normally</li>
                <li className='flex items-start gap-2'><span className='text-blue-600 mt-0.5'>&#8226;</span>The problem started suddenly after heavy use of a single fixture</li>
              </ul>
              <p className='text-slate-600 text-xs mt-3'>A plumber with a snake can usually clear this for $100 to $300.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-lg p-5'>
              <h3 className='font-bold text-red-900 mb-3 text-sm'>It&apos;s Probably a Septic Problem If:</h3>
              <ul className='space-y-2 text-slate-700 text-xs'>
                <li className='flex items-start gap-2'><span className='text-red-600 mt-0.5'>&#8226;</span>Multiple drains throughout the house are slow or backing up simultaneously</li>
                <li className='flex items-start gap-2'><span className='text-red-600 mt-0.5'>&#8226;</span>You hear gurgling sounds from multiple fixtures when water runs</li>
                <li className='flex items-start gap-2'><span className='text-red-600 mt-0.5'>&#8226;</span>There&apos;s a sewage smell indoors or in the yard near the tank or drainfield</li>
                <li className='flex items-start gap-2'><span className='text-red-600 mt-0.5'>&#8226;</span>The lowest drains in the house (basement or ground floor) are affected first</li>
              </ul>
            </div>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg mb-6'>
            <p className='text-slate-700 text-sm'><strong>The lowest drain first detail matters.</strong> Sewage follows gravity. When your septic system can&apos;t accept more water, the backflow enters through the lowest point in your plumbing first. If your basement floor drain or ground-floor bathtub is the first place you see water, it&apos;s almost certainly a septic issue.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5'>
            <p className='text-slate-700 text-sm'><strong>Check the tank water level.</strong> If you can safely access your septic tank&apos;s inspection port: if the tank is filled to the top (at or above the inlet pipe), the problem is downstream &mdash; a clogged outlet, failed drainfield, or saturated soil. If the water level looks normal, the problem is between the house and the tank &mdash; a clogged inlet pipe or blocked inlet baffle. According to the <a href='https://doh.wa.gov/community-and-environment/wastewater-management/septic-system/signs-failure' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline hover:text-amber-800'>Washington State Department of Health</a>, a blocked inlet baffle produces symptoms very similar to a clogged inlet pipe.</p>
          </div>
        </div>

        {/* Seven Common Causes */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Causes</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Seven Most Common Causes of Septic Backups</h2>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>1. The Tank Is Full and Overdue for Pumping</h3>
              <p className='text-slate-700 text-sm mb-2'>This is the most common cause. When sludge and scum accumulate to the point where they occupy most of the tank&apos;s volume, there&apos;s no room for incoming wastewater to settle. Solids block the outlet baffle, effluent can&apos;t exit to the drainfield, and water backs up into the house.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: Have the tank pumped immediately. Then get on a regular pumping schedule. See our <Link href='/articles/how-often-pump-septic-tank' className='text-amber-700 underline hover:text-amber-800'>pumping frequency guide</Link> for specific intervals. For costs, see our <Link href='/articles/septic-tank-pumping-cost' className='text-amber-700 underline hover:text-amber-800'>pumping cost guide</Link>.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>2. Clogged Inlet Pipe (House to Tank)</h3>
              <p className='text-slate-700 text-sm mb-2'>The sewer line from your house to the septic tank can become clogged with grease buildup, non-flushable items, or tree roots. When this pipe is blocked, wastewater can&apos;t reach the tank and backs up into the house.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: A plumber or septic professional can snake or hydro-jet the line to clear the clog. If tree roots are the cause, the line may need to be repaired or replaced. Root intrusion is a recurring problem that often requires removing the offending tree or installing a root barrier.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>3. Blocked Inlet Baffle</h3>
              <p className='text-slate-700 text-sm mb-2'>The inlet baffle is the T-shaped fitting where the sewer line enters the tank. It directs incoming wastewater downward to prevent disturbing the scum layer. Over time, debris &mdash; especially non-flushable items &mdash; can accumulate around this fitting and block it.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: A septic professional can access the inlet baffle through the tank&apos;s inspection port and clear the obstruction. This is typically a low-cost repair. Prevent future blockages by only flushing human waste and toilet paper.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>4. Clogged Effluent Filter</h3>
              <p className='text-slate-700 text-sm mb-2'>Many modern septic tanks have an effluent filter at the outlet pipe. This screen catches suspended solids before they reach the drainfield. When the filter gets clogged, effluent can&apos;t exit the tank, the tank fills to the inlet level, and wastewater backs up into the house.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: The filter needs to be pulled out and cleaned or replaced. This is routine maintenance that should happen during every pumping visit. The filter itself costs $50 to $200 to replace. Cleaning it costs nothing during a routine pump-out.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>5. Drainfield Failure or Saturation</h3>
              <p className='text-slate-700 text-sm mb-2'>When the drainfield can no longer absorb effluent, the entire system backs up. This can happen because the drainfield has failed permanently from years of receiving solids, or temporarily because heavy rain has saturated the soil.</p>
              <p className='text-slate-700 text-sm mb-2'><strong>For temporary saturation:</strong> Stop using water, let the drainfield dry out over several days, and pump the tank to give the system breathing room.</p>
              <p className='text-amber-700 font-semibold text-sm'>For permanent failure: A failed drainfield must be replaced ($5,000 to $15,000). Signs include standing water over the drainfield in dry weather, sewage surfacing in the yard, and a persistent inability to absorb effluent even after pumping.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>6. Heavy Rain or Flooding</h3>
              <p className='text-slate-700 text-sm mb-2'>A sudden influx of groundwater or surface water can overwhelm a septic system. If the soil around the drainfield becomes saturated, it can&apos;t absorb effluent, and water backs up through the system into the house.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: Wait for the water to recede and the soil to dry. Pump the tank if necessary. Do not pump during active flooding &mdash; an empty tank in saturated soil can actually float out of the ground. Long-term, ensure gutters, downspouts, sump pump discharge, and surface water are directed away from the tank and drainfield.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>7. Tree Root Intrusion</h3>
              <p className='text-slate-700 text-sm mb-2'>Tree roots seek out moisture and can infiltrate septic pipes, tanks, and drainfield lines through tiny cracks or joints. Once inside, they grow and create blockages that restrict or completely stop wastewater flow.</p>
              <p className='text-amber-700 font-semibold text-sm'>The fix: A camera inspection can confirm root intrusion. Roots can be cut out mechanically, but they&apos;ll grow back. The permanent solution is to repair or replace the affected pipe and remove or redirect the tree. No trees should be planted within 30 feet of any septic system component.</p>
            </div>
          </div>
        </div>

        {/* Cleanup Section */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Cleanup</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Safe Cleanup After a Sewage Backup</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Sewage that has entered your home is a biohazard. Handle cleanup carefully.</p>
          <div className='space-y-3'>
            <div className='flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg'>
              <span className='text-amber-700 font-bold text-sm mt-0.5'>1</span>
              <p className='text-slate-700 text-sm'>Open windows and doors to ventilate affected areas. Do not use fans, as they can spread airborne contaminants.</p>
            </div>
            <div className='flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg'>
              <span className='text-amber-700 font-bold text-sm mt-0.5'>2</span>
              <p className='text-slate-700 text-sm'>Remove and discard any porous materials (carpet, carpet padding, upholstered furniture, mattresses) that have been saturated with sewage. These cannot be adequately sanitized.</p>
            </div>
            <div className='flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg'>
              <span className='text-amber-700 font-bold text-sm mt-0.5'>3</span>
              <p className='text-slate-700 text-sm'>Hard surfaces (tile, concrete, vinyl) can be cleaned with a solution of one part bleach to ten parts water. Let the solution sit for at least 10 minutes before wiping.</p>
            </div>
            <div className='flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg'>
              <span className='text-amber-700 font-bold text-sm mt-0.5'>4</span>
              <p className='text-slate-700 text-sm'>Wash all clothing that contacted sewage in hot water with detergent and a cup of bleach. Disinfect any tools or equipment used during cleanup.</p>
            </div>
          </div>
          <div className='bg-slate-900 rounded-lg p-5 mt-6'>
            <p className='text-white font-semibold mb-2 text-sm'>Professional Cleanup</p>
            <p className='text-slate-300 text-xs'>For large-scale backups, consider hiring a professional biohazard cleanup service ($2,000 to $10,000 depending on contamination extent). Check your homeowners insurance for sewage backup coverage. A water backup endorsement (typically $40 to $100 per year) can cover cleanup and damage from sewer and septic backups.</p>
          </div>
        </div>

        {/* Prevention Section */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Prevention</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Preventing Future Backups</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Every cause listed above is preventable with proper maintenance.</p>
          <div className='grid md:grid-cols-2 gap-3'>
            <div className='flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg'>
              <span className='text-green-700 font-bold text-sm mt-0.5'>&#10003;</span>
              <p className='text-slate-700 text-sm'><Link href='/articles/how-often-pump-septic-tank' className='text-amber-700 underline hover:text-amber-800'>Pump your tank on schedule</Link> based on household size and tank capacity.</p>
            </div>
            <div className='flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg'>
              <span className='text-green-700 font-bold text-sm mt-0.5'>&#10003;</span>
              <p className='text-slate-700 text-sm'>Have the effluent filter cleaned during every pumping visit.</p>
            </div>
            <div className='flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg'>
              <span className='text-green-700 font-bold text-sm mt-0.5'>&#10003;</span>
              <p className='text-slate-700 text-sm'>Only flush human waste and toilet paper. Follow our <Link href='/articles/what-can-cannot-flush-septic-system' className='text-amber-700 underline hover:text-amber-800'>complete flushing guide</Link>.</p>
            </div>
            <div className='flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg'>
              <span className='text-green-700 font-bold text-sm mt-0.5'>&#10003;</span>
              <p className='text-slate-700 text-sm'>Fix leaky fixtures that add unnecessary water volume to your system.</p>
            </div>
            <div className='flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg'>
              <span className='text-green-700 font-bold text-sm mt-0.5'>&#10003;</span>
              <p className='text-slate-700 text-sm'>Divert roof runoff, sump pump discharge, and surface water away from the tank and drainfield.</p>
            </div>
            <div className='flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg'>
              <span className='text-green-700 font-bold text-sm mt-0.5'>&#10003;</span>
              <p className='text-slate-700 text-sm'>Keep trees at least 30 feet from all septic components.</p>
            </div>
            <div className='flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg'>
              <span className='text-green-700 font-bold text-sm mt-0.5'>&#10003;</span>
              <p className='text-slate-700 text-sm'>Install septic tank risers so your tank is always easily accessible for inspection and pumping.</p>
            </div>
            <div className='flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg'>
              <span className='text-green-700 font-bold text-sm mt-0.5'>&#10003;</span>
              <p className='text-slate-700 text-sm'>Consider installing a septic alarm that alerts you when the tank&apos;s water level reaches a critical point.</p>
            </div>
          </div>
        </div>

        {/* Cost Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Costs</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Repair Cost by Cause</h2>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-semibold'>Cause</th>
                  <th className='p-2 text-right font-semibold'>Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Tank pumping (routine)</td><td className='p-2 text-right text-slate-700'>$300 &ndash; $600</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Emergency pump-out surcharge</td><td className='p-2 text-right text-slate-700'>+$150 &ndash; $300</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Clogged inlet pipe (snake/hydro-jet)</td><td className='p-2 text-right text-slate-700'>$100 &ndash; $500</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Effluent filter replacement</td><td className='p-2 text-right text-slate-700'>$50 &ndash; $200</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Drainfield replacement</td><td className='p-2 text-right text-red-700 font-semibold'>$5,000 &ndash; $15,000</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Professional biohazard cleanup</td><td className='p-2 text-right text-red-700 font-semibold'>$2,000 &ndash; $10,000</td></tr>
              </tbody>
            </table>
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
              <dt className='font-bold text-slate-900 text-sm'>Blackwater</dt>
              <dd className='text-slate-600 text-xs'>Sewage-contaminated water that has backed up from the septic system. Blackwater contains pathogens and must be treated as a biohazard during cleanup.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Inlet Baffle</dt>
              <dd className='text-slate-600 text-xs'>A T-shaped fitting where the sewer line enters the septic tank. It directs wastewater downward to prevent disturbing the scum layer. A blocked inlet baffle causes backups into the house.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Outlet Baffle</dt>
              <dd className='text-slate-600 text-xs'>A T-shaped fitting at the tank&apos;s exit pipe. It prevents scum and sludge from leaving the tank and entering the drainfield.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Effluent Filter</dt>
              <dd className='text-slate-600 text-xs'>A screen installed at the outlet baffle that catches suspended solids before they reach the drainfield. A clogged effluent filter blocks effluent flow and triggers a backup.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Drainfield (Leach Field)</dt>
              <dd className='text-slate-600 text-xs'>The underground network of pipes where effluent is distributed into the soil for final treatment. Drainfield failure or saturation is one of the most serious causes of septic backups.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Hydro-Jetting</dt>
              <dd className='text-slate-600 text-xs'>A pipe cleaning method that uses high-pressure water to clear clogs, grease buildup, and root intrusions from sewer lines and septic pipes.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Root Intrusion</dt>
              <dd className='text-slate-600 text-xs'>When tree or shrub roots grow into septic pipes, tanks, or drainfield lines through cracks or joints, creating blockages that restrict wastewater flow.</dd>
            </div>
            <div className='border-b border-slate-100 pb-3'>
              <dt className='font-bold text-slate-900 text-sm'>Water Backup Endorsement</dt>
              <dd className='text-slate-600 text-xs'>An optional addition to a homeowners insurance policy that covers damage caused by sewer or septic backups. Most standard policies do not cover this without the endorsement.</dd>
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
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What causes a septic tank to back up?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>The most common cause is a tank that&apos;s overdue for pumping. Other causes include clogged inlet pipes (often from grease or tree roots), blocked inlet baffles, clogged effluent filters, drainfield failure, heavy rain saturating the soil, and flushing non-degradable items.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Is sewage backing up dangerous?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Yes. Sewage contains bacteria including E. coli and Salmonella, viruses, parasites, and other pathogens that can cause serious illness. Wear protective gear during any contact and sanitize all affected surfaces thoroughly.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How much does it cost to fix a septic backup?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>It depends on the cause. A pump-out costs $300 to $600 plus $150 to $300 for emergency service. Clearing a clogged pipe runs $100 to $500. Effluent filter replacement costs $50 to $200. Drainfield replacement is $5,000 to $15,000. See our <Link href='/articles/septic-tank-pumping-cost' className='text-amber-700 underline hover:text-amber-800'>pumping cost guide</Link> for details.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Can heavy rain cause a septic backup?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Yes. Heavy or prolonged rain can saturate the soil around the drainfield. This is usually temporary. Once the soil dries and the tank is pumped, the system typically returns to normal. Do not pump during active flooding.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Will pumping the tank fix the backup?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>If the backup was caused by a full tank, yes. But if it was caused by a clogged pipe, broken baffle, root intrusion, or drainfield failure, pumping alone won&apos;t solve the underlying issue.</div>
            </details>
            <details className='border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Should I use Drano or drain cleaner for a septic backup?</summary>
              <div className='px-4 pb-4 text-slate-600 text-sm'>Never. Chemical drain cleaners kill the bacteria your septic system depends on. A single dose can sterilize the tank for days. Use a plunger or mechanical drain snake instead. For a system-wide backup, call a professional.</div>
            </details>
          </div>
        </div>

        {/* Related Guides */}
        <div className='mb-16'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <Link href='/articles/how-often-pump-septic-tank' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>How Often to Pump Your Septic Tank</h3>
              <p className='text-slate-600 text-xs'>EPA-based pumping schedule by tank size and household size.</p>
            </Link>
            <Link href='/articles/what-can-cannot-flush-septic-system' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>What You Can and Cannot Flush</h3>
              <p className='text-slate-600 text-xs'>The complete list of what&apos;s safe, what&apos;s harmful, and why it matters.</p>
            </Link>
            <Link href='/articles/septic-tank-pumping-cost' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Tank Pumping Cost 2026</h3>
              <p className='text-slate-600 text-xs'>Real pricing by tank size, region, and hidden fees.</p>
            </Link>
            <Link href='/articles/complete-septic-guide' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Complete Septic System Guide</h3>
              <p className='text-slate-600 text-xs'>How your system works, types, maintenance, and warning signs.</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className='bg-slate-900 rounded-2xl p-8 md:p-10 text-center'>
          <h2 className='text-xl md:text-2xl font-bold text-white mb-3'>Need Emergency Septic Service?</h2>
          <p className='text-slate-300 mb-6 max-w-xl mx-auto text-sm'>Connect with licensed septic professionals in your area. Get fast, reliable service when you need it most.</p>
          <Link href='/get-quote' className='inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-sm'>Get Free Quotes</Link>
        </div>
      </article>
    </>
  )
}
