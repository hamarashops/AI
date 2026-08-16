import React from "react";
import hero from "../images/hero1.jpg"; // Ensure this image exists in the specified path

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0a1628] flex items-center pt-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Digital Technology"
          className="w-full h-full object-cover opacity-40 animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-[#0a1628]/90"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTI5M2IiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

      {/* Glowing Cloud Effect with Float Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] pointer-events-none animate-float">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/30 to-purple-500/20 blur-[120px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-8 lg:pt-16 flex flex-col min-h-[55vh] lg:min-h-[65vh]">
        {/* Main Content Area */}
        <div className="max-w-4xl mb-6">
          <div className="flex flex-col">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-display font-black text-white leading-[0.95] mb-4 tracking-tighter animate-fade-in-up">
              AI
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
                Products
              </span>
            </h1>
            <div className="w-16 h-1.5 bg-[#ff6600] mb-6 animate-fade-in-left delay-400"></div>
          </div>

          <p className="text-white/70 text-base md:text-lg lg:text-lg max-w-lg leading-relaxed font-medium mb-0 animate-fade-in-up delay-200">
            Empowering global businesses with{" "}
            <span className="text-white font-bold border-b-2 border-[#ff6600]/30 pb-0.5">
              HamaraShops.ai
            </span>
            . We design and deliver production-ready AI products that automate
            complexity and unlock hidden growth.
          </p>
        </div>

        {/* Sophisticated Separator - Tightened Spacing */}
        <div className="relative w-full h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent my-8 animate-fade-in-left">
          <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#ff6600] -translate-y-1/2 rounded-full shadow-[0_0_10px_#ff6600]"></div>
        </div>

        {/* Bottom Interaction Area - Compacted */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10">
          {/* Compact CTA Button */}
          <div className="w-full lg:w-auto animate-fade-in-up delay-400">
            <a
              href="#services"
              className="relative overflow-hidden inline-flex items-center w-full lg:w-auto group"
            >
              <div className="absolute inset-0 bg-[#ff6600] transition-transform duration-500 group-hover:scale-105"></div>
              <div className="relative flex items-center justify-between lg:justify-start gap-4 py-4 px-6 border border-white/10 w-full">
                <div className="w-8 h-[2px] bg-white transition-all group-hover:w-12"></div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60 mb-1">
                    View All
                  </span>
                  <span className="text-base md:text-lg font-black uppercase tracking-wider text-white">
                    Products
                  </span>
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 group-hover:bg-white group-hover:text-[#ff6600] transition-all duration-300">
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Trusted Partners - Compact Grid */}
          <div className="w-full lg:flex-1 lg:max-w-lg lg:ml-10">
            <p className="text-white/40 text-[8px] font-black uppercase tracking-[0.4em] mb-4 animate-fade-in-up delay-600">
              Trusted by AI Research Teams
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 opacity-40 hover:opacity-100 transition-all duration-700 animate-fade-in-up delay-800 lg:grayscale lg:hover:grayscale-0">
              {["OpenAI", "Google AI", "TensorFlow", "PyTorch"].map(
                (partner) => (
                  <div
                    key={partner}
                    className="text-white text-sm md:text-base font-black tracking-tighter hover:text-[#ff6600] transition-colors cursor-default whitespace-nowrap"
                  >
                    {partner}
                  </div>
                ),
              )}
              <div className="text-white text-base md:text-lg font-black tracking-tighter col-span-2 sm:col-span-4 mt-0 hover:text-[#ff6600] transition-colors cursor-default leading-none">
                Hugging Face
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
