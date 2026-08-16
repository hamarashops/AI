import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SalesTermsPage = () => {
  return (
    <div className="bg-[#0a1628] min-h-screen text-white font-sans">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#0f1f35] to-[#0a1628] border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 tracking-tight">
            Sales <span className="text-[#ff6600]">Terms</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Agreement governing the purchase and licensing of HamaraShops.ai
            products and services. Effective Date: March 5, 2026.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-invert prose-orange lg:prose-xl max-w-none">
            <div className="bg-white/5 border border-white/10 p-10 rounded-sm mb-12 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-[#ff6600] pl-6">
                1. Acceptance of Terms
              </h2>
              <p className="text-white/70 leading-relaxed mb-6 italic">
                By purchasing or accessing HamaraShops.ai services, you agree to
                these Sales Terms. Any modification requires written consent
                from an authorized representative of HamaraShops.ai.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-[#ff6600] pl-6">
                2. Licensing Models
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We offer three primary engagement models:
              </p>
              <ul className="list-disc pl-8 mb-6 text-white/70 space-y-4">
                <li>
                  <strong className="text-white">Professional Tier:</strong>{" "}
                  Annual fixed-fee license for individual use or small teams.
                </li>
                <li>
                  <strong className="text-white">Consumption Tier:</strong>{" "}
                  Pay-per-inference model for high-volume API consumers.
                </li>
                <li>
                  <strong className="text-white">Enterprise Tier:</strong>{" "}
                  Custom SLA, dedicated server allocation, and priority support.
                </li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-[#ff6600] pl-6">
                3. Payment & Billing
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                All invoices must be settled within 14 business days of
                issuance. Late payments may result in temporary suspension of
                API services. HamaraShops.ai reserves the right to adjust
                pricing with a 30-day advance notice for non-contracted
                subscriptions.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-[#ff6600] pl-6">
                4. Service Level Agreement (SLA)
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                We guarantee 99.9% uptime for our core NLP and Computer Vision
                services. For scheduled maintenance, notifications will be sent
                72 hours prior. Service credits are issued for significant
                breaches of SLAs as detailed in our Enterprise addendum.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-[#ff6600] pl-6">
                5. Intellectual Property
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                HamaraShops.ai retains all IP rights to the underlying models
                and algorithms. Users retain full ownership of their input data
                and generated output, provided such outputs were generated in
                compliance with our Ethics Policy.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-[#ff6600] pl-6">
                6. Liability & Termination
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Our liability is limited to the fees paid for the specific
                service in the 12 months preceding any claim. Either party may
                terminate if there is a material breach of these terms remains
                uncured for 30 days.
              </p>

              {/* <div className="bg-[#ff6600]/10 border border-[#ff6600]/20 p-6 rounded-sm mt-12 text-center shadow-xl">
                <p className="text-white/90 font-medium">
                  Need a custom Enterprise agreement? Reach out to contracts@hamarashops.ai
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalesTermsPage;
