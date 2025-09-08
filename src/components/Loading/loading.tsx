import React from 'react';

function Loading() {
	return (
		<div className='grid h-screen place-content-center bg-primary dark:bg-darkthird px-4'>
			<div className='text-center'>
				<div className='flex justify-center items-center min-h-screen'>
					<div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500'></div>
				</div>
			</div>
		</div>
	);
}

export default Loading;
