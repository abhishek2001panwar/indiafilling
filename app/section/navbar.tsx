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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-8">
            <img src="/logo.avif" alt="IndiaFilings Logo" className="h-10" />
             
            

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center gap-1 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-6">
            {/* Refer & Earn */}
            <button className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition">
              Refer & Earn
              <span>🎁</span>
            </button>

            {/* We're Hiring */}
            <button className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition">
              We're Hiring!
              <span>😊</span>
            </button>

            {/* Search */}
            <button className="text-gray-300 hover:text-white transition">
              <Search className="w-5 h-5" />
            </button>

            {/* Login Button */}
            <button className="bg-white hover:bg-gray-100 text-slate-900 font-semibold py-2 px-6 rounded-full transition">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button className="text-gray-300 hover:text-white">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-700">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center justify-between text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
              <hr className="border-slate-700 my-2" />
              <button className="flex items-center gap-2 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">
                Refer & Earn 🎁
              </button>
              <button className="flex items-center gap-2 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition">
                We're Hiring! 😊
              </button>
              <button className="w-full bg-white hover:bg-gray-100 text-slate-900 font-semibold py-2 rounded-full transition mt-4">
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