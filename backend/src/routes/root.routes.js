import express from 'express'

const router = express.Router();

router.get('/', (request, response) => { response.json({ success: true }) })

export default router