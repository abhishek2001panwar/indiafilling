'use client'
import React, { useState } from 'react'
import { ChevronDown, Search, Menu, X } from 'lucide-react'

function navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Startup', dropdown: true },
    { label: 'Registrations', dropdown: true },
    { label: 'Trademark', dropdown: true },
    { label: 'GST', dropdown: true },
    { label: 'Income Tax', dropdown: true },
    { label: 'MCA', dropdown: true },
    { label: 'Compliance', dropdown: true },
    { label: 'Global', dropdown: true },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 border-b border-slate-700/50 backdrop-blur-sm">
      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.avif" alt="IndiaFillings Logo" className="h-8 md:h-10" />
          </div>

          {/* Desktop Menu - Only visible on xl and above */}
          <div className="hidden xl:flex items-center gap-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-1 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition hover:bg-slate-800/50 rounded"
              >
                {item.label}
                {item.dropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Refer & Earn */}
            <button className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition hover:text-cyan-400">
              Refer & Earn
              <span>🎁</span>
            </button>

            {/* We're Hiring */}
            <button className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition hover:text-cyan-400">
              We're Hiring!
              <span>😊</span>
            </button>

            {/* Search */}
            <button className="text-gray-300 hover:text-white transition p-1">
              <Search className="w-5" />
            </button>

            {/* Login Button */}
            <button className="bg-white hover:bg-gray-100 text-slate-900 font-medium py-2 px-5 text-sm rounded-full transition">
              Login
            </button>
          </div>

          {/* Mobile/Tablet/Laptop Menu - Visible on lg and below */}
          <div className="lg:flex xl:hidden items-center gap-3">
            <button className="text-gray-300 hover:text-white p-1">
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-1"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet/Laptop Menu - Visible on lg and below when clicked */}
        {isOpen && (
          <div className="lg:block xl:hidden pb-4 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur h-screen overflow-y-auto">
            <div className="flex flex-col gap-1 p-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center justify-between text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition hover:bg-slate-800/30 rounded"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
              <hr className="border-slate-700 my-2" />
              <button className="flex items-center gap-2 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition hover:bg-slate-800/30 rounded w-full">
                Refer & Earn 🎁
              </button>
              <button className="flex items-center gap-2 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition hover:bg-slate-800/30 rounded w-full">
                We're Hiring! 😊
              </button>
              <button className="w-full bg-white hover:bg-gray-100 text-slate-900 font-semibold py-2 px-4 rounded-full transition mt-4 text-sm">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default navbar