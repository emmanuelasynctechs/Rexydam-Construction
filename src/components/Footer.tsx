import React from "react";
import { Logo } from "./Logo";
import { LucideIcon } from "./LucideIcon";

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openConsultation }) => {
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white border-t border-brand-gold/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold opacity-5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue opacity-20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-12 mb-10">
          
          {/* Company Brief */}
          <div className="space-y-4">
            <Logo className="h-10" showText={true} lightText={true} />
            <p className="text-xs text-white/70 leading-relaxed pt-2">
              REXYDAM NIG LTD is a premier, multi-disciplinary construction, structural engineering, and corporate project management firm. We combine mechanical precision with luxurious architectural concepts to build the landmarks of tomorrow.
            </p>
            <div className="flex gap-3 pt-2">
              {["Facebook", "Twitter", "Linkedin", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all duration-300 text-white/60"
                  title={social}
                >
                  <LucideIcon name={social === "Linkedin" ? "Briefcase" : "Award"} size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-bold tracking-widest text-brand-gold uppercase">
              Corporate Directory
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button onClick={() => handleNavClick("home")} className="hover:text-brand-gold transition-colors text-left py-1">
                  Home Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("about")} className="hover:text-brand-gold transition-colors text-left py-1">
                  About the Engineers
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-brand-gold transition-colors text-left py-1">
                  Scope of Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("projects")} className="hover:text-brand-gold transition-colors text-left py-1">
                  Featured Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("contact")} className="hover:text-brand-gold transition-colors text-left py-1">
                  Corporate Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Portfolio */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-bold tracking-widest text-brand-gold uppercase">
              Core Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-brand-gold transition-colors text-left py-1">
                  Building Construction
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-brand-gold transition-colors text-left py-1">
                  Civil Engineering Works
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-brand-gold transition-colors text-left py-1">
                  Structural Engineering
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-brand-gold transition-colors text-left py-1">
                  Architectural Services
                </button>
              </li>
              <li>
                <button onClick={openConsultation} className="text-brand-gold hover:text-brand-gold-light transition-colors text-left font-bold py-1 flex items-center gap-1.5">
                  Request Estimation <LucideIcon name="TrendingUp" size={12} />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-bold tracking-widest text-brand-gold uppercase">
              Headquarters
            </h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex gap-3 items-start">
                <LucideIcon name="MapPin" className="text-brand-gold flex-shrink-0 mt-0.5" size={14} />
                <span>
                  Plot No. K136 Cadastral Zone K-Series, Kubwa, FCT, Abuja, Nigeria.
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <LucideIcon name="Phone" className="text-brand-gold flex-shrink-0" size={14} />
                <span>07067901007, 07055590231</span>
              </li>
              <li className="flex gap-3 items-center">
                <LucideIcon name="Mail" className="text-brand-gold flex-shrink-0" size={14} />
                <span>info@rexydamnig.com</span>
              </li>
              <li className="flex gap-3 items-center">
                <LucideIcon name="Clock" className="text-brand-gold flex-shrink-0" size={14} />
                <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditations Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/15 pb-8 mb-6">
          <div className="flex flex-wrap items-center gap-6">
            <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono uppercase tracking-widest text-white/80">
              COREN REGISTERED No. R.14285
            </div>
          </div>
          <p className="text-xs text-white/50">
            Safety Index: <span className="text-emerald-500 font-bold">100% Zero Accident Record</span>
          </p>
        </div>

        {/* Copyright Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {currentYear} REXYDAM NIG LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
