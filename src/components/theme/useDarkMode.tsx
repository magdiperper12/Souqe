'use client';
import { useEffect, useState } from 'react';

const useDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // قيمة افتراضية

	useEffect(() => {
		// تحديث القيمة بناءً على localStorage بعد تحميل الكلاينت
		const saved = localStorage.getItem('isDarkMode') === 'true';
		setIsDarkMode(saved);
	}, []);

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
