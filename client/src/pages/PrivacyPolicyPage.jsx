import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-[#0a1628] min-h-screen text-white font-sans">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#0f1f35] to-[#0a1628] border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 tracking-tight">
            Privacy <span className="text-[#ff6600]">Policy</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            How we collect, use, and protect your data at HamaraShops.ai.
            Effective Date: March 5, 2026.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-invert prose-orange lg:prose-xl max-w-none">
            <div className="bg-white/5 border border-white/10 p-10 rounded-sm mb-12 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-[#ff6600] pl-6">
                1. Introduction
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                At HamaraShops.ai, we value your privacy and are committed to
                protecting your personal data. This Privacy Policy explains how
                we collect, use, and disclose information when you use our AI
                products, website, and services.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-[#ff6600] pl-6">
                2. Data We Collect
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We collect information to provide better services to our users:
              </p>
              <ul className="list-disc pl-8 mb-6 text-white/70 space-y-3">
                <li>
                  <strong className="text-white">Account Information:</strong>{" "}
                  Name, email address, and professional credentials when you
                  register.
                </li>
                <li>
                  <strong className="text-white">Usage Data:</strong>{" "}
                  Information about how you interact with our AI models and
                  platforms.
                </li>
                <li>
                  <strong className="text-white">Technical Data:</strong> IP
                  address, device type, and browser settings.
                </li>
                <li>
                  <strong className="text-white">Input Content:</strong> Data or
                  queries you provide to our AI engines for processing.
                </li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-[#ff6600] pl-6">
                3. How We Use Data
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Our primary goal is to improve our AI's accuracy and user
                experience. We use data to:
              </p>
              <ul className="list-decimal pl-8 mb-6 text-white/70 space-y-3">
                <li>
                  Train and refine our machine learning models (using anonymized
                  datasets).
                </li>
                <li>
                  Provide personalized insights and automated business reports.
                </li>
                <li>Maintain system security and prevent fraudulent access.</li>
                <li>Communicate critical updates and maintenance schedules.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-[#ff6600] pl-6">
                4. Data Security
              </h2>
              <div className="bg-[#ff6600]/10 border border-[#ff6600]/20 p-6 rounded-sm mb-6">
                <p className="text-white/90 font-medium">
                  We employ enterprise-grade AES-256 encryption for data at rest
                  and TLS 1.3 for data in transit. Our infrastructure is SOC2
                  Type II compliant.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-[#ff6600] pl-6">
                5. Your Rights
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Depending on your location (e.g., GDPR, CCPA), you have the
                right to access, correct, delete, or restrict the processing of
                your personal data. You can exercise these rights by contacting
                legal@hamarashops.ai.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-[#ff6600] pl-6">
                6. Cookies
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                We use essential cookies for authentication and session
                management. Statistical cookies help us understand platform
                performance. You can manage your cookie preferences in our
                portal.
              </p>

              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <p className="text-white/40 italic">
                  For any questions regarding this policy, please reach out to
                  our DPO at privacy@hamarashops.ai
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
