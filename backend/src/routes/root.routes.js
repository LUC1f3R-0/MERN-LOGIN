import express from 'express'
import { validate } from '../middleware/validate.middleware.js';
import { register } from '../controller/user.controller.js';

const router = express.Router();

router.get('/', (request, response) => { response.json({ success: true }) })
router.post('/register', validate, register)

export default router