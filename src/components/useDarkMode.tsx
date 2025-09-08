// hooks/useDarkMode.ts
'use client';
import { useEffect, useState } from 'react';

const useDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
		if (typeof window !== 'undefined') {
			return localStorage.getItem('isDarkMode') === 'true';
		}
		return true;
	});

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDarkMode);
		localStorage.setItem('isDarkMode', String(isDarkMode));
		window.dispatchEvent(new Event('themeChange'));
	}, [isDarkMode]);

	useEffect(() => {
		const handleThemeChange = () => {
			const updated = localStorage.getItem('isDarkMode') === 'true';
			setIsDarkMode(updated);
		};
		window.addEventListener('themeChange', handleThemeChange);
		return () => window.removeEventListener('themeChange', handleThemeChange);
	}, []);

	return { isDarkMode, toggleDarkMode: () => setIsDarkMode((prev) => !prev) };
};

export default useDarkMode;
