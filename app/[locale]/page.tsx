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
    <div className="relative flex-1">
      {/* Full-width container for content */}
      <div className="relative w-full">
        {/* Hero Section */}
        <section className="relative min-h-screen">
          <GlowEffects
            variant="primary"
            position="center"
            size="large"
            className="h-[120vh] opacity-60"
          />
          <div className="relative mx-auto max-w-4xl px-8 py-24">
            <HeroSection />
          </div>
        </section>

        {/* Partners Section */}
        <section className="relative min-h-[50vh] -mt-32">
          <GlowEffects
            variant="secondary"
            position="right"
            size="small"
            className="h-[70vh] opacity-40"
          />
          <div className="relative mx-auto max-w-4xl px-8 py-24">
            <PartnersSection />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative min-h-[70vh] -mt-32">
          <GlowEffects
            variant="accent"
            position="left"
            size="medium"
            className="h-[90vh] opacity-50"
          />
          <div className="relative mx-auto max-w-4xl px-8 py-24">
            <BenefitsSection />
          </div>
        </section>

        {/* Features Section */}
        <section className="relative min-h-[60vh] -mt-32">
          <GlowEffects
            variant="primary"
            position="center"
            size="medium"
            className="h-[80vh] opacity-45"
          />
          <div className="relative mx-auto max-w-4xl px-8 py-24">
            <FeaturesSection />
          </div>
        </section>

        {/* Modules Section */}
        <section className="relative min-h-[65vh] -mt-32">
          <GlowEffects
            variant="secondary"
            position="right"
            size="small"
            className="h-[85vh] opacity-40"
          />
          <div className="relative mx-auto max-w-4xl px-8 py-24">
            <ModulesSection />
          </div>
        </section>

        {/* Onboarding Section */}
        <section className="relative min-h-[55vh] -mt-32">
          <GlowEffects
            variant="accent"
            position="left"
            size="medium"
            className="h-[75vh] opacity-50"
          />
          <div className="relative mx-auto max-w-4xl px-8 py-24">
            <OnboardingSection />
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="relative min-h-[45vh] -mt-32">
          <GlowEffects
            variant="primary"
            position="center"
            size="small"
            className="h-[65vh] opacity-45"
          />
          <div className="relative mx-auto max-w-4xl px-8 py-24">
            <TestimonialSection />
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative min-h-[40vh] -mt-32">
          <GlowEffects
            variant="secondary"
            position="right"
            size="small"
            className="h-[60vh] opacity-40"
          />
          <div className="relative mx-auto max-w-4xl px-8 py-24">
            <ContactSection />
          </div>
        </section>
      </div>
    </div>
  )
}
