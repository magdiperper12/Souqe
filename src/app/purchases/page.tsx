'use client';

import { ProductType } from '@/src/components/CardBox';
import { usePurchase } from '../context/PurchaseContext';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function PurchasesPage() {
	const { t } = useTranslation();
	const { purchases } = usePurchase();

	// ✅ حساب الإجمالي (مع الكمية)
	const totalPrice = purchases.reduce(
		(acc, product: any) => acc + product.price * (product.quantity || 1),
		0
	);

	return (
		<div className='container mx-auto p-8 my-10 mt-28'>
			<h1 className='text-3xl font-bold mb-8 text-center'>{t('Purchases')}</h1>

			{purchases.length === 0 ? (
				<p className='text-center text-gray-500'>
					You haven't purchased anything yet.
				</p>
			) : (
				<div className='w-full '>
					{/* المنتجات */}
					<div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{purchases.map((product: any) => (
							<div
								key={product.id}
								className='rounded-2xl shadow-md bg-gray-100 dark:bg-gray-800 p-4 flex flex-col'>
								<img
									src={product.image}
									alt={product.title}
									className='h-48 w-full object-contain mb-4'
								/>
								<h2 className='font-semibold text-lg line-clamp-2'>
									{product.title}
								</h2>
								<p className='mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3'>
									{product.description}
								</p>
								<div className='mt-auto pt-4 flex justify-between items-center mx-2 gap-2'>
									<span className='font-bold text-xl'>${product.price}</span>
									{/* ✅ عدد القطع */}
									<div className='font-bold text-xl border-2 px-3 py-1 rounded-lg border-blue-900 dark:text-blue-200'>
										{t('Quantity')}: {product.quantity || 1}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* ✅ إجمالي السعر */}
					<div className='text-center mt-10'>
						<p className='text-2xl font-semibold'>
							{t('TotalPrice')}: ${totalPrice.toFixed(2)}
						</p>
					</div>

					{/* زر الدفع */}
					<Link
						href={'/pages/price'}
						className=' w-2/4 p-2 block my-12 bg-darksecoundry hover:bg-black dark:hover:bg-blue-950 rounded-lg text-white text-xl text-center m-auto  h-12'>
						ادفع الان
					</Link>
				</div>
			)}
		</div>
	);
}
