CREATE TABLE `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`authorId` integer NOT NULL,
	`body` integer,
	FOREIGN KEY (`authorId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
