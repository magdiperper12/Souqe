import type { UserConfig } from 'next-i18next';

const nextI18NextConfig: UserConfig = {
	i18n: {
		locales: ['en', 'ar', 'fr'],
		defaultLocale: 'fr',
	},
};

export default nextI18NextConfig;
