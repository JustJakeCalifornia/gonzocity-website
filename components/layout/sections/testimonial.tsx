"use client"

import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    id: 1,
    company: "Berlin City Council",
    country: "Germany",
    author: "Michael Weber",
    role: "Head of Infrastructure",
    content:
      "GonzoCity has revolutionized how we manage our municipal assets. The real-time tracking and intuitive interface have improved our efficiency by 300%.",
    rating: 5,
  },
  {
    id: 2,
    company: "Hamburg Public Works",
    country: "Germany",
    author: "Lisa Schmidt",
    role: "Operations Manager",
    content:
      "The mobile app is a game-changer for our field workers. Documentation and updates are now seamless and instant.",
    rating: 4,
  },
  {
    id: 3,
    company: "City of Austin",
    country: "United States",
    author: "John Martinez",
    role: "City Manager",
    content:
      "Since implementing GonzoCity, we've reduced our response time to infrastructure issues by 65%. A must-have for modern cities.",
    rating: 5,
  },
  {
    id: 4,
    company: "NYC Department of Transportation",
    country: "United States",
    author: "Sarah Thompson",
    role: "Asset Manager",
    content:
      "The control panel gives us unprecedented visibility into our city's infrastructure. It's like having a smart city command center.",
    rating: 5,
  },
  {
    id: 5,
    company: "Sydney Municipal Council",
    country: "Australia",
    author: "James Wilson",
    role: "Technical Director",
    content:
      "GonzoCity's asset tracking capabilities have transformed our maintenance schedules. We're now proactive rather than reactive.",
    rating: 4,
  },
  {
    id: 6,
    company: "Melbourne City Services",
    country: "Australia",
    author: "Emma Brown",
    role: "Infrastructure Lead",
    content:
      "The ease of documenting and managing city assets with GonzoCity is remarkable. Our team adopted it within days.",
    rating: 5,
  },
]

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full py-20 overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          {/* <h2 className="text-sm font-medium text-neutral-600">Benefits</h2> */}
          <h2 className="text-sm font-medium text-brand">Testimonials</h2>

          <h2 className="text-balance font-display text-3xl font-medium text-neutral-900 mb-3">
            Hear What Our 1000+ Clients Say
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto px-8">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {Array.from({ length: testimonials.length / 3 }).map(
                (_, slideIndex) => (
                  <CarouselItem
                    key={slideIndex}
                    className="pl-2 md:pl-4 basis-full"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                      {testimonials
                        .slice(slideIndex * 3, (slideIndex + 1) * 3)
                        .map((testimonial) => (
                          <Card
                            key={testimonial.id}
                            className="p-5 text-left flex flex-col h-[280px]"
                          >
                            <div>
                              <div className="flex items-center gap-1 mb-3">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3.5 w-3.5 ${
                                      i < testimonial.rating
                                        ? "text-brand fill-brand"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-neutral-700 leading-relaxed text-sm">
                                &ldquo;{testimonial.content}&rdquo;
                              </p>
                            </div>
                            <div className="mt-auto">
                              <p className="font-medium text-neutral-900 text-sm">
                                {testimonial.author}
                              </p>
                              <p className="text-xs text-neutral-500">
                                {testimonial.role}
                              </p>
                              <p className="text-xs text-neutral-500">
                                {testimonial.company}, {testimonial.country}
                              </p>
                            </div>
                          </Card>
                        ))}
                    </div>
                  </CarouselItem>
                )
              )}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 bg-white hover:bg-gray-50" />
              <CarouselNext className="absolute -right-12 bg-white hover:bg-gray-50" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
