import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import "../i18n/i18n";

interface FooterProps {}

export default function Footer({}: FooterProps) {
  const { t, i18n, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/bmgthailand",
      handle: "bmgthailand",
      icon: FaFacebookF,
    },
    {
      name: "Line",
      url: "https://line.me/ti/p/@bmgstone",
      handle: "@bmgstone",
      icon: FaLine,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/bangkokmoderngranite",
      handle: "bangkokmoderngranite",
      icon: FaInstagram,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UC9FCyP3XZHRkvK9vnnh8IMg",
      handle: "bmgthai granite",
      icon: FaYoutube,
    },
  ];

  const siteMapLinks = [
    { key: "home", href: "/" },
    { key: "story", href: "/story" },
    { key: "products", href: "/products" },
    // { key: "portfolio", href: "/portfolio" },
    // { key: "articles", href: "/articles" },
    { key: "news", href: "/news" },
    { key: "contact", href: "/contact" },
  ];

  if (!isClient || !ready) {
    return (
      <footer className="bg-primary text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="text-white">Loading...</div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.companyInfo")}
            </h3>

            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                9/11 หมู่ 10 ถนนบรมราชชนนี แขวงศาลาธรรมสพน์ เขตทวีวัฒนา กรุงเทพฯ
                10170
              </p>
              <p>
                111/1 หมู่ 5 ถนนพหลโยธิน ตำบลไม้งาม อำเภอเมือ จังหวัดตาก 63000
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-300" />
                <span>089-8416226</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-300" />
                <span>087-7896226</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-300" />
                <span>02-8887788</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-300" />
                <span>bmgthai@bmg.co.th</span>
              </div>
            </div>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.siteMap")}
            </h3>
            <ul className="space-y-3">
              {siteMapLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.followUs")}
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 text-sm group">
                  <social.icon className="text-base group-hover:scale-110 transition-transform duration-200" />
                  <span>{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <a
                href="/20220531-BMG-Privacy-Notice-Thai.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                {t("footer.privacyPolicy")}
              </a>
              <p className="text-sm text-gray-300">
                Copyright © 2025 All Rights Reserved.
              </p>
            </div>
            <p className="text-sm text-gray-300">
              BANGKOK MODERN GRANITE CO.,LTD.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
