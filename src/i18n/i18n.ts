import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from '@/i18n/locales/en.json';
import thTranslation from '@/i18n/locales/th.json';
import itTranslation from '@/i18n/locales/it.json';
import zhTranslation from '@/i18n/locales/zh.json';
import esTranslation from '@/i18n/locales/es.json';
import hiTranslation from '@/i18n/locales/hi.json';
import arTranslation from '@/i18n/locales/ar.json';
import koTranslation from '@/i18n/locales/ko.json';
import jaTranslation from '@/i18n/locales/ja.json';
import heTranslation from '@/i18n/locales/he.json';

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
  },
  ko: {
    translation: koTranslation
  },
  ja: {
    translation: jaTranslation
  },
  he: {
    translation: heTranslation
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
    supportedLngs: ['en', 'th', 'it', 'zh', 'es', 'hi', 'ar', 'ko', 'ja', 'he']
  });

export default i18n;