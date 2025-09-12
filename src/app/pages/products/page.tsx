'use client';
import HeroImage from '@/src/components/Hero';
import ProductContainer from '@/src/components/ProductContainer';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Products = () => {
	const { t } = useTranslation();
	return (
		<div>
			<HeroImage
				image='/image/shop2.jpg'
				name={t('productPage')}
				item1={t('productDesc')}
				item2={t('Contact')}
				item3={t('shopNow')}
			/>
			<ProductContainer />
		</div>
	);
};

export default Products;
