'use client';
import React, { useEffect, useState } from 'react';
import { usePurchase } from '../../context/PurchaseContext';
import { useRouter, useParams, notFound } from 'next/navigation';
import { useTranslation } from 'react-i18next';

interface ProductType {
	rating: { rate: number; count: number };
	id: number;
	image: string;
	title: string;
	description: string;
	price: number;
	category: string;
}

// منتج مع الكمية
interface PurchaseProductType extends ProductType {
	quantity: number;
}

export default function BuyPage() {
	const { t } = useTranslation();
	const { addPurchase } = usePurchase();
	const router = useRouter();
	const params = useParams();
	const id = params?.id;

	const [product, setProduct] = useState<ProductType | null>(null);
	const [similarProducts, setSimilarProducts] = useState<ProductType[]>([]);
	const [loading, setLoading] = useState(true);
	const [quantity, setQuantity] = useState<number>(1);

	// تحميل المنتج الأساسي
	useEffect(() => {
		if (!id) return;
		setLoading(true);
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data);
				setLoading(false);
				// بعد تحميل المنتج الأساسي نجيب المنتجات المشابهة
				fetch(`https://fakestoreapi.com/products/category/${data.category}`)
					.then((res) => res.json())
					.then((similar) => {
						setSimilarProducts(
							similar.filter((p: ProductType) => p.id !== data.id)
						);
					});
			})
			.catch(() => setLoading(false));
	}, [id]);

	const handleBuy = () => {
		if (product) {
			const productWithQuantity: PurchaseProductType = {
				...product,
				quantity,
			};
			addPurchase(productWithQuantity);
			router.push('/purchases');
		}
	};

	// تبديل المنتج الأساسي مع المنتج اللي في القائمة
	const handleSwapProduct = (clickedProduct: ProductType) => {
		if (!product) return;
		// المنتج اللي فوق ينزل تحت مكان اللي اتضغط عليه
		setSimilarProducts((prev) =>
			prev.map((p) => (p.id === clickedProduct.id ? product : p))
		);
		// المنتج اللي اتضغط عليه يطلع فوق
		setProduct(clickedProduct);
		setQuantity(1);
	};

	if (loading) return <div className='text-center p-8'>Loading...</div>;
	if (!product) return notFound();

	return (
		<main className='container mx-auto p-8 flex flex-col gap-10 mt-28'>
			{/* المنتج الأساسي */}
			<div className='max-w-md mx-auto w-full relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg'>
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
				<div className='w-full flex justify-between items-center'>
					<div className='w-1/2 flex justify-start items-center gap-3 md:gap-5 '>
						<button
							onClick={() => setQuantity((prev) => prev + 1)}
							className='border-2 border-blue-500 hover:border-darkprimary hover:text-white hover:bg-black transition-all duration-200 rounded-full p-2 w-10 h-10 text-xl flex justify-center items-center '>
							+
						</button>
						<div className='text-xl'>{quantity}</div>
						<button
							onClick={() => setQuantity((prev) => Math.max(0, prev - 1))}
							className='border-2 border-blue-500 hover:border-darkprimary hover:text-white hover:bg-black transition-all duration-200 rounded-full p-2 w-10 h-10 text-xl flex justify-center items-center '>
							-
						</button>
					</div>

					<button
						onClick={handleBuy}
						className='bg-darksecoundry w-1/2 text-white px-6 py-3  rounded-lg hover:bg-darkprimary'>
						{t('ConfirmPurchase')}
					</button>
				</div>
			</div>

			{/* قائمة المنتجات المشابهة */}
			{similarProducts.length > 0 && (
				<div className='w-full my-10'>
					<div className='flex gap-4 overflow-x-auto pb-4 scrollbar-thin   w-3/4 m-auto'>
						{similarProducts.map((sp) => (
							<div
								key={sp.id}
								onClick={() => handleSwapProduct(sp)}
								className='min-w-[150px] cursor-pointer bg-white dark:bg-gray-800 rounded-lg p-4 shadow hover:scale-105 transition-transform duration-200'>
								<img
									src={sp.image}
									alt={sp.title}
									className='h-32 w-full object-contain mb-2'
								/>
								<p className='text-sm font-medium truncate'>{sp.title}</p>
							</div>
						))}
					</div>
				</div>
			)}
		</main>
	);
}
