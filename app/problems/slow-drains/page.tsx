import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Slow Drains with a Septic System: How to Tell If It\u2019s a Clog, a Full Tank, or a Failing System | The Septic Guide',
  description: 'Slow drains in a home with a septic system mean one of three things: a localized pipe clog ($0 to $300 fix), a full septic tank that needs pumping ($300 to $600 fix), or a drainfield or system-level problem ($1,000 to $15,000 fix). Learn the step-by-step diagnostic process.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are slow drains always a septic problem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The majority of slow drain calls in septic homes turn out to be localized pipe clogs that have nothing to do with the septic system. Use the one-fixture test: if only one fixture is slow, it is a plumbing issue. If all fixtures are slow, the septic system is likely involved.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use Drano or Liquid-Plumr with a septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Chemical drain cleaners contain caustic chemicals that kill the beneficial bacteria in your septic tank. These bacteria are essential for breaking down waste. A single application can disrupt your system\u2019s biology for weeks. Use a plunger, a manual drain snake, or call a plumber instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'My drains are slow after guests visited. What happened?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A sudden increase in water use (multiple showers, extra laundry, frequent toilet flushes) can temporarily overload a septic system, especially if the tank is already half full of sludge. The system usually recovers within 24 to 48 hours as the excess water processes through. Reduce water use for a day and monitor. If the problem persists, the tank likely needs pumping.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my septic tank is full?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most reliable method is a professional inspection during pumping. The pumper measures sludge and scum levels and compares them to the tank\u2019s total capacity. Between inspections, whole-house slow drains, gurgling pipes, and sewage odor near the tank are the primary warning signs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are my drains slow even though I just had the tank pumped?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If drains remain slow after pumping, the problem is not the tank. Check the effluent filter \u2014 it may not have been cleaned during pumping. Check for a main sewer line clog between the house and the tank. If those are clear, the drainfield is the likely cause.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do septic tank treatments help with slow drains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not directly. Septic treatments support the bacterial ecosystem in the tank, which helps with ongoing waste digestion. They do not unclog pipes, clear a full tank, or fix a saturated drainfield. If your drains are actively slow, you need to diagnose and fix the specific cause.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a garbage disposal cause slow drains with a septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Garbage disposals send food solids into the septic tank that the system was not designed to handle. This increases sludge accumulation by 30% to 50%, fills the tank faster, and can clog the effluent filter. If you have a septic system and a garbage disposal, expect to pump more frequently.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I call a professional instead of trying to fix it myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call a professional if: multiple fixtures are slow and pumping did not resolve it, you see standing water or smell sewage near the drainfield, drains are completely stopped (not just slow), or slow drains have been gradually worsening over months. These patterns suggest a systemic issue that DIY methods cannot address.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Slow Drains with a Septic System: How to Tell If It\u2019s a Clog, a Full Tank, or a Failing System',
  description: 'Slow drains in a home with a septic system mean one of three things: a localized pipe clog, a full septic tank, or a drainfield problem. Learn the step-by-step diagnostic process.',
  image: 'https://theseptic.guide/slowdrainseptic.jpg',
  datePublished: '2026-03-09',
  dateModified: '2026-03-09',
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

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Slow Drain Causes and Fix Costs for Septic Systems',
  description: 'Comparison of the five causes of slow drains in septic homes, including diagnostic indicators, fix methods, and cost ranges.',
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Cause', description: 'The root cause of the slow drain' },
    { '@type': 'PropertyValue', name: 'Fix Cost Range', unitText: 'USD', description: 'Estimated cost to fix the cause' },
    { '@type': 'PropertyValue', name: 'DIY or Professional', description: 'Whether the fix requires a professional' },
  ],
  distribution: {
    '@type': 'DataDownload',
    encodingFormat: 'application/json',
    contentUrl: 'https://theseptic.guide/problems/slow-drains',
  },
  creator: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    url: 'https://theseptic.guide',
  },
}

