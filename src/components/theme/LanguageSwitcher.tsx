'use client';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { HiGlobeAlt } from 'react-icons/hi';

export default function Lang() {
	const { i18n } = useTranslation();

	const changeLanguage = (lang: string) => {
		i18n.changeLanguage(lang);
	};

	return (
		<main className='flex flex-col items-center justify-center py-1'>
			<div className='flex gap-3 md:gap-4 text-darkprimary dark:text-blue-200'>
				<button
					onClick={() => changeLanguage('en')}
					className={`px-4 py-1 rounded-xl font-semibold uppercase shadow-sm transition-all duration-300 
        ${
					i18n.language === 'en'
						? 'bg-darkprimary dark:bg-blue-800 text-white shadow-md scale-105'
						: 'bg-gray-200 dark:bg-blue-200 dark:text-black hover:bg-gray-300 '
				}`}>
					EN
				</button>

				<button
					onClick={() => changeLanguage('ar')}
					className={`px-4 py-1 rounded-xl font-semibold uppercase shadow-sm transition-all duration-300 
        ${
					i18n.language === 'ar'
						? 'bg-darkprimary dark:bg-blue-800 text-white shadow-md scale-105'
						: 'bg-gray-200 dark:bg-blue-200 dark:text-black hover:bg-gray-300 '
				}`}>
					ع
				</button>

				<button
					onClick={() => changeLanguage('fr')}
					className={`px-4 py-1 rounded-xl font-semibold uppercase shadow-sm transition-all duration-300 
        ${
					i18n.language === 'fr'
						? 'bg-darkprimary dark:bg-blue-800 text-white shadow-md scale-105'
						: 'bg-gray-200 dark:bg-blue-200 dark:text-black hover:bg-gray-300 '
				}`}>
					FR
				</button>
			</div>
		</main>
	);
}
