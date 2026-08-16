import React from 'react';

const Library = () => {
    const items = [
        {
            type: 'Case Study',
            title: 'Revolutionizing Healthcare with AI',
            desc: 'How our computer vision product is helping radiologists detect anomalies with 99% accuracy across 50+ medical centers.',
            link: '#',
            image: '/images/healthcare-tech.jpg'
        },
        {
            type: 'Blog',
            title: 'The Future of Ethical AI Products',
            desc: 'Exploring the importance of transparency, fairness, and bias mitigation in modern machine learning systems.',
            link: '#',
            image: '/images/automation-bg.jpg'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 scroll-reveal">
                    <div>
                        <h2 className="text-[#002d5b] text-sm font-bold uppercase tracking-widest mb-4">Insights & AI Research</h2>
                        <h3 className="text-4xl font-display font-black text-[#002d5b]">
                            Library of <span className="text-[#ff6600]">Intelligent Thoughts</span>
                        </h3>
                    </div>
                    <a href="#resources" className="hidden md:inline-flex items-center text-[#ff6600] font-bold hover:underline mt-4 md:mt-0 group">
                        Explore All AI Resources
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {items.map((item, i) => (
                        <div key={i} className="group cursor-pointer scroll-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="aspect-video bg-slate-100 rounded-2xl mb-8 overflow-hidden relative shadow-lg">
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002d5b]/80 via-[#002d5b]/40 to-transparent"></div>

                                {/* Badge */}
                                <div className="absolute top-6 left-6 bg-[#ff6600] backdrop-blur-sm px-6 py-2 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">
                                    {item.type}
                                </div>

                                {/* Read More Button Overlay */}
                                <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                                    <svg className="w-6 h-6 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>

                            <h4 className="text-2xl font-bold mb-4 group-hover:text-[#ff6600] transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-slate-600 mb-6 leading-relaxed">{item.desc}</p>

                            <a href={item.link} className="inline-flex items-center font-bold text-[#002d5b] group-hover:text-[#ff6600] transition-colors">
                                Read Abstract
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Library;
