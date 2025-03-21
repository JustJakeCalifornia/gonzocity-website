import { PartnersSection } from "@/components/layout/sections/partners"
import HeroSection from "../../components/layout/sections/hero"
import BenefitsSection from "@/components/layout/sections/benefits"
import FeaturesSection from "@/components/layout/sections/features"
import ModulesSection from "@/components/layout/sections/modules"
import OnboardingSection from "@/components/layout/sections/onboarding"
import TestimonialSection from "@/components/layout/sections/testimonial"
import ContactSection from "@/components/layout/sections/contact"

export default function Home() {
  return (
    <div className="flex-1 bg-background p-8">
      <div className="mx-auto max-w-4xl text-center">
        <HeroSection />
        <PartnersSection />
        <BenefitsSection />
        <FeaturesSection />
        <ModulesSection />
        <OnboardingSection />
        <TestimonialSection />
        <ContactSection />
      </div>
    </div>
  )
}
