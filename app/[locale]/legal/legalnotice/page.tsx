import { Separator } from "@/components/ui/separator"
import { useTranslations } from "next-intl"

export default function LegalNotice() {
  const t = useTranslations("legalNotice")

  return (
    <div className="min-h-screen bg-background dark:bg-background text-gray-900 dark:text-white p-8 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-5xl font-bold mb-16">{t("title")}</h1>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">{t("address.label")}</h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc space-y-2">
            <p>{t("address.name")}</p>
            <p>{t("address.street")}</p>
            <p>{t("address.city")}</p>
            <p>{t("address.country")}</p>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">{t("contact.label")}</h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc space-y-2">
            <p>
              <a
                href="mailto:info@gaplabs.de"
                className="underline hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {t("contact.email")}
              </a>
            </p>
            <p>{t("contact.phone")}</p>
          </ul>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">{t("disclaimer.label")}</h2>
          <p className="leading-relaxed">{t("disclaimer.content")}</p>
        </section>
      </div>
    </div>
  )
}
