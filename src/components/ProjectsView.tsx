import React, { useState } from "react";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";
import { LucideIcon } from "./LucideIcon";
import { motion, AnimatePresence } from "motion/react";

export const ProjectsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Our Projects");

  const categories = ["Our Projects"];

  const filteredProjects = PROJECTS_DATA;

  return (
    <div className="pt-24 pb-16 bg-brand-light min-h-screen">
      
      {/* Banner Title */}
      <div className="bg-brand-blue text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(211,154,9,0.12),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold">
            The Rexydam Gallery of Landmarks
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            Our Landmark Projects
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            A verified portfolio of state highway constructions, high-load industrial installations, modern commercial plazas, and bespoke luxury residential masterpieces.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        
        {/* Category Filters row */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 pb-2 border-b border-brand-gray overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-display text-base sm:text-lg md:text-xl font-extrabold tracking-wide transition-all ${
                selectedCategory === cat
                  ? "bg-brand-gold text-white shadow-md shadow-brand-gold/20"
                  : "bg-white text-brand-blue hover:bg-brand-gray border border-brand-gray"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={project.id}
                id={`project-card-${project.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-brand-gray shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Cover with Watermark Overlay */}
                  <div className="h-[280px] overflow-hidden relative bg-brand-dark select-none">
                    <img
                      src={project.imageUrl}
                      alt="building construction"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Faint, slant watermark */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                      <span className="text-white/20 font-display font-black text-4xl sm:text-5xl tracking-[0.25em] uppercase transform -rotate-12 select-none">
                        REXYDAM
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 text-center">
                    <h4 className="font-display font-extrabold text-base text-brand-blue uppercase tracking-wider">
                      BUILDING CONSTRUCTION
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if no projects matched filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-brand-gray shadow-sm">
            <LucideIcon name="HardHat" className="text-brand-gold mx-auto mb-4" size={32} />
            <p className="text-brand-blue font-display font-bold text-lg">No Ongoing Works Categorized</p>
            <p className="text-xs text-brand-slate mt-1">Please select another engineering or architecture tab.</p>
          </div>
        )}

      </div>

    </div>
  );
};
