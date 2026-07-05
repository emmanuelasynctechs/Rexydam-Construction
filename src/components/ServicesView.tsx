import React, { useState } from "react";
import { SERVICES_DATA } from "../data";
import { LucideIcon } from "./LucideIcon";

interface ServicesViewProps {
  setActiveTab: (tab: string) => void;
  openConsultation: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ setActiveTab, openConsultation }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>("building-construction");

  const selectedService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <div className="pt-24 pb-16 bg-brand-light">
      
      {/* Banner Title */}
      <div className="bg-brand-blue text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(211,154,9,0.12),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold">
            Engineering Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            Our Core Disciplines
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Delivering structural safety, robust material formulations, and precision-engineered designs across civil, residential, commercial, and industrial segments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Horizontal Sticky-like Selector Bar with indicators on mobile */}
        <div className="relative w-full pb-3 border-b border-brand-gray select-none">
          {/* Subtle scroll masks for mobile */}
          <div className="absolute left-0 top-0 bottom-3 w-6 bg-gradient-to-r from-brand-light to-transparent pointer-events-none md:hidden z-10"></div>
          <div className="absolute right-0 top-0 bottom-3 w-6 bg-gradient-to-l from-brand-light to-transparent pointer-events-none md:hidden z-10"></div>
          
          <div className="w-full overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex flex-nowrap md:justify-center items-center gap-3 px-4 md:px-0 min-w-max">
              {SERVICES_DATA.map((service) => {
                const isSelected = service.id === activeServiceId;
                return (
                  <button
                    key={service.id}
                    id={`service-nav-btn-${service.id}`}
                    onClick={() => setActiveServiceId(service.id)}
                    className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? "bg-brand-blue text-white shadow-md shadow-brand-blue/25 border-2 border-brand-gold scale-102"
                        : "bg-white text-brand-blue hover:bg-brand-gray hover:text-brand-blue border-2 border-brand-gray"
                    }`}
                  >
                    <LucideIcon name={service.iconName} className={isSelected ? "text-brand-gold" : "text-brand-blue/70"} size={16} />
                    {service.title}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Scroll instruction indicator for small devices */}
          <p className="text-center text-[10px] text-brand-slate/40 font-mono mt-2 md:hidden">
            &larr; Swipe to view all services &rarr;
          </p>
        </div>

        {/* Detailed Service Section display */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl border border-brand-gray overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Content Column (7 cols) */}
            <div className="p-5 sm:p-10 lg:col-span-7 space-y-8">
              
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold text-white flex items-center justify-center shadow-lg shadow-brand-gold/20 flex-shrink-0">
                    <LucideIcon name={selectedService.iconName} size={24} />
                  </div>
                  <h3 className="text-xl sm:text-3xl font-display font-black text-brand-blue leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-mono font-bold text-brand-gold italic">
                  &ldquo;{selectedService.tagline}&rdquo;
                </p>
                <p className="text-xs sm:text-base text-brand-slate/85 leading-relaxed pt-2">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Benefits (Bullet list) */}
              <div className="space-y-3">
                <h4 className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-brand-blue">
                  Core Architectural & Civil Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-brand-slate">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <LucideIcon name="Check" size={10} />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Construction Process Steps */}
              <div className="space-y-3 pt-2">
                <h4 className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-brand-blue">
                  Our Structured Execution Process
                </h4>
                <div className="relative border-l border-brand-gray/80 pl-4 space-y-4">
                  {selectedService.process.map((step, idx) => (
                    <div key={idx} className="relative group pl-2">
                      <div className="absolute left-[-21px] top-0.5 w-4 h-4 rounded-full bg-brand-blue text-white text-[9px] font-mono font-bold flex items-center justify-center border-2 border-white">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-brand-slate font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-services mapping (detailed list cards) */}
              <div className="space-y-4 pt-4 border-t border-brand-gray">
                <h4 className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-brand-blue">
                  Specialized Sub-Disciplines Under {selectedService.title}
                </h4>
                
                <div className="grid grid-cols-1 gap-4">
                  {selectedService.subServices.map((sub, idx) => (
                    <div
                      key={idx}
                      id={`sub-service-card-${idx}`}
                      className="p-4 sm:p-5 bg-brand-light rounded-xl border border-brand-gray hover:border-brand-gold/30 transition-all space-y-3"
                    >
                      <h5 className="font-display font-bold text-sm sm:text-base text-brand-blue flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                        {sub.name}
                      </h5>
                      <p className="text-xs sm:text-sm text-brand-slate/85 leading-relaxed">
                        {sub.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-brand-slate/90 pt-1">
                        <div className="bg-white/80 p-3 rounded-lg border border-brand-gray/40">
                          <p className="font-extrabold text-brand-blue text-[10px] sm:text-[11px] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <LucideIcon name="ShieldCheck" className="text-brand-gold" size={12} />
                            Key Advantages:
                          </p>
                          <ul className="list-disc pl-4 space-y-1">
                            {sub.benefits.map((b, bidx) => (
                              <li key={bidx}>{b}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/80 p-3 rounded-lg border border-brand-gray/40">
                          <p className="font-extrabold text-brand-blue text-[10px] sm:text-[11px] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <LucideIcon name="Activity" className="text-brand-gold" size={12} />
                            Sub-Process Steps:
                          </p>
                          <ol className="list-decimal pl-4 space-y-1">
                            {sub.process.map((p, pidx) => (
                              <li key={pidx}>{p}</li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column (5 cols - Sticky Image & Banner) */}
            <div className="lg:col-span-5 bg-brand-blue/5 border-t lg:border-t-0 lg:border-l border-brand-gray flex flex-col justify-between">
              
              {/* Service illustration */}
              <div className="p-6 sm:p-10 space-y-6">
                <div className="h-[300px] rounded-xl overflow-hidden shadow-lg border border-brand-gray bg-brand-dark">
                  <img
                    src={selectedService.imageUrl}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-brand-blue text-white rounded-xl p-6 border border-brand-gold/15 space-y-4 shadow-xl">
                  <p className="font-mono text-[10px] tracking-widest text-brand-gold uppercase font-bold">
                    Rexydam Standards
                  </p>
                  <h4 className="font-display font-extrabold text-base">
                    Ready to deploy our {selectedService.title} division?
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Our estimators are available immediately to generate an accurate Bill of Quantities (BOQ), material allocations, and schedule estimations for your custom project.
                  </p>
                  <button
                    onClick={() => {
                      setActiveTab("contact");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    id={`service-cta-btn-${selectedService.id}`}
                    className="w-full py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-white font-display text-xs font-bold uppercase tracking-wider text-center transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    Contact Us <LucideIcon name="Mail" size={14} />
                  </button>
                </div>
              </div>

              {/* Trust disclaimer banner */}
              <div className="p-6 bg-brand-blue text-white/60 font-mono text-[9px] text-center border-t border-brand-gray uppercase tracking-widest leading-normal">
                Strict compliance with COREN Standards • NSE Building Code • Eurocodes 2, 3 & 4
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
