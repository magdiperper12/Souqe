'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProductType } from '@/src/components/CardBox';

interface PurchaseContextType {
	purchases: ProductType[];
	addPurchase: (product: ProductType) => void;
}

const PurchaseContext = createContext<PurchaseContextType | undefined>(
	undefined
);

export const usePurchase = () => {
	const context = useContext(PurchaseContext);
	if (!context) {
		throw new Error('usePurchase must be used inside PurchaseProvider');
	}
	return context;
};

export const PurchaseProvider = ({ children }: { children: ReactNode }) => {
	const [purchases, setPurchases] = useState<ProductType[]>([]);

	const addPurchase = (product: ProductType) => {
		setPurchases((prev) => [...prev, product]);
	};

	return (
		<PurchaseContext.Provider value={{ purchases, addPurchase }}>
			{children}
		</PurchaseContext.Provider>
	);
};
