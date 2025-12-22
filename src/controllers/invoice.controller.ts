import { Request, Response } from "express";
import { getAllInvoices, getInvoiceById } from "../services/invoice.service";

export const getAll = async (req: Request, res: Response) => {
    try {
        const invoices = await getAllInvoices();
        res.status(200).json(invoices);
    } catch (error: any) {
        res.status(500).json({ message: 'Failed to Fetch invoices', error: error.message });
    }
};

export const getById = async (req: Request, res: Response) => {
    try {
        const  id  = Number(req.params.id)
        const invoice = await getInvoiceById(id);
        if (!invoice) {
            return res.status(404).json({message:'Invoice not found'})
        }
        res.status(200).json(invoice);
    } catch (error: any) {
        res.status(500).json({ message: 'Failed to Fetch individual Id', error: error.message });
    }
}; 