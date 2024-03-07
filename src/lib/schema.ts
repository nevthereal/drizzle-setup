import { sqliteTable, int, text } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

export const usersTable = sqliteTable('users', {
	id: int('id').primaryKey(),
	username: text('username'),
	admin: int('admin', { mode: 'boolean' }),
	tier: text('tier', { enum: ['Beginner', 'Scaler', 'Pro'] }).default('Beginner')
});

export const usersRelation = relations(usersTable, ({ many }) => ({
	posts: many(postsTable)
}));

export const postsTable = sqliteTable('posts', {
	id: int('id').primaryKey(),
	authorId: int('authorId')
		.notNull()
		.references(() => usersTable.id),
	body: text('body'),
	title: text('title').notNull()
});

export const postsRelation = relations(postsTable, ({ one }) => ({
	author: one(usersTable, {
		fields: [postsTable.authorId],
		references: [usersTable.id]
	})
}));

export const newTable = sqliteTable('new', {
	id: int('id').primaryKey(),
	name: text('lol')
});
