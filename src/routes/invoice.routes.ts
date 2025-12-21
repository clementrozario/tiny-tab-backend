import { Router } from 'express';
import { getAll } from '../controllers/invoice.controller';

const router = Router()

router.get('/', getAll)

export default router

