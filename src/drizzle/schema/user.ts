import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";


export const users = pgTable("users", {
    id: serial('id').primaryKey(),
    email: varchar({ length: 255 }).notNull().unique(),
    passwordHash: text('password_hash').notNull(),
    name: text('name'),
    businessName: text('business_name'),
    businessAddress: text('business_address'),
    defaultCurrency: varchar('default_currency', { length: 3 }).default('USD'),
    logoUrl: text('logo_url'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
})