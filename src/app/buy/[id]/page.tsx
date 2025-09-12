'use client';
import React, { useEffect, useState } from 'react';
import { usePurchase } from '../../context/PurchaseContext';
import { useRouter, useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { useTranslation } from 'react-i18next';

interface ProductType {
	rating: any;
	id: number;
	image: string;
	title: string;
	description: string;
	price: number;
	category: string;
}

export default function BuyPage() {
	const { t } = useTranslation();
	const { addPurchase } = usePurchase();
	const router = useRouter();
	const params = useParams(); // 👈 هتجيب params
	const id = params?.id; // id من الرابط

	const [product, setProduct] = useState<ProductType | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!id) return;
		setLoading(true);
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, [id]);

	const handleBuy = () => {
		if (product) {
			addPurchase(product);
			router.push('/purchases');
		}
	};

	if (loading) return <div className='text-center p-8'>Loading...</div>;
	if (!product) return notFound();
	return (
		<main className='container mx-auto  p-8 flex justify-center mt-28'>
			<div className='max-w-md w-full relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg'>
				<img
					src={product.image}
					alt={product.title}
					className='h-60 w-full object-contain mb-4'
				/>
				<div className='bg-blue-200 absolute -top-1 -right-1 px-2 py-1 rounded-lg text-gray-800 inline-block mb-4'>
					{product.category}
				</div>
				<h1 className='text-2xl font-bold mb-2'>{product.title}</h1>
				<p className='text-gray-600 dark:text-gray-300 mb-4'>
					{product.description}
				</p>
				<div className='flex justify-between items-center w-full'>
					<span className='text-xl font-semibold mb-4 '>${product.price}</span>
					<span className='text-xl font-semibold mb-4 '>
						{t('Rate')} : {product.rating.rate} / 5
					</span>
				</div>
				<button
					onClick={handleBuy}
					className='bg-darksecoundry text-white px-6 py-3 w-full rounded-lg hover:bg-darkprimary'>
					Confirm Purchase
				</button>
			</div>
		</main>
	);
}
