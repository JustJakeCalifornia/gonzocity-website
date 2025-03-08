import { PartnersSection } from "@/components/layout/sections/partners"
import HeroSection from "../../components/layout/sections/hero"
import BenefitsSection from "@/components/layout/sections/benefits"
import FeaturesSection from "@/components/layout/sections/features"
import ModulesSection from "@/components/layout/sections/modules"
import OnboardingSection from "@/components/layout/sections/onboarding"
import TestimonialSection from "@/components/layout/sections/testimonial"
import ContactSection from "@/components/layout/sections/contact"
import { GlowEffects } from "../components/ui/glow-effects"

export default function Home() {
  return (
    <div className="relative flex-1 p-8">
      {/* Glow effects positioned strategically */}
      <GlowEffects variant="primary" className="top-0" />
      <GlowEffects variant="secondary" className="top-[50vh]" />
      <GlowEffects variant="accent" className="top-[100vh]" />

      <div className="relative mx-auto max-w-4xl text-center">
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
