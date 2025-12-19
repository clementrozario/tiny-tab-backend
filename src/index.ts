import 'dotenv/config'
import express from 'express'
import { db } from './db';
import { users } from './drizzle/schema';
import invoiceRouter from './routes/invoice.routes'


const app = express();
const port = 3000;

app.use('/invoices', invoiceRouter);

async function startServer() {
    try {
        await db.select().from(users).limit(1);
        console.log('database connected successfully');
        app.listen(port, () => {
            console.log(`server is running on port: ${port}`)
        })
    } catch (err) {
        console.log('error connecting to databse', err);
        process.exit(1)
    }
}

startServer();