import React from 'react'
import { ArrowRight } from 'lucide-react'

function footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0F172A]">
      {/* CTA Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-white text-2xl font-regular mb-2">Ready to get started?</h1>
            <p className="text-gray-300">
              Create an account to start your company registration or migrate your existing business. No-credit card required to explore.
            </p>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition whitespace-nowrap">
            Start in India
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Company Info */}
          <div>
            <img src="https://mrllp.in/assets/logo2-Dp2EGe7S.png" alt="MRLLP Logo" className="h-10 mb-6" />
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2 text-sm">Head Office:</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  B-296, Chhatarpur Enclave Ph-2, Delhi-74
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 text-sm">Phone:</h4>
                <p className="text-gray-300 text-sm">8130204500</p>
                <p className="text-gray-300 text-sm">8130206300</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 text-sm">Email:</h4>
                <p className="text-gray-300 text-sm">info@mrllp.in</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Udyam Registration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Trust Registration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  GST Registration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Section 8 Company
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Trademark Registration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Private Limited Company
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h4 className="text-white font-semibold mb-6">Why Choose Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Expertise & Trust
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Fast & Secure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Affordable Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  FSSAI License
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Partnership Registration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  PF Registration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  LLP Registration
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} MRLLP. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition text-sm font-medium">
                Facebook
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition text-sm font-medium">
                Twitter
              </a>
              <a href="#" className="text-red-500 hover:text-red-400 transition text-sm font-medium">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer