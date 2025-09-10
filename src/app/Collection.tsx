'use client';

import React from 'react';
import HeroImage from '../components/Hero';
import ProductContainer from '../components/ProductContainer';

function Collection() {
	return (
		<main className='  overflow-x-hidden'>
			<HeroImage
				image='/image/shop4.jpg'
				name='تخفيضات نهاية الموسم '
				item1='خصومات تصل إلى 50% على جميع المنتجات'
				item2='تسوق الآن'
				item3='egy'
			/>
			<ProductContainer />
		</main>
	);
}

export default Collection;
