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
import { useTranslations } from "next-intl"

const TestimonialSection = () => {
  const t = useTranslations("testimonials")

  const testimonials = [
    {
      id: 1,
      author: t("reviews.review1.author"),
      role: t("reviews.review1.role"),
      company: t("reviews.review1.company"),
      country: t("reviews.review1.country"),
      comment: t("reviews.review1.comment"),
      rating: 5,
    },
    {
      id: 2,
      author: t("reviews.review2.author"),
      role: t("reviews.review2.role"),
      company: t("reviews.review2.company"),
      country: t("reviews.review2.country"),
      comment: t("reviews.review2.comment"),
      rating: 4,
    },
    {
      id: 3,
      author: t("reviews.review3.author"),
      role: t("reviews.review3.role"),
      company: t("reviews.review3.company"),
      country: t("reviews.review3.country"),
      comment: t("reviews.review3.comment"),
      rating: 5,
    },
    {
      id: 4,
      author: t("reviews.review4.author"),
      role: t("reviews.review4.role"),
      company: t("reviews.review4.company"),
      country: t("reviews.review4.country"),
      comment: t("reviews.review4.comment"),
      rating: 5,
    },
    {
      id: 5,
      author: t("reviews.review5.author"),
      role: t("reviews.review5.role"),
      company: t("reviews.review5.company"),
      country: t("reviews.review5.country"),
      comment: t("reviews.review5.comment"),
      rating: 4,
    },
    {
      id: 6,
      author: t("reviews.review6.author"),
      role: t("reviews.review6.role"),
      company: t("reviews.review6.company"),
      country: t("reviews.review6.country"),
      comment: t("reviews.review6.comment"),
      rating: 5,
    },
  ]

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
                                &ldquo;{testimonial.comment}&rdquo;
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
