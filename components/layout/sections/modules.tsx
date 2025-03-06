"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

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

const variants = {
  initial: {
    backgroundPosition: "0 50%",
  },
  animate: {
    backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
  },
}

const ModulesSection = () => {
  const modules: ModuleProps[] = [
    {
      id: 1,
      title: "Asset Management",
      newModule: NewModule.YES,
      description:
        "Effortlessly track and manage municipal assets with our intuitive interface.",
      logo: "/ratgonzo.jpg",
      color: "#FB5755",
    },
    {
      id: 2,
      title: "Asset Management",
      newModule: NewModule.NO,
      description:
        "Effortlessly track and manage municipal assets with our intuitive interface.",
      logo: "/streetgonzo.jpg",
      color: "#ffc414",
    },
    {
      id: 3,
      title: "Asset Management",
      newModule: NewModule.NO,
      description:
        "Effortlessly track and manage municipal assets with our intuitive interface.",
      logo: "/parkgonzo.jpg",
      color: "#00ccb1",
    },
    {
      id: 4,
      title: "Asset Management",
      newModule: NewModule.YES,
      description:
        "Effortlessly track and manage municipal assets with our intuitive interface.",
      logo: "/gullygonzo.jpg",
      color: "#B8FD7B",
    },
  ]

  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-medium text-brand">Modules</h2>

          <h2 className="text-balance font-display text-3xl font-medium text-neutral-900 mb-3">
            Everything you need to manage your city
          </h2>

          <p className="text-pretty text-lg text-neutral-500 leading-relaxed">
            Choose from our comprehensive suite of modules to build the perfect
            solution for your municipality.
          </p>
        </div>
      </div>

      {/* Modules grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 container px-4 mx-auto">
        {modules.map(({ id, title, description, newModule, logo, color }) => (
          <div key={id} className="relative p-[4px] group">
            {/* Blur layer */}
            <motion.div
              className="absolute inset-0 rounded-3xl z-[1] opacity-40 group-hover:opacity-90 blur-md transition duration-500 will-change-transform"
              style={{
                backgroundSize: "200% 200%",
                background: `radial-gradient(circle farthest-side at 0 100%,${color}60,transparent),
                            radial-gradient(circle farthest-side at 100% 0,${color}80,transparent),
                            radial-gradient(circle farthest-side at 100% 100%,${color}60,transparent),
                            radial-gradient(circle farthest-side at 0 0,${color}80,transparent)`,
              }}
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Sharp border layer */}
            <motion.div
              style={{
                backgroundSize: "200% 200%",
                background: `radial-gradient(circle farthest-side at 0 100%,${color}60,transparent),
                            radial-gradient(circle farthest-side at 100% 0,${color}80,transparent),
                            radial-gradient(circle farthest-side at 100% 100%,${color}60,transparent),
                            radial-gradient(circle farthest-side at 0 0,${color}80,transparent)`,
              }}
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 rounded-3xl z-[1] opacity-70 group-hover:opacity-90 will-change-transform"
            />

            <Card className="relative z-10 rounded-[20px] bg-background">
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
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ModulesSection
