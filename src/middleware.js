import { fetchValidGuild } from '@/utils/api.js';
import { NextResponse } from 'next/server';

const matchDashboardPattern = pathname => {
	const parts = pathname.split('/').filter(Boolean);
	if (parts.length === 2 && parts[0] === 'dashboard') {
		return { id: parts[1] };
	}
	return null;
};

export async function middleware(req) {
	const headers = new Headers(req.headers);
	if (!headers) {
		return NextResponse.redirect('http://localhost:3000/guilds');
	}

	headers['Content-Type'] = 'application/json';
	const pathname = req.nextUrl.pathname || {};
	if (!pathname) {
		console.log(pathname ? 'pathname' : 'no pathname');
		return NextResponse.redirect('http://localhost:3000/guilds');
	}
	let id;
	const match = matchDashboardPattern(pathname);
	if (match) {
		id = match.id;
	} else {
		id = pathname.split('/').filter(Boolean)[1];
	}

	if (!id) {
		return NextResponse.redirect('http://localhost:3000/guilds');
	}
	const guild = await fetchValidGuild(id, headers);

	if (!guild) {
		return NextResponse.redirect('http://localhost:3000/guilds');
	}

	return guild.status === 200
		? NextResponse.next()
		: NextResponse.redirect('http://localhost:3000/guilds');
}

export const config = {
	matcher: '/dashboard/:path*',
};
