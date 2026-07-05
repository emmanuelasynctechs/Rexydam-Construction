import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  lightText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-10",
  showText = true,
  lightText = false
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <img
        src="https://lh3.googleusercontent.com/pw/AP1GczMgK4-Hx31b3TJRs4N0Ejw4z3fBag_DMqIlP7Kr4QxK8m2Jtqu4YJHfg2VMaC89i_uDD9DAIdssgDt7sohbfp6Ilb5CmhiGjIrky8wtRb-xJZiPqFw-y-kplkrfrwFe2_foFDPlNPqtVrxoSqeg3Qo=w816-h653-s-no-gm?authuser=4"
        alt="Rexydam Nig Ltd Logo"
        referrerPolicy="no-referrer"
        className={`${className} object-contain transition-all duration-300`}
      />

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-display text-xl font-extrabold tracking-wider ${
              lightText ? "text-white" : "text-brand-blue"
            }`}
          >
            REXYDAM
          </span>
          <span
            className={`font-mono text-[9px] font-bold tracking-[0.22em] mt-0.5 ${
              lightText ? "text-brand-gold-light" : "text-brand-gold"
            }`}
          >
            NIG LTD
          </span>
        </div>
      )}
    </div>
  );
};
