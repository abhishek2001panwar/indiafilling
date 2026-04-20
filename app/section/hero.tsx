import React from "react";
import { Building2, CheckCircle, Users, FileText } from "lucide-react";

function Hero() {
  const features = [
    { icon: Building2, title: "Business Registration", color: "bg-orange-500" },
    { icon: CheckCircle, title: "GST Compliance", color: "bg-teal-500" },
    { icon: Users, title: "MCA Compliance", color: "bg-red-500" },
    { icon: FileText, title: "Income Tax Filing", color: "bg-green-500" },
  ];

  const clients = [
    "DBS",
    "ICICI",
    "HDFC",
    "Moneyview",
    "Etmoney",
    "Joyalukkas",
    "Yes Bank",
    "Flipkart",
    "Cello",
  ];

  return (
    <div className="bg-[#0F172A]  pt-20">
      {/* Main Hero Section */}
      <div className="w-full mx-auto px-4 sm:px-6 pb-10 py-10">
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-thin text-white mb-4 leading-tight">
            India's Largest AI-Powered
            <br />
            Corporate Services & Compliance Platform
          </h1>

          {/* Gradient Border Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-6"></div>

          <p className="text-sm sm:text-sm text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join millions of users who trust IndiaFillings to simplify and
            automate their MCA, GST, and Income Tax compliance. Our AI-powered
            platform with intelligent automation and expert professional support
            - delivers end-to-end workflows, paperless filing, and secure cloud
            storage. Start and operate a business with peace of mind.
          </p>
        </div>

        {/* Feature Cards - Responsive */}
        <div className="border-y border-slate-800">
          <div className="w-full ">
            {/* Mobile/Tablet Layout (Vertical Stack) */}
            <div className="flex flex-col md:hidden">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-3 px-4 py-4 ${
                      index !== features.length - 1
                        ? "border-b border-slate-800"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-5 h-5 flex items-center justify-center flex-shrink-0 ${feature.color} rounded`}
                    >
                      <Icon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Desktop Layout (Single Row) */}
            <div className="hidden md:block border-y border-slate-700 ">
              <div className="w-full  flex items-center justify-center">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-1.5 px-4 py-4 ${
                        index !== features.length - 1
                          ? "border-r border-slate-800"
                          : ""
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`w-4 h-4 flex items-center justify-center ${feature.color}`}
                      >
                        <Icon className="w-3 h-3 text-white" />
                      </div>

                      {/* Text */}
                      <span className="text-slate-300 text-md font-medium whitespace-nowrap">
                        {feature.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Clients Section - Responsive */}
        <div className="mt-12 px-2 sm:px-4">
          <div className="relative overflow-hidden">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
                Our Clients
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
            </div>

            {/* Marquee for All Devices */}
            <div className="relative overflow-hidden w-full">
              <style>{`
                @keyframes marquee-mobile {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(calc(-100% / 3)); }
                }

                @keyframes marquee-desktop {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }

                .marquee-content-mobile {
                  animation: marquee-mobile 25s linear infinite;
                  display: flex;
                  width: max-content;
                  gap: 0.5rem;
                }

                .marquee-content-desktop {
                  animation: marquee-desktop 40s linear infinite;
                  display: flex;
                  width: max-content;
                  gap: 1rem;
                }

                .marquee-content-mobile:hover,
                .marquee-content-desktop:hover {
                  animation-play-state: paused;
                }

                .marquee-fade-mobile::before,
                .marquee-fade-mobile::after {
                  content: '';
                  position: absolute;
                  top: 0;
                  width: 40px;
                  height: 100%;
                  z-index: 10;
                  pointer-events: none;
                }

                .marquee-fade-mobile::before {
                  left: 0;
                  background: linear-gradient(to right, rgba(15, 23, 42, 1), transparent);
                }

                .marquee-fade-mobile::after {
                  right: 0;
                  background: linear-gradient(to left, rgba(15, 23, 42, 1), transparent);
                }

                .marquee-fade-desktop::before,
                .marquee-fade-desktop::after {
                  content: '';
                  position: absolute;
                  top: 0;
                  width: 80px;
                  height: 100%;
                  z-index: 10;
                  pointer-events: none;
                }

                .marquee-fade-desktop::before {
                  left: 0;
                  background: linear-gradient(to right, rgba(15, 23, 42, 1), transparent);
                }

                .marquee-fade-desktop::after {
                  right: 0;
                  background: linear-gradient(to left, rgba(15, 23, 42, 1), transparent);
                }
              `}</style>

              {/* Mobile Marquee - Faster scroll, compact size */}
              <div className="md:hidden w-full overflow-hidden relative marquee-fade-mobile">
                <div className="marquee-content-mobile">
                  {[...clients, ...clients, ...clients].map((client, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 h-14 flex items-center"
                    >
                      <div className="bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2 hover:border-cyan-500 transition hover:shadow-lg hover:shadow-cyan-500/20 flex items-center gap-2">
                        <div className="w-5 h-5 bg-gradient-to-br from-slate-600 to-slate-700 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-white">
                            {client.charAt(0)}
                          </span>
                        </div>
                        <span className="text-gray-300 font-medium whitespace-nowrap text-xs">
                          {client}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Marquee - Original speed and size */}
              <div className="hidden md:block w-full overflow-hidden relative marquee-fade-desktop">
                <div className="marquee-content-desktop">
                  {[...clients, ...clients].map((client, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 h-16 flex items-center"
                    >
                      <div className="bg-slate-800/60 border border-slate-700 rounded-lg px-6 py-3 hover:border-cyan-500 transition hover:shadow-lg hover:shadow-cyan-500/20 flex items-center gap-2">
                        <div className="w-7 h-7 bg-gradient-to-br from-slate-600 to-slate-700 rounded flex items-center justify-center">
                          <span className="text-xs font-bold text-white">
                            {client.charAt(0)}
                          </span>
                        </div>
                        <span className="text-gray-300 font-medium whitespace-nowrap text-sm">
                          {client}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
