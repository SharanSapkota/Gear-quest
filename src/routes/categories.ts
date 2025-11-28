import { Router } from 'express';
import * as catCtrl from '../controllers/categoryController';
import { authenticate } from '../middleware/auth';

const router = Router();

router.get('/', catCtrl.list);
router.post('/', authenticate, catCtrl.create);

export default router;
