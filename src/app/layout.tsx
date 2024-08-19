import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.scss';
import { NextUIProvider } from '@nextui-org/react';

const inter = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Social Network',
	icons: {
		icon: '/Square button (1).png'
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru' className='dark'>
			<body className={inter.className}>
				<NextUIProvider>{children}</NextUIProvider>
			</body>
		</html>
	);
}
