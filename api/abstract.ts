import { IFuel, IFuelPriceByFuelStation } from '../typescript';

/**
 * It aim is create an structure to ensure all API Fuel (for the future)
 * have the same structure
 */
export abstract class APIFuel {
    abstract getFuelList(): Promise<IFuel[]>;

    abstract getFuelPriceByZip(
        zip: string,
        product: string
    ): Promise<IFuelPriceByFuelStation[]>;
}
