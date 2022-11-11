import axios, { AxiosInstance } from 'axios';

import { APIFuel } from './abstract';
import { IFuel } from '../typescript';

// THIS API'S INTERFACES
/**
 * Structure of the Fuel
 */
interface FuelAPI {
    IDProducto: string;
    NombreProducto: string;
    NombreProductoAbreviatura: string;
}

/**
 * Class with minetur.gob.es' api
 * site: https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/help
 */
export class APISpanishGovernment implements APIFuel {
    #baseURL =
        'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes';
    #instance: AxiosInstance;

    constructor() {
        this.#instance = axios.create({
            baseURL: this.#baseURL,
        });
    }

    /**
     * Get the list of fuel types available in the API.
     * Ordered by id
     * @returns { IFuel[] } - Array with fuel info
     */
    async getFuelList() {
        try {
            const { data } = await this.#instance.get(
                '/Listados/ProductosPetroliferos/'
            );

            const fuelTypes: IFuel[] = data
                .map((fuel: FuelAPI) => ({
                    id: fuel.IDProducto,
                    name: fuel.NombreProducto,
                }))
                .sort((a: IFuel, b: IFuel) =>
                    Number(a.id) < Number(b.id) ? -1 : 1
                );

            return fuelTypes;
        } catch (e) {
            return [];
        }
    }
}
