'use client';
import React, { useState } from 'react';
import { usePurchase } from '../../context/PurchaseContext';
import { useTranslation } from 'react-i18next';
import Dark from '@/src/components/theme/Dark';
import Lang from '@/src/components/theme/LanguageSwitcher';
import Image from 'next/image';

export default function ProfilePage() {
	const { t } = useTranslation();
	const { purchases } = usePurchase();
	const [activeTab, setActiveTab] = useState<'purchases' | 'settings'>(
		'purchases'
	);

	return (
		<div className='max-w-5xl mx-auto py-20 mt-20'>
			{/* Cover Image */}
			<div className='relative h-60  px-3'>
				<img
					src='/image/shop1.jpg'
					alt='Cover'
					className='w-full h-full object-cover rounded-xl '
				/>
				<div className='absolute -bottom-16 left-1/2 transform -translate-x-1/2'>
					<Image
						width={40}
						height={40}
						src='/image/magdi.png'
						alt='Profile'
						className='w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover'
					/>
				</div>
			</div>

			{/* User Info */}
			<div className='mt-20 text-center'>
				<h1 className='text-3xl font-bold text-gray-800 dark:text-gray-100'>
					{t('userName')}
				</h1>
				<p className='text-gray-600 dark:text-gray-300'>
					magdiperper@example.com
				</p>
				<p className='text-gray-500 text-sm mt-1'>{t('userLocation')}</p>
			</div>

			{/* Tabs */}
			<div className='flex justify-center space-x-6 border-b mt-8 pb-2'>
				<button
					onClick={() => setActiveTab('purchases')}
					className={`pb-1 font-semibold ${
						activeTab === 'purchases'
							? 'text-darksecoundry border-b-2 border-darksecoundry'
							: 'text-gray-600 hover:text-darksecoundry'
					}`}>
					{t('purchases')}
				</button>
				<button
					onClick={() => setActiveTab('settings')}
					className={`pb-1 font-semibold ${
						activeTab === 'settings'
							? 'text-darksecoundry border-b-2 border-darksecoundry'
							: 'text-gray-600 hover:text-darksecoundry'
					}`}>
					{t('settings')}
				</button>
			</div>

			{/* Tab Content */}
			<div className='mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6'>
				{activeTab === 'purchases' ? (
					<>
						<h2 className='text-xl font-semibold mb-4'>{t('purchases')}</h2>
						{purchases.length === 0 ? (
							<p className='text-gray-500 text-center'>{t('noPurchases')}</p>
						) : (
							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
								{purchases.map((product, index) => (
									<div
										key={`${product.id}-${index}`}
										className='border rounded-lg shadow-sm p-4 bg-gray-50 dark:bg-gray-700 hover:shadow-md transition'>
										<img
											src={product.image}
											alt={product.title}
											className='h-32 w-full object-contain mb-3'
										/>
										<h3 className='font-semibold text-lg line-clamp-1'>
											{product.title}
										</h3>
										<p className='text-sm text-gray-600 dark:text-gray-300 line-clamp-2'>
											{product.description}
										</p>
										<span className='block mt-2 font-bold text-darksecoundry'>
											${product.price}
										</span>
									</div>
								))}
							</div>
						)}
					</>
				) : (
					<>
						<h2 className='text-xl font-semibold mb-4'>{t('settings')}</h2>
						<div className='flex justify-center items-center gap-3 md:gap-5'>
							<Lang /> {/*<Dark /> */}
						</div>
					</>
				)}
			</div>
		</div>
	);
}
