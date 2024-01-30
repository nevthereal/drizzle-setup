import { sqliteTable, int, text } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {
	id: int('id').primaryKey(),
	username: text('username'),
	admin: int('admin', { mode: 'boolean' })
});
