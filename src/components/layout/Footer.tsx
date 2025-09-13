'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
	const { t } = useTranslation();
	const [hideFooter, setHideFooter] = useState(false);

	useEffect(() => {
		const url = window.location.href.toString();
		setHideFooter(url.includes('Pricing'));
	}, []);

	if (hideFooter) return null;

	return (
		<footer className='bg-blue-50 py-16 dark:bg-darkprimary text-blue-800 dark:text-third pt-12 pb-6 px-6 md:px-16'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10'>
				<div>
					<div className='text-4xl mb-4 font-extrabold lg:bg-gradient-to-tr lg:from-darkprimary lg:to-darkthird lg:dark:from-darksecoundry lg:dark:to-darkforth lg:bg-clip-text lg:text-transparent text-darkprimary dark:text-secoundry'>
						{t('Souq')}
					</div>
					<div className='text-sm leading-6 text-darkprimary dark:text-darkforth'>
						{t('ourVisionDesc')}
					</div>
				</div>

				<div className='grid grid-cols-2 '>
					<div>
						<h3 className='text-lg font-semibold mb-4 text-darkprimary dark:text-primary'>
							{t('quickLinks')}
						</h3>
						<ul className='space-y-2 text-sm'>
							{[
								{ label: t('Home'), href: '/' },
								{ label: t('About'), href: '/pages/about' },
								{ label: t('Contact'), href: '/pages/contact' },
								{ label: t('Productsspecial'), href: '/pages/products' },
							].map(({ label, href }) => (
								<li key={label}>
									<Link
										href={href}
										className='hover:text-darkprimary dark:hover:text-darkforth transition-colors duration-200'>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-4 text-darkprimary dark:text-primary'>
							{t('quickLinks')}
						</h3>
						<ul className='space-y-2 text-sm'>
							{[
								{ label: t('Home'), href: '/' },
								{ label: t('About'), href: '/pages/about' },
								{ label: t('Contact'), href: '/pages/contact' },
								{ label: t('Productsspecial'), href: '/pages/products' },
							].map(({ label, href }) => (
								<li key={label}>
									<Link
										href={href}
										className='hover:text-darkprimary dark:hover:text-darkforth transition-colors duration-200'>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div>
					<h3 className='text-lg font-semibold mb-4 text-darkprimary dark:text-primary'>
						{t('Contact')}
					</h3>
					<div className='flex gap-4 text-lg'>
						<a
							href='#'
							className='hover:text-darksecoundry transition-colors'>
							<FaFacebook className='text-blue-600' />
						</a>
						<a
							href='#'
							className='hover:text-sky-400 transition-colors'>
							<FaTwitter className='text-blue-500' />
						</a>
						<a
							href='#'
							className='hover:text-blue-700 transition-colors'>
							<FaLinkedinIn className='text-blue-600' />
						</a>
						<a
							href='#'
							className='hover:text-blue-700 transition-colors'>
							<FaTiktok className='text-black dark:bg-white dark:rounded-lg dark:p-1' />
						</a>

						<a
							href='#'
							className='hover:text-gray-500 transition-colors'>
							<FaGithub className='text-black dark:bg-white dark:rounded-lg dark:p-1' />
						</a>
						<a
							href='#'
							className='hover:text-red-700 transition-colors'>
							<FaYoutube className='text-red-600 dark:text-red-500' />
						</a>
					</div>
				</div>
			</div>

			<div className='text-center text-sm border-t text-darkprimary dark:text-darkforth border-secoundry dark:border-darksecoundry pt-6'>
				&copy; 2025
				<Link
					href={'https://web.facebook.com/magdi.perper.9'}
					className='text-darkthird dark:text-third px-1'>
					Magdi
				</Link>
				All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
