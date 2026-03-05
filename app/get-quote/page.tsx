import QuoteForm from '@/components/QuoteForm'

export const metadata = {
  title: 'Get a Free Septic Quote | The Septic Guide',
  description: 'Connect with qualified septic professionals in your area. Get free, no-obligation quotes for installation, pumping, repair, and more.',
}

export default function GetQuotePage() {
  return (
    <section className="py-16 bg-brand-neutral">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brand-green-dark mb-4">Get Your Free Septic Quote</h1>
          <p className="text-gray-600">Fill out the form below and we'll connect you with qualified septic professionals in your area.</p>
        </div>
        <QuoteForm />
      </div>
    </section>
  )
}
