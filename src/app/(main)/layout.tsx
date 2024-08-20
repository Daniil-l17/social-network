import { Menu } from '@/components/Menu';
import { ProfileMenu } from '@/components/ProfileMenu';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='w-full flex gap-4'>
			<Menu />
			<div className=' min-h-[200vh] flex-1'>{children}</div>
			<ProfileMenu />
		</div>
	);
};

export default layout;
