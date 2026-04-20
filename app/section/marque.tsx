import React from 'react'

function marque() {
  const partners = [
    'ICICI Bank',
    'Bandhan Bank',
    'Axis Bank',
    'Standard Chartered',
    'ICICI Bank',
    'RBI',
    'DBS Bank',
    'Yes Bank',
    'HDFC Bank',
    'Induslnd Bank',
  ]

  return (
    <div className="bg-[#0F172A] py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Partners
          </h2>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Trusted by leading institutions supporting entrepreneurship, finance, and growth across India.
          </p>
        </div>

        {/* Marquee Container */}
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
              animation: marquee 30s linear infinite;
              display: flex;
              width: max-content;
            }
            
            .marquee-content:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="marquee-content">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 h-20 flex items-center justify-center"
              >
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-4 hover:border-slate-600 transition">
                  <span className="text-gray-300 font-semibold whitespace-nowrap text-sm">
                    {partner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default marque