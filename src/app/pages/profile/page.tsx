'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import Lang from '@/src/components/theme/LanguageSwitcher';
import { usePurchase } from '../../context/PurchaseContext';

// ✅ ProductType مع quantity
type ProductType = {
	id: number;
	title: string;
	description: string;
	price: number;
	image: string;
	quantity?: number;
};

export default function ProfilePage() {
	const { t } = useTranslation();
	const { purchases } = usePurchase();
	const [activeTab, setActiveTab] = useState<'purchases' | 'settings'>(
		'purchases'
	);

	const totalPrice = purchases.reduce(
		(acc: number, product: ProductType) =>
			acc + product.price * (product.quantity || 1),
		0
	);

	return (
		<div className='min-h-screen mt-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-20 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-5xl mx-auto'>
				{/* غلاف وبروفايل */}
				<div className='relative h-60 px-3'>
					<img
						src='/image/shop1.jpg'
						alt='Cover'
						className='w-full h-full object-cover rounded-xl'
					/>
					<div className='absolute -bottom-16 left-1/2 transform -translate-x-1/2'>
						<Image
							width={128}
							height={128}
							src='/image/magdi.png'
							alt='Profile'
							className='w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover'
						/>
					</div>
				</div>

				{/* الاسم والبريد والموقع */}
				<div className='mt-20 text-center'>
					<h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>
						{t('userName')}
					</h1>
					<p className='text-gray-600 dark:text-gray-300'>
						magdiperper@example.com
					</p>
					<p className='text-gray-500 text-sm mt-1'>{t('userLocation')}</p>
				</div>

				{/* التبويبات */}
				<div className='flex justify-center gap-6 border-b border-gray-300 dark:border-gray-700 mt-8 pb-2'>
					<button
						onClick={() => setActiveTab('purchases')}
						className={`pb-1 font-semibold ${
							activeTab === 'purchases'
								? 'text-darkbg-darkprimary border-b-2 border-darkbg-darkprimary'
								: 'text-gray-600 dark:text-gray-400 hover:text-darkbg-darkprimary'
						}`}>
						{t('purchases')}
					</button>
					<button
						onClick={() => setActiveTab('settings')}
						className={`pb-1 font-semibold ${
							activeTab === 'settings'
								? 'text-darkbg-darkprimary border-b-2 border-darkbg-darkprimary'
								: 'text-gray-600 dark:text-gray-400 hover:text-darkbg-darkprimary'
						}`}>
						{t('settings')}
					</button>
				</div>

				{/* محتوى التبويب */}
				<div className='mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-colors duration-300'>
					{activeTab === 'purchases' ? (
						<>
							<h2 className='text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100'>
								{t('purchases')}
							</h2>
							{purchases.length === 0 ? (
								<p className='text-gray-500 dark:text-gray-400 text-center'>
									{t('noPurchases')}
								</p>
							) : (
								<>
									<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
										{purchases.map((product: ProductType) => (
											<div
												key={product.id}
												className='border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-4 bg-gray-50 dark:bg-darkprimary hover:shadow-md transition'>
												<img
													src={product.image}
													alt={product.title}
													className='h-32 w-full object-contain mb-3'
												/>
												<h3 className='font-semibold text-lg line-clamp-1 text-gray-900 dark:text-gray-100'>
													{product.title}
												</h3>
												<p className='text-sm text-gray-600 dark:text-gray-300 line-clamp-2'>
													{product.description}
												</p>

												<div className='mt-2 flex justify-between items-center'>
													<span className='font-bold text-darkbg-darkprimary'>
														${product.price}
													</span>
													<div className='font-bold border-2 border-blue-900 dark:border-blue-400 dark:text-blue-200 px-3 py-1 rounded-lg'>
														{t('Quantity')}: {product.quantity || 1}
													</div>
												</div>
											</div>
										))}
									</div>

									<div className='mt-6 text-right font-bold text-lg text-gray-900 dark:text-third'>
										{t('Total')}: ${totalPrice.toFixed(2)}
									</div>

									<Link
										href='/pages/price'
										className='block w-2/3 bg-darkprimary hover:bg-black rounded-lg text-white text-xl text-center mx-auto my-3 py-2 transition-colors duration-300'>
										{t('buy')}
									</Link>
								</>
							)}
						</>
					) : (
						<>
							<h2 className='text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100'>
								{t('settings')}
							</h2>
							<div className='flex justify-center items-center gap-3 md:gap-5'>
								<Lang />
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
