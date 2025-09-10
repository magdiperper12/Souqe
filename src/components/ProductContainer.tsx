'use client';

import CardBox from '@/src/components/CardBox';
import React, { useEffect, useState } from 'react';
import Loading from './Loading/loading';
import { usePathname } from 'next/navigation';

type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	image: string;
	category: string;
};

const ProductContainer = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');
	const [categories, setCategories] = useState<string[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>('All');

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

	if (loading)
		return (
			<div className='text-center'>
				<Loading />
			</div>
		);

	// فلترة المنتجات بناءً على البحث أو التصنيف
	const filteredProducts = products.filter((product) => {
		const matchesSearch = product.title
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		const matchesCategory =
			selectedCategory === 'All' || product.category === selectedCategory;

		// لو كنا في /products → استخدم الفلترة بالكاتيجوري فقط
		// غير كده → استخدم البحث فقط
		if (isProductPath) {
			return matchesCategory;
		} else {
			return matchesSearch;
		}
	});

	return (
		<div className='p-10'>
			{/* Search Bar يظهر فقط لو مش في /products */}
			{!isProductPath && (
				<div className='mb-6 flex justify-center'>
					<input
						type='text'
						placeholder='ابحث عن منتج...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className='w-full md:w-1/2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</div>
			)}

			{/* Filter Buttons تظهر فقط لو في /products */}
			{isProductPath && (
				<div className='flex flex-wrap gap-3 justify-center mb-8'>
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setSelectedCategory(cat)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition ${
								selectedCategory === cat
									? 'bg-blue-600 text-white shadow-md'
									: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
							}`}>
							{cat}
						</button>
					))}
				</div>
			)}

			{/* Products */}
			<div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{filteredProducts.length > 0 ? (
					filteredProducts.map((product) => (
						<CardBox
							key={product.id}
							id={product.id}
							image={product.image}
							title={product.title}
							description={product.description}
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
