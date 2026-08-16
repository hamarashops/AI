import React from "react";

const Services = () => {
  const services = [
    {
      title: "Cognitive Automation",
      desc: "Deploy intelligent agents that handle complex decision-making processes, reducing operational overhead and accelerating time-to-market for products.",
      image: "/images/app-dev-icon.png",
      bgColor: "from-orange-500/10 to-orange-600/5",
    },
    {
      title: "Data Intelligence Hub",
      desc: "Centralize your data ecosystem with AI-driven analytics that automatically detect patterns, anomalies, and potential growth opportunities in real-time.",
      image: "/images/data-analytics.jpg",
      bgColor: "from-blue-500/10 to-cyan-600/5",
    },
    {
      title: "Defensive AI Systems",
      desc: "Proactive security products that use machine learning to anticipate and neutralize cyber threats before they impact your digital estate.",
      image: "/images/cyber-security.jpg",
      bgColor: "from-red-500/10 to-pink-600/5",
    },
    {
      title: "MLOps Cloud Platform",
      desc: "A complete environment for deploying, monitoring, and scaling machine learning models with high-grade reliability and performance.",
      image: null,
      icon: "☁️",
      bgColor: "from-slate-500/10 to-slate-600/5",
    },
    {
      title: "DevOps Intelligence",
      desc: "Integrate AI into your development lifecycle to predict build failures, optimize resource allocation, and automate code review processes.",
      image: "/images/devops.jpg",
      bgColor: "from-green-500/10 to-emerald-600/5",
    },
    {
      title: "Smart Managed Assets",
      desc: "End-to-end management of AI models and infrastructure, ensuring continuous uptime, accuracy, and compliance through our specialized support team.",
      image: null,
      icon: "🤝",
      bgColor: "from-purple-500/10 to-violet-600/5",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-[#0a1628] text-white relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="text-[#ff6600] text-sm font-bold uppercase tracking-widest mb-4">
            Our AI Product Line
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-black leading-tight mb-6">
            Intelligent Products That <br />
            <span className="text-[#ff6600] gradient-text">
              Power Your Business
            </span>{" "}
            Future
          </h3>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Each product in our portfolio is engineered to solve specific
            industry problems using the latest advancements in artificial
            intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="scroll-reveal group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff6600]/50 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#ff6600]/20"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              ></div>

              {/* Image or Icon Header */}
              <div className="relative h-48 overflow-hidden">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-1000"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
                    <span className="text-7xl group-hover:scale-150 group-hover:rotate-12 transition-all duration-700 animate-float">
                      {service.icon}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent"></div>

                {/* Animated Number Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#ff6600] rounded-full flex items-center justify-center font-black text-xl text-white shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow">
                  0{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                <h4 className="text-2xl font-black mb-4 group-hover:text-[#ff6600] transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-[#ff6600] font-bold text-sm uppercase tracking-wider group-hover:translate-x-4 transition-transform duration-300"
                >
                  View Product
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Animated Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff6600] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Corner Glow Effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ff6600]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
