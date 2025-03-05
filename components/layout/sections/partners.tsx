"use client"

interface partnersProps {
  icon: string
  name: string
}

const partners: partnersProps[] = [
  {
    icon: "Crown",
    name: "Acmebrand",
  },
  {
    icon: "Vegan",
    name: "Acmelogo",
  },
  {
    icon: "Ghost",
    name: "Acmesponsor",
  },
  {
    icon: "Puzzle",
    name: "Acmeipsum",
  },
  {
    icon: "Squirrel",
    name: "Acme",
  },
  {
    icon: "Cookie",
    name: "Accmee",
  },
  {
    icon: "Drama",
    name: "Acmetech",
  },
]

export const PartnersSection = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* <h2 className="text-sm font-medium text-neutral-600">Our Partners</h2> */}
          <h2 className="text-sm font-medium text-brand">Our Partners</h2>

          <h2 className="text-balance font-display text-3xl font-medium text-neutral-900 mb-3">
            Trusted by Industry Leaders
          </h2>

          <p className="text-pretty text-lg text-neutral-500 leading-relaxed">
            Empowering over{" "}
            <span className="font-medium text-brand">2,000+ organizations</span>{" "}
            across <span className="font-medium text-brand">50+ cities</span>{" "}
            worldwide
          </p>
          {/* <p className="text-pretty text-lg text-neutral-500 leading-relaxed">
            Empowering over{" "}
            <span className="font-medium text-gray-900">
              2,000+ organizations
            </span>{" "}
            across <span className="font-medium text-gray-900">50+ cities</span>{" "}
            worldwide
          </p> */}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
