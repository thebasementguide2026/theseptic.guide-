import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'

const categories = [
  { label: 'Guides', href: '/guides', bg: '#E0E6EC', color: '#2C3E50' },
  { label: 'Cost Guides', href: '/cost-guides', bg: '#F3EAE0', color: '#8B5E3C' },
  { label: 'Reviews', href: '/reviews', bg: '#E0ECDF', color: '#4A8C5C' },
  { label: 'Problems', href: '/problems', bg: '#F8E0D8', color: '#B5382A' },
  { label: 'Comparisons', href: '/comparisons', bg: '#E8E0F0', color: '#6B5B8A' },
  { label: 'Buying a Home', href: '/guides/buying-home-with-septic', bg: '#E0E8F0', color: '#3A5A7C' },
]

const featuredArticles = [
  {
    title: 'Complete Guide to Septic Systems',
    excerpt: 'Everything homeowners need to know about septic systems, from how they work to maintenance schedules.',
    href: '/guides/complete-septic-guide',
    badge: 'Guide',
    badgeBg: '#E0E6EC',
    badgeColor: '#2C3E50',
  },
  {
    title: 'Septic Tank Pumping Cost 2026',
    excerpt: 'Average costs for septic tank pumping by tank size, location, and frequency.',
    href: '/cost-guides/pumping-cost',
    badge: 'Cost Guide',
    badgeBg: '#F3EAE0',
    badgeColor: '#8B5E3C',
  },
  {
    title: 'Signs Your Drainfield Is Failing',
    excerpt: 'Learn the warning signs of drainfield failure and what to do before it becomes an emergency.',
    href: '/problems/drainfield-failing',
    badge: 'Problem',
    badgeBg: '#F8E0D8',
    badgeColor: '#B5382A',
  },
  {
    title: 'Best Septic Tank Treatments',
    excerpt: 'Our top picks for septic tank treatments and additives that actually work.',
    href: '/reviews/best-septic-treatments',
    badge: 'Review',
    badgeBg: '#E0ECDF',
    badgeColor: '#4A8C5C',
  },
  {
    title: 'Septic System Installation Cost',
    excerpt: 'Complete breakdown of septic installation costs by system type and soil conditions.',
    href: '/cost-guides/installation-cost',
    badge: 'Cost Guide',
    badgeBg: '#F3EAE0',
    badgeColor: '#8B5E3C',
  },
  {
    title: 'Concrete vs Plastic vs Fiberglass Tanks',
    excerpt: 'Comparing the three main septic tank materials to help you choose the right one.',
    href: '/comparisons/concrete-vs-plastic-vs-fiberglass',
    badge: 'Comparison',
    badgeBg: '#E8E0F0',
    badgeColor: '#6B5B8A',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Expert Septic System Advice for Homeowners
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-8">
            Independent resource for septic system maintenance, repair, and cost guidance. Written for homeowners, not contractors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote" className="btn-primary text-lg px-8 py-3">
              Get Free Quotes
            </Link>
            <Link href="/guides/complete-septic-guide" className="btn-ghost text-lg px-8 py-3 border-[#C8875F] text-[#C8875F] hover:bg-[#C8875F] hover:text-white">
              Read Our Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Category Quick Links */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                style={{ backgroundColor: cat.bg, color: cat.color }}
                className="rounded-lg py-3 px-4 text-center text-sm font-bold hover:opacity-80 transition-opacity"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-extrabold text-[#2C3E50] mb-8">Popular Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow"
              >
                <span
                  style={{ backgroundColor: article.badgeBg, color: article.badgeColor }}
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                >
                  {article.badge}
                </span>
                <h3 className="text-lg font-bold text-[#2C3E50] mb-2">{article.title}</h3>
                <p className="text-sm text-[#5A6B7A]">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section style={{ backgroundColor: '#2C3E50' }} className="py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white text-center mb-2">Get Free Septic Quotes</h2>
            <p className="text-center text-white/60 mb-8">Connect with qualified septic professionals in your area.</p>
            <div className="bg-white rounded-xl p-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
