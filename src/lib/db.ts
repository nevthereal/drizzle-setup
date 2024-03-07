import 'dotenv/config';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

export const client = createClient({
	url: process.env.VITE_DB_URL!,
	authToken: process.env.VITE_DB_TOKEN
});

export const db = drizzle(client, { schema });
