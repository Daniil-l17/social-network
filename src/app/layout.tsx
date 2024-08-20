import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.scss';
import { NextUIProvider } from '@nextui-org/react';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { ProfileMenu } from '@/components/ProfileMenu';

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
				<NextUIProvider>
					<div className='min-h-[100vh] px-4 w-full m-auto max-w-[1450px] py-2'>
						<Header />
            <div className=' mt-7'>
						{children}
            </div>
					</div>
				</NextUIProvider>
			</body>
		</html>
	);
}
