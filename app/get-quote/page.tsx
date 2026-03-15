import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Get a Free Septic Quote | The Septic Guide',
  description: 'Connect with qualified septic professionals in your area. Get free, no-obligation quotes for pumping, installation, repair, and more.',
}

export default function GetQuotePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Get a Free Quote' }]} />
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-extrabold mb-4">Get Your Free Septic Quote</h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">Fill out the form below and we&apos;ll connect you with qualified septic professionals in your area.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom max-w-2xl">
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#E8E4DE]">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
