import Link from 'next/link';
import React from 'react';

interface HeroImageProps {
	image: string;
	name: string;
	item1: string;
	item2: string;
	item3: string;
}

const HeroImage = ({ image, name, item1, item2, item3 }: HeroImageProps) => {
	return (
		<section className='relative overflow-hidden mt-28  text-white z-20'>
			<div className='relative h-96 w-full'>
				<img
					src={image}
					alt='Souq Hero'
					className='object-cover w-full h-96'
				/>

				<div className='absolute inset-0 bg-black dark:bg-black bg-opacity-70 dark:bg-opacity-70 flex flex-col justify-center items-center text-center'>
					<h1 className='text-3xl md:text-6xl font-bold mb-4 text-white'>
						{name}
					</h1>
					<p className='text-base md:text-xl font-bold mb-4 text-white'>
						{item1}
					</p>
					<div className='text-sm  max-w-2xl flex justify-center items-center gap-5 text-darkforth'>
						<Link
							href={'/pages/contact'}
							className='bg-darksecoundry px-4 py-2 rounded-xl hover:bg-blue-800 transition-all duration-150'>
							{item2}
						</Link>
						<Link
							href={'/pages/products'}
							className='bg-darksecoundry px-4 py-2 rounded-xl hover:bg-blue-800 transition-all duration-150'>
							{item3}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroImage;
