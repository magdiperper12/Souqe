'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(HttpBackend) // لتحميل الترجمات من ملفات JSON
	.use(LanguageDetector) // لاكتشاف لغة المتصفح
	.use(initReactI18next) // لربط i18n بـ React
	.init({
		fallbackLng: 'en',
		supportedLngs: ['en', 'ar'],
		debug: process.env.NODE_ENV === 'development',
		interpolation: {
			escapeValue: false, // عدم الهروب من القيم (مطلوب في React)
		},
		backend: {
			loadPath: '/locales/{{lng}}/translation.json', // مسار ملفات الترجمة
		},
		detection: {
			order: ['localStorage', 'navigator', 'htmlTag'],
			caches: ['localStorage'],
		},
		react: {
			useSuspense: false, // تعطيله إذا كنت لا تستخدم <Suspense>
		},
	});

export default i18n;
