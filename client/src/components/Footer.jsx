import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/hamarashopslogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhMjUzYSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* CTA Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-display font-black mb-6 leading-tight">
            Unlock the Potential of
            <br />
            <span className="text-[#ff6600]">Intelligent AI Products</span>
          </h2>
          <p className="text-white/60 mb-10 text-lg">
            Partner with HamaraShops.ai to build a smarter, more automated
            future today.
          </p>
          {/* <a
            href="#contact"
            className="inline-flex items-center bg-[#ff6600] text-white px-12 py-5 font-bold text-lg rounded-sm hover:bg-[#ff7711] transition-all group shadow-xl mt-4"
          >
            <span className="block w-10 h-[3px] bg-white mr-4 group-hover:w-12 transition-all"></span>
            <span>Get Started</span>
          </a> */}
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 border-t border-white/10 pt-16 items-start">
          {/* Brand Column */}
          <div className="pr-0 lg:pr-12">
            <div className="flex items-center mb-6">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="HamaraShops.ai Logo"
                  className="h-8 w-auto mr-3 object-contain"
                />
                <div className="flex items-start">
                  <span className="text-2xl font-display font-black text-white tracking-tight">
                    HamaraShops.ai
                  </span>
                  <div className="w-2.5 h-2.5 bg-[#ff6600] rounded-full ml-1 mt-1"></div>
                </div>
              </Link>
            </div>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-sm">
              HamaraShops.ai is at the forefront of AI innovation, delivering
              products that leverage machine learning and cognitive computing to
              solve complex business challenges.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ff6600] transition-all text-white hover:scale-110 active:scale-95 shadow-lg"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ff6600] transition-all text-white hover:scale-110 active:scale-95 shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ff6600] transition-all text-white hover:scale-110 active:scale-95 shadow-lg"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ff6600] transition-all text-white hover:scale-110 active:scale-95 shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.359 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.419.419-.819.679-1.381.896-.422.164-1.057.359-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.359-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.359 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.261-2.911.558-.788.306-1.458.715-2.126 1.383-.668.667-1.077 1.338-1.383 2.126-.297.763-.501 1.634-.558 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.261 2.148.558 2.911.306.788.715 1.458 1.383 2.126.667.668 1.338 1.077 2.126 1.383.763.297 1.634.501 2.911.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.261 2.911-.558.788-.306 1.458-.715 2.126-1.383.668-.667-1.077 1.338-1.383-2.126.297-.763.501-1.634.558-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.261-2.148-.558-2.911-.306-.788-.715-1.458-1.383-2.126-.668-.667-1.338-1.077-2.126-1.383-.763-.297-1.634-.501-2.911-.558-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col items-start lg:items-center w-full">
            <div className="w-full lg:w-auto">
              <h4 className="font-bold mb-8 text-white uppercase tracking-widest text-xs">
                Resources
              </h4>
              <ul className="space-y-4 text-white/50 text-sm font-medium">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-[#ff6600] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#ff6600] mr-0 group-hover:mr-2 transition-all"></span>
                    About AI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/integrations"
                    className="hover:text-[#ff6600] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#ff6600] mr-0 group-hover:mr-2 transition-all"></span>
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/case-studies"
                    className="hover:text-[#ff6600] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#ff6600] mr-0 group-hover:mr-2 transition-all"></span>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/api-docs"
                    className="hover:text-[#ff6600] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#ff6600] mr-0 group-hover:mr-2 transition-all"></span>
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ethics"
                    className="hover:text-[#ff6600] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#ff6600] mr-0 group-hover:mr-2 transition-all"></span>
                    AI Ethics Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Products Column */}
          <div className="flex flex-col items-start lg:items-end w-full">
            <div className="w-full lg:w-auto lg:text-left">
              <h4 className="font-bold mb-8 text-white uppercase tracking-widest text-xs">
                Product Line
              </h4>
              <ul className="space-y-4 text-white/50 text-sm font-medium">
                <li>
                  <Link
                    to="/product/cognitive-automation"
                    className="hover:text-[#ff6600] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#ff6600] mr-0 group-hover:mr-2 transition-all"></span>
                    Cognitive Automation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product/data-intelligence"
                    className="hover:text-[#ff6600] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#ff6600] mr-0 group-hover:mr-2 transition-all"></span>
                    Data Intelligence
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product/defensive-ai"
                    className="hover:text-[#ff6600] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#ff6600] mr-0 group-hover:mr-2 transition-all"></span>
                    Defensive AI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product/mlops-hub"
                    className="hover:text-[#ff6600] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#ff6600] mr-0 group-hover:mr-2 transition-all"></span>
                    MLOps Platform
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product/nlp-engines"
                    className="hover:text-[#ff6600] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#ff6600] mr-0 group-hover:mr-2 transition-all"></span>
                    NLP Engine
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product/vision-ai"
                    className="hover:text-[#ff6600] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#ff6600] mr-0 group-hover:mr-2 transition-all"></span>
                    Vision AI
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>&copy; {currentYear} HamaraShops.ai. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link
              to="/sales-terms"
              className="hover:text-white transition-colors"
            >
              Sales Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
