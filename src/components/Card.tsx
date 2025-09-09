'use client';
import { useEffect, useState } from 'react';

type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	image: string;
	category: string;
};

export default function Card() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setLoading(false);
			});
	}, []);

	if (loading) return <p className='text-center'>Loading...</p>;

	return (
		<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{products.map((product) => (
				<div
					key={product.id}
					className='rounded-2xl shadow-md bg-gray-100 dark:bg-gray-800 p-4 flex flex-col hover:scale-105 transition-transform'>
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
					<div className='mt-auto flex justify-between items-center pt-4'>
						<span className='font-bold text-xl'>${product.price}</span>
						<button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
							Buy
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
