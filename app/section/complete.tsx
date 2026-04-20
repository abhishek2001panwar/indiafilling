import React from 'react'
import { CheckCircle2 } from 'lucide-react'

function complete() {
  const features = [
    'Company Registration',
    'Bank Account Assistance',
    'GST Registration',
    'Trade License',
    'GST Return Filing',
    'TDS Return Filing',
    'HR & Payroll Processing',
    'Trademark Protection',
    'MCA Compliance',
  ]

  return (
    <div className="bg-[#0F172A] py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://www.indiafilings.com/_next/image?url=https%3A%2F%2Fimg.indiafilings.com%2Fcatalog%2FIndiaFilings-App-1.webp&w=1080&q=75" 
                alt="Dashboard and Mobile App"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Complete compliance solution
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                From company registration to GST filing, income tax returns to trademark protection — we
                handle all your compliance needs in one place.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default complete