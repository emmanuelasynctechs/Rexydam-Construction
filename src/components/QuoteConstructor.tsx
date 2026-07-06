import React, { useState } from "react";
import { SERVICES_DATA } from "../data";
import { LucideIcon } from "./LucideIcon";
import { motion, AnimatePresence } from "motion/react";

interface QuoteFormData {
  serviceId: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  location: string;
  description: string;
  clientName: string;
  companyName: string;
  clientEmail: string;
  clientPhone: string;
  needsSafetyPlan: boolean;
  needsBimModel: boolean;
}

const INITIAL_DATA: QuoteFormData = {
  serviceId: "building-construction",
  projectType: "Commercial Complex",
  budgetRange: "₦100M - ₦500M",
  timeline: "6 - 12 Months",
  location: "Lekki, Lagos",
  description: "",
  clientName: "",
  companyName: "",
  clientEmail: "",
  clientPhone: "",
  needsSafetyPlan: true,
  needsBimModel: true,
};

const BUDGET_OPTIONS = [
  "Under ₦50 Million",
  "₦50 Million - ₦150 Million",
  "₦150 Million - ₦500 Million",
  "₦500 Million - ₦1.5 Billion",
  "₦1.5 Billion - ₦5 Billion+",
];

const TIMELINE_OPTIONS = [
  "Immediate (Within 1 Month)",
  "Quarterly (2 - 5 Months)",
  "Mid-term (6 - 12 Months)",
  "Long-term (12+ Months)",
  "Consultancy & Planning Only",
];

