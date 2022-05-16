import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'tr',
  resources: {
    en: {
      translations: require('./locales/en/translations.json')
    },
    tr: {
      translations: require('./locales/tr/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'tr'];

export default i18n;