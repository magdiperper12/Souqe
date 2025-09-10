import HeroImage from '@/src/components/Hero';
import Image from 'next/image';
import React from 'react';
import { FaTshirt, FaShoppingBag, FaLeaf } from 'react-icons/fa';

const AboutPage = () => {
	return (
		<div>
			<HeroImage
				image='/image/shop1.jpg'
				name='Magdi Fashion'
				item1='أحدث صيحات الموضة'
				item2='ملابس عصرية'
				item3='تصاميم أنيقة'
			/>

			<div className='bg-Background text-gray-800 lg:mt-16 dark:bg-darkBackground dark:text-darkPrimaryTextColors py-20 space-y-20'>
				{/* Section: Mission */}
				<section className='text-center space-y-10'>
					<h1 className='text-3xl md:text-5xl font-bold text-PrimaryTextColors'>
						رسالتنا
					</h1>
					<div className='flex justify-center'>
						<Image
							src='/image/shop2.jpg'
							alt='صورة المحل'
							width={300}
							height={300}
							className='object-cover rounded-lg'
						/>
					</div>
					<p className='max-w-4xl mx-auto leading-loose text-lg'>
						في <span className='font-bold'>Magdi Fashion</span> نؤمن أن الأناقة
						هي أسلوب حياة، لذلك نحرص على تقديم أفضل تشكيلات الملابس العصرية
						للرجال والنساء بجودة عالية وأسعار مناسبة. هدفنا هو أن يجد كل عميل
						إطلالة تعكس شخصيته وتزيد من ثقته بنفسه، مع التزامنا بتجربة تسوق
						ممتعة ومميزة.
					</p>
				</section>

				{/* Section: Vision, Goals, Sustainability */}
				<section className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-4 md:px-16 lg:px-20'>
					{[
						{
							icon: (
								<FaTshirt
									size={40}
									className='text-PrimaryTextColors mx-auto mb-4'
								/>
							),
							title: 'رؤيتنا',
							desc: 'أن نصبح الوجهة الأولى لعشاق الموضة في المنطقة من خلال توفير ملابس تناسب جميع الأذواق والفئات العمرية.',
						},
						{
							icon: (
								<FaShoppingBag
									size={40}
									className='text-PrimaryTextColors mx-auto mb-4'
								/>
							),
							title: 'أهدافنا',
							desc: 'تقديم تجربة تسوق متكاملة، تجمع بين الجودة العالية، التصميم العصري، والخدمة المتميزة.',
						},
						{
							icon: (
								<FaLeaf
									size={40}
									className='text-PrimaryTextColors mx-auto mb-4'
								/>
							),
							title: 'الاستدامة',
							desc: 'نلتزم باستخدام خامات صديقة للبيئة والعمل مع موردين يهتمون بالمسؤولية الاجتماعية والبيئية.',
						},
					].map((item, idx) => (
						<div
							key={idx}
							className='p-6 border rounded-xl shadow hover:shadow-lg transition duration-300'>
							{item.icon}
							<h3 className='text-xl font-semibold text-PrimaryTextColors mb-2'>
								{item.title}
							</h3>
							<p className='text-sm leading-relaxed'>{item.desc}</p>
						</div>
					))}
				</section>

				{/* Section: Stats */}
				<section className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-4 md:px-16 lg:px-20'>
					{[
						{
							image: '/image/shop1.jpg',
							title: '+500',
							desc: 'قطعة ملابس متنوعة في مجموعتنا',
						},
						{
							image: '/image/shop4.jpg',
							title: '+20',
							desc: 'موظف لخدمتك بأفضل صورة',
						},
						{
							image: '/image/shop2.jpg',
							title: '10 سنوات',
							desc: 'خبرة في مجال الأزياء والموضة',
						},
					].map((stat, idx) => (
						<div
							key={idx}
							className='flex flex-col items-center space-y-4'>
							<Image
								src={stat.image}
								alt={stat.title}
								width={100}
								height={100}
								className='h-28 w-28 object-cover rounded-full'
							/>
							<h3 className='text-2xl font-bold text-PrimaryTextColors'>
								{stat.title}
							</h3>
							<p>{stat.desc}</p>
						</div>
					))}
				</section>
			</div>
		</div>
	);
};

export default AboutPage;
