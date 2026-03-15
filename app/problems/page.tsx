import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Septic System Problems | The Septic Guide',
  description: 'Diagnose and solve common septic system problems. Expert advice for homeowners.',
}

const problems = [
  { title: 'Septic Tank Backing Up Into House', href: '/problems/tank-backing-up', description: 'What to do when sewage backs up and how to prevent it.' },
  { title: 'Septic Smell in Your Yard', href: '/problems/septic-smell-in-yard', description: 'Causes and solutions for foul odors around your septic system.' },
  { title: 'Signs Your Drainfield Is Failing', href: '/problems/drainfield-failing', description: 'Warning signs and repair options for failing drainfields.' },
  { title: 'Septic Overflow After Rain', href: '/problems/overflow-after-rain', description: 'Why heavy rain causes septic problems and how to fix it.' },
  { title: 'Slow Drains with Septic', href: '/problems/slow-drains', description: 'Troubleshooting slow drains in homes with septic systems.' },
  { title: 'Septic Smell Inside the House', href: '/problems/septic-smell-inside-house', description: 'Hydrogen sulfide and methane gas causes, diagnosis, and fixes for indoor septic odors.' },
]

export default function ProblemsPage() {
  return (
    <>
            <Breadcrumbs items={[{ label: 'Problems' }]} />
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-extrabold mb-4">Septic System Problems</h1>
          <p className="text-lg opacity-70 max-w-2xl">Diagnose and solve common septic system issues with our expert guides.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <Link key={problem.href} href={problem.href} className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3" style={{ backgroundColor: '#F8E0D8', color: '#B5382A' }}>Problem</span>
                <h2 className="text-lg font-bold text-[#2C3E50] mb-2">{problem.title}</h2>
                <p className="text-sm text-[#5A6B7A]">{problem.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
