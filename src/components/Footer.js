import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
	return (
		<div className="w-full flex justify-center bg-aw-dark p-4 text-white">
			<footer className="px-24 w-full py-4">
				<div className="rounded-lg md:py-4">
					<div className="col-span-4 text-center flex flex-col lg:flex-row justify-between items-center pt-6 border-t border-zinc-500/40 mt-6">
						<p className="text-zinc-300 font-normal">© 2023 All rights reserved.</p>
						<div className="container cursor-pointer flex items-center justify-center h-16 w-auto">
							<Link href="/">
								<Image
									src="https://media.discordapp.net/attachments/1004097884884574339/1136046630060171415/shintaro-kisaragi-ayano-tateyama_1.gif"
									alt="banner"
									width={100}
									height={100}
								/>
							</Link>
						</div>
						<p className="text-zinc-400 font-normal">
							Powered with{' '}
							<span className="text-red-500">
								<i className="fa-solid ml-1 mr-1 text-pink-600 fa-heart"></i>
							</span>{' '}
							by{' '}
							<Link
								href="https://xxxxx.vercel.app/"
								className="text-primary font-bold"
							>
								Bot Dashboard
							</Link>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
