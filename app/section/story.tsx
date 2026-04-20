import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

function Story() {
  return (
    <div className="bg-[#0F172A] py-12 md:py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center bg-[#262E47] border border-slate-700 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-6">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6">
            <div className="border-l-4 border-purple-500 pl-4 md:pl-6">
              <h1 className="text-2xl md:text-4xl font-regular text-white mb-2">Our Story!</h1>
              <h3 className="text-lg md:text-2xl font-semibold text-purple-400 mb-4 md:mb-6">
                IndiaFillings: The Journey
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 md:mb-8">
                We are on a mission to make Entrepreneurship easier and
                affordable to millions. IndiaFilings provides a simple and
                intuitive platform for setting up a business and managing
                compliance. We started our journey in 2014 and bootstrapped the
                business till 2022, serving over 1 lakh businesses. In 2022, we
                raised funding from institutional investors to further our
                mission.
              </p>
            </div>

            {/* Learn More Button */}
            <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg text-sm md:text-base transition">
              Learn more
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* Right Content - Chat Interface */}
          <div className="relative h-64 md:h-96">
             

              {/* Video Container */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg md:rounded-xl overflow-hidden shadow-lg w-full h-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://img.indiafilings.com/videos/IndiaFilings-The-Journey!.mp4"
                    type="video/mp4"
                  />
                  {/* Fallback - placeholder gradient */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-300 via-purple-400 to-pink-500 flex items-center justify-center border-4 border-purple-100 mx-auto mb-3 md:mb-4 shadow-lg">
                        <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <p className="text-white font-semibold text-sm md:text-base">Video Demo</p>
                    </div>
                  </div>
                </video>
              </div>
            

            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-full blur-3xl -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
