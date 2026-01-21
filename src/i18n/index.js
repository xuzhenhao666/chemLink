import { createI18n } from "vue-i18n";
import zhCN from "./locales/zh-CN";
import enUS from "./locales/en-US";

const messages = {
  "zh-CN": zhCN,
  "en-US": enUS
};

const defaultLocale = localStorage.getItem("locale") || "zh-CN";

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: "zh-CN",
  messages,
  globalInjection: true
});

export default i18n;