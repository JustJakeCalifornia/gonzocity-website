import { ContactForm } from "@/components/forms/contact-form"

const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* <h2 className="text-sm font-medium text-neutral-600">Contact</h2> */}
          <h2 className="text-sm font-medium text-brand">Contact</h2>

          <h2 className="text-balance font-display text-3xl font-medium text-neutral-900 mb-3">
            Connect With Us
          </h2>

          <p className="text-pretty text-lg text-neutral-500 leading-relaxed">
            Experience the power of GonzoCity&apos;s municipal operations
            platform. Fill out the form below to begin your journey towards more
            efficient city management.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection
