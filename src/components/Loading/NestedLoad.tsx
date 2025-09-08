import React from 'react';

function NestedLoad() {
	return (
		<div>
			<div className='grid h-screen place-content-center bg-transparent px-4'>
				<div className='text-center'>
					<h1 className='text-9xl font-black text-gray-200 dark:text-darkthird'>
						Loading
					</h1>
					<p className='text-2xl font-bold tracking-tight text-gray-300 dark:text-darksecoundry sm:text-4xl'>
						Wait ..!
					</p>
				</div>
			</div>
		</div>
	);
}

export default NestedLoad;
