import ModulesBentoGrid from "@/components/ui/modules-bento-grid"
import { NewModule } from "@/components/ui/module-card"

const MODULES = [
  {
    title: "Gully Management",
    newModule: NewModule.NO,
    description:
      "Track and manage gullies with precise location data, maintenance history, and real-time status updates.",
    logo: "/gullygonzo.jpg",
  },
  //   {
  //     title: "Street Light Inventory",
  //     newModule: NewModule.YES,
  //     description:
  //       "Monitor street light conditions, power usage, and maintenance schedules across your entire municipality.",
  //     logo: "/globe.svg",
  //   },
  {
    title: "Tree Registry",
    newModule: NewModule.NO,
    description:
      "Document and manage urban forestry with details on species, health status, and maintenance requirements.",
    logo: "/parkgonzo.jpg",
  },
  {
    title: "Waste Management",
    newModule: NewModule.NO,
    description:
      "Optimize garbage collection routes and monitor bin statuses throughout your municipality.",
    logo: "/ratgonzo.jpg",
  },
  {
    title: "Road Condition Tracking",
    newModule: NewModule.YES,
    description:
      "Monitor road quality, identify maintenance needs, and track repair history with precision GPS mapping.",
    logo: "/streetgonzo.jpg",
  },
  //   {
  //     title: "Park Asset Management",
  //     newModule: NewModule.NO,
  //     description:
  //       "Inventory and track maintenance for all park amenities, from benches to playground equipment.",
  //     logo: "/window.svg",
  //   },
  //   {
  //     title: "Analytics Dashboard",
  //     newModule: NewModule.YES,
  //     description:
  //       "Get comprehensive insights with data visualization tools for all your municipal assets and operations.",
  //     logo: "/file.svg",
  //   },
]

const ModulesSection = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* <h2 className="text-sm font-medium text-neutral-600">Features</h2> */}
          <h2 className="text-sm font-medium text-brand">Modules</h2>

          <h2 className="text-balance font-display text-3xl font-medium text-neutral-900 mb-3">
            Everything you need to manage your city
          </h2>

          <p className="text-pretty text-lg text-neutral-500 leading-relaxed">
            Choose from our comprehensive suite of modules to build the perfect
            solution for your municipality.
          </p>
        </div>

        <ModulesBentoGrid items={MODULES} />
      </div>
    </section>
  )
}

export default ModulesSection
