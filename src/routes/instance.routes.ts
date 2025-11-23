
import { Router } from 'express';
import { createInstance } from '../controllers/instance.controller';

const router = Router();

router.post('/create', createInstance);

export default router;
