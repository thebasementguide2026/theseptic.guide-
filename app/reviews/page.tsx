import Link from 'next/link'

export const metadata = {
  title: 'Septic Product Reviews | The Septic Guide',
  description: 'Honest, independent reviews of septic products including treatments, risers, alarms, and more.',
}

const reviews = [
  { title: 'Best Septic Tank Treatments', href: '/reviews/best-septic-tank-treatments', description: 'Top-rated septic treatments and additives that actually help your system.' },
  { title: 'Best Tank Risers', href: '/reviews/best-tank-risers', description: 'Make pumping easier with our top riser picks.' },
  { title: 'Best System Alarms', href: '/reviews/best-system-alarms', description: 'Early warning alarms to prevent septic emergencies.' },
  { title: 'Best Toilet Paper for Septic', href: '/reviews/best-toilet-paper-for-septic', description: 'Septic-safe toilet paper that dissolves quickly.' },
  { title: 'Best Drain Cleaners', href: '/reviews/best-drain-cleaners', description: 'Septic-safe drain cleaners for slow drains.' },
]

export default function ReviewsPage() {
  return (
    <>
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-extrabold mb-4">Septic Product Reviews</h1>
          <p className="text-lg opacity-70 max-w-2xl">Honest, independent reviews of septic products. No sponsored content.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Link key={review.href} href={review.href} className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3" style={{ backgroundColor: '#E0ECDF', color: '#4A8C5C' }}>Review</span>
                <h2 className="text-lg font-bold text-[#2C3E50] mb-2">{review.title}</h2>
                <p className="text-sm text-[#5A6B7A]">{review.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
