import React from 'react'
import { Calendar, BookOpen, FileCheck, Users } from 'lucide-react'

function aipowered() {
  const features = [
    {
      icon: Calendar,
      title: 'Calendar & Alerts',
      description: 'Never miss a deadline — reminders and tracking.',
      color: 'text-blue-400',
    },
    {
      icon: BookOpen,
      title: 'Accounting',
      description: 'Organize invoices and reconcile financial inputs.',
      color: 'text-blue-500',
    },
    {
      icon: FileCheck,
      title: 'Tax Filing',
      description: 'File GST and income tax with guided steps.',
      color: 'text-teal-400',
    },
    {
      icon: Users,
      title: 'HR & Payroll',
      description: 'Streamline payroll processing and statutory tasks.',
      color: 'text-purple-400',
    },
  ]

  return (
    <div className="bg-[#0F172A] py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h1 className="text-2xl lg:text-3xl font-regular text-white mb-6">
              AI-Powered India Compliance
            </h1>
            <p className="text-gray-300 text-base leading-relaxed mb-12">
              Stay compliant in India with automated help for GST filing, income tax returns, ROC
              compliance and annual filings. Our platform drafts forms, validates entries and keeps a clear
              audit trail with smart reminders.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <Icon className={`w-6 h-6 ${feature.color} flex-shrink-0`} />
                      <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex items-center justify-center">
            <img
              src="https://www.indiafilings.com/_next/image?url=https%3A%2F%2Fimg.indiafilings.com%2Fcatalog%2FIndiaFilings-App-2.webp&w=1080&q=75"
              alt="AI-Powered Dashboard"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl transform perspective"
              style={{
                perspective: '1000px',
                transform: 'rotateY(-5deg) rotateX(5deg)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default aipowered