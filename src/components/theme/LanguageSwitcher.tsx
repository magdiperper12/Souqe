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
		<main className='flex flex-col items-center justify-center'>
			<div className='flex gap-3 text-darkprimary dark:text-darkthird'>
				<button
					onClick={() => changeLanguage('en')}
					className={`flex items-center gap-2 px-3 py-2 font-bold transition duration-300 ${
						i18n.language === 'en'
							? 'bg-darkprimary text-white'
							: 'bg-gray-200 dark:bg-gray-700'
					}`}>
					<HiGlobeAlt className='w-6 h-6' />
					<span className='text-lg uppercase'>EN</span>
				</button>

				<button
					onClick={() => changeLanguage('ar')}
					className={`flex items-center gap-2 px-3 py-2 font-bold transition duration-300 ${
						i18n.language === 'ar'
							? 'bg-darkprimary text-white'
							: 'bg-gray-200 dark:bg-gray-700'
					}`}>
					<HiGlobeAlt className='w-6 h-6' />
					<span className='text-lg uppercase'>AR</span>
				</button>

				<button
					onClick={() => changeLanguage('fr')}
					className={`flex items-center gap-2 px-3 py-2 font-bold transition duration-300 ${
						i18n.language === 'fr'
							? 'bg-darkprimary text-white'
							: 'bg-gray-200 dark:bg-gray-700'
					}`}>
					<HiGlobeAlt className='w-6 h-6' />
					<span className='text-lg uppercase'>FR</span>
				</button>
			</div>
		</main>
	);
}
