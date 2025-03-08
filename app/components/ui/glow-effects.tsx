"use client"

import { cn } from "@/lib/utils"

interface GlowEffectsProps {
  className?: string
  variant?: "primary" | "secondary" | "accent"
  position?: "left" | "right" | "center"
  size?: "small" | "medium" | "large"
}

export const GlowEffects = ({
  className,
  variant = "primary",
  position = "center",
  size = "medium",
}: GlowEffectsProps) => {
  // Dynamic size multipliers
  const sizeMultiplier = {
    small: 0.8,
    medium: 1.2,
    large: 1.8,
  }

  // Position offsets for more natural feel
  const getPositionStyle = (pos: typeof position, offset = 0) => {
    const baseOffsets = {
      left: { left: "0%", transform: "translateX(-50%)" },
      right: { right: "0%", transform: "translateX(50%)" },
      center: { left: "50%", transform: "translateX(-50%)" },
    }

    const posStyle = baseOffsets[pos]
    if (offset) {
      const match = posStyle.transform.match(/-?\d+/)
      const translateX = match ? parseInt(match[0]) : -50 // Default to -50 if no match
      return {
        ...posStyle,
        transform: `translateX(${translateX + offset}%)`,
      }
    }
    return posStyle
  }

  return (
    <div
      className={cn(
        "absolute -z-10 overflow-visible",
        "w-[200vw] -left-[50vw]", // Adjusted spread
        className
      )}
    >
      {/* Primary Glow */}
      <div
        className={cn(
          "absolute aspect-square rounded-full transition-all duration-1000 ease-in-out",
          variant === "primary" && "bg-brand/25 blur-[160px]",
          variant === "secondary" && "bg-brand/20 blur-[160px] rotate-45",
          variant === "accent" && "bg-brand/20 blur-[160px] -rotate-45"
        )}
        style={{
          width: `${600 * sizeMultiplier[size]}px`,
          top: "50%",
          ...getPositionStyle(position),
          transform: `${getPositionStyle(position).transform} translateY(-50%)`,
        }}
      />

      {/* Secondary Glow - Left */}
      <div
        className={cn(
          "absolute aspect-square rounded-full mix-blend-multiply transition-all duration-1000 ease-in-out",
          variant === "primary" && "bg-brand/15 blur-[130px] rotate-90",
          variant === "secondary" && "bg-brand/15 blur-[130px] rotate-180",
          variant === "accent" && "bg-brand/15 blur-[130px] rotate-[135deg]"
        )}
        style={{
          width: `${500 * sizeMultiplier[size]}px`,
          top: "40%",
          ...getPositionStyle("left", -20),
        }}
      />

      {/* Secondary Glow - Right */}
      <div
        className={cn(
          "absolute aspect-square rounded-full mix-blend-multiply transition-all duration-1000 ease-in-out",
          variant === "primary" && "bg-brand/15 blur-[130px] -rotate-90",
          variant === "secondary" && "bg-brand/15 blur-[130px] rotate-[200deg]",
          variant === "accent" && "bg-brand/15 blur-[130px] rotate-[225deg]"
        )}
        style={{
          width: `${500 * sizeMultiplier[size]}px`,
          top: "40%",
          ...getPositionStyle("right", 20),
        }}
      />

      {/* Accent Glow - Top */}
      <div
        className={cn(
          "absolute aspect-square rounded-full mix-blend-multiply transition-all duration-1000 ease-in-out opacity-90",
          variant === "primary" && "bg-brand/15 blur-[100px] rotate-45",
          variant === "secondary" && "bg-brand/15 blur-[100px] rotate-[135deg]",
          variant === "accent" && "bg-brand/15 blur-[100px] rotate-[180deg]"
        )}
        style={{
          width: `${400 * sizeMultiplier[size]}px`,
          top: "10%",
          ...getPositionStyle(
            position === "left" ? "right" : "left",
            position === "left" ? 30 : -30
          ),
        }}
      />

      {/* Accent Glow - Bottom */}
      <div
        className={cn(
          "absolute aspect-square rounded-full mix-blend-multiply transition-all duration-1000 ease-in-out opacity-90",
          variant === "primary" && "bg-brand/15 blur-[100px] -rotate-45",
          variant === "secondary" && "bg-brand/15 blur-[100px] rotate-[225deg]",
          variant === "accent" && "bg-brand/15 blur-[100px] rotate-[270deg]"
        )}
        style={{
          width: `${400 * sizeMultiplier[size]}px`,
          bottom: "10%",
          ...getPositionStyle(
            position === "right" ? "left" : "right",
            position === "right" ? -30 : 30
          ),
        }}
      />
    </div>
  )
}
