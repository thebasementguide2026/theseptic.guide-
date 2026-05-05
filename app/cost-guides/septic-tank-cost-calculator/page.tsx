import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'
import SepticCostCalculator from './Calculator'
import CtaLink from './CtaLink'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Septic Tank Cost Calculator (2026): Free Instant Estimate | The Septic Guide',
  description: 'Free septic tank cost calculator with instant 2026 estimates. Calculate new install, tank replacement, drainfield replacement, or full system costs based on home size, soil, system type, and region.',
  alternates: { canonical: 'https://theseptic.guide/cost-guides/septic-tank-cost-calculator' },
  openGraph: {
    title: 'Septic Tank Cost Calculator (2026): Free Instant Estimate',
    description: 'Free septic tank cost calculator with instant 2026 estimates. Calculate new install, tank replacement, drainfield replacement, or full system costs.',
    url: 'https://theseptic.guide/cost-guides/septic-tank-cost-calculator',
    siteName: 'The Septic Guide',
    type: 'article',
    images: [{ url: 'https://theseptic.guide/SepticTankCostCalculator.jpg', width: 1200, height: 630, alt: 'Septic tank cost calculator hero image showing residential septic system installation' }],
  },
}

const PAGE_URL = 'https://theseptic.guide/cost-guides/septic-tank-cost-calculator'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How accurate is this septic cost calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The calculator gives a planning-grade estimate anchored to published cost ranges on The Septic Guide. It is designed to help homeowners budget and sanity-check contractor quotes, not to replace a written quote. Real installation prices depend on your local permit fees, perc test results, exact tank size and material, drainfield design, and how many contractors are competing for work in your area. Calculator output is typically within 20 to 30 percent of actual contractor quotes for straightforward sites; sites with unusual soil, access, or design requirements can see wider variation. Use the output as a target range, then collect 3 to 5 itemized written quotes from licensed installers to confirm. Walking into the quoting process with a calculator estimate is one of the strongest negotiating positions you can have because contractors know you have done your research.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a new septic system cost in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A new conventional gravity-fed septic system costs about $5,000 to $10,000 installed when soil and site conditions are suitable. A new mound system, aerobic treatment unit, or other engineered alternative costs about $12,000 to $25,000 installed because of the extra design work, imported sand, pumps, and electrical components required. Your soil percolation rate, water table depth, and lot size determine which system the health department will approve. In high-cost markets (Northeast, West Coast, dense suburban areas), prices can run 20 to 40 percent above the national averages cited above. Always confirm with at least 3 written quotes from licensed installers in your specific area, and verify whether your jurisdiction allows conventional systems or requires engineered alternatives based on local soil conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to replace just the septic tank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tank-only replacement typically costs about $3,000 to $7,000 when the existing drainfield is healthy and only the tank itself has failed. Cost depends on tank size (driven by home bedroom count), tank material (concrete, plastic, or fiberglass), excavation difficulty, and whether risers, baffles, and effluent filter need to be replaced at the same time. Have the contractor confirm the drainfield is functioning before paying for tank replacement; replacing only the tank when the drainfield has also failed produces premature failure within 1 to 5 years, costing more in total than a coordinated full replacement. Concrete tanks ($800 to $1,500 for the tank itself) are the most common and longest-lasting option. Plastic tanks ($600 to $1,200) are lighter and easier to install in tight access situations. Fiberglass tanks ($1,200 to $2,000) handle high water tables better than concrete or plastic.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does drainfield replacement cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drainfield replacement costs about $5,000 to $15,000 for a conventional system and $10,000 to $20,000 for a mound or engineered drainfield. Cost varies with the size of the drainfield (driven by home bedroom count and soil percolation), soil conditions at the replacement site, whether the original location can be reused, and local labor rates. Before replacing a drainfield, rule out cheaper causes of failure such as a clogged effluent filter, failed pump, or simply a tank that has not been pumped on schedule. Drainfield replacement also requires a new permit, soil evaluation (perc test) on the replacement site, and design approval from your local health department, which adds 4 to 12 weeks to the project timeline beyond actual construction.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a full septic system replacement cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full conventional system replacement (tank plus drainfield) typically costs about $8,000 to $20,000 or more. An engineered full replacement, such as a mound or aerobic system, can run $15,000 to $30,000 or higher. The replacement triggers a new permit, a new perc test, and sometimes a redesigned layout, which adds soft costs on top of materials and labor. Expect a total project timeline of 2 to 4 months including permit review, design approval, perc test, scheduling, and actual construction. Many homeowners qualify for financing through their installer or through county or state low-interest loan programs. Insurance coverage for septic replacement varies significantly by policy; some homeowners policies cover sudden mechanical failure but exclude age-related wear.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is an engineered or mound system so much more expensive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mound, aerobic, and sand filter systems require an engineered design, imported sand and gravel, electrical service, pumps, alarms, and ongoing maintenance contracts. They are required when conventional gravity-fed systems are not allowed because of poor soil percolation, shallow bedrock, a high water table, or small lot size. Properties that fail the perc test usually need one of these alternatives. Engineered systems also have higher operating costs ($200 to $400 annually for aerobic system maintenance contracts versus zero ongoing costs for conventional systems) and shorter component lifespans (pumps and aerators typically need replacement every 5 to 10 years). The premium of $7,000 to $15,000 over conventional systems reflects both the upfront engineering and the lifetime cost of additional mechanical components. Before accepting an engineered system quote, confirm with your local health department whether a conventional system might still be approved with site modifications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this calculator include permit fees and the perc test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost ranges used here include typical permit fees and a routine soil evaluation as part of the installed price, which is how published ranges on The Septic Guide are reported. They do not include unusual costs such as variance applications, repeat perc tests on a failed site, well relocation, tree removal, long driveway access work, or major septic-to-sewer utility connection fees. Permit fees range from $100 in rural counties to over $2,500 in some metropolitan jurisdictions; the calculator assumes a typical mid-range fee. Perc tests cost $300 to $1,500 and are required for new installations and most full replacements; the calculator assumes a single successful test on the original site. If your initial perc test fails, expect $500 to $2,000 in additional costs for retesting, alternate site evaluation, or variance applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get a written quote even after using a calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A calculator gives you a budget target so you know whether contractor quotes are reasonable. A real quote requires a site visit, soil evaluation, and a system design, and only a licensed installer can give you a binding price. Use this calculator to walk into the quoting process informed, then collect 3 to 5 itemized written quotes before signing anything. Each quote should break out permit fees, soil evaluation, excavation, tank, drainfield, and site restoration as separate line items so you can compare like-to-like across contractors. The 3 to 5 quote range is essential because septic installer pricing varies by 30 to 60 percent across competing bids; relying on fewer quotes leaves money on the table. After collecting quotes, verify each contractor licensing, insurance, and recent local references before choosing.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Septic Tank Cost Calculator (2026): Free Instant Estimate | The Septic Guide',
  description: 'Free septic tank cost calculator with instant 2026 estimates. Calculate new install, tank replacement, drainfield replacement, or full system costs based on home size, soil, system type, and region.',
  image: 'https://theseptic.guide/SepticTankCostCalculator.jpg',
  datePublished: '2026-04-29',
  dateModified: '2026-04-29',
  author: {
    '@type': 'Organization',
    name: 'The Septic Guide Editorial Team',
    url: 'https://theseptic.guide',
  },
  publisher: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    url: 'https://theseptic.guide',
    parentOrganization: {
      '@type': 'Organization',
      name: 'The Home Guide Network',
    },
  },
  mainEntityOfPage: PAGE_URL,
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${PAGE_URL}#calculator`,
  name: 'Septic Tank Cost Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web Browser',
  description: 'Free interactive calculator that estimates septic project costs for new installs, tank replacement, drainfield replacement, and full system replacement. Inputs cover project type, system type, home size, soil and site difficulty, tank material, and regional cost factor.',
  url: PAGE_URL,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theseptic.guide' },
    { '@type': 'ListItem', position: 2, name: 'Cost Guides', item: 'https://theseptic.guide/cost-guides' },
    { '@type': 'ListItem', position: 3, name: 'Septic Tank Cost Calculator', item: PAGE_URL },
  ],
}

