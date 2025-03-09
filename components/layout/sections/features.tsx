import { FeatureGrid, FeatureItem } from "../grids/feature-grid"
import {
  BarChart3,
  Bell,
  ClipboardList,
  PictureInPicture,
  Sparkle,
  TabletSmartphone,
} from "lucide-react"
import { useTranslations } from "next-intl"

const FeaturesSection = () => {
  const t = useTranslations("features")

  const items: FeatureItem[] = [
    {
      title: t("items.item1.title"),
      description: t("items.item1.description"),
      icon: <ClipboardList />,
    },
    {
      title: t("items.item2.title"),
      description: t("items.item2.description"),
      icon: <TabletSmartphone />,
    },
    {
      title: t("items.item3.title"),
      description: t("items.item3.description"),
      icon: <BarChart3 />,
    },
    {
      title: t("items.item4.title"),
      description: t("items.item4.description"),
      icon: <PictureInPicture />,
    },
    {
      title: t("items.item5.title"),
      description: t("items.item5.description"),
      icon: <Sparkle />,
    },
    {
      title: t("items.item6.title"),
      description: t("items.item6.description"),
      icon: <Bell />,
    },
  ]

  return (
    <section id="features" className="relative w-full py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* <h2 className="text-sm font-medium text-neutral-600">{t("sectionTitle")}</h2> */}
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
      <FeatureGrid items={items} />
    </section>
  )
}

export default FeaturesSection
