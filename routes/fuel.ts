import { Router } from 'express';

import { getFuelList } from '../controllers';

const router = Router();

/**
 * Get the list of fuel types available
 */
router.get('/list', getFuelList);

export default router;
