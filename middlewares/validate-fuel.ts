import { Fuel } from '../models';

/**
 * Be sure it is a valid id for fuel
 * @param { string } id - id to check if exists in the API
 */
export const existsIdFuel = async (id: string) => {
    const fuel = new Fuel(id);
    const res = await fuel.checkTypeExists();

    if (!res) {
        return Promise.reject(
            `El combustible ${id} no existe, puede comprobar la lista para asegurarse.`
        );
    }

    Promise.resolve();
};
