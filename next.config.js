/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'images.unsplash.com',
			'res.cloudinary.com',
			`cdn.discordapp.com`,
			'media.discordapp.net',
			'w7.pngwing.com',
		],
	},
};

module.exports = nextConfig;
