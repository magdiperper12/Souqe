'use client';
import HeroImage from '@/src/components/Hero';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaTshirt, FaShoppingBag, FaLeaf } from 'react-icons/fa';

const AboutPage = () => {
	const { t } = useTranslation();
	return (
		<div>
			<HeroImage
				image='/image/shop1.jpg'
				name={t('About')}
				item1={t('productPage')}
				item2={t('Contact')}
				item3={t('shopNow')}
			/>

			<div className='bg-Background text-darkprimary dark:text-darkforth lg:mt-16 dark:bg-darkBackground dark:text-darkPrimary dark:text-darkforthTextColors py-20 space-y-20'>
				{/* Section: Mission */}
				<section className='text-center space-y-10'>
					<h1 className='text-3xl md:text-5xl font-bold '>{t('ourMessage')}</h1>
					<div className='flex justify-center'>
						<Image
							src='/image/shop2.jpg'
							alt={t('storeImage')}
							width={300}
							height={300}
							className='object-cover rounded-lg'
						/>
					</div>
					<p className='max-w-4xl mx-auto leading-loose text-lg px-5 '>
						{t('ourMessageDesc')}
					</p>
				</section>

				{/* Section: Vision, Goals, Sustainability */}
				<section className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-4 md:px-16 lg:px-20'>
					{[
						{
							icon: (
								<FaTshirt
									size={40}
									className='text-PrimaryTextColors mx-auto mb-4'
								/>
							),
							title: t('ourVision'),
							desc: t('ourVisionDesc'),
						},
						{
							icon: (
								<FaShoppingBag
									size={40}
									className='text-PrimaryTextColors mx-auto mb-4'
								/>
							),
							title: t('ourGoals'),
							desc: t('ourGoalsDesc'),
						},
						{
							icon: (
								<FaLeaf
									size={40}
									className='text-PrimaryTextColors mx-auto mb-4'
								/>
							),
							title: t('sustainability'),
							desc: t('sustainabilityDesc'),
						},
					].map((item, idx) => (
						<div
							key={idx}
							className='p-6 border rounded-xl shadow hover:shadow-lg transition duration-300 text-darksecoundry dark:text-darkthird'>
							{item.icon}
							<h3 className='text-xl font-semibold text-PrimaryTextColors mb-2 text-darkprimary dark:text-darkforth'>
								{item.title}
							</h3>
							<p className='text-sm leading-relaxed  text-darkprimary dark:text-darkforth'>
								{item.desc}
							</p>
						</div>
					))}
				</section>

				{/* Section: Stats */}
				<section className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-4 md:px-16 lg:px-20'>
					{[
						{
							image: '/image/shop1.jpg',
							title: '+500',
							desc: t('clothingPiece'),
						},
						{
							image: '/image/shop4.jpg',
							title: '+20',
							desc: t('employeeService'),
						},
						{
							image: '/image/shop2.jpg',
							title: t('exyear'),
							desc: t('experienceYears'),
						},
					].map((stat, idx) => (
						<div
							key={idx}
							className='flex flex-col items-center space-y-4'>
							<Image
								src={stat.image}
								alt={stat.title}
								width={100}
								height={100}
								className='h-28 w-28 object-cover rounded-full'
							/>
							<h3 className='text-2xl font-bold text-darksecoundry dark:text-darkthird'>
								{stat.title}
							</h3>
							<p>{stat.desc}</p>
						</div>
					))}
				</section>
			</div>
		</div>
	);
};

export default AboutPage;
