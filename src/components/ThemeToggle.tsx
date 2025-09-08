'use client';

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			onClick={toggleTheme}
			className='p-2 text-sm border rounded-lg dark:bg-gray-700 dark:text-white'>
			{theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
		</button>
	);
}
function useTheme(): { theme: any; toggleTheme: any } {
	throw new Error('Function not implemented.');
}
