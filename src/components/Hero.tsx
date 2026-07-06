import React from "react";
import { LucideIcon } from "./LucideIcon";
import { motion } from "motion/react";

interface HeroProps {
  onConsultationClick: () => void;
  onProjectsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onConsultationClick, onProjectsClick }) => {
  return (
    <section className="relative min-h-[100dvh] md:h-screen flex items-center justify-center overflow-hidden bg-brand-dark py-16 md:py-0">
      {/* Background Image Zooming in on Enter */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczMFOo5jjEp2EOndfympcfOHKSD51dZr2pwAxfH8Jl2o5E2XqgLr99Yfphqkwk2-KqyO8ItyQkoPC3aObk-ZvOGBjJSmJKLmreNKMmnd7DbKmMuFkBzaCYskqaJsVdcQMvzSnwnIzSD9DetLmLXKdw4=w829-h622-s-no-gm?authuser=0"
          alt="Premium Commercial High-Rise Construction by Rexydam"
          className="w-full h-full object-cover object-center opacity-80 animate-pulse-slow"
        />
        {/* Multilayered Brand Gradient overlays for luxury feeling */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue to-transparent opacity-50"></div>
        
        {/* Subtle engineering line grid design overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 md:pt-16 pb-8 md:pb-0">
        <div className="max-w-3xl">
          {/* Subtle branding accent tag */}
          <div className="flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/30 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full w-fit mb-6 max-w-full">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping flex-shrink-0"></span>
            <span className="text-[8px] sm:text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase truncate">
              REXYDAM NIG LTD • LEADING ENGINEERING & CIVIL WORKS
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight sm:leading-none mb-6">
            QUALITY CONSTRUCTION.<br />
            <span className="text-brand-gold">STRONGER</span> FUTURES.
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-white/80 font-light leading-relaxed mb-8 md:mb-10 max-w-2xl">
            Delivering exceptional building construction, civil engineering, and specialized corporate project management solutions with mechanical precision, robust structural analysis, and structural integrity.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch sm:items-center">
            <button
              onClick={onConsultationClick}
              id="hero-free-consultation-btn"
              className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-brand-gold text-white font-display text-sm font-bold uppercase tracking-wider hover:bg-brand-gold-light transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-brand-gold/25 flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              CONTACT US
              <LucideIcon name="ArrowRight" className="group-hover:translate-x-1 transition-transform" size={16} />
            </button>

            <button
              onClick={onProjectsClick}
              id="hero-view-projects-btn"
              className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-display text-sm font-bold uppercase tracking-wider transition-all duration-300 border border-white/25 hover:border-brand-gold flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              View Our Projects
              <LucideIcon name="Briefcase" size={16} />
            </button>
          </div>
        </div>

        {/* Floating statistics summary on bottom banner of Hero */}
        <div className="grid grid-cols-3 gap-3 md:gap-8 mt-12 md:mt-16 p-4 md:p-6 bg-brand-blue/80 backdrop-blur-md rounded-2xl border border-white/10 max-w-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 md:w-1.5 h-full bg-brand-gold"></div>
          <div className="pl-2 sm:pl-0">
            <p className="text-lg sm:text-2xl lg:text-3xl font-display font-extrabold text-white leading-none">100%</p>
            <p className="text-[8px] sm:text-[10px] font-mono tracking-wider text-white/60 uppercase mt-1.5 sm:mt-2 leading-tight">Zero Accident Record</p>
          </div>
          <div>
            <p className="text-lg sm:text-2xl lg:text-3xl font-display font-extrabold text-white leading-none">140+</p>
            <p className="text-[8px] sm:text-[10px] font-mono tracking-wider text-white/60 uppercase mt-1.5 sm:mt-2 leading-tight">Landmarks Completed</p>
          </div>
          <div>
            <p className="text-lg sm:text-2xl lg:text-3xl font-display font-extrabold text-white leading-none">20 Yrs</p>
            <p className="text-[8px] sm:text-[10px] font-mono tracking-wider text-white/60 uppercase mt-1.5 sm:mt-2 leading-tight">Corporate Experience</p>
          </div>
        </div>
      </div>

      {/* Decorative Slide-Down Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 md:gap-2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 hidden sm:flex">
        <span className="text-[8px] md:text-[9px] font-mono uppercase tracking-widest text-white/60">Discover Rexydam</span>
        <LucideIcon name="ChevronDown" className="text-brand-gold" size={16} />
      </div>
    </section>
  );
};
