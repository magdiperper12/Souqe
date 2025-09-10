'use client';
import React from 'react';
import { usePurchase } from '../../context/PurchaseContext';

export default function ProfilePage() {
	const { purchases } = usePurchase();

	return (
		<div className='max-w-5xl mx-auto py-20 mt-20'>
			{/* غلاف البروفايل */}
			<div className='relative h-60 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl  shadow-md'>
				<img
					src='/image/shop1.jpg' // صورة غلاف افتراضية
					alt='Cover'
					className='w-full h-full object-cover'
				/>
				{/* صورة البروفايل */}
				<div className='absolute -bottom-16 left-1/2 transform -translate-x-1/2'>
					<img
						src='/image/shop2.jpg' // صورة افتراضية
						alt='Profile'
						className='w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover'
					/>
				</div>
			</div>

			{/* بيانات المستخدم */}
			<div className='mt-20 text-center'>
				<h1 className='text-3xl font-bold text-gray-800 dark:text-gray-100'>
					أحمد محمد
				</h1>
				<p className='text-gray-600 dark:text-gray-300'>ahmed@example.com</p>
				<p className='text-gray-500 text-sm mt-1'>القاهرة - مصر</p>
			</div>

			{/* تبويبات (زي الفيسبوك) */}
			<div className='flex justify-center space-x-6 border-b mt-8 pb-2'>
				<button className='text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'>
					المشتريات
				</button>
				<button className='text-gray-600 hover:text-blue-600'>المفضلة</button>
				<button className='text-gray-600 hover:text-blue-600'>الإعدادات</button>
			</div>

			{/* قسم المشتريات */}
			<div className='mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6'>
				<h2 className='text-xl font-semibold mb-4'>المشتريات</h2>

				{purchases.length === 0 ? (
					<p className='text-gray-500 text-center'>
						لم تقم بشراء أي منتجات حتى الآن.
					</p>
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
								<span className='block mt-2 font-bold text-blue-600'>
									${product.price}
								</span>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
