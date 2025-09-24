import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import bgStory from "../assets/Story/bg-ourstory-new.jpg";

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div className="terms-page">
      <section
        className="relative bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${bgStory.src})` }}>
        
        {/* Hero Section */}
        <div className="relative">
          <div className="bg-primary/90 text-white py-12 md:py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {t("terms.title")}
              </h1>
              <p className="text-lg md:text-xl mt-2 opacity-90">
                {t("terms.subtitle")}
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-4 py-8 md:py-12 space-y-6 md:space-y-8">
          
          {/* Section 1: Purpose */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              1. {t("terms.section1.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("terms.section1.content")}
            </p>
          </div>

          {/* Section 2: Data Collection */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              2. {t("terms.section2.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("terms.section2.content")}
            </p>
          </div>

          {/* Section 3: Purpose of Use */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              3. {t("terms.section3.title")}
            </h2>
            <p className="text-gray-700 mb-4">{t("terms.section3.content")}</p>
            <ul className="space-y-2 ml-6">
              {t("terms.section3.purposes", { returnObjects: true }).map((purpose: string, index: number) => (
                <li key={index} className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">{purpose}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Data Disclosure */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              4. {t("terms.section4.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("terms.section4.content")}
            </p>
          </div>

          {/* Section 5: User Rights */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              5. {t("terms.section5.title")}
            </h2>
            <p className="text-gray-700 mb-4">{t("terms.section5.content")}</p>
            <ul className="space-y-2 ml-6">
              {t("terms.section5.rights", { returnObjects: true }).map((right: string, index: number) => (
                <li key={index} className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">{right}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 6: Security Measures */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              6. {t("terms.section6.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("terms.section6.content")}
            </p>
          </div>

          {/* Section 7: Policy Updates */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              7. {t("terms.section7.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("terms.section7.content")}
            </p>
          </div>

          {/* Section 8: Contact Information */}
          <div className="bg-white/90 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              8. {t("terms.section8.title")}
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>{t("terms.section8.dpo")}</p>
              <p>{t("terms.section8.company")}</p>
              <p>{t("terms.section8.address")}</p>
              <p>{t("terms.section8.phone")}</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}