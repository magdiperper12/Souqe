'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { TiThMenu } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';

import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Dark from '../theme/Dark';
import Lang from '../theme/LanguageSwitcher';
import {
	FaFacebook,
	FaTiktok,
	FaTwitter,
	FaUser,
	FaYoutube,
} from 'react-icons/fa';
import { CgShoppingCart } from 'react-icons/cg';
const Header = () => {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	if (!i18n.isInitialized) return null;

	const navLinks = [
		{ name: t('Home'), href: '/' },
		{ name: t('Products'), href: '/pages/products' },
		{ name: t('About'), href: '/pages/about' },
		{ name: t('Contact'), href: '/pages/contact' },
	];
	return (
		<header className='backdrop-blur-lg dark:bg-black/10 bg-white/10  fixed   w-full pb-2   text-darkprimary  dark:text-white  shadow-lg'>
			<div className='fixed top-0 bg-blue-100 dark:bg-blue-950 px-4 lg:px-8 text-blue-950 dark:text-white w-full flex justify-end md:justify-between items-center'>
				<div className='hidden  md:flex justify-center items-center gap-6 text-xl'>
					<Link
						href={'https://www.facebook.com/'}
						target='_blanck'>
						<FaFacebook />
					</Link>
					<Link
						href={'https://www.twitter.com/'}
						target='_blanck'>
						<FaTwitter />
					</Link>
					<Link
						href={'https://www.youtube.com/'}
						target='_blanck'>
						<FaYoutube />
					</Link>
					<Link
						href={'https://www.tiktok.com/'}
						target='_blanck'>
						<FaTiktok />
					</Link>
				</div>
				<div className='flex justify-center items-center gap-3 md:gap-5'>
					<Lang /> <Dark />
				</div>
			</div>

			<div className='mx-auto mt-10 flex h-16  pt-1 items-center justify-between px-4 sm:px-6 lg:px-8'>
				<Link href='/'>
					<Image
						src='/favicon.png'
						alt='شركة كودا - تطوير البرمجيات والذكاء الاصطناعي'
						width={50}
						height={50}
						priority
					/>
				</Link>
				{/* Desktop Navigation */}
				<nav className='hidden lg:flex items-center gap-6  font-bold text-xl'>
					{navLinks.map((link, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.2 * i }}>
							<Link
								className='hover:text-third transition focus:text-darkthird  px-3'
								href={link.href}>
								{link.name}
							</Link>
						</motion.div>
					))}
				</nav>

				{/* Right actions */}
				<div className='flex items-center gap-4'>
					<div className='flex justify-center items-center gap-5 text-xl'>
						<CgShoppingCart />
						<FaUser />
					</div>
					{/* Mobile Menu Button */}
					<button
						className='lg:hidden  p-2 text-darkprimary text-2xl dark:text-primary'
						onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
							<div>
								<IoClose />
							</div>
						) : (
							<div>
								<TiThMenu />
							</div>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.nav
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className='fixed z-50  w-full left-0 top-0 lg:hidden px-4 pt-4 pb-6 space-y-10 bg-secoundry dark:bg-darkprimary min-h-screen'>
						<button
							className='lg:hidden fixed right-4 top-4  p-2 text-darkprimary text-3xl dark:text-primary'
							onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? (
								<div>
									<IoClose />
								</div>
							) : (
								<div>
									<TiThMenu />
								</div>
							)}
						</button>
						{navLinks.map((link, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.2 * i }}
								className='ps-5'>
								<Link
									className='hover:text-third transition focus:text-darkthird text-2xl font-bold'
									href={link.href}>
									{link.name}
								</Link>
							</motion.div>
						))}
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
