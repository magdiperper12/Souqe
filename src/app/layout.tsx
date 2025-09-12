import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Metadata } from 'next';
import BackToTopButton from '../components/theme/BackToTopButton';
import { PurchaseProvider } from './context/PurchaseContext';

const roboto = Roboto({ subsets: ['latin'], weight: '700' });

export const metadata: Metadata = {
	metadataBase: new URL('https://souqexample.com'),
	title: 'Souq Market | أفضل تسوق عبر الإنترنت',
	description:
		'Souq Market - اكتشف أفضل المنتجات بأسعار تنافسية، من الإلكترونيات، الملابس، مستلزمات المنزل، وأكثر. التسوق السهل والآمن مع توصيل سريع لجميع المدن.',
	openGraph: {
		title: 'Souq Market | أفضل تسوق عبر الإنترنت',
		description:
			'تسوق من Souq Market واستمتع بمجموعة واسعة من المنتجات: إلكترونيات، ملابس، مستلزمات المنزل، هدايا، وأكثر. عروض يومية وأسعار تنافسية.',
		type: 'website',
		locale: 'ar_EG',
		url: 'https://souqexample.com/',
		images: [
			{
				url: 'https://souqexample.com/favicon.png',
				alt: 'Souq Market - أفضل تسوق عبر الإنترنت',
				width: 800,
				height: 600,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Souq Market | أفضل تسوق عبر الإنترنت',
		description:
			'Souq Market يوفر لك تجربة تسوق مميزة: منتجات عالية الجودة، عروض رائعة، وخدمة عملاء ممتازة. توصيل سريع وآمن لجميع المدن.',
		images: ['/favicon.png'],
	},
	icons: {
		icon: '/favicon.png',
		shortcut: '/favicon.ico',
		apple: '/favicon.png',
		other: {
			rel: 'manifest',
			url: '/manifest.json',
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='fr'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					name='author'
					content='Souq Market'
				/>
				<meta
					name='robots'
					content='index, follow'
				/>
				<meta
					name='application-name'
					content='Souq Market | أفضل تسوق عبر الإنترنت'
				/>
				<meta
					name='image'
					content='https://souqexample.com/favicon.png'
				/>
				<link
					rel='canonical'
					href='https://souqexample.com/'
				/>

				{/* Favicon */}
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon.png'
				/>
				<link
					rel='shortcut icon'
					href='/favicon.ico'
					type='image/x-icon'
				/>
				<link
					rel='manifest'
					href='/manifest.json'
				/>

				{/* Structured Data */}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify([
							{
								'@context': 'https://schema.org',
								'@type': 'Organization',
								name: 'Souq Market',
								url: 'https://souqexample.com/',
								logo: 'https://souqexample.com/favicon.png',
								sameAs: [
									'https://www.facebook.com/souqmarket',
									'https://www.instagram.com/souqmarket',
								],
								description:
									'Souq Market هو السوق الإلكتروني الرائد للتسوق عبر الإنترنت، يقدم منتجات متنوعة بأسعار تنافسية مع خدمة عملاء ممتازة.',
								address: {
									'@type': 'PostalAddress',
									addressLocality: 'القاهرة',
									addressRegion: 'مصر',
									addressCountry: 'EG',
								},
								contactPoint: {
									'@type': 'ContactPoint',
									telephone: '+20-100-000-0000',
									contactType: 'خدمة العملاء',
									areaServed: 'EG',
									availableLanguage: ['ar', 'en', 'fr'],
								},
							},
							{
								'@context': 'https://schema.org',
								'@type': 'WebSite',
								url: 'https://souqexample.com/',
								name: 'Souq Market',
								potentialAction: {
									'@type': 'SearchAction',
									target: 'https://souqexample.com/?s={search_term_string}',
									'query-input': 'required name=search_term_string',
								},
							},
							{
								'@context': 'https://schema.org',
								'@type': 'ImageObject',
								contentUrl: 'https://souqexample.com/favicon.png',
								url: 'https://souqexample.com/favicon.png',
								width: 800,
								height: 600,
								name: 'شعار Souq Market',
							},
						]),
					}}
				/>
			</head>

			<body
				className={`bg-gradient-to-r relative ${roboto.className} text-darkprimary dark:text-primary custom-scroll overflow-x-hidden bg-primary dark:bg-darkprimary`}>
				<PurchaseProvider>
					<div className='fixed top-0 z-50'>
						<Header />
					</div>
					{children}
					<Footer />
					<BackToTopButton />
				</PurchaseProvider>
			</body>
		</html>
	);
}
