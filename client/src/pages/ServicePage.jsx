import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const serviceDetails = {
  "cognitive-automation": {
    title: "Cognitive Automation",
    tagline: "Intelligent Workflows for Modern Businesses",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
    description:
      "Our Cognitive Automation engine combines Robotic Process Automation (RPA) with advanced Machine Learning to create self-learning workflows. It doesn't just follow rules; it understands context and makes informed decisions.",
    benefits: [
      "80% Reduction in Manual Tasks",
      "99.9% Processing Accuracy",
      "24/7 Autonomous Operation",
    ],
    useCases: [
      "Claims Processing",
      "Intelligent Document Extraction",
      "Supply Chain Forecasting",
    ],
  },
  "data-intelligence": {
    title: "Data Intelligence",
    tagline: "Turning Raw Data into Actionable Foresight",
    image:
      "https://images.pexels.com/photos/3183158/pexels-photo-3183158.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Go beyond basic analytics. Our Data Intelligence platform uses deep learning to identify hidden patterns, predict market shifts, and provide clear visualization of complex data structures.",
    benefits: [
      "Real-time Market Prediction",
      "Advanced Pattern Recognition",
      "Automated Visual Reporting",
    ],
    useCases: [
      "Predictive Analytics",
      "Consumer Behavior Modeling",
      "Risk Management",
    ],
  },
  "vision-ai": {
    title: "Vision AI",
    tagline: "Visual Intelligence at the Speed of Light",
    image:
      "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=1200",
    description:
      "Our Vision AI suite enables machines to see, identify, and process images like humans. From facial recognition to medicinal imaging, we provide industry-leading accuracy in visual data processing.",
    benefits: [
      "Real-time Object Detection",
      "High-Precision Image Tagging",
      "Automated Quality Inspection",
    ],
    useCases: [
      "Visual Search",
      "Safety Compliance Monitoring",
      "Visual Quality Control",
    ],
  },
  "nlp-engines": {
    title: "NLP Engines",
    tagline: "Understanding the Nuance of Human Language",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    description:
      "Transform how you interact with users. Our Natural Language Processing engines understand sentiment, context, and intent in over 100 languages, powering the next generation of conversational AI.",
    benefits: [
      "Context-Aware Chatbots",
      "Multi-Language Sentiment Analysis",
      "Automated Content Summarization",
    ],
    useCases: [
      "Intelligent Support Bots",
      "Brand Reputation Monitoring",
      "Automated Legal Briefing",
    ],
  },
  "defensive-ai": {
    title: "Defensive AI",
    tagline: "Protecting the Perimeter with Neural Security",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    description:
      "Cybersecurity redefined. Our Defensive AI proactively identifies and neutralizes threats before they can penetrate your network, utilizing neural networks to simulate and counter millions of attack vectors.",
    benefits: [
      "Zero-Day Threat Detection",
      "Automated Incident Response",
      "Neural Network Shielding",
    ],
    useCases: [
      "Network Intrusion Prevention",
      "Fraud Detection",
      "Anomaly Detection systems",
    ],
  },
  "mlops-hub": {
    title: "MLOps Hub",
    tagline: "Standardizing the Machine Learning Lifecycle",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200",
    description:
      "Our MLOps Hub provides a unified platform for training, deploying, and monitoring machine learning models at scale. It bridges the gap between data science and operations, ensuring reliable and repeatable AI deployments.",
    benefits: [
      "Accelerated Deployment Cycles",
      "Real-time Model Performance Tracking",
      "Automated Retraining Pipelines",
    ],
    useCases: [
      "Model Versioning",
      "Scalable Inference Hosting",
      "Collaborative Data Science",
    ],
  },
  marketplace: {
    title: "AI Marketplace",
    tagline: "Pre-trained Excellence, Ready for Deployment",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    description:
      "Access a curated collection of state-of-the-art AI models ready for immediate integration. From specialized computer vision tasks to industry-specific NLP, our marketplace accelerates your AI journey.",
    benefits: [
      "Zero Development Time",
      "Verified Model Accuracy",
      "Flexible Integration APIs",
    ],
    useCases: [
      "Quick Prototyping",
      "Specialized Industry Solutions",
      "Third-party AI Integration",
    ],
  },
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  useEffect(() => {
    // Scroll Reveal Animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const revealElements = document.querySelectorAll(".scroll-reveal");
    revealElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-3xl font-display font-black text-primary mb-6">
            Service Overview
          </h2>
          <p className="text-slate-500 mb-8">
            This module is currently being optimized for your business needs.
          </p>
          <Link
            to="/"
            className="bg-[#ff6600] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-lg"
          >
            Back to Hub
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-28 md:pt-40 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2">
              <span className="text-[#ff6600] font-black uppercase tracking-widest text-sm mb-4 block">
                Product Suite
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-black text-primary leading-none mb-8">
                {service.title}
              </h1>
              <p className="text-xl text-slate-500 font-medium italic mb-10 leading-relaxed">
                {service.tagline}
              </p>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 italic text-slate-600 leading-loose">
                "{service.description}"
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl -z-10 transform scale-110"></div>
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary p-12 rounded-[32px] text-white shadow-xl">
              <h2 className="text-3xl font-display font-black mb-8 uppercase tracking-tight">
                Key Advantages
              </h2>
              <ul className="space-y-6">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="bg-[#ff6600] p-1 rounded-full mr-4 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-lg font-bold">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-12 rounded-[32px] border border-slate-200">
              <h2 className="text-3xl font-display font-black text-primary mb-8 uppercase tracking-tight">
                Key Use Cases
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {service.useCases.map((useCase, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-6 text-[#ff6600] font-black italic">
                      {idx + 1}
                    </div>
                    <span className="text-primary font-black uppercase tracking-tight text-sm">
                      {useCase}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
