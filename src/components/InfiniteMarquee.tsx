'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
	FaMobileAlt,
	FaLaptopCode,
	FaApple,
	FaAndroid,
	FaReact,
	FaTools,
	FaRobot,
} from 'react-icons/fa';
import {
	SiFlutter,
	SiNextdotjs,
	SiTailwindcss,
	SiFirebase,
} from 'react-icons/si';
import { useTranslation } from 'next-i18next';

const items = [
	{ icon: <FaRobot />, text: 'AI' },
	{ icon: <FaMobileAlt />, text: 'Mobile Development' },
	{ icon: <SiFlutter />, text: 'Flutter Apps' },
	{ icon: <FaAndroid />, text: 'Android' },
	{ icon: <FaApple />, text: 'iOS' },
	{ icon: <FaLaptopCode />, text: 'Web Development' },
	{ icon: <SiNextdotjs />, text: 'Next.js' },
	{ icon: <SiTailwindcss />, text: 'Tailwind CSS' },
	{ icon: <FaReact />, text: 'React.js' },
	{ icon: <SiFirebase />, text: 'Firebase' },
	{ icon: <FaTools />, text: 'Custom Tools' },
];

const InfiniteMarquee: React.FC = () => {
	const controls = useAnimation();

	const startAnimation = () =>
		controls.start({
			x: '-100%',
			transition: {
				repeat: Infinity,
				repeatType: 'loop',
				duration: 25,
				ease: 'linear',
			},
		});

	useEffect(() => {
		startAnimation(); // تبدأ الحركة تلقائيًا عند التحميل
	}, []);

	const handleHoverStart = () => controls.stop();
	const handleHoverEnd = () => startAnimation();
	const { t } = useTranslation();
	return (
		<div className='text-center'>
			<div className='w-full m-auto text-darkprimary dark:text-primary'>
				<h1 className='text-xl md:text-4xl font-extrabold mb-8'>
					{t('technologies')}

					<span className='text-darkthird'>{t('cuda')}</span>
				</h1>
			</div>
			<div className='w-full overflow-hidden bg-third dark:bg-black dark:border-y-2 border-y-darkthird py-12'>
				<motion.div
					className='flex whitespace-nowrap gap-10 text-darkforth dark:text-darkthird text-lg font-medium'
					initial={{ x: '0%' }}
					animate={controls}
					onMouseEnter={handleHoverStart}
					onMouseLeave={handleHoverEnd}>
					{[...items, ...items].map((item, index) => (
						<motion.div
							key={index}
							className='flex items-center gap-2 px-4 min-w-max uppercase tracking-wide cursor-pointer'
							whileHover={{ scale: 1.1, color: '#FFD8A9' }}
							transition={{ type: 'spring', stiffness: 300 }}>
							<span className='text-3xl'>{item.icon}</span>
							<span className='text-xl'>{item.text}</span>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default InfiniteMarquee;
