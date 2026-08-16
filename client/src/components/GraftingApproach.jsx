import React from 'react';

const GraftingApproach = () => {
    const steps = [
        {
            title: 'Discovery',
            desc: 'We analyze your data landscape to identify the highest-value AI opportunities tailored to your product goals.',
            icon: '🔍',
            number: '01'
        },
        {
            title: 'Modeling',
            desc: 'Our data scientists build and train sophisticated machine learning models using state-of-the-art neural architectures.',
            icon: '🧠',
            number: '02'
        },
        {
            title: 'Integration',
            desc: 'We seamlessly integrate AI models into your existing applications, ensuring high performance and low latency.',
            icon: '🔌',
            number: '03'
        },
        {
            title: 'Evolution',
            desc: 'Continuous monitoring and fine-tuning ensure your AI products grow smarter and more accurate with every interaction.',
            icon: '📈',
            number: '04'
        }
    ];

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90 z-10"></div>
                <img
                    src="/images/grafting-tree.png"
                    alt="Grafting Approach"
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-auto opacity-20 object-contain"
                />
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="text-center mb-20 scroll-reveal">
                    <h2 className="text-[#002d5b] text-sm font-bold uppercase tracking-widest mb-4">Our AI Product Lifecycle</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-black text-[#002d5b] mb-6 leading-tight">
                        Nurturing Continuous Innovation Through <br />
                        <span className="text-[#ff6600]">Intelligent Engineering</span>
                    </h3>
                    <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed text-lg">
                        Our systematic approach ensures that AI isn't just a feature, but a core driver of your product's success and evolution in a rapidly changing digital world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {steps.map((step, i) => (
                        <div key={i} className="relative group scroll-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl hover:border-[#ff6600] hover:shadow-2xl transition-all duration-500 h-full">
                                {/* Number Badge */}
                                <div className="absolute -top-5 -left-5 w-14 h-14 bg-[#ff6600] text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">
                                    {step.number}
                                </div>

                                <div className="text-5xl mb-8 mt-4 group-hover:scale-110 transition-transform inline-block">
                                    {step.icon}
                                </div>

                                <h4 className="text-2xl font-black text-[#002d5b] mb-4 group-hover:text-[#ff6600] transition-colors">
                                    {step.title}
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {step.desc}
                                </p>

                                {/* Bottom Progress Bar */}
                                <div className="mt-6 h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#ff6600] w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center scroll-reveal">
                    <a href="#approach" className="inline-flex items-center bg-[#ff6600] text-white px-10 py-4 font-bold rounded-sm hover:bg-[#ff7711] transition-all group shadow-xl">
                        <span className="block w-8 h-[2px] bg-white mr-4 group-hover:w-10 transition-all"></span>
                        <span>Discover Our Strategy</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GraftingApproach;
