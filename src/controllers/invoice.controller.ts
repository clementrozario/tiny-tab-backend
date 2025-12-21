import { Request, Response } from "express";
import { getAllInvoices } from "../services/invoice.service";

export const getAll = async (req: Request, res: Response) => {
    try {
        const invoices = await getAllInvoices();
        res.status(200).json(invoices);
    } catch (error: any) {
        res.status(500).json({ message: 'Failed to Fetch invoices', error: error.message });
    }
};