export const QuoteConstructor: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [quoteReference, setQuoteReference] = useState<string>("");

  const updateField = (key: keyof QuoteFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (step < 4) setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      handleNext();
      return;
    }

    setIsSubmitting(true);
    // Simulate high-end backend calculation
    setTimeout(() => {
      const randomId = "RXD-" + Math.floor(100000 + Math.random() * 900000);
      setQuoteReference(randomId);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const selectedService = SERVICES_DATA.find((s) => s.id === formData.serviceId) || SERVICES_DATA[0];

  return (
    <div id="quote-builder-container" className="bg-white rounded-2xl shadow-2xl border border-brand-gray overflow-hidden">
      {/* Header */}
      <div className="bg-brand-blue text-white p-6 md:p-8 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold opacity-10 blur-2xl rounded-full"></div>
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold">Rexydam Engineering Engine</span>
            <h3 className="text-2xl font-display font-extrabold tracking-tight mt-1">Project Consultation Planner</h3>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              id="close-quote-btn"
              className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            >
              <LucideIcon name="X" size={20} />
            </button>
          )}
        </div>

        {/* Multi-step progress bar */}
        {!isSuccess && (
          <div className="mt-8">
            <div className="flex justify-between text-xs font-mono text-white/60 mb-2">
              <span className={step >= 1 ? "text-brand-gold font-bold" : ""}>1. SERVICE</span>
              <span className={step >= 2 ? "text-brand-gold font-bold" : ""}>2. SPECIFICS</span>
              <span className={step >= 3 ? "text-brand-gold font-bold" : ""}>3. DETAILS</span>
              <span className={step >= 4 ? "text-brand-gold font-bold" : ""}>4. SUBMIT</span>
            </div>
            <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-gold transition-all duration-500 ease-out"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
              className="min-h-[300px]"
            >
              {/* STEP 1: SERVICE SELECTOR */}
              {step === 1 && (
                <div>
                  <h4 className="text-lg font-display font-bold text-brand-blue mb-4">
                    Select Your Required Core Engineering Discipline:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[340px] overflow-y-auto pr-2">
                    {SERVICES_DATA.map((service) => {
                      const isSelected = formData.serviceId === service.id;
                      return (
                        <div
                          key={service.id}
                          id={`service-opt-${service.id}`}
                          onClick={() => updateField("serviceId", service.id)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 flex gap-4 ${
                            isSelected
                              ? "border-brand-gold bg-brand-blue/5 shadow-md"
                              : "border-brand-gray hover:border-brand-blue hover:bg-brand-light"
                          }`}
                        >
                          <div
                            className={`p-3 rounded-lg flex-shrink-0 h-12 w-12 flex items-center justify-center ${
                              isSelected ? "bg-brand-gold text-white" : "bg-brand-light text-brand-blue"
                            }`}
                          >
                            <LucideIcon name={service.iconName} size={22} />
                          </div>
                          <div>
                            <p className="font-display font-bold text-sm text-brand-blue">{service.title}</p>
                            <p className="text-xs text-brand-slate/80 line-clamp-2 mt-1">{service.shortDescription}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: PROJECT SPECIFICS */}
              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-display font-bold text-brand-blue mb-2">Project Dimensions & Scope</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-brand-slate uppercase tracking-wider mb-1">
                        Specific Structural Type
                      </label>
                      <input
                        type="text"
                        value={formData.projectType}
                        onChange={(e) => updateField("projectType", e.target.value)}
                        placeholder="e.g. 5-Story Residential / Reinforced Concrete Bridge"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-gray text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-blue"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brand-slate uppercase tracking-wider mb-1">
                        Proposed Site Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => updateField("location", e.target.value)}
                        placeholder="e.g. Asokoro, Abuja"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-gray text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-blue"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brand-slate uppercase tracking-wider mb-1">
                        Target Budget Allocation
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => updateField("budgetRange", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-gray text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-blue bg-white"
                      >
                        {BUDGET_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brand-slate uppercase tracking-wider mb-1">
                        Desired Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => updateField("timeline", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-gray text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-blue bg-white"
                      >
                        {TIMELINE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="block text-xs font-mono text-brand-slate uppercase tracking-wider mb-2">
                      Additional Deliverables
                    </span>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-brand-blue">
                        <input
                          type="checkbox"
                          checked={formData.needsSafetyPlan}
                          onChange={(e) => updateField("needsSafetyPlan", e.target.checked)}
                          className="rounded text-brand-gold focus:ring-brand-gold h-4 w-4"
                        />
                        Custom Health & Safety Plan (HSE)
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-brand-blue">
                        <input
                          type="checkbox"
                          checked={formData.needsBimModel}
                          onChange={(e) => updateField("needsBimModel", e.target.checked)}
                          className="rounded text-brand-gold focus:ring-brand-gold h-4 w-4"
                        />
                        3D BIM Revit Architecture Model
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: BRIEF DESCRIPTION */}
              {step === 3 && (
                <div>
                  <h4 className="text-lg font-display font-bold text-brand-blue mb-2">Technical Briefing / Scope of Works</h4>
                  <p className="text-xs text-brand-slate mb-4">
                    Describe any specific civil parameters, soil conditions, structural loads, or custom aesthetic requests.
                  </p>
                  <div>
                    <label className="block text-xs font-mono text-brand-slate uppercase tracking-wider mb-1">
                      Detailed Project Overview
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => updateField("description", e.target.value)}
                      placeholder="Please elaborate on the project requirements so our senior estimators can draft a highly accurate preliminary response..."
                      rows={6}
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-gray text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-blue"
                      required
                    ></textarea>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT & VERIFICATION */}
              {step === 4 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-display font-bold text-brand-blue mb-1">Representative Contact Details</h4>
                  <p className="text-xs text-brand-slate mb-3">
                    Your details will remain strictly confidential and secured in accordance with international structural auditing protocols.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-brand-slate uppercase tracking-wider mb-1">
                        Full Name / Lead Representative
                      </label>
                      <input
                        type="text"
                        value={formData.clientName}
                        onChange={(e) => updateField("clientName", e.target.value)}
                        placeholder="e.g. Engr. Kola Adebayo"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-gray text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-blue"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brand-slate uppercase tracking-wider mb-1">
                        Company / Government Agency
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => updateField("companyName", e.target.value)}
                        placeholder="e.g. Federal Ministry of Lands"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-gray text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brand-slate uppercase tracking-wider mb-1">
                        Corporate Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.clientEmail}
                        onChange={(e) => updateField("clientEmail", e.target.value)}
                        placeholder="e.g. k.adebayo@ministry.gov.ng"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-gray text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-blue"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brand-slate uppercase tracking-wider mb-1">
                        Direct Phone Contact
                      </label>
                      <input
                        type="tel"
                        value={formData.clientPhone}
                        onChange={(e) => updateField("clientPhone", e.target.value)}
                        placeholder="e.g. +234 803 123 4567"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-gray text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-blue"
                        required
                      />
                    </div>
                  </div>

                  {/* Summary recap box */}
                  <div className="mt-4 p-3.5 bg-brand-light rounded-lg border border-brand-gray text-xs">
                    <p className="font-bold text-brand-blue mb-1">Selected Program Recap:</p>
                    <div className="grid grid-cols-2 gap-2 text-brand-slate">
                      <p>
                        <span className="font-semibold">Discipline:</span> {selectedService.title}
                      </p>
                      <p>
                        <span className="font-semibold">Scope:</span> {formData.projectType}
                      </p>
                      <p>
                        <span className="font-semibold">Budget:</span> {formData.budgetRange}
                      </p>
                      <p>
                        <span className="font-semibold">Timeline:</span> {formData.timeline}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="success-screen"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 px-4"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <LucideIcon name="ClipboardCheck" size={32} />
              </div>
              <h4 className="text-2xl font-display font-extrabold text-brand-blue">Proposal Request Lodged</h4>
              <p className="text-brand-slate text-sm max-w-md mx-auto mt-2">
                Thank you, <span className="font-bold text-brand-blue">{formData.clientName}</span>. Your technical files have been compiled and sent to the senior engineering estimation panel at REXYDAM.
              </p>

              {/* Reference credentials card */}
              <div className="bg-brand-blue text-white rounded-xl p-5 my-6 max-w-sm mx-auto text-left border border-brand-gold/30 relative overflow-hidden">
                <div className="absolute right-[-10px] bottom-[-10px] opacity-10">
                  <LucideIcon name="Shield" size={100} />
                </div>
                <div className="flex justify-between items-center border-b border-white/15 pb-2 mb-2 font-mono text-[10px] text-brand-gold-light tracking-widest uppercase">
                  <span>Rexydam Vault Record</span>
                  <span>Verified COREN</span>
                </div>
                <p className="text-xs text-white/80">Ref Number:</p>
                <p className="font-mono text-xl font-bold text-brand-gold tracking-widest">{quoteReference}</p>
                <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] text-white/95">
                  <p>
                    <span className="text-white/60 block">Assigned Advisor:</span>
                    Engr. Yusuf Bello, PMP
                  </p>
                  <p>
                    <span className="text-white/60 block">SLA Response:</span>
                    Within 1 Business Day
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  type="button"
                  id="reset-quote-btn"
                  onClick={() => {
                    setFormData(INITIAL_DATA);
                    setStep(1);
                    setIsSuccess(false);
                  }}
                  className="px-5 py-2 rounded-lg bg-brand-light text-brand-blue text-sm font-semibold hover:bg-brand-gray transition-colors border border-brand-gray"
                >
                  Create New Request
                </button>
                {onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2 rounded-lg bg-brand-blue text-white text-sm font-semibold hover:bg-brand-dark transition-colors"
                  >
                    Return to Page
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons footer */}
        {!isSuccess && (
          <div className="mt-8 pt-4 border-t border-brand-gray flex justify-between items-center">
            <button
              type="button"
              id="prev-step-btn"
              onClick={handlePrev}
              disabled={step === 1 || isSubmitting}
              className={`px-4 py-2 text-sm font-semibold rounded-lg flex items-center gap-2 transition-colors ${
                step === 1
                  ? "text-brand-slate/30 cursor-not-allowed"
                  : "text-brand-blue hover:bg-brand-light"
              }`}
            >
              <LucideIcon name="ChevronLeft" size={16} /> Back
            </button>

            <button
              type="submit"
              id="next-step-btn"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-lg bg-brand-blue text-white font-semibold text-sm hover:bg-brand-dark transition-colors flex items-center gap-2 shadow-lg hover:shadow-brand-blue/15"
            >
              {isSubmitting ? (
                <>Analyzing Parameters...</>
              ) : step === 4 ? (
                <>
                  Generate Proposal <LucideIcon name="Send" size={16} />
                </>
              ) : (
                <>
                  Next Step <LucideIcon name="ChevronRight" size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
