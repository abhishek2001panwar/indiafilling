import React from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'

function Meetjune() {
  return (
    <div className="bg-[#0F172A] py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-700 rounded-2xl p-8 lg:p-12">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-4xl font-bold text-white mb-2">Meet June AI.</h2>
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">
                Your AI Compliance Co-Pilot
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Connect your tools, configure intelligent Automate every part of your business -
                from customer acquisition and onboarding to invoicing, tax compliance, and
                payroll – all through one unified AI-powered platform. June AI connects your tools,
                understands your workflows, and executes them intelligently.
              </p>
            </div>

            {/* Learn More Button */}
            <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition">
              Learn more
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Content - Chat Interface */}
          <div className="relative">
            <div className="bg-gradient-to-br from-black via-slate-900 to-black border border-purple-600/50 rounded-2xl p-8 space-y-6 bg-black">
              <h3 className="text-2xl font-semibold text-white text-center">
                Compliance, the smart way
              </h3>

              {/* Video Container */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl overflow-hidden shadow-lg min-h-64">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://img.indiafilings.com/videos/june-ai.mp4" type="video/mp4" />
                  {/* Fallback - placeholder gradient */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-300 via-purple-400 to-pink-500 flex items-center justify-center border-4 border-purple-100 mx-auto mb-4 shadow-lg">
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white font-semibold">Video Demo</p>
                    </div>
                  </div>
                </video>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-full blur-3xl -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meetjune