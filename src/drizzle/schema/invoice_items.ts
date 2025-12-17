import { integer, numeric, pgTable, serial, text } from "drizzle-orm/pg-core";
import { invoices } from "./invoices";


export const invoice_items = pgTable('invoice_items', {
    id: serial('id').primaryKey(),
    invoiceId: integer('invoice_id').references(() => invoices.id, { onDelete: "cascade" }),
    description: text("description").notNull(),
    quantity: numeric('quantity').default('1').notNull(),
    unitPrice: numeric('unit_price').default('0'),
    taxPercentage: numeric('tax_percentage').default('0'),
    discountPercentage: numeric('discount_percentage').default('0'),
    lineTotal: numeric('line_total').default('0')
})