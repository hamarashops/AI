import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EthicsPolicyPage = () => {
  const principles = [
    {
      title: "Human-Centric Design",
      desc: "Our AI is designed to augment human potential, not replace it. We prioritize tools that empower people to solve complex problems more effectively.",
      icon: "👥",
    },
    {
      title: "Algorithmic Transparency",
      desc: "We build 'Explainable AI'. Every decision made by our neural networks must be traceable and understandable to the relevant stakeholders.",
      icon: "🔍",
    },
    {
      title: "Inherent Fairness",
      desc: "We actively audit our datasets and models to identify and eliminate cognitive bias, ensuring equitable outcomes across all demographics.",
      icon: "⚖️",
    },
    {
      title: "Data Sovereignty",
      desc: "Users maintain full ownership of their data. We implement strict differential privacy protocols to ensure individual data points can never be reconstructed.",
      icon: "🛡️",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#ff6600] font-black uppercase tracking-[0.3em] text-xs mb-4 block">
                Responsible Innovation
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-black text-[#0a1628] mb-8 leading-tight">
                Our AI <span className="text-[#ff6600]">Ethics</span> Framework
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                At HamaraShops.ai, we believe that the power of artificial
                intelligence comes with an equal responsibility to protect human
                rights and dignity.
              </p>
            </div>

            <div className="bg-[#0a1628] rounded-[40px] p-8 md:p-16 mb-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6600]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <h2 className="text-3xl font-bold text-white mb-8 relative z-10">
                Our Commitment
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10 relative z-10">
                As AI becomes more integrated into our daily lives, we commit to
                the following core principles in every line of code we write and
                every model we train.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {principles.map((p, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group"
                  >
                    <div className="text-4xl mb-6">{p.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff6600] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-black text-[#0a1628] mb-6">
                Continuous Auditing
              </h2>
              <p className="text-slate-600 mb-8 leading-loose">
                We don't just set policies; we enforce them. Our Ethics
                Committee routinely performs 'red-teaming' exercises on our
                MLOps pipelines to simulate adversarial attacks and bias
                injection, ensuring our defenses remain robust and our outputs
                remain neutral.
              </p>

              <div className="bg-[#ff6600]/5 border-l-4 border-[#ff6600] p-8 rounded-r-3xl italic text-slate-700 leading-loose">
                "AI is a mirror of our data. If the mirror is cracked, the
                reflection is distorted. Our job is to ensure that the data we
                use represents the world we want to live in."
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EthicsPolicyPage;
