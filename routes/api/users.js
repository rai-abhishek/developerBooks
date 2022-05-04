import { Router } from 'express';
const router = Router();

//@route    GET api/users/test
//@desc     tests users route
//access    Public
router.get('/test', (req, res) => res.json({ msg: 'user screen works' }));

export default router;
