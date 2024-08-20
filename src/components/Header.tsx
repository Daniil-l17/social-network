'use client';
import { Button, Skeleton, useDisclosure } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ModalAuth = dynamic(() => import('./ModalAuth'), {
	loading: () => (
		<div className='fixed flex justify-center items-center top-0 left-0 right-0 bottom-0'>
			<p>loading....</p>
		</div>
	)
});

export const Header = () => {
	const [loading, setLoading] = useState(true);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<header className='flex sticky top-[16px] bg-[#121212] justify-between py-4'>
			{!isOpen ? null : <ModalAuth isOpen={isOpen} onOpenChange={onOpenChange} />}
			<div className='flex gap-6 items-center'>
				<Image alt='logo' src={'/Square button (1).png'} width={40} height={40} className='w-[40px] pointer-events-none h-[40px]' />
				<h1 className=' text-2xl select-none font-medium'>Network Social</h1>
			</div>
			<div>
				{loading ? (
					<Skeleton className='flex rounded-lg w-[80px] h-[40px]' />
				) : (
					<Button onClick={onOpen} radius='sm' color='primary'>
						Войти
					</Button>
				)}
			</div>
		</header>
	);
};
