CREATE TABLE `new` (
	`id` integer PRIMARY KEY NOT NULL,
	`lol` text
);
--> statement-breakpoint
CREATE TABLE `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`authorId` integer NOT NULL,
	`body` text,
	`title` text NOT NULL,
	FOREIGN KEY (`authorId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`username` text,
	`admin` integer,
	`tier` text DEFAULT 'Beginner'
);
