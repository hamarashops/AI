import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const IntegrationsPage = () => {
  const integrations = [
    {
      name: "Cloud Infrastructure",
      desc: "Seamless sync with AWS, Azure, and Google Cloud.",
    },
    {
      name: "CRM Systems",
      desc: "Native connectors for Salesforce and HubSpot.",
    },
    {
      name: "ERP Platforms",
      desc: "Deep integration with SAP and Oracle workflows.",
    },
    {
      name: "Data Warehouses",
      desc: "Real-time streaming from Snowflake and BigQuery.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-black text-[#0a1628] mb-6">
              Connected <span className="text-[#ff6600]">Ecosystem</span>
            </h1>
            <p className="text-xl text-slate-600">
              HamaraShops.ai doesn't work in isolation. We slide perfectly into
              your existing tech stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {integrations.map((item, i) => (
              <div
                key={i}
                className="p-10 bg-white border border-slate-200 rounded-3xl hover:border-[#ff6600] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#ff6600]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff6600] transition-colors">
                  <div className="w-3 h-3 bg-[#ff6600] rounded-full group-hover:bg-white"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0a1628] text-white p-16 rounded-[40px] text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need a custom integration?
            </h2>
            <p className="text-white/60 mb-10 max-w-2xl mx-auto">
              Our API-first approach means we can build custom connectors for
              your proprietary software in weeks, not months.
            </p>
            <button className="bg-[#ff6600] px-10 py-4 font-bold rounded-lg hover:bg-white hover:text-[#ff6600] transition-all">
              Request API Docs
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IntegrationsPage;
