"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import ContactDialog from "@/components/dialogs/contact-dialog"
import { useState } from "react"
import { useTranslations } from "next-intl"
const HeroSection = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  const t = useTranslations("hero")

  return (
    <div>
      <h1 className="mt-20 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        {t("title.prefix")}{" "}
        <span className="text-brand"> {t("title.highlight")} </span>{" "}
        {t("title.suffix")}
      </h1>
      <p className="mx-auto mt-6 max-w-md text-lg text-gray-500 sm:max-w-xl">
        {t("description")}
      </p>

      <div className="flex justify-center mt-8 space-x-4">
        <ContactDialog
          open={isContactDialogOpen}
          onOpenChange={setIsContactDialogOpen}
        >
          <Button variant="default">{t("actions.getStartedButton")}</Button>
        </ContactDialog>
        <Button variant="secondary">
          <a href="https://apps.apple.com/us/app/id1619621325" target="_blank">
            {t("actions.downloadiOSButton")}
          </a>
        </Button>
      </div>

      <div className="animate-slide-up animation-delay-300 flex items-center justify-center gap-4 mt-6">
        <div className="flex items-center gap-1">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span className="text-sm text-neutral-500">
            {t("checklist.item1")}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span className="text-sm text-neutral-500">
            {t("checklist.item2")}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span className="text-sm text-neutral-500">
            {t("checklist.item3")}
          </span>
        </div>
      </div>

      {/* Tabs and Carousel Feature */}
      <div className="mt-20">
        <Tabs defaultValue="ios-app" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="ios-app">{t("tabs.iosApp")}</TabsTrigger>
            <TabsTrigger value="control-panel">
              {t("tabs.controlPanel")}
            </TabsTrigger>
          </TabsList>

          {/* iOS App Tab Content */}
          <TabsContent value="ios-app" className="mt-6">
            <div className="relative mx-auto max-w-3xl">
              <Carousel className="w-full">
                <CarouselContent className="rounded-2xl">
                  <CarouselItem className="rounded-2xl">
                    <div className="relative w-full h-auto">
                      <Image
                        src="/hero-image-light.jpeg"
                        alt={t("carouselImagesAlt.iosApp.image1")}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain rounded-2xl"
                        priority
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="rounded-2xl">
                    <div className="relative w-full h-auto">
                      <Image
                        src="/hero-image-dark.jpeg"
                        alt={t("carouselImagesAlt.iosApp.image2")}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain rounded-2xl"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <div className="absolute top-1/2 -translate-y-1/2 left-8">
                  <CarouselPrevious className="relative h-8 w-8 bg-white/80 hover:bg-white/90 border-none rounded-full shadow-md transition-all" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-8">
                  <CarouselNext className="relative h-8 w-8 bg-white/80 hover:bg-white/90 border-none rounded-full shadow-md transition-all" />
                </div>
              </Carousel>
            </div>
          </TabsContent>

          {/* Control Panel Tab Content */}
          <TabsContent value="control-panel" className="mt-6">
            <div className="relative mx-auto max-w-3xl">
              <Carousel className="w-full">
                <CarouselContent className="rounded-2xl">
                  <CarouselItem className="rounded-2xl">
                    <div className="relative w-full h-auto">
                      <Image
                        src="/hero-image-light.jpeg"
                        alt={t("carouselImagesAlt.controlPanel.image1")}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain rounded-2xl"
                        priority
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="rounded-2xl">
                    <div className="relative w-full h-auto">
                      <Image
                        src="/hero-image-dark.jpeg"
                        alt={t("carouselImagesAlt.controlPanel.image2")}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain rounded-2xl"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <div className="absolute top-1/2 -translate-y-1/2 left-8">
                  <CarouselPrevious className="relative h-8 w-8 bg-white/80 hover:bg-white/90 border-none rounded-full shadow-md transition-all" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-8">
                  <CarouselNext className="relative h-8 w-8 bg-white/80 hover:bg-white/90 border-none rounded-full shadow-md transition-all" />
                </div>
              </Carousel>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default HeroSection
