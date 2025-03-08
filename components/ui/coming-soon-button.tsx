"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useState, useEffect } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import CPAccessRequestDialog from "../dialogs/cp-access-request-dialog"

export function ComingSoonButton() {
  // Separate state for hover and initial animation
  const [isHovered, setIsHovered] = useState(false)
  const [showInitialHover, setShowInitialHover] = useState(true)
  const [isAlphaDialogOpen, setIsAlphaDialogOpen] = useState(false)

  // Handle initial animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialHover(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  // Combine states for HoverCard open state
  const isHoverCardOpen = isHovered || showInitialHover

  return (
    <HoverCard open={isHoverCardOpen} onOpenChange={setIsHovered}>
      <HoverCardTrigger asChild>
        <Button variant="secondary" className="group relative">
          <span>Log in</span>
          <div className="ml-1.5 h-2 w-2 rounded-full bg-brand/40 animate-pulse" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent align="end" className="w-80 p-4">
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-brand/40 animate-pulse" />
              <span className="text-sm font-medium text-brand">
                Coming Soon
              </span>
            </div>
            <h4 className="font-medium leading-none mt-2">
              Control Panel Access
            </h4>
            <p className="text-sm text-muted-foreground mt-1.5">
              Our control panel for managing your municipal assets is under
              construction. Stay tuned for a modern, engaging experience.
            </p>
          </div>
          <CPAccessRequestDialog
            open={isAlphaDialogOpen}
            onOpenChange={setIsAlphaDialogOpen}
          >
            <div className="mt-1 border-t pt-3">
              <Button variant="outline" className="w-full group" size="sm">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                <span>Request Alpha Access</span>
                <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </CPAccessRequestDialog>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
