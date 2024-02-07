import { db } from '$lib/db';
import { asc } from 'drizzle-orm';
import type { Actions, PageServerLoad } from './$types';
import { usersTable } from '$lib/schema';

export const load: PageServerLoad = async () => {
	const users = await db.query.usersTable.findMany({
		orderBy: [asc(usersTable.id)]
	});

	return { users };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const username = String(data.get('username'));
		const admin = Boolean(data.get('admin'));

		await db.insert(usersTable).values({
			username,
			admin
		});
	}
};
