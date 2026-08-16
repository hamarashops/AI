import React from "react";
import PartnerLogos from "./PartnerLogos";

const Features = () => {
  const benefits = [
    {
      title: "AI-Powered Automation",
      desc: "Streamline business processes with intelligent automation that learns and adapts to your workflows.",
      icon: "/images/icon-automation.png",
    },
    {
      title: "Machine Learning Models",
      desc: "Pre-trained and custom ML models for predictive analytics, classification, and regression tasks.",
      icon: "/images/icon-cloud-adoption.png",
    },
    {
      title: "Natural Language Processing",
      desc: "Advanced NLP capabilities for chatbots, sentiment analysis, text generation, and language understanding.",
      icon: "/images/icon-modernization.png",
    },
    {
      title: "Computer Vision Solutions",
      desc: "Image recognition, object detection, facial recognition, and visual quality inspection systems.",
      icon: "/images/icon-digital-initiatives.png",
    },
    {
      title: "Scalable AI Infrastructure",
      desc: "Cloud-native AI platforms that scale effortlessly with your growing business needs.",
      icon: "/images/icon-scalable.png",
    },
  ];

  return (
    <>
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column - About */}
            <div className="lg:w-1/3 scroll-reveal">
              <h2 className="text-[#002d5b] text-sm font-bold uppercase tracking-widest mb-4">
                About HamaraShops.ai
              </h2>
              <h3 className="text-3xl font-display font-black text-[#002d5b] mb-8 leading-tight">
                Leading AI Products Marketplace
              </h3>
              <p className="text-slate-600 mb-10 leading-relaxed text-sm">
                We provide AI-powered products and solutions that empower
                businesses to leverage artificial intelligence. From machine
                learning models to intelligent automation tools, our products
                are designed to accelerate innovation and drive measurable
                business outcomes. Experience the future with{" "}
                <span className="font-bold">Intelligent AI Products.</span>
              </p>
              <a
                href="#about"
                className="inline-flex items-center bg-[#ff6600] text-white px-8 py-3 font-bold rounded-sm hover:bg-[#ff7711] transition-all group shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-300"
              >
                <span className="block w-8 h-[2px] bg-white mr-4 group-hover:w-10 transition-all duration-500"></span>
                <span>Learn More</span>
              </a>
            </div>

            {/* Right Column - Benefits Grid */}
            <div className="lg:w-2/3">
              <h2 className="text-[#002d5b] text-sm font-bold uppercase tracking-widest mb-4 scroll-reveal">
                AI-Powered Capabilities
              </h2>
              <h3 className="text-3xl font-display font-black text-[#002d5b] mb-12 scroll-reveal">
                Core AI Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="scroll-reveal bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 group relative overflow-hidden hover-lift"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Background Accent Circle with Rotation */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ff6600]/5 rounded-full group-hover:bg-[#ff6600]/10 group-hover:scale-150 transition-all duration-700"></div>

                    {/* Icon Container with Animation */}
                    <div className="mb-6 relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#ff6600]/10 to-[#ff6600]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                        <img
                          src={benefit.icon}
                          alt={benefit.title}
                          className="w-12 h-12 object-contain group-hover:animate-float"
                        />
                      </div>
                    </div>

                    <h4 className="text-xl font-black text-[#002d5b] mb-4 relative z-10 group-hover:text-[#ff6600] transition-colors duration-300">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                      {benefit.desc}
                    </p>

                    {/* Animated Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#ff6600] to-[#ff8833] group-hover:w-full transition-all duration-700 ease-out"></div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-transparent border-r-[40px] border-r-[#ff6600]/0 group-hover:border-r-[#ff6600]/10 transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Strip */}
      <PartnerLogos />
    </>
  );
};

export default Features;
