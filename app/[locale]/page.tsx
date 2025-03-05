import { PartnersSection } from "@/components/layout/sections/partners"
import HeroSection from "../../components/layout/sections/hero"
import BenefitsSection from "@/components/layout/sections/benefits"
import FeaturesSection from "@/components/layout/sections/features"

export default function Home() {
  return (
    <div className="flex-1 bg-gradient-to-b from-white to-gray-50 p-8">
      <div className="mx-auto max-w-4xl text-center">
        <HeroSection />
        <PartnersSection />
        <BenefitsSection />
        <FeaturesSection />
      </div>
    </div>
  )
}
