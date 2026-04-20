'use client'
import React from 'react'

function faq() {
  const faqs = [
    {
      question: 'How can IndiaFillings help my business with GST registration and compliance?',
      answer: 'IndiaFillings provides comprehensive GST registration services, ensuring your business complies with GST laws. From registration to timely returns filing and tax planning, we handle it all so you can focus on growing your business.',
    },
    {
      question: 'What is AI-powered automation, and how can it benefit my business operations?',
      answer: 'AI-powered automation reduces manual workload by automating routine tasks like payroll processing, GST filing, and employee attendance tracking. It boosts efficiency, minimizes errors, and ensures compliance with all regulatory requirements.',
    },
    {
      question: 'How do I automate my business compliance processes with IndiaFillings?',
      answer: 'IndiaFillings integrates AI-powered solutions to automate processes such as GST filing, payroll, and attendance tracking, ensuring compliance, saving time, and improving accuracy in your business operations.',
    },
    {
      question: 'How does LEDGERS support compliance, registration and taxation for companies?',
      answer: 'LEDGERS provides a unified software platform that covers regulatory compliance (including MCA filings for India), GST and income tax reporting, trademark registrations, startup company formations and other legal/financial obligations, enabling businesses to stay compliant across jurisdictions.',
    },
    {
      question: 'How can I automate GST filings and tax compliance with your services?',
      answer: 'Through a combination of LEDGERS automation tools and June AI agents, you can manage GST registrations, return filings, reconciliation and compliance in India, and apply comparable tax-automation workflows in the UAE and USA, minimizing manual effort and error-risk.',
    },
  ]

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