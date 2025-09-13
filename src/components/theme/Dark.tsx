'use client';
import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from './useDarkMode';

const Dark: React.FC = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className='text-nowrap'>
			<div
				className='m-auto lg:w-auto rounded-full flex items-center cursor-pointer'
				onClick={toggleDarkMode}>
				<div
					className={`w-8 h-8 rounded-full flex justify-center items-center ${
						isDarkMode ? 'bg-darkforth' : 'bg-darkprimary'
					}`}>
					{isDarkMode ? (
						<FaSun className='text-darksecoundry ' />
					) : (
						<FaMoon className='text-darkforth' />
					)}
				</div>
			</div>
		</div>
	);
};

export default Dark;
