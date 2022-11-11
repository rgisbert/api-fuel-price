import { Router } from 'express';
import { check } from 'express-validator';

import { getFuelList, getFuelPriceList } from '../controllers';
import { existsIdFuel, isValidZIP, validateFields } from '../middlewares';

const router = Router();

/**
 * Get the list of fuel types available
 */
router.get('/list', getFuelList);

/**
 * Get the list of prices for a fuel type in a zip code.
 * Sorted by price
 * @param { string } idFuel - Id of the fuel type
 * @param { string } zip - zip code of user's query
 */
router.get(
    '/price/:idFuel/:zip',
    [
        check('idFuel').custom(existsIdFuel),
        check('zip').custom(isValidZIP),
        validateFields,
    ],
    getFuelPriceList
);

export default router;
