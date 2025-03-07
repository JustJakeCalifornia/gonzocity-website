"use server"

import { Resend } from "resend"
import * as React from "react"
import EmailTemplate from "@/components/templates/email-template"
import { ContactFormValues, contactSchema } from "@/lib/schemas/contact-schema"
import { headers } from "next/headers"
import { rateLimiter } from "@/lib/rate-limit"
import { validateHoneypot } from "@/lib/honeypot"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(
  data: ContactFormValues & {
    honeypot: string
    translations: {
      rateLimit: string
      invalidRequest: string
      invalidFormData: string
    }
  }
) {
  try {
    // Get IP for rate limiting
    const ip = (await headers()).get("x-forwarded-for") ?? "127.0.0.1"

    // Check rate limit
    const { success: rateLimitSuccess } = await rateLimiter.limit(ip)
    if (!rateLimitSuccess) {
      throw new Error(data.translations.rateLimit)
    }

    // Check honeypot
    if (!validateHoneypot(data.honeypot)) {
      throw new Error(data.translations.invalidRequest)
    }

    // Server-side validation
    const result = contactSchema.safeParse(data)

    if (!result.success) {
      throw new Error(data.translations.invalidFormData)
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "nico.software.engineer@gmail.com",
      subject: "Neue Kontaktanfrage",
      react: EmailTemplate({
        firstName: result.data.firstName,
        lastName: result.data.lastName,
        email: result.data.email,
        organization: result.data.organization,
        requestReason: result.data.requestReason,
        modules: result.data.modules,
        message: result.data.message,
      }) as React.ReactElement,
    })

    if (error) {
      throw new Error(error.message)
    }

    return { success: true, data: emailData }
  } catch (error) {
    throw error
  }
}
