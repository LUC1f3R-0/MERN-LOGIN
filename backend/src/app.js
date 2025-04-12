import express from 'express'
import cors from 'cors'
import router from './routes/root.routes.js';
const app = express()

const host = process.env.FRONTEND_HOST
const port = process.env.FRONTEND_PORT

app.use(cors({ origin: `http://${host}:${port}`, credentials: true }));

app.use('/', router)

export default app