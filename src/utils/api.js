import axios from 'axios';
import { validateCookies } from './helpers.js';

const API_URL = 'http://localhost:3001/api';

export const fetchMutualGuilds = async context => {
	const headers = validateCookies(context);
	if (!headers) return { redirect: { destination: '/' } };
	try {
		const { data: guilds } = await axios.get(`${API_URL}/guilds`, {
			headers,
		});
		return { props: { guilds } };
	} catch (err) {
		console.log(err);
		return { redirect: { destination: '/' } };
	}
};

export const fetchGuild = async ctx => {
	const headers = validateCookies(ctx);
	if (!headers) return { redirect: { destination: '/' } };
	try {
		const { data: guild } = await axios.get(`${API_URL}/guilds/${ctx.query.id}`, {
			headers,
		});
		return { props: { guild } };
	} catch (err) {
		console.log(err);
		return { redirect: { destination: '/' } };
	}
};

export const fetchValidGuild = async (id, headers) => {
	return await fetch(`${API_URL}/guilds/${id}/permissions`, {
		headers,
	});
};

export const fetchChannels = async ctx => {
	const headers = validateCookies(ctx);
	const id = ctx.query.id;
	if (!headers) return { redirect: { destination: '/' } };
	const { data: channels } = await axios.get(`${API_URL}/guilds/${id}/channels`, { headers });
	return channels;
};

export const fetchUser = async ctx => {
	const headers = validateCookies(ctx);
	let { id } = getId({ path: ctx.resolvedUrl, cat: 'users' });
	const { data: user } = await axios.get(`${API_URL}/users/${id}`, headers ? { headers } : {});
	return user;
};

const getId = ({ path, cat }) => {
	const parts = path.split('/').filter(Boolean);
	if (parts.length === 2 && parts[0] === cat) return { id: parts[1] };
	return { id: null };
};
