import React from "react";
import * as LucideIcons from "lucide-react";
import { HelpCircle } from "lucide-react";

// Define specific icons you want to support (adjust as needed)
const SUPPORTED_ICONS = [
  'HelpCircle', 'Home', 'Settings', 'User', 'Search', 
  'ArrowLeft', 'ArrowRight', 'Plus', 'Minus', 'X'
] as const;

type SupportedIconName = typeof SUPPORTED_ICONS[number];
type IconName = SupportedIconName | (string & {});

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref'> {
  name: IconName;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
  ...props
}) => {
  const IconComponent:any = React.useMemo(() => {
    if (typeof name === "string" && name in LucideIcons) {
      const potentialIcon = LucideIcons[name as keyof typeof LucideIcons];
      return typeof potentialIcon === 'function' ? potentialIcon : undefined;
    }
    return undefined;
  }, [name]);

  if (!IconComponent) {
    return (
      <HelpCircle
        size={size}
        color="gray"
        strokeWidth={strokeWidth}
        className={className}
        {...props}
      />
    );
  }

  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
};

export default Icon;