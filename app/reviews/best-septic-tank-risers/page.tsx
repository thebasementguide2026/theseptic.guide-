import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
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
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Our Picks</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Best Septic Tank Risers: Our Picks</h2>
          <div className='space-y-8'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <div className='flex items-center justify-between mb-3'><h3 className='text-lg font-bold text-slate-900'>Best Overall: Polylok 20&quot; Riser Kit (14&quot; Tall)</h3><span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>Best Overall</span></div>
              <p className='text-slate-600 text-xs mb-3'>Includes: 20&quot; adapter ring, 20&quot;x12&quot; riser, 20&quot; flat lid, 20&quot; safety screen, installation kit with stainless steel screws and sealant</p>
              <p className='text-slate-700 text-sm mb-3'>Polylok is the industry standard for septic risers. This kit includes everything needed for a complete installation with no additional purchases required. The 20-inch diameter fits the majority of residential tanks. The 14 inches of height handles most buried-lid situations. Additional 20-inch risers can be stacked on top if you need more height. The safety screen is a critical inclusion that prevents anyone from falling into the tank if the lid is removed. Made in the USA from heavy-duty polyethylene.</p>
              <p className='text-slate-700 text-sm mb-3'><strong>Best for:</strong> Most homeowners retrofitting risers onto an existing concrete or plastic tank with a 20-inch access opening.</p>
              <a href='https://amzn.to/4uexUDA' target='_blank' rel='noopener noreferrer nofollow' className='inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm'>Check Current Price on Amazon</a>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <div className='flex items-center justify-between mb-3'><h3 className='text-lg font-bold text-slate-900'>Best 24-Inch: Polylok 24&quot; Riser Kit (14&quot; Tall)</h3><span className='bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded'>Best 24&quot;</span></div>
              <p className='text-slate-600 text-xs mb-3'>Includes: 24&quot; adapter ring, 24&quot;x12&quot; riser, 24&quot; flat lid, 24&quot; safety screen, installation kit with stainless steel screws</p>
              <p className='text-slate-700 text-sm mb-3'>Same quality as the 20-inch kit but for tanks with larger 24-inch access openings. The larger diameter provides more working room for the pumping crew and makes filter cleaning easier. Stackable for additional height. The 24-inch safety screen is rated at 250 lbs per square foot. This is the size most septic professionals prefer because it gives them the best access.</p>
              <p className='text-slate-700 text-sm mb-3'><strong>Best for:</strong> Newer tanks with 24-inch openings, or homeowners who want maximum service access.</p>
              <a href='https://amzn.to/4aQRU7C' target='_blank' rel='noopener noreferrer nofollow' className='inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm'>Check Current Price on Amazon</a>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <div className='flex items-center justify-between mb-3'><h3 className='text-lg font-bold text-slate-900'>Best Budget: Tuf-Tite 20&quot; Bundle</h3><span className='bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded'>Best Budget</span></div>
              <p className='text-slate-600 text-xs mb-3'>Includes: 20&quot;x12&quot; riser, 20&quot; domed lid, 20&quot; adapter ring, stainless steel screws</p>
              <p className='text-slate-700 text-sm mb-3'>Tuf-Tite is the other major name in septic risers and their products are widely used by professional installers. This three-piece bundle costs less than the Polylok equivalent while offering comparable durability and fit. The domed lid sheds water and debris better than a flat lid in areas with heavy rain or leaf fall.</p>
              <div className='bg-amber-50 border border-amber-200 rounded-lg p-3 mb-3'><p className='text-amber-800 text-xs'><strong>Note:</strong> This bundle does not include a safety screen. If you want that added layer of protection (recommended, especially with children on the property), you will need to purchase the Tuf-Tite safety pan separately ($30 to $50).</p></div>
              <p className='text-slate-700 text-sm mb-3'><strong>Best for:</strong> Budget-conscious homeowners who want a reliable riser from a trusted brand at a lower price point.</p>
              <a href='https://amzn.to/4so9PIx' target='_blank' rel='noopener noreferrer nofollow' className='inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm'>Check Current Price on Amazon</a>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <div className='flex items-center justify-between mb-3'><h3 className='text-lg font-bold text-slate-900'>Best for Deep Burial: Polylok 24&quot; Kit + Extra Risers</h3><span className='bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded'>Deep Burial</span></div>
              <p className='text-slate-600 text-xs mb-3'>Includes: 24&quot; adapter ring, 24&quot;x6&quot; riser, 24&quot; flat lid, 24&quot; safety screen, installation kit</p>
              <p className='text-slate-700 text-sm mb-3'>This kit starts at 8 inches of height, but the real advantage is that Polylok 24-inch risers stack. If your tank is buried 24 to 36 inches deep, you buy this base kit plus two or three additional 24&quot;x12&quot; riser sections ($50 to $80 each) and stack them to reach grade. The system seals between sections with butyl rope sealant, creating a watertight column from tank to surface.</p>
              <p className='text-slate-700 text-sm mb-3'><strong>Best for:</strong> Tanks buried more than 18 inches below grade that need multiple riser sections stacked to reach the surface.</p>
              <a href='https://amzn.to/4liOQ80' target='_blank' rel='noopener noreferrer nofollow' className='inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm'>Check Current Price on Amazon</a>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <div className='flex items-center justify-between mb-3'><h3 className='text-lg font-bold text-slate-900'>Best Complete Bundle: Tuf-Tite 20&quot; Four-Piece</h3><span className='bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded'>Complete Bundle</span></div>
              <p className='text-slate-600 text-xs mb-3'>Includes: 20&quot;x12&quot; riser, 20&quot; domed lid, 20&quot; adapter ring, 20&quot; safety lid</p>
              <p className='text-slate-700 text-sm mb-3'>This bundle packages all four essential components from Tuf-Tite into a single purchase. The safety lid is included (unlike the standard Tuf-Tite kit), so you do not need to buy it separately. The domed lid design is practical for areas with rainfall. All hardware included.</p>
              <p className='text-slate-700 text-sm mb-3'><strong>Best for:</strong> Homeowners who want a complete, safety-included package in a single order.</p>
              <a href='https://amzn.to/4rejjVW' target='_blank' rel='noopener noreferrer nofollow' className='inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm'>Check Current Price on Amazon</a>
            </div>
          </div>
        </div>
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Costs</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Riser Cost Breakdown</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The total cost of adding risers depends on two factors: the kit itself and whether you install it yourself or hire a professional.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Item</th><th className='p-2 text-left font-semibold'>DIY Cost</th><th className='p-2 text-left font-semibold'>Professional Cost</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>20&quot; riser kit (single section)</td><td className='p-2'>$100 &ndash; $200</td><td className='p-2'>$100 &ndash; $200</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>24&quot; riser kit (single section)</td><td className='p-2'>$150 &ndash; $300</td><td className='p-2'>$150 &ndash; $300</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Additional riser sections</td><td className='p-2'>$50 &ndash; $80 each</td><td className='p-2'>$50 &ndash; $80 each</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Butyl sealant</td><td className='p-2'>$10 &ndash; $20</td><td className='p-2'>Included</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Installation labor (per access point)</td><td className='p-2'>$0 (your time)</td><td className='p-2'>$100 &ndash; $300</td></tr>
                <tr className='bg-amber-50 font-bold'><td className='p-2'>Total per access point</td><td className='p-2'>$110 &ndash; $300</td><td className='p-2'>$250 &ndash; $600</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Most residential tanks have two access points (inlet and outlet). If you&apos;re doing both, double the cost above. Many homeowners install risers on both access points at the same time to save on labor.</p>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg'><p className='text-slate-700 font-medium text-sm'>The math is simple: if your pumping company charges $100 to dig out your lids, the riser pays for itself by the second or third service visit. After that, every visit saves you money.</p></div>
        </div>
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Installation</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>DIY vs. Professional Installation</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Riser installation is one of the few septic tasks that a handy homeowner can realistically do themselves. Here&apos;s what&apos;s involved:</p>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>DIY Installation Steps</h3>
          <ol className='space-y-3 mb-6 text-sm text-slate-700 list-decimal list-inside'>
            <li>Locate your tank and dig down to expose the access lid(s)</li>
            <li>Clean the top surface of the tank around the opening</li>
            <li>Apply butyl sealant rope around the opening</li>
            <li>Set the adapter ring onto the sealant and press firmly</li>
            <li>Stack riser sections to reach ground level</li>
            <li>Apply sealant between each section</li>
            <li>Secure with stainless steel screws</li>
            <li>Install safety screen and lid</li>
            <li>Backfill around the riser with soil</li>
          </ol>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The entire process takes <strong>2 to 4 hours per access point</strong> for someone comfortable with basic tools and manual digging. The hardest part is the digging, especially in clay or rocky soil.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>When to Hire a Pro</h3>
          <ul className='space-y-2 mb-6 text-sm text-slate-700'>
            <li className='flex items-start gap-2'><span className='text-amber-700 font-bold'>&#8226;</span>Your tank is buried more than 24 inches deep</li>
            <li className='flex items-start gap-2'><span className='text-amber-700 font-bold'>&#8226;</span>You&apos;re not sure where your tank is located</li>
            <li className='flex items-start gap-2'><span className='text-amber-700 font-bold'>&#8226;</span>The existing concrete lid is cracked or damaged and needs replacement</li>
            <li className='flex items-start gap-2'><span className='text-amber-700 font-bold'>&#8226;</span>You want the riser installed during a scheduled pumping visit (many companies offer a discount when combined)</li>
            <li className='flex items-start gap-2'><span className='text-amber-700 font-bold'>&#8226;</span>Local codes require a licensed installer for septic work</li>
          </ul>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg'><p className='text-slate-700 font-medium text-sm'>Ask your pumping company about riser installation during your next service. Many will install risers while they already have the tank exposed, saving you the digging cost entirely.</p></div>
        </div>
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>FAQ</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          <div className='space-y-6'>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>How much does a septic tank riser cost?</h3>
              <p className='text-slate-700 text-sm'>A complete riser kit costs $100 to $300 for a standard 20-inch or 24-inch single-section kit. Professional installation adds $100 to $300 per access point. Most residential tanks have one or two access points, so total installed cost is $200 to $600 for the complete job.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Are septic tank risers worth it?</h3>
              <p className='text-slate-700 text-sm'>Yes. Risers eliminate $50 to $200 in digging fees at every service visit. With pumping every 3 to 5 years plus annual inspections, the riser pays for itself within two to three visits and saves money for the remaining life of the system.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Can I install a septic tank riser myself?</h3>
              <p className='text-slate-700 text-sm'>Yes. Riser installation is a manageable DIY project for homeowners comfortable with basic tools and digging. The process takes 2 to 4 hours per access point.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>What size riser do I need?</h3>
              <p className='text-slate-700 text-sm'>Measure the inside diameter of your tank access opening. The three standard sizes are 16-inch, 20-inch, and 24-inch. The 20-inch size fits the majority of residential tanks.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Do I need a riser for every access point?</h3>
              <p className='text-slate-700 text-sm'>Ideally yes. Most residential tanks have two access points. The outlet side is the most important because that is where the effluent filter is located. At minimum, install a riser on the outlet access point.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Will a riser affect my lawn appearance?</h3>
              <p className='text-slate-700 text-sm'>Riser lids sit at or slightly above ground level. They are typically green or black and about 20 to 24 inches in diameter. Most homeowners find them unobtrusive.</p>
            </div>
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
    </>
  )
}
