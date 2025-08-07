import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import thTranslation from './locales/th.json';
import itTranslation from './locales/it.json';
import zhTranslation from './locales/zh.json';
import esTranslation from './locales/es.json';
import hiTranslation from './locales/hi.json';
import arTranslation from './locales/ar.json';

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
  },
  es: {
    translation: esTranslation
  },
  hi: {
    translation: hiTranslation
  },
  ar: {
    translation: arTranslation
  }
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'th',
    // Remove hardcoded lng to let LanguageDetector work
    debug: false,
    ns: ['translation'],
    defaultNS,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
    supportedLngs: ['en', 'th', 'it', 'zh', 'es', 'hi', 'ar']
  });

export default i18n;