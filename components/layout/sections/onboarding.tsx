"use client"

import { Button } from "@/components/ui/button"
import { LucideIcon, SendHorizonal, ArrowRight } from "lucide-react"
import { GradientBorderCard } from "@/components/ui/cards/gradient-border-card"
import ContactDialog from "@/components/dialogs/contact-dialog"
import { useState } from "react"

const OnboardingCard = ({
  step,
  title,
  description,
  buttonText,
  buttonIcon: ButtonIcon,
  onClick,
}: {
  step: number
  title: string
  description: string
  buttonText?: string
  buttonIcon?: LucideIcon
  onClick?: () => void
}) => {
  return (
    <GradientBorderCard
      gradientColor="#0096FF"
      className="group h-full bg-white p-8 flex flex-col items-center text-center"
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10">
        <span className="text-sm font-medium text-brand">{step}</span>
      </div>
      <h3 className="mb-3 font-display text-xl font-medium text-neutral-900">
        {title}
      </h3>
      <p className="mb-6 text-pretty text-base leading-relaxed text-neutral-500">
        {description}
      </p>
      {buttonText && (
        <Button variant="secondary" size="sm" onClick={onClick}>
          {buttonText}
          {ButtonIcon && <ButtonIcon className="ml-2 h-4 w-4" />}
        </Button>
      )}
    </GradientBorderCard>
  )
}

const OnboardingSection = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  const handleViewModules = () => {
    document.getElementById("modules")?.scrollIntoView()
  }

  const handleRequestDemo = () => {
    setIsContactDialogOpen(true)
  }

  return (
    <section id="onboarding" className="relative w-full py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* <h2 className="text-sm font-medium text-neutral-600">Onboarding</h2> */}
          <h2 className="text-sm font-medium text-brand">Onboarding</h2>

          <h2 className="text-balance font-display text-3xl font-medium text-neutral-900 mb-3">
            How it works
          </h2>

          <p className="text-pretty text-lg text-neutral-500 leading-relaxed">
            These are the steps to seamlessly start your journey towards more
            efficient city management
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <OnboardingCard
          step={1}
          title="Try Out Demo"
          description="Experience our solution firsthand. Request a demo through our contact form and see how it can transform your operations"
          buttonText="Request Demo"
          buttonIcon={SendHorizonal}
          onClick={handleRequestDemo}
        />
        <OnboardingCard
          step={2}
          title="Select Modules"
          description="Choose the specific modules that best fit your municipality or business needs after experiencing the demo"
          buttonText="View Modules"
          buttonIcon={ArrowRight}
          onClick={handleViewModules}
        />
        <OnboardingCard
          step={3}
          title="Delivery & Training"
          description="Schedule a convenient date for system deployment and comprehensive on-site training for your team"
        />
      </div>
      <ContactDialog
        open={isContactDialogOpen}
        onOpenChange={setIsContactDialogOpen}
      />
    </section>
  )
}

export default OnboardingSection
