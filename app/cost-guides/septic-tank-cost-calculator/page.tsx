import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'
import SepticCostCalculator from './Calculator'
import CtaLink from './CtaLink'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Septic Tank Cost Calculator (2026): Free Instant Estimate | The Septic Guide',
  description: 'Free septic tank and septic system cost calculator. Get an instant estimated installed cost range for new installs, tank replacement, drainfield replacement, and full system replacement based on your home size, system type, soil conditions, and region.',
  alternates: { canonical: 'https://theseptic.guide/cost-guides/septic-tank-cost-calculator' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How accurate is this septic cost calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This calculator gives a planning-grade estimate anchored to published cost ranges on The Septic Guide. It is designed to help homeowners budget and sanity-check contractor quotes, not to replace a written quote. Real installation prices depend on your local permit fees, perc test results, exact tank size and material, drainfield design, and how many contractors are competing for work in your area. Use the calculator output as a target range, then collect three to five itemized written quotes to confirm.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a new septic system cost in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A new conventional gravity-fed septic system costs about $5,000 to $10,000 installed when soil and site conditions are suitable. A new mound system, aerobic treatment unit, or other engineered alternative costs about $12,000 to $25,000 installed because of the extra design work, imported sand, pumps, and electrical components required. Your soil percolation rate, water table depth, and lot size determine which type of system the health department will approve, so the system type, not your budget, drives the cost range.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to replace just the septic tank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tank-only replacement typically costs about $3,000 to $7,000 when the existing drainfield is healthy and only the tank itself has failed. Cost depends on tank size, material (concrete is the standard), excavation difficulty, and whether risers, baffles, and effluent filter need to be replaced at the same time. Have the contractor confirm the drainfield is functioning before paying for tank replacement, otherwise you can end up paying for the tank and then needing a full system replacement six months later.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does drainfield replacement cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drainfield replacement costs about $5,000 to $15,000 for a conventional system and $10,000 to $20,000 for a mound or engineered drainfield. Cost varies with the size of the drainfield, soil conditions at the replacement site, whether the original location can be reused or a new area must be designed, and local labor rates. Before replacing a drainfield, rule out cheaper causes of failure such as a clogged effluent filter, failed pump, or simply a tank that has not been pumped on schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a full septic system replacement cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full conventional system replacement (tank plus drainfield) typically costs about $8,000 to $20,000 or more. An engineered full replacement, such as a mound or aerobic system, can run $15,000 to $30,000 or higher. The replacement triggers a new permit, a new perc test, and sometimes a redesigned layout, which adds soft costs on top of materials and labor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is an engineered or mound system so much more expensive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mound, aerobic, and sand filter systems require an engineered design, imported sand and gravel, electrical service, pumps, alarms, and ongoing maintenance contracts. They are required when conventional gravity-fed systems are not allowed because of poor soil percolation, shallow bedrock, a high water table, or small lot size. Properties that fail the perc test usually need one of these alternatives, and you do not get to choose conventional just because it is cheaper.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this calculator include permit fees and the perc test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost ranges used here include typical permit fees and a routine soil evaluation as part of the installed price, which is how published ranges on The Septic Guide are reported. They do not include unusual costs such as variance applications, repeat perc tests on a failed site, well relocation, tree removal, long driveway access work, or major septic-to-sewer utility connection fees. Ask each contractor to itemize permitting and soil work on their quote so you can compare apples to apples.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get a written quote even after using a calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A calculator gives you a budget target so you know whether contractor quotes are reasonable. A real quote requires a site visit, soil evaluation, and a system design, and only a licensed installer can give you a binding price. Use this calculator to walk into the quoting process informed, then collect three to five itemized written quotes before signing anything.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Septic Tank Cost Calculator (2026): Free Instant Estimate',
  description: 'Free septic system cost calculator with anchored ranges for new installs, tank replacement, drainfield replacement, and full system replacement. Inputs cover home size, system type, soil difficulty, tank material, and region.',
  image: 'https://theseptic.guide/costguide.jpg',
  datePublished: '2026-04-29',
  dateModified: '2026-04-29',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theseptic.guide' },
    { '@type': 'ListItem', position: 2, name: 'Cost Guides', item: 'https://theseptic.guide/cost-guides' },
    { '@type': 'ListItem', position: 3, name: 'Septic Tank Cost Calculator', item: 'https://theseptic.guide/cost-guides/septic-tank-cost-calculator' },
  ],
}

