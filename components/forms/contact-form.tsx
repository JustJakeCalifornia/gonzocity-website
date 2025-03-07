"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ContactFormValues, contactSchema } from "@/lib/schemas/contact-schema"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { sendEmail } from "@/actions/send-email"
import { toast } from "sonner"
import { useTranslations } from "next-intl"

interface ContactFormProps {
  onSuccess?: () => void
}

type ModuleType = "GullyGonzo" | "RatGonzo" | "StreetGonzo" | "ParkGonzo"
const modules: Array<{ value: ModuleType; label: string }> = [
  { value: "GullyGonzo", label: "GullyGonzo" },
  { value: "RatGonzo", label: "RatGonzo" },
  { value: "StreetGonzo", label: "StreetGonzo" },
  { value: "ParkGonzo", label: "ParkGonzo" },
]

export type FormData = ContactFormValues

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [honeypotField, setHoneypotField] = useState("")
  const [step, setStep] = useState(1)
  const totalSteps = 3

  const t = useTranslations("contact-form")

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      requestReason: "contact",
      modules: [],
      message: "",
    },
  })

  const onSubmit = async (values: ContactFormValues) => {
    try {
      setIsSubmitting(true)
      await sendEmail({
        ...values,
        honeypot: honeypotField,
        translations: {
          rateLimit: t("errors.rateLimit"),
          invalidRequest: t("errors.invalidRequest"),
          invalidFormData: t("errors.invalidFormData"),
        },
      })
      toast.success(t("success.emailSent"))
      form.reset()
      onSuccess?.()
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to send email"
      )
      console.error("Error sending email:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleStepSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const fieldsToValidate = {
      1: ["firstName", "lastName", "email", "organization"],
      2: ["requestReason", "modules"],
      3: ["message"],
    }[step] as Array<keyof FormData>

    const result = await form.trigger(fieldsToValidate)

    if (result) {
      if (step < totalSteps) {
        setStep(step + 1)
      } else {
        await form.handleSubmit(onSubmit)(e)
      }
    }
  }

  return (
    <div className="w-full max-w-[425px] space-y-4 rounded-lg border-input bg-card p-6 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold leading-none tracking-tight">
          {t("title")}
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          {t("progress.step", {
            step: step,
            total: totalSteps,
          })}
        </p>
      </div>
      <div className="flex space-x-1">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-2 flex-1 rounded-full transition-colors",
              index + 1 <= step ? "bg-primary" : "bg-muted"
            )}
          />
        ))}
      </div>
      <Form {...form}>
        <form onSubmit={handleStepSubmit} className="space-y-4">
          {/* Rest of your form fields stay exactly the same */}
          {step === 1 && (
            <>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("fields.firstName.label")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("fields.firstName.placeholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("fields.lastName.label")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("fields.lastName.placeholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("fields.email.label")}</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={t("fields.email.placeholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("fields.organization.label")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("fields.organization.placeholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {step === 2 && (
            <>
              <FormField
                control={form.control}
                name="requestReason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("fields.requestReason.label")}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder={t("fields.requestReason.placeholder")}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="contact">
                          {t("fields.requestReason.options.contact")}
                        </SelectItem>
                        <SelectItem value="trial">
                          {t("fields.requestReason.options.trial")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="modules"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("fields.modules.label")}</FormLabel>
                    <div className="grid grid-cols-2 gap-2">
                      {modules.map((m) => (
                        <Button
                          type="button"
                          key={m.value}
                          variant={
                            field.value?.includes(m.value)
                              ? "default"
                              : "outline"
                          }
                          className="w-full"
                          onClick={() => {
                            const newValue = field.value?.includes(m.value)
                              ? field.value.filter((v) => v !== m.value)
                              : [...(field.value || []), m.value]
                            field.onChange(newValue)
                          }}
                        >
                          {m.label}
                        </Button>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {step === 3 && (
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("fields.message.label")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("fields.message.placeholder")}
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <input
            type="text"
            name={honeypotField}
            onChange={(e) => setHoneypotField(e.target.value)}
            style={{ display: "none" }}
            tabIndex={-1}
            aria-hidden="true"
          />
          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(step - 1)}
              className={cn(step === 1 && "invisible")}
            >
              {t("progress.previous")}
            </Button>
            <Button
              type="submit"
              className={cn(step === totalSteps && "w-full")}
              disabled={isSubmitting}
            >
              {step < totalSteps ? (
                t("progress.next")
              ) : isSubmitting ? (
                <>
                  <svg
                    className="mr-2 h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  {t("progress.submitting")}
                </>
              ) : (
                t("progress.submit")
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
