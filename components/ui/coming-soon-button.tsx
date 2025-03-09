"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"

export function ComingSoonButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [showInitialHover, setShowInitialHover] = useState(true)

  const t = useTranslations("navbar")

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialHover(false)
    }, 20000)

    return () => clearTimeout(timer)
  }, [])

  const isHoverCardOpen = isHovered || showInitialHover

  return (
    <HoverCard open={isHoverCardOpen} onOpenChange={setIsHovered}>
      <HoverCardTrigger asChild>
        <Button variant="secondary" className="group relative">
          <span>{t("actions.signIn")}</span>
          <div className="ml-1.5 h-2 w-2 rounded-full bg-brand/40 animate-pulse" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent align="end" className="w-80 p-4">
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-brand/40 animate-pulse" />
              <span className="text-sm font-medium text-brand">
                {t("comingSoon.title")}
              </span>
            </div>
            <h4 className="font-medium leading-none mt-2">
              {t("comingSoon.subtitle")}
            </h4>
            <p className="text-sm text-muted-foreground mt-1.5">
              {t("comingSoon.description")}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
