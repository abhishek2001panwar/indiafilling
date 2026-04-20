import React from 'react'
import { Building2, CheckCircle, Users, FileText } from 'lucide-react'

function Hero() {
  const features = [
    { icon: Building2, title: 'Business Registration', color: 'bg-orange-500' },
    { icon: CheckCircle, title: 'GST Compliance', color: 'bg-teal-500' },
    { icon: Users, title: 'MCA Compliance', color: 'bg-red-500' },
    { icon: FileText, title: 'Income Tax Filing', color: 'bg-green-500' },
  ]

  const clients = [
    'DBS', 'ICICI', 'HDFC', 'Moneyview', 'Etmoney', 'Joyalukkas', 'Yes Bank', 'Flipkart', 'Cello'
  ]

  return (
    <div className="bg-[#0F172A]  pt-20">
      {/* Main Hero Section */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pb-10 py-10">
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-white mb-4 leading-tight">
            India's Largest AI-Powered<br />
            Corporate Services & Compliance Platform
          </h1>
          <p className="text-sm sm:text-sm text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join millions of users who trust IndiaFillings to simplify and automate their MCA, GST, and Income Tax compliance.
            Our AI-powered platform with intelligent automation and expert professional support - delivers end-to-end
            workflows, paperless filing, and secure cloud storage. Start and operate a business with peace of mind.
          </p>
        </div>

        {/* Feature Cards - Single Row */}
        <div className="border-t border-b border-slate-700 ">
          <div className="flex items-center justify-center">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`flex-1 flex items-center justify-center gap-3 py-3 ${
                    index !== features.length - 1 ? 'border-r border-slate-700' : ''
                  }`}
                >
                  <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 ${feature.color}`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 font-medium text-sm whitespace-nowrap">{feature.title}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Clients Section - Marquee Style */}
        <div className="mt-10">
          <h2 className="text-center text-white text-lg font-semibold mb-8">Our Clients</h2>
          
          <div className="relative overflow-hidden">
            <style>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              
              .marquee-content {
                animation: marquee 40s linear infinite;
                display: flex;
                width: max-content;
              }
              
              .marquee-content:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="marquee-content">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4 flex items-center gap-3 h-16"
                >
                  <div className="bg-slate-700/50 border border-slate-600 rounded-lg px-6 py-4 hover:border-slate-500 transition flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-700 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-white">{client.charAt(0)}</span>
                    </div>
                    <span className="text-gray-300 font-medium whitespace-nowrap text-sm">{client}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero