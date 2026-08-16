import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const APIDocsPage = () => {
  const endpoints = [
    {
      method: "GET",
      path: "/v1/auth/token",
      desc: "Retrieve access token for API authentication.",
    },
    {
      method: "POST",
      path: "/v1/ai/process",
      desc: "Analyze data using the Cognitive Automation engine.",
    },
    {
      method: "GET",
      path: "/v1/vision/detect",
      desc: "Execute object detection on a provided image URL.",
    },
    {
      method: "POST",
      path: "/v1/nlp/translate",
      desc: "Translate text across 100+ supported languages.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h1 className="text-5xl md:text-7xl font-display font-black text-[#0a1628] mb-6">
                API <span className="text-[#ff6600]">Documentation</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl font-medium leading-relaxed">
                Connect your existing systems to the HamaraShops.ai neural
                network through our enterprise-ready REST API.
              </p>
            </div>

            <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 overflow-hidden mb-12">
              <div className="bg-[#0a1628] p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Quick Start Guide</h2>
                <div className="bg-black/30 p-4 rounded-xl font-mono text-sm border border-white/10">
                  <span className="text-[#ff6600]">npm install</span>{" "}
                  @hamarashops/sdk
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 text-[#0a1628]">
                  Core Endpoints
                </h3>
                <div className="space-y-4">
                  {endpoints.map((api, i) => (
                    <div
                      key={i}
                      className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#ff6600]/30 transition-colors"
                    >
                      <span
                        className={`px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest ${
                          api.method === "GET"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {api.method}
                      </span>
                      <code className="text-[#ff6600] font-bold text-sm bg-white px-3 py-1 rounded shadow-sm">
                        {api.path}
                      </code>
                      <p className="text-slate-500 text-sm flex-1">
                        {api.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                <h4 className="font-bold mb-3">Authentication</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Use Bearer Token authentication for all requests beyond the
                  auth endpoint.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                <h4 className="font-bold mb-3">Rate Limiting</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Global limit of 1,000 requests per minute for standard
                  enterprise accounts.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                <h4 className="font-bold mb-3">Response Codes</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Strict adherence to RFC 7231 standards for all success and
                  error codes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default APIDocsPage;
