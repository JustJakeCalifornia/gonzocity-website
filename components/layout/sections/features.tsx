import {
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconTerminal2,
} from "@tabler/icons-react"
import { FeatureGrid, FeatureItem } from "../grids/feature-grid"

const items: FeatureItem[] = [
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
  {
    title: "100% Uptime guarantee",
    description: "We just cannot be taken down by anyone.",
    icon: <IconCloud />,
  },
  {
    title: "100% Uptime guarantee",
    description: "We just cannot be taken down by anyone.",
    icon: <IconCloud />,
  },
]

const FeaturesSection = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* <h2 className="text-sm font-medium text-neutral-600">Features</h2> */}
          <h2 className="text-sm font-medium text-brand">Features</h2>

          <h2 className="text-balance font-display text-3xl font-medium text-neutral-900 mb-3">
            What Makes Us Different
          </h2>

          <p className="text-pretty text-lg text-neutral-500 leading-relaxed">
            Transforming municipal efficiency by streamlining the documentation
            of essential assets like gullies, trees, and street lights. Our
            solutions empower local governments to manage their resources
            effectively and enhance community services.
          </p>
        </div>
      </div>
      <FeatureGrid items={items} />
    </section>
  )
}

export default FeaturesSection
