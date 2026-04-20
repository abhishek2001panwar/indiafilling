import React from 'react'
import { Check } from 'lucide-react'

function start() {
  const leftItems = [
    'Private Limited / LLP / OPC setup',
    'GST registration & monthly filing',
    'Income tax return filing',
    'ROC compliances & annual filing',
  ]

  const steps = [
    {
      number: '01',
      title: 'Choose business structure',
      description: 'Select Private Limited, LLP, or OPC based on your needs.',
    },
    {
      number: '02',
      title: 'We prepare & register',
      description: 'DIN, DSC, PAN, company name approval, and incorporation documents.',
    },
    {
      number: '03',
      title: 'GST & Tax setup',
      description: 'GST registration, TAN, and expert-led accounting support.',
    },
    {
      number: '04',
      title: 'Stay compliant',
      description: 'GST filing, income tax returns, ROC compliance & annual filing.',
    },
  ]

  return (
    <div className="bg-[#0F172A] py-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-regular text-white mb-6">
              Start your business in India
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Choose your business structure — Private Limited, LLP, or OPC. We guide you through
              company registration, GST registration, tax filing, and all compliance requirements so you
              can focus on growing your business.
            </p>

            {/* Checklist */}
            <div className="space-y-4">
              {leftItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition"
              >
                <div className="flex items-start gap-4">
                  <span className="text-slate-400 font-semibold text-lg">{step.number}</span>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default start