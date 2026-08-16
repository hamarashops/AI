import React from "react";

const PartnerLogos = () => {
  return (
    <div className="py-16 bg-white border-t border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {/* Technology Partner */}
          <div className="flex items-center space-x-4 opacity-70 hover:opacity-100 transition-opacity">
            <div className="bg-slate-200 px-6 py-3 rounded">
              <span className="text-sm font-bold text-slate-600">
                Technology
                <br />
                Partner
              </span>
            </div>
          </div>

          {/* Redington */}
          <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-2xl font-black text-[#002d5b]">
              REDINGTON
            </span>
          </div>

          {/* Microsoft */}
          <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-2xl font-black text-[#00a4ef]">
              Microsoft
            </span>
          </div>

          {/* Adobe Solution Partner GOLD */}
          <div className="flex items-center space-x-3 opacity-70 hover:opacity-100 transition-opacity">
            <svg
              className="h-12"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="0,40 20,0 40,40" fill="#FF0000" />
              <polygon points="15,40 25,40 20,28" fill="white" />
            </svg>
            <div>
              <div className="text-2xl font-black text-[#FF0000]">Adobe</div>
              <div className="text-xs font-bold text-slate-700">
                Solution Partner
              </div>
              <div className="text-xs font-black text-[#ff6600]">GOLD</div>
            </div>
          </div>

          {/* Google Cloud - Using uploaded logo */}
          <div className="opacity-70 hover:opacity-100 transition-opacity">
            <img
              src="/images/google-cloud-logo.png"
              alt="Google Cloud"
              className="h-16 object-contain"
            />
          </div>

          {/* Adobe (second instance) */}
          <div className="flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
            <svg
              className="h-10"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="0,40 20,0 40,40" fill="#FF0000" />
              <polygon points="15,40 25,40 20,28" fill="white" />
            </svg>
            <span className="text-2xl font-black text-[#FF0000]">Adobe</span>
          </div>

          {/* Oracle */}
          <div className="opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-3xl font-black text-[#FF0000] italic tracking-tight">
              ORACLE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
