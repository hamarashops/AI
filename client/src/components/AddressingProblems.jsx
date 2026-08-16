import React, { useState } from 'react';

const AddressingProblems = () => {
    const [activeTab, setActiveTab] = useState('Solutions');

    const tabContent = {
        Solutions: [
            'Generative AI Engines',
            'Predictive Maintenance',
            'Fraud Detection Systems',
            'Personalized Recommendations',
            'AI-Driven Customer Support',
            'Automated Quality Control',
            'Smart Demand Forecasting'
        ],
        Capabilities: [
            'Large Language Models (LLMs)',
            'Neural Network Architectures',
            'Edge AI & IoT Integration',
            'Reinforcement Learning',
            'Semantic Search & Retrieval',
            'Synthesized Data Generation'
        ],
        Industries: [
            'E-commerce & Retail',
            'Fintech & Banking',
            'Healthcare Diagnostics',
            'Industrial Manufacturing',
            'EdTech & Learning',
            'Supply Chain Logistics'
        ]
    };

    return (
        <section className="relative bg-[#0a1628] py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/images/automation-bg.jpg"
                    alt="Technology Background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/90 to-[#0a1628]/95"></div>
            </div>

            {/* Animated Pattern Overlay */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle, #1e3a8a 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
                    Solving Complexity with AI
                </h2>
                <h3 className="text-2xl font-bold text-[#ff6600] mb-12">
                    Engineered Intelligence for Real-World Impact
                </h3>
                <p className="max-w-4xl mx-auto text-white/80 text-lg leading-relaxed mb-16">
                    Our AI products bridge the gap between complex data and actionable insights, providing scalable solutions for the most pressing business challenges.
                </p>

                {/* Tabs */}
                <div className="flex justify-center space-x-8 md:space-x-16 mb-16 border-b border-white/10">
                    {Object.keys(tabContent).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 px-4 text-sm md:text-base font-bold uppercase tracking-widest transition-all relative ${activeTab === tab
                                ? 'text-[#ff6600]'
                                : 'text-white/60 hover:text-white'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ff6600]"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {tabContent[activeTab].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg text-white font-semibold text-sm hover:bg-white/10 hover:border-[#ff6600]/50 transition-all cursor-default group"
                            style={{ animationDelay: `${i * 50}ms` }}
                        >
                            <div className="flex items-center justify-between">
                                <span className="group-hover:text-[#ff6600] transition-colors">{item}</span>
                                <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 text-[#ff6600] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AddressingProblems;
