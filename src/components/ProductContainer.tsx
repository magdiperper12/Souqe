'use client';

import CardBox from '@/src/components/CardBox';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import NestedLoad from './Loading/NestedLoad';
import { FaArrowDown } from 'react-icons/fa6';

type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	image: string;
	category: string;
};

const ProductContainer = () => {
	const { t } = useTranslation();
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	const [searchTerm, setSearchTerm] = useState('');

	const [debouncedSearch, setDebouncedSearch] = useState('');

	const [categories, setCategories] = useState<string[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>('All');
	const [sortByPrice, setSortByPrice] = useState(false);

	const pathname = usePathname();
	const isProductPath = pathname.includes('/products');

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((data: Product[]) => {
				setProducts(data);
				setCategories([
					'All',
					...Array.from(new Set(data.map((item: Product) => item.category))),
				]);
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearch(searchTerm);
		}, 500);

		return () => clearTimeout(handler);
	}, [searchTerm]);

	if (loading)
		return (
			<div className='text-center'>
				<NestedLoad />
			</div>
		);

	let filteredProducts = products.filter((product) => {
		const matchesSearch = product.title
			.toLowerCase()
			.includes(debouncedSearch.toLowerCase());
		const matchesCategory =
			selectedCategory === 'All' || product.category === selectedCategory;

		if (isProductPath) {
			return matchesCategory;
		} else {
			return matchesSearch;
		}
	});

	if (sortByPrice) {
		filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
	}

	return (
		<div className='p-6 md:p-10'>
			{!isProductPath && (
				<div className='mb-6 flex justify-center gap-3'>
					<input
						type='text'
						placeholder={t('searchPlaceholder')}
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className='w-full md:w-1/2 p-3 border rounded-lg dark:focus:ring-2 ring-blue-700 dark:bg-blue-100 shadow-sm focus:outline-none'
					/>

					<button
						onClick={() => setSortByPrice(!sortByPrice)}
						className='px-1 md:px-4 py-1 text-nowrap rounded-lg flex justify-between items-center gap-1 md:gap-2 bg-darksecoundry focus:bg-black text-white shadow hover:bg-darkprimary transition'>
						<FaArrowDown />
						{sortByPrice ? t('cancelSort') : t('sortPricce')}
					</button>
				</div>
			)}

			{isProductPath && (
				<div className='flex flex-wrap gap-3 justify-center mb-8 md:border-0 border-b-2 md:pb-4 pb-6 '>
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setSelectedCategory(cat)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition ${
								selectedCategory === cat
									? 'bg-darksecoundry text-white shadow-md'
									: 'bg-blue-100 dark:bg-blue-200 text-darkprimary hover:bg-blue-300'
							}`}>
							{cat}
						</button>
					))}
				</div>
			)}

			<div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{filteredProducts.length > 0 ? (
					filteredProducts.map((product) => (
						<CardBox
							key={product.id}
							id={product.id}
							image={product.image}
							title={product.title}
							description={''}
							category={product.category}
							price={product.price}
						/>
					))
				) : (
					<p className='text-center col-span-full text-gray-500'>
						لا توجد نتائج مطابقة
					</p>
				)}
			</div>
		</div>
	);
};

export default ProductContainer;
