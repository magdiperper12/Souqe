'use client';

import React, { useRef } from 'react';

function ScrollToTop() {
	// ref للجزء العلوي من الصفحة
	const topRef = useRef<HTMLDivElement | null>(null);

	// دالة ترجعنا للأعلى
	const scrollToTop = () => {
		topRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div>
			{/* المكان اللي هنرجعله */}
			<div ref={topRef}></div>

			{/* محتوى طويل عشان نقدر ننزل لأسفل */}
			<div className='h-[1500px] p-5'>
				<h2 className='text-xl font-semibold'>Scroll down 👇</h2>
			</div>

			{/* الزرار اللي بيرجع للأعلى */}
			<button
				onClick={scrollToTop}
				className='fixed bottom-5 right-5 px-4 py-2 rounded-xl bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition duration-300'>
				⬆ Go to Top
			</button>
		</div>
	);
}

export default ScrollToTop;
