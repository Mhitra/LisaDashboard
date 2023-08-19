import { Sidebar } from '@/components/misc/Sidebar';
import { Appbar } from '@/components/misc/Appbar';
import { GuildContext } from '@/utils/contexts/GuildContext';
import { useContext } from 'react';
export function DashboardLayout({ children }) {
	const { guild } = useContext(GuildContext);
	return (
		<>
			<Sidebar guild={guild} />
			<div className="h-screen px-2 ml-8">
				<Appbar guild={guild} />
				<div className="h-full px-5 py-4 ml-8">{children}</div>
			</div>
		</>
	);
}
