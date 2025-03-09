import { useTranslations } from "next-intl"
import { GradientPatternGrid, Item } from "../grids/gradient-pattern-grid"

export const BenefitsSection = () => {
  const t = useTranslations("benefits")

  const items: Item[] = [
    {
      title: t("items.item1.title"),
      description: t("items.item1.description"),
    },
    {
      title: t("items.item2.title"),
      description: t("items.item2.description"),
    },
    {
      title: t("items.item3.title"),
      description: t("items.item3.description"),
    },
    {
      title: t("items.item4.title"),
      description: t("items.item4.description"),
    },
  ]

  return (
    <section id="benefits" className="relative w-full py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* <h2 className="text-sm font-medium text-neutral-600">Benefits</h2> */}
          <h2 className="text-sm font-medium text-brand">
            {t("sectionTitle")}
          </h2>

          <h2 className="text-balance font-display text-3xl font-medium text-neutral-900 mb-3">
            {t("heading")}
          </h2>

          <p className="text-pretty text-lg text-neutral-500 leading-relaxed">
            {t("description")}
          </p>
        </div>
      </div>

      <GradientPatternGrid items={items} />
    </section>
  )
}

export default BenefitsSection
