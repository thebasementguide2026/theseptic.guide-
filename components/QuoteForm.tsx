'use client'
import { useState } from 'react'

const projectTypes = [
  'Septic Tank Pumping',
  'Septic System Inspection',
  'Septic System Installation',
  'Septic System Repair',
  'Drainfield Replacement',
  'Septic Tank Replacement',
  'Aerobic System Service',
  'Septic to Sewer Conversion',
  'Other Septic Service',
]

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zip: '',
    projectType: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">{"\u2705"}</div>
        <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">Thank You!</h3>
        <p className="text-[#5A6B7A]">We&apos;ll connect you with qualified septic professionals in your area.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#2C3E50] mb-1">First Name *</label>
          <input
            type="text" name="firstName" required
            value={formData.firstName} onChange={handleChange}
            className="w-full px-4 py-3 border border-[#D5D0CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8875F] focus:border-transparent"
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2C3E50] mb-1">Last Name *</label>
          <input
            type="text" name="lastName" required
            value={formData.lastName} onChange={handleChange}
            className="w-full px-4 py-3 border border-[#D5D0CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8875F] focus:border-transparent"
            placeholder="Smith"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#2C3E50] mb-1">Email *</label>
          <input
            type="email" name="email" required
            value={formData.email} onChange={handleChange}
            className="w-full px-4 py-3 border border-[#D5D0CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8875F] focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2C3E50] mb-1">Phone Number</label>
          <input
            type="tel" name="phone"
            value={formData.phone} onChange={handleChange}
            className="w-full px-4 py-3 border border-[#D5D0CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8875F] focus:border-transparent"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#2C3E50] mb-1">ZIP Code *</label>
          <input
            type="text" name="zip" required
            value={formData.zip} onChange={handleChange}
            className="w-full px-4 py-3 border border-[#D5D0CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8875F] focus:border-transparent"
            placeholder="12345"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2C3E50] mb-1">Project Type *</label>
          <select
            name="projectType" required
            value={formData.projectType} onChange={handleChange}
            className="w-full px-4 py-3 border border-[#D5D0CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8875F] focus:border-transparent bg-white"
          >
            <option value="">Select a service...</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#2C3E50] mb-1">Brief Description (optional)</label>
        <textarea
          name="description" rows={3}
          value={formData.description} onChange={handleChange}
          className="w-full px-4 py-3 border border-[#D5D0CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8875F] focus:border-transparent"
          placeholder="Tell us about your septic needs..."
        />
      </div>
      <button type="submit" className="btn-primary w-full text-center py-3 text-lg">
        Get Free Quotes
      </button>
    </form>
  )
}
