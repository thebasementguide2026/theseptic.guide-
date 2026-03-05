import Link from 'next/link'
import Image from 'next/image'
import { articles } from '@/lib/articles'
import QuoteForm from '@/components/QuoteForm'

const categories = [
  { label: '🔧 Maintenance', href: '/guides/maintenance-guide' },
  { label: '💰 Cost Guides', href: '/cost-guides' },
  { label: '⭐ Reviews', href: '/reviews' },
  { label: '⚠️ Problems', href: '/problems' },
  { label: '🏡 Buying a Home', href: '/guides/buying-home-with-septic' },
  { label: '📖 Start Here', href: '/articles/complete-septic-guide' },
]


const getArticleHref = (slug: string) => slug.startsWith('problems/') ? `/${slug}` : `/articles/${slug}`
export default function HomePage() {
  const featured = articles.find((a) => a.slug === 'complete-septic-guide')
  const sidebarArticles = articles.filter((a) => a.slug !== 'complete-septic-guide')

  return (
    <>
      {/* Publisher-style Hero: Featured + Sidebar */}
      <section className="container-custom py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main featured story */}
          {featured && (
            <Link href={getArticleHref(featured.slug)} className="lg:col-span-2 group relative rounded-xl overflow-hidden block" style={{ minHeight: '400px' }}>
              {featured.image && (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: '#E0E6EC', color: '#2C3E50' }}>
                  {featured.category.toUpperCase()}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">
                  {featured.title}
                </h2>
                <p className="text-sm text-gray-200 line-clamp-2">
                  {featured.description}
                </p>
              </div>
            </Link>
          )}

          {/* Sidebar stories */}
          <div className="space-y-4">
            {sidebarArticles.map((article) => (
              <Link key={article.slug} href={getArticleHref(article.slug)} className="flex gap-4 group">
                {article.image && (
                  <div className="relative w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold uppercase" style={{ color: '#8B5E3C' }}>
                    {article.category}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#2C3E50] line-clamp-2 mt-0.5">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation Bar */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="container-custom py-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-full border border-gray-200 hover:border-[#2C3E50] hover:text-[#2C3E50] transition-colors shadow-sm"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="container-custom py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Popular Guides</h2>
          <Link href="/guides" className="text-sm font-medium text-[#2C3E50] hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.slug} href={getArticleHref(article.slug)} className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              {article.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-md" style={{ backgroundColor: '#E0E6EC', color: '#2C3E50' }}>
                    {article.category.toUpperCase()}
                  </span>
                </div>
              )}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 group-hover:text-[#2C3E50] mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cost Guides */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Cost Guides</h2>
            <Link href="/cost-guides" className="text-sm font-medium text-[#2C3E50] hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles
              .filter((a) => a.category === 'Cost Guide')
              .map((article) => (
                <Link key={article.slug} href={getArticleHref(article.slug)} className="flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow group">
                  <span className="text-2xl">💰</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#2C3E50]">{article.title}</h3>
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* About + Quote Form */}
      <section className="container-custom py-12" id="get-quotes">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About The Septic Guide</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Written by homeowners who have dealt with every septic problem imaginable. No fluff, no contractor sales pitches — just honest, detailed guides to help you make smart decisions about maintaining, repairing, and understanding your septic system.
            </p>
            <Link href="/about" className="text-[#2C3E50] font-medium hover:underline">
              Learn more about us →
            </Link>
          </div>
          <div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
