import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import thTranslation from './locales/th.json';
import itTranslation from './locales/it.json';
import zhTranslation from './locales/zh.json';

export const defaultNS = 'translation';
export const resources = {
  en: {
    translation: enTranslation
  },
  th: {
    translation: thTranslation
  },
  it: {
    translation: itTranslation
  },
  zh: {
    translation: zhTranslation
  }
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'th',
    lng: 'th',
    debug: false,
    ns: ['translation'],
    defaultNS,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;