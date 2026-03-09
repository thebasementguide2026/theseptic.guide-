import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Septic System Alarms (2026): 5 Picks That Prevent Expensive Disasters',
  description: 'A septic system alarm costs $30 to $200 and warns you when water levels get dangerously high. Compare the 5 best septic alarms, how they work, and which type fits your system.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is my septic alarm going off?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common causes are a tripped pump breaker, a failed effluent pump, a clogged effluent filter, heavy rain saturating the drainfield, or an overdue tank pumping. Silence the horn, reduce water use immediately, check the circuit breaker, and call a septic professional if you cannot identify the cause.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I install a septic alarm myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plug-in models like the Briidea and basic Sump Alarm can be installed by any homeowner in under 30 minutes. Hardwired models like the SJE Rhombus and control panels like the CINVEI should be installed by an electrician unless you are comfortable working with 120V wiring.',
      },
    },
    {
      '@type': 'Question',
      name: 'How loud should a septic alarm be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At least 90 dB, which is roughly the volume of a lawn mower. If the alarm is mounted outside and you need to hear it from inside the house, 110 dB is preferred. The Briidea and CINVEI are the loudest on this list at 110 dB.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a WiFi septic alarm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only if you have a vacation home, rental property, or travel frequently and want remote notifications. For a primary residence where someone is home most of the time, a standard audible alarm with a bright warning light is sufficient and more reliable because it does not depend on an internet connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a septic alarm the same as a sump pump alarm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Functionally, yes. Both use a float switch to detect high water and trigger an audible and visual alert. The only difference is the float switch material. Septic environments are more corrosive than clean groundwater, so look for polypropylene floats rated for sewage use.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I test my septic alarm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At least once a year, ideally in the fall before winter. Press the test button and confirm the horn and light work. If you have a WiFi alarm, verify you receive the notification.',
      },
    },
    {
      '@type': 'Question',
      name: 'My alarm keeps going off after heavy rain. Is that normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can happen when the drainfield becomes saturated and the tank cannot discharge effluent. Reduce water use and the alarm should clear within 24 to 72 hours as the ground dries. If it happens every time it rains, you likely have a groundwater infiltration issue that needs professional evaluation.',
      },
    },
  ],
}

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Septic System Alarm Comparison 2026',
  description: 'Comparison of 5 septic system alarms rated by type, alert method, float length, price range, and best use case.',
  url: 'https://theseptic.guide/reviews/best-septic-system-alarms',
  license: 'https://creativecommons.org/licenses/by/4.0/',
  creator: {
    '@type': 'Organization',
    name: 'The Septic Guide',
    url: 'https://theseptic.guide',
  },
  distribution: [
    {
      '@type': 'DataDownload',
      encodingFormat: 'application/json',
      contentUrl: 'https://theseptic.guide/reviews/best-septic-system-alarms',
    },
  ],
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Alarm Type', description: 'Indoor, outdoor, or WiFi-enabled' },
    { '@type': 'PropertyValue', name: 'Alert Method', description: 'Horn, LED, beacon, or WiFi notification' },
    { '@type': 'PropertyValue', name: 'Float Length', unitText: 'feet', description: 'Length of float switch cable' },
    { '@type': 'PropertyValue', name: 'Price Range', unitText: 'USD', description: 'Typical retail price range' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Septic System Alarms (2026): 5 Picks That Prevent Expensive Disasters',
  description: 'A septic system alarm costs $30 to $200 and warns you when water levels get dangerously high. Compare the 5 best septic alarms.',
  image: 'https://theseptic.guide/septicalarms.jpg',
  author: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
  publisher: { '@type': 'Organization', name: 'The Septic Guide', url: 'https://theseptic.guide' },
  datePublished: '2026-03-09',
  dateModified: '2026-03-09',
}

