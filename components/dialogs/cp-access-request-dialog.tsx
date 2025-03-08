"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Loader2, Sparkles } from "lucide-react"

interface CPAccessRequestDialogProps {
  children?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export default function CPAccessRequestDialog({
  children,
  open,
  onOpenChange,
}: CPAccessRequestDialogProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    // Here you would typically send this to your API
    // const formData = new FormData(e.currentTarget)
    // // const data = {
    // //   name: formData.get("name"),
    // //   email: formData.get("email"),
    // //   organization: formData.get("organization"),
    // //   useCase: formData.get("useCase"),
    // // }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setIsLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" className="gap-1.5">
            <Sparkles className="h-4 w-4 text-brand" />
            Request Alpha Access
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {!submitted ? (
          <form onSubmit={onSubmit}>
            <DialogHeader>
              <DialogTitle>Request Alpha Access</DialogTitle>
              <DialogDescription>
                Join our exclusive alpha testing program and be among the first
                to experience our revolutionary control panel.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@municipality.gov"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="organization">Organization</Label>
                <Input
                  id="organization"
                  name="organization"
                  placeholder="City of Springfield"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="useCase">
                  How would you use our control panel?
                </Label>
                <Textarea
                  id="useCase"
                  name="useCase"
                  placeholder="Tell us about your municipality's needs..."
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit Application
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="flex flex-col items-center text-center py-6 space-y-4">
            <div className="h-12 w-12 rounded-full bg-brand/10 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-brand" />
            </div>
            <div>
              <DialogTitle className="text-xl">
                Application Received!
              </DialogTitle>
              <DialogDescription className="mt-2">
                Thank you for your interest. We&apos;ll review your application
                and get back to you soon.
              </DialogDescription>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
