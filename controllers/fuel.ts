import { Request, Response } from 'express';

import { completeZipCode } from '../helpers';
import { Fuel } from '../models';

/** Return the list with fuel id and name */
export const getFuelList = async (req: Request, res: Response) => {
    try {
        const data = await Fuel.getTypeList();
        res.json(data);
    } catch (error) {
        res.status(500).json({
            msg: `No se ha podido obtener la lista de combustible`,
            error,
        });
    }
};

/** Get the price list for certain fuel and zip code */
export const getFuelPriceList = async (req: Request, res: Response) => {
    try {
        const { idFuel, zip } = req.params;
        const fullZipCode = completeZipCode(zip);

        const fuel = new Fuel(idFuel);
        const data = await fuel.getIdPriceByZipCode(fullZipCode);

        res.json({ data });
    } catch (error) {
        res.status(500).json({
            msg: `No se ha podido obtener el listado de precios`,
            error,
        });
    }
};
