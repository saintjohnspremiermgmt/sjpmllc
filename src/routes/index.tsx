import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Building2,
  ClipboardList,
  Wrench,
  DollarSign,
  Users,
  Shield,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const services = [
  {
    icon: Building2,
    title: 'Property Marketing',
    description:
      'Professional listings, photography, and targeted marketing to attract high-quality tenants and minimize vacancies.',
  },
  {
    icon: Users,
    title: 'Tenant Screening',
    description:
      'Rigorous background, credit, and rental history checks to place reliable, responsible tenants in your property.',
  },
  {
    icon: DollarSign,
    title: 'Rent Collection',
    description:
      'Streamlined rent collection with online portals, timely disbursements, and detailed monthly financial statements.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repairs',
    description:
      'Prompt coordination of repairs with trusted vendors, keeping your property in top condition year-round.',
  },
  {
    icon: ClipboardList,
    title: 'Property Inspections',
    description:
      'Regular move-in, move-out, and routine inspections with detailed reports to protect your investment.',
  },
  {
    icon: Shield,
    title: 'Legal Compliance',
    description:
      'Full compliance with local landlord-tenant laws, lease enforcement, and eviction management when necessary.',
  },
]

const stats = [
  { value: '100+', label: 'Properties Managed' },
  { value: '98%', label: 'Occupancy Rate' },
  { value: '24/7', label: 'Maintenance Response' },
  { value: '15+', label: 'Years of Experience' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1a3a5c] rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-[#1a3a5c] leading-tight text-sm md:text-base">
                Saint Johns Premier Management
              </div>
              <div className="text-xs text-gray-500">LLC</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-[#1a3a5c] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#1a3a5c] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#1a3a5c] transition-colors">Contact</a>
            <Link
              to="/contact"
              className="bg-[#1a3a5c] text-white px-5 py-2 rounded-lg hover:bg-[#142d47] transition-colors"
            >
              Get Started
            </Link>
          </div>
          <Link
            to="/contact"
            className="md:hidden bg-[#1a3a5c] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#142d47] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a3a5c] to-[#0f2338] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
            Professional Property Management
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your Property.<br />
            <span className="text-[#c9a84c]">Our Priority.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Saint Johns Premier Management, LLC delivers full-service property management
            that maximizes your investment while giving tenants a place they're proud to call home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#c9a84c] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#b8973f] transition-colors flex items-center justify-center gap-2"
            >
              Get a Free Consultation
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="#services"
              className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#c9a84c] py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
              <div className="text-sm mt-1 text-yellow-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">
              Comprehensive Management Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From tenant placement to maintenance coordination, we handle every aspect
              of property management so you don't have to.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#1a3a5c]/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#1a3a5c]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-6">
              Local Expertise You Can Trust
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Saint Johns Premier Management, LLC was founded on the belief that great
              property management is built on relationships — with property owners who
              trust us to protect their investments, and with tenants who deserve quality
              homes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              We bring deep local market knowledge, transparent communication, and
              a proactive approach that keeps your properties performing at their best.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#1a3a5c] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#142d47] transition-colors"
            >
              Talk to Our Team
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            {[
              { icon: Shield, text: 'Fully Licensed & Insured' },
              { icon: DollarSign, text: 'Transparent Pricing' },
              { icon: Phone, text: '24/7 Emergency Line' },
              { icon: ClipboardList, text: 'Detailed Reporting' },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center gap-3 border border-gray-100"
              >
                <Icon className="w-8 h-8 text-[#c9a84c]" />
                <span className="font-semibold text-gray-800">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1a3a5c] text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Simplify Property Management?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Let us handle the hard work. Contact us today for a free, no-obligation consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#c9a84c] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#b8973f] transition-colors"
          >
            Contact Us Today
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Contact Info */}
      <section id="contact" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-10">Reach Us Directly</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="w-5 h-5 text-[#c9a84c]" />
              <span className="font-medium">(904) 555-0100</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-5 h-5 text-[#c9a84c]" />
              <span className="font-medium">info@saintjohnspremiermgmt.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="w-5 h-5 text-[#c9a84c]" />
              <span className="font-medium">Saint Johns County, FL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2338] text-gray-400 py-8 px-6 text-center text-sm">
        <div className="max-w-6xl mx-auto">
          <p>© {new Date().getFullYear()} Saint Johns Premier Management, LLC. All rights reserved.</p>
          <p className="mt-1">Proudly serving Saint Johns County, Florida</p>
        </div>
      </footer>
    </div>
  )
}
