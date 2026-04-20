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
    { name: "Amrita", image: "https://mrllp.in/assets/amrita-DQhE57LT.png" },
    { name: "BSAT", image: "https://mrllp.in/assets/BSAT-D87pSsAT.png" },
    { name: "Coinlytx", image: "https://mrllp.in/assets/coinlytx-wERXXdmi.png" },
    { name: "Eternal", image: "https://mrllp.in/assets/eternal-Fc4nobNf.png" },
    { name: "Prompt Times", image: "https://mrllp.in/assets/Prompt-Times-BQZ5jP4q.jpg" },
    { name: "Samrat", image: "https://mrllp.in/assets/samrat-0Tbvbxl6.png" },
    { name: "Sanchay", image: "https://mrllp.in/assets/Sanchay-Ti9mlD10.jpg" },
    { name: "TVF", image: "https://mrllp.in/assets/TVF-BFCdl9ti.jpg" },
  ];

  return (
    <div className="bg-[#0F172A]  pt-20">
      {/* Main Hero Section */}
      <div className="w-full mx-auto px-4 sm:px-6 pb-10 py-10">
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-thin text-white mb-4 leading-tight">
            Welcome To MRLLP
            <br />
           Business  & Compliance Solutions Platform
          </h1>

          {/* Gradient Border Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-6"></div>

          <p className="text-sm sm:text-sm text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            MRLLP is a professional services platform that simplifies legal and
            business processes for startups and entrepreneurs. We provide
            seamless solutions for company registration, GST, Income Tax filing,
            Trademark & IP protection, LLP formation, Section 8 companies, and
            Udyam registration. Since 2011, we have empowered businesses across
            India with transparent, efficient, and cost-effective services. Our
            expert team guides clients step-by-step, ensuring smooth compliance
            and allowing them to focus on growth.
          </p>
        </div>

        {/* Feature Cards - Responsive */}
        <div className="border-y border-slate-800">
          <style>{`
            .feature-fade {
              position: relative;
              overflow: hidden;
            }

            .feature-fade-mobile::before,
            .feature-fade-mobile::after {
              content: '';
              position: absolute;
              left: 0;
              right: 0;
              width: 100%;
              z-index: 10;
              pointer-events: none;
            }

            .feature-fade-mobile::before {
              top: 0;
              height: 40px;
              background: linear-gradient(to bottom, rgba(15, 23, 42, 1) 0%, transparent 100%);
            }

            .feature-fade-mobile::after {
              bottom: 0;
              height: 40px;
              background: linear-gradient(to top, rgba(15, 23, 42, 1) 0%, transparent 100%);
            }

            .feature-fade-desktop::before,
            .feature-fade-desktop::after {
              content: '';
              position: absolute;
              top: 0;
              width: 100px;
              height: 100%;
              z-index: 10;
              pointer-events: none;
            }

            .feature-fade-desktop::before {
              left: 0;
              background: linear-gradient(to right, rgba(15, 23, 42, 1) 0%, transparent 100%);
            }

            .feature-fade-desktop::after {
              right: 0;
              background: linear-gradient(to left, rgba(15, 23, 42, 1) 0%, transparent 100%);
            }
          `}</style>
          <div className="w-full ">
            {/* Mobile/Tablet Layout (Vertical Stack) */}
            <div className="flex flex-col md:hidden feature-fade feature-fade-mobile">
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
            <div className="hidden md:block border-y border-px border-slate-800 feature-fade feature-fade-desktop">
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
                  gap: 1.5rem;
                }

                .marquee-content-desktop {
                  animation: marquee-desktop 40s linear infinite;
                  display: flex;
                  width: max-content;
                  gap: 2rem;
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
                      className="flex-shrink-0 h-24 flex items-center"
                    >
                      <div className="hover:scale-110 transition duration-300 flex items-center justify-center">
                        <img
                          src={client.image}
                          alt={client.name}
                          className="h-14 object-contain filter saturate-75 hover:saturate-100 transition"
                        />
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
                      className="flex-shrink-0 h-28 flex items-center"
                    >
                      <div className="hover:scale-110 transition duration-300 flex items-center justify-center">
                        <img
                          src={client.image}
                          alt={client.name}
                          className="h-20 object-contain filter saturate-75 hover:saturate-100 transition"
                        />
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
