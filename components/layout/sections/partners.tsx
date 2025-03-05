"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"
import { Icon } from "@/components/ui/icon"
import { icons } from "lucide-react"

interface partnersProps {
  id: number
  image: string
  name: string
}

const partners: partnersProps[] = [
  {
    id: 1,
    image: "Crown",
    name: "Acmebrand",
  },
  {
    id: 2,
    image: "Vegan",
    name: "Acmelogo",
  },
  {
    id: 3,
    image: "Ghost",
    name: "Acmesponsor",
  },
  {
    id: 4,
    image: "Puzzle",
    name: "Acmeipsum",
  },
  {
    id: 5,
    image: "Squirrel",
    name: "Acme",
  },
  {
    id: 6,
    image: "Cookie",
    name: "Accmee",
  },
  {
    id: 7,
    image: "Drama",
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

      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {partners.map((partner) => (
                <CarouselItem
                  key={partner.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <div
                        key={partner.name}
                        className="flex items-center text-xl md:text-2xl font-medium opacity-80 hover:opacity-100 transition-opacity"
                      >
                        <Icon
                          name={partner.image as keyof typeof icons}
                          size={32}
                          color="black"
                          className="mr-2"
                        />
                        {partner.name}
                      </div>

                      {/* <Image
                        src={partner.image}
                        alt={partner.description}
                        className="h-4 w-auto"
                        width={100}
                        height={40}
                      /> */}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
