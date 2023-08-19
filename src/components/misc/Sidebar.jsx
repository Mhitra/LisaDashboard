import Image from 'next/image';
import { MdSpaceDashboard } from 'react-icons/md';
import { BsTerminal } from 'react-icons/bs';
import { FaWrench } from 'react-icons/fa';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { getIcon } from '@/utils/helpers';

const routes = [
	{
		name: 'dashboard',
		icon: <MdSpaceDashboard size={36} />,
		getPath: id => `/dashboard/${id}`,
	},
	{
		name: 'commands',
		icon: <BsTerminal size={36} />,
		getPath: id => `/dashboard/${id}/commands`,
	},
	{
		name: 'settings',
		icon: <FaWrench size={36} />,
		getPath: id => `/dashboard/${id}/settings`,
	},
];

export const Sidebar = ({ guild }) => {
	const router = useRouter();
	return (
		<div className="fixed top-0 left-0 bg-gray-900 h-full p-3 flex flex-col items-center justify-between">
			<Image
				className="rounded-full"
				src={getIcon(guild)}
				height={36}
				width={36}
				alt="guild_avatar"
			/>
			<div className="flex flex-col items-center space-y-12">
				{routes.map(route => (
					<div
						key={route.name}
						onClick={() => router.push(route.getPath(router.query?.id.toString()))}
					>
						{route.icon}
					</div>
				))}
			</div>
			<div>
				<RiLogoutCircleLine size={36} />
			</div>
		</div>
	);
};
