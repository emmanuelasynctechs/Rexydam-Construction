import React from "react";
import { TEAM_MEMBERS_DATA, CORE_VALUES_DATA } from "../data";
import { LucideIcon } from "./LucideIcon";

interface AboutViewProps {
  setActiveTab: (tab: string) => void;
  openConsultation: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab, openConsultation }) => {
  const whyChooseUsData = [
    {
      title: "Years of Experience",
      desc: "Founded in 2012, our senior directors bring over 24+ combined years of corporate project delivery.",
      iconName: "Calendar"
    },
    {
      title: "Qualified Engineers",
      desc: "Every design is stamped by COREN registered engineers and verified under strict NSE standards.",
      iconName: "HardHat"
    },
    {
      title: "Quality Assurance",
      desc: "Continuous concrete slump checking, cylinder breakage logs, and premium grade raw supply screening.",
      iconName: "Award"
    },
    {
      title: "Latest Equipment",
      desc: "Equipped with state-of-the-art modern excavation fleets, 3D laser-guided leveling, and specialized survey gear.",
      iconName: "Cpu"
    },
    {
      title: "Transparent Pricing",
      desc: "Itemized Bill of Quantities (BOQ). We work with extreme integrity, eliminating hidden variation costs.",
      iconName: "DollarSign"
    },
    {
      title: "Reliable Delivery",
      desc: "Rigorous alignment with Critical Path Method (CPM) plans to protect handovers from delay.",
      iconName: "ClipboardCheck"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-brand-light">
      {/* Banner Title */}
      <div className="bg-brand-blue text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(211,154,9,0.12),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold">
            The Rexydam Corporate Creed
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            About Rexydam Nig Ltd
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            A trusted legacy of heavy civil infrastructure, sophisticated architectural planning, and structural design certified under COREN and ISO-9001 quality circles.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* Company Story & Core Mission / Vision */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -top-3 -left-3 w-24 h-24 bg-brand-gold/20 rounded-2xl z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200"
              alt="Rexydam Civil Engineering Site Work"
              className="rounded-2xl shadow-xl relative z-10 w-full object-cover object-center max-h-[460px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-5 rounded-2xl shadow-xl border border-brand-gold/25 z-20 hidden sm:block max-w-xs">
              <p className="text-2xl font-display font-extrabold text-brand-gold">ISO 9001:2015</p>
              <p className="text-[10px] font-mono tracking-wider text-white/80 uppercase mt-1">
                Certified Structural Engineering Processes
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-brand-gold uppercase font-bold">
                The Heritage
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-blue leading-tight">
                Our Story: Building the Foundations of Nigeria's Future
              </h3>
            </div>

            <p className="text-sm sm:text-base text-brand-slate/85 leading-relaxed">
              Established in 2012, REXYDAM NIG LTD arose from a profound engineering vision: to bridge the gap between creative architectural design and rigorous civil safety. In our fourteen years of active corporate operation, we have expanded from residential villas in Abuja into a multi-million-dollar engineering partner handling massive federal highway assets, state sea defense retaining systems, and iconic multi-story glass commercial centers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div className="p-5 bg-white rounded-xl border border-brand-gray shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/5 text-brand-blue flex items-center justify-center mb-3">
                  <LucideIcon name="Shield" size={20} />
                </div>
                <h4 className="font-display font-bold text-sm text-brand-blue">Our Mission</h4>
                <p className="text-xs text-brand-slate/85 mt-1">
                  To deliver structurally perfect engineering projects with uncompromising material safety, budget transparency, and professional design craftsmanship.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-brand-gray shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/5 text-brand-blue flex items-center justify-center mb-3">
                  <LucideIcon name="Cpu" size={20} />
                </div>
                <h4 className="font-display font-bold text-sm text-brand-blue">Our Vision</h4>
                <p className="text-xs text-brand-slate/85 mt-1">
                  To remain West Africa's gold standard for civil planning and structural precision, driving low-carbon and resilient concrete technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Parameter Cards */}
        <section className="space-y-8 bg-white rounded-2xl p-8 md:p-12 border border-brand-gray shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-xl rounded-full"></div>
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono tracking-widest text-brand-gold uppercase font-bold">
              Engineering Advantages
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-blue">
              Why Strategic Partners Choose Rexydam
            </h3>
            <p className="text-xs text-brand-slate/80">
              Our structures are calculated and erected to resist geological shifts, severe weather, and heavy wear, supported by clean corporate policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {whyChooseUsData.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-brand-light hover:bg-white rounded-xl border border-brand-gray hover:border-brand-gold/30 hover:shadow-md transition-all duration-300 flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-brand-blue text-white rounded-lg flex items-center justify-center">
                  <LucideIcon name={item.iconName} size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-blue">{item.title}</h4>
                  <p className="text-xs text-brand-slate/85 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono tracking-widest text-brand-gold uppercase font-bold">
              The Code of Ethics
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-blue">
              Our Shared Corporate Values
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES_DATA.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-brand-gray shadow-sm hover:border-brand-gold/30 transition-all text-center space-y-3"
              >
                <div className="w-12 h-12 bg-brand-blue/5 text-brand-blue rounded-full flex items-center justify-center mx-auto">
                  <LucideIcon name={val.iconName} size={22} />
                </div>
                <h4 className="font-display font-bold text-sm text-brand-blue">{val.title}</h4>
                <p className="text-xs text-brand-slate/85 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Health, Safety, and Environment Policy & Certifications */}
        <section className="bg-brand-blue text-white rounded-2xl p-8 md:p-12 relative overflow-hidden border border-brand-gold/15">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-gold opacity-5 blur-[120px] rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div className="space-y-5">
              <span className="text-xs font-mono tracking-widest text-brand-gold uppercase font-bold">
                Zero Harm Policy
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold">
                Rigorous Health, Safety & Environment (HSE) Protocols
              </h3>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                At REXYDAM, we operate with a stringent Safety Management System. Every construction worker, sub-contractor, and site visitor is subjected to mandatory safety gear guidelines (HSE Level 3), on-site crane safety audits, and deep-excavation hazard checks.
              </p>
              <ul className="space-y-2 text-xs text-white/95">
                <li className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                  Daily morning safety toolbox briefings on every site.
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                  Mandatory fall-arrest harnesses for structural operations over 2m.
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                  Regular third-party safety and load testing on all dynamic machinery.
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <h4 className="text-sm font-mono tracking-widest text-brand-gold uppercase font-bold">
                Material & Quality Assurance Code
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                Our materials testing team guarantees structural parameters through:
              </p>
              <div className="space-y-3">
                <div className="flex gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="text-brand-gold flex-shrink-0 font-display font-extrabold text-base">01</div>
                  <p className="text-xs text-white/90">
                    <span className="font-bold block text-white">Slump Diagnostics:</span>
                    Verifying concrete water-to-cement ratios on every mixer dispatch.
                  </p>
                </div>
                <div className="flex gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="text-brand-gold flex-shrink-0 font-display font-extrabold text-base">02</div>
                  <p className="text-xs text-white/90">
                    <span className="font-bold block text-white">Cylinder Crash Testing:</span>
                    Logging concrete compressive strengths at 7, 14, and 28-day intervals.
                  </p>
                </div>
                <div className="flex gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="text-brand-gold flex-shrink-0 font-display font-extrabold text-base">03</div>
                  <p className="text-xs text-white/90">
                    <span className="font-bold block text-white">Rebar In-tension Tests:</span>
                    Sourcing strictly high-yield cold-deformed steel structural rebar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono tracking-widest text-brand-gold uppercase font-bold">
              The Directorate
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-blue">
              Our Executive Engineering Officers
            </h3>
            <p className="text-xs text-brand-slate/80">
              The core masterminds steering West Africa's premium engineering landmark construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEAM_MEMBERS_DATA.map((member) => (
              <div
                key={member.id}
                id={`team-card-${member.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-brand-gray shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-[280px] overflow-hidden relative bg-brand-blue">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <div>
                      <h4 className="font-display font-bold text-base text-brand-blue">{member.name}</h4>
                      <p className="text-xs font-semibold text-brand-gold tracking-wide mt-0.5">{member.role}</p>
                    </div>
                    <p className="text-xs text-brand-slate/85 leading-relaxed">{member.bio}</p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-brand-gray/50 mt-4 space-y-3">
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono tracking-wider text-brand-slate/60 uppercase block">
                      Accreditation
                    </span>
                    <div className="flex flex-col gap-1">
                      {member.qualifications.map((qual, idx) => (
                        <div key={idx} className="flex gap-2 items-start text-[10px] text-brand-slate leading-normal">
                          <LucideIcon name="Award" className="text-brand-gold mt-0.5 flex-shrink-0" size={10} />
                          <span>{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] text-brand-slate/60 font-mono pt-1">
                    Contact: <span className="text-brand-blue font-bold">{member.email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-brand-blue to-brand-slate text-white rounded-2xl p-8 md:p-12 text-center space-y-6 border border-brand-gold/15 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(211,154,9,0.12),transparent_50%)]"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
              Ready to Initiate Your Corporate Engineering Blueprint?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
              Enquire today to coordinate a premium workspace review, topographical soil survey, or receive a formal structural cost-takeoff proposal.
            </p>
            <button
              onClick={() => {
                setActiveTab("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              id="about-cta-consultation-btn"
              className="px-8 py-3.5 rounded-xl bg-brand-gold text-white font-display text-sm font-bold uppercase tracking-wider hover:bg-brand-gold-light transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-brand-gold/25 inline-flex items-center gap-2"
            >
              Contact Our Directors <LucideIcon name="ArrowRight" size={16} />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
