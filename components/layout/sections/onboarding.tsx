"use client"

import { Button } from "@/components/ui/button"
import { LucideIcon, SendHorizonal, ArrowRight } from "lucide-react"

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
    <div className="group relative flex-1 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200 transition-all duration-300 hover:shadow-lg hover:ring-brand/20">
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
    </div>
  )
}

const OnboardingSection = () => {
  const handleViewModules = () => {
    document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleRequestDemo = () => {
    // For now, this does nothing as requested
    console.log("Request demo")
  }

  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>
    </section>
  )
}

export default OnboardingSection
