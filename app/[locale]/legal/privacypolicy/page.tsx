import { Separator } from "@/components/ui/separator"
import { useTranslations } from "next-intl"

export default function PrivacyPolicy() {
  const t = useTranslations("privacyPolicy")

  return (
    <div className="min-h-screen bg-background dark:bg-background text-gray-900 dark:text-white p-8 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-5xl font-bold mb-16">{t("title")}</h1>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section1.title")}
          </h2>
          <p className="text-base leading-relaxed">
            {t("sections.section1.content.websiteAddress")}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section2.title")}
          </h2>
          <p className="text-base leading-relaxed">
            {t("sections.section2.content.dataCollection")}
          </p>
          <p className="text-base leading-relaxed">
            {t("sections.section2.content.gravatarInfo")}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section3.title")}
          </h2>
          <p className="text-base leading-relaxed">
            {t("sections.section3.content.exifWarning")}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section4.title")}
          </h2>
          <p className="text-base leading-relaxed">
            {t("sections.section4.content.commentCookies")}
          </p>
          <p className="text-base leading-relaxed">
            {t("sections.section4.content.loginCookies")}
          </p>
          <p className="text-base leading-relaxed">
            {t("sections.section4.content.authCookies")}
          </p>
          <p className="text-base leading-relaxed">
            {t("sections.section4.content.editingCookies")}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section5.title")}
          </h2>
          <p className="text-base leading-relaxed">
            {t("sections.section5.content.behavior")}
          </p>
          <p className="text-base leading-relaxed">
            {t("sections.section5.content.dataCollection")}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section6.title")}
          </h2>
          <p className="text-base leading-relaxed">
            {t("sections.section6.content.passwordReset")}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section7.title")}
          </h2>
          <p className="text-base leading-relaxed">
            {t("sections.section7.content.userProfiles")}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section8.title")}
          </h2>
          <p className="text-base leading-relaxed">
            {t("sections.section8.content.exportDelete")}
          </p>
        </section>

        <section className="space-y-4 mb-32">
          <h2 className="text-3xl font-semibold">
            {t("sections.section9.title")}
          </h2>
          <p className="text-base leading-relaxed">
            {t("sections.section9.content.spamCheck")}
          </p>
        </section>
      </div>
    </div>
  )
}
