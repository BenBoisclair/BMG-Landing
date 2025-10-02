// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://bmg.co.th",
  output: "server",
  adapter: vercel(),
  i18n: {
    defaultLocale: "th",
    locales: ["th", "en", "it", "zh", "es", "hi", "ar", "ko", "ja", "he"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: "th",
        locales: {
          th: "th-TH",
          en: "en-US",
          it: "it-IT",
          zh: "zh-CN",
          es: "es-ES",
          hi: "hi-IN",
          ar: "ar-SA",
          ko: "ko-KR",
          ja: "ja-JP",
          he: "he-IL",
        },
      },
    }),
  ],
});
