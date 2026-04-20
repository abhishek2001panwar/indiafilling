'use client'
import React, { useState } from 'react'
import { ChevronDown, Search, Menu, X } from 'lucide-react'

function navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)

  const navItems = [
    {
      label: 'Startup',
      dropdown: true,
      submenu: [
        'Proprietorship',
        'Partnership',
        'One Person Company',
        'Limited Liability Partnership',
        'Trust Registration',
        'Section 8 Company',
        'Private Limited Company',
      ],
    },
    { label: 'Registrations', dropdown: true, submenu: [] },
    { label: 'Trademark', dropdown: true, submenu: [] },
    { label: 'GST', dropdown: true, submenu: [] },
    { label: 'Income Tax', dropdown: true, submenu: [] },
    { label: 'Compliance', dropdown: true, submenu: [] },
    { label: 'Contact', dropdown: true, submenu: [] },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 border-b border-slate-700/50 backdrop-blur-sm">
      <style>{`
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: rgba(30, 41, 59, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(100, 116, 139, 0.3);
          border-radius: 0.5rem;
          min-width: 200px;
          margin-top: 0.5rem;
          padding: 0.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .nav-item-wrapper {
          position: relative;
        }

        .nav-item-wrapper:hover .dropdown-menu {
          display: block;
        }

        .dropdown-menu a {
          display: block;
          padding: 0.75rem 1rem;
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.875rem;
          transition: all 0.2s;
          border-radius: 0.375rem;
        }

        .dropdown-menu a:hover {
          background: rgba(15, 152, 254, 0.1);
          color: #06b6d4;
        }
      `}</style>
      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="https://mrllp.in/assets/logo2-Dp2EGe7S.png" alt="IndiaFillings Logo" className="h-8 md:h-10" />
          </div>

          {/* Desktop Menu - Only visible on xl and above */}
          <div className="hidden xl:flex items-center gap-2">
            {navItems.map((item, index) => (
              <div key={index} className="nav-item-wrapper">
                <button className="flex items-center gap-1 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition hover:bg-slate-800/50 rounded">
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                {item.submenu && item.submenu.length > 0 && (
                  <div className="dropdown-menu">
                    {item.submenu.map((submenu, subindex) => (
                      <a key={subindex} href="#">
                        {submenu}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden xl:flex items-center gap-4">
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
          <div className="lg:block xl:hidden pb-4 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur m-5 overflow-y-auto">
            <div className="flex flex-col gap-1 p-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                    className="flex items-center justify-between text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition hover:bg-slate-800/30 rounded w-full"
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition ${
                          openDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  {openDropdown === index &&
                    item.submenu &&
                    item.submenu.length > 0 && (
                      <div className="pl-6">
                        {item.submenu.map((submenu, subindex) => (
                          <a
                            key={subindex}
                            href="#"
                            className="block text-gray-400 hover:text-cyan-400 px-3 py-2 text-sm transition"
                          >
                            {submenu}
                          </a>
                        ))}
                      </div>
                    )}
                </div>
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