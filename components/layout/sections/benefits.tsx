import { FeatureGrid, FeatureItem } from "../grids/FeatureGrid"
import {
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconTerminal2,
} from "@tabler/icons-react"

const features: FeatureItem[] = [
  {
    title: "Built for developers",
    description:
      "Built for engineers, developers, dreamers, thinkers and doers.",
    icon: <IconTerminal2 />,
  },
  {
    title: "Ease of use",
    description:
      "It's as easy as using an Apple, and as expensive as buying one.",
    icon: <IconEaseInOut />,
  },
  {
    title: "Pricing like no other",
    description:
      "Our prices are best in the market. No cap, no lock, no credit card required.",
    icon: <IconCurrencyDollar />,
  },
  {
    title: "100% Uptime guarantee",
    description: "We just cannot be taken down by anyone.",
    icon: <IconCloud />,
  },
]

export const BenefitsSection = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* <h2 className="text-sm font-medium text-neutral-600">Benefits</h2> */}
          <h2 className="text-sm font-medium text-brand">Benefits</h2>

          <h2 className="text-balance font-display text-3xl font-medium text-neutral-900 mb-3">
            Your Shortcut to Success
          </h2>

          <p className="text-pretty text-lg text-neutral-500 leading-relaxed">
            Modernize your infrastructure management with our digital solution.
            From street furniture to urban greenery, efficiently track and
            maintain your municipal assets while reducing costs and improving
            service delivery.
          </p>
        </div>
      </div>

      <FeatureGrid features={features} />
    </section>
  )
}

export default BenefitsSection
