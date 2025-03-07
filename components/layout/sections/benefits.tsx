import { GradientPatternGrid, Item } from "../grids/gradient-pattern-grid"

const items: Item[] = [
  {
    title: "HIPAA and SOC2 Compliant",
    description:
      "Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.",
  },
  {
    title: "Automated Social Media Posting",
    description:
      "Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.",
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
  },
  {
    title: "Content Calendar",
    description:
      "Plan and organize your social media content with an intuitive calendar view, ensuring you never miss a post.",
  },
  {
    title: "Audience Targeting",
    description:
      "Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.",
  },
  {
    title: "Social Listening",
    description:
      "Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.",
  },
]

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="relative w-full py-20 overflow-hidden">
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

      <GradientPatternGrid items={items} />
    </section>
  )
}

export default BenefitsSection
