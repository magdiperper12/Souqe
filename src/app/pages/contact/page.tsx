'use client';
import HeroImage from '@/src/components/Hero';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
	const { t } = useTranslation();
	return (
		<div>
			<HeroImage
				image='/image/shop4.jpg'
				name={t('Contact')}
				item1={t('productDesc')}
				item2={t('Contact')}
				item3={t('shopNow')}
			/>

			<div className='bg-Background dark:bg-darkBackground min-h-screen py-12'>
				<section className='flex justify-center items-center mb-16 mt-4 '>
					<a
						href='https://wa.me/qr/F7VHAJTVW7SBI1'
						target='_blank'
						rel='noreferrer'
						className='text-main text-lg mt-4 block text-center'>
						<div className='border-4 border-main p-4 rounded-md dark:border-third'>
							<h3 className='text-center text-2xl font-semibold mb-4'>
								Scan Me
							</h3>
							<img
								src={'/image/QRimage.JPG'}
								alt='WhatsApp QR Code'
								className='w-48 h-48 object-contain'
							/>
						</div>
					</a>
				</section>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-12'>
						<div className='bg-white dark:bg-transparent dark:border-2 border-forth p-4 md:p-8 shadow-lg rounded-lg'>
							<h3 className='text-2xl font-semibold text-PrimaryTextColors dark:text-darkPrimaryTextColors mb-4'>
								{t('contactInfo')}
							</h3>
							<ul className='space-y-2 flex flex-col items-start text-right text-lg'>
								<li className='flex items-start gap-2'>
									<span className='text-lg'> {t('phone')}</span>
									<a
										href='tel:+201033903220'
										className='text-darksecoundry hover:text-darkprimary dark:text-third dark:hover:text-secoundry'>
										01021589478
									</a>
								</li>
								<li className='flex items-center gap-2'>
									<span className='text-lg'>{t('email')}</span>
									<a
										href='mailto:magdifashion@gmail.com'
										className='text-darksecoundry px-2 hover:text-blue-700 dark:text-third dark:hover:text-secoundry'>
										magdifashion@gmail.com
									</a>
								</li>
								<li className='flex items-center gap-2'>
									<span className='text-lg'>{t('address')}</span>
									<a
										href='https://maps.app.goo.gl/NNRmxz7P2J8XnFbp6'
										className='text-darksecoundry  px-2 hover:text-darkprimary dark:text-third dark:hover:text-secoundry'>
										{t('addressDetails')}
									</a>
								</li>
							</ul>
							<div className='flex space-x-4 justify-start mt-6 items-center gap-2'>
								{[
									{
										icon: (
											<FaFacebookF
												size={50}
												className='text-darksecoundry hover:bg-darksecoundry border-2 border-darksecoundry hover:text-white p-2 rounded-md transition-colors duration-300'
											/>
										),
										href: 'https://www.facebook.com/',
										label: 'Facebook',
									},
									{
										icon: (
											<FaWhatsapp
												size={50}
												className='text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white p-2 rounded-md transition-colors duration-300'
											/>
										),
										href: 'https://api.whatsapp.com/send/?phone=%01021589478&text=مرحبا، أريد الاستفسار عن منتجاتكم&type=phone_number&app_absent=0',
										label: 'Whatsapp',
									},
								].map(({ icon, href, label }) => (
									<a
										key={label}
										href={href}
										target='_blank'
										rel='noopener noreferrer'
										aria-label={label}
										className='transition-colors duration-300'>
										{icon}
									</a>
								))}
							</div>
						</div>

						<div className='bg-white dark:bg-transparent dark:border-2 border-forth p-2 md:p-8 shadow-lg rounded-lg'>
							<h3 className='text-2xl font-semibold text-PrimaryTextColors dark:text-darkPrimaryTextColors mb-4'>
								{t('location')}
							</h3>
							<div className='w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg'>
								<iframe
									className='w-full h-full rounded-lg'
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.3928513274207!2d31.243447!3d30.050248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c3f0a5f68f%3A0x9aaf68ec8f7da4f4!2z2KfZhNmF2LPZitin2Kog2KfZhNiz2YrYp9ivINmE2YTYp9mE2Kkg2YjYp9mE2YbYp9mG!5e0!3m2!1sar!2seg!4v1716801168262!5m2!1sar!2seg'
									allowFullScreen
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
