import { Router } from 'express';
const router = Router();

router.get('/test', (req, res) => res.json({ msg: 'profile screen works' }));

export default router;