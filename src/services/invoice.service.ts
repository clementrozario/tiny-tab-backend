import { db } from "../db";
import { invoices, invoice_items } from "../drizzle/schema";
import { eq } from "drizzle-orm";

export async function getAllInvoices() {
    
    const rows = await db
        .select()
        .from(invoices)
        .leftJoin(invoice_items, eq(invoices.id, invoice_items.invoiceId));
    
    const nestedInvoices = rows.reduce((acc, row) => {
        const invoice = row.invoices;
        const item = row.invoice_items;

        let existingInvoice = acc.find((inv: any) => inv.id === invoice.id);

        if (!existingInvoice) {
            existingInvoice = {
                ...invoice,
                items: [],
            };
            acc.push(existingInvoice)
        }
        if (item) {
            existingInvoice.items.push(item);
        }
        return acc;
    }, [] as any[])
    return nestedInvoices;
}

export async function getInvoiceById(id:number) {
    const rows = await db
        .select()
        .from(invoices)
        .leftJoin(invoice_items, eq(invoices.id, invoice_items.invoiceId))
        .where(eq(invoices.id,id))
    
    const nestedInvoices = rows.reduce((acc, row) => {
        const invoice = row.invoices;
        const item = row.invoice_items;

        let existingInvoice = acc.find((inv: any) => inv.id === invoice.id)
        
        if (!existingInvoice) {
            existingInvoice = {
                ...invoice,
                items:[],
            }
            acc.push(existingInvoice)
        }
        if (item) {
            existingInvoice.items.push(item);
        }
        return acc;
    }, [] as any[])
    return nestedInvoices[0] ?? null
}