export const validateCookies = ctx => {
	const sessionID = ctx.req.cookies['connect.sid'];
	return sessionID
		? {
				Cookie: `connect.sid=${sessionID}`,
		  }
		: false;
};

export const getIcon = guild => {
	return !guild || !guild.icon
		? 'https://cdn.discordapp.com/avatars/389709853511122944/4dc0f2773a1b4708cc69012b8d8369d4.png?size=1024'
		: `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`;
};

export const getAvatar = user => {
	if (!user?.avatar) return 'https://cdn.discordapp.com/embed/avatars/0.png';

	return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}?size=1024&quality=lossless`;
	// return (await axios.head(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`))
	// 	.headers['content-type'] === 'image/gif'
	// 	? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.gif?size=1024&quality=lossless`
	// 	: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024&quality=lossless`;
};
