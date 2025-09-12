'use client';

import React from 'react';

const Daf3Page = () => {
	return (
		<div className='container mx-auto p-8 my-20 mt-28 max-w-lg'>
			<h1 className='text-3xl font-bold mb-8 text-center'>💳 إتمام الدفع</h1>

			<form className='bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4'>
				<div>
					<label className='block text-sm font-medium mb-1'>الاسم الكامل</label>
					<input
						type='text'
						className='w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-darksecoundry'
						placeholder='اكتب اسمك كما هو على البطاقة'
					/>
				</div>

				<div>
					<label className='block text-sm font-medium mb-1'>
						البريد الإلكتروني
					</label>
					<input
						type='email'
						className='w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-darksecoundry'
						placeholder='example@email.com'
					/>
				</div>

				<div>
					<label className='block text-sm font-medium mb-1'>رقم البطاقة</label>
					<input
						type='text'
						className='w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-darksecoundry'
						placeholder='1234 5678 9012 3456'
					/>
				</div>

				<div className='grid grid-cols-2 gap-4'>
					<div>
						<label className='block text-sm font-medium mb-1'>
							تاريخ الانتهاء
						</label>
						<input
							type='text'
							className='w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-darksecoundry'
							placeholder='MM/YY'
						/>
					</div>
					<div>
						<label className='block text-sm font-medium mb-1'>CVV</label>
						<input
							type='password'
							className='w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-darksecoundry'
							placeholder='***'
						/>
					</div>
				</div>

				<div>
					<label className='block text-sm font-medium mb-1'>
						عنوان الفاتورة
					</label>
					<input
						type='text'
						className='w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-darksecoundry'
						placeholder='المدينة، الشارع، رقم المنزل'
					/>
				</div>

				<button
					type='submit'
					className='w-full mt-4 py-3 bg-darksecoundry hover:bg-black text-white text-lg font-semibold rounded-lg'>
					ادفع الآن
				</button>
			</form>
		</div>
	);
};

export default Daf3Page;
