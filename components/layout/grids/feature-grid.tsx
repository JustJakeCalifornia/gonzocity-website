"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

export interface FeatureItem {
  title: string
  description: string
  icon: React.ReactNode
}

interface FeatureGridProps {
  items: FeatureItem[]
  className?: string
}

export function FeatureGrid({ items, className }: FeatureGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto",
        className
      )}
    >
      {items.map((item, index) => (
        <Feature key={`${item.title}-${index}`} {...item} index={index} />
      ))}
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: FeatureItem & {
  index: number
}) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleTouchStart = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 1000) // Reset after 1s for fade-out
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3 || index === 6) &&
          "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800",
        index >= 3 && index < 6 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <>
          <div className="hidden lg:block opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
          <div
            className={cn(
              "lg:hidden absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none transition-opacity duration-500",
              isClicked ? "opacity-100" : "opacity-0"
            )}
          />
        </>
      )}
      {index >= 3 && (
        <>
          <div className="hidden lg:block opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
          <div
            className={cn(
              "lg:hidden absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none transition-opacity duration-500",
              isClicked ? "opacity-100" : "opacity-0"
            )}
          />
        </>
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 text-center md:text-left">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10 text-center md:text-left">
        <div
          className={cn(
            "absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-200 origin-center",
            "lg:group-hover/feature:h-8 lg:group-hover/feature:bg-brand",
            isClicked && "h-8 bg-brand"
          )}
        />
        <span
          className={cn(
            "transition duration-200 inline-block text-neutral-800 dark:text-neutral-100",
            "lg:group-hover/feature:translate-x-2",
            isClicked && "translate-x-2"
          )}
        >
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 text-center md:text-left mx-auto md:mx-0">
        {description}
      </p>
    </div>
  )
}
