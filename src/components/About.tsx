import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";
import "@/i18n/i18n";
import thirtyYearImg from "@/assets/30-Year.png";

const About: React.FC = () => {
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !ready) {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Image and Title */}
              <div className="p-8 lg:p-12 flex flex-col items-center justify-center bg-gray-50">
                <img
                  src={thirtyYearImg.src}
                  alt="30 Years"
                  className="w-48 h-48 mb-4 object-contain"
                />
                <h2 className="text-2xl font-medium text-gray-800">ปี</h2>
                <p className="text-xl text-gray-700 mt-2">แห่งความสำเร็จ</p>
              </div>

              {/* Right Column - Content */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-semibold text-secondary mb-6">
                  บางกอกโมเดอร์นแกรนิต
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  กว่า 30 ปี ที่บริษัทก่อตั้งขึ้นในปี 2534
                  โดยบริษัทบางกอกโมเดอร์นแกรนิต จำกัด
                  เป็นผู้ผลิตและผู้จำหน่ายหินอ่อน
                  และหินแกรนิตที่นำเข้าจากต่างประเทศ
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  เริ่มตั้งแต่การคัดสรรวัตถุดิบจากแหล่งหิน ทั้งใน และต่างประเทศ
                  ไปจนถึงการควบคุม คุณภาพ
                  เพื่อให้ได้มาซึ่งงานที่ตอบสนองความต้องการของลูกค้า
                  สามารถรองรับการผลิตงานหินได้ ทุกชนิด ตั้งแต่หินแผ่น
                  หินตัดตามขนาด ผลิตภัณฑ์หัตถกรรม รวมถึงงานกลึง เสาหินอ่อน
                  และเสาหิน แกรนิต มีโรงงานผลิต 2 แห่ง
                </p>
                <a
                  href="/story"
                  className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors font-medium">
                  อ่านเพิ่มเติม
                  <FaChevronRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Image and Title */}
            <div className="p-8 lg:p-12 flex flex-col items-center justify-center bg-gray-50">
              <img
                src={thirtyYearImg.src}
                alt="30 Years"
                className="w-48 h-48 mb-4 object-contain"
              />
              <h2 className="text-2xl font-medium text-gray-800">
                {t("about.years").replace("30 ", "")}
              </h2>
              <p className="text-xl text-gray-700 mt-2">
                {t("about.subtitle")}
              </p>
            </div>

            {/* Right Column - Content */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-semibold text-secondary mb-6">
                {t("about.companyName")}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("about.description")}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t("about.process")}
              </p>
              <a
                href="/story"
                className="inline-flex items-center text-gray-700 hover:text-gray-900 hover:underline transition-colors font-medium">
                {t("about.readMore")}
                <FaChevronRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
