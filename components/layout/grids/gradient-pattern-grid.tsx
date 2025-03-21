"use client"

import React, { useState } from "react"
import { useId } from "react"

export interface Item {
  title: string
  description: string
}

export interface GradientPatternItemGridProps {
  items: Item[]
  className?: string
}

export function GradientPatternGrid({
  items,
  className = "",
}: GradientPatternItemGridProps) {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null)

  return (
    <div className={`py-8 sm:py-10 lg:py-10 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 
              sm:hover:shadow-lg 
              ${activeItemIndex === index ? "shadow-lg" : ""}`}
            onClick={() => {
              if (window.innerWidth < 640) {
                // sm breakpoint
                setActiveItemIndex(activeItemIndex === index ? null : index)
              }
            }}
          >
            <PatternOverlay size={20} />
            <p className="text-base text-left font-bold text-neutral-800 dark:text-white relative z-20">
              {item.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-left text-base font-normal relative z-20">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const PatternOverlay = ({
  pattern,
  size,
}: {
  pattern?: number[][]
  size?: number
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ]
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  )
}

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width: number
  height: number
  x: string | number
  y: string | number
  squares: number[][]
}

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: GridPatternProps) {
  const patternId = useId()

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map((square, index) => {
            if (square.length >= 2) {
              const [squareX, squareY] = square
              return (
                <rect
                  strokeWidth="0"
                  key={`${squareX}-${squareY}-${index}`}
                  width={width + 1}
                  height={height + 1}
                  x={squareX * width}
                  y={squareY * height}
                />
              )
            }
            return null
          })}
        </svg>
      )}
    </svg>
  )
}
