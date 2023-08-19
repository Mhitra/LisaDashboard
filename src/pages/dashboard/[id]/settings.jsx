import { DashboardLayout } from '@/components/layouts/dashboard';
import { fetchChannels } from '@/utils/api';

const Settingspage = ({ channels }) => {
	return (
		<div className="page">
			Settings Page
			<div>
				{channels.map((channel, index) => (
					<div key={channel.id}>
						{index + 1} {channel.name}
					</div>
				))}
			</div>
		</div>
	);
};

Settingspage.getLayout = function (page) {
	return <DashboardLayout>{page}</DashboardLayout>;
};

export async function getServerSideProps(ctx) {
	const channels = await fetchChannels(ctx);
	return { props: { channels } };
}

export default Settingspage;
