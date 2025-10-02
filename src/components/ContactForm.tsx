import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";
import "../i18n/i18n";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t, ready } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const isDevelopment = import.meta.env.DEV;

  useEffect(() => {
    setIsClient(true);

    // Skip reCAPTCHA loading in development mode
    if (isDevelopment) {
      setRecaptchaLoaded(true);
      console.log('reCAPTCHA disabled in development mode');
      return;
    }

    // Load reCAPTCHA Enterprise script in production
    if (typeof window !== 'undefined' && !window.grecaptcha) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/enterprise.js?render=${import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setRecaptchaLoaded(true);
      };
      document.head.appendChild(script);
    } else if (window.grecaptcha) {
      setRecaptchaLoaded(true);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const executeRecaptcha = async (): Promise<string | null> => {
    // Skip reCAPTCHA in development mode
    if (isDevelopment) {
      console.log('Skipping reCAPTCHA in development mode');
      return 'dev-token';
    }

    if (!window.grecaptcha?.enterprise) {
      console.error('reCAPTCHA not loaded');
      return null;
    }

    try {
      const token = await window.grecaptcha.enterprise.execute(
        import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY,
        { action: 'CONTACT_FORM' }
      );
      return token;
    } catch (error) {
      console.error('reCAPTCHA execution error:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Execute reCAPTCHA
    const token = await executeRecaptcha();
    if (!token) {
      alert(
        t(
          "contact.form.recaptchaError",
          "กรุณาลองใหม่อีกครั้ง"
        )
      );
      setIsSubmitting(false);
      return;
    }

    try {
      // Send form data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          phone: formData.phone,
          company: formData.company,
          recaptchaToken: token,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert(t("contact.form.success", "ส่งข้อความเรียบร้อยแล้ว"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        alert(
          result.error || t("contact.form.error", "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง")
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert(
        t("contact.form.error", "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isClient || !ready) {
    return (
      <section className="contact-form-section py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-12"></div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="h-12 bg-gray-100 rounded"></div>
                  <div className="h-12 bg-gray-100 rounded"></div>
                  <div className="h-12 bg-gray-100 rounded"></div>
                  <div className="h-12 bg-gray-100 rounded"></div>
                </div>
                <div className="h-32 bg-gray-100 rounded mb-6"></div>
                <div className="h-12 bg-gray-200 rounded w-1/4 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-form-section py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t("contact.form.title", "แสดงความคิดเห็น & ข้อเสนอแนะ")}
            </h2>
            <p className="text-gray-600">
              {t(
                "contact.form.subtitle",
                "Send us your feedback and suggestions"
              )}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2">
                  {t("contact.form.name", "ชื่อ*")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder={t(
                    "contact.form.namePlaceholder",
                    "กรอกชื่อของคุณ"
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2">
                  {t("contact.form.email", "อีเมล*")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder={t(
                    "contact.form.emailPlaceholder",
                    "example@email.com"
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2">
                  {t("contact.form.phone", "เบอร์โทร")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder={t(
                    "contact.form.phonePlaceholder",
                    "089-xxx-xxxx"
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-medium mb-2">
                  {t("contact.form.company", "บริษัท/องค์กร")}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder={t(
                    "contact.form.companyPlaceholder",
                    "ชื่อบริษัท"
                  )}
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2">
                {t("contact.form.message", "ข้อความ*")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                placeholder={t(
                  "contact.form.messagePlaceholder",
                  "กรอกข้อความของคุณ..."
                )}
              />
            </div>

            {/* reCAPTCHA Enterprise runs invisibly in the background */}

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting || (!isDevelopment && !recaptchaLoaded)}
                className="group relative inline-flex items-center overflow-hidden rounded-none bg-secondary text-white font-bold transition-all duration-300 hover:pr-16 disabled:opacity-50 disabled:cursor-not-allowed">
                <span className="px-8 py-3">
                  {isSubmitting
                    ? t("contact.form.sending", "กำลังส่ง...")
                    : t("contact.form.send", "ส่งความคิดเห็น")}
                </span>
                <span className="absolute right-0 flex h-full w-12 items-center justify-center bg-black/20 transition-all duration-300 group-hover:w-16 group-disabled:w-12">
                  <FaChevronRight className="text-white" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
