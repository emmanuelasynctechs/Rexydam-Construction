import React from "react";
import { LucideIcon } from "./LucideIcon";

interface HighlightItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const HighlightCards: React.FC = () => {
  const highlights: HighlightItem[] = [
    {
      id: "professionals",
      title: "Experienced Professionals",
      description: "Our core board is led by COREN registered Fellows of NSE with decades of international infrastructure experience.",
      iconName: "Users"
    },
    {
      id: "quality",
      title: "Quality Construction",
      description: "We enforce high-strength concrete slump verification, concrete cylinder crash testing, and raw chemical material certifications.",
      iconName: "Award"
    },
    {
      id: "delivery",
      title: "On-Time Delivery",
      description: "Using digital critical path modeling and modern supply-chain syncing, we protect timeline targets from slippage.",
      iconName: "Clock"
    },
    {
      id: "excellence",
      title: "Engineering Excellence",
      description: "Applying structural finite element models and BIM, our structural designs are highly optimized, clean, and structurally bulletproof.",
      iconName: "Cpu"
    },
    {
      id: "safety",
      title: "Safety First",
      description: "Strict safety audits on scaffolding, structural shoring, and protective gear achieve a 100% zero-accident safety index.",
      iconName: "Shield"
    },
    {
      id: "satisfaction",
      title: "Client Satisfaction",
      description: "We ensure transparent, uninflated cost estimates, structured milestones, and open owner-developer review sessions.",
      iconName: "ThumbsUp"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {highlights.map((item) => (
        <div
          key={item.id}
          id={`highlight-card-${item.id}`}
          className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-brand-gray hover:border-brand-gold/30 flex gap-5 overflow-hidden"
        >
          {/* Subtle brand gold corner splash */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-brand-gold/5 rounded-bl-3xl group-hover:bg-brand-gold/10 transition-colors"></div>

          {/* Icon frame */}
          <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/5 group-hover:bg-brand-gold text-brand-blue group-hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-105">
            <LucideIcon name={item.iconName} size={22} />
          </div>

          <div className="space-y-2 relative z-10">
            <h4 className="font-display font-bold text-sm sm:text-base text-brand-blue group-hover:text-brand-gold transition-colors">
              {item.title}
            </h4>
            <p className="text-xs sm:text-sm text-brand-slate/85 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
