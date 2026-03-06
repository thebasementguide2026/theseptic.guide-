import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Septic Tank Risers 2026: The Upgrade That Pays for Itself | The Septic Guide',
  description: 'A septic tank riser costs $100 to $400 and eliminates the $50 to $200 digging fee at every service visit. Compare the best riser kits, learn how to choose the right size, and whether to DIY or hire a pro.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does a septic tank riser cost?', acceptedAnswer: { '@type': 'Answer', text: 'A complete riser kit costs $100 to $300 for a standard 20-inch or 24-inch single-section kit. Professional installation adds $100 to $300 per access point. Most residential tanks have one or two access points, so total installed cost is $200 to $600 for the complete job.' } },
    { '@type': 'Question', name: 'Are septic tank risers worth it?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Risers eliminate $50 to $200 in digging fees at every service visit. With pumping every 3 to 5 years plus annual inspections, the riser pays for itself within two to three visits and saves money for the remaining life of the system.' } },
    { '@type': 'Question', name: 'Can I install a septic tank riser myself?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Riser installation is a manageable DIY project for homeowners comfortable with basic tools and digging. The process takes 2 to 4 hours per access point.' } },
    { '@type': 'Question', name: 'What size riser do I need?', acceptedAnswer: { '@type': 'Answer', text: 'Measure the inside diameter of your tank access opening. The three standard sizes are 16-inch, 20-inch, and 24-inch. The 20-inch size fits the majority of residential tanks.' } },
    { '@type': 'Question', name: 'Do I need a riser for every access point?', acceptedAnswer: { '@type': 'Answer', text: 'Ideally yes. Most residential tanks have two access points. The outlet side is the most important because that is where the effluent filter is located. At minimum, install a riser on the outlet access point.' } },
    { '@type': 'Question', name: 'Will a riser affect my lawn appearance?', acceptedAnswer: { '@type': 'Answer', text: 'Riser lids sit at or slightly above ground level. They are typically green or black and about 20 to 24 inches in diameter. Most homeowners find them unobtrusive.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Septic Tank Risers 2026: The Upgrade That Pays for Itself',
  description: 'A septic tank riser costs $100 to $400 and eliminates the $50 to $200 digging fee at every service visit.',
  image: 'https://theseptic.guide/riser.jpg',
  datePublished: '2026-03-06',
  dateModified: '2026-03-06',
  author: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
  publisher: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
}

export default function BestSepticTankRisers() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image src='/riser.jpg' alt='Septic tank riser installed at ground level on residential property' fill className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100' priority />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-amber-700'></div>
            <span className='text-amber-500 font-bold tracking-[0.3em] text-sm uppercase'>Review</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>Best Septic Tank Risers<br /><span className='text-amber-500'>2026</span></h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>A septic tank riser costs $100 to $400 for the kit and brings your tank&apos;s access lids from underground to ground level permanently. It eliminates the $50 to $200 digging fee charged at every pumping visit and pays for itself in two to three service calls.</p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm'>SG</div>
            <div><p className='text-white font-semibold'>The Septic Guide</p><p className='text-slate-400 text-sm'>Updated Mar 2026 &middot; 18 min read</p></div>
          </div>
        </div>
      </section>
      <article className='max-w-4xl mx-auto px-4 py-12'>
        <p className='text-base text-slate-700 leading-relaxed mb-6'>If your septic tank lids are buried, installing risers is the <strong>single highest-ROI upgrade</strong> you can make to your septic system. This guide covers how risers work, how to choose the right size, which kits are best, and whether to install them yourself or hire a professional.</p>
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Why It Matters</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Why Risers Matter</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Every time a septic professional services your tank, they need to access the lids. If those lids are buried 6 to 24 inches underground, someone has to dig them out. That&apos;s <strong>$50 to $200 added to every pumping, inspection, or repair visit</strong>.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Over the life of your system (20 to 30 years with pumping every 3 to 5 years), that&apos;s $300 to $1,500 in digging fees alone. A riser eliminates that cost permanently.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>It also means:</p>
          <ul className='space-y-2 mb-6 text-sm text-slate-700'>
            <li className='flex items-start gap-2'><span className='text-amber-700 font-bold'>&#8226;</span>You can visually check your tank&apos;s access point anytime</li>
            <li className='flex items-start gap-2'><span className='text-amber-700 font-bold'>&#8226;</span>Service calls are faster &mdash; the crew arrives and starts immediately instead of digging for 30 minutes</li>
            <li className='flex items-start gap-2'><span className='text-amber-700 font-bold'>&#8226;</span>Emergency access during a backup is immediate instead of delayed</li>
            <li className='flex items-start gap-2'><span className='text-amber-700 font-bold'>&#8226;</span>You always know exactly where your tank is located</li>
          </ul>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg'><p className='text-slate-700 font-medium text-sm'>Most tanks installed since the early 2000s come with risers from the factory. But millions of older tanks, especially concrete tanks installed before 2000, have buried lids with no risers. If you own one of those, this upgrade is for you.</p></div>
        </div>
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Sizing</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How to Choose the Right Riser</h2>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>Three measurements determine which riser kit you need.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>1. Diameter</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Risers come in three standard diameters: 16-inch, 20-inch, and 24-inch. The diameter must match your tank&apos;s existing access opening.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Diameter</th><th className='p-2 text-left font-semibold'>Common On</th><th className='p-2 text-left font-semibold'>Notes</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>16-inch</td><td className='p-2'>Older tanks, smaller access ports</td><td className='p-2'>Less common, limited product selection</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>20-inch</td><td className='p-2'>Most residential tanks</td><td className='p-2'>The most common size for retrofitting</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>24-inch</td><td className='p-2'>Newer tanks, larger access openings</td><td className='p-2'>Provides the most working room for service</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>If you&apos;re unsure of your opening size, measure the inside diameter of the hole in the top of your tank after exposing it. Or check your as-built drawing from the health department.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>2. Height</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Measure the distance from the top of your tank to ground level. Risers come in standard heights (6-inch and 12-inch) and can be stacked to reach the exact height you need.</p>
          <p className='text-slate-700 leading-relaxed mb-6 text-sm'>For example, if your tank lid is 18 inches below grade, you&apos;d use a 12-inch riser plus a 6-inch riser stacked together. Most kits include one riser section. Additional sections are sold separately.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>3. Tank Material</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The adapter ring needs to seal properly to the tank surface. Concrete tanks require an adapter ring that bonds using butyl sealant or adhesive. Plastic and fiberglass tanks may need a different adapter.</p>
        </div>
        {/* PART2_PLACEHOLDER */}
      </article>
    </>
  )
}
