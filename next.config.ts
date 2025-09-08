import type { NextConfig } from 'next';
// import nextI18NextConfig from './next-i18next.config';

const nextConfig: NextConfig = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(mp3|wav|ogg)$/,
			use: {
				loader: 'file-loader',
				options: {
					publicPath: '/_next/static/sounds',
					outputPath: 'static/sounds',
					name: '[name].[hash].[ext]',
				},
			},
		});
		return config;
	}
	// i18n: nextI18NextConfig.i18n, // تضمين إعدادات الترجمة هنا
	// إضافة أي إعدادات أخرى حسب الحاجة
};

export default nextConfig;
