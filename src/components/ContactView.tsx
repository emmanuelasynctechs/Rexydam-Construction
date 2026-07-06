import React from "react";
import { LucideIcon } from "./LucideIcon";

export const ContactView: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-brand-light min-h-screen">
      
      {/* Banner Title */}
      <div className="bg-brand-blue text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(211,154,9,0.12),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold">
            Corporate Communications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            Contact Headquarters
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Reach our administrative board, schedule site topographic assessments, or submit inquiry details to our central communications team.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="space-y-12">
          
          {/* Main heading */}
          <div className="space-y-4 text-center">
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-blue tracking-tight">
              Get in Touch
            </h3>
            <p className="text-sm sm:text-base text-brand-slate/80 leading-relaxed max-w-2xl mx-auto">
              Connect directly with our headquarters in Abuja for service inquiries, engineering consults, and procurement partnership proposals.
            </p>
          </div>
          
          {/* Quick Details Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-brand-gray shadow-sm space-y-4 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/5 text-brand-blue flex items-center justify-center border border-brand-blue/10">
                <LucideIcon name="MapPin" size={22} className="text-brand-blue" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-sm text-brand-blue uppercase tracking-wider">Head Office Location</h4>
                <p className="text-sm text-brand-slate/85 mt-2 leading-relaxed">
                  Plot No. K136 Cadastral Zone K-Series, Kubwa, FCT, Abuja, Nigeria.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl border border-brand-gray shadow-sm space-y-4 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/5 text-brand-blue flex items-center justify-center border border-brand-blue/10">
                <LucideIcon name="Phone" size={22} className="text-brand-blue" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-sm text-brand-blue uppercase tracking-wider">Corporate Lines</h4>
                <p className="text-sm text-brand-slate/85 mt-2 leading-relaxed font-mono">
                  07067901007<br />
                  07055590231
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl border border-brand-gray shadow-sm space-y-4 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/5 text-brand-blue flex items-center justify-center border border-brand-blue/10">
                <LucideIcon name="Mail" size={22} className="text-brand-blue" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-sm text-brand-blue uppercase tracking-wider">Electronic Inboxes</h4>
                <p className="text-sm text-brand-slate/85 mt-2 leading-relaxed font-mono">
                  General: info@rexydamnig.com
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl border border-brand-gray shadow-sm space-y-4 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/5 text-brand-blue flex items-center justify-center border border-brand-blue/10">
                <LucideIcon name="Clock" size={22} className="text-brand-blue" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-sm text-brand-blue uppercase tracking-wider">Operating Hours</h4>
                <p className="text-sm text-brand-slate/85 mt-2 leading-relaxed">
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Emergency Civil Desk: 24/7
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
