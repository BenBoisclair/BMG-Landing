import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import bgStory from "../assets/Story/bg-ourstory-new.jpg";

export default function Policy() {
  const { t } = useTranslation();

  return (
    <div className="policy-page">
      <section
        className="relative bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${bgStory.src})` }}>
        {/* Hero Section */}
        <div className="relative">
          <div className="bg-primary/90 text-white py-12 md:py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {t("policy.title")}
              </h1>
              <p className="text-lg md:text-xl mt-2 opacity-90">
                {t("policy.subtitle")}
              </p>
              <p className="text-sm md:text-base mt-4 opacity-80">
                {t("policy.effectiveDate")}
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-4 py-8 md:py-12 space-y-6 md:space-y-8">
          {/* Section 1: General Details */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              1. {t("policy.section1.title")}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{t("policy.section1.content1")}</p>
              <p>{t("policy.section1.content2")}</p>
            </div>
          </div>

          {/* Section 2: Definitions */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              2. {t("policy.section2.title")}
            </h2>
            <div className="space-y-3">
              <div>
                <span className="font-semibold">
                  {t("policy.section2.company")}
                </span>
                <span className="text-gray-700">
                  {" "}
                  {t("policy.section2.companyDef")}
                </span>
              </div>
              <div>
                <span className="font-semibold">
                  {t("policy.section2.personalData")}
                </span>
                <span className="text-gray-700">
                  {" "}
                  {t("policy.section2.personalDataDef")}
                </span>
              </div>
              <div>
                <span className="font-semibold">
                  {t("policy.section2.processing")}
                </span>
                <span className="text-gray-700">
                  {" "}
                  {t("policy.section2.processingDef")}
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Data Collection Methods */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              3. {t("policy.section3.title")}
            </h2>
            <p className="text-gray-700 mb-4">{t("policy.section3.content")}</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-gray-300 p-3 text-left font-semibold">
                      {t("policy.section3.table.business")}
                    </th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">
                      {t("policy.section3.table.channel")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      {t("policy.section3.table.row1.business")}
                    </td>
                    <td className="border border-gray-300 p-3">
                      {t("policy.section3.table.row1.channel")}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      {t("policy.section3.table.row2.business")}
                    </td>
                    <td className="border border-gray-300 p-3">
                      {t("policy.section3.table.row2.channel")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mt-4 text-sm">
              {t("policy.section3.note")}
            </p>
          </div>

          {/* Section 4: Purpose of Processing */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              4. {t("policy.section4.title")}
            </h2>
            <p className="text-gray-700 mb-6">{t("policy.section4.content")}</p>

            {/* Business Trade Subsection */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-secondary mb-4">
                {t("policy.section4.trade.title")}
              </h3>
              <div className="bg-gray-50 rounded p-4 space-y-3">
                {[
                  "group",
                  "purpose",
                  "types",
                  "legal",
                  "disclosure",
                  "retention",
                ].map((key) => (
                  <div key={key}>
                    <span className="font-semibold text-sm">
                      {t(`policy.section4.trade.${key}.label`)}
                    </span>
                    <p className="text-gray-700 text-sm ml-4">
                      {t(`policy.section4.trade.${key}.value`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* HR Subsection */}
            <div>
              <h3 className="text-lg font-bold text-secondary mb-4">
                {t("policy.section4.hr.title")}
              </h3>
              <div className="bg-gray-50 rounded p-4 space-y-3">
                {[
                  "group",
                  "purpose",
                  "types",
                  "legal",
                  "disclosure",
                  "retention",
                ].map((key) => (
                  <div key={key}>
                    <span className="font-semibold text-sm">
                      {t(`policy.section4.hr.${key}.label`)}
                    </span>
                    <p className="text-gray-700 text-sm ml-4">
                      {t(`policy.section4.hr.${key}.value`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 5: Your Rights */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              5. {t("policy.section5.title")}
            </h2>
            <p className="text-gray-700 mb-4">{t("policy.section5.content")}</p>
            <ul className="space-y-3">
              {[
                "notification",
                "withdrawal",
                "access",
                "correction",
                "deletion",
                "transfer",
                "suspension",
                "objection",
              ].map((right) => (
                <li key={right} className="flex">
                  <span className="text-primary mr-2">▪</span>
                  <div>
                    <span className="font-semibold">
                      {t(`policy.section5.rights.${right}.title`)}
                    </span>
                    <span className="text-gray-700">
                      {" "}
                      {t(`policy.section5.rights.${right}.desc`)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-4 text-sm">
              {t("policy.section5.note")}
            </p>
          </div>

          {/* Section 6: Security Measures */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              6. {t("policy.section6.title")}
            </h2>
            <p className="text-gray-700 mb-4">{t("policy.section6.content")}</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">
                  {t("policy.section6.measures.access.title")}
                </h4>
                <p className="text-gray-700 text-sm ml-4">
                  {t("policy.section6.measures.access.desc")}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  {t("policy.section6.measures.training.title")}
                </h4>
                <p className="text-gray-700 text-sm ml-4">
                  {t("policy.section6.measures.training.desc")}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  {t("policy.section6.measures.dpo.title")}
                </h4>
                <p className="text-gray-700 text-sm ml-4">
                  {t("policy.section6.measures.dpo.desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Section 7: Policy Updates */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              7. {t("policy.section7.title")}
            </h2>
            <p className="text-gray-700">{t("policy.section7.content")}</p>
          </div>

          {/* Section 8: Contact Information */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              8. {t("policy.section8.title")}
            </h2>
            <p className="text-gray-700 mb-4">{t("policy.section8.content")}</p>
            <div className="bg-gray-50 rounded p-4 space-y-2">
              <p className="font-semibold">{t("policy.section8.phone")}</p>
              <div className="mt-3">
                <p className="font-semibold mb-1">
                  {t("policy.section8.mail")}
                </p>
                <p className="text-sm text-gray-700">
                  {t("policy.section8.dpo")}
                </p>
                <p className="text-sm text-gray-700">
                  {t("policy.section8.company")}
                </p>
                <p className="text-sm text-gray-700">
                  {t("policy.section8.address")}
                </p>
              </div>
            </div>
          </div>

          {/* Section 9: Effective Date */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              9. {t("policy.section9.title")}
            </h2>
            <p className="text-gray-700">{t("policy.section9.content")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
