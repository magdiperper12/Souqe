'use client';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import useDarkMode from './useDarkMode';

const ParticlesComponent = (props: { id: string | undefined }) => {
	const [init, setInit] = useState(false);
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const options: any = useMemo(
		() => ({
			background: {
				color: {
					value: isDarkMode ? '#000000' : '#FFFFFF',
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: { enable: true, mode: 'repulse' },
					onHover: { enable: true, mode: 'grab' },
				},
				modes: {
					push: { distance: 200, duration: 15 },
					grab: { distance: 150 },
				},
			},
			particles: {
				color: { value: isDarkMode ? '#FFFFFF' : '#000000' },
				links: {
					color: isDarkMode ? '#FFFFFF' : '#000000',
					distance: 150,
					enable: true,
					opacity: 0.3,
					width: 1,
				},
				move: {
					direction: 'none',
					enable: true,
					outModes: { default: 'bounce' },
					random: true,
					speed: 1,
					straight: false,
				},
				number: {
					density: { enable: true },
					value: 150,
				},
				opacity: { value: 1.0 },
				shape: { type: 'circle' },
				size: { value: { min: 1, max: 3 } },
			},
			detectRetina: true,
		}),
		[isDarkMode]
	);

	return (
		<div className='relative overflow-hidden'>
			<Particles
				id={props.id}
				options={options}
				className='-z-50 absolute top-0 left-0 h-full w-full'
			/>
		</div>
	);
};

export default ParticlesComponent;
