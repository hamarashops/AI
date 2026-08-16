import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/hamarashopslogo.png";
import { createUserWithProfile } from "../services/candidates";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    FullName: "",
    Phone: "",
    Email: "",
    Password: "",
    Address: "",
    Role: "Candidate",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please upload a resume");
      return;
    }

    setIsSubmitting(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("FullName", formData.FullName);
      formDataToSend.append("Phone", formData.Phone);
      formDataToSend.append("Email", formData.Email);
      formDataToSend.append("Password", formData.Password);
      formDataToSend.append("Address", formData.Address);
      formDataToSend.append("Role", formData.Role);
      formDataToSend.append("resume", selectedFile);

      await createUserWithProfile(formDataToSend);
      alert("Registration successful!");
      setIsModalOpen(false);
      setSelectedFile(null);
      setFormData({
        FullName: "",
        Phone: "",
        Email: "",
        Password: "",
        Address: "",
        Role: "Candidate",
      });
      navigate("/login");
    } catch (error) {
      alert("Error during registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const topNavLinks = [
    { name: "About AI", href: "/about" },
    { name: "Integrations", href: "/integrations" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "API Docs", href: "/api-docs" },
    { name: "Join HamaraShops.ai Team", href: "#" },
    { name: "Login", href: "/login" },
  ];

  const mainNavLinks = [
    { name: "Cognitive Automation", slug: "cognitive-automation" },
    { name: "Data Intelligence", slug: "data-intelligence" },
    { name: "Vision AI", slug: "vision-ai" },
    { name: "NLP Engines", slug: "nlp-engines" },
    { name: "Defensive AI", slug: "defensive-ai" },
    { name: "MLOps Hub", slug: "mlops-hub" },
    { name: "Marketplace", slug: "marketplace" },
  ];

  return (
    <header className="fixed w-full z-100 ">
      {/* Top Orange Bar */}
      <div className="bg-accent py-1 block">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-x-1 md:gap-x-8 gap-y-1 lg:flex-nowrap">
            {topNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => {
                  if (link.name === "Join HamaraShops.ai Team") {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }
                }}
                className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-wider hover:text-black transition-colors px-1.5 py-1 text-center"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main White Nav */}
      <nav
        className={`transition-all duration-300 ${isScrolled ? "bg-white shadow-xl py-0.5" : "bg-white py-2"}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo Section - Left */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="HamaraShops.ai Logo"
              className="h-8 lg:h-9 w-auto mr-2 lg:mr-3 object-contain"
            />
            <div className="relative">
              <span className="text-xl lg:text-2xl font-display font-black text-primary tracking-tighter">
                HamaraShops.ai
              </span>
              <div className="absolute -top-0.5 -right-2.5 w-2 h-2 bg-accent rounded-full"></div>
            </div>
          </Link>

          {/* Desktop Main Links - Centered */}
          <div className="hidden lg:flex flex-1 justify-center px-4">
            <div className="flex items-center space-x-1 xl:space-x-3">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={`/product/${link.slug}`}
                  className="group relative flex flex-col items-center py-1"
                >
                  <span className="text-primary text-[9.5px] xl:text-[11px] font-bold uppercase tracking-tight text-center leading-tight max-w-21.25 xl:max-w-25 group-hover:text-accent transition-colors h-7 flex items-center px-1">
                    {link.name}
                  </span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Action Button - Right */}
          <div className="flex items-center">
            {/* <button className="hidden lg:flex bg-primary text-white px-6 py-2.5 rounded-sm text-[12px] xl:text-sm font-bold hover:bg-accent transition-all hover:-translate-y-1 shadow-lg leading-tight whitespace-nowrap mr-4 lg:mr-0">
              Request Demo
            </button> */}

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible h-auto pb-8 shadow-2xl" : "opacity-0 invisible h-0 overflow-hidden"}`}
        >
          <div className="container mx-auto px-6 pt-8 space-y-4">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                to={`/product/${link.slug}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-primary font-black uppercase text-sm border-b border-slate-50 pb-2 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6">
              {/* <button
                className="w-full bg-accent text-white py-4 rounded-sm font-black uppercase tracking-widest text-lg shadow-xl active:scale-95 transition-transform"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Demo
              </button> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Join Team Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-200 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-md rounded-xl shadow-2xl relative overflow-hidden animate-fade-in-up duration-300 my-auto">
            <div className="bg-primary p-4 text-white text-center">
              <h3 className="text-lg md:text-xl font-display font-black">
                Create Candidate Profile
              </h3>
              <p className="text-white/70 text-[12px] md:text-[13px] mt-1">
                Join HamaraShops.ai and start your profile
              </p>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedFile(null);
                }}
                className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors p-2"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form
              className="p-4 md:p-6 space-y-3 md:space-y-4 max-h-[80vh] overflow-y-auto"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-500 mb-1.5 md:mb-2 tracking-widest">
                  Full Name
                </label>
                <input
                  type="text"
                  name="FullName"
                  value={formData.FullName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 md:px-3 md:py-2.5 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-500 mb-1.5 md:mb-2 tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 md:px-3 md:py-2.5 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-500 mb-1.5 md:mb-2 tracking-widest">
                    Password
                  </label>
                  <input
                    type="password"
                    name="Password"
                    value={formData.Password}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 md:px-3 md:py-2.5 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="******"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-500 mb-1.5 md:mb-2 tracking-widest">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="Phone"
                    value={formData.Phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 md:px-3 md:py-2.5 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="9876543210"
                  />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-500 mb-1.5 md:mb-2 tracking-widest">
                    Address
                  </label>
                  <input
                    type="text"
                    name="Address"
                    value={formData.Address}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 md:px-3 md:py-2.5 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="Dehradun"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-500 mb-1.5 md:mb-2 tracking-widest">
                  Resume / CV
                </label>
                <label
                  htmlFor="file-upload"
                  className="mt-1 flex justify-center px-4 pt-4 pb-5 border-2 border-slate-200 border-dashed rounded-md bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group"
                >
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-10 w-10 text-slate-400 group-hover:text-accent transition-colors"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex flex-col md:flex-row text-xs md:text-sm text-slate-600 justify-center items-center">
                      <span className="relative cursor-pointer rounded-md font-medium text-accent hover:underline">
                        Upload a file
                      </span>
                      <p className="pl-0 md:pl-1">or drag and drop</p>
                    </div>
                    {selectedFile ? (
                      <p className="text-[10px] md:text-sm font-bold text-primary break-all">
                        Selected: {selectedFile.name}
                      </p>
                    ) : (
                      <p className="text-[10px] md:text-xs text-slate-500">
                        PDF, DOC, DOCX up to 10MB
                      </p>
                    )}
                  </div>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-accent text-white py-3 rounded font-bold uppercase text-xs md:text-sm tracking-widest shadow-lg transition-all ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-accent-light"}`}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
