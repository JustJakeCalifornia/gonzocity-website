import { icons } from "lucide-react";

interface IconProps {
  name: keyof typeof icons;
  color: string;
  size?: number;
  className?: string;
}

export const Icon = ({ name, color, size = 24, className }: IconProps) => {
  if (!name || !(name in icons)) {
    console.error(`Icon "${name}" not found in Lucide icons`);
    return null;
  }

  const LucideIcon = icons[name as keyof typeof icons];

  return <LucideIcon color={color} size={size} className={className} />;
};
