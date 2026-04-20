'use client'
import React from 'react'

function faq() {
const faqs = [
  {
    question: 'How can MRLLP help me start my business in India?',
    answer: 'MRLLP provides end-to-end support for business registration, including Private Limited Company, LLP, and OPC. We handle documentation, approvals, and compliance so you can launch your business without hassle.',
  },
  {
    question: 'Do you provide GST registration and return filing services?',
    answer: 'Yes, we offer complete GST solutions including registration, return filing, reconciliation, and ongoing compliance to ensure your business meets all GST requirements.',
  },
  {
    question: 'Can MRLLP handle my income tax filing and compliance?',
    answer: 'Absolutely. Our experts manage income tax returns, tax planning, and compliance to help you stay legally compliant while optimizing your tax liabilities.',
  },
  {
    question: 'What is included in MCA and ROC compliance services?',
    answer: 'We take care of all MCA and ROC filings such as annual returns, board resolutions, and statutory compliance, ensuring your company stays compliant with government regulations.',
  },
  {
    question: 'Do you offer trademark registration and brand protection?',
    answer: 'Yes, we assist with trademark search, registration, and protection to safeguard your brand identity and intellectual property.',
  },
];

  return (
    <div className="bg-[#0F172A] py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left Side - Header */}
          <div className="lg:col-span-1">
            <h1 className="text-3xl lg:text-4xl font-regular text-white mb-3">
              Frequently asked
            </h1>
            <p className="text-gray-300 text-base">
              Short, straight answers for founders.
            </p>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-6 lg:col-span-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                    <span className="text-indigo-400 font-semibold text-sm">?</span>
                  </div>
                  <h3 className="text-white font-semibold text-base leading-tight">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed ml-12">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default faq