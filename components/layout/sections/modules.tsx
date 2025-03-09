"use client"

import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
import { GradientBorderCard } from "@/components/ui/cards/gradient-border-card"
import { useTranslations } from "next-intl"
import Image from "next/image"

enum NewModule {
  YES = 1,
  NO = 0,
}

interface ModuleProps {
  id: number
  title: string
  newModule: NewModule
  description: string
  logo: string
  color: string
}

const ModulesSection = () => {
  const t = useTranslations("modules")

  const modules: ModuleProps[] = [
    {
      id: 1,
      title: t("items.gullyModule.title"),
      description: t("items.gullyModule.description"),
      newModule: NewModule.YES,
      logo: "/gullygonzo.jpg",
      color: "#B8FD7B",
    },
    {
      id: 2,
      title: t("items.ratModule.title"),
      description: t("items.ratModule.description"),
      newModule: NewModule.NO,
      logo: "/ratgonzo.jpg",
      color: "#FB5755",
    },
    {
      id: 3,
      title: t("items.streetModule.title"),
      description: t("items.streetModule.description"),
      newModule: NewModule.NO,
      logo: "/streetgonzo.jpg",
      color: "#ffc414",
    },
    {
      id: 4,
      title: t("items.parkModule.title"),
      description: t("items.parkModule.description"),
      newModule: NewModule.YES,
      logo: "/parkgonzo.jpg",
      color: "#00ccb1",
    },
  ]

  return (
    <section id="modules" className="relative w-full py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-16">
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

      {/* Modules grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 container px-4 mx-auto">
        {modules.map(({ id, title, description, newModule, logo, color }) => (
          <GradientBorderCard key={id} gradientColor={color}>
            <Badge
              data-newmodule={NewModule.YES === newModule}
              variant="secondary"
              className="absolute top-4 right-4 data-[newmodule=false]:hidden z-10 bg-[#E5F5FF] text-brand text-xs font-medium px-2 py-1 rounded-full border-0 uppercase tracking-wide"
            >
              New
            </Badge>

            <CardContent className="p-6">
              <div className="flex gap-6">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                  <Image
                    src={logo}
                    alt={`${title} logo`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="64px"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-left">{title}</h2>
                  <p className="text-muted-foreground text-left">
                    {description}
                  </p>
                </div>
              </div>
            </CardContent>
          </GradientBorderCard>
        ))}
      </div>
    </section>
  )
}

export default ModulesSection
