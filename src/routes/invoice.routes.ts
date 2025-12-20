import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: "Invoice route working!", invoices: [] });
})

export default router

/* TODO: need to Replace dummy data with real Neon DB query
  const result = await db.query.invoices.findMany({
    with: { items: true }
  });
*/