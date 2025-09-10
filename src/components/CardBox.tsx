import React from 'react';

interface producttype {
	id: number;
	image: string;
	title: string;
	description: string;
	price: number;
	category: string;
}
const CardBox = ({
	id,
	image,
	title,
	description,
	price,
	category,
}: producttype) => {
	return (
		<div
			key={id}
			className='rounded-2xl relative shadow-md bg-gray-100 dark:bg-gray-800 p-4 flex flex-col hover:scale-105 transition-transform'>
			<div className='absolute top-0 right-0  bg-gray-200 px-2 py-1 rounded-lg text-gray-800'>
				{category}
			</div>
			<img
				src={image}
				alt={title}
				className='h-48 w-full object-contain mb-4'
			/>
			<h2 className='font-semibold text-lg line-clamp-2'>{title}</h2>
			<p className='mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3'>
				{description}
			</p>
			<div className='mt-auto flex justify-between items-center pt-4'>
				<span className='font-bold text-xl'>${price}</span>
				<button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
					Buy
				</button>
			</div>
		</div>
	);
};

export default CardBox;
