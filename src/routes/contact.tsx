import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Building2, Phone, Mail, MapPin, ChevronLeft, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  head: () => ({
    meta: [{ title: 'Contact Us | Saint Johns Premier Management, LLC' }],
  }),
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function ContactPage() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Nav */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-500 hover:text-[#1a3a5c] transition-colors text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="flex items-center gap-3 ml-2">
            <div className="w-9 h-9 bg-[#1a3a5c] rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-[#1a3a5c] text-sm md:text-base">
              Saint Johns Premier Management, LLC
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-[#1a3a5c] mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Have questions about our services or ready to get started? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Info panel */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#1a3a5c] mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Phone</div>
                    <a href="tel:+19049210358" className="text-gray-600 hover:text-[#1a3a5c] transition-colors">
                      (904) 921-0358
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Email</div>
                    <div className="text-gray-600 break-all">info@saintjohnspremiermgmt.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Location</div>
                    <div className="text-gray-600">Saint Johns County, FL</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a3a5c] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Business Hours</h3>
              <div className="space-y-1 text-blue-100 text-sm">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span>9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 text-sm text-blue-200">
                24/7 emergency maintenance line available for current clients.
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-9 h-9 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Received!</h3>
                <p className="text-gray-600 mb-8">
                  Thank you for reaching out. A member of our team will get back to you
                  within one business day.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-[#1a3a5c] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#142d47] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                {/* Honeypot */}
                <div className="hidden">
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={fields.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]/30 focus:border-[#1a3a5c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={fields.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]/30 focus:border-[#1a3a5c] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={fields.phone}
                      onChange={handleChange}
                      placeholder="(904) 555-0000"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]/30 focus:border-[#1a3a5c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={fields.propertyType}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]/30 focus:border-[#1a3a5c] transition-colors bg-white"
                    >
                      <option value="">Select type…</option>
                      <option value="single-family">Single-Family Home</option>
                      <option value="multi-family">Multi-Family</option>
                      <option value="condo">Condo / Townhouse</option>
                      <option value="commercial">Commercial</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your property and how we can help…"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]/30 focus:border-[#1a3a5c] transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1a3a5c] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#142d47] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0f2338] text-gray-400 py-8 px-6 text-center text-sm mt-16">
        <div className="max-w-6xl mx-auto">
          <p>© {new Date().getFullYear()} Saint Johns Premier Management, LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
