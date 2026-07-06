import React, { useState, useEffect } from "react";
import { Hero } from "./Hero";
import { HighlightCards } from "./HighlightCards";
import { SERVICES_DATA, PROJECTS_DATA, TESTIMONIALS_DATA } from "../data";
import { LucideIcon } from "./LucideIcon";

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  openConsultation: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab, openConsultation }) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Auto-play testimonial carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleTestimonialPrev = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleTestimonialNext = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  // Why Choose Us highlights
  const whyChooseUsShort = [
    { title: "20 Years Experience", desc: "Decades of deep civil & structural expertise across Nigeria.", icon: "Calendar" },
    { title: "Qualified Engineers", desc: "NSE Members and COREN registered principal directors.", icon: "HardHat" },
    { title: "Quality Assurance", desc: "Rigorous standards compliance and slump crash testing.", icon: "Award" },
    { title: "Latest Equipment", desc: "Large fleet of 3D laser graders, cranes, and heavy excavation machinery.", icon: "Cpu" },
    { title: "Transparent Pricing", desc: "No hidden variation costs. Honest, detailed Bill of Quantities.", icon: "DollarSign" },
    { title: "Reliable Delivery", desc: "Strict adherence to Critical Path Method (CPM) timelines.", icon: "ClipboardCheck" }
  ];

  return (
    <div className="space-y-24 bg-brand-light pb-16">
      
      {/* Full-screen Hero section */}
      <Hero
        onConsultationClick={() => {
          setActiveTab("contact");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onProjectsClick={() => {
          setActiveTab("projects");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Highlights grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-20 md:-mt-10">
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-brand-gray/80 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-gold uppercase">
              Rexydam Standards
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-brand-blue">
              Commitment to Engineering Perfection
            </h3>
          </div>
          <HighlightCards />
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-gold/15 rounded-3xl z-0"></div>
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczMSOYFG1YQf1ZHQr3FE8sFkjZPOiorK_6ntkCtriQcRGdZy0LrSq5hr6zb5yqEoJ7hs5VpmYZ0H79xJTbexzplduSHdVULeLytpBw54653tBo6Fbdp-Zumdmu2xkpMGlKdrjfGOaV4KeoWuiK0lCnE=w829-h622-s-no-gm?authuser=4"
            alt="Engineers reviewing site drawings"
            referrerPolicy="no-referrer"
            className="rounded-2xl shadow-xl relative z-10 w-full object-cover max-h-[420px]"
          />
          <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-5 rounded-xl border border-brand-gold/20 shadow-xl hidden sm:block z-20 max-w-[240px]">
            <p className="text-2xl font-display font-extrabold text-brand-gold leading-tight uppercase">OVER 25,000 HOURS</p>
            <p className="text-[10px] font-mono tracking-wider uppercase text-white/85 mt-1 leading-normal">
              Safe Site Hours with Zero Accident Incidents
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-brand-gold uppercase font-bold">
              Company Story Preview
            </span>
            <h3 className="text-3xl font-display font-extrabold text-brand-blue tracking-tight leading-none">
              Pioneering Integrity in Modern Civil Construction
            </h3>
          </div>
          <p className="text-sm sm:text-base text-brand-slate/85 leading-relaxed">
            REXYDAM NIG LTD stands as West Africa's leading private structural design and engineering firm. We coordinate highly optimized civil designs, storm drainage systems, federal roads, and high-end residential real estate developments. From deep pile maritime foundations in Lagos to structural frame modeling, our certified specialists ensure quality grade raw material selection and zero timeline slippage.
          </p>
          <button
            onClick={() => {
              setActiveTab("about");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            id="home-about-learn-more-btn"
            className="px-6 py-3 rounded-lg bg-brand-blue text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-brand-dark transition-colors inline-flex items-center gap-2 group shadow-lg shadow-brand-blue/15"
          >
            Learn More About Us
            <LucideIcon name="ChevronRight" className="group-hover:translate-x-1 transition-transform" size={14} />
          </button>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="bg-brand-blue text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold opacity-5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-brand-gold uppercase font-bold">
                Professional Scope
              </span>
              <h3 className="text-3xl font-display font-black tracking-tight text-white">
                Our Core Disciplines
              </h3>
            </div>
            <button
              onClick={() => {
                setActiveTab("services");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              id="home-services-all-btn"
              className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-display text-xs font-bold uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
            >
              Explore Scope Details <LucideIcon name="ArrowRight" size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <div
                key={service.id}
                id={`service-preview-card-${service.id}`}
                onClick={() => {
                  setActiveTab("services");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-gold/40 transition-all duration-300 cursor-pointer space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold text-white flex items-center justify-center shadow-lg shadow-brand-gold/10 group-hover:scale-105 transition-transform">
                  <LucideIcon name={service.iconName} size={20} />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-extrabold text-base text-white group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="text-[10px] font-mono tracking-wider text-brand-gold uppercase font-bold flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-all">
                  Review Capabilities <LucideIcon name="ChevronRight" size={12} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Projects masonry-grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-brand-gold uppercase font-bold">
              Featured Case Studies
            </span>
            <h3 className="text-3xl font-display font-extrabold text-brand-blue tracking-tight leading-none">
              Landmarks of Engineering Excellence
            </h3>
          </div>
          <button
            onClick={() => {
              setActiveTab("projects");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            id="home-projects-all-btn"
            className="px-5 py-2.5 rounded-lg bg-brand-blue hover:bg-brand-dark text-white font-display text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
          >
            View All Projects <LucideIcon name="ArrowRight" size={14} />
          </button>
        </div>

        {/* Display top 3 projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS_DATA.slice(0, 3).map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setActiveTab("projects");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-brand-gray shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Cover with Watermark Overlay */}
                <div className="h-[220px] overflow-hidden relative bg-brand-dark select-none">
                  <img
                    src={project.imageUrl}
                    alt={project.title.toLowerCase()}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Faint, slant watermark */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                    <span className="text-white/20 font-display font-black text-3xl tracking-[0.2em] uppercase transform -rotate-12 select-none">
                      REXYDAM
                    </span>
                  </div>
                </div>

                {/* Body content showing only building construction */}
                <div className="p-6 text-center">
                  <h4 className="font-display font-extrabold text-base text-brand-blue uppercase tracking-wider group-hover:text-brand-gold transition-colors">
                    {project.title}
                  </h4>
                  {project.location && (
                    <p className="text-xs text-brand-slate/70 font-mono mt-1 uppercase tracking-wider">
                      {project.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 border-y border-brand-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono tracking-widest text-brand-gold uppercase font-bold">
              Engineering Advantages
            </span>
            <h3 className="text-3xl font-display font-extrabold text-brand-blue tracking-tight">
              Rigid Operational Principles
            </h3>
            <p className="text-xs sm:text-sm text-brand-slate">
              Our civil programs are optimized to withstand West African conditions and dynamic commercial stress criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsShort.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-brand-light border border-brand-gray flex gap-4 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-brand-blue text-white rounded-xl flex items-center justify-center">
                  <LucideIcon name={item.icon} size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-blue">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-brand-slate/85 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono tracking-widest text-brand-gold uppercase font-bold">
            Executive Endorsements
          </span>
          <h3 className="text-3xl font-display font-extrabold text-brand-blue tracking-tight">
            Client Testimonials
          </h3>
        </div>

        {/* Carousel frame */}
        <div className="bg-brand-blue text-white rounded-3xl p-8 sm:p-12 border border-brand-gold/15 relative overflow-hidden shadow-2xl max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-5 blur-[100px] rounded-full"></div>
          
          <div className="min-h-[220px] flex flex-col justify-between relative z-10">
            {/* Quote icon banner */}
            <div className="text-brand-gold opacity-20 text-6xl font-serif leading-none absolute top-[-20px] left-[-10px] select-none">
              &ldquo;
            </div>

            <div className="space-y-6 relative z-10">
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed italic font-light">
                &ldquo;{TESTIMONIALS_DATA[activeTestimonialIdx].quote}&rdquo;
              </p>
              
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-display font-bold text-sm text-white">
                    {TESTIMONIALS_DATA[activeTestimonialIdx].name}
                  </h4>
                  
                  {/* Star Ratings */}
                  <div className="flex gap-1 mt-1 text-brand-gold-light">
                    {Array.from({ length: TESTIMONIALS_DATA[activeTestimonialIdx].rating }).map((_, i) => (
                      <LucideIcon key={i} name="Star" className="fill-brand-gold-light text-brand-gold-light" size={10} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel navigation controls */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
              <span className="text-[10px] font-mono tracking-wider text-white/50">
                CASE ASSOCIATED: {TESTIMONIALS_DATA[activeTestimonialIdx].projectAssociated}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={handleTestimonialPrev}
                  className="p-2 bg-white/5 hover:bg-white/15 border border-white/10 rounded-lg text-white transition-colors"
                  title="Previous testimonial"
                >
                  <LucideIcon name="ChevronLeft" size={16} />
                </button>
                <button
                  onClick={handleTestimonialNext}
                  className="p-2 bg-white/5 hover:bg-white/15 border border-white/10 rounded-lg text-white transition-colors"
                  title="Next testimonial"
                >
                  <LucideIcon name="ChevronRight" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action banner */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-slate text-white py-16 px-6 sm:px-12 text-center rounded-3xl max-w-7xl mx-auto border border-brand-gold/15 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(211,154,9,0.12),transparent_50%)]"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h3 className="text-3xl font-display font-extrabold tracking-tight">
            Let's Build Something Great Together
          </h3>
          <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
            Partner with REXYDAM NIG LTD to unlock structural precision, robust cost takeoffs, and premium building handovers. Get started with a directors' review session today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <button
              onClick={() => {
                setActiveTab("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              id="cta-contact-btn"
              className="px-8 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-white font-display text-sm font-bold uppercase tracking-wider transition-colors shadow-lg shadow-brand-gold/20 flex items-center gap-2"
            >
              Contact Us <LucideIcon name="Mail" size={16} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
