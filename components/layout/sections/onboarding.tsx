"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const OnboardingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-white to-neutral-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* <h2 className="text-sm font-medium text-neutral-600">Onboarding</h2> */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-medium text-brand">Onboarding</h2>

            <h2 className="text-balance font-display text-3xl md:text-4xl font-medium text-neutral-900 mb-3">
              How it works
            </h2>

            <p className="text-pretty text-lg text-neutral-500 leading-relaxed">
              These are the steps to seamlessly start your journey towards more
              efficient city management
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container px-4 mx-auto mt-16">
        <motion.div
          className="relative"
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline connector */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand/20 via-brand/40 to-brand/20" />

          {/* Steps */}
          <div className="space-y-24 md:space-y-32">
            {/* Step 1 */}
            <motion.div className="relative" variants={stepVariants}>
              <div className="flex items-center justify-center mb-8">
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-brand text-white font-medium shadow-lg">
                  <span className="text-lg">1</span>
                  <div className="absolute -inset-2 rounded-full border border-brand/20 animate-pulse" />
                </div>
              </div>
              <div className="max-w-md mx-auto">
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-neutral-100 transition-all duration-300 hover:shadow-md hover:border-brand/20 group">
                  <h3 className="text-xl font-medium text-neutral-900 mb-2">
                    Try Out Demo
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Experience our solution firsthand. Request a demo through
                    our contact form and see how it can transform your
                    operations
                  </p>
                  <div className="flex justify-center">
                    <Button className="bg-brand hover:bg-brand/90 text-white">
                      Request Demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div className="relative" variants={stepVariants}>
              <div className="flex items-center justify-center mb-8">
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-brand text-white font-medium shadow-lg">
                  <span className="text-lg">2</span>
                  <div className="absolute -inset-2 rounded-full border border-brand/20 animate-pulse" />
                </div>
              </div>
              <div className="max-w-md mx-auto">
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-neutral-100 transition-all duration-300 hover:shadow-md hover:border-brand/20 group">
                  <h3 className="text-xl font-medium text-neutral-900 mb-2">
                    Select Modules
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Choose the specific modules that best fit your municipality
                    or business needs after experiencing the demo
                  </p>
                  <div className="flex justify-center">
                    <Button className="bg-brand hover:bg-brand/90 text-white">
                      View Modules
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div className="relative" variants={stepVariants}>
              <div className="flex items-center justify-center mb-8">
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-brand text-white font-medium shadow-lg">
                  <span className="text-lg">3</span>
                  <div className="absolute -inset-2 rounded-full border border-brand/20 animate-pulse" />
                </div>
              </div>
              <div className="max-w-md mx-auto">
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-neutral-100 transition-all duration-300 hover:shadow-md hover:border-brand/20 group">
                  <h3 className="text-xl font-medium text-neutral-900 mb-2">
                    Delivery & Training
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Schedule a convenient date for system deployment and
                    comprehensive on-site training for your team
                  </p>
                  {/* No button for this step as specified */}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OnboardingSection
