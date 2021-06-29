import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from 'locales/en/translation.json';
import translationVI from 'locales/vi/translation.json';

const resources = {
	en: {
		translation: translationEN,
	},
	vi: {
		translation: translationVI,
	},
};

i18n
	.use(detector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
