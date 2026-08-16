import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CaseStudiesPage = () => {
  const cases = [
    {
      company: "LogiTech Global",
      title: "Optimizing 500+ Warehouse Hubs",
      result: "35% efficiency boost",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    },
    {
      company: "FinSecure",
      title: "Real-time Fraud Prevention at Scale",
      result: "99.9% detection rate",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-display font-black text-[#0a1628] mb-16 text-center">
            Success <span className="text-[#ff6600]">Stories</span>
          </h1>

          <div className="space-y-20">
            {cases.map((c, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={c.image}
                    alt={c.company}
                    className="rounded-[40px] shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
                <div className="lg:w-1/2">
                  <span className="text-[#ff6600] font-black tracking-widest uppercase text-sm">
                    {c.company}
                  </span>
                  <h2 className="text-4xl font-bold mt-4 mb-6">{c.title}</h2>
                  <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-[#ff6600] mb-8">
                    <span className="text-3xl font-black text-[#0a1628]">
                      {c.result}
                    </span>
                    <p className="text-slate-500 uppercase font-bold text-xs mt-1 tracking-widest">
                      Key Performance Metric
                    </p>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    By implementing our Cognitive Automation suite, they were
                    able to automate their entire verification pipeline,
                    reducing manual overhead significantly.
                  </p>
                  {/* <button className="font-bold text-[#ff6600] flex items-center group">
                    Read Full Study{" "}
                    <span className="ml-2 group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
