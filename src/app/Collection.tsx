'use client';

import React from 'react';
import HeroImage from '../components/Hero';
import ProductContainer from '../components/ProductContainer';
import { useTranslation } from 'react-i18next';

function Collection() {
	const { t } = useTranslation();
	return (
		<main className='  overflow-x-hidden'>
			<HeroImage
				image='/image/shop4.jpg'
				name={t('heroTitle')}
				item1={t('heroDesc')}
				item2={t('Contact')}
				item3={t('shopNow')}
			/>
			<ProductContainer />
		</main>
	);
}

export default Collection;
