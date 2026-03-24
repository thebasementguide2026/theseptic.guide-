import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'What to Plant Over and Around Your Septic System | The Septic Guide',
  description: 'Bare soil over a drainfield causes erosion and harms system performance. The right plants actually help your septic system work. Here is exactly what to plant over the tank, drainfield, and mound, what to avoid, and the food garden question answered honestly.',
  openGraph: {
    title: 'What to Plant Over and Around Your Septic System',
    description: 'Bare soil over a drainfield causes erosion and harms system performance. The right plants actually help your septic system work. Here is exactly what to plant over the tank, drainfield, and mound, what to avoid, and the food garden question answered honestly.',
    url: 'https://theseptic.guide/guides/plants-septic-system',
    siteName: 'The Septic Guide',
    type: 'article',
    images: [{ url: 'https://theseptic.guide/septicplanthero.jpg', width: 1200, height: 630, alt: 'What to plant over and around your septic system' }],
  },
  alternates: { canonical: 'https://theseptic.guide/guides/plants-septic-system' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What to Plant Over and Around Your Septic System',
  description: 'Bare soil over a drainfield causes erosion and harms system performance. The right plants actually help your septic system work. Here is exactly what to plant over the tank, drainfield, and mound, what to avoid, and the food garden question answered honestly.',
  image: 'https://theseptic.guide/septicplanthero.jpg',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  author: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
  publisher: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    url: 'https://theseptic.guide',
    logo: { '@type': 'ImageObject', url: 'https://theseptic.guide/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://theseptic.guide/guides/plants-septic-system' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it safe to plant anything over a septic drainfield?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it is actually recommended. University extension programs from multiple states including Clemson, Minnesota, and Oklahoma State advise that appropriate vegetation over the drainfield helps the system function better by absorbing excess moisture and nutrients, preventing soil erosion, maintaining soil structure, and providing insulation in cold climates. The key is choosing plants with fibrous, shallow root systems that do not seek out moisture sources, and avoiding woody plants entirely over the drainfield itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I grow a vegetable garden near my septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not directly over the drainfield, and not in raised beds over it either. Root vegetables that grow in the soil and any crops that might be contaminated by soil splash during watering or rain are not safe to grow over the drainfield because there is no way to guarantee the system is treating effluent completely at all times. The same restriction applies to raised beds positioned over the drainfield because the added soil weight inhibits evaporation, the beds\' roots grow beyond their boundaries, and they add irrigation water the system does not need. Vegetables grown at least 10 feet from the drainfield perimeter in separate garden space, away from any downslope drainage from the system, are generally considered safe.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best grass to plant over a septic drainfield?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Turf grass is universally considered the best cover for a drainfield, and the specific variety depends on your climate. Fescue mixes are highly recommended because of their drought tolerance and adaptability. In warm climates, Bermuda grass and buffalo grass work well. In cool climates, fine fescue and Kentucky bluegrass blends perform reliably. The preference in all cases is for drought-tolerant varieties that do not require supplemental irrigation, because adding irrigation water over the drainfield is counterproductive to system function.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I plant shrubs near my septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Adjacent to the system, yes, with appropriate clearances. No shrub should be planted directly over the drainfield. For the area near the drainfield perimeter, choose compact species with fibrous, shallow root systems such as boxwood, spirea, or inkberry holly, and keep them at least 10 feet from the drainfield edge. Avoid water-seeking shrubs like forsythia, burning bush, and azalea (which also struggles with the elevated pH of drainfield soil).',
      },
    },
    {
      '@type': 'Question',
      name: "Why can't I put a raised bed over my septic drainfield?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three reasons. First, the added weight of a filled raised bed compresses the soil below, reducing the pore space that aerobic bacteria need to treat effluent. A standard 4x8 raised bed filled with growing mix can weigh more than 1,000 pounds. Second, the added soil depth over the drainfield inhibits the evaporation of effluent moisture that the system relies on. Third, vegetable roots grow beyond the raised bed boundaries and into the native soil, which may be influenced by the drainfield\'s effluent percolation. The raised bed does not create the barrier homeowners assume it does.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I fertilize or water the plants over my drainfield?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No to both, beyond what is needed to establish new plantings. Effluent already delivers nitrogen and phosphorus to the drainfield soil, so fertilizing adds an unnecessary nutrient load that can push excess nutrients toward groundwater. Irrigation adds water that competes with the effluent the system needs to drain and percolate. Choose plants that are adapted to the local climate and the drainfield\'s soil conditions so that once established, they thrive on rainfall alone. Light watering during the establishment period for new plantings is fine.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I plant on a mound septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top of the mound needs drought-tolerant plants because the imported sand fill drains quickly and stays dry on the surface despite the moisture circulating through the system below. Native prairie grasses and wildflowers adapted to dry conditions, such as prairie dropseed, buffalo grass, coneflower, yarrow, and blazingstar, are well-suited to mound conditions. The sides of the mound need dense cover to prevent erosion, with fescue or native ground covers planted as densely as possible after construction. No trees or shrubs should be planted on the mound or within the drainfield boundary, and supplemental irrigation is not appropriate for mound systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'I have bamboo near my drainfield. What should I do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Take it seriously. Running bamboo rhizomes extend 10 to 30 feet from visible canes and follow moisture gradients. If the bamboo is already within 20 to 30 feet of the drainfield, the rhizomes may already be within or near the pipe zone. The removal process involves cutting all canes to the ground to stop photosynthesis, manual excavation of as much of the rhizome network as possible, and treating regrowth with a systemic herbicide. Expect two to three years of effort. Do not use heavy equipment over the drainfield during removal. Once the bamboo is removed, consider a camera inspection of the distribution pipes to confirm no root intrusion occurred during the period it was growing nearby.',
      },
    },
  ],
}

