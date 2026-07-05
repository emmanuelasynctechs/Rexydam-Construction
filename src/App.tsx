import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeView } from "./components/HomeView";
import { AboutView } from "./components/AboutView";
import { ServicesView } from "./components/ServicesView";
import { ProjectsView } from "./components/ProjectsView";
import { ContactView } from "./components/ContactView";
import { QuoteConstructor } from "./components/QuoteConstructor";
import { LucideIcon } from "./components/LucideIcon";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);

  // Elite structural preloader simulation for premium corporate feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const openConsultation = () => {
    setIsQuoteOpen(true);
  };

  const closeConsultation = () => {
    setIsQuoteOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-brand-light font-sans overflow-x-hidden flex flex-col justify-between">
      
      {/* Master Loading screen */}
      <AnimatePresence>
        {!isPageLoaded && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-brand-blue z-50 flex flex-col items-center justify-center space-y-6"
          >
            {/* Pulsing structural geometry indicator */}
            <div className="relative flex items-center justify-center h-28 w-28">
              <div className="absolute inset-0 bg-brand-gold/10 rounded-full animate-ping"></div>
              <div className="absolute inset-2 bg-white/5 rounded-full animate-pulse"></div>
              <svg
                viewBox="0 0 500 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-brand-gold relative z-10"
              >
                <path d="M 60 170 L 110 120 L 110 350 L 60 350 Z" fill="#D39A09" />
                <path d="M 140 60 L 190 20 L 190 350 L 140 350 Z" fill="#D39A09" />
                <path d="M 210 110 L 250 70 L 250 310 L 210 310 Z" fill="#D39A09" />
                <path d="M 130 350 L 370 240 L 410 350 L 370 350" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="232" y="306" width="16" height="16" fill="#FFFFFF" />
                <rect x="252" y="306" width="16" height="16" fill="#FFFFFF" />
                <rect x="232" y="326" width="16" height="16" fill="#FFFFFF" />
                <rect x="252" y="326" width="16" height="16" fill="#FFFFFF" />
                <path d="M 260 100 Q 380 90 410 170 Q 420 250 320 250 L 260 250 Z" fill="#FFFFFF" />
                <path d="M 320 250 L 480 350" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="round" />
              </svg>
            </div>

            <div className="text-center space-y-2">
              <h2 className="font-display font-black text-2xl tracking-widest text-white uppercase leading-none">
                REXYDAM NIG LTD
              </h2>
              <p className="font-mono text-[9px] tracking-[0.3em] text-brand-gold font-bold uppercase">
                ENGINEERING • INFRASTRUCTURE • REAL ESTATE
              </p>
            </div>

            <div className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden relative">
              <div className="h-full bg-brand-gold w-1/2 rounded-full absolute left-0 top-0 animate-shimmer"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Corporate Shell */}
      {isPageLoaded && (
        <div className="flex flex-col min-h-screen justify-between">
          
          {/* Master Sticky Header */}
          <Header
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            openConsultation={openConsultation}
          />

          {/* Dynamic Page Views with smooth Framer Motion Transitions */}
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {activeTab === "home" && (
                  <HomeView
                    setActiveTab={setActiveTab}
                    openConsultation={openConsultation}
                  />
                )}
                {activeTab === "about" && (
                  <AboutView
                    setActiveTab={setActiveTab}
                    openConsultation={openConsultation}
                  />
                )}
                {activeTab === "services" && (
                  <ServicesView
                    setActiveTab={setActiveTab}
                    openConsultation={openConsultation}
                  />
                )}
                {activeTab === "projects" && (
                  <ProjectsView />
                )}
                {activeTab === "contact" && (
                  <ContactView />
                )}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Master Footer */}
          <Footer
            setActiveTab={setActiveTab}
            openConsultation={openConsultation}
          />

          {/* HIGH-FIDELITY PROJECT CONSULTATION BUILDER MODAL */}
          <AnimatePresence>
            {isQuoteOpen && (
              <div
                className="fixed inset-0 z-50 overflow-y-auto"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
              >
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeConsultation}
                  className="fixed inset-0 bg-brand-blue/60 backdrop-blur-sm transition-opacity"
                ></motion.div>

                {/* Modal Positioning */}
                <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    className="relative transform overflow-hidden rounded-2xl text-left shadow-2xl transition-all sm:my-8 w-full max-w-3xl border border-brand-gray"
                  >
                    <QuoteConstructor onClose={closeConsultation} />
                  </motion.div>
                </div>
              </div>
            )}
          </AnimatePresence>

        </div>
      )}

    </div>
  );
}
