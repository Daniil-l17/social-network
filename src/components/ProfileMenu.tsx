'use client';
import { Card, Skeleton } from '@nextui-org/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const ProfileMenu = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<>
			{loading ? (
				<Card className='w-[280px] h-[390px] space-y-5 p-4' radius='lg'>
					<Skeleton className='rounded-lg'>
						<div className='h-[280px] rounded-lg bg-default-300'></div>
					</Skeleton>
					<div className='space-y-3'>
						<Skeleton className='w-3/5 rounded-lg'>
							<div className='h-3 w-3/5 rounded-lg bg-default-200'></div>
						</Skeleton>
						<Skeleton className='w-4/5 rounded-lg'>
							<div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
						</Skeleton>
						<Skeleton className='w-2/5 rounded-lg'>
							<div className='h-3 w-2/5 rounded-lg bg-default-300'></div>
						</Skeleton>
					</div>
				</Card>
			) : (
				<div className='w-[280px] sticky top-[108px] flex flex-col items-center h-[390px] rounded-xl py-5 px-4 bg-[#262626]'>
					<div className='w-[240px] h-[280px]'>
						<Image priority className='cursor-pointer pointer-events-none rounded-xl w-[240px] h-[280px]' alt='' src={'/photo_2024-06-07_20-02-48.jpg'} width={240} height={280} />
						{/*<Image width={240} height={280} className='w-[240px] h-[280px]  cursor-pointer rounded-xl' alt='' src='/photo_2024-06-07_20-02-48.jpg' />*/}
					</div>
					<div className='flex px-2 flex-col gap-1 w-full mt-3 items-start'>
						<h2 className=' text-lg font-medium'>Даниил Лукьянов</h2>
						<span className=' text-[#919191] font-medium'>mlumed221@gmail.com</span>
					</div>
				</div>
			)}
		</>
	);
};