export default function BestSepticAlarmsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <Image src="/septicalarms.jpg" alt="Best Septic System Alarms 2026" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-[2px] bg-amber-500" />
            <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase">Review</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Best Septic System Alarms (2026)
            <span className="text-amber-500 block">5 Picks That Prevent Expensive Disasters</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            A septic system alarm costs $30 to $200 and warns you when the water level in your tank or pump chamber gets dangerously high. A $50 alarm can prevent a $5,000 to $15,000 cleanup.
          </p>
          <div className="flex items-center mt-6 space-x-4">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm">SG</div>
            <div>
              <p className="font-semibold">The Septic Guide</p>
              <p className="text-sm text-gray-300">Updated Mar 2026 &middot; 22 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-4 py-16">

        {/* Who Needs a Septic Alarm */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Needs a Septic Alarm</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not every septic system requires an alarm, but many do and most would benefit from one.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
            <h3 className="text-red-600 font-bold text-lg mb-3">Required by Code</h3>
            <p className="text-gray-700 leading-relaxed">
              If you have an aerobic treatment unit (ATU), a pump chamber, a dosing system, or a mound system with a lift pump, your local health department almost certainly requires a high-water alarm. These systems depend on mechanical pumps to move effluent. When the pump fails, the tank overflows. An alarm is your only warning. If your system has any kind of pump, you need an alarm. Full stop.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h3 className="text-amber-600 font-bold text-lg mb-3">Not Required but Smart</h3>
            <p className="text-gray-700 leading-relaxed">
              Conventional gravity-fed septic systems do not typically require an alarm by code. But if your tank has ever backed up, if your drainfield is aging, or if you live in an area with heavy seasonal rain, an alarm is cheap insurance. It alerts you to rising water levels before they become an emergency. For $30 to $50 you get days of advance warning instead of a surprise sewage backup.
            </p>
          </div>
        </section>

        {/* How Septic Alarms Work */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Septic Alarms Work</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every septic alarm has the same basic components: a float switch inside the tank, a wire running to a control box outside the tank, and an alert system (horn, light, or both).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The float switch hangs inside the tank or pump chamber at a height you set. When the water level rises above that point, the float tips and closes an electrical circuit. That circuit triggers the alarm.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The control box is mounted on an exterior wall, a post near the tank, or inside the house depending on the model. When it receives the signal from the float, it activates a horn and a warning light. Most models let you silence the horn while the light stays on as a reminder.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
            <h3 className="text-amber-600 font-bold text-lg mb-3">&#128161; Setting the Trigger Height</h3>
            <p className="text-gray-700">The float should be positioned a few inches above the normal operating level but well below the inlet pipe. This gives you a warning window of several hours to a couple of days before the tank actually overflows. Your septic professional can set this during a routine pumping visit.</p>
          </div>
        </section>

        {/* What Features Matter */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Features Actually Matter</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-amber-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">Why It Matters</th>
                  <th className="px-4 py-3 font-semibold">What to Look For</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 divide-y divide-gray-200">
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Weatherproof rating</td><td className="px-4 py-3">Outdoor installations need water resistance</td><td className="px-4 py-3">NEMA 4X or IP67 minimum</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Float switch length</td><td className="px-4 py-3">Must reach correct depth inside the tank</td><td className="px-4 py-3">10 ft minimum, 15&#8211;20 ft for deep tanks</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Audible alarm volume</td><td className="px-4 py-3">You need to hear it from inside the house</td><td className="px-4 py-3">90 dB minimum, 110 dB preferred</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Visual indicator</td><td className="px-4 py-3">See alarm status at a glance, day or night</td><td className="px-4 py-3">Red LED or beacon that stays on</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Battery backup</td><td className="px-4 py-3">Power outages are when pumps fail most often</td><td className="px-4 py-3">9V or AA battery backup recommended</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Auto-reset</td><td className="px-4 py-3">Clears itself once water drops below float</td><td className="px-4 py-3">Saves a trip outside to manually reset</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">WiFi or cellular alerts</td><td className="px-4 py-3">Notifies you when you are away from home</td><td className="px-4 py-3">Important for vacation homes or rentals</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4">What does not matter much: brand name alone, enclosure color, smart home integration beyond basic notifications, and multi-zone monitoring unless you have multiple pump chambers.</p>
        </section>

        {/* Quick Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-amber-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Pick</th>
                  <th className="px-4 py-3 font-semibold">Product</th>
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">Alert Method</th>
                  <th className="px-4 py-3 font-semibold">Float Length</th>
                  <th className="px-4 py-3 font-semibold">Price Range</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 divide-y divide-gray-200">
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Best Overall</td><td className="px-4 py-3">SJE Rhombus Tank Alert XT</td><td className="px-4 py-3">Indoor/outdoor hardwired</td><td className="px-4 py-3">Horn + red beacon</td><td className="px-4 py-3">15 ft</td><td className="px-4 py-3">$130&#8211;$180</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Best Indoor</td><td className="px-4 py-3">Zoeller A-Pak Alarm</td><td className="px-4 py-3">Indoor hardwired</td><td className="px-4 py-3">Horn + LED</td><td className="px-4 py-3">15 ft</td><td className="px-4 py-3">$80&#8211;$120</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Best Budget</td><td className="px-4 py-3">Briidea High Water Alarm</td><td className="px-4 py-3">Indoor/outdoor hardwired</td><td className="px-4 py-3">110 dB horn + LED</td><td className="px-4 py-3">10 ft</td><td className="px-4 py-3">$30&#8211;$50</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Best WiFi</td><td className="px-4 py-3">Sump Alarm WiFi Sensor</td><td className="px-4 py-3">Indoor/outdoor WiFi</td><td className="px-4 py-3">90 dB horn + email/text</td><td className="px-4 py-3">20 ft</td><td className="px-4 py-3">$130&#8211;$200</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Best All-in-One</td><td className="px-4 py-3">CINVEI Control Panel</td><td className="px-4 py-3">Indoor/outdoor hardwired</td><td className="px-4 py-3">110 dB horn + lights</td><td className="px-4 py-3">10 ft</td><td className="px-4 py-3">$60&#8211;$90</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Reviews */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Reviews</h2>

          {/* Product 1 - SJE Rhombus */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-500 text-black font-bold px-3 py-1 rounded-full text-sm">#1</span>
              <h3 className="text-2xl font-bold text-gray-900">SJE Rhombus Tank Alert XT</h3>
            </div>
            <p className="text-amber-600 font-semibold mb-2">Best Overall &middot; $130&#8211;$180</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              SJE Rhombus is the brand that septic installers use. The Tank Alert line has been the industry standard for decades, and the XT model is the workhorse. The entire upper half of the enclosure illuminates red in an alarm condition, making it visible from a distance in any lighting. The horn sounds immediately and can be silenced while the beacon stays on until the water level drops and the alarm auto-resets.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The enclosure doubles as a junction box with pre-mounted terminal blocks, which means your electrician can splice pump power, pump switch, and alarm power in the same box. This reduces the number of boxes on your wall and keeps wiring clean.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="text-green-600 font-semibold mb-2">Pros</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>&#10003; Industry standard trusted by septic installers</li>
                  <li>&#10003; NEMA 3R weatherproof enclosure</li>
                  <li>&#10003; Entire top half illuminates red as beacon</li>
                  <li>&#10003; Auto-reset when water level drops</li>
                  <li>&#10003; Doubles as junction box for clean wiring</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="text-red-600 font-semibold mb-2">Cons</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>&#10005; No WiFi or smartphone notifications</li>
                  <li>&#10005; Requires 120V circuit and electrician</li>
                  <li>&#10005; No battery backup</li>
                  <li>&#10005; Proprietary SJE float switch for replacements</li>
                </ul>
              </div>
            </div>
            <a href="https://amzn.to/4bafACJ" target="_blank" rel="nofollow noopener noreferrer" className="mt-6 block w-full text-center bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-6 rounded-full transition-colors">Check Price on Amazon</a>
          </div>

          {/* Product 2 - Zoeller */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-500 text-black font-bold px-3 py-1 rounded-full text-sm">#2</span>
              <h3 className="text-2xl font-bold text-gray-900">Zoeller A-Pak Indoor Alarm</h3>
            </div>
            <p className="text-amber-600 font-semibold mb-2">Best Indoor Alarm &middot; $80&#8211;$120</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Zoeller is one of the most recognized names in residential wastewater, and the A-Pak is their flagship alarm for homeowners. It mounts on a basement or utility room wall and connects to a float switch that runs into the tank or pump chamber. The alarm auto-resets when the condition clears.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The battery backup is the standout feature. When the power goes out, which is exactly when your septic pump stops working, the A-Pak continues monitoring on two AA batteries. A low-battery chirp tells you when the batteries need replacing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="text-green-600 font-semibold mb-2">Pros</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>&#10003; AA battery backup for power outages</li>
                  <li>&#10003; Auto-reset when condition clears</li>
                  <li>&#10003; 15 ft float cord</li>
                  <li>&#10003; 3-year warranty (5 years on Z-Control)</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="text-red-600 font-semibold mb-2">Cons</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>&#10005; Indoor only, not weatherproof</li>
                  <li>&#10005; Must route float wire into house</li>
                  <li>&#10005; WiFi only on pricier Z-Control models</li>
                </ul>
              </div>
            </div>
            <a href="https://amzn.to/4szD4Ir" target="_blank" rel="nofollow noopener noreferrer" className="mt-6 block w-full text-center bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-6 rounded-full transition-colors">Check Price on Amazon</a>
          </div>

          {/* Product 3 - Briidea */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-500 text-black font-bold px-3 py-1 rounded-full text-sm">#3</span>
              <h3 className="text-2xl font-bold text-gray-900">Briidea High Water Septic Alarm</h3>
            </div>
            <p className="text-amber-600 font-semibold mb-2">Best Budget Pick &middot; $30&#8211;$50</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Briidea alarm delivers the two things that matter most, a loud horn and a reliable float switch, at a fraction of the price of the professional brands. The 110 dB alarm is louder than both the SJE Rhombus and the Zoeller. The IP67-rated enclosure handles rain, snow, and temperature extremes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Installation is plug-and-play: mount the box, drop the float into the tank at the height you want, and plug it in. No electrician needed. The 2024 and newer models include a test button and a green power indicator light.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="text-green-600 font-semibold mb-2">Pros</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>&#10003; 110 dB alarm &mdash; loudest on this list</li>
                  <li>&#10003; IP67 weatherproof enclosure</li>
                  <li>&#10003; Plug-and-play, no electrician needed</li>
                  <li>&#10003; Under $50 with test button included</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="text-red-600 font-semibold mb-2">Cons</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>&#10005; 10 ft float cable (shorter than others)</li>
                  <li>&#10005; No battery backup</li>
                  <li>&#10005; No WiFi or remote notifications</li>
                </ul>
              </div>
            </div>
            <a href="https://amzn.to/40nBCgt" target="_blank" rel="nofollow noopener noreferrer" className="mt-6 block w-full text-center bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-6 rounded-full transition-colors">Check Price on Amazon</a>
          </div>

          {/* Product 4 - Sump Alarm WiFi */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-500 text-black font-bold px-3 py-1 rounded-full text-sm">#4</span>
              <h3 className="text-2xl font-bold text-gray-900">Sump Alarm WiFi Septic Sensor</h3>
            </div>
            <p className="text-amber-600 font-semibold mb-2">Best WiFi Alarm &middot; $130&#8211;$200</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sump Alarm is a St. Louis-based company that makes every unit in the USA. Their WiFi-enabled septic alarm is the first outdoor-rated WiFi high-water alarm on the market. The alarm pairs with your home WiFi and sends free, unlimited email alerts when the float triggers. For $1.99 per month you can add text and voice call alerts.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The server-side backup is what separates this from cheaper WiFi alarms. If your power goes out or your internet drops, the Sump Alarm server detects the disconnect and notifies you. The 20-foot heavy-duty float is the longest standard float on this list.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="text-green-600 font-semibold mb-2">Pros</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>&#10003; Free unlimited email alerts</li>
                  <li>&#10003; Server-side backup detects power/internet loss</li>
                  <li>&#10003; 20 ft heavy-duty float (longest on list)</li>
                  <li>&#10003; Made in USA, IP67 weatherproof</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="text-red-600 font-semibold mb-2">Cons</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>&#10005; Requires 2.4 GHz WiFi at mounting location</li>
                  <li>&#10005; 90 dB horn (quieter than Briidea/CINVEI)</li>
                  <li>&#10005; Text/voice alerts require $1.99/month subscription</li>
                </ul>
              </div>
            </div>
            <a href="https://amzn.to/4bgHflJ" target="_blank" rel="nofollow noopener noreferrer" className="mt-6 block w-full text-center bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-6 rounded-full transition-colors">Check Price on Amazon</a>
          </div>

          {/* Product 5 - CINVEI */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-500 text-black font-bold px-3 py-1 rounded-full text-sm">#5</span>
              <h3 className="text-2xl font-bold text-gray-900">CINVEI Septic Control Panel</h3>
            </div>
            <p className="text-amber-600 font-semibold mb-2">Best All-in-One &middot; $60&#8211;$90</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The CINVEI is not just an alarm. It is a control panel that combines a high-water alarm, a pump circuit breaker, and a float switch in a single weatherproof enclosure. For homeowners installing a new pump chamber or replacing an old alarm panel, this is a complete solution out of the box.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The built-in pump circuit breaker is the differentiator. If your pump draws too much current, a sign of a failing motor or a jammed impeller, the breaker trips before the pump burns out. This protects a $500 to $1,500 pump from damage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="text-green-600 font-semibold mb-2">Pros</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>&#10003; Combined alarm + pump circuit breaker</li>
                  <li>&#10003; 110 dB alarm with flashing lights</li>
                  <li>&#10003; IP67 weatherproof, float switch included</li>
                  <li>&#10003; Protects pump from overcurrent damage</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="text-red-600 font-semibold mb-2">Cons</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>&#10005; Requires electrician for installation</li>
                  <li>&#10005; 10 ft float cable may be short</li>
                  <li>&#10005; No WiFi or remote notifications</li>
                  <li>&#10005; Basic included float switch</li>
                </ul>
              </div>
            </div>
            <a href="https://amzn.to/4upfb8y" target="_blank" rel="nofollow noopener noreferrer" className="mt-6 block w-full text-center bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-6 rounded-full transition-colors">Check Price on Amazon</a>
          </div>
        </section>

        {/* When Your Alarm Goes Off */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When Your Alarm Goes Off: What to Do</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">1</div>
              <div>
                <h3 className="text-gray-900 font-semibold text-lg">Silence the Horn</h3>
                <p className="text-gray-700">Press the silence or mute button on the control box. The light should remain on. This does not fix the problem. It stops the noise so you can think.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">2</div>
              <div>
                <h3 className="text-gray-900 font-semibold text-lg">Reduce Water Use Immediately</h3>
                <p className="text-gray-700">Stop all laundry, dishwashing, and showers. Every gallon of water you send down the drain makes the situation worse. This is the single most important thing you can do in the first 10 minutes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">3</div>
              <div>
                <h3 className="text-gray-900 font-semibold text-lg">Check the Circuit Breaker</h3>
                <p className="text-gray-700">If you have a pump-based system, check whether the pump&#39;s circuit breaker has tripped. If it has, reset it and listen for the pump to kick on. If the breaker trips again immediately, do not keep resetting it. The pump may have a short or jammed impeller. Call a professional.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">4</div>
              <div>
                <h3 className="text-gray-900 font-semibold text-lg">Check for Recent Heavy Rain</h3>
                <p className="text-gray-700">If it has rained heavily in the past 24 to 48 hours, your drainfield may be temporarily saturated. Reduce water use and wait. If it happens repeatedly after rain, you have a groundwater infiltration problem that needs professional attention.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">5</div>
              <div>
                <h3 className="text-gray-900 font-semibold text-lg">Check When You Last Pumped</h3>
                <p className="text-gray-700">If it has been more than 3 years since your last septic tank pumping, an overdue pump-out may be the cause. Schedule an emergency pumping. The typical cost is $300 to $600.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">6</div>
              <div>
                <h3 className="text-gray-900 font-semibold text-lg">Call a Septic Professional</h3>
                <p className="text-gray-700">If the breaker is not tripped, the pump sounds normal or will not turn on, and you have not had recent heavy rain, something more serious is going on. Expect to pay $150 to $300 for a service call.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation: DIY or Hire a Pro</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-amber-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Situation</th>
                  <th className="px-4 py-3 font-semibold">DIY?</th>
                  <th className="px-4 py-3 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 divide-y divide-gray-200">
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Standalone alarm with power cord (Briidea)</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">Plug-and-play. Mount the box, drop the float, plug it in.</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">WiFi alarm (Sump Alarm WiFi)</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">Same as above plus WiFi pairing. Follow the app instructions.</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Hardwired alarm (SJE Rhombus, Zoeller)</td><td className="px-4 py-3">Maybe</td><td className="px-4 py-3">Requires 120V circuit. Hire an electrician ($75&#8211;$150) if not comfortable.</td></tr>
                <tr><td className="px-4 py-3 font-medium text-gray-900">Control panel with pump breaker (CINVEI)</td><td className="px-4 py-3">Hire a pro</td><td className="px-4 py-3">Involves wiring pump power. Incorrect wiring can damage pump or create fire hazard ($100&#8211;$200).</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
            <h3 className="text-amber-600 font-bold text-lg mb-3">&#128161; Float Switch Placement</h3>
            <p className="text-gray-700">Set the float so it triggers when the water level is 2 to 4 inches above the normal operating level but at least 6 inches below the tank&#39;s inlet pipe. This gives you a comfortable warning window without triggering false alarms.</p>
          </div>
        </section>

        {/* Maintenance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Alarm Maintenance: The 5-Minute Annual Checklist</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-gray-900 font-semibold">Test the alarm</h3><p className="text-gray-700 text-sm">Press the test button and confirm you hear the horn and see the warning light.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-gray-900 font-semibold">Replace backup batteries</h3><p className="text-gray-700 text-sm">If your alarm has battery backup (Zoeller A-Pak), replace batteries annually. Batteries degrade faster in humid environments near septic tanks.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-gray-900 font-semibold">Inspect the float switch</h3><p className="text-gray-700 text-sm">Manually raise the float and confirm the alarm triggers. Check for debris, grease buildup, or damage. Clean with warm water if needed.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-gray-900 font-semibold">Check the wire</h3><p className="text-gray-700 text-sm">Follow the wire from the tank to the control box. Look for damage from lawn mowers, rodents, UV degradation, or frost heave. A severed wire is the most common reason an alarm fails to trigger.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-gray-900 font-semibold">Verify WiFi connection (if applicable)</h3><p className="text-gray-700 text-sm">Trigger the float and confirm you receive an email alert. Verify the server-side backup is active by checking the Sump Alarm dashboard.</p></div>
          </div>
          <p className="text-gray-500 text-sm mt-4">Do this every fall before winter sets in. Power outages and frozen ground are most common in winter, which is exactly when you need your alarm working.</p>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq: any, index: number) => (
              <details key={index} className="group bg-gray-50 border border-gray-200 rounded-xl">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-gray-900 font-semibold hover:text-amber-600 transition-colors">
                  {faq.name}
                  <span className="ml-4 text-amber-500 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Glossary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Glossary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Float Switch</h3><p className="text-gray-500 text-sm">A buoyant device that rises with water level and closes an electrical circuit at a preset height, triggering the alarm.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">NEMA 4X</h3><p className="text-gray-500 text-sm">A rating for enclosures that are watertight, dustproof, and corrosion-resistant. The standard for outdoor septic alarm enclosures.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">IP67</h3><p className="text-gray-500 text-sm">An Ingress Protection rating meaning the enclosure is dustproof and can withstand temporary submersion in water up to 1 meter deep.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Effluent Pump</h3><p className="text-gray-500 text-sm">The pump inside a septic pump chamber that moves treated wastewater from the tank to the drainfield. When this pump fails, the alarm triggers.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Auto-Reset</h3><p className="text-gray-500 text-sm">An alarm feature that automatically clears the alert when the water level drops below the float switch trigger point.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Control Panel</h3><p className="text-gray-500 text-sm">An enclosure that combines alarm functions with pump power management, including circuit breakers and pump switch connections.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Server-Side Backup</h3><p className="text-gray-500 text-sm">A cloud-based monitoring feature (Sump Alarm WiFi) that detects when the alarm loses power or internet and sends you a notification.</p></div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4"><h3 className="text-amber-600 font-semibold mb-1">Auxiliary Contacts</h3><p className="text-gray-500 text-sm">Dry contact terminals on the alarm panel that allow connection to secondary devices like auto-dialers or home security systems.</p></div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/reviews/best-septic-tank-treatments" className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-amber-400 transition-colors">
              <div className="relative h-48">
                <Image src="/septicsavor.jpg" alt="Best Septic Tank Treatments" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <p className="text-amber-600 text-sm font-semibold mb-1">Review</p>
                <h3 className="text-gray-900 font-bold group-hover:text-amber-600 transition-colors">Best Septic Tank Treatments 2025</h3>
              </div>
            </Link>
            <Link href="/problems/tank-backing-up" className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-amber-400 transition-colors">
              <div className="relative h-48">
                <Image src="/1.jpg" alt="Septic Tank Backing Up" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <p className="text-amber-600 text-sm font-semibold mb-1">Problem</p>
                <h3 className="text-gray-900 font-bold group-hover:text-amber-600 transition-colors">Septic Tank Backing Up? Causes &amp; Fixes</h3>
              </div>
            </Link>
            <Link href="/cost-guides/septic-system-repair-cost" className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-amber-400 transition-colors">
              <div className="relative h-48">
                <Image src="/septic repair.jpg" alt="Septic Repair Cost" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <p className="text-amber-600 text-sm font-semibold mb-1">Cost Guide</p>
                <h3 className="text-gray-900 font-bold group-hover:text-amber-600 transition-colors">Septic System Repair Cost (2026)</h3>
              </div>
            </Link>
          </div>
        </section>
      </article>

      {/* CTA */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Need Help With Your Septic System?</h2>
          <p className="text-black/80 text-lg mb-8">Connect with certified septic professionals in your area for inspections, pumping, and repairs.</p>
          <Link href="/" className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-900 transition-colors">Find Local Septic Pros</Link>
        </div>
      </section>
    </>
  )
}