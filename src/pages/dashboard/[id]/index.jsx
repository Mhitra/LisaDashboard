import { DashboardLayout } from '@/components/layouts/dashboard';
import { fetchGuild } from '@/utils/api';
import { GuildContext } from '@/utils/contexts/GuildContext';
import { useContext, useEffect } from 'react';

const Dashboardpage = ({ guild }) => {
	const { setGuild } = useContext(GuildContext);

	useEffect(() => {
		setGuild(guild);
	}, []);

	return (
		<div className="page">
			Dashboard Page
			<p>{guild.name}</p>
		</div>
	);
};

Dashboardpage.getLayout = function (page) {
	return <DashboardLayout>{page}</DashboardLayout>;
};

export async function getServerSideProps(ctx) {
	return await fetchGuild(ctx);
}

export default Dashboardpage;
