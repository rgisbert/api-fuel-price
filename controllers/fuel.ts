import { Request, Response } from 'express';

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
