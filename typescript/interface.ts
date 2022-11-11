/** Types of fuel */
export interface IFuel {
    id: string;
    name: string;
}

/** Fuel price with Fuel Station's info */
export interface IFuelPriceByFuelStation {
    fuelStation: IFuelStation;
    price: string;
}

/** Fuel Station */
export interface IFuelStation {
    addres: string;
    name: string;
    urlGoogleMaps: string;
}
