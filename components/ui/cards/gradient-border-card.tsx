import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card } from "../card"

const variants = {
  initial: {
    backgroundPosition: "0 50%",
  },
  animate: {
    backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
  },
}

interface GradientBorderCardProps
  extends React.ComponentPropsWithoutRef<typeof Card> {
  gradientColor?: string
  borderWidth?: string
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export const GradientBorderCard = ({
  gradientColor = "#B8FD7B",
  borderWidth = "4px",
  children,
  className,
  containerClassName,
  ...props
}: GradientBorderCardProps) => {
  const gradientBackground = `
    radial-gradient(circle farthest-side at 0 100%,${gradientColor}60,transparent),
    radial-gradient(circle farthest-side at 100% 0,${gradientColor}80,transparent),
    radial-gradient(circle farthest-side at 100% 100%,${gradientColor}60,transparent),
    radial-gradient(circle farthest-side at 0 0,${gradientColor}80,transparent)
  `

  return (
    <div
      className={cn("relative group inline-flex w-fit", containerClassName)}
      style={{ padding: borderWidth }}
    >
      {/* Blur layer */}
      <motion.div
        className="absolute inset-0 rounded-3xl z-[1] opacity-40 group-hover:opacity-90 blur-md transition duration-500 will-change-transform"
        style={{
          backgroundSize: "200% 200%",
          background: gradientBackground,
        }}
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Sharp border layer */}
      <motion.div
        style={{
          backgroundSize: "200% 200%",
          background: gradientBackground,
        }}
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 rounded-3xl z-[1] opacity-70 group-hover:opacity-90 will-change-transform"
      />

      <Card
        className={cn(
          "relative z-10 rounded-[20px] bg-background w-fit",
          className
        )}
        {...props}
      >
        {children}
      </Card>
    </div>
  )
}
