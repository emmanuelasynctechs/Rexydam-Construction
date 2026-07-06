import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { LucideIcon } from "./LucideIcon";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  openConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isHeaderWhite = true;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isHeaderWhite
            ? "bg-white shadow-md border-b border-brand-gray py-3"
            : isScrolled
              ? "bg-brand-blue/95 backdrop-blur-md shadow-lg border-b border-brand-gold/15 py-3"
              : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => handleNavClick("home")}>
            <Logo
              className="h-10 md:h-12"
              showText={true}
              lightText={!isHeaderWhite}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative font-display text-[13px] font-bold uppercase tracking-wider transition-colors duration-300 py-1.5 ${
                    isActive
                      ? "text-brand-gold"
                      : isHeaderWhite
                        ? "text-brand-blue/80 hover:text-brand-gold"
                        : "text-white/80 hover:text-brand-gold-light"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Consultation Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => {
                setActiveTab("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              id="header-contact-btn"
              className="px-5 py-2.5 rounded-full bg-brand-gold text-white font-display text-[12px] font-bold uppercase tracking-wider hover:bg-brand-gold-light transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-brand-gold/20 flex items-center gap-2"
            >
              <LucideIcon name="Mail" size={14} /> CONTACT US
            </button>
          </div>

          {/* Mobile Hamburguer Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            id="mobile-hamburger-btn"
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isHeaderWhite
                ? "text-brand-blue hover:bg-brand-gray"
                : "text-white/90 hover:text-white hover:bg-white/10"
            }`}
          >
            <LucideIcon name={isMobileMenuOpen ? "X" : "Menu"} size={26} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-brand-blue/70 backdrop-blur-sm"
        ></div>

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[280px] bg-brand-blue p-6 flex flex-col justify-between border-l border-brand-gold/10 transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="space-y-8 mt-16">
            <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono tracking-widest text-brand-gold font-bold uppercase">
                Navigation
              </span>
              <p className="text-white/60 text-xs">REXYDAM Engineering Group</p>
            </div>

            <nav className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left font-display text-base font-semibold py-2.5 px-3 rounded-lg transition-all ${
                      isActive
                        ? "bg-brand-gold text-white shadow-md font-bold"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveTab("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-white font-display text-sm font-bold uppercase tracking-wider text-center transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <LucideIcon name="Mail" size={16} /> CONTACT US
            </button>
            <p className="text-[10px] text-center text-white/40 font-mono">
              COREN REGISTERED
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
