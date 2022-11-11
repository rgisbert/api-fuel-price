import axios, { AxiosInstance } from 'axios';

import { APIFuel } from './abstract';
import { GoogleMaps } from './index';
import { getProvinceCodeFromZip } from '../helpers';
import { IFuel, IFuelPriceByFuelStation } from '../typescript';

// THIS API'S INTERFACES
/**
 * Structure of the Fuel
 */
interface FuelAPI {
    IDProducto: string;
    NombreProducto: string;
    NombreProductoAbreviatura: string;
}

/** Response for price for province */
interface FuelPriceByProvince {
    'C.P.': string;
    Dirección: string;
    Horario: string;
    Latitud: string;
    Localidad: string;
    'Longitud (WGS84)': string;
    Margen: string;
    Municipio: string;
    PrecioProducto: string;
    Provincia: string;
    Remisión: string;
    Rótulo: string;
    'Tipo Venta': string;
    IDEESS: string;
    IDMunicipio: string;
    IDProvincia: string;
    IDCCAA: string;
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

    /**
     * Return a list, ordered by price, with the price and info of the fuel station
     * name, addres and a link to Google Maps
     * @param { string } zip - zip code to get data
     * @param { string } product - id from fuel product
     * @returns
     */
    async getFuelPriceByZip(
        zip = '46000',
        product = '0'
    ): Promise<IFuelPriceByFuelStation[]> {
        try {
            const province = getProvinceCodeFromZip(zip);
            const { data } = await this.#instance.get(
                `/EstacionesTerrestres/FiltroProvinciaProducto/${province}/${product}`
            );

            const {
                ListaEESSPrecio,
            }: { ListaEESSPrecio: FuelPriceByProvince[] } = data;

            const res: IFuelPriceByFuelStation[] = ListaEESSPrecio.filter(
                (item) => item['C.P.'] === zip
            ).map((item) => {
                const urlGoogleMaps = GoogleMaps.getUrlWithCoordinates(
                    item['Latitud'],
                    item['Longitud (WGS84)']
                );
                const resItem: IFuelPriceByFuelStation = {
                    price: item.PrecioProducto,
                    fuelStation: {
                        addres: item['Dirección'],
                        name: item['Rótulo'],
                        urlGoogleMaps,
                    },
                };

                return resItem;
            });

            res.sort((a, b) => (a.price < b.price ? -1 : 1));

            return res;
        } catch (e) {
            return [];
        }
    }
}
