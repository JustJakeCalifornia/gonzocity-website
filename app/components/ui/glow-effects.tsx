"use client"

import { cn } from "@/lib/utils"

interface GlowEffectsProps {
  className?: string
  variant?: "primary" | "secondary" | "accent"
}

export const GlowEffects = ({
  className,
  variant = "primary",
}: GlowEffectsProps) => {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      {/* Primary Glow */}
      <div
        className={cn(
          "absolute aspect-square w-[300px] rounded-full",
          variant === "primary" && "bg-brand/40 blur-[128px]",
          variant === "secondary" &&
            "bg-brand/30 blur-[128px] [--brand:oklch(0.571_0.219_263.582)]",
          variant === "accent" &&
            "bg-brand/30 blur-[128px] [--brand:oklch(0.571_0.219_243.582)]"
        )}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Secondary Glow */}
      <div
        className={cn(
          "absolute aspect-square w-[250px] rounded-full",
          variant === "primary" &&
            "bg-brand/25 blur-[96px] [--brand:oklch(0.671_0.219_253.582)]",
          variant === "secondary" &&
            "bg-brand/25 blur-[96px] [--brand:oklch(0.571_0.219_273.582)]",
          variant === "accent" &&
            "bg-brand/25 blur-[96px] [--brand:oklch(0.571_0.219_233.582)]"
        )}
        style={{
          top: "30%",
          left: "20%",
        }}
      />

      {/* Accent Glow */}
      <div
        className={cn(
          "absolute aspect-square w-[200px] rounded-full",
          variant === "primary" &&
            "bg-brand/20 blur-[64px] [--brand:oklch(0.471_0.219_253.582)]",
          variant === "secondary" &&
            "bg-brand/20 blur-[64px] [--brand:oklch(0.571_0.219_283.582)]",
          variant === "accent" &&
            "bg-brand/20 blur-[64px] [--brand:oklch(0.571_0.219_223.582)]"
        )}
        style={{
          bottom: "20%",
          right: "25%",
        }}
      />
    </div>
  )
}
