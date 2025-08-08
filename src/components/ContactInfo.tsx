import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../i18n/i18n";

const ContactInfo: React.FC = () => {
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Use default values during SSR to prevent hydration mismatch
  if (!isClient || !ready) {
    return (
      <section className="contact-info py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/6 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="h-64 bg-gray-100 rounded"></div>
              <div className="h-64 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-info py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t("contact.title", "ข้อมูลติดต่อ")}
          </h2>
          <p className="text-gray-600">
            {t("contact.subtitle", "Contact Information")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
          <div className="contact-card w-full">
            <h3 className="text-xl font-bold text-primary mb-6">
              {t("contact.address", "ที่อยู่")}
            </h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <div className="flex gap-1 items-center">
                    <p className="font-semibold">{t("contact.companyName")}</p>
                    <p className="font-semibold">(Tak)</p>
                  </div>
                  <p>{t("contact.addressLine1")}</p>
                  <p>{t("contact.addressLine2")}</p>
                  <p>{t("contact.addressLine3")}</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <div className="flex gap-1 items-center">
                    <p className="font-semibold">{t("contact.companyName")}</p>
                    <p className="font-semibold">(Bangkok)</p>
                  </div>
                  <p>{t("contact.address2Line1")}</p>
                  <p>{t("contact.address2Line2")}</p>
                  <p>{t("contact.address2Line3")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card w-full">
            <h3 className="text-xl font-bold text-primary mb-6">
              {t("contact.contact", "ติดต่อเรา")}
            </h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <FaPhone className="text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{t("contact.phoneLabel")}</p>
                  <a
                    href="tel:089-8416226"
                    className="text-primary hover:underline transition-colors duration-200">
                    089-8416226
                  </a>
                  <br />
                  <a
                    href="tel:087-7896226"
                    className="text-primary hover:underline transition-colors duration-200">
                    087-7896226
                  </a>
                  <br />
                  <a
                    href="tel:02-8887788"
                    className="text-primary hover:underline transition-colors duration-200">
                    02-8887788
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{t("contact.emailLabel")}</p>
                  <a
                    href="mailto:bmgthailand@gmail.com"
                    className="text-primary hover:underline transition-colors duration-200">
                    bmgthailand@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <FaFacebookF className="text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Facebook:</p>
                  <a
                    href="https://facebook.com/bmgthailand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline transition-colors duration-200">
                    bmgthailand
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <FaInstagram className="text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Instagram:</p>
                  <a
                    href="https://instagram.com/bmgstone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline transition-colors duration-200">
                    @bmgstone
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
