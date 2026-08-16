import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-black text-[#0a1628] mb-8">
              About <span className="text-[#ff6600]">AI Excellence</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              At HamaraShops.ai, we believe that artificial intelligence is the
              ultimate tool for human advancement. Our mission is to democratize
              complex AI technologies, making them accessible and actionable for
              businesses of all sizes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-slate-600">
                  To create a world where intelligence is embedded in every
                  workflow, allowing humans to focus on creativity while AI
                  handles the complexity.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <p className="text-slate-600">
                  We combine deep technical expertise with industry insights to
                  deliver solutions that are not just powerful, but also
                  practical and ethical.
                </p>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
              alt="AI Technology"
              className="w-full h-96 object-cover rounded-[40px] mb-20 shadow-2xl"
            />

            <h2 className="text-4xl font-display font-black mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Hamarashops.ai is a leading global IT solutions organisation, enabling its clients
              to transform at the intersect of unparalleled domain expertise and emerging technologies
              to achieve real-world business impact. A focus on very select industries, a detailed understanding
              of the underlying processes of those industries and partnerships with leading platforms provide
              us a distinct vantage. We leverage AI, Cloud and insight-driven technologies, allied with our
              industry expertise, to transform client businesses into intelligent, high-growth enterprises.
              Today our proprietary platforms power critical business processes across the Insurance,
              Financial Services and Travel industries. Our skill-certified technology and process consultants
              engineer, design, consult, operate, and modernise systems across the world.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
