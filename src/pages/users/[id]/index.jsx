import { UserLayout } from '@/components/layouts/users';
import { fetchUser } from '@/utils/api';
import { getAvatar } from '@/utils/helpers';
import Image from 'next/image';
import React from 'react';

let owners = ['389709853511122944'];
let developers = ['389709853511122944'];
let premium = ['389709853511122944', '354224636138881024', '384062124655378472'];
let membership = ['389709853511122944', '354224636138881024', '384062124655378472'];
const userPage = ({ user }) => {
	const backToHome = () => (window.location.href = '/');
	const avatar = getAvatar(user);

	return (
		<div className="flex">
			<div
				onClick={() => backToHome()}
				className="bg-neutral-800 rounded-md border-[0.5px] cursor-pointer border-white w-[5rem] h-[2rem] flex flex-wrap items-center justify-center relative top-10 left-10 shadow hover:shadow-white hover:text-black hover:bg-white transition duration-150"
			>
				<button className="font-montserrat font-normal">Back</button>
			</div>
			<div className="container">
				<div className="flex flex-wrap items-center justify-center min-h-screen space-x-8 m-auto">
					<div className="avatar h-[140px] w-[140px] rounded-full relative justify-center items-center my-auto">
						<Image
							src={avatar}
							height={128}
							width={128}
							className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-10"
							alt={`${user.username}'s avatar`}
						/>
						<Image
							src={avatar}
							height={140}
							width={140}
							className="absolute inset-0 filter blur-sm rounded-full"
							alt={`${user.username}'s avatar`}
						/>
					</div>

					<div className="space-y-4 cursor-default">
						<div className="flex items-center space-x-4 mx-auto">
							<h3 className="font-montserrat font-bold text-5xl text-white">
								{user.global_name ?? 'Dummy'}
							</h3>
							<h3 className="font-montserrat font-light text-3xl text-white">
								(@{user.username ?? 'dummy'})
							</h3>
						</div>
						<div className="tags w-fit flex flex-wrap items-center justify-center space-x-[8px] bg-zinc-800 rounded-md mx-auto">
							{!owners.includes(user.id) || (
								<div
									className={`ownerTag w-[40px] h-[40px] rounded-lg flex flex-wrap items-center justify-center`}
								>
									<Image
										src={'/crown.png'}
										height={50}
										width={50}
										alt="owner_icon"
										className="text-white bg-transparent text-xl"
									/>
								</div>
							)}
							{!developers.includes(user.id) || (
								<div
									className={`devTag w-[40px] h-[40px] rounded-lg flex flex-wrap items-center justify-center`}
								>
									<Image
										src={'/dev_icon.png'}
										height={25}
										width={25}
										alt="dev_icon"
										className="text-white bg-transparent"
									/>
								</div>
							)}
							{!premium.includes(user.id) || (
								<div
									className={`premiumTag w-[40px] h-[40px] rounded-lg flex flex-wrap items-center justify-center`}
								>
									<Image
										src={'/premium.png'}
										height={30}
										width={30}
										alt="pre_icon"
										className="text-white bg-transparent"
									/>
								</div>
							)}
							{!membership.includes(user.id) || (
								<div
									className={`memberTag w-[40px] h-[40px] rounded-lg flex flex-wrap items-center justify-center`}
								>
									<Image
										src={'/member.png'}
										height={50}
										width={50}
										alt="member_icon"
										className="text-white bg-transparent"
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

userPage.getLayout = page => {
	return <UserLayout>{page}</UserLayout>;
};

export const getServerSideProps = async ctx => {
	const user = await fetchUser(ctx);
	return { props: { user } };
};

export default userPage;
