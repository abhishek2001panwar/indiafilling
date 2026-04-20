import React from 'react'
import { Zap, Shield, CheckCircle, Lightbulb } from 'lucide-react'

function aipowered() {
  const features = [
    {
      icon: Zap,
      title: 'Fast & Efficient',
      description: 'Complete registrations and filings in quick time with our streamlined processes.',
      color: 'text-orange-400',
    },
    {
      icon: Shield,
      title: 'Legal Protection',
      description: 'Comprehensive IP, trademark, and legal compliance support for your business.',
      color: 'text-cyan-400',
    },
    {
      icon: CheckCircle,
      title: 'Full Compliance',
      description: 'GST, Income Tax, Annual filings, and ROC compliance all in one place.',
      color: 'text-green-400',
    },
    {
      icon: Lightbulb,
      title: 'Expert Guidance',
      description: 'Professional support and transparent solutions for all your business needs.',
      color: 'text-purple-400',
    },
  ]

  return (
    <div className="bg-[#0F172A] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Center Content */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-regular text-white mb-6">
           What We Offer

          </h1>

          {/* Gradient Border Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-8"></div>

          <div className="space-y-6 text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <p className="text-sm md:text-base">
              At MRLLP, we empower businesses and entrepreneurs with a comprehensive range of services designed to simplify every step of their journey. From registering your company to ensuring complete compliance, our team guides you with expert advice and professional support.
            </p>

            <p className="text-sm md:text-base">
              We specialize in One Person Company registration, Proprietorship & OPC setup, GST registration, Income Tax filing, Trademark & Intellectual Property protection, LLP formation, Section 8 company registration, and Udyam registration. Every service is designed to save you time, reduce hassle, and help your business grow efficiently.
            </p>

            <p className="text-sm md:text-base">
              Our mission is to provide transparent, reliable, and cost-effective solutions so that businesses can focus on growth while we take care of the complexities. Whether you are a startup or an established company, our tailored services ensure smooth operations, legal compliance, and peace of mind.
            </p>

            <p className="text-sm md:text-base">
              With a team of experienced professionals and hundreds of satisfied clients, we are committed to delivering excellence, guidance, and support for all your business needs. Let us help you achieve your goals faster and smarter.
            </p>
          </div>
        </div>

        {/* Features Grid - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-slate-800/60 border border-slate-700 rounded-lg p-6 hover:border-cyan-500 transition hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="mb-4">
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default aipowered