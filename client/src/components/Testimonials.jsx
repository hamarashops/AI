import React from "react";

const Testimonials = () => {
  const stats = [
    { label: "AI Models Deployed", value: "200+" },
    { label: "Predictions / Sec", value: "10K+" },
    { label: "Data Points Processed", value: "1PB+" },
    { label: "Business Growth", value: "45%" },
  ];

  const successStories = [
    {
      title: "Cloud Migrations",
      subtitle: "Moving legacy to cloud",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Cloud Native",
      subtitle: "Cloud Specific Native Functionalities",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Engaging cloud",
      subtitle: "Cloud Extensions",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const testimonials = [
    {
      text: "Integrating HamaraShops.ai's AI engine into our inventory management was a breakthrough. It accurately predicts seasonal shifts, allowing us to maintain optimal stock levels consistently.",
      author: "Operations Manager",
      company: "Retail Global Corp",
    },
    {
      text: "The fraud detection product provided by HamaraShops.ai has reduced our risk exposure by 60%. The real-time ML analysis is incredibly fast and precise.",
      author: "Head of Risk",
      company: "Fintech Innovations",
    },
    {
      text: "HamaraShops.ai's Natural Language Processing product transformed our customer service. Our automated agents now resolve 80% of queries without human intervention.",
      author: "Customer Success VP",
      company: "Modern SaaS Ltd",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Why Customers Love Us Section */}
        <div className="mb-24">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-[#002d5b] text-sm font-black uppercase tracking-widest mb-4">
              Why Businesses Trust Our AI Products
            </h2>
            <div className="flex flex-wrap justify-between items-center max-w-4xl mx-auto">
              <div className="text-left md:max-w-xs mb-8 md:mb-0">
                <h3 className="text-3xl font-black text-[#002d5b] mb-4">
                  Predictive Power
                </h3>
                <p className="text-slate-500 text-sm">
                  Turn historical data into future foresight with our advanced
                  modeling.
                </p>
              </div>
              <div className="text-left md:max-w-xs mb-8 md:mb-0">
                <h3 className="text-3xl font-black text-[#002d5b] mb-4">
                  Real-Time Insight
                </h3>
                <p className="text-slate-500 text-sm">
                  Get actionable intelligence as events happen, not after the
                  fact.
                </p>
              </div>
              <div className="text-left md:max-w-xs mb-8 md:mb-0">
                <h3 className="text-3xl font-black text-[#002d5b] mb-4">
                  Business Secure
                </h3>
                <p className="text-slate-500 text-sm">
                  Privacy-first AI products designed to meet strict regulatory
                  standards.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-[#002d5b] p-12 rounded-3xl scroll-reveal">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-[#ff6600] text-4xl font-black mb-2">
                  {stat.value}
                </div>
                <div className="text-white text-xs font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-24">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-black text-[#002d5b] mb-4">
              Success Stories
            </h2>
            <div className="w-20 h-1 bg-[#ff6600] mx-auto mb-6"></div>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Sharing our impact and contribution through successful stories
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 px-4">
            {successStories.map((story, i) => (
              <div
                key={i}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-[320px] bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-black text-[#002d5b] mb-1">
                    {story.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">
                    {story.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-[#002d5b] text-sm font-black uppercase tracking-widest mb-4">
            Client Success Stories
          </h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-full md:w-1/3 px-4 mb-8 scroll-reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all h-full relative border border-slate-100 hover-lift">
                <div className="text-[#ff6600] text-8xl absolute top-4 right-8 opacity-5">
                  "
                </div>
                <p className="text-slate-600 mb-8 italic relative z-10 text-sm leading-loose">
                  "{t.text}"
                </p>
                <div className="mt-auto border-t border-slate-50 pt-6">
                  <h4 className="font-black text-[#002d5b]">{t.author}</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter mt-1">
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