export default function SepticCostCalculatorPage() {
  return (
    <div>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Article Hero */}
      <section className='relative bg-slate-900 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' />
        <div className='relative max-w-7xl mx-auto px-6 pt-20 pb-16'>
          <div className='flex items-center space-x-3 mb-6'>
            <div className='w-12 h-px bg-amber-700'></div>
            <span className='text-amber-500 font-bold tracking-[0.3em] text-sm uppercase'>Cost Guide</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-black text-white mb-5 leading-[1] tracking-tight'>
            Septic Tank Cost Calculator <span className='text-amber-500'>(2026)</span>
          </h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-8 font-medium leading-relaxed'>
            Free homeowner estimate. Pick your project, system, home size, soil difficulty, tank material, and region. Get an instant installed cost range anchored to published prices on The Septic Guide.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm'>SG</div>
            <div>
              <p className='text-white font-semibold'>The Septic Guide</p>
              <p className='text-slate-400 text-sm'>Updated Apr 2026 &middot; Free tool</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Cost Guides', href: '/cost-guides' },
        { label: 'Septic Tank Cost Calculator' },
      ]} />

      <article className='max-w-4xl mx-auto px-4 py-12'>
        {/* Intro */}
        <p className='text-base text-slate-700 leading-relaxed mb-5'>
          The septic tank cost calculator below gives you a planning-grade estimated installed cost range for the most common septic projects: a brand-new install, a tank-only replacement, a drainfield-only replacement, or a full system replacement. The math is anchored to the cost ranges published in our septic cost guides so the output stays believable and consistent with what real homeowners are paying in 2026.
        </p>
        <p className='text-base text-slate-700 leading-relaxed mb-10'>
          For deeper context on what drives these numbers, see our <Link href='/cost-guides/septic-system-installation-cost' className='text-amber-700 underline hover:text-amber-800'>septic system installation cost breakdown</Link>, our <Link href='/cost-guides/drainfield-replacement-cost' className='text-amber-700 underline hover:text-amber-800'>drainfield replacement cost guide</Link>, and our <Link href='/cost-guides/septic-system-repair-cost' className='text-amber-700 underline hover:text-amber-800'>septic system repair cost guide</Link>.
        </p>

        {/* Calculator */}
        <SepticCostCalculator />

        {/* Primary Quote CTA, directly below result */}
        <div className='mt-8 rounded-2xl bg-slate-900 p-6 md:p-8 text-center'>
          <h2 className='text-xl md:text-2xl font-bold text-white mb-2'>Now turn that estimate into a real quote</h2>
          <p className='text-slate-300 text-sm md:text-base mb-5 max-w-xl mx-auto'>See what local septic pros would charge for your project. Free, no-obligation quotes from licensed installers.</p>
          <CtaLink
            href='#get-quotes'
            scrollToId='get-quotes'
            className='inline-block rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 text-sm transition-colors'
            ctaText='Get a Free Quote'
            placement='post_result'
          >
            Get a Free Quote
          </CtaLink>
        </div>

        {/* Secondary CTA */}
        <div className='mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6'>
          <h2 className='text-lg font-bold text-slate-900 mb-2'>Use these numbers as your budget target</h2>
          <p className='text-sm text-slate-700 leading-relaxed mb-4'>
            A calculator estimate is the right number to walk into the quoting process with. To turn it into a real bid, get three to five itemized written quotes from licensed installers in your area, and ask each one to break out permitting, soil evaluation, excavation, tank, drainfield, and site restoration.
          </p>
          <div className='flex flex-col sm:flex-row gap-3'>
            <CtaLink
              href='/cost-guides/septic-system-installation-cost'
              className='inline-block rounded-lg bg-amber-600 px-5 py-3 text-sm font-bold text-white hover:bg-amber-700 transition-colors text-center'
              ctaText='Read the full installation cost guide'
              placement='post_result'
            >
              Read the full installation cost guide
            </CtaLink>
            <CtaLink
              href='/cost-guides'
              className='inline-block rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors text-center'
              ctaText='Browse all septic cost guides'
              placement='post_result'
            >
              Browse all septic cost guides
            </CtaLink>
          </div>
        </div>

        {/* How the calculator works */}
        <div className='mt-12'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>How It Works</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How the math is anchored</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>
            The calculator starts from one of five base ranges that match the published prices on The Septic Guide:
          </p>
          <ul className='space-y-2 text-sm text-slate-700 mb-6 list-disc pl-5'>
            <li><span className='font-semibold'>New conventional install:</span> about $5,000 to $10,000 installed.</li>
            <li><span className='font-semibold'>New mound, aerobic, or engineered install:</span> about $12,000 to $25,000 installed.</li>
            <li><span className='font-semibold'>Tank replacement only:</span> about $3,000 to $7,000.</li>
            <li><span className='font-semibold'>Drainfield replacement only:</span> about $5,000 to $15,000 for conventional, higher for mound or engineered.</li>
            <li><span className='font-semibold'>Full system replacement:</span> about $8,000 to $20,000+ for conventional, higher for engineered.</li>
          </ul>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>
            Those base ranges are then adjusted by four multipliers: home size (bedrooms drive required tank size), soil and site difficulty, tank material, and a regional cost factor. The output is rounded to clean planning numbers, not penny-precise quotes. Every multiplier maps to a real, observable cost driver discussed in our <Link href='/cost-guides/septic-system-installation-cost' className='text-amber-700 underline hover:text-amber-800'>installation cost guide</Link>.
          </p>
        </div>

        {/* What this calculator does not include */}
        <div className='mt-12'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Caveats</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>What this calculator does not include</h2>
          <ul className='space-y-2 text-sm text-slate-700 list-disc pl-5'>
            <li>Variance or repeat-perc-test fees on a failed site.</li>
            <li>Long driveway access work, tree removal, or rock excavation.</li>
            <li>Septic-to-sewer utility connection fees (see our <Link href='/cost-guides/septic-to-sewer-conversion-cost' className='text-amber-700 underline hover:text-amber-800'>septic to sewer conversion cost guide</Link>).</li>
            <li>Inspection-only work (see our <Link href='/cost-guides/septic-inspection-cost' className='text-amber-700 underline hover:text-amber-800'>septic inspection cost guide</Link>).</li>
            <li>Annual aerobic system maintenance contracts.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className='mt-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>FAQ</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Septic cost calculator FAQ</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How accurate is this septic cost calculator?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                The calculator gives a planning-grade estimate anchored to published cost ranges on The Septic Guide. It is designed to help homeowners budget and sanity-check contractor quotes, not to replace a written quote. Real installation prices depend on your local permit fees, perc test results, exact tank size and material, drainfield design, and how many contractors are competing for work in your area. Use the output as a target range, then collect three to five itemized written quotes to confirm.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What does a new septic system cost in 2026?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                A new conventional gravity-fed septic system costs about $5,000 to $10,000 installed when soil and site conditions are suitable. A new mound system, aerobic treatment unit, or other engineered alternative costs about $12,000 to $25,000 installed because of the extra design work, imported sand, pumps, and electrical components required. Your soil percolation rate, water table depth, and lot size determine which system the health department will approve.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How much does it cost to replace just the septic tank?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                A tank-only replacement typically costs about $3,000 to $7,000 when the existing drainfield is healthy and only the tank itself has failed. Cost depends on tank size, material, excavation difficulty, and whether risers, baffles, and effluent filter need to be replaced at the same time. Have the contractor confirm the drainfield is functioning before paying for tank replacement.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How much does drainfield replacement cost?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                Drainfield replacement costs about $5,000 to $15,000 for a conventional system and $10,000 to $20,000 for a mound or engineered drainfield. Cost varies with the size of the drainfield, soil conditions at the replacement site, whether the original location can be reused, and local labor rates. Before replacing a drainfield, rule out cheaper causes of failure such as a clogged effluent filter, failed pump, or simply a tank that has not been pumped on schedule.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What does a full septic system replacement cost?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                A full conventional system replacement (tank plus drainfield) typically costs about $8,000 to $20,000 or more. An engineered full replacement, such as a mound or aerobic system, can run $15,000 to $30,000 or higher. The replacement triggers a new permit, a new perc test, and sometimes a redesigned layout, which adds soft costs on top of materials and labor.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Why is an engineered or mound system so much more expensive?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                Mound, aerobic, and sand filter systems require an engineered design, imported sand and gravel, electrical service, pumps, alarms, and ongoing maintenance contracts. They are required when conventional gravity-fed systems are not allowed because of poor soil percolation, shallow bedrock, a high water table, or small lot size. Properties that fail the perc test usually need one of these alternatives.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Does this calculator include permit fees and the perc test?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                The cost ranges used here include typical permit fees and a routine soil evaluation as part of the installed price, which is how published ranges on The Septic Guide are reported. They do not include unusual costs such as variance applications, repeat perc tests on a failed site, well relocation, tree removal, long driveway access work, or major septic-to-sewer utility connection fees.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Should I get a written quote even after using a calculator?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                Yes. A calculator gives you a budget target so you know whether contractor quotes are reasonable. A real quote requires a site visit, soil evaluation, and a system design, and only a licensed installer can give you a binding price. Use this calculator to walk into the quoting process informed, then collect three to five itemized written quotes before signing anything.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter (site standard order: Beehiiv first) */}
        <BeehiivEmailCapture />

        {/* Lead form section (site standard pattern) */}
        <section id='get-quotes' className='py-12 bg-[#F5F0EB] rounded-2xl mt-8 scroll-mt-24'>
          <div className='max-w-2xl mx-auto px-4'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#4A6741] text-center mb-3'>Get Free Septic Quotes</h2>
            <p className='text-gray-600 text-center mb-8'>Connect with qualified septic installers in your area. Free quotes, no obligation.</p>
            <LeadForm />
          </div>
        </section>

        {/* Related cost guides */}
        <div className='mt-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Related Cost Guides</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Link href='/cost-guides/septic-system-installation-cost' className='block rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow'>
              <p className='text-xs font-bold uppercase tracking-wider text-amber-700 mb-1'>Cost Guide</p>
              <h3 className='font-bold text-slate-900 leading-snug'>Septic System Installation Cost</h3>
              <p className='text-xs text-slate-500 mt-2'>Complete price breakdown by system type.</p>
            </Link>
            <Link href='/cost-guides/drainfield-replacement-cost' className='block rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow'>
              <p className='text-xs font-bold uppercase tracking-wider text-amber-700 mb-1'>Cost Guide</p>
              <h3 className='font-bold text-slate-900 leading-snug'>Drainfield Replacement Cost</h3>
              <p className='text-xs text-slate-500 mt-2'>Conventional, mound, and engineered drainfield pricing.</p>
            </Link>
            <Link href='/cost-guides/septic-system-repair-cost' className='block rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow'>
              <p className='text-xs font-bold uppercase tracking-wider text-amber-700 mb-1'>Cost Guide</p>
              <h3 className='font-bold text-slate-900 leading-snug'>Septic System Repair Cost</h3>
              <p className='text-xs text-slate-500 mt-2'>Every common repair priced out from $50 to $15,000.</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
