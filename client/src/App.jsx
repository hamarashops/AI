import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AddressingProblems from "./components/AddressingProblems";
import Services from "./components/Services";
import GraftingApproach from "./components/GraftingApproach";
import Testimonials from "./components/Testimonials";
import Library from "./components/Library";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CandidateDashboard from "./components/CandidateDashboard";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import APIDocsPage from "./pages/APIDocsPage";
import EthicsPolicyPage from "./pages/EthicsPolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import SalesTermsPage from "./pages/SalesTermsPage";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import ProductList from "./components/ProductList"; // Import the new component

const Home = () => {
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
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AddressingProblems />
        <Services />
        <GraftingApproach />
        <Testimonials />
        <Library />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" reverseOrder={false} />
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} /> {/* Add the new route */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
          <Route path="/product/:slug" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/api-docs" element={<APIDocsPage />} />
          <Route path="/ethics" element={<EthicsPolicyPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/sales-terms" element={<SalesTermsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