export default function PlantsSepticSystem() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

              <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: 'What to Plant Over and Around Your Septic System' }]} />
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/septicplanthero.jpg'
          alt='What to plant over and around your septic system'
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
            What to Plant Over and<br />
            <span className='text-amber-500'>Around Your Septic System</span>
          </h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            The right plants help your system work better. The wrong ones cause thousands in damage. Here is exactly what to plant where.
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

                <div className='prose prose-lg max-w-none mb-12'>
            <p className='text-slate-600 leading-relaxed'>
              Most homeowners with a septic system end up with one of two problems. The first is bare soil or gravel over the drainfield because they are afraid to plant anything. The second is the wrong plants, usually trees or shrubs that someone told them were fine, slowly working their roots toward the pipes. Both scenarios cause problems. Bare soil erodes, compacts, and reduces the oxygen exchange the drainfield needs to function. The wrong plants cause root intrusion that can cost thousands to fix.
            </p>
            <p className='text-slate-600 leading-relaxed mt-4'>
              The reality is that the right plants actually help your septic system work better. Shallow-rooted vegetation absorbs excess moisture and nutrients from the soil, reduces erosion, insulates the system in cold weather, and keeps the drainfield soil from compacting under foot traffic and rain. University extension programs across multiple states, from Clemson to Minnesota to Oklahoma State, consistently recommend planting over the drainfield. The goal is choosing the right plants and understanding what they are doing and why.
            </p>
            <p className='text-slate-600 leading-relaxed mt-4'>
              This guide covers every zone: what to plant directly over the tank, what works over the drainfield, what to do with a mound system, whether a vegetable garden is ever safe, how to handle invasive plants that are already too close, and exactly what to avoid.
            </p>
          </div>

        {/* Why Plants Are Good */}
        <section className='mb-16'>
          <h2 className='text-3xl font-black text-[#2C3E50] mb-6'>Why Plants Are Good for Your Drainfield (When Chosen Correctly)</h2>
          <div className='prose prose-lg max-w-none text-slate-600'>
            <p>
              A drainfield works by slowly releasing effluent through perforated pipes into the surrounding soil, where bacteria and other microorganisms break down pathogens and nutrients before the water reaches the groundwater table. That process requires three things to function well: adequate oxygen in the soil, proper soil structure that allows percolation, and controlled moisture levels that prevent saturation.
            </p>
            <p>
              Bare soil over a drainfield does not provide any of these things well. It compacts under rain and foot traffic, reducing the pore space that aerobic microbes need to treat the effluent. It erodes during heavy rain, can shift drainage patterns toward the drainfield rather than away from it, and offers no insulation in cold climates where frozen ground reduces treatment capacity.
            </p>
            <p>
              Shallow-rooted plants solve all of this. Their fibrous root systems aerate the soil lightly, maintain structure without reaching the pipes, absorb excess effluent moisture that would otherwise saturate the soil, and take up nitrogen and phosphorus that effluent delivers in abundance. The roots also hold the soil surface in place through rain and wind. In cold climates, a layer of living vegetation over the drainfield acts as insulation that extends the treatment season.
            </p>
            <p>
              The plants that do all of this without causing harm share specific characteristics. They have fibrous, shallow root systems that grow horizontally rather than deeply. They are not thirsty plants that actively seek out moisture sources. And they do not have woody stems or aggressive spreading habits that allow them to reach pipe depth over time.
            </p>
          </div>

          {/* Embedded Image: septicplant3.jpg */}
          <div className='mt-8 rounded-xl overflow-hidden'>
            <Image
              src='/septicplant3.jpg'
              alt='Shallow-rooted plants growing over a septic drainfield'
              width={1200}
              height={600}
              className='w-full h-auto object-cover rounded-xl'
            />
          </div>
        </section>

        {/* Soil Over Your Drainfield */}
        <section className='mb-16'>
          <h2 className='text-3xl font-black text-[#2C3E50] mb-6'>The Soil Over Your Drainfield Is Different</h2>
          <div className='prose prose-lg max-w-none text-slate-600 mb-6'>
            <p>
              One thing almost no guide covers is that the soil over a drainfield has different chemistry from the rest of your yard, and those differences affect which plants thrive there.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='bg-white border border-[#E8E4DE] rounded-xl p-5'>
              <h3 className='text-lg font-bold text-[#2C3E50] mb-2'>Elevated pH</h3>
              <p className='text-sm text-slate-600'>Most household cleaning products, detergents, and personal care products that go down the drain are alkaline, with a pH above 7. Over time, effluent raises the soil pH in the drainfield area. Plants that prefer acidic soil, including blueberries, azaleas, rhododendrons, and hydrangeas, will struggle in drainfield soil. Choose plants adapted to neutral to slightly alkaline conditions.</p>
            </div>
            <div className='bg-white border border-[#E8E4DE] rounded-xl p-5'>
              <h3 className='text-lg font-bold text-[#2C3E50] mb-2'>Elevated Nitrogen and Phosphorus</h3>
              <p className='text-sm text-slate-600'>Household effluent carries significant nitrogen and phosphorus loads. Plants over the drainfield receive a constant slow feed of these nutrients from below. This is actually beneficial for the system because the plants absorb nutrients that would otherwise move toward groundwater. Do not fertilize over the drainfield. Let the effluent be the fertilizer.</p>
            </div>
            <div className='bg-white border border-[#E8E4DE] rounded-xl p-5'>
              <h3 className='text-lg font-bold text-[#2C3E50] mb-2'>Moderate Salinity</h3>
              <p className='text-sm text-slate-600'>If your household uses a water softener, the effluent contains elevated sodium as discussed in our <Link href='/guides/water-softener-septic-systems' className='text-[#C08B5C] hover:text-[#A87A4F] font-semibold'>water softener and septic system guide</Link>. Even without a softener, effluent has higher salinity than ordinary tap water. Plants with some salt tolerance are better choices over the drainfield.</p>
            </div>
            <div className='bg-white border border-[#E8E4DE] rounded-xl p-5'>
              <h3 className='text-lg font-bold text-[#2C3E50] mb-2'>Drier Surface Than You Expect</h3>
              <p className='text-sm text-slate-600'>Despite all the moisture flowing through the system below, the soil surface directly over the drainfield often stays drier than surrounding areas. The gravel layer beneath the soil drains moisture downward rather than wicking it up. Choose drought-tolerant plants that do not require supplemental irrigation rather than water-loving species that will send roots downward.</p>
            </div>
          </div>
        </section>

        {/* Zone 1: Over the Septic Tank */}
        <section className='mb-16'>
          <h2 className='text-3xl font-black text-[#2C3E50] mb-6'>Zone 1: Over the Septic Tank</h2>
          <div className='prose prose-lg max-w-none text-slate-600'>
            <p>
              The area directly over the septic tank needs to stay accessible for pumping and inspections. The tank is typically pumped every three to five years, and the pumper needs to locate and open the access ports. Whatever you plant here must be expendable, easy to move, or planted completely clear of the access lids.
            </p>
            <p>
              <strong>Grass is the best choice over the tank.</strong> It keeps the soil stable, stays shallow-rooted, and does not need to be removed for access. The mower tells you where the tank is and keeps the grass from becoming a concealment problem.
            </p>
            <p>
              <strong>Low annual flowers and bulbs work around the access port, not over it.</strong> Daffodils, tulips, and iris are commonly planted as markers around the tank lid perimeter because they are easily moved and their roots stay above pipe depth. A cluster of these marks the lid location visually without blocking access.
            </p>
            <p>
              <strong>Do not plant woody perennials, shrubs, or ground covers that spread over the lid area.</strong> English ivy, pachysandra, and spreading junipers are common mistakes here. They look tidy until the pumper has to rip them out to find the lid, and then replant or not. Some homeowners use a decorative rock, a birdbath base, or a septic tank riser cover landscaped to look like a planter. These work well as long as they can be moved quickly.
            </p>
            <p>
              <strong>Leave clear access for the pump truck.</strong> Septic pump trucks need to get within approximately 50 feet of the tank, and the hose cannot easily navigate over fences, through garden beds, or around decorative features that cross the route. Think about the access path from the street or driveway to the tank when planning any landscaping between the two.
            </p>
          </div>
        </section>

        {/* Zone 2: Over the Drainfield */}
        <section className='mb-16'>
          <h2 className='text-3xl font-black text-[#2C3E50] mb-6'>Zone 2: Over the Drainfield</h2>
          <div className='prose prose-lg max-w-none text-slate-600'>
            <p>
              This is where plant selection matters most and where the most damage can be done by choosing the wrong things. The drainfield pipes are typically buried 6 to 36 inches below the surface depending on system design and local conditions. That is surprisingly shallow, which is why almost any woody plant is a potential problem.
            </p>
          </div>

          {/* Embedded Image: septicplant2.jpg */}
          <div className='my-8 rounded-xl overflow-hidden'>
            <Image
              src='/septicplant2.jpg'
              alt='Drainfield area showing proper vegetation coverage'
              width={1200}
              height={600}
              className='w-full h-auto object-cover rounded-xl'
            />
          </div>

          <h3 className='text-2xl font-bold text-[#2C3E50] mb-4'>The Best Plants for Over the Drainfield</h3>

          <div className='space-y-4 mb-8'>
            <div className='bg-green-50 border border-green-200 rounded-xl p-5'>
              <h4 className='text-lg font-bold text-green-800 mb-2'>Turf Grass</h4>
              <p className='text-sm text-slate-600'>The universal recommendation from every university extension program. Turfgrass has fibrous roots that stay within the top few inches of soil, excellent moisture absorption, natural tolerance for elevated nutrients, and durability to handle light foot traffic. Fescue, Kentucky bluegrass, Bermuda grass, or buffalo grass all work depending on your climate. Fescue mixes are particularly well-suited because of their drought tolerance.</p>
            </div>
            <div className='bg-green-50 border border-green-200 rounded-xl p-5'>
              <h4 className='text-lg font-bold text-green-800 mb-2'>Meadow Mixes and Native Grasses</h4>
              <p className='text-sm text-slate-600'>A popular alternative to mowed lawn. Prairie dropseed, little bluestem, buffalo grass, and native fescues are all good choices. Avoid tall grasses like switchgrass directly over the pipes because its roots grow more deeply and it requires division every few years which means digging.</p>
            </div>
            <div className='bg-green-50 border border-green-200 rounded-xl p-5'>
              <h4 className='text-lg font-bold text-green-800 mb-2'>White Clover and Microclover</h4>
              <p className='text-sm text-slate-600'>Excellent options that many extension programs now recommend. Clover is low-growing, drought-tolerant, fixes nitrogen from the atmosphere, and requires little to no mowing. The fibrous root system stays shallow. It handles the elevated nutrient environment well and provides habitat for pollinators.</p>
            </div>
            <div className='bg-green-50 border border-green-200 rounded-xl p-5'>
              <h4 className='text-lg font-bold text-green-800 mb-2'>Shallow-Rooted Flowering Perennials</h4>
              <div className='text-sm text-slate-600 space-y-2'>
                <p><strong>Coneflower (Echinacea)</strong> &mdash; tolerates drought, spreads gently, fibrous roots stay in the upper soil layer.</p>
                <p><strong>Black-eyed Susan (Rudbeckia)</strong> &mdash; widely adapted, drought-tolerant, spreads by self-seeding rather than invasive root spread.</p>
                <p><strong>Yarrow (Achillea)</strong> &mdash; one of the most drainfield-appropriate perennials: drought-tolerant, shallow-rooted, tolerant of alkaline soils.</p>
                <p><strong>Daylilies (Hemerocallis)</strong> &mdash; tuberous roots stay in upper inches of soil, drought-tolerant, adaptable to higher pH. Do not confuse with true lilies (Lilium).</p>
                <p><strong>Coreopsis (tickseed)</strong> &mdash; compact, drought-tolerant, genuinely shallow fibrous root system.</p>
                <p><strong>Sedum (stonecrop)</strong> &mdash; excellent low-growing groundcover, tolerates drier surface conditions and alkaline soil. Autumn Joy sedum is widely used.</p>
                <p><strong>Lavender</strong> &mdash; works in Zones 5 and warmer, benefits from good drainage and slightly alkaline drainfield conditions.</p>
              </div>
            </div>
            <div className='bg-green-50 border border-green-200 rounded-xl p-5'>
              <h4 className='text-lg font-bold text-green-800 mb-2'>Annual Flowers</h4>
              <p className='text-sm text-slate-600'>Completely safe because their short root systems die and decompose each season. Zinnias, marigolds, impatiens, petunias, and cosmos are all appropriate. The only consideration is awareness of pipe locations when digging to replant each spring.</p>
            </div>
            <div className='bg-green-50 border border-green-200 rounded-xl p-5'>
              <h4 className='text-lg font-bold text-green-800 mb-2'>Wildflower Mixes</h4>
              <p className='text-sm text-slate-600'>Designed for dry prairie conditions, these work extremely well over drainfields. Clemson Extension and the University of Minnesota both recommend dry-condition native wildflower mixes as one of the best options. They establish dense cover, require no supplemental water, and provide ecological value with minimal maintenance.</p>
            </div>
            <div className='bg-green-50 border border-green-200 rounded-xl p-5'>
              <h4 className='text-lg font-bold text-green-800 mb-2'>Low-Growing Ornamental Grasses</h4>
              <p className='text-sm text-slate-600'>Clumping growth habits are key. Blue fescue (Festuca glauca) and prairie dropseed (Sporobolus heterolepis) add texture without deep root systems. Avoid spreading or running ornamental grasses.</p>
            </div>
          </div>

          <h3 className='text-2xl font-bold text-[#2C3E50] mb-4'>Plants to Avoid Directly Over the Drainfield</h3>

          <div className='space-y-4'>
            <div className='bg-red-50 border border-red-200 rounded-xl p-5'>
              <h4 className='text-lg font-bold text-red-800 mb-2'>Any Woody Plant</h4>
              <p className='text-sm text-slate-600'>Woody plants develop root systems that grow deeper and more aggressively over time than they appear to when young. This includes all shrubs, all trees, and woody ground covers like juniper, creeping juniper, and woody thyme. There is no woody plant that is safe to place directly over a drainfield.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-xl p-5'>
              <h4 className='text-lg font-bold text-red-800 mb-2'>English Ivy and Vinca (Periwinkle)</h4>
              <p className='text-sm text-slate-600'>Both form dense canopies or mats that prevent soil evaporation, one of the mechanisms the drainfield relies on. English ivy also develops woody stems over time and can become invasive. Neither is recommended.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-xl p-5'>
              <h4 className='text-lg font-bold text-red-800 mb-2'>Mint</h4>
              <p className='text-sm text-slate-600'>Spreads aggressively via underground rhizomes, which can reach and fill pipe perforations. It is also a water-seeking plant that will actively grow toward drainfield moisture. Do not plant mint anywhere near the drainfield.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-xl p-5'>
              <h4 className='text-lg font-bold text-red-800 mb-2'>Bamboo</h4>
              <p className='text-sm text-slate-600'>Running bamboo species have rhizomes that can extend 20 or more feet per season in moist, worked soil. Keep all running bamboo species at least 50 feet from any septic component. Clumping bamboo is less aggressive but still not appropriate directly over the drainfield.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-xl p-5'>
              <h4 className='text-lg font-bold text-red-800 mb-2'>Raspberries, Blackberries, and Brambles</h4>
              <p className='text-sm text-slate-600'>Spread by root suckering and tip-rooting in ways that quickly become uncontrollable. Their roots are deeper and woodier than their appearance suggests. Keep them well away from the drainfield.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-xl p-5'>
              <h4 className='text-lg font-bold text-red-800 mb-2'>Water-Loving Perennials</h4>
              <p className='text-sm text-slate-600'>Astilbe, ligularia, cardinal flower, and other moisture-loving species send roots actively seeking water. Over a drainfield they will penetrate deeper than their normal root depth suggests.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-xl p-5'>
              <h4 className='text-lg font-bold text-red-800 mb-2'>Dense Mulch, Plastic Sheeting, and Weed Barrier</h4>
              <p className='text-sm text-slate-600'>Thick bark or wood chip mulch restricts soil evaporation. Keep mulch layers to 2 inches maximum. Never place plastic sheeting or impermeable weed barrier over the drainfield. The same applies to decorative rock beds that cover the entire drainfield surface. These prevent oxygen exchange and evaporation, both critical to system function.</p>
            </div>
          </div>
        </section>

        {/* Zone 3: Around the Drainfield Perimeter */}
        <section className='mb-16'>
          <h2 className='text-3xl font-black text-[#2C3E50] mb-6'>Zone 3: Around the Drainfield Perimeter</h2>
          <div className='prose prose-lg max-w-none text-slate-600'>
            <p>
              The area immediately adjacent to the drainfield edges, roughly 10 to 20 feet out, is where shrubs and small ornamental trees become possible with the right species choices and attention to mature root spread.
            </p>
          </div>

          <div className='bg-white border border-[#E8E4DE] rounded-xl p-6 mt-6 mb-6'>
            <h3 className='text-xl font-bold text-[#2C3E50] mb-3'>Low-Risk Shrubs for the Drainfield Perimeter</h3>
            <div className='space-y-3 text-slate-600'>
              <p><strong>Boxwood (Buxus)</strong> has a compact, shallow root system and grows slowly. It is not a water-seeker and manages well in the drier conditions adjacent to drainfields. Keep it 10 feet from the drainfield edge.</p>
              <p><strong>Inkberry holly (Ilex glabra)</strong> is a native shrub with a fibrous, non-aggressive root system and tolerance for variable moisture conditions. Useful for naturalistic plantings adjacent to the drainfield.</p>
              <p><strong>Spirea varieties</strong> stay compact and have shallow fibrous roots. Keep them at 10 to 15 feet from the drainfield edge.</p>
              <p><strong>Karl Foerster feather reed grass</strong> (Calamagrostis x acutiflora) can be used along the drainfield perimeter, not over it. At the edge, their fibrous roots are not a threat.</p>
            </div>
          </div>

          <div className='bg-white border border-[#E8E4DE] rounded-xl p-6'>
            <h3 className='text-xl font-bold text-[#2C3E50] mb-3'>Small Ornamental Trees at Safe Clearance</h3>
            <div className='prose prose-lg max-w-none text-slate-600'>
              <p>
                The rule from the University of Minnesota extension is to plant at a distance equal to the anticipated mature height of the tree plus 20 percent. A dogwood expected to reach 20 feet at maturity should be no closer than 24 feet from the drainfield edge. This rule applies to lower-risk species. Higher-risk species like silver maple need far more clearance.
              </p>
              <p>
                The tree species with compact, less aggressive root systems that can be planted closest to septic components include dogwood, Japanese maple, redbud, serviceberry, ornamental cherry, and crabapple. Even these should be kept at least 15 feet from any drainfield component and at the conservative end of the mature-height formula.
              </p>
            </div>
          </div>
        </section>

        {/* Mound Systems */}
        <section className='mb-16'>
          <h2 className='text-3xl font-black text-[#2C3E50] mb-6'>Mound Systems: Different Conditions, Different Approach</h2>
          <div className='prose prose-lg max-w-none text-slate-600'>
            <p>
              Mound systems present a different planting situation from conventional drainfields because the mound itself is an elevated structure, typically 2 to 4 feet tall, composed of imported sand fill that drains quickly and stays relatively dry on the surface. The sides of the mound are steeper than typical yard grade and are especially vulnerable to erosion.
            </p>
            <p>
              <strong>Erosion control is the primary planting priority on a mound.</strong> An unmaintained mound with bare soil will erode, which exposes and destabilizes the system. Some states require vegetative cover on mounds as a condition of the operating permit. Grass or native ground cover must be established and maintained.
            </p>
            <p>
              <strong>The top of the mound needs drought-tolerant plants.</strong> Because the fill material drains rapidly and does not retain moisture, the crown of the mound tends to dry out. Standard turfgrass may struggle at the top. The University of Minnesota specifically recommends native grasses and wildflowers adapted to dry prairie conditions for mound tops.
            </p>
          </div>

          <div className='bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6 mb-6'>
            <h3 className='text-lg font-bold text-amber-800 mb-3'>Best Options for Mound Tops</h3>
            <div className='text-sm text-slate-600 space-y-2'>
              <p><strong>Prairie dropseed (Sporobolus heterolepis)</strong> &mdash; native to dry prairies and naturally suited to mound conditions.</p>
              <p><strong>Buffalo grass and native fescue mixes</strong> &mdash; appropriate for the quick-draining fill material.</p>
              <p><strong>Coneflower, black-eyed Susan, yarrow, and prairie blazingstar (Liatris spicata)</strong> &mdash; tolerate the dry, nutrient-limited soil of the mound crown for flowering interest.</p>
            </div>
          </div>

          <div className='prose prose-lg max-w-none text-slate-600'>
            <p>
              <strong>The mound sides need dense fibrous cover to prevent erosion.</strong> The sides erode more readily than the top because they catch rain runoff. Plant densely here. Fescue grass, creeping juniper at a distance from any system component, or native ground covers that spread from planted plugs work well. The goal is complete soil coverage as fast as possible after mound construction.
            </p>
            <p>
              <strong>Do not plant trees or shrubs on or immediately adjacent to a mound.</strong> The mound contains perforated distribution pipes and the same root vulnerability concerns apply. The concentrated sand fill actually offers relatively easy root penetration, and mound systems in many states have additional regulatory requirements about planting distances.
            </p>
            <p>
              <strong>Do not install irrigation over a mound.</strong> Adding water to a system designed to evaporate and percolate effluent through a carefully engineered sand medium disrupts the system&apos;s water balance. Plant selections for mounds must be able to establish and thrive without supplemental irrigation.
            </p>
          </div>
        </section>

        {/* Vegetable Garden Question */}
        <section className='mb-16'>
          <h2 className='text-3xl font-black text-[#2C3E50] mb-6'>The Vegetable Garden Question, Answered Honestly</h2>
          <div className='prose prose-lg max-w-none text-slate-600'>
            <p>
              Every year homeowners look at the nutrient-rich soil over the drainfield, note how well the grass grows there, and think it would make a perfect vegetable garden. The question deserves a straight answer rather than a vague warning.
            </p>
          </div>

          <div className='bg-red-50 border-2 border-red-300 rounded-xl p-6 mt-6 mb-6'>
            <h3 className='text-lg font-bold text-red-800 mb-3'>Do Not Plant Vegetables Over the Drainfield</h3>
            <p className='text-sm text-slate-600'>
              The reason is not that a properly functioning septic system constantly contaminates the surface soil. It is that there is no way to guarantee the system is functioning properly at any given time, and a partial failure that is not yet symptomatic could contaminate the soil above the pipes. Plants absorb pathogens through roots, and root vegetables grow directly in the potentially affected zone. The risk is not worth taking.
            </p>
          </div>

          <div className='bg-red-50 border border-red-200 rounded-xl p-6 mb-6'>
            <h3 className='text-lg font-bold text-red-800 mb-3'>Raised Beds Over the Drainfield Do Not Solve This</h3>
            <p className='text-sm text-slate-600'>
              This is the most common attempted workaround, and university extension programs from New Hampshire to Ohio specifically address why it does not work. A raised bed adds soil depth over the drainfield, which restricts soil evaporation. A typical 4x8 raised bed filled with growing mix weighs over 1,000 pounds, which compacts the soil beneath and reduces oxygen exchange. And despite the raised bed, vegetable roots grow beyond the bed&apos;s boundaries, meaning root vegetables in a raised bed will still send roots into the potentially contaminated native soil below. The soil barrier you think you are creating does not exist once roots grow through it.
            </p>
          </div>

          <div className='prose prose-lg max-w-none text-slate-600'>
            <p>
              <strong>The food garden belongs elsewhere on the property.</strong> If your drainfield takes up the only sunny spot in your yard, that is a real constraint. The practical solutions are container gardening on a patio or deck, a raised bed positioned at least 10 feet from the drainfield perimeter and away from any downslope soil drainage from the system, or accepting that this section of the yard is for grass and flowers.
            </p>
            <p>
              <strong>Can you grow cut flowers over the drainfield?</strong> Generally yes. Ornamental flowers that are not eaten pose no contamination risk to you, and shallow-rooted annual and perennial flowers are appropriate over the drainfield. The standard guidance is not to handle the soil and then touch food without washing your hands, and not to cut flowers and arrange them in vases placed where food is prepared. That is a practical precaution, not a complete prohibition.
            </p>
            <p>
              <strong>Fruit trees adjacent to the drainfield (not over it) at appropriate clearance</strong> are a gray area. At proper clearance distances with appropriate low-risk species, the root concern is managed. The contamination concern for fruit that grows above ground, separate from the soil, is minimal. Root vegetables and low-growing vegetables that contact soil are where the pathogen concern is highest; tree fruit that hangs in the air is a different situation. This is ultimately a judgment call, and consulting your county health department on specific local guidance is worthwhile if you plan to plant food-producing trees anywhere near the system.
            </p>
          </div>
        </section>

        {/* Invasive Plants */}
        <section className='mb-16'>
          <h2 className='text-3xl font-black text-[#2C3E50] mb-6'>Invasive Plants Already Near Your System</h2>
          <div className='prose prose-lg max-w-none text-slate-600 mb-6'>
            <p>
              Many homeowners discover they have bamboo, Japanese knotweed, English ivy, or mint already growing near or over the drainfield, either planted intentionally before they understood the risk or inherited from previous owners. These need to be addressed, but the removal process matters.
            </p>
          </div>

          <div className='space-y-4'>
            <div className='bg-white border border-[#E8E4DE] rounded-xl p-6'>
              <h3 className='text-lg font-bold text-[#2C3E50] mb-2'>Running Bamboo</h3>
              <p className='text-sm text-slate-600'>The most difficult to remove. Rhizomes extend 10 to 30 feet from visible canes and follow moisture gradients. Mowing alone does not kill running bamboo; it stimulates more vigorous growth. Cut all canes to the ground to stop photosynthesis, excavate as much of the rhizome network as possible, and treat regrowth with a systemic herbicide. Expect two to three years. Do not use heavy excavation equipment directly over the drainfield. Any root excavation within the drainfield perimeter should be done by hand or with hand tools.</p>
            </div>
            <div className='bg-white border border-[#E8E4DE] rounded-xl p-6'>
              <h3 className='text-lg font-bold text-[#2C3E50] mb-2'>Japanese Knotweed</h3>
              <p className='text-sm text-slate-600'>Rhizomes can penetrate 6 feet into the soil, making it one of the more concerning invasive plants near a drainfield. Removal requires repeated cutting, herbicide treatment, and immediate treatment of any regrowth. Extremely difficult to eradicate completely. If knotweed is growing within the drainfield perimeter, professional assessment is warranted both for removal and to evaluate whether rhizomes have reached the distribution pipes.</p>
            </div>
            <div className='bg-white border border-[#E8E4DE] rounded-xl p-6'>
              <h3 className='text-lg font-bold text-[#2C3E50] mb-2'>English Ivy</h3>
              <p className='text-sm text-slate-600'>Can be removed by cutting stems at the base and allowing the above-ground portion to die, then treating regrowth. The root mass is not as deep as bamboo or knotweed. Work carefully to avoid compacting soil over the pipes and avoid digging more than 3 to 4 inches deep anywhere over the drainfield.</p>
            </div>
            <div className='bg-white border border-[#E8E4DE] rounded-xl p-6'>
              <h3 className='text-lg font-bold text-[#2C3E50] mb-2'>Mint</h3>
              <p className='text-sm text-slate-600'>Spreads by rhizomes but is significantly easier to remove than bamboo or knotweed. Repeated removal of top growth plus hand-removal of rhizomes, combined with establishing a dense competing ground cover, controls mint effectively over one to two seasons.</p>
            </div>
          </div>
        </section>

        {/* Things That Should Never Go Over the Drainfield */}
        <section className='mb-16'>
          <h2 className='text-3xl font-black text-[#2C3E50] mb-6'>Things That Should Never Go Over the Drainfield</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='bg-red-50 border border-red-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-red-800 mb-2'>Vehicles and Heavy Equipment</h3>
              <p className='text-sm text-slate-600'>A vehicle driving over the drainfield compacts the soil immediately, damages distribution pipes, and can collapse the gravel bed. A single pass from a loaded vehicle is enough to cause damage that takes years to become apparent.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-red-800 mb-2'>Sheds, Outbuildings, and Structures</h3>
              <p className='text-sm text-slate-600'>No structure should be placed over the drainfield or the reserve area. Building over the reserve area makes future drainfield repair dramatically more expensive.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-red-800 mb-2'>Swimming Pools, Hot Tubs, and Water Features</h3>
              <p className='text-sm text-slate-600'>Ponds, pools, and rain gardens over or near the drainfield add water to an area the system is designed to drain. Saturating the soil reduces treatment capacity and can cause system failure.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-red-800 mb-2'>Irrigation Systems</h3>
              <p className='text-sm text-slate-600'>Sprinkler heads and drip lines should not be located within 10 feet of the drainfield perimeter. Plants chosen for the drainfield should survive on rainfall and incidental effluent moisture.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-xl p-5 md:col-span-2'>
              <h3 className='text-lg font-bold text-red-800 mb-2'>Gravel Beds and Rock Gardens</h3>
              <p className='text-sm text-slate-600'>Decorative gravel placed over the drainfield restricts soil evaporation and oxygen exchange. Small accent stones around individual plants are fine; a gravel mulch layer across the drainfield is not.</p>
            </div>
          </div>
        </section>

        {/* Quick Reference Table */}
        <section className='mb-16'>
          <h2 className='text-3xl font-black text-[#2C3E50] mb-6'>Quick Reference: What to Plant Where</h2>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-[#E8E4DE]'>
              <thead>
                <tr className='bg-[#2C3E50] text-white'>
                  <th className='px-4 py-3 text-left text-sm font-bold'>Location</th>
                  <th className='px-4 py-3 text-left text-sm font-bold'>Good Choices</th>
                  <th className='px-4 py-3 text-left text-sm font-bold'>Avoid</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-[#E8E4DE]'>
                <tr><td className='px-4 py-3 text-sm text-slate-600 font-medium'>Over septic tank</td><td className='px-4 py-3 text-sm text-slate-600'>Turf grass, annual flowers, bulbs around lid perimeter</td><td className='px-4 py-3 text-sm text-slate-600'>Woody plants, ground covers that cover the lid</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3 text-sm text-slate-600 font-medium'>Directly over drainfield</td><td className='px-4 py-3 text-sm text-slate-600'>Turf grass, clover, native grasses, shallow-rooted perennials (coneflower, yarrow, sedum, daylilies), wildflowers</td><td className='px-4 py-3 text-sm text-slate-600'>Trees, shrubs, bamboo, mint, ivy, raspberries, raised beds</td></tr>
                <tr><td className='px-4 py-3 text-sm text-slate-600 font-medium'>Drainfield perimeter (10&ndash;20 ft out)</td><td className='px-4 py-3 text-sm text-slate-600'>Compact shrubs (boxwood, spirea, inkberry), small ornamentals at appropriate clearance</td><td className='px-4 py-3 text-sm text-slate-600'>Water-seeking shrubs, spreading bamboo, willow, poplar, silver maple</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3 text-sm text-slate-600 font-medium'>Mound top</td><td className='px-4 py-3 text-sm text-slate-600'>Drought-tolerant native grasses, prairie wildflowers, buffalo grass, prairie dropseed</td><td className='px-4 py-3 text-sm text-slate-600'>Lawn requiring irrigation, woody plants, anything needing regular watering</td></tr>
                <tr><td className='px-4 py-3 text-sm text-slate-600 font-medium'>Mound sides</td><td className='px-4 py-3 text-sm text-slate-600'>Dense fescue, native ground covers for erosion control</td><td className='px-4 py-3 text-sm text-slate-600'>Bare soil, non-fibrous ground covers</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3 text-sm text-slate-600 font-medium'>Adjacent to system (20+ ft)</td><td className='px-4 py-3 text-sm text-slate-600'>Dogwood, Japanese maple, redbud, serviceberry at proper clearance</td><td className='px-4 py-3 text-sm text-slate-600'>Willow, poplar, silver maple, eucalyptus, birch</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-black text-[#2C3E50] mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <details className='group bg-white border border-[#E8E4DE] rounded-xl overflow-hidden'>
              <summary className='flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors'>
                <span className='font-semibold text-[#2C3E50]'>Is it safe to plant anything over a septic drainfield?</span>
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-6 pb-4 text-slate-600'>Yes, and it is actually recommended. University extension programs from multiple states including Clemson, Minnesota, and Oklahoma State advise that appropriate vegetation over the drainfield helps the system function better by absorbing excess moisture and nutrients, preventing soil erosion, maintaining soil structure, and providing insulation in cold climates. The key is choosing plants with fibrous, shallow root systems that do not seek out moisture sources, and avoiding woody plants entirely over the drainfield itself.</div>
            </details>

            <details className='group bg-white border border-[#E8E4DE] rounded-xl overflow-hidden'>
              <summary className='flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors'>
                <span className='font-semibold text-[#2C3E50]'>Can I grow a vegetable garden near my septic system?</span>
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-6 pb-4 text-slate-600'>Not directly over the drainfield, and not in raised beds over it either. Root vegetables that grow in the soil and any crops that might be contaminated by soil splash are not safe to grow over the drainfield because there is no way to guarantee the system is treating effluent completely at all times. Vegetables grown at least 10 feet from the drainfield perimeter in separate garden space, away from any downslope drainage from the system, are generally considered safe.</div>
            </details>

            <details className='group bg-white border border-[#E8E4DE] rounded-xl overflow-hidden'>
              <summary className='flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors'>
                <span className='font-semibold text-[#2C3E50]'>What is the best grass to plant over a septic drainfield?</span>
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-6 pb-4 text-slate-600'>Turf grass is universally considered the best cover for a drainfield, and the specific variety depends on your climate. Fescue mixes are highly recommended because of their drought tolerance and adaptability. In warm climates, Bermuda grass and buffalo grass work well. In cool climates, fine fescue and Kentucky bluegrass blends perform reliably. The preference in all cases is for drought-tolerant varieties that do not require supplemental irrigation.</div>
            </details>

            <details className='group bg-white border border-[#E8E4DE] rounded-xl overflow-hidden'>
              <summary className='flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors'>
                <span className='font-semibold text-[#2C3E50]'>Can I plant shrubs near my septic system?</span>
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-6 pb-4 text-slate-600'>Adjacent to the system, yes, with appropriate clearances. No shrub should be planted directly over the drainfield. For the area near the drainfield perimeter, choose compact species with fibrous, shallow root systems such as boxwood, spirea, or inkberry holly, and keep them at least 10 feet from the drainfield edge. Avoid water-seeking shrubs like forsythia, burning bush, and azalea.</div>
            </details>

            <details className='group bg-white border border-[#E8E4DE] rounded-xl overflow-hidden'>
              <summary className='flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors'>
                <span className='font-semibold text-[#2C3E50]'>Why can&apos;t I put a raised bed over my septic drainfield?</span>
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-6 pb-4 text-slate-600'>Three reasons. First, the added weight of a filled raised bed compresses the soil below, reducing the pore space that aerobic bacteria need to treat effluent. A standard 4x8 raised bed can weigh more than 1,000 pounds. Second, the added soil depth inhibits evaporation of effluent moisture. Third, vegetable roots grow beyond the raised bed boundaries and into the native soil, which may be influenced by the drainfield&apos;s effluent percolation. The raised bed does not create the barrier homeowners assume it does.</div>
            </details>

            <details className='group bg-white border border-[#E8E4DE] rounded-xl overflow-hidden'>
              <summary className='flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors'>
                <span className='font-semibold text-[#2C3E50]'>Should I fertilize or water the plants over my drainfield?</span>
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-6 pb-4 text-slate-600'>No to both, beyond what is needed to establish new plantings. Effluent already delivers nitrogen and phosphorus to the drainfield soil, so fertilizing adds an unnecessary nutrient load. Irrigation adds water that competes with the effluent the system needs to drain and percolate. Choose plants adapted to the local climate so that once established, they thrive on rainfall alone. Light watering during the establishment period is fine.</div>
            </details>

            <details className='group bg-white border border-[#E8E4DE] rounded-xl overflow-hidden'>
              <summary className='flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors'>
                <span className='font-semibold text-[#2C3E50]'>What should I plant on a mound septic system?</span>
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-6 pb-4 text-slate-600'>The top of the mound needs drought-tolerant plants because the imported sand fill drains quickly and stays dry on the surface. Native prairie grasses and wildflowers such as prairie dropseed, buffalo grass, coneflower, yarrow, and blazingstar are well-suited. The sides need dense cover to prevent erosion, with fescue or native ground covers planted as densely as possible. No trees or shrubs on the mound, and no supplemental irrigation.</div>
            </details>

            <details className='group bg-white border border-[#E8E4DE] rounded-xl overflow-hidden'>
              <summary className='flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors'>
                <span className='font-semibold text-[#2C3E50]'>I have bamboo near my drainfield. What should I do?</span>
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-6 pb-4 text-slate-600'>Take it seriously. Running bamboo rhizomes extend 10 to 30 feet from visible canes and follow moisture gradients. Cut all canes to the ground, manually excavate as much of the rhizome network as possible, and treat regrowth with a systemic herbicide. Expect two to three years of effort. Do not use heavy equipment over the drainfield. Once removed, consider a camera inspection of the distribution pipes to confirm no root intrusion occurred.</div>
            </details>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-16'>
          <h2 className='text-3xl font-black text-[#2C3E50] mb-6'>Glossary</h2>
          <div className='space-y-4'>
            <div className='bg-white border border-[#E8E4DE] rounded-xl p-5'>
              <h3 className='font-bold text-[#2C3E50] mb-1'>Drainfield</h3>
              <p className='text-sm text-slate-600'>The subsurface network of perforated pipes buried in gravel-filled trenches that receives effluent from the septic tank and allows it to percolate slowly into the surrounding soil. Also called a leach field or soil absorption field. The drainfield is the most expensive component of the septic system to repair or replace, and it is the zone where plant selection matters most.</p>
            </div>
            <div className='bg-white border border-[#E8E4DE] rounded-xl p-5'>
              <h3 className='font-bold text-[#2C3E50] mb-1'>Effluent</h3>
              <p className='text-sm text-slate-600'>The liquid wastewater that leaves the septic tank after solids have settled to the bottom and floated materials have been retained. Effluent carries dissolved nitrogen, phosphorus, bacteria, and other materials that the drainfield soil must treat before they reach the water table. It is the source of nutrients that plants over the drainfield absorb.</p>
            </div>
            <div className='bg-white border border-[#E8E4DE] rounded-xl p-5'>
              <h3 className='font-bold text-[#2C3E50] mb-1'>Fibrous Root System</h3>
              <p className='text-sm text-slate-600'>A root structure consisting of many fine, branching roots distributed horizontally near the soil surface rather than growing deeply. Grasses, most perennial flowers, and many ground covers have fibrous roots. This root architecture is appropriate for drainfield use because it stays above the pipe zone and does not seek out specific moisture sources.</p>
            </div>
            <div className='bg-white border border-[#E8E4DE] rounded-xl p-5'>
              <h3 className='font-bold text-[#2C3E50] mb-1'>Evapotranspiration</h3>
              <p className='text-sm text-slate-600'>The combined process of water evaporating from the soil surface and being released from plant leaves through transpiration. Both processes remove moisture from the drainfield area, which is important for preventing saturation. Plants over the drainfield contribute to this process, which is one reason proper vegetation cover improves drainfield function.</p>
            </div>
            <div className='bg-white border border-[#E8E4DE] rounded-xl p-5'>
              <h3 className='font-bold text-[#2C3E50] mb-1'>Mound System</h3>
              <p className='text-sm text-slate-600'>A septic system design used where the natural soil conditions do not allow a conventional below-ground drainfield, typically due to high water tables, shallow bedrock, or soil that is too dense or too permeable. The drainfield is built above the natural soil surface within an engineered mound of imported sand. Mound systems have specific planting requirements because the elevated structure and sand fill create drier surface conditions.</p>
            </div>
            <div className='bg-white border border-[#E8E4DE] rounded-xl p-5'>
              <h3 className='font-bold text-[#2C3E50] mb-1'>Rhizome</h3>
              <p className='text-sm text-slate-600'>A horizontal underground stem that spreads outward from the parent plant, capable of producing new shoots and roots at intervals. Running bamboo, mint, Japanese knotweed, and some ornamental grasses spread via rhizomes. In a septic system context, rhizomes are concerning because they can spread far from the visible plant and enter drainfield pipes through perforations.</p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className='mb-16'>
          <h2 className='text-3xl font-black text-[#2C3E50] mb-6'>Related Guides</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link href='/problems/tree-roots-septic-system' className='bg-white rounded-xl p-5 shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow'>
              <span className='inline-block text-xs font-bold px-3 py-1 rounded-full mb-2' style={{ backgroundColor: '#F8E0D8', color: '#B5382A' }}>Problem</span>
              <h3 className='text-base font-bold text-[#2C3E50] mb-1'>Tree Roots in Your Septic System</h3>
              <p className='text-sm text-[#5A6B7A]'>Why roots cause damage, which tree species are most dangerous, how to remove roots from pipes, and repair costs.</p>
            </Link>
            <Link href='/maintenance/septic-system-maintenance-checklist' className='bg-white rounded-xl p-5 shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow'>
              <span className='inline-block text-xs font-bold px-3 py-1 rounded-full mb-2' style={{ backgroundColor: '#E0E6EC', color: '#2C3E50' }}>Maintenance</span>
              <h3 className='text-base font-bold text-[#2C3E50] mb-1'>Septic System Maintenance Checklist</h3>
              <p className='text-sm text-[#5A6B7A]'>The full annual maintenance schedule including drainfield monitoring.</p>
            </Link>
            <Link href='/problems/drainfield-failing' className='bg-white rounded-xl p-5 shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow'>
              <span className='inline-block text-xs font-bold px-3 py-1 rounded-full mb-2' style={{ backgroundColor: '#F8E0D8', color: '#B5382A' }}>Problem</span>
              <h3 className='text-base font-bold text-[#2C3E50] mb-1'>Signs Your Drainfield Is Failing</h3>
              <p className='text-sm text-[#5A6B7A]'>How to distinguish normal drainfield conditions from early failure signs.</p>
            </Link>
            <Link href='/guides/septic-dos-and-donts' className='bg-white rounded-xl p-5 shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow'>
              <span className='inline-block text-xs font-bold px-3 py-1 rounded-full mb-2' style={{ backgroundColor: '#E0E6EC', color: '#2C3E50' }}>Guide</span>
              <h3 className='text-base font-bold text-[#2C3E50] mb-1'>Septic Dos and Don&apos;ts</h3>
              <p className='text-sm text-[#5A6B7A]'>The complete household habits guide covering water use, chemicals, and practices that affect septic health.</p>
            </Link>
            <Link href='/guides/water-softener-septic-systems' className='bg-white rounded-xl p-5 shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow'>
              <span className='inline-block text-xs font-bold px-3 py-1 rounded-full mb-2' style={{ backgroundColor: '#E0E6EC', color: '#2C3E50' }}>Guide</span>
              <h3 className='text-base font-bold text-[#2C3E50] mb-1'>Water Softeners and Septic Systems</h3>
              <p className='text-sm text-[#5A6B7A]'>The connection between water softener use and elevated sodium in drainfield soil, relevant for plant selection.</p>
            </Link>
            <Link href='/articles/how-long-does-a-septic-system-last' className='bg-white rounded-xl p-5 shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow'>
              <span className='inline-block text-xs font-bold px-3 py-1 rounded-full mb-2' style={{ backgroundColor: '#E0E6EC', color: '#2C3E50' }}>Article</span>
              <h3 className='text-base font-bold text-[#2C3E50] mb-1'>How Long Does a Septic System Last?</h3>
              <p className='text-sm text-[#5A6B7A]'>How proper care of the drainfield area, including appropriate planting, extends system life.</p>
            </Link>
            <Link href='/cost-guides/drainfield-replacement-cost' className='bg-white rounded-xl p-5 shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow'>
              <span className='inline-block text-xs font-bold px-3 py-1 rounded-full mb-2' style={{ backgroundColor: '#E0E6EC', color: '#2C3E50' }}>Cost Guide</span>
              <h3 className='text-base font-bold text-[#2C3E50] mb-1'>Drainfield Replacement Cost 2026</h3>
              <p className='text-sm text-[#5A6B7A]'>What it costs when drainfield damage from roots or compaction reaches the point of requiring replacement.</p>
            </Link>
          </div>
        </section>

        {/* Lead Form */}
        <section className='py-12 bg-[#F5F0EB] rounded-2xl'>
          <div className='max-w-2xl mx-auto px-4'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#2C3E50] text-center mb-4'>Get Free Septic Quotes</h2>
            <p className='text-gray-600 text-center mb-8'>Connect with top-rated local septic professionals. Fast, free, no obligation.</p>
            <LeadForm />
          </div>
        </section>

      </article>
    </>
  )
}
