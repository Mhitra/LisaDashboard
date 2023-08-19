import Image from 'next/image';
import { FaDiscord } from 'react-icons/fa';

export default function Home() {
	return (
		<main>
			<div className="container items-center">
				<div className="flex items-center py-36 space-x-12">
					<Image
						className="rounded-full"
						src={'https://media.discordapp.net/attachments/1004097884884574339/1136046630060171415/shintaro-kisaragi-ayano-tateyama_1.gif'}
						alt="hi"
						width={300}
						height={150}
					/>
					<div className="space-y-4">
						<h1 className="text-3xl font-montserrat">Multi-Purpose Discord Bot</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
							explicabo culpa voluptates, voluptate esse quod, exercitationem numquam
							ducimus minus facilis voluptas suscipit rem eos quos maiores. Earum
							porro fuga, aliquam maiores quis aspernatur magni iure quas saepe sit
							perferendis, vitae quasi itaque temporibus odit velit, magnam tempora
							quia? Fugit, error voluptates reiciendis eaque autem illo distinctio
							atque harum. Ipsam natus necessitatibus maiores velit aut possimus
							beatae vitae labore ratione illum! Nostrum, commodi libero cupiditate
							ipsum dolorum temporibus, aspernatur fugiat rem deserunt dignissimos
							placeat doloribus error modi pariatur laborum? Eum, reiciendis ex
							molestiae amet magni tempora quod consequatur quas temporibus error
							voluptatibus architecto sed incidunt praesentium officia, aspernatur
							esse culpa commodi deserunt eligendi delectus ullam? Dolorum quis
							exercitationem tempore debitis ratione?					
						</p>
						<button className="bg-blue-600 text-white relative top-8 py-4 px-8 rounded-md hover:bg-blue-500 transform duration-150">
							<div className="flex justify-center">
								<span className="relative -left-3">
									<FaDiscord size={25} />
								</span>
								<span className="relative -right-2">Add to Discord</span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