export default function SepticCostCalculatorPage() {
  return (
    <div>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Article Hero */}
      <section className='relative bg-slate-900 overflow-hidden'>
        <Image src='/SepticTankCostCalculator.jpg' alt='Septic tank cost calculator hero image showing residential septic system installation' fill className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100' priority />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30' />
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
              <p className='text-slate-400 text-sm'>Updated Apr 2026 &middot; 10 min read &middot; Free tool</p>
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

        {/* TL;DR callout */}
        <div className='mb-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6'>
          <div className='flex items-center space-x-2 mb-3'>
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-600 text-white font-bold text-sm'>i</span>
            <p className='text-xs font-bold uppercase tracking-[0.2em] text-amber-800'>TL;DR</p>
          </div>
          <p className='text-sm text-slate-800 leading-relaxed'>
            This free septic tank cost calculator gives homeowners an instant planning estimate for four common project types: new install, tank-only replacement, drainfield-only replacement, or full system replacement. The calculator factors in system type (conventional, aerobic, mound, sand filter), home size (number of bedrooms), soil and site difficulty, tank material, and regional cost factor to produce a realistic 2026 cost range. Results are anchored to published cost data on The Septic Guide so the output stays believable. New conventional installs typically run <span className='font-semibold'>$5,000 to $10,000</span>; engineered systems (mound, aerobic, sand filter) run <span className='font-semibold'>$12,000 to $25,000</span>; tank-only replacements run <span className='font-semibold'>$3,000 to $7,000</span>; drainfield-only replacements run <span className='font-semibold'>$5,000 to $15,000</span>; full system replacements run <span className='font-semibold'>$8,000 to $20,000 or more</span>. Use the estimate as your budget target before requesting written quotes from 3 to 5 licensed installers.
          </p>
        </div>

        {/* The 3-Quote Rule decision callout */}
        <div className='mb-10 rounded-2xl bg-slate-900 p-6 text-white'>
          <div className='flex items-center space-x-2 mb-3'>
            <span className='inline-block px-3 py-1 text-xs font-bold rounded-full bg-amber-500 text-slate-900'>DECISION RULE</span>
            <p className='text-xs font-bold uppercase tracking-[0.2em] text-amber-400'>The 3-Quote Rule</p>
          </div>
          <p className='text-sm text-slate-200 leading-relaxed'>
            A calculator estimate is your budget target. A binding installation price requires <span className='font-semibold text-white'>3 to 5 written quotes</span> from licensed septic installers in your area. Never commit to a septic project based on a calculator estimate alone, and never accept the first quote you receive. Septic installer pricing varies by 30 to 60 percent across competing bids on the same project because pricing depends on contractor backlog, soil expectations, equipment access, and local labor markets. The 3-Quote Rule protects you from overpaying (the most common septic outcome) and from underpaying for inadequate work (the second most common). Walk into the quoting process with a realistic budget range from this calculator, then collect 3 to 5 itemized written quotes covering permit fees, soil evaluation, excavation, tank, drainfield, and site restoration before signing anything.
          </p>
        </div>

        {/* Intro */}
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>Estimate Your Septic Project Cost</h2>
        <p className='text-base text-slate-700 leading-relaxed mb-5'>
          Use the calculator below to estimate planning-grade installation costs for the most common septic projects. The math is anchored to cost ranges published in our <Link href='/cost-guides/septic-system-installation-cost' className='text-amber-700 underline hover:text-amber-800'>septic system installation cost guide</Link>, <Link href='/cost-guides/drainfield-replacement-cost' className='text-amber-700 underline hover:text-amber-800'>drainfield replacement cost guide</Link>, and <Link href='/cost-guides/septic-system-repair-cost' className='text-amber-700 underline hover:text-amber-800'>septic system repair cost guide</Link> so the output stays believable and consistent with what real homeowners are paying in 2026.
        </p>
        <p className='text-base text-slate-700 leading-relaxed mb-10'>
          For deeper context on what drives these numbers, see our complete <Link href='/cost-guides/septic-system-installation-cost' className='text-amber-700 underline hover:text-amber-800'>septic system installation cost breakdown</Link>, <Link href='/cost-guides/drainfield-replacement-cost' className='text-amber-700 underline hover:text-amber-800'>drainfield replacement cost guide</Link>, and <Link href='/cost-guides/septic-system-repair-cost' className='text-amber-700 underline hover:text-amber-800'>septic system repair cost guide</Link>.
        </p>

        {/* Calculator (preserved exactly) */}
        <SepticCostCalculator />

        {/* Calculator inputs reference list */}
        <div className='mt-8 mb-4'>
          <p className='text-sm text-slate-700 leading-relaxed mb-3'>The calculator inputs include:</p>
          <ul className='space-y-2 text-sm text-slate-700 list-disc pl-5'>
            <li><span className='font-semibold'>Project type:</span> New install, tank replacement only, drainfield replacement only, full system replacement</li>
            <li><span className='font-semibold'>System type:</span> Conventional gravity-fed, conventional pressure distribution, aerobic treatment unit, <Link href='/guides/mound-septic-system' className='text-amber-700 underline hover:text-amber-800'>mound system</Link>, sand filter or engineered</li>
            <li><span className='font-semibold'>Home size (bedrooms):</span> 2 bedrooms (1,000 gal), 3 bedrooms (1,000-1,250 gal), 4 bedrooms (1,250-1,500 gal), 5+ bedrooms (1,500+ gal). See our <Link href='/guides/septic-tank-size-guide' className='text-amber-700 underline hover:text-amber-800'>septic tank size guide</Link> for sizing details.</li>
            <li><span className='font-semibold'>Soil and site difficulty:</span> Easy (good soil, flat lot, easy access), moderate (typical site), difficult (rocky, steep, high water table, tight access)</li>
            <li><span className='font-semibold'>Tank material:</span> Concrete (most common), plastic/polyethylene, fiberglass. See our <Link href='/comparisons/concrete-vs-plastic-vs-fiberglass' className='text-amber-700 underline hover:text-amber-800'>concrete vs plastic vs fiberglass comparison</Link> for details.</li>
            <li><span className='font-semibold'>Regional cost factor:</span> Low cost (rural South, parts of Midwest), average (national), high cost (Northeast, West Coast, dense suburban)</li>
          </ul>
        </div>

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
            A calculator estimate is the right number to walk into the quoting process with. To turn it into a real bid, get 3 to 5 itemized written quotes from licensed installers in your area, and ask each one to break out permitting, soil evaluation, excavation, tank, drainfield, and site restoration.
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

        {/* How the math is anchored */}
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
            <li><span className='font-semibold'>New conventional install:</span> about $5,000 to $10,000 installed</li>
            <li><span className='font-semibold'>New mound, aerobic, or engineered install:</span> about $12,000 to $25,000 installed</li>
            <li><span className='font-semibold'>Tank replacement only:</span> about $3,000 to $7,000</li>
            <li><span className='font-semibold'>Drainfield replacement only:</span> about $5,000 to $15,000 for conventional, higher for mound or engineered</li>
            <li><span className='font-semibold'>Full system replacement:</span> about $8,000 to $20,000+ for conventional, higher for engineered</li>
          </ul>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>
            Those base ranges are then adjusted by four multipliers: home size (bedrooms drive required tank size), soil and site difficulty, tank material, and a regional cost factor. The output is rounded to clean planning numbers, not penny-precise quotes. Every multiplier maps to a real, observable cost driver discussed in our <Link href='/cost-guides/septic-system-installation-cost' className='text-amber-700 underline hover:text-amber-800'>installation cost guide</Link>.
          </p>
        </div>

        {/* What your estimate tells you */}
        <div className='mt-12'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Read Your Estimate</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>What your estimate tells you about your project</h2>
          <p className='text-sm text-slate-700 leading-relaxed mb-6'>
            The calculator produces five distinct estimate ranges. Each range corresponds to a specific project type with its own implications for budgeting, timeline, and decision-making.
          </p>
          <div className='space-y-5'>
            <div className='border-l-4 border-amber-600 bg-white pl-5 py-3'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Estimate in the $3,000 to $7,000 range (tank-only replacement)</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                This range applies when the existing drainfield is healthy and only the tank itself has failed. Common causes include cracked concrete (older tanks), root intrusion, or baffle damage. Before paying for tank replacement, have the contractor verify the drainfield is still functioning. If the drainfield is also failing, you will pay for tank replacement now and drainfield replacement within 1 to 5 years, which costs more than a coordinated full replacement.
              </p>
            </div>
            <div className='border-l-4 border-amber-600 bg-white pl-5 py-3'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Estimate in the $5,000 to $10,000 range (new conventional install)</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                This range applies to new conventional gravity-fed installations on suitable soil. The lower end represents simple sites with good soil and easy access; the upper end represents larger homes (4+ bedrooms) or moderately difficult sites. New conventional installs are the most common septic project and typically take 2 to 4 days from excavation to backfill.
              </p>
            </div>
            <div className='border-l-4 border-amber-600 bg-white pl-5 py-3'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Estimate in the $5,000 to $15,000 range (drainfield-only replacement)</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                Drainfield replacement is the second-most-expensive septic project after full replacement. Cost varies primarily by drainfield size, soil conditions at the replacement site, and whether the original location can be reused. Before committing to drainfield replacement, rule out cheaper failure causes including a clogged effluent filter, failed pump, or a tank that has not been pumped on schedule. See our <Link href='/problems/drainfield-failing' className='text-amber-700 underline hover:text-amber-800'>drainfield failing problem page</Link> for diagnosis.
              </p>
            </div>
            <div className='border-l-4 border-amber-600 bg-white pl-5 py-3'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Estimate in the $8,000 to $20,000+ range (full system replacement)</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                Full system replacement is required when both the tank and drainfield have failed. This range covers conventional systems; engineered alternatives (mound, aerobic, sand filter) push costs to $15,000 to $30,000 or higher. Full replacement triggers a new permit, new perc test, and sometimes a redesigned layout. Expect 1 to 3 weeks for completion plus 1 to 2 months of permit review beforehand.
              </p>
            </div>
            <div className='border-l-4 border-amber-600 bg-white pl-5 py-3'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Estimate in the $12,000 to $25,000 range (engineered system install)</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                Mound, aerobic, and sand filter systems are required when conventional gravity-fed systems are not allowed by the local health department. Triggers include poor soil percolation, shallow bedrock, high water table, or small lot size. Engineered systems also require ongoing maintenance contracts (typically $200 to $400 annually for aerobic systems) plus electrical service for pumps and alarms. See our <Link href='/guides/mound-septic-system' className='text-amber-700 underline hover:text-amber-800'>mound septic system guide</Link> and <Link href='/comparisons/aerobic-vs-anaerobic-septic-systems' className='text-amber-700 underline hover:text-amber-800'>aerobic vs anaerobic comparison</Link> for system-specific details.
              </p>
            </div>
          </div>
        </div>

        {/* What this calculator does not include */}
        <div className='mt-12'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Caveats</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>What this calculator does not include</h2>
          <p className='text-sm text-slate-700 leading-relaxed mb-4'>
            The estimate is built from a national baseline cost per square foot, then adjusted by your inputs. It captures the work most homeowners actually pay for on a typical septic project, but it excludes:
          </p>
          <ul className='space-y-2 text-sm text-slate-700 list-disc pl-5 mb-4'>
            <li>Variance applications or repeat perc test fees on a failed site</li>
            <li>Long driveway access work, tree removal, or rock excavation</li>
            <li>Septic-to-sewer utility connection fees (see our <Link href='/cost-guides/septic-to-sewer-conversion-cost' className='text-amber-700 underline hover:text-amber-800'>septic to sewer conversion cost guide</Link>)</li>
            <li>Inspection-only work (see our <Link href='/cost-guides/septic-inspection-cost' className='text-amber-700 underline hover:text-amber-800'>septic inspection cost guide</Link>)</li>
            <li>Annual aerobic system maintenance contracts ($200 to $400 per year)</li>
            <li>Well relocation if the existing well is too close to the proposed drainfield</li>
            <li>Major septic-to-sewer utility connection fees in jurisdictions transitioning to municipal sewer</li>
          </ul>
          <p className='text-sm text-slate-700 leading-relaxed'>
            The <a href='https://www.epa.gov/septic' target='_blank' rel='noopener' className='text-amber-700 underline hover:text-amber-800'>EPA septic system guidance</a> is the authoritative reference for federal-level requirements. Local health departments enforce specific rules that vary by state and county and may add costs beyond what this calculator estimates.
          </p>
        </div>

        {/* Common mistakes */}
        <div className='mt-12'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Avoid These</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Common mistakes when using a septic cost calculator</h2>
          <div className='space-y-5'>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-1'>Treating the calculator estimate as a binding quote.</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>Calculator output is a planning estimate, not a contractor bid. The estimate gives you a budget range; written quotes give you a binding price for your specific site.</p>
            </div>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-1'>Skipping the perc test cost.</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>Most jurisdictions require a soil percolation test before approving a new install or full replacement. Perc tests cost $300 to $1,500 and are not included in calculator estimates. Failed perc tests can require alternative system designs costing $5,000 to $15,000 more than conventional installs.</p>
            </div>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-1'>Ignoring permit fees that vary widely by jurisdiction.</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>Permit fees range from $100 (rural counties) to $2,500 (some metropolitan areas). The calculator includes typical permit fees in the base ranges, but actual fees in your jurisdiction may differ significantly.</p>
            </div>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-1'>Forgetting site restoration costs.</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>New installations and replacements require excavating significant earth, which damages lawns, driveways, and landscaping. Site restoration adds $500 to $5,000 depending on what was disturbed. Always ask contractors whether their quotes include site restoration.</p>
            </div>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-1'>Assuming the cheapest quote is the right choice.</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>Septic projects span 30 to 50 years. A $2,000 cheaper installation by an unlicensed or inexperienced installer often results in $10,000 to $30,000 in premature failure costs. Always verify licensing, insurance, and references before choosing on price alone.</p>
            </div>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-1'>Not budgeting for unexpected complications.</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>Septic excavations regularly uncover unexpected soil conditions, buried debris, or utility lines. Reserve 10 to 20 percent of your budget for unexpected costs. Calculator estimates do not account for site-specific surprises.</p>
            </div>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-1'>Skipping the soil evaluation report.</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>Even when not required by the health department, an independent soil evaluation ($200 to $500) helps you understand whether your site favors a conventional system or requires engineered alternatives. Knowing this before requesting quotes prevents bait-and-switch scenarios.</p>
            </div>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-1'>Comparing quotes without itemized scopes of work.</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>Septic quotes vary because contractors include or exclude different items. Some include permit fees and soil evaluation; others bill them separately. Some include site restoration; others do not. Always ask for itemized written quotes that break out permitting, soil evaluation, excavation, tank, drainfield, and site restoration as separate line items.</p>
            </div>
          </div>
        </div>

        {/* When to get a professional assessment */}
        <div className='mt-12'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Next Step</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>When to get a professional assessment</h2>
          <p className='text-sm text-slate-700 leading-relaxed mb-5'>
            Use the calculator for budget planning. Get a professional assessment when you are ready to commit to a project or when you need to verify whether a cheaper repair will solve the problem.
          </p>
          <h3 className='text-base font-bold text-slate-900 mb-2'>Get an inspection ($300 to $700) when:</h3>
          <ul className='space-y-2 text-sm text-slate-700 list-disc pl-5 mb-5'>
            <li>You suspect tank or drainfield failure but are not certain</li>
            <li>You are buying a home and the seller has not provided recent inspection records (see our <Link href='/guides/buying-home-with-septic' className='text-amber-700 underline hover:text-amber-800'>buying a home with septic guide</Link>)</li>
            <li>You are selling a home and want to disclose system condition (see our <Link href='/guides/selling-home-with-septic-system' className='text-amber-700 underline hover:text-amber-800'>selling a home with septic guide</Link>)</li>
            <li>Your system is approaching end of typical lifespan (20 to 40 years for conventional systems)</li>
          </ul>
          <h3 className='text-base font-bold text-slate-900 mb-2'>Get 3 to 5 written quotes when:</h3>
          <ul className='space-y-2 text-sm text-slate-700 list-disc pl-5 mb-6'>
            <li>The calculator confirms you need a project in your budget range</li>
            <li>An inspection has confirmed system failure</li>
            <li>You are ready to schedule the project within the next 6 months</li>
          </ul>
          <p className='text-sm text-slate-700 leading-relaxed mb-3'>
            Insurance coverage for major septic work varies by policy: some homeowners policies cover sudden mechanical failure but exclude age-related wear (see our <Link href='/articles/does-insurance-cover-septic-repair-replacement' className='text-amber-700 underline hover:text-amber-800'>insurance coverage article</Link>). For homeowners facing a large unexpected septic bill, county and state low-interest loan programs often help (see our <Link href='/guides/septic-system-financial-assistance' className='text-amber-700 underline hover:text-amber-800'>septic system financial assistance guide</Link>).
          </p>

          {/* Lead-gen callout */}
          <div className='mt-6 rounded-2xl bg-slate-900 p-6 md:p-7'>
            <p className='text-base md:text-lg font-bold text-white mb-2'>Need a septic system professional?</p>
            <p className='text-sm text-slate-300 leading-relaxed mb-4'>
              Septic installation, replacement, and major repair require licensed installers familiar with your local health department requirements.
            </p>
            <CtaLink
              href='/get-quote'
              className='inline-block rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 text-sm transition-colors'
              ctaText='Get free quotes from licensed septic specialists'
              placement='professional_assessment'
            >
              Get free quotes from licensed septic specialists near you
            </CtaLink>
          </div>
        </div>

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
            <Link href='/cost-guides/septic-inspection-cost' className='block rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow'>
              <p className='text-xs font-bold uppercase tracking-wider text-amber-700 mb-1'>Cost Guide</p>
              <h3 className='font-bold text-slate-900 leading-snug'>Septic Inspection Cost</h3>
              <p className='text-xs text-slate-500 mt-2'>What inspections cost and what they cover.</p>
            </Link>
            <Link href='/cost-guides/septic-to-sewer-conversion-cost' className='block rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow'>
              <p className='text-xs font-bold uppercase tracking-wider text-amber-700 mb-1'>Cost Guide</p>
              <h3 className='font-bold text-slate-900 leading-snug'>Septic to Sewer Conversion Cost</h3>
              <p className='text-xs text-slate-500 mt-2'>What it costs to abandon septic and connect to sewer.</p>
            </Link>
            <Link href='/articles/septic-tank-pumping-cost' className='block rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow'>
              <p className='text-xs font-bold uppercase tracking-wider text-amber-700 mb-1'>Article</p>
              <h3 className='font-bold text-slate-900 leading-snug'>Septic Tank Pumping Cost</h3>
              <p className='text-xs text-slate-500 mt-2'>Routine pumping pricing and pumping schedule.</p>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className='mt-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>FAQ</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently asked questions</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How accurate is this septic cost calculator?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                The calculator gives a planning-grade estimate anchored to published cost ranges on The Septic Guide. It is designed to help homeowners budget and sanity-check contractor quotes, not to replace a written quote. Real installation prices depend on your local permit fees, perc test results, exact tank size and material, drainfield design, and how many contractors are competing for work in your area. Calculator output is typically within 20 to 30 percent of actual contractor quotes for straightforward sites; sites with unusual soil, access, or design requirements can see wider variation. Use the output as a target range, then collect 3 to 5 itemized written quotes from licensed installers to confirm. Walking into the quoting process with a calculator estimate is one of the strongest negotiating positions you can have because contractors know you have done your research.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What does a new septic system cost in 2026?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                A new conventional gravity-fed septic system costs about $5,000 to $10,000 installed when soil and site conditions are suitable. A new mound system, aerobic treatment unit, or other engineered alternative costs about $12,000 to $25,000 installed because of the extra design work, imported sand, pumps, and electrical components required. Your soil percolation rate, water table depth, and lot size determine which system the health department will approve. In high-cost markets (Northeast, West Coast, dense suburban areas), prices can run 20 to 40 percent above the national averages cited above. Always confirm with at least 3 written quotes from licensed installers in your specific area, and verify whether your jurisdiction allows conventional systems or requires engineered alternatives based on local soil conditions.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How much does it cost to replace just the septic tank?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                A tank-only replacement typically costs about $3,000 to $7,000 when the existing drainfield is healthy and only the tank itself has failed. Cost depends on tank size (driven by home bedroom count), tank material (concrete, plastic, or fiberglass), excavation difficulty, and whether risers, baffles, and effluent filter need to be replaced at the same time. Have the contractor confirm the drainfield is functioning before paying for tank replacement; replacing only the tank when the drainfield has also failed produces premature failure within 1 to 5 years, costing more in total than a coordinated full replacement. Concrete tanks ($800 to $1,500 for the tank itself) are the most common and longest-lasting option. Plastic tanks ($600 to $1,200) are lighter and easier to install in tight access situations. Fiberglass tanks ($1,200 to $2,000) handle high water tables better than concrete or plastic.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How much does drainfield replacement cost?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                Drainfield replacement costs about $5,000 to $15,000 for a conventional system and $10,000 to $20,000 for a mound or engineered drainfield. Cost varies with the size of the drainfield (driven by home bedroom count and soil percolation), soil conditions at the replacement site, whether the original location can be reused, and local labor rates. Before replacing a drainfield, rule out cheaper causes of failure such as a clogged effluent filter, failed pump, or simply a tank that has not been pumped on schedule. Drainfield replacement also requires a new permit, soil evaluation (perc test) on the replacement site, and design approval from your local health department, which adds 4 to 12 weeks to the project timeline beyond actual construction. See our <Link href='/problems/drainfield-failing' className='text-amber-700 underline hover:text-amber-800'>drainfield failing problem page</Link> for diagnosis before committing to replacement.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What does a full septic system replacement cost?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                A full conventional system replacement (tank plus drainfield) typically costs about $8,000 to $20,000 or more. An engineered full replacement, such as a mound or aerobic system, can run $15,000 to $30,000 or higher. The replacement triggers a new permit, a new perc test, and sometimes a redesigned layout, which adds soft costs on top of materials and labor. Expect a total project timeline of 2 to 4 months including permit review, design approval, perc test, scheduling, and actual construction. Many homeowners qualify for financing through their installer or through county or state low-interest loan programs (see our <Link href='/guides/septic-system-financial-assistance' className='text-amber-700 underline hover:text-amber-800'>septic system financial assistance guide</Link>). Insurance coverage for septic replacement varies significantly by policy; some homeowners policies cover sudden mechanical failure but exclude age-related wear (see our <Link href='/articles/does-insurance-cover-septic-repair-replacement' className='text-amber-700 underline hover:text-amber-800'>insurance coverage article</Link>).
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Why is an engineered or mound system so much more expensive?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                Mound, aerobic, and sand filter systems require an engineered design, imported sand and gravel, electrical service, pumps, alarms, and ongoing maintenance contracts. They are required when conventional gravity-fed systems are not allowed because of poor soil percolation, shallow bedrock, a high water table, or small lot size. Properties that fail the perc test usually need one of these alternatives. Engineered systems also have higher operating costs ($200 to $400 annually for aerobic system maintenance contracts versus zero ongoing costs for conventional systems) and shorter component lifespans (pumps and aerators typically need replacement every 5 to 10 years). The premium of $7,000 to $15,000 over conventional systems reflects both the upfront engineering and the lifetime cost of additional mechanical components. Before accepting an engineered system quote, confirm with your local health department whether a conventional system might still be approved with site modifications.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Does this calculator include permit fees and the perc test?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                The cost ranges used here include typical permit fees and a routine soil evaluation as part of the installed price, which is how published ranges on The Septic Guide are reported. They do not include unusual costs such as variance applications, repeat perc tests on a failed site, well relocation, tree removal, long driveway access work, or major septic-to-sewer utility connection fees. Permit fees range from $100 in rural counties to over $2,500 in some metropolitan jurisdictions; the calculator assumes a typical mid-range fee. Perc tests cost $300 to $1,500 and are required for new installations and most full replacements; the calculator assumes a single successful test on the original site. If your initial perc test fails, expect $500 to $2,000 in additional costs for retesting, alternate site evaluation, or variance applications.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Should I get a written quote even after using a calculator?</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                Yes. A calculator gives you a budget target so you know whether contractor quotes are reasonable. A real quote requires a site visit, soil evaluation, and a system design, and only a licensed installer can give you a binding price. Use this calculator to walk into the quoting process informed, then collect 3 to 5 itemized written quotes before signing anything. Each quote should break out permit fees, soil evaluation, excavation, tank, drainfield, and site restoration as separate line items so you can compare like-to-like across contractors. The 3 to 5 quote range is essential because septic installer pricing varies by 30 to 60 percent across competing bids; relying on fewer quotes leaves money on the table. After collecting quotes, verify each contractor licensing, insurance, and recent local references before choosing.
              </p>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className='mt-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Glossary</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Glossary</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Perc test (percolation test)</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                A perc test is a soil evaluation that measures how quickly water absorbs into the ground at a proposed septic site. The test involves digging test holes (typically 2 to 5 holes at depths of 18 to 36 inches), saturating the soil, and timing how fast the water level drops. Perc rates are reported in minutes per inch (MPI). Most health departments approve conventional gravity-fed systems for soils with perc rates between 5 and 60 MPI. Soils that perc faster than 5 MPI (sand, gravel) drain too quickly and may contaminate groundwater. Soils that perc slower than 60 MPI (clay, dense soil) drain too slowly and require engineered alternatives like mound or sand filter systems. Perc tests cost $300 to $1,500 and are required by most jurisdictions for new installations and full replacements. The test must be performed during specific seasons (typically when the water table is at its highest level) to be valid.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Drain tile</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                Drain tile is the perforated pipe (typically 4-inch corrugated polyethylene) that distributes effluent from the septic tank into the drainfield soil. Drain tile is laid in trenches filled with gravel, with perforations facing downward so effluent slowly seeps into the surrounding soil for biological treatment. Standard residential drain tile installations include 100 to 300 linear feet of pipe distributed across multiple trenches, with the total length determined by home bedroom count and soil perc rate. Drain tile is not the same as French drain (which manages groundwater) or perimeter drain (which manages foundation moisture). When drain tile fails, the typical solution is full drainfield replacement; localized drain tile repair is rarely effective because the surrounding soil has usually become saturated with biofilm that prevents proper effluent absorption.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Effluent filter</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                An effluent filter is a removable screen mounted in the outlet baffle of a septic tank that prevents larger solids from entering the drainfield. The filter typically has 1/16-inch to 1/8-inch openings and captures debris, lint, and partially decomposed waste before it reaches the drain tile. Effluent filters extend drainfield lifespan significantly (typically 30 to 50 percent longer life with a properly maintained filter) and are required by code in many jurisdictions. Filters require periodic cleaning, typically once or twice per year or each time the tank is pumped. A clogged effluent filter is a common cause of slow drains and toilet backups; check the filter as a first diagnostic step when these symptoms appear. Filter replacement costs $50 to $150 plus labor; a service call to clean a filter costs $100 to $250.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Gravity-fed vs pressure distribution</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                Gravity-fed septic systems use the natural slope of the property to move effluent from the tank to the drainfield without pumps. Pressure distribution systems use a pump and pressure manifold to evenly distribute effluent across the drainfield, providing more uniform absorption and longer drainfield life. Gravity-fed is the simplest, cheapest, and longest-lived design but requires suitable topography (drainfield must be lower than tank). Pressure distribution is required when the drainfield is uphill or at the same elevation as the tank, when the soil requires more even effluent distribution, or when site constraints prevent traditional drainfield design. Pressure distribution adds $1,500 to $4,000 to system cost (pump, control panel, alarm) and introduces ongoing maintenance requirements (pump replacement every 5 to 10 years).
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Mound septic system</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                A mound septic system is an engineered above-ground drainfield used when soil conditions prevent conventional installation. The mound is constructed by placing imported sand and gravel above the existing soil, then installing a pressure-distributed drainfield within the sand layer. Mound systems are required for sites with high water table, shallow bedrock, very poor soil percolation, or steep slopes. Cost ranges from $15,000 to $30,000 installed, significantly higher than conventional systems. Maintenance includes pump inspection annually and aerobic treatment unit servicing if combined with a mound design. See our <Link href='/guides/mound-septic-system' className='text-amber-700 underline hover:text-amber-800'>mound septic system guide</Link> for full operational details.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Aerobic treatment unit (ATU)</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                An aerobic treatment unit is an engineered septic alternative that uses mechanical aeration (electric blowers) to introduce oxygen into the treatment process, accelerating biological decomposition compared to traditional anaerobic septic tanks. ATUs produce cleaner effluent suitable for surface discharge or smaller drainfields. They are required when conventional systems are not approved due to soil conditions, when the site has stricter discharge requirements, or when homeowners prefer faster effluent treatment. ATUs cost $12,000 to $25,000 installed and require annual maintenance contracts ($200 to $400 per year) plus electrical service for the blower. See our <Link href='/comparisons/aerobic-vs-anaerobic-septic-systems' className='text-amber-700 underline hover:text-amber-800'>aerobic vs anaerobic comparison</Link> for full operational comparison.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Sand filter system</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                A sand filter septic system uses a layer of engineered sand (typically 24 to 36 inches deep) as a secondary treatment medium between the septic tank and the drainfield. Effluent flows from the tank into a distribution layer above the sand, percolates through the sand for biological filtration, and then enters the drainfield. Sand filters provide enhanced treatment compared to conventional systems and are required for sites with shallow soil, high water tables, or strict discharge requirements. They cost $15,000 to $25,000 installed and require periodic resanding every 10 to 20 years. Sand filter systems are more common in coastal regions and areas with environmental sensitivity than in conventional inland sites.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Regional cost factor</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                The regional cost factor accounts for significant variation in septic installation pricing across different US markets. Lower-cost markets (rural South, parts of the Midwest, low-cost-of-living regions) typically run 20 to 30 percent below national average pricing. Higher-cost markets (Northeast, West Coast, dense suburban areas, Hawaii, Alaska) typically run 20 to 40 percent above national average. Drivers of regional variation include labor costs, material transportation costs, permit and design fee differences, contractor density and competition, and regional climate factors that affect installation difficulty. The calculator regional cost factor input lets homeowners adjust the estimate to match their specific market. For most homeowners, asking 3 to 5 local installers for written quotes is the most accurate way to confirm regional pricing.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Site restoration</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                Site restoration is the process of returning a property to its original condition after septic excavation. This includes regrading disturbed earth, replacing topsoil, reseeding or resodding lawns, repairing damaged driveways or walkways, and restoring landscaping affected by excavation. Site restoration costs $500 to $5,000 depending on the size of the disturbed area and the complexity of restoration required (simple yard reseeding versus driveway repair versus landscape restoration). Some septic installer quotes include site restoration as part of the total project price; others bill it separately. Always confirm which costs are included before accepting any septic installation quote.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Septic system installation timeline</h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                A typical septic system installation takes 1 to 4 weeks of construction time after permits are approved. Conventional gravity-fed systems often complete in 2 to 4 days of actual construction; mound and engineered systems take 5 to 14 days. The full project timeline including permit review, soil evaluation, design approval, and weather delays typically runs 2 to 4 months. Permit review alone takes 4 to 12 weeks in most jurisdictions, with longer delays in jurisdictions with overwhelmed health departments. Plan the timeline carefully if your project is time-sensitive (selling a home, severe failure, etc.) and ask installers about their current backlog before committing.
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
      </article>
    </div>
  )
}
