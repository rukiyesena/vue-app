import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    hello: "Hello World",
  },
  tr: {
    hello: "Merhaba Dünya",
  },
}

const i18n = createI18n({
  legacy: false, // Composition API ile uyumlu
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
