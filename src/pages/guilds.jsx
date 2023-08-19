import { fetchMutualGuilds } from '@/utils/api.js';
import Image from 'next/image';
import { getIcon } from '@/utils/helpers';

const MenuPage = ({ guilds }) => {
	const isSingleGuild = guilds.length === 1;

	const navigateToDashboard = guildId => {
		window.location.href = `/dashboard/${guildId}`;
	};

	return (
		<div className="container">
			<h1 className="flex justify-center text-3xl font-bold text-white">Select a server</h1>
			<div
				className={
					isSingleGuild
						? 'flex justify-center bg-opacity-80 backdrop-blur-sm p-8 rounded-lg'
						: 'flex justify-center bg-opacity-80 backdrop-blur-sm p-8 rounded-lg'
				}
			>
				<div className="flex flex-wrap justify-center gap-4">
					{guilds.map(guild => (
						<div className="guild-container w-[30%]" key={guild.id}>
							<div
								className={`${
									guild.owner ? 'bg-red-400' : 'bg-neutral-900'
								} rounded-md w-20 h-8 flex items-center justify-center shadow-white shadow`}
							>
								<h3 className="font-semibold">
									{guild.owner ? 'Owner' : 'Manager'}
								</h3>
							</div>
							<div className="guild relative p-4 cursor-default bg-zinc-900 rounded-lg shadow-sm flex items-center hover:shadow-white transition duration-150">
								<div className="h-[70px] w-[70px] rounded-full relative justify-center items-center">
									<Image
										src={getIcon(guild)}
										height={64}
										width={64}
										className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-10"
										alt={guild.name}
									/>
									<Image
										src={getIcon(guild)}
										height={70}
										width={70}
										className="absolute inset-0 filter blur-sm rounded-full"
										alt={guild.name}
									/>
								</div>

								<div className="info-container ml-4">
									<h3 className="text-2xl font-semibold truncate w-[12rem]">
										{guild.name}
									</h3>
									<p className="text-gray-300">
										{guild.approximate_member_count} Members
									</p>
								</div>

								<div className="flex place-items-center">
									<button
										className="absolute py-2 px-6 bg-zinc-700 rounded-md right-5 font-semibold hover:bg-white hover:text-black transition duration-150"
										onClick={() => navigateToDashboard(guild.id)}
									>
										Manage
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export async function getServerSideProps(context) {
	return await fetchMutualGuilds(context);
}

export default MenuPage;