export default function SlowDrains() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />

              <Breadcrumbs items={[{ label: 'Problems', href: '/problems' }, { label: 'Slow Drains' }]} />
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/slowdrainseptic.jpg'
          alt='Slow drains with a septic system - diagnostic guide'
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
            Slow Drains with a Septic System<br />
            <span className='text-amber-500'>Clog, Full Tank, or Failing System?</span>
          </h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Slow drains in a septic home mean one of three things: a localized pipe clog, a full tank that needs pumping, or a drainfield problem. This guide gives you a step-by-step diagnostic process that starts with the simplest, cheapest possibilities first.
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

        {/* Intro */}
        <div className='mb-12'>
                      <p className='text-slate-700 leading-relaxed text-sm mb-4'>Slow drains in a home with a septic system are a plumbing condition in which one or more fixtures drain more slowly than normal due to a restriction somewhere between the fixture and the point where wastewater is fully processed, ranging from a simple localized pipe clog to a full septic tank to a drainfield that can no longer absorb effluent. Unlike a municipal sewer home where slow drains almost always indicate a pipe clog, a septic home has three distinct failure points that produce similar symptoms but require completely different fixes at costs ranging from zero dollars to 15,000 or more. The most important diagnostic step is determining whether the slowness affects a single fixture, a group of fixtures on one level, or every fixture in the house simultaneously, because each pattern points to a different location and cause. The majority of slow drain cases in septic homes are resolved by pumping the tank or clearing a localized clog, and only a small percentage turn out to be drainfield or system-level failures.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Slow drains in a home with a septic system mean one of three things: a localized pipe clog ($0 to $300 fix), a full septic tank that needs pumping ($300 to $600 fix), or a drainfield or system-level problem ($1,000 to $15,000 fix). The critical skill is telling them apart before you spend money on the wrong solution.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>A plumber who snakes a drain when the real problem is a saturated drainfield wastes your time and money. A homeowner who panics about system failure when the issue is a hair clog in the bathroom sink wastes worry. This guide gives you a step-by-step diagnostic process that starts with the simplest, cheapest possibilities and works toward the more serious causes only if the simple fixes do not resolve the problem.</p>
        </div>

        {/* Diagnostic Flowchart */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Diagnosis</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>The Diagnostic Flowchart</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Start at the top. Each question narrows down the cause.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Question</th><th className='p-2 text-left font-semibold'>If Yes</th><th className='p-2 text-left font-semibold'>If No</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Is only ONE fixture slow?</td><td className='p-2'>Localized clog in that fixture&apos;s drain line. Fix it yourself or call a plumber.</td><td className='p-2'>Continue to next question.</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Are MULTIPLE fixtures slow, but only on one level?</td><td className='p-2'>Partial clog in a branch drain line serving that level. Plumber can snake it.</td><td className='p-2'>Continue to next question.</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Are ALL fixtures in the house slow?</td><td className='p-2'>Problem is downstream &mdash; full tank, clogged effluent filter, or drainfield issue.</td><td className='p-2'>If drains are totally stopped, see <Link href='/problems/tank-backing-up' className='text-amber-700 underline'>tank backing up</Link>.</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>When was the tank last pumped? (&gt;3 years ago?)</td><td className='p-2'>Pump the tank first. This solves the problem in most cases.</td><td className='p-2'>If pumped recently, continue.</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>After pumping, did the slow drains resolve?</td><td className='p-2'>Full tank was the cause. Resume normal pumping schedule.</td><td className='p-2'>Continue to next question.</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Standing water, soggy soil, or sewage odor near drainfield?</td><td className='p-2'>Drainfield problem. Needs professional inspection.</td><td className='p-2'>Continue.</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Has it been raining heavily?</td><td className='p-2'>Drainfield is temporarily saturated. Wait for it to dry. See <Link href='/problems/septic-overflow-after-rain' className='text-amber-700 underline'>overflow after rain</Link>.</td><td className='p-2'>Continue.</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Do you hear gurgling from multiple drains?</td><td className='p-2'>Venting issue or main line obstruction. Plumber should inspect.</td><td className='p-2'>Call a septic professional for full system evaluation.</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg'>
            <p className='text-slate-700 text-sm'>This flowchart eliminates the most common and cheapest causes first. Most slow drain problems in septic homes are resolved at steps 1, 2, or 4 &mdash; localized clog or full tank. Only a minority are true drainfield or system failures.</p>
          </div>
        </div>

        {/* Cause 1: Localized Pipe Clog */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Cause 1</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Localized Pipe Clog (Single Fixture)</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>If only one sink, shower, tub, or toilet is draining slowly while every other fixture in the house works fine, the problem is in that fixture&apos;s drain pipe. This is a plumbing issue, not a septic issue.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>Common Clog Culprits by Fixture</h3>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Fixture</th><th className='p-2 text-left font-semibold'>Most Common Clog Material</th><th className='p-2 text-left font-semibold'>DIY Fix</th><th className='p-2 text-left font-semibold'>When to Call a Plumber</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Bathroom sink</td><td className='p-2'>Hair and soap scum in the P-trap or pop-up stopper</td><td className='p-2'>Remove stopper, clean hair, flush with hot water</td><td className='p-2'>If clog returns repeatedly or is deeper than the P-trap</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Kitchen sink</td><td className='p-2'>Grease, food particles, soap residue</td><td className='p-2'>Pour boiling water, use a drain snake (not chemical cleaners)</td><td className='p-2'>If snake cannot clear it or grease has hardened in the line</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Shower/tub</td><td className='p-2'>Hair wrapped around the drain crossbar</td><td className='p-2'>Remove drain cover, pull hair with needle-nose pliers or drain snake</td><td className='p-2'>If clog is beyond the trap or recurs monthly</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-slate-900'>Toilet</td><td className='p-2'>Excess toilet paper, &ldquo;flushable&rdquo; wipes, foreign objects</td><td className='p-2'>Plunger (cup or flange style)</td><td className='p-2'>If plunging does not clear it or toilet gurgles after flushing</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2 text-slate-900'>Washing machine</td><td className='p-2'>Lint, fabric softener buildup in the standpipe</td><td className='p-2'>Clean the lint trap, flush the standpipe with hot water</td><td className='p-2'>If water backs out of the standpipe during drain cycles</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6'>
            <p className='text-slate-700 text-sm'><strong>What NOT to use:</strong> Never use chemical drain cleaners (Drano, Liquid-Plumr, etc.) in a home with a septic system. These products contain sodium hydroxide or sulfuric acid that kill the bacteria in your septic tank. A $5 bottle of drain cleaner can disrupt the biological process that your entire system depends on. Use a manual snake, a plunger, or call a plumber instead. For a complete list of what harms your system, see our <Link href='/articles/what-can-cannot-flush-septic-system' className='text-amber-700 underline hover:text-amber-800'>flushing guide</Link>.</p>
          </div>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>Cost to Fix a Localized Clog</h3>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Method</th><th className='p-2 text-center font-semibold'>Cost</th><th className='p-2 text-left font-semibold'>Effectiveness</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>DIY (plunger, manual snake, clean P-trap)</td><td className='p-2 text-center'>$0 &ndash; $30</td><td className='p-2'>Solves 70% to 80% of single-fixture clogs</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Plumber snake/auger</td><td className='p-2 text-center'>$100 &ndash; $300</td><td className='p-2'>Solves deeper clogs that DIY cannot reach</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Plumber hydro-jetting</td><td className='p-2 text-center'>$300 &ndash; $600</td><td className='p-2'>Clears grease buildup and root intrusion in longer pipe runs</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Cause 2: Full Septic Tank */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Cause 2</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Full Septic Tank</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>If multiple fixtures throughout the house are draining slowly, the most common cause is a septic tank that needs pumping. This is the diagnosis in the majority of whole-house slow drain cases and is the first thing to check before assuming anything more expensive.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>How a Full Tank Causes Slow Drains</h3>
          <p className='text-slate-700 text-sm mb-2'>Your septic tank is designed to hold wastewater while solids settle as sludge and grease floats as scum. The liquid layer in the middle (effluent) exits through the outlet pipe to the drainfield. Over time, sludge and scum accumulate. When they take up too much of the tank&apos;s volume:</p>
          <div className='space-y-2 mb-6'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'><p className='text-slate-700 text-sm'><strong>1.</strong> The effluent layer has less room, so the tank&apos;s effective capacity drops</p></div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'><p className='text-slate-700 text-sm'><strong>2.</strong> Solids can reach the level of the outlet pipe or effluent filter, partially blocking flow</p></div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'><p className='text-slate-700 text-sm'><strong>3.</strong> Wastewater entering the tank from the house has nowhere to go quickly, creating a bottleneck</p></div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'><p className='text-slate-700 text-sm'><strong>4.</strong> Drains throughout the house slow down as the system backs up from the tank</p></div>
          </div>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>How to Confirm This Is the Cause</h3>
          <p className='text-slate-700 text-sm mb-4'>If you have a septic tank riser with an accessible lid, open it and check the water level. In a properly functioning tank, the water level should be at or just below the outlet pipe (typically 8 to 12 inches from the top of the tank). If the water level is above the outlet pipe, the tank is backing up, either because it is full of solids or because something downstream is restricting flow.</p>
          <p className='text-slate-700 text-sm mb-4'>If you do not have a riser, check when the tank was last pumped. If it has been 3 or more years, schedule a pumping ($300 to $600). The pumper will measure sludge and scum levels and tell you whether the tank was overdue.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>The Effluent Filter Factor</h3>
          <p className='text-slate-700 text-sm mb-4'>Many septic tanks have an effluent filter installed on the outlet pipe. This filter catches solids before they reach the drainfield. Over time, the filter clogs with captured material. A clogged effluent filter restricts outflow from the tank and causes the same symptoms as a full tank &mdash; whole-house slow drains.</p>
          <p className='text-amber-700 font-semibold text-sm'>A clogged effluent filter is one of the most overlooked causes of slow drains in septic homes &mdash; and one of the cheapest to fix ($0 if you clean it yourself, $50 to $200 if a professional does it during a service call).</p>
        </div>

        {/* Cause 3: Branch Line or Main Sewer Line Clog */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Cause 3</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Branch Line or Main Sewer Line Clog</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>If multiple fixtures are slow but only on one floor or one section of the house, the clog may be in a branch drain line or in the main sewer line itself between the house and the septic tank.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>Signs of a Main Line Problem</h3>
          <div className='space-y-2 mb-6'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'><p className='text-slate-700 text-sm'>Multiple fixtures on the lowest level of the house are affected first (gravity)</p></div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'><p className='text-slate-700 text-sm'>Flushing a toilet causes water to back up in a nearby shower or tub</p></div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'><p className='text-slate-700 text-sm'>Floor drains in the basement are slow or backing up</p></div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'><p className='text-slate-700 text-sm'>Gurgling sounds from multiple drains when water is running elsewhere</p></div>
          </div>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>Common Main Line Clog Causes</h3>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Cause</th><th className='p-2 text-left font-semibold'>How It Happens</th><th className='p-2 text-left font-semibold'>Fix</th><th className='p-2 text-right font-semibold'>Cost</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Tree root intrusion</td><td className='p-2'>Roots grow into pipe joints seeking moisture</td><td className='p-2'>Professional root cutting or hydro-jetting</td><td className='p-2 text-right'>$200 &ndash; $600</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Pipe belly or sag</td><td className='p-2'>Section of pipe settles below grade, creating a low spot</td><td className='p-2'>Excavate and replace the affected section</td><td className='p-2 text-right'>$500 &ndash; $2,000</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Grease accumulation</td><td className='p-2'>Years of cooking grease coating the pipe interior</td><td className='p-2'>Hydro-jetting to scour the pipe</td><td className='p-2 text-right'>$300 &ndash; $600</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Crushed or collapsed pipe</td><td className='p-2'>Vehicle traffic, heavy equipment, or soil movement</td><td className='p-2'>Excavate and replace</td><td className='p-2 text-right'>$1,000 &ndash; $4,000</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Non-flushable items</td><td className='p-2'>Wipes, feminine products, or other items lodged in pipe</td><td className='p-2'>Snake or hydro-jet</td><td className='p-2 text-right'>$150 &ndash; $400</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm'>A plumber with a sewer camera ($200 to $400 for the inspection) can identify the exact location and nature of the clog without any digging. This is almost always worth the cost because it prevents guesswork and unnecessary excavation.</p>
        </div>

        {/* Cause 4: Drainfield Problem */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Cause 4</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Drainfield Problem</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>If the tank has been pumped, the effluent filter is clean, and the main line is clear, the problem is downstream in the drainfield. This is the most expensive diagnosis but also the least common for slow drains that developed gradually.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>Signs That the Drainfield Is the Problem</h3>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Sign</th><th className='p-2 text-left font-semibold'>What It Means</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Standing water or soggy soil over the drainfield</td><td className='p-2'>Soil cannot absorb effluent &mdash; drainfield is saturated or failed</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Unusually green or lush grass over the drainfield</td><td className='p-2'>Effluent is surfacing and fertilizing the grass</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Sewage odor in the yard</td><td className='p-2'>Untreated or partially treated effluent is reaching the surface</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Tank fills back up rapidly after pumping</td><td className='p-2'>Effluent cannot exit because the drainfield is not accepting it</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Slow drains worsen during or after rain</td><td className='p-2'>Saturated soil reduces drainfield absorption. See <Link href='/problems/septic-overflow-after-rain' className='text-amber-700 underline'>overflow after rain</Link>.</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Slow drains progressively worse over months or years</td><td className='p-2'>Biomat buildup is gradually clogging the drainfield soil</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>Drainfield Fix Options and Costs</h3>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Fix</th><th className='p-2 text-left font-semibold'>When It Works</th><th className='p-2 text-right font-semibold'>Cost</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Wait for soil to dry</td><td className='p-2'>Temporary saturation from heavy rain</td><td className='p-2 text-right'>$0 (reduce water use and wait)</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Drainfield aeration/rejuvenation</td><td className='p-2'>Moderate biomat clogging, system is 10 to 20 years old</td><td className='p-2 text-right'>$1,000 &ndash; $5,000</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Repair distribution box or replace a section</td><td className='p-2'>D-box failure or single crushed line</td><td className='p-2 text-right'>$500 &ndash; $2,500</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 text-red-700 font-semibold'>Full drainfield replacement</td><td className='p-2'>Complete failure, excessive biomat, or end of life</td><td className='p-2 text-right text-red-700 font-semibold'>$5,000 &ndash; $15,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm'>A professional drainfield inspection ($200 to $500) is essential before committing to any drainfield repair. The inspection determines whether the problem is fixable with rejuvenation or requires a full replacement. See our <Link href='/problems/drainfield-failing' className='text-amber-700 underline hover:text-amber-800'>drainfield failure guide</Link> for details.</p>
        </div>

        {/* Cause 5: Plumbing Vent Blockage */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Cause 5</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Plumbing Vent Blockage</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>This is the cause that most homeowners and many professionals overlook entirely. Your home&apos;s plumbing vent stack &mdash; the pipe that runs from your drain lines up through the roof &mdash; allows air into the drain system. Without that air, drains cannot flow freely because a vacuum forms behind the water as it drains. The result is slow drains and gurgling sounds, which look and sound exactly like a septic problem but have nothing to do with the septic system.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>Signs of a Blocked Vent</h3>
          <div className='space-y-2 mb-6'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'><p className='text-slate-700 text-sm'>Gurgling sounds from drains when water runs in another fixture</p></div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'><p className='text-slate-700 text-sm'>Slow drains throughout the house but no sewage odor outside</p></div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'><p className='text-slate-700 text-sm'>A &ldquo;glug-glug&rdquo; sound when a toilet flushes</p></div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'><p className='text-slate-700 text-sm'>Sewer gas smell inside the house (gas escaping through drain traps because the vacuum pulls water out of the P-traps)</p></div>
          </div>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>Common Vent Blockages</h3>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Blockage</th><th className='p-2 text-left font-semibold'>How It Happens</th><th className='p-2 text-left font-semibold'>Fix</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Leaves, debris, or bird nest</td><td className='p-2'>Natural accumulation on the roof vent</td><td className='p-2'>Clear debris from the vent pipe opening on the roof</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Ice cap in cold climates</td><td className='p-2'>Moisture in vent gas freezes at the opening in winter</td><td className='p-2'>Pour warm water down the vent or install a cold-climate vent cap</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Animal nesting inside pipe</td><td className='p-2'>Birds, squirrels, or insects build nests inside the pipe</td><td className='p-2'>Clear the nest, install a vent screen to prevent recurrence</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Vent pipe detached or damaged</td><td className='p-2'>Physical damage, settling, or poor original installation</td><td className='p-2'>Reconnect or replace the vent pipe section (plumber)</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm'>Checking the vent is free if you can safely access your roof. Look down the vent pipe (2- to 4-inch pipe protruding through the roof). If you see an obstruction, remove it. If the opening is clear, run water in the house while someone listens at the vent opening. You should hear air flowing freely. If not, the obstruction is deeper and a plumber is needed.</p>
        </div>

        {/* The One-Fixture Test */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Quick Test</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The One-Fixture Test</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>This is the simplest diagnostic tool.</p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>If one fixture is slow</h3>
              <p className='text-slate-700 text-sm'>The problem is in that fixture&apos;s drain pipe. Fix it with a plunger, snake, or plumber. The septic system is not involved.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>If multiple fixtures are slow</h3>
              <p className='text-slate-700 text-sm'>The problem is downstream of where those drain lines converge. If all fixtures in the house are slow, the problem is in the main line, the septic tank, or the drainfield. Start with the cheapest diagnosis &mdash; check the tank and work downstream.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>If drains are slow but improve after reducing water use for a day</h3>
              <p className='text-slate-700 text-sm'>The system is hydraulically overloaded. Either the tank is full, the drainfield is saturated, or the household is using more water than the system can process. Pumping the tank and spreading water use throughout the day usually resolves this.</p>
            </div>
          </div>
        </div>

        {/* Prevention */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Prevention</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Prevention: Keep Drains Flowing</h2>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Prevention Step</th><th className='p-2 text-left font-semibold'>What It Does</th><th className='p-2 text-center font-semibold'>Cost</th><th className='p-2 text-left font-semibold'>Frequency</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Pump the tank on schedule</td><td className='p-2'>Removes accumulated solids before they restrict flow</td><td className='p-2 text-center'>$300 &ndash; $600</td><td className='p-2'>Every 3 to 5 years</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Clean the effluent filter</td><td className='p-2'>Prevents outlet clogging that causes backup</td><td className='p-2 text-center'>$0 (DIY) to $200 (pro)</td><td className='p-2'>Every 1 to 2 years</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Flush only septic-safe items</td><td className='p-2'>Prevents clogs from wipes, grease, and foreign objects</td><td className='p-2 text-center'>$0</td><td className='p-2'>Always</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Use drain screens on all sinks and showers</td><td className='p-2'>Catches hair and debris before it enters the pipes</td><td className='p-2 text-center'>$5 &ndash; $15 per screen</td><td className='p-2'>Replace annually</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Spread water use throughout the day</td><td className='p-2'>Prevents hydraulic overload of the tank and drainfield</td><td className='p-2 text-center'>$0</td><td className='p-2'>Always</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Avoid chemical drain cleaners</td><td className='p-2'>Protects the bacterial ecosystem in the tank</td><td className='p-2 text-center'>$0 (use a snake instead)</td><td className='p-2'>Always</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Annual septic inspection</td><td className='p-2'>Catches developing problems before they cause slow drains</td><td className='p-2 text-center'>$100 &ndash; $300</td><td className='p-2'>Annually</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Keep trees 30+ feet from drainfield and sewer lines</td><td className='p-2'>Prevents root intrusion into pipes</td><td className='p-2 text-center'>$0 (plan landscaping)</td><td className='p-2'>Ongoing</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>FAQ</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-3'>
            <details className='border border-slate-200 rounded-lg group'><summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Are slow drains always a septic problem?</summary><div className='px-4 pb-4 text-slate-600 text-sm'>No. The majority of slow drain calls in septic homes turn out to be localized pipe clogs that have nothing to do with the septic system. Use the one-fixture test: if only one fixture is slow, it is a plumbing issue. If all fixtures are slow, the septic system is likely involved.</div></details>
            <details className='border border-slate-200 rounded-lg group'><summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Can I use Drano or Liquid-Plumr with a septic system?</summary><div className='px-4 pb-4 text-slate-600 text-sm'>No. Chemical drain cleaners contain caustic chemicals that kill the beneficial bacteria in your septic tank. These bacteria are essential for breaking down waste. A single application can disrupt your system&apos;s biology for weeks. Use a plunger, a manual drain snake, or call a plumber instead.</div></details>
            <details className='border border-slate-200 rounded-lg group'><summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>My drains are slow after guests visited. What happened?</summary><div className='px-4 pb-4 text-slate-600 text-sm'>A sudden increase in water use (multiple showers, extra laundry, frequent toilet flushes) can temporarily overload a septic system, especially if the tank is already half full of sludge. The system usually recovers within 24 to 48 hours. Reduce water use for a day and monitor. If the problem persists, the tank likely needs pumping.</div></details>
            <details className='border border-slate-200 rounded-lg group'><summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How do I know if my septic tank is full?</summary><div className='px-4 pb-4 text-slate-600 text-sm'>The most reliable method is a professional inspection during pumping. The pumper measures sludge and scum levels and compares them to the tank&apos;s total capacity. Between inspections, whole-house slow drains, gurgling pipes, and sewage odor near the tank are the primary warning signs.</div></details>
            <details className='border border-slate-200 rounded-lg group'><summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Why are my drains slow even though I just had the tank pumped?</summary><div className='px-4 pb-4 text-slate-600 text-sm'>If drains remain slow after pumping, the problem is not the tank. Check the effluent filter &mdash; it may not have been cleaned during pumping. Check for a main sewer line clog between the house and the tank. If those are clear, the drainfield is the likely cause. Schedule a professional drainfield inspection.</div></details>
            <details className='border border-slate-200 rounded-lg group'><summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Do septic tank treatments help with slow drains?</summary><div className='px-4 pb-4 text-slate-600 text-sm'>Not directly. Septic treatments support the bacterial ecosystem in the tank, which helps with ongoing waste digestion. They do not unclog pipes, clear a full tank, or fix a saturated drainfield. If your drains are actively slow, you need to diagnose and fix the specific cause, not add an additive and hope for the best.</div></details>
            <details className='border border-slate-200 rounded-lg group'><summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Can a garbage disposal cause slow drains with a septic system?</summary><div className='px-4 pb-4 text-slate-600 text-sm'>Yes. Garbage disposals send food solids into the septic tank that the system was not designed to handle. This increases sludge accumulation by 30% to 50%, fills the tank faster, and can clog the effluent filter. If you have a septic system and a garbage disposal, expect to pump more frequently (every 2 to 3 years instead of 3 to 5) and clean the effluent filter annually.</div></details>
            <details className='border border-slate-200 rounded-lg group'><summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>When should I call a professional instead of trying to fix it myself?</summary><div className='px-4 pb-4 text-slate-600 text-sm'>Call a professional if: multiple fixtures are slow and pumping did not resolve it, you see standing water or smell sewage near the drainfield, drains are completely stopped (not just slow), or slow drains have been gradually worsening over months. These patterns suggest a systemic issue that DIY methods cannot address.</div></details>
          </div>
        </div>

        {/* Glossary */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Glossary</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Glossary</h2>
          <div className='grid md:grid-cols-2 gap-x-8 gap-y-3'>
            <div className='border-b border-slate-100 pb-3'><dt className='font-bold text-slate-900 text-sm'>Effluent Filter</dt><dd className='text-slate-600 text-xs'>A filter installed in the septic tank&apos;s outlet pipe that catches solids before they reach the drainfield. A clogged effluent filter is one of the most common and most overlooked causes of slow drains in septic homes.</dd></div>
            <div className='border-b border-slate-100 pb-3'><dt className='font-bold text-slate-900 text-sm'>Branch Drain Line</dt><dd className='text-slate-600 text-xs'>A horizontal pipe that connects multiple fixtures (such as a bathroom group) to the main sewer line. A clog in a branch line affects only the fixtures connected to that branch.</dd></div>
            <div className='border-b border-slate-100 pb-3'><dt className='font-bold text-slate-900 text-sm'>Main Sewer Line</dt><dd className='text-slate-600 text-xs'>The primary pipe that carries all wastewater from the house to the septic tank. Typically 4 inches in diameter, buried 2 to 4 feet deep, running from the house foundation to the tank inlet.</dd></div>
            <div className='border-b border-slate-100 pb-3'><dt className='font-bold text-slate-900 text-sm'>Vent Stack</dt><dd className='text-slate-600 text-xs'>A vertical pipe that extends from the drain system through the roof, allowing air into the system so water can flow freely. A blocked vent causes slow drains and gurgling throughout the house.</dd></div>
            <div className='border-b border-slate-100 pb-3'><dt className='font-bold text-slate-900 text-sm'>Biomat</dt><dd className='text-slate-600 text-xs'>A biological layer of organic material that forms in the drainfield soil over time. A healthy biomat assists with wastewater treatment. An excessive biomat clogs soil pores and reduces the drainfield&apos;s ability to absorb effluent.</dd></div>
            <div className='border-b border-slate-100 pb-3'><dt className='font-bold text-slate-900 text-sm'>Hydraulic Overload</dt><dd className='text-slate-600 text-xs'>A condition where more water enters the septic system than it can process and discharge in a given time period. Caused by high water use days, running toilets, or stormwater infiltration.</dd></div>
            <div className='border-b border-slate-100 pb-3'><dt className='font-bold text-slate-900 text-sm'>P-trap</dt><dd className='text-slate-600 text-xs'>The U-shaped section of pipe beneath every sink and shower. It holds water that blocks sewer gas from entering the home. Hair, soap, and debris commonly accumulate in the P-trap, causing localized slow drains.</dd></div>
            <div className='border-b border-slate-100 pb-3'><dt className='font-bold text-slate-900 text-sm'>Hydro-jetting</dt><dd className='text-slate-600 text-xs'>A professional drain cleaning method that uses high-pressure water (3,000 to 4,000 PSI) to scour pipe interiors, removing grease, roots, and buildup. More effective than mechanical snaking for severe or recurring clogs.</dd></div>
          </div>
        </div>

        {/* Related Guides */}
        <div className='mb-16'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <Link href='/problems/tank-backing-up' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Tank Backing Up?</h3>
              <p className='text-slate-600 text-xs'>Causes, emergency steps, and how to fix and prevent backups.</p>
            </Link>
            <Link href='/problems/drainfield-failing' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Signs Your Drainfield Is Failing</h3>
              <p className='text-slate-600 text-xs'>Warning signs, causes, and what to do when your drainfield is struggling.</p>
            </Link>
            <Link href='/problems/septic-smell-in-yard' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Smell in Your Yard</h3>
              <p className='text-slate-600 text-xs'>8 causes of outdoor septic odor and the specific fix for each one.</p>
            </Link>
            <Link href='/problems/septic-overflow-after-rain' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>Septic Overflow After Rain</h3>
              <p className='text-slate-600 text-xs'>Why it happens, emergency steps, and long-term fixes.</p>
            </Link>
            <Link href='/articles/how-often-pump-septic-tank' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>How Often to Pump Your Septic Tank</h3>
              <p className='text-slate-600 text-xs'>EPA-based pumping schedule by tank size and household size.</p>
            </Link>
            <Link href='/articles/what-can-cannot-flush-septic-system' className='block p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1 text-sm'>What You Can and Cannot Flush</h3>
              <p className='text-slate-600 text-xs'>The complete list of what&apos;s safe and what damages your system.</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className='bg-slate-900 rounded-2xl p-8 md:p-10 text-center'>
          <h2 className='text-xl md:text-2xl font-bold text-white mb-3'>Slow Drains Won&apos;t Fix Themselves</h2>
          <p className='text-slate-300 mb-6 max-w-xl mx-auto text-sm'>Connect with licensed septic professionals in your area who can diagnose the cause and fix it fast.</p>
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
