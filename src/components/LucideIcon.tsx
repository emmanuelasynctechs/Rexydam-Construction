import React from "react";
import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, className = "", size = 24 }) => {
  // Safe map to ensure no runtime errors on missing keys
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Fallback to a standard building or safety icon if string doesn't match
    return <Icons.HardHat className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
};
