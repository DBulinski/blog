import Backend from "i18next-fs-backend";
import { resolve } from "node:path";
import { RemixI18Next } from "remix-i18next";
import { i18nextConfig } from "./i18next"; // your i18n configuration file

export const i18next = new RemixI18Next({
  detection: {
    supportedLanguages: i18nextConfig.supportedLngs,
    fallbackLanguage: i18nextConfig.fallbackLng,
  },
  // This is the configuration for i18next used
  // when translating messages server-side only
  i18next: {
    ...i18nextConfig,
    backend: {
      loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
    },
  },
  plugins: [Backend],
});
