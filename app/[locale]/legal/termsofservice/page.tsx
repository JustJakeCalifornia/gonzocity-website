import { Separator } from "@/components/ui/separator"
import { useTranslations } from "next-intl"

export default function TermsOfService() {
  const t = useTranslations("termsOfService")

  return (
    <div className="min-h-screen bg-background dark:bg-background text-gray-900 dark:text-white p-8 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-5xl font-bold mb-16">{t("title")}</h1>

        <Separator />
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">{t("lastUpdated")}</p>
          <p className="text-base leading-relaxed">{t("intro.description")}</p>
        </div>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section1.title")}
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>{t("sections.section1.legalName.label")}: </strong>{" "}
              {t("sections.section1.legalName.text")}
            </li>
            <li>
              <strong>{t("sections.section1.jurisdiction.label")}: </strong>{" "}
              {t("sections.section1.jurisdiction.text")}
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section2.title")}
          </h2>
          <p className="leading-relaxed ml-2">
            {t("sections.section2.content")}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section3.title")}
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>{t("sections.section3.accountCreation.label")}: </strong>
              {t("sections.section3.accountCreation.text")}
            </li>
            <li>
              <strong>{t("sections.section3.dataCollection.label")}: </strong>
              {t("sections.section3.dataCollection.text")}
            </li>
            <li>
              <strong>
                {t("sections.section3.userResponsibilities.label")}:
              </strong>{" "}
              {t("sections.section3.userResponsibilities.text")}
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section4.title")}
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>{t("sections.section4.model.label")}:</strong>{" "}
              {t("sections.section4.model.text")}
            </li>
            <li>
              <strong>{t("sections.section4.paymentOptions.label")}:</strong>{" "}
              {t("sections.section4.paymentOptions.text")}
            </li>
            <li>
              <strong>{t("sections.section4.freeTrial.label")}:</strong>{" "}
              {t("sections.section4.freeTrial.text")}
            </li>
            <li>
              <strong>{t("sections.section4.noRefunds.label")}:</strong>{" "}
              {t("sections.section4.noRefunds.text")}
            </li>
            <li>
              <strong>{t("sections.section4.cancelation.label")}:</strong>{" "}
              {t("sections.section4.cancelation.text")}
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section5.title")}
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>{t("sections.section5.ownership.label")}: </strong>
              <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
                <li>
                  <strong>
                    {t("sections.section5.ownership.companyData.label")}:
                  </strong>{" "}
                  {t("sections.section5.ownership.companyData.text")}
                </li>
                <li>
                  <strong>
                    {t("sections.section5.ownership.userData.label")}:
                  </strong>{" "}
                  {t("sections.section5.ownership.userData.text")}
                </li>
              </ul>
            </li>
            <li>
              <strong>
                {t("sections.section5.userGeneratedContent.label")}:
              </strong>{" "}
              {t("sections.section5.userGeneratedContent.text")}
            </li>
            <li>
              <strong>{t("sections.section5.thirdPartyIP.label")}:</strong>{" "}
              {t("sections.section5.thirdPartyIP.text")}
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section6.title")}
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>{t("sections.section6.acceptableUse.label")}:</strong>{" "}
              {t("sections.section6.acceptableUse.text")}
            </li>
            <li>
              <strong>
                {t("sections.section6.prohibitedActivities.label")}:
              </strong>
              <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
                <li>
                  {t(
                    "sections.section6.prohibitedActivities.circumventPayments"
                  )}
                </li>
                <li>
                  {t("sections.section6.prohibitedActivities.disruption")}
                </li>
                <li>
                  {t("sections.section6.prohibitedActivities.fraudulentUse")}
                </li>
              </ul>
            </li>
            <li>
              <strong>{t("sections.section6.enforcement.label")}:</strong>{" "}
              {t("sections.section6.enforcement.text")}
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section7.title")}
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>{t("sections.section7.accuracy.label")}:</strong>{" "}
              {t("sections.section7.accuracy.text")}
            </li>
            <li>
              <strong>{t("sections.section7.warranties.label")}:</strong>
              <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
                <li>{t("sections.section7.warranties.providedAsIs")}</li>
                <li>{t("sections.section7.warranties.noGuarantees")}</li>
              </ul>
            </li>
            <li>
              <strong>
                {t("sections.section7.limitationOfLiability.label")}:
              </strong>
              <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
                <li>
                  {t(
                    "sections.section7.limitationOfLiability.noIndirectLiability"
                  )}
                </li>
                <li>
                  {t("sections.section7.limitationOfLiability.maxLiability")}
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section8.title")}
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>{t("sections.section8.byCompany.label")}:</strong>{" "}
              {t("sections.section8.byCompany.text")}
            </li>
            <li>
              <strong>{t("sections.section8.byUser.label")}:</strong>{" "}
              {t("sections.section8.byUser.text")}
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section9.title")}
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>{t("sections.section9.resolution.label")}:</strong>{" "}
              {t("sections.section9.resolution.text")}
            </li>
            <li>
              <strong>{t("sections.section9.governingLaw.label")}:</strong>
              <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
                <li>{t("sections.section9.governingLaw.law")}</li>
                <li>{t("sections.section9.governingLaw.jurisdiction")}</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section10.title")}
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>{t("sections.section10.updates.label")}:</strong>{" "}
              {t("sections.section10.updates.text")}
            </li>
            <li>
              <strong>{t("sections.section10.continuedUse.label")}:</strong>{" "}
              {t("sections.section10.continuedUse.text")}
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section11.title")}
          </h2>
          <ul className="marker:text-blue-600 dark:marker:text-blue-500 list-outside list-disc ml-6 space-y-2">
            <li>
              <strong>{t("sections.section11.indemnify.label")}: </strong>
              {t("sections.section11.indemnify.text")}
            </li>
            <li>
              <strong>{t("sections.section11.forceMajeure.label")}: </strong>
              {t("sections.section11.forceMajeure.text")}
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section12.title")}
          </h2>
          <p className="leading-relaxed ml-2">
            {t("sections.section12.content")}
          </p>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">
            {t("sections.section13.title")}
          </h2>
          <p className="leading-relaxed ml-2">
            {t("sections.section13.description")}
          </p>
          <ul className="list-outside ml-2">
            <li>
              <strong>{t("sections.section13.company")}</strong>
            </li>
            <li>{t("sections.section13.address.street")}</li>
            <li>{t("sections.section13.address.city")}</li>
            <li>{t("sections.section13.address.country")}</li>
            <br />
            <li>
              <strong>{t("sections.section13.email.label")}: </strong>
              {t("sections.section13.email.content")}
            </li>
            <li>
              <strong>{t("sections.section13.phone.label")}: </strong>
              {t("sections.section13.phone.content")}
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
