import React from "react";
import * as LucideIcons from "lucide-react";
import { HelpCircle } from "lucide-react";

// Get all valid Lucide icon names
type IconName = keyof typeof LucideIcons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon name from lucide-react (type-safe, with autocomplete) */
  name: IconName | string;
  /** Icon size in px */
  size?: number;
  /** Icon color */
  color?: string;
  /** Custom CSS class */
  className?: string;
  /** Stroke width for icon lines */
  strokeWidth?: number;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
  strokeWidth = 2,
  ...props
}) => {
  // Safely access the icon from the LucideIcons object
  const IconComponent =
    (LucideIcons as unknown as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>)[
      name
    ] || HelpCircle;

  // Optional: Warn if the icon name is invalid
  if (!LucideIcons[name as IconName]) {
    console.warn(`⚠️ [Icon]: "${name}" is not a valid Lucide icon name.`);
  }

  return (
    <IconComponent
      width={size}
      height={size}
      color={IconComponent === HelpCircle ? "gray" : color}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
};

export default Icon;
