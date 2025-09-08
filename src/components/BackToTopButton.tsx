'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Show/hide button on scroll
	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return isVisible ? (
		<div className='flex justify-between  items-center w-full z-50'>
			<div className='fixed bottom-20 md:bottom-28 lg:bottom-32 xl:bottom-24 left-0 p-10 bg-transparent'>
				<div className=' absolute  h-14 w-14 md:h-16 md:w-16 cursor-pointer     flex justify-center items-center  z-40 bg-darkthird text-darkthird p-5 rounded-full shadow-lg hover:bg-darkprimary transition dark:bg-darkthird dark:hover:bg-secoundry dark:hover:text-white'></div>
				<button
					onClick={scrollToTop}
					className='absolute h-14 w-14 md:h-16 md:w-16 cursor-pointer flex justify-center items-center z-50 bg-darkthird text-darkthird p-5 rounded-full shadow-lg hover:bg-darkprimary transition dark:bg-darkthird dark:hover:bg-secoundry dark:hover:text-white'
					aria-label='Back to top'>
					<FaArrowUp className='text-lg text-white' />
				</button>
			</div>
		</div>
	) : (
		<div></div>
	);
};

export default BackToTopButton;
