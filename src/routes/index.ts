
import { Router } from 'express';
import instanceRoutes from './instance.routes';
import messageRoutes from './message.routes';

export const router = Router();

router.use('/instance', instanceRoutes);
router.use('/message', messageRoutes);

router.get('/', (req, res) => res.json({ status: 'Evolution API OK' }));
