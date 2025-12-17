import { integer, numeric, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { users } from "./users.js";

export const invoices = pgTable('invoices', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id, { onDelete: 'cascade' }),
    invoiceNumber: varchar('invoice_number', { length: 50 }).notNull(),
    invoiceDate: timestamp('invoice_date').defaultNow().notNull(),
    status: varchar('status', { length: 20 }).default('draft').notNull(),
    clientName: text('client_name').notNull(),
    clientEmail: text('client_email'),
    currency: varchar('currency', { length: 3 }).default('USD'),
    subTotal: numeric('sub_total').default('0'),
    taxAmount: numeric('tax_amount').default('0'),
    discountAmount: numeric('discount_amount').default('0'),
    total: numeric('total').default('0'),
    notes: text('notes'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
}) 