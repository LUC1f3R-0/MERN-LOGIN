import express from 'express'
import { router } from '../routes/root.routes.js';

const app = express();
app.use('/', router)

export { app }