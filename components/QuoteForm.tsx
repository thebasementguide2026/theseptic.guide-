'use client'
import { useState } from 'react'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    serviceType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // API integration will be added later
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-brand-green-light/20 border border-brand-green rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">\u2705</div>
        <h3 className="text-2xl font-bold text-brand-green-dark mb-2">Thank You!</h3>
        <p className="text-gray-600">We've received your request. A qualified septic professional will contact you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-brand-green-dark mb-6">Get Your Free Quote</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green focus:border-transparent"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green focus:border-transparent"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code *</label>
          <input
            type="text"
            required
            value={formData.zip}
            onChange={(e) => setFormData({...formData, zip: e.target.value})}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green focus:border-transparent"
            placeholder="12345"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed *</label>
        <select
          required
          value={formData.serviceType}
          onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green focus:border-transparent"
        >
          <option value="">Select a service...</option>
          <option value="installation">New Septic Installation</option>
          <option value="pumping">Septic Pumping</option>
          <option value="inspection">Septic Inspection</option>
          <option value="repair">Septic Repair</option>
          <option value="drain-field">Drain Field Service</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green focus:border-transparent"
          placeholder="Describe your septic needs..."
        />
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-brand-green text-white py-3 rounded-lg font-semibold hover:bg-brand-green-dark transition-colors"
      >
        Submit Quote Request
      </button>
      <p className="mt-3 text-xs text-gray-500 text-center">Free, no-obligation quotes from qualified professionals.</p>
    </form>
  )
}
