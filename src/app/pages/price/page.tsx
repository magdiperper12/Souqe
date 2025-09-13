'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const Daf3Page = () => {
	const { t } = useTranslation();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert('✅ تم تنفيذ الطلب بنجاح');
	};

	return (
		<div className='min-h-screen mt-28 bg-blue-50 dark:bg-gray-900 flex justify-center items-start py-10 px-4 sm:px-6 lg:px-8'>
			<div className='w-full max-w-2xl'>
				<h1 className='text-2xl sm:text-3xl font-bold mb-6 text-right text-blue-900 dark:text-blue-100'>
					{t('orderData')}
				</h1>

				<form
					onSubmit={handleSubmit}
					className='bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-md space-y-5 text-right transition-colors duration-300'>
					<div>
						<input
							type='text'
							required
							className='w-full p-3 rounded-lg border border-blue-300 dark:border-gray-700 dark:bg-gray-700 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-darksecoundry'
							placeholder={t('emailOrPhone')}
						/>
						<div className='flex items-center mt-2 gap-2'>
							<input
								type='checkbox'
								id='offers'
								className='w-4 h-4 accent-darksecoundry'
							/>
							<label
								htmlFor='offers'
								className='text-blue-700 dark:text-blue-200'>
								{t('offersNew')}
							</label>
						</div>
					</div>

					<h2 className='text-lg sm:text-xl font-semibold text-blue-900 dark:text-blue-100'>
						{t('shippingAddress')}
					</h2>
					<div className='space-y-3'>
						<select
							required
							className='w-full p-3 rounded-lg border border-blue-300 dark:border-gray-700 dark:bg-gray-700 dark:text-blue-100'>
							<option value=''>{t('country')}</option>
							<option value='egy'>{t('egy')}</option>
							<option value='sa'>{t('sa')}</option>
							<option value='usa'>{t('usa')}</option>
						</select>

						<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
							<input
								type='text'
								required
								placeholder={t('firstName')}
								className='p-3 rounded-lg border border-blue-300 dark:border-gray-700 dark:bg-gray-700 dark:text-blue-100'
							/>
							<input
								type='text'
								required
								placeholder={t('lastName')}
								className='p-3 rounded-lg border border-blue-300 dark:border-gray-700 dark:bg-gray-700 dark:text-blue-100'
							/>
						</div>

						<input
							type='text'
							required
							placeholder={t('address')}
							className='w-full p-3 rounded-lg border border-blue-300 dark:border-gray-700 dark:bg-gray-700 dark:text-blue-100'
						/>

						<div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
							<input
								type='text'
								required
								placeholder={t('postalCode')}
								className='p-3 rounded-lg border border-blue-300 dark:border-gray-700 dark:bg-gray-700 dark:text-blue-100'
							/>
							<input
								type='text'
								required
								placeholder={t('region')}
								className='p-3 rounded-lg border border-blue-300 dark:border-gray-700 dark:bg-gray-700 dark:text-blue-100'
							/>
							<input
								type='text'
								required
								placeholder={t('city')}
								className='p-3 rounded-lg border border-blue-300 dark:border-gray-700 dark:bg-gray-700 dark:text-blue-100'
							/>
						</div>

						<input
							type='tel'
							required
							placeholder={t('phoneRequired')}
							className='w-full p-3 rounded-lg border border-blue-300 dark:border-gray-700 dark:bg-gray-700 dark:text-blue-100'
						/>
					</div>

					<div className='space-y-2'>
						<div className='flex items-center gap-2'>
							<input
								type='checkbox'
								id='save-info'
								className='w-4 h-4 accent-darksecoundry'
							/>
							<label
								htmlFor='save-info'
								className='text-blue-700 dark:text-blue-200'>
								{t('saveInfo')}
							</label>
						</div>
					</div>

					<div>
						<label className='block mb-2 font-medium text-blue-900 dark:text-blue-100'>
							{t('shippingDetails')}
						</label>
						<div className='w-full p-3 rounded-lg border border-blue-300 dark:border-gray-700 dark:bg-gray-700'>
							<input
								type='text'
								placeholder={t('homeDelivery')}
								readOnly
								className='w-full p-3 outline-none rounded-lg border-none dark:bg-gray-700 dark:text-blue-100'
							/>
						</div>
					</div>

					<div>
						<h2 className='text-lg sm:text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100'>
							{t('paymentMethod')}
						</h2>
						<div className='space-y-3'>
							<label className='flex items-center gap-2 text-blue-700 dark:text-blue-200'>
								<input
									type='radio'
									name='payment'
									defaultChecked
									required
									className='accent-darksecoundry'
								/>
								{t('cod')}
							</label>
							<label className='flex items-center gap-2 text-blue-700 dark:text-blue-200'>
								<input
									type='radio'
									name='payment'
									required
									className='accent-darksecoundry'
								/>
								{t('cardPayment')} <span className='ml-2'>💳</span>
							</label>
						</div>
					</div>

					<button
						type='submit'
						className='w-full mt-6 py-3 bg-darksecoundry hover:bg-black text-white text-lg font-semibold rounded-lg transition-colors duration-300'>
						{t('placeOrder')}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Daf3Page;
