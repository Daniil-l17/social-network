'use client';
import { FaUserFriends } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import Link from 'next/link';
import { BiNews } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { Skeleton } from '@nextui-org/react';

export const menuLeft = [
	{ title: 'Посты', link: '', icon: <BiNews className=' text-[22px]' /> },
	{ title: 'Подписки', link: '', icon: <FaUserFriends className=' text-[22px]' /> },
	{ title: 'Подписчики', link: '', icon: <MdGroups className=' text-[22px]' /> }
];

export const Menu = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
	}, []);
	return (
		<div className='w-[200px] sticky top-[108px] flex flex-col gap-8 h-[300px] '>
			{loading
				? [...Array(4)].map(() => {
						return <Skeleton className='rounded-lg px-3 !bg-[#333] w-[190px] h-[50px] py-1' />;
				})
				: menuLeft.map((item, index) => {
						return (
							<Link
								key={index}
								className={`flex gap-4 ${
									item.title === 'Посты' ? 'bg-[#262626]' : 'hover:bg-[#2e2e2e]'
								} hover:scale-105 transition-all duration-400 rounded-lg px-3 w-[190px] h-[50px] py-1 items-center`}
								href={item.link}
							>
								{item.icon}
								<h2 className=' text-lg font-semibold'>{item.title}</h2>
							</Link>
						);
				  })}
		</div>
	);
};
