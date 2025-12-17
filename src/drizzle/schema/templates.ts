import { integer, jsonb, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";

export const templates = pgTable('templates', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id, { onDelete: "cascade" }),
    name: text('name').notNull(),
    data: jsonb('data').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
})

