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
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-regular text-white mb-4">
            Our Partners
          </h1>
          
          {/* Gradient Border Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-6"></div>
          
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
                className="flex-shrink-0 mx-4 h-12 flex items-center justify-center"
              >
                <div className="bg-slate-900/40 border border-slate-700 rounded-lg px-6 py-2 hover:border-cyan-500 transition hover:shadow-lg hover:shadow-cyan-500/20">
                  <span className="text-gray-200 font-semibold whitespace-nowrap text-sm">
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