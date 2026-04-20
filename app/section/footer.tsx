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
            <img src="/logo.avif" alt="IndiaFilings Logo" className="h-10 mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              India's Largest Digital Corporate Services Provider & Compliance Platform.
            </p>
          </div>

          {/* IndiaFillings */}
          <div>
            <h4 className="text-white font-semibold mb-6">IndiaFillings</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  About IndiaFillings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Learning Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-white font-semibold mb-6">Platforms</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Business Search
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Trademark Search
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Filings.AE for UAE
                </a>
              </li>
            </ul>
          </div>

          {/* Usage */}
          <div>
            <h4 className="text-white font-semibold mb-6">Usage</h4>
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

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Confidentiality Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Disclaimer Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  IndiaFillings Review
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
              © {currentYear} IndiaFillings. All rights reserved.
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