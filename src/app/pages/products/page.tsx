import HeroImage from '@/src/components/Hero';
import ProductContainer from '@/src/components/ProductContainer';
import React from 'react';

const Products = () => {
	return (
		<div>
			<HeroImage
				image='/image/shop2.jpg'
				name='Products '
				item1='hello world '
				item2='masre'
				item3='egy'
			/>
			<ProductContainer />
		</div>
	);
};

export default Products;
